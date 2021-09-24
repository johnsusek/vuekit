globalThis.ProcessInfo = globalThis.ProcessInfo || {};

globalThis.ProcessInfo.ActivityOptions = {
    IdleDisplaySleepDisabled: 1099511627776,
    IdleSystemSleepDisabled: 1048576,
    SuddenTerminationDisabled: 16384,
    AutomaticTerminationDisabled: 32768,
    UserInitiated: 16777215,
    UserInitiatedAllowingIdleSystemSleep: 15728639,
    Background: 255,
    LatencyCritical: 1095216660480,
    '1099511627776': 'IdleDisplaySleepDisabled',
    '1048576': 'IdleSystemSleepDisabled',
    '16384': 'SuddenTerminationDisabled',
    '32768': 'AutomaticTerminationDisabled',
    '16777215': 'UserInitiated',
    '15728639': 'UserInitiatedAllowingIdleSystemSleep',
    '255': 'Background',
    '1095216660480': 'LatencyCritical'
}

globalThis.AlignmentOptions = globalThis.AlignmentOptions || {};

globalThis.AlignmentOptions = {
    MinXInward: 1,
    MinYInward: 2,
    MaxXInward: 4,
    MaxYInward: 8,
    WidthInward: 16,
    HeightInward: 32,
    MinXOutward: 256,
    MinYOutward: 512,
    MaxXOutward: 1024,
    MaxYOutward: 2048,
    WidthOutward: 4096,
    HeightOutward: 8192,
    MinXNearest: 65536,
    MinYNearest: 131072,
    MaxXNearest: 262144,
    MaxYNearest: 524288,
    WidthNearest: 1048576,
    HeightNearest: 2097152,
    RectFlipped: -9223372036854775808,
    AllEdgesInward: 15,
    AllEdgesOutward: 3840,
    AllEdgesNearest: 983040,
    '1': 'MinXInward',
    '2': 'MinYInward',
    '4': 'MaxXInward',
    '8': 'MaxYInward',
    '16': 'WidthInward',
    '32': 'HeightInward',
    '256': 'MinXOutward',
    '512': 'MinYOutward',
    '1024': 'MaxXOutward',
    '2048': 'MaxYOutward',
    '4096': 'WidthOutward',
    '8192': 'HeightOutward',
    '65536': 'MinXNearest',
    '131072': 'MinYNearest',
    '262144': 'MaxXNearest',
    '524288': 'MaxYNearest',
    '1048576': 'WidthNearest',
    '2097152': 'HeightNearest',
    '-9223372036854775808': 'RectFlipped',
    '15': 'AllEdgesInward',
    '3840': 'AllEdgesOutward',
    '983040': 'AllEdgesNearest'
}

globalThis.NSAppleEventDescriptor = globalThis.NSAppleEventDescriptor || {};

globalThis.NSAppleEventDescriptor.SendOptions = {
    NoReply: 1,
    QueueReply: 2,
    WaitForReply: 3,
    NeverInteract: 16,
    CanInteract: 32,
    AlwaysInteract: 48,
    CanSwitchLayer: 64,
    DontRecord: 4096,
    DontExecute: 8192,
    DontAnnotate: 65536,
    DefaultOptions: 35,
    '1': 'NoReply',
    '2': 'QueueReply',
    '3': 'WaitForReply',
    '16': 'NeverInteract',
    '32': 'CanInteract',
    '48': 'AlwaysInteract',
    '64': 'CanSwitchLayer',
    '4096': 'DontRecord',
    '8192': 'DontExecute',
    '65536': 'DontAnnotate',
    '35': 'DefaultOptions'
}

globalThis.NSAttributedString = globalThis.NSAttributedString || {};

globalThis.NSAttributedString.EnumerationOptions = {
    Reverse: 2,
    LongestEffectiveRangeNotRequired: 1048576,
    '2': 'Reverse',
    '1048576': 'LongestEffectiveRangeNotRequired'
}

globalThis.NSBackgroundActivityScheduler = globalThis.NSBackgroundActivityScheduler || {};

globalThis.NSBackgroundActivityScheduler.Result = {
    Finished: 1,
    Deferred: 2,
    '1': 'Finished',
    '2': 'Deferred'
}

globalThis.NSBinarySearchingOptions = globalThis.NSBinarySearchingOptions || {};

globalThis.NSBinarySearchingOptions = {
    FirstEqual: 256,
    LastEqual: 512,
    InsertionIndex: 1024,
    '256': 'FirstEqual',
    '512': 'LastEqual',
    '1024': 'InsertionIndex'
}

globalThis.ByteCountFormatter = globalThis.ByteCountFormatter || {};

globalThis.ByteCountFormatter.CountStyle = {
    File: 0,
    Memory: 1,
    Decimal: 2,
    Binary: 3,
    '0': 'File',
    '1': 'Memory',
    '2': 'Decimal',
    '3': 'Binary'
}

globalThis.ByteCountFormatter.Units = {
    UseDefault: 0,
    UseBytes: 1,
    UseKB: 2,
    UseMB: 4,
    UseGB: 8,
    UseTB: 16,
    UsePB: 32,
    UseEB: 64,
    UseZB: 128,
    UseYBOrHigher: 65280,
    UseAll: 65535,
    '0': 'UseDefault',
    '1': 'UseBytes',
    '2': 'UseKB',
    '4': 'UseMB',
    '8': 'UseGB',
    '16': 'UseTB',
    '32': 'UsePB',
    '64': 'UseEB',
    '128': 'UseZB',
    '65280': 'UseYBOrHigher',
    '65535': 'UseAll'
}

globalThis.NSDecimalNumber = globalThis.NSDecimalNumber || {};

globalThis.NSDecimalNumber.CalculationError = {
    NoError: 0,
    LossOfPrecision: 1,
    Underflow: 2,
    Overflow: 3,
    DivideByZero: 4,
    '0': 'NoError',
    '1': 'LossOfPrecision',
    '2': 'Underflow',
    '3': 'Overflow',
    '4': 'DivideByZero'
}

globalThis.NSCalendar = globalThis.NSCalendar || {};

globalThis.NSCalendar.Options = {
    WrapComponents: 1,
    MatchStrictly: 2,
    SearchBackwards: 4,
    MatchPreviousTimePreservingSmallerUnits: 256,
    MatchNextTimePreservingSmallerUnits: 512,
    MatchNextTime: 1024,
    MatchFirst: 4096,
    MatchLast: 8192,
    '1': 'WrapComponents',
    '2': 'MatchStrictly',
    '4': 'SearchBackwards',
    '256': 'MatchPreviousTimePreservingSmallerUnits',
    '512': 'MatchNextTimePreservingSmallerUnits',
    '1024': 'MatchNextTime',
    '4096': 'MatchFirst',
    '8192': 'MatchLast'
}

globalThis.NSCalendar.Unit = {
    CalendarUnitEra: 2,
    CalendarUnitYear: 4,
    CalendarUnitMonth: 8,
    CalendarUnitDay: 16,
    CalendarUnitHour: 32,
    CalendarUnitMinute: 64,
    CalendarUnitSecond: 128,
    CalendarUnitWeekday: 512,
    CalendarUnitWeekdayOrdinal: 1024,
    CalendarUnitQuarter: 2048,
    CalendarUnitWeekOfMonth: 4096,
    CalendarUnitWeekOfYear: 8192,
    CalendarUnitYearForWeekOfYear: 16384,
    CalendarUnitNanosecond: 32768,
    CalendarUnitCalendar: 1048576,
    CalendarUnitTimeZone: 2097152,
    EraCalendarUnit: 2,
    YearCalendarUnit: 4,
    MonthCalendarUnit: 8,
    DayCalendarUnit: 16,
    HourCalendarUnit: 32,
    MinuteCalendarUnit: 64,
    SecondCalendarUnit: 128,
    WeekCalendarUnit: 256,
    WeekdayCalendarUnit: 512,
    WeekdayOrdinalCalendarUnit: 1024,
    QuarterCalendarUnit: 2048,
    WeekOfMonthCalendarUnit: 4096,
    WeekOfYearCalendarUnit: 8192,
    YearForWeekOfYearCalendarUnit: 16384,
    CalendarCalendarUnit: 1048576,
    TimeZoneCalendarUnit: 2097152,
    '2': 'CalendarUnitEra',
    '4': 'CalendarUnitYear',
    '8': 'CalendarUnitMonth',
    '16': 'CalendarUnitDay',
    '32': 'CalendarUnitHour',
    '64': 'CalendarUnitMinute',
    '128': 'CalendarUnitSecond',
    '512': 'CalendarUnitWeekday',
    '1024': 'CalendarUnitWeekdayOrdinal',
    '2048': 'CalendarUnitQuarter',
    '4096': 'CalendarUnitWeekOfMonth',
    '8192': 'CalendarUnitWeekOfYear',
    '16384': 'CalendarUnitYearForWeekOfYear',
    '32768': 'CalendarUnitNanosecond',
    '1048576': 'CalendarUnitCalendar',
    '2097152': 'CalendarUnitTimeZone',
    '2': 'EraCalendarUnit',
    '4': 'YearCalendarUnit',
    '8': 'MonthCalendarUnit',
    '16': 'DayCalendarUnit',
    '32': 'HourCalendarUnit',
    '64': 'MinuteCalendarUnit',
    '128': 'SecondCalendarUnit',
    '256': 'WeekCalendarUnit',
    '512': 'WeekdayCalendarUnit',
    '1024': 'WeekdayOrdinalCalendarUnit',
    '2048': 'QuarterCalendarUnit',
    '4096': 'WeekOfMonthCalendarUnit',
    '8192': 'WeekOfYearCalendarUnit',
    '16384': 'YearForWeekOfYearCalendarUnit',
    '1048576': 'CalendarCalendarUnit',
    '2097152': 'TimeZoneCalendarUnit'
}

globalThis.NSCollectionChangeType = globalThis.NSCollectionChangeType || {};

globalThis.NSCollectionChangeType = {
    Insert: 0,
    Remove: 1,
    '0': 'Insert',
    '1': 'Remove'
}

globalThis.NSComparisonPredicate = globalThis.NSComparisonPredicate || {};

globalThis.NSComparisonPredicate.Modifier = {
    DirectPredicateModifier: 0,
    AllPredicateModifier: 1,
    AnyPredicateModifier: 2,
    '0': 'DirectPredicateModifier',
    '1': 'AllPredicateModifier',
    '2': 'AnyPredicateModifier'
}

globalThis.NSComparisonPredicate.Options = {
    CaseInsensitivePredicateOption: 1,
    DiacriticInsensitivePredicateOption: 2,
    NormalizedPredicateOption: 4,
    '1': 'CaseInsensitivePredicateOption',
    '2': 'DiacriticInsensitivePredicateOption',
    '4': 'NormalizedPredicateOption'
}

globalThis.ComparisonResult = globalThis.ComparisonResult || {};

globalThis.ComparisonResult = {
    OrderedAscending: -1,
    OrderedSame: 0,
    OrderedDescending: 1,
    '-1': 'OrderedAscending',
    '0': 'OrderedSame',
    '1': 'OrderedDescending'
}

globalThis.NSCompoundPredicate = globalThis.NSCompoundPredicate || {};

globalThis.NSCompoundPredicate.LogicalType = {
    NotPredicateType: 0,
    AndPredicateType: 1,
    OrPredicateType: 2,
    '0': 'NotPredicateType',
    '1': 'AndPredicateType',
    '2': 'OrPredicateType'
}

globalThis.NSData = globalThis.NSData || {};

globalThis.NSData.Base64DecodingOptions = {
    IgnoreUnknownCharacters: 1,
    '1': 'IgnoreUnknownCharacters'
}

globalThis.NSData.Base64EncodingOptions = {
    Encoding64CharacterLineLength: 1,
    Encoding76CharacterLineLength: 2,
    EncodingEndLineWithCarriageReturn: 16,
    EncodingEndLineWithLineFeed: 32,
    '1': 'Encoding64CharacterLineLength',
    '2': 'Encoding76CharacterLineLength',
    '16': 'EncodingEndLineWithCarriageReturn',
    '32': 'EncodingEndLineWithLineFeed'
}

globalThis.NSData.CompressionAlgorithm = {
    LZFSE: 0,
    LZ4: 1,
    LZMA: 2,
    Zlib: 3,
    '0': 'LZFSE',
    '1': 'LZ4',
    '2': 'LZMA',
    '3': 'Zlib'
}

globalThis.NSData.ReadingOptions = {
    DataReadingMappedIfSafe: 1,
    DataReadingUncached: 2,
    DataReadingMappedAlways: 8,
    DataReadingMapped: 1,
    MappedRead: 1,
    UncachedRead: 2,
    '1': 'DataReadingMappedIfSafe',
    '2': 'DataReadingUncached',
    '8': 'DataReadingMappedAlways',
    '1': 'DataReadingMapped',
    '1': 'MappedRead',
    '2': 'UncachedRead'
}

globalThis.NSData.SearchOptions = {
    Backwards: 1,
    Anchored: 2,
    '1': 'Backwards',
    '2': 'Anchored'
}

globalThis.NSData.WritingOptions = {
    DataWritingAtomic: 1,
    DataWritingWithoutOverwriting: 2,
    DataWritingFileProtectionNone: 268435456,
    DataWritingFileProtectionComplete: 536870912,
    DataWritingFileProtectionCompleteUnlessOpen: 805306368,
    DataWritingFileProtectionCompleteUntilFirstUserAuthentication: 1073741824,
    DataWritingFileProtectionMask: 4026531840,
    AtomicWrite: 1,
    '1': 'DataWritingAtomic',
    '2': 'DataWritingWithoutOverwriting',
    '268435456': 'DataWritingFileProtectionNone',
    '536870912': 'DataWritingFileProtectionComplete',
    '805306368': 'DataWritingFileProtectionCompleteUnlessOpen',
    '1073741824': 'DataWritingFileProtectionCompleteUntilFirstUserAuthentication',
    '4026531840': 'DataWritingFileProtectionMask',
    '1': 'AtomicWrite'
}

globalThis.DateComponentsFormatter = globalThis.DateComponentsFormatter || {};

globalThis.DateComponentsFormatter.UnitsStyle = {
    Positional: 0,
    Abbreviated: 1,
    Short: 2,
    Full: 3,
    SpellOut: 4,
    Brief: 5,
    '0': 'Positional',
    '1': 'Abbreviated',
    '2': 'Short',
    '3': 'Full',
    '4': 'SpellOut',
    '5': 'Brief'
}

globalThis.DateComponentsFormatter.ZeroFormattingBehavior = {
    None: 0,
    Default: 1,
    DropLeading: 2,
    DropMiddle: 4,
    DropTrailing: 8,
    DropAll: 14,
    Pad: 65536,
    '0': 'None',
    '1': 'Default',
    '2': 'DropLeading',
    '4': 'DropMiddle',
    '8': 'DropTrailing',
    '14': 'DropAll',
    '65536': 'Pad'
}

globalThis.DateFormatter = globalThis.DateFormatter || {};

globalThis.DateFormatter.Behavior = {
    BehaviorDefault: 0,
    Behavior10_0: 1000,
    Behavior10_4: 1040,
    '0': 'BehaviorDefault',
    '1000': 'Behavior10_0',
    '1040': 'Behavior10_4'
}

globalThis.DateFormatter.Style = {
    NoStyle: 0,
    ShortStyle: 1,
    MediumStyle: 2,
    LongStyle: 3,
    FullStyle: 4,
    '0': 'NoStyle',
    '1': 'ShortStyle',
    '2': 'MediumStyle',
    '3': 'LongStyle',
    '4': 'FullStyle'
}

globalThis.DateIntervalFormatter = globalThis.DateIntervalFormatter || {};

globalThis.DateIntervalFormatter.Style = {
    NoStyle: 0,
    ShortStyle: 1,
    MediumStyle: 2,
    LongStyle: 3,
    FullStyle: 4,
    '0': 'NoStyle',
    '1': 'ShortStyle',
    '2': 'MediumStyle',
    '3': 'LongStyle',
    '4': 'FullStyle'
}

globalThis.NSCoder = globalThis.NSCoder || {};

globalThis.NSCoder.DecodingFailurePolicy = {
    RaiseException: 0,
    SetErrorAndReturn: 1,
    '0': 'RaiseException',
    '1': 'SetErrorAndReturn'
}

globalThis.FileManager = globalThis.FileManager || {};

globalThis.FileManager.DirectoryEnumerationOptions = {
    SkipsSubdirectoryDescendants: 1,
    SkipsPackageDescendants: 2,
    SkipsHiddenFiles: 4,
    IncludesDirectoriesPostOrder: 8,
    ProducesRelativePathURLs: 16,
    '1': 'SkipsSubdirectoryDescendants',
    '2': 'SkipsPackageDescendants',
    '4': 'SkipsHiddenFiles',
    '8': 'IncludesDirectoriesPostOrder',
    '16': 'ProducesRelativePathURLs'
}

globalThis.DistributedNotificationCenter = globalThis.DistributedNotificationCenter || {};

globalThis.DistributedNotificationCenter.Options = {
    DeliverImmediately: 1,
    PostToAllSessions: 2,
    '1': 'DeliverImmediately',
    '2': 'PostToAllSessions'
}

globalThis.EnergyFormatter = globalThis.EnergyFormatter || {};

globalThis.EnergyFormatter.Unit = {
    Joule: 11,
    Kilojoule: 14,
    Calorie: 1793,
    Kilocalorie: 1794,
    '11': 'Joule',
    '14': 'Kilojoule',
    '1793': 'Calorie',
    '1794': 'Kilocalorie'
}

globalThis.NSEnumerationOptions = globalThis.NSEnumerationOptions || {};

globalThis.NSEnumerationOptions = {
    Concurrent: 1,
    Reverse: 2,
    '1': 'Concurrent',
    '2': 'Reverse'
}

globalThis.NSExpression = globalThis.NSExpression || {};

globalThis.NSExpression.ExpressionType = {
    ConstantValueExpressionType: 0,
    EvaluatedObjectExpressionType: 1,
    VariableExpressionType: 2,
    KeyPathExpressionType: 3,
    FunctionExpressionType: 4,
    UnionSetExpressionType: 5,
    IntersectSetExpressionType: 6,
    MinusSetExpressionType: 7,
    SubqueryExpressionType: 13,
    AggregateExpressionType: 14,
    AnyKeyExpressionType: 15,
    BlockExpressionType: 19,
    ConditionalExpressionType: 20,
    '0': 'ConstantValueExpressionType',
    '1': 'EvaluatedObjectExpressionType',
    '2': 'VariableExpressionType',
    '3': 'KeyPathExpressionType',
    '4': 'FunctionExpressionType',
    '5': 'UnionSetExpressionType',
    '6': 'IntersectSetExpressionType',
    '7': 'MinusSetExpressionType',
    '13': 'SubqueryExpressionType',
    '14': 'AggregateExpressionType',
    '15': 'AnyKeyExpressionType',
    '19': 'BlockExpressionType',
    '20': 'ConditionalExpressionType'
}

globalThis.NSFileCoordinator = globalThis.NSFileCoordinator || {};

globalThis.NSFileCoordinator.ReadingOptions = {
    WithoutChanges: 1,
    ResolvesSymbolicLink: 2,
    ImmediatelyAvailableMetadataOnly: 4,
    ForUploading: 8,
    '1': 'WithoutChanges',
    '2': 'ResolvesSymbolicLink',
    '4': 'ImmediatelyAvailableMetadataOnly',
    '8': 'ForUploading'
}

globalThis.NSFileCoordinator.WritingOptions = {
    ForDeleting: 1,
    ForMoving: 2,
    ForMerging: 4,
    ForReplacing: 8,
    ContentIndependentMetadataOnly: 16,
    '1': 'ForDeleting',
    '2': 'ForMoving',
    '4': 'ForMerging',
    '8': 'ForReplacing',
    '16': 'ContentIndependentMetadataOnly'
}

globalThis.FileManager.ItemReplacementOptions = {
    UsingNewMetadataOnly: 1,
    WithoutDeletingBackupItem: 2,
    '1': 'UsingNewMetadataOnly',
    '2': 'WithoutDeletingBackupItem'
}

globalThis.FileManager.UnmountOptions = {
    AllPartitionsAndEjectDisk: 1,
    WithoutUI: 2,
    '1': 'AllPartitionsAndEjectDisk',
    '2': 'WithoutUI'
}

globalThis.NSFileVersion = globalThis.NSFileVersion || {};

globalThis.NSFileVersion.AddingOptions = {
    ByMoving: 1,
    '1': 'ByMoving'
}

globalThis.NSFileVersion.ReplacingOptions = {
    ByMoving: 1,
    '1': 'ByMoving'
}

globalThis.FileWrapper = globalThis.FileWrapper || {};

globalThis.FileWrapper.ReadingOptions = {
    Immediate: 1,
    WithoutMapping: 2,
    '1': 'Immediate',
    '2': 'WithoutMapping'
}

globalThis.FileWrapper.WritingOptions = {
    Atomic: 1,
    WithNameUpdating: 2,
    '1': 'Atomic',
    '2': 'WithNameUpdating'
}

globalThis.Formatter = globalThis.Formatter || {};

globalThis.Formatter.Context = {
    Unknown: 0,
    Dynamic: 1,
    Standalone: 2,
    ListItem: 3,
    BeginningOfSentence: 4,
    MiddleOfSentence: 5,
    '0': 'Unknown',
    '1': 'Dynamic',
    '2': 'Standalone',
    '3': 'ListItem',
    '4': 'BeginningOfSentence',
    '5': 'MiddleOfSentence'
}

globalThis.Formatter.UnitStyle = {
    Short: 1,
    Medium: 2,
    Long: 3,
    '1': 'Short',
    '2': 'Medium',
    '3': 'Long'
}

globalThis.HTTPCookie = globalThis.HTTPCookie || {};

globalThis.HTTPCookie.AcceptPolicy = {
    Always: 0,
    Never: 1,
    OnlyFromMainDocumentDomain: 2,
    '0': 'Always',
    '1': 'Never',
    '2': 'OnlyFromMainDocumentDomain'
}

globalThis.ISO8601DateFormatter = globalThis.ISO8601DateFormatter || {};

globalThis.ISO8601DateFormatter.Options = {
    WithYear: 1,
    WithMonth: 2,
    WithWeekOfYear: 4,
    WithDay: 16,
    WithTime: 32,
    WithTimeZone: 64,
    WithSpaceBetweenDateAndTime: 128,
    WithDashSeparatorInDate: 256,
    WithColonSeparatorInTime: 512,
    WithColonSeparatorInTimeZone: 1024,
    WithFractionalSeconds: 2048,
    WithFullDate: 275,
    WithFullTime: 1632,
    WithInternetDateTime: 1907,
    '1': 'WithYear',
    '2': 'WithMonth',
    '4': 'WithWeekOfYear',
    '16': 'WithDay',
    '32': 'WithTime',
    '64': 'WithTimeZone',
    '128': 'WithSpaceBetweenDateAndTime',
    '256': 'WithDashSeparatorInDate',
    '512': 'WithColonSeparatorInTime',
    '1024': 'WithColonSeparatorInTimeZone',
    '2048': 'WithFractionalSeconds',
    '275': 'WithFullDate',
    '1632': 'WithFullTime',
    '1907': 'WithInternetDateTime'
}

globalThis.NSPositionalSpecifier = globalThis.NSPositionalSpecifier || {};

globalThis.NSPositionalSpecifier.InsertionPosition = {
    PositionAfter: 0,
    PositionBefore: 1,
    PositionBeginning: 2,
    PositionEnd: 3,
    PositionReplace: 4,
    '0': 'PositionAfter',
    '1': 'PositionBefore',
    '2': 'PositionBeginning',
    '3': 'PositionEnd',
    '4': 'PositionReplace'
}

globalThis.NSItemProvider = globalThis.NSItemProvider || {};

globalThis.NSItemProvider.ErrorCode = {
    UnknownError: -1,
    ItemUnavailableError: -1000,
    UnexpectedValueClassError: -1100,
    UnavailableCoercionError: -1200,
    '-1': 'UnknownError',
    '-1000': 'ItemUnavailableError',
    '-1100': 'UnexpectedValueClassError',
    '-1200': 'UnavailableCoercionError'
}

globalThis.NSItemProviderFileOptions = globalThis.NSItemProviderFileOptions || {};

globalThis.NSItemProviderFileOptions = {
    OpenInPlace: 1,
    '1': 'OpenInPlace'
}

globalThis.NSItemProviderRepresentationVisibility = globalThis.NSItemProviderRepresentationVisibility || {};

globalThis.NSItemProviderRepresentationVisibility = {
    All: 0,
    Team: 1,
    Group: 2,
    OwnProcess: 3,
    '0': 'All',
    '1': 'Team',
    '2': 'Group',
    '3': 'OwnProcess'
}

globalThis.JSONSerialization = globalThis.JSONSerialization || {};

globalThis.JSONSerialization.ReadingOptions = {
    MutableContainers: 1,
    MutableLeaves: 2,
    FragmentsAllowed: 4,
    AllowFragments: 4,
    '1': 'MutableContainers',
    '2': 'MutableLeaves',
    '4': 'FragmentsAllowed',
    '4': 'AllowFragments'
}

globalThis.JSONSerialization.WritingOptions = {
    PrettyPrinted: 1,
    SortedKeys: 2,
    FragmentsAllowed: 4,
    WithoutEscapingSlashes: 8,
    '1': 'PrettyPrinted',
    '2': 'SortedKeys',
    '4': 'FragmentsAllowed',
    '8': 'WithoutEscapingSlashes'
}

globalThis.NSKeyValueChange = globalThis.NSKeyValueChange || {};

globalThis.NSKeyValueChange = {
    Setting: 1,
    Insertion: 2,
    Removal: 3,
    Replacement: 4,
    '1': 'Setting',
    '2': 'Insertion',
    '3': 'Removal',
    '4': 'Replacement'
}

globalThis.NSKeyValueObservingOptions = globalThis.NSKeyValueObservingOptions || {};

globalThis.NSKeyValueObservingOptions = {
    New: 1,
    Old: 2,
    Initial: 4,
    Prior: 8,
    '1': 'New',
    '2': 'Old',
    '4': 'Initial',
    '8': 'Prior'
}

globalThis.NSKeyValueSetMutationKind = globalThis.NSKeyValueSetMutationKind || {};

globalThis.NSKeyValueSetMutationKind = {
    UnionSetMutation: 1,
    MinusSetMutation: 2,
    IntersectSetMutation: 3,
    SetSetMutation: 4,
    '1': 'UnionSetMutation',
    '2': 'MinusSetMutation',
    '3': 'IntersectSetMutation',
    '4': 'SetSetMutation'
}

globalThis.LengthFormatter = globalThis.LengthFormatter || {};

globalThis.LengthFormatter.Unit = {
    Millimeter: 8,
    Centimeter: 9,
    Meter: 11,
    Kilometer: 14,
    Inch: 1281,
    Foot: 1282,
    Yard: 1283,
    Mile: 1284,
    '8': 'Millimeter',
    '9': 'Centimeter',
    '11': 'Meter',
    '14': 'Kilometer',
    '1281': 'Inch',
    '1282': 'Foot',
    '1283': 'Yard',
    '1284': 'Mile'
}

globalThis.NSLinguisticTagger = globalThis.NSLinguisticTagger || {};

globalThis.NSLinguisticTagger.Options = {
    OmitWords: 1,
    OmitPunctuation: 2,
    OmitWhitespace: 4,
    OmitOther: 8,
    JoinNames: 16,
    '1': 'OmitWords',
    '2': 'OmitPunctuation',
    '4': 'OmitWhitespace',
    '8': 'OmitOther',
    '16': 'JoinNames'
}

globalThis.NSLinguisticTaggerUnit = globalThis.NSLinguisticTaggerUnit || {};

globalThis.NSLinguisticTaggerUnit = {
    Word: 0,
    Sentence: 1,
    Paragraph: 2,
    Document: 3,
    '0': 'Word',
    '1': 'Sentence',
    '2': 'Paragraph',
    '3': 'Document'
}

globalThis.NSLocale = globalThis.NSLocale || {};

globalThis.NSLocale.LanguageDirection = {
    Unknown: 0,
    LeftToRight: 1,
    RightToLeft: 2,
    TopToBottom: 3,
    BottomToTop: 4,
    '0': 'Unknown',
    '1': 'LeftToRight',
    '2': 'RightToLeft',
    '3': 'TopToBottom',
    '4': 'BottomToTop'
}

globalThis.NSMachPort = globalThis.NSMachPort || {};

globalThis.NSMachPort.Options = {
    DeallocateNone: 0,
    DeallocateSendRight: 1,
    DeallocateReceiveRight: 2,
    '0': 'DeallocateNone',
    '1': 'DeallocateSendRight',
    '2': 'DeallocateReceiveRight'
}

globalThis.MassFormatter = globalThis.MassFormatter || {};

globalThis.MassFormatter.Unit = {
    Gram: 11,
    Kilogram: 14,
    Ounce: 1537,
    Pound: 1538,
    Stone: 1539,
    '11': 'Gram',
    '14': 'Kilogram',
    '1537': 'Ounce',
    '1538': 'Pound',
    '1539': 'Stone'
}

globalThis.NSRegularExpression = globalThis.NSRegularExpression || {};

globalThis.NSRegularExpression.MatchingFlags = {
    Progress: 1,
    Completed: 2,
    HitEnd: 4,
    RequiredEnd: 8,
    InternalError: 16,
    '1': 'Progress',
    '2': 'Completed',
    '4': 'HitEnd',
    '8': 'RequiredEnd',
    '16': 'InternalError'
}

globalThis.NSRegularExpression.MatchingOptions = {
    ReportProgress: 1,
    ReportCompletion: 2,
    Anchored: 4,
    WithTransparentBounds: 8,
    WithoutAnchoringBounds: 16,
    '1': 'ReportProgress',
    '2': 'ReportCompletion',
    '4': 'Anchored',
    '8': 'WithTransparentBounds',
    '16': 'WithoutAnchoringBounds'
}

globalThis.MeasurementFormatter = globalThis.MeasurementFormatter || {};

globalThis.MeasurementFormatter.UnitOptions = {
    ProvidedUnit: 1,
    NaturalScale: 2,
    TemperatureWithoutUnit: 4,
    '1': 'ProvidedUnit',
    '2': 'NaturalScale',
    '4': 'TemperatureWithoutUnit'
}

globalThis.NSNetService = globalThis.NSNetService || {};

globalThis.NSNetService.Options = {
    NoAutoRename: 1,
    ListenForConnections: 2,
    '1': 'NoAutoRename',
    '2': 'ListenForConnections'
}

globalThis.NSNetService.ErrorCode = {
    UnknownError: -72000,
    CollisionError: -72001,
    NotFoundError: -72002,
    ActivityInProgress: -72003,
    BadArgumentError: -72004,
    CancelledError: -72005,
    InvalidError: -72006,
    TimeoutError: -72007,
    '-72000': 'UnknownError',
    '-72001': 'CollisionError',
    '-72002': 'NotFoundError',
    '-72003': 'ActivityInProgress',
    '-72004': 'BadArgumentError',
    '-72005': 'CancelledError',
    '-72006': 'InvalidError',
    '-72007': 'TimeoutError'
}

globalThis.NotificationQueue = globalThis.NotificationQueue || {};

globalThis.NotificationQueue.NotificationCoalescing = {
    NoCoalescing: 0,
    CoalescingOnName: 1,
    CoalescingOnSender: 2,
    '0': 'NoCoalescing',
    '1': 'CoalescingOnName',
    '2': 'CoalescingOnSender'
}

globalThis.DistributedNotificationCenter.SuspensionBehavior = {
    Drop: 1,
    Coalesce: 2,
    Hold: 3,
    DeliverImmediately: 4,
    '1': 'Drop',
    '2': 'Coalesce',
    '3': 'Hold',
    '4': 'DeliverImmediately'
}

globalThis.NumberFormatter = globalThis.NumberFormatter || {};

globalThis.NumberFormatter.Behavior = {
    BehaviorDefault: 0,
    Behavior10_0: 1000,
    Behavior10_4: 1040,
    '0': 'BehaviorDefault',
    '1000': 'Behavior10_0',
    '1040': 'Behavior10_4'
}

globalThis.NumberFormatter.PadPosition = {
    BeforePrefix: 0,
    AfterPrefix: 1,
    BeforeSuffix: 2,
    AfterSuffix: 3,
    '0': 'BeforePrefix',
    '1': 'AfterPrefix',
    '2': 'BeforeSuffix',
    '3': 'AfterSuffix'
}

globalThis.NumberFormatter.RoundingMode = {
    Ceiling: 0,
    Floor: 1,
    Down: 2,
    Up: 3,
    HalfEven: 4,
    HalfDown: 5,
    HalfUp: 6,
    '0': 'Ceiling',
    '1': 'Floor',
    '2': 'Down',
    '3': 'Up',
    '4': 'HalfEven',
    '5': 'HalfDown',
    '6': 'HalfUp'
}

globalThis.NumberFormatter.Style = {
    NoStyle: 0,
    DecimalStyle: 1,
    CurrencyStyle: 2,
    PercentStyle: 3,
    ScientificStyle: 4,
    SpellOutStyle: 5,
    OrdinalStyle: 6,
    CurrencyISOCodeStyle: 8,
    CurrencyPluralStyle: 9,
    CurrencyAccountingStyle: 10,
    '0': 'NoStyle',
    '1': 'DecimalStyle',
    '2': 'CurrencyStyle',
    '3': 'PercentStyle',
    '4': 'ScientificStyle',
    '5': 'SpellOutStyle',
    '6': 'OrdinalStyle',
    '8': 'CurrencyISOCodeStyle',
    '9': 'CurrencyPluralStyle',
    '10': 'CurrencyAccountingStyle'
}

globalThis.Operation = globalThis.Operation || {};

globalThis.Operation.QueuePriority = {
    VeryLow: -8,
    Low: -4,
    Normal: 0,
    High: 4,
    VeryHigh: 8,
    '-8': 'VeryLow',
    '-4': 'Low',
    '0': 'Normal',
    '4': 'High',
    '8': 'VeryHigh'
}

globalThis.NSOrderedCollectionDifferenceCalculationOptions = globalThis.NSOrderedCollectionDifferenceCalculationOptions || {};

globalThis.NSOrderedCollectionDifferenceCalculationOptions = {
    OmitInsertedObjects: 1,
    OmitRemovedObjects: 2,
    InferMoves: 4,
    '1': 'OmitInsertedObjects',
    '2': 'OmitRemovedObjects',
    '4': 'InferMoves'
}

globalThis.PersonNameComponentsFormatter = globalThis.PersonNameComponentsFormatter || {};

globalThis.PersonNameComponentsFormatter.Options = {
    Phonetic: 2,
    '2': 'Phonetic'
}

globalThis.PersonNameComponentsFormatter.Style = {
    Default: 0,
    Short: 1,
    Medium: 2,
    Long: 3,
    Abbreviated: 4,
    '0': 'Default',
    '1': 'Short',
    '2': 'Medium',
    '3': 'Long',
    '4': 'Abbreviated'
}

globalThis.NSPointerFunctions = globalThis.NSPointerFunctions || {};

globalThis.NSPointerFunctions.Options = {
    StrongMemory: 0,
    ZeroingWeakMemory: 1,
    OpaqueMemory: 2,
    MallocMemory: 3,
    MachVirtualMemory: 4,
    WeakMemory: 5,
    ObjectPersonality: 0,
    OpaquePersonality: 256,
    ObjectPointerPersonality: 512,
    CStringPersonality: 768,
    StructPersonality: 1024,
    IntegerPersonality: 1280,
    CopyIn: 65536,
    '0': 'StrongMemory',
    '1': 'ZeroingWeakMemory',
    '2': 'OpaqueMemory',
    '3': 'MallocMemory',
    '4': 'MachVirtualMemory',
    '5': 'WeakMemory',
    '0': 'ObjectPersonality',
    '256': 'OpaquePersonality',
    '512': 'ObjectPointerPersonality',
    '768': 'CStringPersonality',
    '1024': 'StructPersonality',
    '1280': 'IntegerPersonality',
    '65536': 'CopyIn'
}

globalThis.NotificationQueue.PostingStyle = {
    WhenIdle: 1,
    ASAP: 2,
    Now: 3,
    '1': 'WhenIdle',
    '2': 'ASAP',
    '3': 'Now'
}

globalThis.NSComparisonPredicate.Operator = {
    LessThanPredicateOperatorType: 0,
    LessThanOrEqualToPredicateOperatorType: 1,
    GreaterThanPredicateOperatorType: 2,
    GreaterThanOrEqualToPredicateOperatorType: 3,
    EqualToPredicateOperatorType: 4,
    NotEqualToPredicateOperatorType: 5,
    MatchesPredicateOperatorType: 6,
    LikePredicateOperatorType: 7,
    BeginsWithPredicateOperatorType: 8,
    EndsWithPredicateOperatorType: 9,
    InPredicateOperatorType: 10,
    CustomSelectorPredicateOperatorType: 11,
    ContainsPredicateOperatorType: 99,
    BetweenPredicateOperatorType: 100,
    '0': 'LessThanPredicateOperatorType',
    '1': 'LessThanOrEqualToPredicateOperatorType',
    '2': 'GreaterThanPredicateOperatorType',
    '3': 'GreaterThanOrEqualToPredicateOperatorType',
    '4': 'EqualToPredicateOperatorType',
    '5': 'NotEqualToPredicateOperatorType',
    '6': 'MatchesPredicateOperatorType',
    '7': 'LikePredicateOperatorType',
    '8': 'BeginsWithPredicateOperatorType',
    '9': 'EndsWithPredicateOperatorType',
    '10': 'InPredicateOperatorType',
    '11': 'CustomSelectorPredicateOperatorType',
    '99': 'ContainsPredicateOperatorType',
    '100': 'BetweenPredicateOperatorType'
}

globalThis.ProcessInfo.ThermalState = {
    Nominal: 0,
    Fair: 1,
    Serious: 2,
    Critical: 3,
    '0': 'Nominal',
    '1': 'Fair',
    '2': 'Serious',
    '3': 'Critical'
}

globalThis.PropertyListSerialization = globalThis.PropertyListSerialization || {};

globalThis.PropertyListSerialization.PropertyListFormat = {
    OpenStepFormat: 1,
    XMLFormat_v1_0: 100,
    BinaryFormat_v1_0: 200,
    '1': 'OpenStepFormat',
    '100': 'XMLFormat_v1_0',
    '200': 'BinaryFormat_v1_0'
}

globalThis.PropertyListSerialization.MutabilityOptions = {
    Immutable: 0,
    MutableContainers: 1,
    MutableContainersAndLeaves: 2,
    '0': 'Immutable',
    '1': 'MutableContainers',
    '2': 'MutableContainersAndLeaves'
}

globalThis.QualityOfService = globalThis.QualityOfService || {};

globalThis.QualityOfService = {
    UserInteractive: 33,
    UserInitiated: 25,
    Utility: 17,
    Background: 9,
    Default: -1,
    '33': 'UserInteractive',
    '25': 'UserInitiated',
    '17': 'Utility',
    '9': 'Background',
    '-1': 'Default'
}

globalThis.NSRectEdge = globalThis.NSRectEdge || {};

globalThis.NSRectEdge = {
    RectEdgeMinX: 0,
    RectEdgeMinY: 1,
    RectEdgeMaxX: 2,
    RectEdgeMaxY: 3,
    MinXEdge: 0,
    MinYEdge: 1,
    MaxXEdge: 2,
    MaxYEdge: 3,
    '0': 'RectEdgeMinX',
    '1': 'RectEdgeMinY',
    '2': 'RectEdgeMaxX',
    '3': 'RectEdgeMaxY',
    '0': 'MinXEdge',
    '1': 'MinYEdge',
    '2': 'MaxXEdge',
    '3': 'MaxYEdge'
}

globalThis.NSRegularExpression.Options = {
    CaseInsensitive: 1,
    AllowCommentsAndWhitespace: 2,
    IgnoreMetacharacters: 4,
    DotMatchesLineSeparators: 8,
    AnchorsMatchLines: 16,
    UseUnixLineSeparators: 32,
    UseUnicodeWordBoundaries: 64,
    '1': 'CaseInsensitive',
    '2': 'AllowCommentsAndWhitespace',
    '4': 'IgnoreMetacharacters',
    '8': 'DotMatchesLineSeparators',
    '16': 'AnchorsMatchLines',
    '32': 'UseUnixLineSeparators',
    '64': 'UseUnicodeWordBoundaries'
}

globalThis.RelativeDateTimeFormatter = globalThis.RelativeDateTimeFormatter || {};

globalThis.RelativeDateTimeFormatter.DateTimeStyle = {
    Numeric: 0,
    Named: 1,
    '0': 'Numeric',
    '1': 'Named'
}

globalThis.RelativeDateTimeFormatter.UnitsStyle = {
    Full: 0,
    SpellOut: 1,
    Short: 2,
    Abbreviated: 3,
    '0': 'Full',
    '1': 'SpellOut',
    '2': 'Short',
    '3': 'Abbreviated'
}

globalThis.NSRelativeSpecifier = globalThis.NSRelativeSpecifier || {};

globalThis.NSRelativeSpecifier.RelativePosition = {
    After: 0,
    Before: 1,
    '0': 'After',
    '1': 'Before'
}

globalThis.NSDecimalNumber.RoundingMode = {
    Plain: 0,
    Down: 1,
    Up: 2,
    Bankers: 3,
    '0': 'Plain',
    '1': 'Down',
    '2': 'Up',
    '3': 'Bankers'
}

globalThis.NSSaveOptions = globalThis.NSSaveOptions || {};

globalThis.NSSaveOptions = {
    Yes: 0,
    No: 1,
    Ask: 2,
    '0': 'Yes',
    '1': 'No',
    '2': 'Ask'
}

globalThis.FileManager.SearchPathDirectory = {
    ApplicationDirectory: 1,
    DemoApplicationDirectory: 2,
    DeveloperApplicationDirectory: 3,
    AdminApplicationDirectory: 4,
    LibraryDirectory: 5,
    DeveloperDirectory: 6,
    UserDirectory: 7,
    DocumentationDirectory: 8,
    DocumentDirectory: 9,
    CoreServiceDirectory: 10,
    AutosavedInformationDirectory: 11,
    DesktopDirectory: 12,
    CachesDirectory: 13,
    ApplicationSupportDirectory: 14,
    DownloadsDirectory: 15,
    InputMethodsDirectory: 16,
    MoviesDirectory: 17,
    MusicDirectory: 18,
    PicturesDirectory: 19,
    PrinterDescriptionDirectory: 20,
    SharedPublicDirectory: 21,
    PreferencePanesDirectory: 22,
    ApplicationScriptsDirectory: 23,
    ItemReplacementDirectory: 99,
    AllApplicationsDirectory: 100,
    AllLibrariesDirectory: 101,
    TrashDirectory: 102,
    '1': 'ApplicationDirectory',
    '2': 'DemoApplicationDirectory',
    '3': 'DeveloperApplicationDirectory',
    '4': 'AdminApplicationDirectory',
    '5': 'LibraryDirectory',
    '6': 'DeveloperDirectory',
    '7': 'UserDirectory',
    '8': 'DocumentationDirectory',
    '9': 'DocumentDirectory',
    '10': 'CoreServiceDirectory',
    '11': 'AutosavedInformationDirectory',
    '12': 'DesktopDirectory',
    '13': 'CachesDirectory',
    '14': 'ApplicationSupportDirectory',
    '15': 'DownloadsDirectory',
    '16': 'InputMethodsDirectory',
    '17': 'MoviesDirectory',
    '18': 'MusicDirectory',
    '19': 'PicturesDirectory',
    '20': 'PrinterDescriptionDirectory',
    '21': 'SharedPublicDirectory',
    '22': 'PreferencePanesDirectory',
    '23': 'ApplicationScriptsDirectory',
    '99': 'ItemReplacementDirectory',
    '100': 'AllApplicationsDirectory',
    '101': 'AllLibrariesDirectory',
    '102': 'TrashDirectory'
}

globalThis.FileManager.SearchPathDomainMask = {
    UserDomainMask: 1,
    LocalDomainMask: 2,
    NetworkDomainMask: 4,
    SystemDomainMask: 8,
    AllDomainsMask: 65535,
    '1': 'UserDomainMask',
    '2': 'LocalDomainMask',
    '4': 'NetworkDomainMask',
    '8': 'SystemDomainMask',
    '65535': 'AllDomainsMask'
}

globalThis.NSSortOptions = globalThis.NSSortOptions || {};

globalThis.NSSortOptions = {
    Concurrent: 1,
    Stable: 16,
    '1': 'Concurrent',
    '16': 'Stable'
}

globalThis.Stream = globalThis.Stream || {};

globalThis.Stream.Event = {
    None: 0,
    OpenCompleted: 1,
    HasBytesAvailable: 2,
    HasSpaceAvailable: 4,
    ErrorOccurred: 8,
    EndEncountered: 16,
    '0': 'None',
    '1': 'OpenCompleted',
    '2': 'HasBytesAvailable',
    '4': 'HasSpaceAvailable',
    '8': 'ErrorOccurred',
    '16': 'EndEncountered'
}

globalThis.Stream.Status = {
    NotOpen: 0,
    Opening: 1,
    Open: 2,
    Reading: 3,
    Writing: 4,
    AtEnd: 5,
    Closed: 6,
    Error: 7,
    '0': 'NotOpen',
    '1': 'Opening',
    '2': 'Open',
    '3': 'Reading',
    '4': 'Writing',
    '5': 'AtEnd',
    '6': 'Closed',
    '7': 'Error'
}

globalThis.NSString = globalThis.NSString || {};

globalThis.NSString.CompareOptions = {
    CaseInsensitiveSearch: 1,
    LiteralSearch: 2,
    BackwardsSearch: 4,
    AnchoredSearch: 8,
    NumericSearch: 64,
    DiacriticInsensitiveSearch: 128,
    WidthInsensitiveSearch: 256,
    ForcedOrderingSearch: 512,
    RegularExpressionSearch: 1024,
    '1': 'CaseInsensitiveSearch',
    '2': 'LiteralSearch',
    '4': 'BackwardsSearch',
    '8': 'AnchoredSearch',
    '64': 'NumericSearch',
    '128': 'DiacriticInsensitiveSearch',
    '256': 'WidthInsensitiveSearch',
    '512': 'ForcedOrderingSearch',
    '1024': 'RegularExpressionSearch'
}

globalThis.NSString.EncodingConversionOptions = {
    AllowLossy: 1,
    ExternalRepresentation: 2,
    '1': 'AllowLossy',
    '2': 'ExternalRepresentation'
}

globalThis.NSString.EnumerationOptions = {
    ByLines: 0,
    ByParagraphs: 1,
    ByComposedCharacterSequences: 2,
    ByWords: 3,
    BySentences: 4,
    Reverse: 256,
    SubstringNotRequired: 512,
    Localized: 1024,
    '0': 'ByLines',
    '1': 'ByParagraphs',
    '2': 'ByComposedCharacterSequences',
    '3': 'ByWords',
    '4': 'BySentences',
    '256': 'Reverse',
    '512': 'SubstringNotRequired',
    '1024': 'Localized'
}

globalThis.Process = globalThis.Process || {};

globalThis.Process.TerminationReason = {
    Exit: 1,
    UncaughtSignal: 2,
    '1': 'Exit',
    '2': 'UncaughtSignal'
}

globalThis.NSSpecifierTest = globalThis.NSSpecifierTest || {};

globalThis.NSSpecifierTest.TestComparisonOperation = {
    EqualToComparison: 0,
    LessThanOrEqualToComparison: 1,
    LessThanComparison: 2,
    GreaterThanOrEqualToComparison: 3,
    GreaterThanComparison: 4,
    BeginsWithComparison: 5,
    EndsWithComparison: 6,
    ContainsComparison: 7,
    '0': 'EqualToComparison',
    '1': 'LessThanOrEqualToComparison',
    '2': 'LessThanComparison',
    '3': 'GreaterThanOrEqualToComparison',
    '4': 'GreaterThanComparison',
    '5': 'BeginsWithComparison',
    '6': 'EndsWithComparison',
    '7': 'ContainsComparison'
}

globalThis.NSTextCheckingResult = globalThis.NSTextCheckingResult || {};

globalThis.NSTextCheckingResult.CheckingType = {
    Orthography: 1,
    Spelling: 2,
    Grammar: 4,
    Date: 8,
    Address: 16,
    Link: 32,
    Quote: 64,
    Dash: 128,
    Replacement: 256,
    Correction: 512,
    RegularExpression: 1024,
    PhoneNumber: 2048,
    TransitInformation: 4096,
    '1': 'Orthography',
    '2': 'Spelling',
    '4': 'Grammar',
    '8': 'Date',
    '16': 'Address',
    '32': 'Link',
    '64': 'Quote',
    '128': 'Dash',
    '256': 'Replacement',
    '512': 'Correction',
    '1024': 'RegularExpression',
    '2048': 'PhoneNumber',
    '4096': 'TransitInformation'
}

globalThis.NSTimeZone = globalThis.NSTimeZone || {};

globalThis.NSTimeZone.NameStyle = {
    Standard: 0,
    ShortStandard: 1,
    DaylightSaving: 2,
    ShortDaylightSaving: 3,
    Generic: 4,
    ShortGeneric: 5,
    '0': 'Standard',
    '1': 'ShortStandard',
    '2': 'DaylightSaving',
    '3': 'ShortDaylightSaving',
    '4': 'Generic',
    '5': 'ShortGeneric'
}

globalThis.NSURL = globalThis.NSURL || {};

globalThis.NSURL.BookmarkCreationOptions = {
    PreferFileIDResolution: 256,
    MinimalBookmark: 512,
    SuitableForBookmarkFile: 1024,
    WithSecurityScope: 2048,
    SecurityScopeAllowOnlyReadAccess: 4096,
    '256': 'PreferFileIDResolution',
    '512': 'MinimalBookmark',
    '1024': 'SuitableForBookmarkFile',
    '2048': 'WithSecurityScope',
    '4096': 'SecurityScopeAllowOnlyReadAccess'
}

globalThis.NSURL.BookmarkResolutionOptions = {
    WithoutUI: 256,
    WithoutMounting: 512,
    WithSecurityScope: 1024,
    '256': 'WithoutUI',
    '512': 'WithoutMounting',
    '1024': 'WithSecurityScope'
}

globalThis.URLCache = globalThis.URLCache || {};

globalThis.URLCache.StoragePolicy = {
    Allowed: 0,
    AllowedInMemoryOnly: 1,
    NotAllowed: 2,
    '0': 'Allowed',
    '1': 'AllowedInMemoryOnly',
    '2': 'NotAllowed'
}

globalThis.URLCredential = globalThis.URLCredential || {};

globalThis.URLCredential.Persistence = {
    None: 0,
    ForSession: 1,
    Permanent: 2,
    Synchronizable: 3,
    '0': 'None',
    '1': 'ForSession',
    '2': 'Permanent',
    '3': 'Synchronizable'
}

globalThis.NSURLErrorNetworkUnavailableReason = globalThis.NSURLErrorNetworkUnavailableReason || {};

globalThis.NSURLErrorNetworkUnavailableReason = {
    Cellular: 0,
    Expensive: 1,
    Constrained: 2,
    '0': 'Cellular',
    '1': 'Expensive',
    '2': 'Constrained'
}

globalThis.NSURLHandle = globalThis.NSURLHandle || {};

globalThis.NSURLHandle.Status = {
    NotLoaded: 0,
    LoadSucceeded: 1,
    LoadInProgress: 2,
    LoadFailed: 3,
    '0': 'NotLoaded',
    '1': 'LoadSucceeded',
    '2': 'LoadInProgress',
    '3': 'LoadFailed'
}

globalThis.FileManager.URLRelationship = {
    Contains: 0,
    Same: 1,
    Other: 2,
    '0': 'Contains',
    '1': 'Same',
    '2': 'Other'
}

globalThis.NSURLRequest = globalThis.NSURLRequest || {};

globalThis.NSURLRequest.CachePolicy = {
    UseProtocolCachePolicy: 0,
    ReloadIgnoringLocalCacheData: 1,
    ReloadIgnoringLocalAndRemoteCacheData: 4,
    ReloadIgnoringCacheData: 1,
    ReturnCacheDataElseLoad: 2,
    ReturnCacheDataDontLoad: 3,
    ReloadRevalidatingCacheData: 5,
    '0': 'UseProtocolCachePolicy',
    '1': 'ReloadIgnoringLocalCacheData',
    '4': 'ReloadIgnoringLocalAndRemoteCacheData',
    '1': 'ReloadIgnoringCacheData',
    '2': 'ReturnCacheDataElseLoad',
    '3': 'ReturnCacheDataDontLoad',
    '5': 'ReloadRevalidatingCacheData'
}

globalThis.NSURLRequest.NetworkServiceType = {
    NetworkServiceTypeDefault: 0,
    NetworkServiceTypeVoIP: 1,
    NetworkServiceTypeVideo: 2,
    NetworkServiceTypeBackground: 3,
    NetworkServiceTypeVoice: 4,
    NetworkServiceTypeResponsiveData: 6,
    NetworkServiceTypeAVStreaming: 8,
    NetworkServiceTypeResponsiveAV: 9,
    NetworkServiceTypeCallSignaling: 11,
    '0': 'NetworkServiceTypeDefault',
    '1': 'NetworkServiceTypeVoIP',
    '2': 'NetworkServiceTypeVideo',
    '3': 'NetworkServiceTypeBackground',
    '4': 'NetworkServiceTypeVoice',
    '6': 'NetworkServiceTypeResponsiveData',
    '8': 'NetworkServiceTypeAVStreaming',
    '9': 'NetworkServiceTypeResponsiveAV',
    '11': 'NetworkServiceTypeCallSignaling'
}

globalThis.URLSession = globalThis.URLSession || {};

globalThis.URLSession.AuthChallengeDisposition = {
    UseCredential: 0,
    PerformDefaultHandling: 1,
    CancelAuthenticationChallenge: 2,
    RejectProtectionSpace: 3,
    '0': 'UseCredential',
    '1': 'PerformDefaultHandling',
    '2': 'CancelAuthenticationChallenge',
    '3': 'RejectProtectionSpace'
}

globalThis.NSURLSessionDelayedRequestDisposition = globalThis.NSURLSessionDelayedRequestDisposition || {};

globalThis.NSURLSessionDelayedRequestDisposition = {
    ContinueLoading: 0,
    UseNewRequest: 1,
    Cancel: 2,
    '0': 'ContinueLoading',
    '1': 'UseNewRequest',
    '2': 'Cancel'
}

globalThis.URLSession.ResponseDisposition = {
    Cancel: 0,
    Allow: 1,
    BecomeDownload: 2,
    BecomeStream: 3,
    '0': 'Cancel',
    '1': 'Allow',
    '2': 'BecomeDownload',
    '3': 'BecomeStream'
}

globalThis.URLSessionTaskMetrics = globalThis.URLSessionTaskMetrics || {};

globalThis.URLSessionTaskMetrics.ResourceFetchType = {
    Unknown: 0,
    NetworkLoad: 1,
    ServerPush: 2,
    LocalCache: 3,
    '0': 'Unknown',
    '1': 'NetworkLoad',
    '2': 'ServerPush',
    '3': 'LocalCache'
}

globalThis.URLSessionTask = globalThis.URLSessionTask || {};

globalThis.URLSessionTask.State = {
    Running: 0,
    Suspended: 1,
    Canceling: 2,
    Completed: 3,
    '0': 'Running',
    '1': 'Suspended',
    '2': 'Canceling',
    '3': 'Completed'
}

globalThis.URLSessionWebSocketTask = globalThis.URLSessionWebSocketTask || {};

globalThis.URLSessionWebSocketTask.CloseCode = {
    Invalid: 0,
    NormalClosure: 1000,
    GoingAway: 1001,
    ProtocolError: 1002,
    UnsupportedData: 1003,
    NoStatusReceived: 1005,
    AbnormalClosure: 1006,
    InvalidFramePayloadData: 1007,
    PolicyViolation: 1008,
    MessageTooBig: 1009,
    MandatoryExtensionMissing: 1010,
    InternalServerError: 1011,
    TLSHandshakeFailure: 1015,
    '0': 'Invalid',
    '1000': 'NormalClosure',
    '1001': 'GoingAway',
    '1002': 'ProtocolError',
    '1003': 'UnsupportedData',
    '1005': 'NoStatusReceived',
    '1006': 'AbnormalClosure',
    '1007': 'InvalidFramePayloadData',
    '1008': 'PolicyViolation',
    '1009': 'MessageTooBig',
    '1010': 'MandatoryExtensionMissing',
    '1011': 'InternalServerError',
    '1015': 'TLSHandshakeFailure'
}

globalThis.NSURLSessionWebSocketMessageType = globalThis.NSURLSessionWebSocketMessageType || {};

globalThis.NSURLSessionWebSocketMessageType = {
    Data: 0,
    String: 1,
    '0': 'Data',
    '1': 'String'
}

globalThis.NSUserNotification = globalThis.NSUserNotification || {};

globalThis.NSUserNotification.ActivationType = {
    None: 0,
    ContentsClicked: 1,
    ActionButtonClicked: 2,
    Replied: 3,
    AdditionalActionClicked: 4,
    '0': 'None',
    '1': 'ContentsClicked',
    '2': 'ActionButtonClicked',
    '3': 'Replied',
    '4': 'AdditionalActionClicked'
}

globalThis.FileManager.VolumeEnumerationOptions = {
    SkipHiddenVolumes: 2,
    ProduceFileReferenceURLs: 4,
    '2': 'SkipHiddenVolumes',
    '4': 'ProduceFileReferenceURLs'
}

globalThis.NSWhoseSpecifier = globalThis.NSWhoseSpecifier || {};

globalThis.NSWhoseSpecifier.SubelementIdentifier = {
    IndexSubelement: 0,
    EverySubelement: 1,
    MiddleSubelement: 2,
    RandomSubelement: 3,
    NoSubelement: 4,
    '0': 'IndexSubelement',
    '1': 'EverySubelement',
    '2': 'MiddleSubelement',
    '3': 'RandomSubelement',
    '4': 'NoSubelement'
}

globalThis.XMLDTDNode = globalThis.XMLDTDNode || {};

globalThis.XMLDTDNode.DTDKind = {
    EntityGeneralKind: 1,
    EntityParsedKind: 2,
    EntityUnparsedKind: 3,
    EntityParameterKind: 4,
    EntityPredefined: 5,
    AttributeCDATAKind: 6,
    AttributeIDKind: 7,
    AttributeIDRefKind: 8,
    AttributeIDRefsKind: 9,
    AttributeEntityKind: 10,
    AttributeEntitiesKind: 11,
    AttributeNMTokenKind: 12,
    AttributeNMTokensKind: 13,
    AttributeEnumerationKind: 14,
    AttributeNotationKind: 15,
    ElementDeclarationUndefinedKind: 16,
    ElementDeclarationEmptyKind: 17,
    ElementDeclarationAnyKind: 18,
    ElementDeclarationMixedKind: 19,
    ElementDeclarationElementKind: 20,
    '1': 'EntityGeneralKind',
    '2': 'EntityParsedKind',
    '3': 'EntityUnparsedKind',
    '4': 'EntityParameterKind',
    '5': 'EntityPredefined',
    '6': 'AttributeCDATAKind',
    '7': 'AttributeIDKind',
    '8': 'AttributeIDRefKind',
    '9': 'AttributeIDRefsKind',
    '10': 'AttributeEntityKind',
    '11': 'AttributeEntitiesKind',
    '12': 'AttributeNMTokenKind',
    '13': 'AttributeNMTokensKind',
    '14': 'AttributeEnumerationKind',
    '15': 'AttributeNotationKind',
    '16': 'ElementDeclarationUndefinedKind',
    '17': 'ElementDeclarationEmptyKind',
    '18': 'ElementDeclarationAnyKind',
    '19': 'ElementDeclarationMixedKind',
    '20': 'ElementDeclarationElementKind'
}

globalThis.XMLDocument = globalThis.XMLDocument || {};

globalThis.XMLDocument.ContentKind = {
    XMLKind: 0,
    XHTMLKind: 1,
    HTMLKind: 2,
    TextKind: 3,
    '0': 'XMLKind',
    '1': 'XHTMLKind',
    '2': 'HTMLKind',
    '3': 'TextKind'
}

globalThis.XMLNode = globalThis.XMLNode || {};

globalThis.XMLNode.Kind = {
    InvalidKind: 0,
    DocumentKind: 1,
    ElementKind: 2,
    AttributeKind: 3,
    NamespaceKind: 4,
    ProcessingInstructionKind: 5,
    CommentKind: 6,
    TextKind: 7,
    DTDKind: 8,
    EntityDeclarationKind: 9,
    AttributeDeclarationKind: 10,
    ElementDeclarationKind: 11,
    NotationDeclarationKind: 12,
    '0': 'InvalidKind',
    '1': 'DocumentKind',
    '2': 'ElementKind',
    '3': 'AttributeKind',
    '4': 'NamespaceKind',
    '5': 'ProcessingInstructionKind',
    '6': 'CommentKind',
    '7': 'TextKind',
    '8': 'DTDKind',
    '9': 'EntityDeclarationKind',
    '10': 'AttributeDeclarationKind',
    '11': 'ElementDeclarationKind',
    '12': 'NotationDeclarationKind'
}

globalThis.XMLNode.Options = {
    NodeOptionsNone: 0,
    NodeIsCDATA: 1,
    NodeExpandEmptyElement: 2,
    NodeCompactEmptyElement: 4,
    NodeUseSingleQuotes: 8,
    NodeUseDoubleQuotes: 16,
    NodeNeverEscapeContents: 32,
    DocumentTidyHTML: 512,
    DocumentTidyXML: 1024,
    DocumentValidate: 8192,
    NodeLoadExternalEntitiesAlways: 16384,
    NodeLoadExternalEntitiesSameOriginOnly: 32768,
    NodeLoadExternalEntitiesNever: 524288,
    DocumentXInclude: 65536,
    NodePrettyPrint: 131072,
    DocumentIncludeContentTypeDeclaration: 262144,
    NodePreserveNamespaceOrder: 1048576,
    NodePreserveAttributeOrder: 2097152,
    NodePreserveEntities: 4194304,
    NodePreservePrefixes: 8388608,
    NodePreserveCDATA: 16777216,
    NodePreserveWhitespace: 33554432,
    NodePreserveDTD: 67108864,
    NodePreserveCharacterReferences: 134217728,
    NodePromoteSignificantWhitespace: 268435456,
    NodePreserveEmptyElements: 6,
    NodePreserveQuotes: 24,
    NodePreserveAll: 4293918750,
    '0': 'NodeOptionsNone',
    '1': 'NodeIsCDATA',
    '2': 'NodeExpandEmptyElement',
    '4': 'NodeCompactEmptyElement',
    '8': 'NodeUseSingleQuotes',
    '16': 'NodeUseDoubleQuotes',
    '32': 'NodeNeverEscapeContents',
    '512': 'DocumentTidyHTML',
    '1024': 'DocumentTidyXML',
    '8192': 'DocumentValidate',
    '16384': 'NodeLoadExternalEntitiesAlways',
    '32768': 'NodeLoadExternalEntitiesSameOriginOnly',
    '524288': 'NodeLoadExternalEntitiesNever',
    '65536': 'DocumentXInclude',
    '131072': 'NodePrettyPrint',
    '262144': 'DocumentIncludeContentTypeDeclaration',
    '1048576': 'NodePreserveNamespaceOrder',
    '2097152': 'NodePreserveAttributeOrder',
    '4194304': 'NodePreserveEntities',
    '8388608': 'NodePreservePrefixes',
    '16777216': 'NodePreserveCDATA',
    '33554432': 'NodePreserveWhitespace',
    '67108864': 'NodePreserveDTD',
    '134217728': 'NodePreserveCharacterReferences',
    '268435456': 'NodePromoteSignificantWhitespace',
    '6': 'NodePreserveEmptyElements',
    '24': 'NodePreserveQuotes',
    '4293918750': 'NodePreserveAll'
}

globalThis.XMLParser = globalThis.XMLParser || {};

globalThis.XMLParser.ErrorCode = {
    InternalError: 1,
    OutOfMemoryError: 2,
    DocumentStartError: 3,
    EmptyDocumentError: 4,
    PrematureDocumentEndError: 5,
    InvalidHexCharacterRefError: 6,
    InvalidDecimalCharacterRefError: 7,
    InvalidCharacterRefError: 8,
    InvalidCharacterError: 9,
    CharacterRefAtEOFError: 10,
    CharacterRefInPrologError: 11,
    CharacterRefInEpilogError: 12,
    CharacterRefInDTDError: 13,
    EntityRefAtEOFError: 14,
    EntityRefInPrologError: 15,
    EntityRefInEpilogError: 16,
    EntityRefInDTDError: 17,
    ParsedEntityRefAtEOFError: 18,
    ParsedEntityRefInPrologError: 19,
    ParsedEntityRefInEpilogError: 20,
    ParsedEntityRefInInternalSubsetError: 21,
    EntityReferenceWithoutNameError: 22,
    EntityReferenceMissingSemiError: 23,
    ParsedEntityRefNoNameError: 24,
    ParsedEntityRefMissingSemiError: 25,
    UndeclaredEntityError: 26,
    UnparsedEntityError: 28,
    EntityIsExternalError: 29,
    EntityIsParameterError: 30,
    UnknownEncodingError: 31,
    EncodingNotSupportedError: 32,
    StringNotStartedError: 33,
    StringNotClosedError: 34,
    NamespaceDeclarationError: 35,
    EntityNotStartedError: 36,
    EntityNotFinishedError: 37,
    LessThanSymbolInAttributeError: 38,
    AttributeNotStartedError: 39,
    AttributeNotFinishedError: 40,
    AttributeHasNoValueError: 41,
    AttributeRedefinedError: 42,
    LiteralNotStartedError: 43,
    LiteralNotFinishedError: 44,
    CommentNotFinishedError: 45,
    ProcessingInstructionNotStartedError: 46,
    ProcessingInstructionNotFinishedError: 47,
    NotationNotStartedError: 48,
    NotationNotFinishedError: 49,
    AttributeListNotStartedError: 50,
    AttributeListNotFinishedError: 51,
    MixedContentDeclNotStartedError: 52,
    MixedContentDeclNotFinishedError: 53,
    ElementContentDeclNotStartedError: 54,
    ElementContentDeclNotFinishedError: 55,
    XMLDeclNotStartedError: 56,
    XMLDeclNotFinishedError: 57,
    ConditionalSectionNotStartedError: 58,
    ConditionalSectionNotFinishedError: 59,
    ExternalSubsetNotFinishedError: 60,
    DOCTYPEDeclNotFinishedError: 61,
    MisplacedCDATAEndStringError: 62,
    CDATANotFinishedError: 63,
    MisplacedXMLDeclarationError: 64,
    SpaceRequiredError: 65,
    SeparatorRequiredError: 66,
    NMTOKENRequiredError: 67,
    NAMERequiredError: 68,
    PCDATARequiredError: 69,
    URIRequiredError: 70,
    PublicIdentifierRequiredError: 71,
    LTRequiredError: 72,
    GTRequiredError: 73,
    LTSlashRequiredError: 74,
    EqualExpectedError: 75,
    TagNameMismatchError: 76,
    UnfinishedTagError: 77,
    StandaloneValueError: 78,
    InvalidEncodingNameError: 79,
    CommentContainsDoubleHyphenError: 80,
    InvalidEncodingError: 81,
    ExternalStandaloneEntityError: 82,
    InvalidConditionalSectionError: 83,
    EntityValueRequiredError: 84,
    NotWellBalancedError: 85,
    ExtraContentError: 86,
    InvalidCharacterInEntityError: 87,
    ParsedEntityRefInInternalError: 88,
    EntityRefLoopError: 89,
    EntityBoundaryError: 90,
    InvalidURIError: 91,
    URIFragmentError: 92,
    NoDTDError: 94,
    DelegateAbortedParseError: 512,
    '1': 'InternalError',
    '2': 'OutOfMemoryError',
    '3': 'DocumentStartError',
    '4': 'EmptyDocumentError',
    '5': 'PrematureDocumentEndError',
    '6': 'InvalidHexCharacterRefError',
    '7': 'InvalidDecimalCharacterRefError',
    '8': 'InvalidCharacterRefError',
    '9': 'InvalidCharacterError',
    '10': 'CharacterRefAtEOFError',
    '11': 'CharacterRefInPrologError',
    '12': 'CharacterRefInEpilogError',
    '13': 'CharacterRefInDTDError',
    '14': 'EntityRefAtEOFError',
    '15': 'EntityRefInPrologError',
    '16': 'EntityRefInEpilogError',
    '17': 'EntityRefInDTDError',
    '18': 'ParsedEntityRefAtEOFError',
    '19': 'ParsedEntityRefInPrologError',
    '20': 'ParsedEntityRefInEpilogError',
    '21': 'ParsedEntityRefInInternalSubsetError',
    '22': 'EntityReferenceWithoutNameError',
    '23': 'EntityReferenceMissingSemiError',
    '24': 'ParsedEntityRefNoNameError',
    '25': 'ParsedEntityRefMissingSemiError',
    '26': 'UndeclaredEntityError',
    '28': 'UnparsedEntityError',
    '29': 'EntityIsExternalError',
    '30': 'EntityIsParameterError',
    '31': 'UnknownEncodingError',
    '32': 'EncodingNotSupportedError',
    '33': 'StringNotStartedError',
    '34': 'StringNotClosedError',
    '35': 'NamespaceDeclarationError',
    '36': 'EntityNotStartedError',
    '37': 'EntityNotFinishedError',
    '38': 'LessThanSymbolInAttributeError',
    '39': 'AttributeNotStartedError',
    '40': 'AttributeNotFinishedError',
    '41': 'AttributeHasNoValueError',
    '42': 'AttributeRedefinedError',
    '43': 'LiteralNotStartedError',
    '44': 'LiteralNotFinishedError',
    '45': 'CommentNotFinishedError',
    '46': 'ProcessingInstructionNotStartedError',
    '47': 'ProcessingInstructionNotFinishedError',
    '48': 'NotationNotStartedError',
    '49': 'NotationNotFinishedError',
    '50': 'AttributeListNotStartedError',
    '51': 'AttributeListNotFinishedError',
    '52': 'MixedContentDeclNotStartedError',
    '53': 'MixedContentDeclNotFinishedError',
    '54': 'ElementContentDeclNotStartedError',
    '55': 'ElementContentDeclNotFinishedError',
    '56': 'XMLDeclNotStartedError',
    '57': 'XMLDeclNotFinishedError',
    '58': 'ConditionalSectionNotStartedError',
    '59': 'ConditionalSectionNotFinishedError',
    '60': 'ExternalSubsetNotFinishedError',
    '61': 'DOCTYPEDeclNotFinishedError',
    '62': 'MisplacedCDATAEndStringError',
    '63': 'CDATANotFinishedError',
    '64': 'MisplacedXMLDeclarationError',
    '65': 'SpaceRequiredError',
    '66': 'SeparatorRequiredError',
    '67': 'NMTOKENRequiredError',
    '68': 'NAMERequiredError',
    '69': 'PCDATARequiredError',
    '70': 'URIRequiredError',
    '71': 'PublicIdentifierRequiredError',
    '72': 'LTRequiredError',
    '73': 'GTRequiredError',
    '74': 'LTSlashRequiredError',
    '75': 'EqualExpectedError',
    '76': 'TagNameMismatchError',
    '77': 'UnfinishedTagError',
    '78': 'StandaloneValueError',
    '79': 'InvalidEncodingNameError',
    '80': 'CommentContainsDoubleHyphenError',
    '81': 'InvalidEncodingError',
    '82': 'ExternalStandaloneEntityError',
    '83': 'InvalidConditionalSectionError',
    '84': 'EntityValueRequiredError',
    '85': 'NotWellBalancedError',
    '86': 'ExtraContentError',
    '87': 'InvalidCharacterInEntityError',
    '88': 'ParsedEntityRefInInternalError',
    '89': 'EntityRefLoopError',
    '90': 'EntityBoundaryError',
    '91': 'InvalidURIError',
    '92': 'URIFragmentError',
    '94': 'NoDTDError',
    '512': 'DelegateAbortedParseError'
}

globalThis.XMLParser.ExternalEntityResolvingPolicy = {
    ResolveExternalEntitiesNever: 0,
    ResolveExternalEntitiesNoNetwork: 1,
    ResolveExternalEntitiesSameOriginOnly: 2,
    ResolveExternalEntitiesAlways: 3,
    '0': 'ResolveExternalEntitiesNever',
    '1': 'ResolveExternalEntitiesNoNetwork',
    '2': 'ResolveExternalEntitiesSameOriginOnly',
    '3': 'ResolveExternalEntitiesAlways'
}

globalThis.NSXPCConnection = globalThis.NSXPCConnection || {};

globalThis.NSXPCConnection.Options = {
    Privileged: 4096,
    '4096': 'Privileged'
}


declare const NSASCIIStringEncoding: number;
declare class NSAffineTransform extends NSObject implements NSCopying, NSSecureCoding {
  transformStruct: NSAffineTransformStruct;
  setTransformStruct(_: NSAffineTransformStruct)
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  appendTransform(_: AffineTransform): void;
  concat(): void;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createTransform(transform: AffineTransform): this;
  invert(): void;
  prependTransform(_: AffineTransform): void;
  rotateByDegrees(byDegrees: number): void;
  rotateByRadians(byRadians: number): void;
  scaleBy(by: number): void;
  scaleXByYBy(by: number, yBy: number): void;
  set(): void;
  transformBezierPath(_: NSBezierPath): NSBezierPath;
  transformPoint(_: NSPoint): NSPoint;
  transformSize(_: NSSize): NSSize;
  translateXByYBy(by: number, yBy: number): void;
}

interface NSAffineTransformStruct {
  m11: number;
  m12: number;
  m21: number;
  m22: number;
  tX: number;
  tY: number;
}

declare var NSAffineTransformStruct: NSAffineTransformStruct;

declare function NSAllHashTableObjects(table: NSHashTable<any>): NSArray<any>;
declare function NSAllMapTableKeys(table: NSMapTable<any, any>): NSArray<any>;
declare function NSAllMapTableValues(table: NSMapTable<any, any>): NSArray<any>;
declare function NSAllocateMemoryPages(bytes: number): any;
declare function NSAllocateObject(aClass: typeof NSObject, extraBytes: number, zone: any): any;
declare class NSAppleEventDescriptor extends NSObject implements NSCopying, NSSecureCoding {
  static appleEventWithEventClassEventIDTargetDescriptorReturnIDTransactionID(withEventClass: number, eventID: number, targetDescriptor?: NSAppleEventDescriptor, returnID: number, transactionID: number): NSAppleEventDescriptor;
  static currentProcessDescriptor(): NSAppleEventDescriptor;
  static listDescriptor(): NSAppleEventDescriptor;
  static nullDescriptor(): NSAppleEventDescriptor;
  static recordDescriptor(): NSAppleEventDescriptor;
  readonly aeDesc: AEDesc;
  readonly booleanValue: boolean;
  readonly data: Data;
  readonly dateValue: Date;
  readonly descriptorType: number;
  readonly doubleValue: number;
  readonly enumCodeValue: number;
  readonly eventClass: number;
  readonly eventID: number;
  readonly fileURLValue: NSURL;
  readonly int32Value: number;
  readonly isRecordDescriptor: boolean;
  readonly numberOfItems: number;
  readonly returnID: number;
  readonly stringValue: string;
  readonly transactionID: number;
  readonly typeCodeValue: number;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  attributeDescriptorForKeyword(forKeyword: number): NSAppleEventDescriptor;
  coerceToDescriptorType(toDescriptorType: number): NSAppleEventDescriptor;
  descriptorAtIndex(_: number): NSAppleEventDescriptor;
  descriptorForKeyword(_: number): NSAppleEventDescriptor;
  encodeWithCoder(with_: NSCoder): void;
  static createWithListDescriptor(): this;
  static createWithRecordDescriptor(): this;
  static createWithAEDescNoCopy(AEDescNoCopy: AEDesc): this;
  static createWithCoder(coder: NSCoder): this;
  static createWithDescriptorTypeBytesLength(descriptorType: number, bytes?: any, length: number): this;
  static createWithDescriptorTypeData(descriptorType: number, data?: Data): this;
  static createWithEventClassEventIDTargetDescriptorReturnIDTransactionID(eventClass: number, eventID: number, targetDescriptor?: NSAppleEventDescriptor, returnID: number, transactionID: number): this;
  insertDescriptorAtIndex(_: NSAppleEventDescriptor, at: number): void;
  keywordForDescriptorAtIndex(at: number): number;
  paramDescriptorForKeyword(forKeyword: number): NSAppleEventDescriptor;
  removeDescriptorAtIndex(at: number): void;
  removeDescriptorWithKeyword(withKeyword: number): void;
  removeParamDescriptorWithKeyword(withKeyword: number): void;
  sendEventWithOptionsTimeoutError(timeout: NSAppleEventDescriptor.SendOptions, error: number): NSAppleEventDescriptor;
  setAttributeDescriptorForKeyword(_: NSAppleEventDescriptor, forKeyword: number): void;
  setDescriptorForKeyword(_: NSAppleEventDescriptor, forKeyword: number): void;
  setParamDescriptorForKeyword(_: NSAppleEventDescriptor, forKeyword: number): void;
}

declare class NSAppleEventManager extends NSObject {
  static sharedAppleEventManager(): NSAppleEventManager;
  readonly currentAppleEvent: NSAppleEventDescriptor;
  readonly currentReplyAppleEvent: NSAppleEventDescriptor;
  appleEventForSuspensionID(forSuspensionID: any): NSAppleEventDescriptor;
  dispatchRawAppleEventWithRawReplyHandlerRefCon(_: AEDesc, withRawReply: AEDesc, handlerRefCon: any): number;
  removeEventHandlerForEventClassAndEventID(forEventClass: number, andEventID: number): void;
  replyAppleEventForSuspensionID(forSuspensionID: any): NSAppleEventDescriptor;
  resumeWithSuspensionID(withSuspensionID: any): void;
  setCurrentAppleEventAndReplyEventWithSuspensionID(_: any): void;
  setEventHandlerAndSelectorForEventClassAndEventID(_: any, andSelector: string, forEventClass: number, andEventID: number): void;
  suspendCurrentAppleEvent(): any;
}

declare var NSAppleEventManagerWillProcessFirstEventNotification: string;

declare var NSAppleEventTimeOutDefault: number;

declare var NSAppleEventTimeOutNone: number;

declare class NSAppleScript extends NSObject implements NSCopying {
  readonly isCompiled: boolean;
  readonly richTextSource: NSAttributedString;
  readonly source: string;
  compileAndReturnError(_?: NSDictionary<string, any>): boolean;
  executeAndReturnError(_?: NSDictionary<string, any>): NSAppleEventDescriptor;
  executeAppleEventError(_: NSAppleEventDescriptor, error?: NSDictionary<string, any>): NSAppleEventDescriptor;
  static createWithContentsOfURLError(contentsOfURL: NSURL, error?: NSDictionary<string, any>): this;
  static createWithSource(source: string): this;
}

declare var NSAppleScriptErrorAppName: string;

declare var NSAppleScriptErrorBriefMessage: string;

declare var NSAppleScriptErrorMessage: string;

declare var NSAppleScriptErrorNumber: string;

declare var NSAppleScriptErrorRange: string;

declare var NSArgumentDomain: string;


declare const NSArgumentEvaluationScriptError: number;

declare const NSArgumentsWrongScriptError: number;
declare class NSArray<ObjectType> extends NSObject implements NSCopying, NSFastEnumeration, NSMutableCopying, NSSecureCoding {
  static arrayWithObjects<ObjectType>(_: ObjectType): NSArray<ObjectType>;
  readonly count: number;
  readonly firstObject: ObjectType;
  readonly lastObject: ObjectType;
  readonly sortedArrayHint: Data;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  addObserverToObjectsAtIndexesForKeyPathOptionsContext(_: NSObject, toObjectsAt: IndexSet, forKeyPath: string, options: NSKeyValueObservingOptions, context?: any): void;
  arrayByAddingObject(_: ObjectType): NSArray<ObjectType>;
  arrayByAddingObjectsFromArray(from: NSArray<ObjectType>): NSArray<ObjectType>;
  componentsJoinedByString(by: string): string;
  containsObject(_: ObjectType): boolean;
  countByEnumeratingWithStateObjectsCount(with_: NSFastEnumerationState, objects?: any, count: number): number;
  descriptionWithLocale(withLocale?: any): string;
  descriptionWithLocaleIndent(withLocale?: any, indent: number): string;
  encodeWithCoder(with_: NSCoder): void;
  enumerateObjectsAtIndexesOptionsUsingBlock(at: IndexSet, options: NSEnumerationOptions, using: (p1: ObjectType, p2: number, p3: boolean) => void): void;
  enumerateObjectsUsingBlock(_: (p1: ObjectType, p2: number, p3: boolean) => void): void;
  enumerateObjectsWithOptionsUsingBlock(options: NSEnumerationOptions, using: (p1: ObjectType, p2: number, p3: boolean) => void): void;
  filteredArrayUsingPredicate(using: NSPredicate): NSArray<ObjectType>;
  firstObjectCommonWithArray(with_: NSArray<ObjectType>): ObjectType;
  indexOfObject(of: ObjectType): number;
  indexOfObjectInRange(of: ObjectType, in_: NSRange): number;
  indexOfObjectInSortedRangeOptionsUsingComparator(of: ObjectType, inSortedRange: NSRange, options: NSBinarySearchingOptions, usingComparator: (p1: any, p2: any) => ComparisonResult): number;
  indexOfObjectAtIndexesOptionsPassingTest(at: IndexSet, options: NSEnumerationOptions, passingTest: (p1: ObjectType, p2: number, p3: boolean) => boolean): number;
  indexOfObjectIdenticalTo(to: ObjectType): number;
  indexOfObjectIdenticalToInRange(to: ObjectType, in_: NSRange): number;
  indexOfObjectPassingTest(passingTest: (p1: ObjectType, p2: number, p3: boolean) => boolean): number;
  indexOfObjectWithOptionsPassingTest(options: NSEnumerationOptions, passingTest: (p1: ObjectType, p2: number, p3: boolean) => boolean): number;
  indexesOfObjectsAtIndexesOptionsPassingTest(at: IndexSet, options: NSEnumerationOptions, passingTest: (p1: ObjectType, p2: number, p3: boolean) => boolean): IndexSet;
  indexesOfObjectsPassingTest(passingTest: (p1: ObjectType, p2: number, p3: boolean) => boolean): IndexSet;
  indexesOfObjectsWithOptionsPassingTest(options: NSEnumerationOptions, passingTest: (p1: ObjectType, p2: number, p3: boolean) => boolean): IndexSet;
  static createWithArray(array: NSArray<ObjectType>): this;
  static createWithArrayCopyItems(array: NSArray<ObjectType>, copyItems: boolean): this;
  static createWithCoder(coder: NSCoder): this;
  static createWithContentsOfFile(contentsOfFile: string): this;
  static createWithContentsOfURL(contentsOfURL: NSURL): this;
  static createWithContentsOfURL(contentsOfURL: NSURL): this;
  static createWithObjects(objects: ObjectType): this;
  static createWithObjectsCount(objects?: ObjectType, count: number): this;
  isEqualToArray(to: NSArray<ObjectType>): boolean;
  objectAtIndex(at: number): ObjectType;
  objectEnumerator(): NSEnumerator<ObjectType>;
  objectsAtIndexes(at: IndexSet): NSArray<ObjectType>;
  pathsMatchingExtensions(_: NSArray<string>): NSArray<string>;
  removeObserverFromObjectsAtIndexesForKeyPath(_: NSObject, fromObjectsAt: IndexSet, forKeyPath: string): void;
  removeObserverFromObjectsAtIndexesForKeyPathContext(_: NSObject, fromObjectsAt: IndexSet, forKeyPath: string, context?: any): void;
  reverseObjectEnumerator(): NSEnumerator<ObjectType>;
  sortedArrayUsingComparator(comparator: (p1: any, p2: any) => ComparisonResult): NSArray<ObjectType>;
  sortedArrayUsingDescriptors(using: NSArray<NSSortDescriptor>): NSArray<ObjectType>;
  sortedArrayUsingFunctionContext(_?: (p1: ObjectType, p2: ObjectType, p3: any) => number, context?: any): NSArray<ObjectType>;
  sortedArrayUsingFunctionContextHint(_?: (p1: ObjectType, p2: ObjectType, p3: any) => number, context?: any, hint?: Data): NSArray<ObjectType>;
  sortedArrayUsingSelector(using: string): NSArray<ObjectType>;
  sortedArrayWithOptionsUsingComparator(options: NSSortOptions, usingComparator: (p1: any, p2: any) => ComparisonResult): NSArray<ObjectType>;
  subarrayWithRange(with_: NSRange): NSArray<ObjectType>;
  writeToURLError(error: NSURL): boolean;
}

declare class NSAssertionHandler extends NSObject {
  static currentHandler(): NSAssertionHandler;
}

declare var NSAssertionHandlerKey: string;

declare class NSAttributedString extends NSObject implements NSCopying, NSMutableCopying, NSSecureCoding, NSPasteboardReading, NSPasteboardWriting {
  static readableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;
  static readingOptionsForTypePasteboard(forType: string, pasteboard: NSPasteboard): NSPasteboard.ReadingOptions;
  readonly containsAttachments: boolean;
  readonly length: number;
  readonly string: string;
  static textTypes(): NSArray<string>;
  static textUnfilteredTypes(): NSArray<string>;
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  RTFDFileWrapperFromRangeDocumentAttributes(from: NSRange, documentAttributes: NSDictionary<string, any>): FileWrapper;
  RTFDFromRangeDocumentAttributes(from: NSRange, documentAttributes: NSDictionary<string, any>): Data;
  RTFFromRangeDocumentAttributes(from: NSRange, documentAttributes: NSDictionary<string, any>): Data;
  attributeAtIndexEffectiveRange(_: string, at: number, effectiveRange?: NSRange): any;
  attributeAtIndexLongestEffectiveRangeInRange(_: string, at: number, longestEffectiveRange?: NSRange, in_: NSRange): any;
  attributedSubstringFromRange(from: NSRange): NSAttributedString;
  attributesAtIndexEffectiveRange(at: number, effectiveRange?: NSRange): NSDictionary<string, any>;
  attributesAtIndexLongestEffectiveRangeInRange(at: number, longestEffectiveRange?: NSRange, in_: NSRange): NSDictionary<string, any>;
  boundingRectWithSizeOptions(with_: NSSize, options: NSString.DrawingOptions): NSRect;
  boundingRectWithSizeOptionsContext(with_: NSSize, options: NSString.DrawingOptions, context?: NSStringDrawingContext): NSRect;
  conformsToProtocol(to: any /* Protocol */): boolean;
  containsAttachmentsInRange(in_: NSRange): boolean;
  dataFromRangeDocumentAttributesError(documentAttributes: NSRange, error: NSDictionary<string, any>): Data;
  docFormatFromRangeDocumentAttributes(from: NSRange, documentAttributes: NSDictionary<string, any>): Data;
  doubleClickAtIndex(at: number): NSRange;
  drawAtPoint(at: NSPoint): void;
  drawInRect(in_: NSRect): void;
  drawWithRectOptions(with_: NSRect, options: NSString.DrawingOptions): void;
  drawWithRectOptionsContext(with_: NSRect, options: NSString.DrawingOptions, context?: NSStringDrawingContext): void;
  encodeWithCoder(with_: NSCoder): void;
  enumerateAttributeInRangeOptionsUsingBlock(_: string, in_: NSRange, options: NSAttributedString.EnumerationOptions, using?: (p1: any, p2: NSRange, p3: boolean) => void): void;
  enumerateAttributesInRangeOptionsUsingBlock(in_: NSRange, options: NSAttributedString.EnumerationOptions, using: (p1: NSDictionary<string, any>, p2: NSRange, p3: boolean) => void): void;
  fileWrapperFromRangeDocumentAttributesError(documentAttributes: NSRange, error: NSDictionary<string, any>): FileWrapper;
  fontAttributesInRange(in_: NSRange): NSDictionary<string, any>;
  static createWithAttributedString(attributedString: NSAttributedString): this;
  static createWithCoder(coder: NSCoder): this;
  static createWithDataOptionsDocumentAttributes(data: Data, options: NSDictionary<string, any>, documentAttributes?: NSDictionary<string, any>): this;
  static createWithDocFormatDocumentAttributes(docFormat: Data, documentAttributes?: NSDictionary<string, any>): this;
  static createWithHtmlBaseURLDocumentAttributes(HTML: Data, baseURL: NSURL, documentAttributes?: NSDictionary<string, any>): this;
  static createWithHtmlDocumentAttributes(HTML: Data, documentAttributes?: NSDictionary<string, any>): this;
  static createWithHtmlOptionsDocumentAttributes(HTML: Data, options: NSDictionary<string, any>, documentAttributes?: NSDictionary<string, any>): this;
  static createWithPasteboardPropertyListOfType(pasteboardPropertyList: any, ofType: string): this;
  static createWithRtfDocumentAttributes(RTF: Data, documentAttributes?: NSDictionary<string, any>): this;
  static createWithRtfdDocumentAttributes(RTFD: Data, documentAttributes?: NSDictionary<string, any>): this;
  static createWithRTFDFileWrapperDocumentAttributes(RTFDFileWrapper: FileWrapper, documentAttributes?: NSDictionary<string, any>): this;
  static createWithString(string: string): this;
  static createWithStringAttributes(string: string, attributes?: NSDictionary<string, any>): this;
  static createWithUrlOptionsDocumentAttributes(URL: NSURL, options: NSDictionary<string, any>, documentAttributes?: NSDictionary<string, any>): this;
  isEqual(_: any): boolean;
  isEqualToAttributedString(to: NSAttributedString): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  itemNumberInTextListAtIndex(in_: NSTextList, at: number): number;
  lineBreakBeforeIndexWithinRange(before: number, within: NSRange): number;
  lineBreakByHyphenatingBeforeIndexWithinRange(before: number, within: NSRange): number;
  nextWordFromIndexForward(from: number, forward: boolean): number;
  pasteboardPropertyListForType(forType: string): any;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  rangeOfTextBlockAtIndex(of: NSTextBlock, at: number): NSRange;
  rangeOfTextListAtIndex(of: NSTextList, at: number): NSRange;
  rangeOfTextTableAtIndex(of: NSTextTable, at: number): NSRange;
  respondsToSelector(_: string): boolean;
  rulerAttributesInRange(in_: NSRange): NSDictionary<string, any>;
  self(): this;
  size(): NSSize;
  writableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;
  writingOptionsForTypePasteboard(forType: string, pasteboard: NSPasteboard): NSPasteboard.WritingOptions;
}

declare class NSAutoreleasePool extends NSObject {
  static addObject(_: any): void;
  static showPools(): void;
  addObject(_: any): void;
  drain(): void;
}

declare var NSAverageKeyValueOperator: string;

declare class NSBackgroundActivityScheduler extends NSObject {
  readonly identifier: string;
  interval: number;
  setInterval(_: number)
  qualityOfService: QualityOfService;
  setQualityOfService(_: QualityOfService)
  repeats: boolean;
  setRepeats(_: boolean)
  readonly shouldDefer: boolean;
  tolerance: number;
  setTolerance(_: number)
  static createWithIdentifier(identifier: string): this;
  invalidate(): void;
  scheduleWithBlock(_: (p1: (p1: NSBackgroundActivityScheduler.Result) => void) => void): void;
}

declare class NSBlockOperation extends NSOperation {
  static blockOperationWithBlock(_: () => void): NSBlockOperation;
  readonly executionBlocks: NSArray<() => void>;
  addExecutionBlock(_: () => void): void;
}

declare class NSBundle extends NSObject {
  static URLForResourceWithExtensionSubdirectoryInBundleWithURL(forResource?: string, withExtension?: string, subdirectory?: string, in_: NSURL): NSURL;
  static URLsForResourcesWithExtensionSubdirectoryInBundleWithURL(forResourcesWithExtension?: string, subdirectory?: string, in_: NSURL): NSArray<NSURL>;
  static bundleForClass(_: typeof NSObject): Bundle;
  static bundleWithIdentifier(_: string): Bundle;
  static bundleWithPath(_: string): NSBundle;
  static bundleWithURL(_: NSURL): NSBundle;
  static pathForResourceOfTypeInDirectory(forResource?: string, ofType?: string, inDirectory: string): string;
  static pathsForResourcesOfTypeInDirectory(forResourcesOfType?: string, inDirectory: string): NSArray<string>;
  static preferredLocalizationsFromArray(_: NSArray<string>): NSArray<string>;
  static preferredLocalizationsFromArrayForPreferences(_: NSArray<string>, forPreferences?: NSArray<string>): NSArray<string>;
  readonly appStoreReceiptURL: NSURL;
  readonly builtInPlugInsPath: string;
  readonly builtInPlugInsURL: NSURL;
  readonly bundleIdentifier: string;
  readonly bundlePath: string;
  readonly bundleURL: NSURL;
  readonly developmentLocalization: string;
  readonly executableArchitectures: NSArray<number>;
  readonly executablePath: string;
  readonly executableURL: NSURL;
  readonly infoDictionary: NSDictionary<string, any>;
  readonly isLoaded: boolean;
  readonly localizations: NSArray<string>;
  readonly localizedInfoDictionary: NSDictionary<string, any>;
  readonly preferredLocalizations: NSArray<string>;
  readonly principalClass: typeof NSObject;
  readonly privateFrameworksPath: string;
  readonly privateFrameworksURL: NSURL;
  readonly resourcePath: string;
  readonly resourceURL: NSURL;
  readonly sharedFrameworksPath: string;
  readonly sharedFrameworksURL: NSURL;
  readonly sharedSupportPath: string;
  readonly sharedSupportURL: NSURL;
  static allBundles(): NSArray<Bundle>;
  static allFrameworks(): NSArray<Bundle>;
  static mainBundle(): Bundle;
  URLForAuxiliaryExecutable(forAuxiliaryExecutable: string): NSURL;
  URLForImageResource(_: string): NSURL;
  URLForResourceWithExtension(forResource?: string, withExtension?: string): NSURL;
  URLForResourceWithExtensionSubdirectory(forResource?: string, withExtension?: string, subdirectory?: string): NSURL;
  URLForResourceWithExtensionSubdirectoryLocalization(_?: string, withExtension?: string, subdirectory?: string, localization?: string): NSURL;
  URLsForResourcesWithExtensionSubdirectory(forResourcesWithExtension?: string, subdirectory?: string): NSArray<NSURL>;
  URLsForResourcesWithExtensionSubdirectoryLocalization(forResourcesWithExtension?: string, subdirectory?: string, localization?: string): NSArray<NSURL>;
  classNamed(_: string): typeof NSObject;
  contextHelpForKey(_: string): NSAttributedString;
  imageForResource(_: string): NSImage;
  static createWithPath(path: string): this;
  static createWithUrl(URL: NSURL): this;
  load(): boolean;
  loadAndReturnError(): boolean;
  loadNibNamedOwnerTopLevelObjects(_: string, owner?: any, topLevelObjects?: NSArray<any>): boolean;
  localizedStringForKeyValueTable(_: string, value?: string, table?: string): string;
  objectForInfoDictionaryKey(forInfoDictionaryKey: string): any;
  pathForAuxiliaryExecutable(forAuxiliaryExecutable: string): string;
  pathForImageResource(_: string): string;
  pathForResourceOfType(forResource?: string, ofType?: string): string;
  pathForResourceOfTypeInDirectory(forResource?: string, ofType?: string, inDirectory?: string): string;
  pathForResourceOfTypeInDirectoryForLocalization(forResource?: string, ofType?: string, inDirectory?: string, forLocalization?: string): string;
  pathForSoundResource(_: string): string;
  pathsForResourcesOfTypeInDirectory(forResourcesOfType?: string, inDirectory?: string): NSArray<string>;
  pathsForResourcesOfTypeInDirectoryForLocalization(forResourcesOfType?: string, inDirectory?: string, forLocalization?: string): NSArray<string>;
  preflightAndReturnError(): boolean;
  unload(): boolean;
}

declare var NSBundleDidLoadNotification: string;


declare const NSBundleErrorMaximum: number;

declare const NSBundleErrorMinimum: number;

declare const NSBundleExecutableArchitectureI386: number;

declare const NSBundleExecutableArchitecturePPC: number;

declare const NSBundleExecutableArchitecturePPC64: number;

declare const NSBundleExecutableArchitectureX86_64: number;
declare var NSBundleResourceRequestLowDiskSpaceNotification: string;

declare class NSByteCountFormatter extends NSFormatter {
  static stringFromByteCountCountStyle(_: number, countStyle: ByteCountFormatter.CountStyle): string;
  static stringFromMeasurementWithCountStyle(_: NSMeasurement<NSUnitInformationStorage>, countStyle: ByteCountFormatter.CountStyle): string;
  isAdaptive: boolean;
  setAdaptive(_: boolean)
  allowedUnits: ByteCountFormatter.Units;
  setAllowedUnits(_: ByteCountFormatter.Units)
  allowsNonnumericFormatting: boolean;
  setAllowsNonnumericFormatting(_: boolean)
  countStyle: ByteCountFormatter.CountStyle;
  setCountStyle(_: ByteCountFormatter.CountStyle)
  formattingContext: Formatter.Context;
  setFormattingContext(_: Formatter.Context)
  includesActualByteCount: boolean;
  setIncludesActualByteCount(_: boolean)
  includesCount: boolean;
  setIncludesCount(_: boolean)
  includesUnit: boolean;
  setIncludesUnit(_: boolean)
  zeroPadsFractionDigits: boolean;
  setZeroPadsFractionDigits(_: boolean)
  stringFromByteCount(fromByteCount: number): string;
  stringFromMeasurement(_: NSMeasurement<NSUnitInformationStorage>): string;
}

declare class NSCache<KeyType, ObjectType> extends NSObject {
  countLimit: number;
  setCountLimit(_: number)
  delegate: NSCacheDelegate;
  setDelegate(_: NSCacheDelegate)
  evictsObjectsWithDiscardedContent: boolean;
  setEvictsObjectsWithDiscardedContent(_: boolean)
  name: string;
  setName(_: string)
  totalCostLimit: number;
  setTotalCostLimit(_: number)
  objectForKey(forKey: KeyType): ObjectType;
  removeAllObjects(): void;
  removeObjectForKey(forKey: KeyType): void;
  setObjectForKey(_: ObjectType, forKey: KeyType): void;
  setObjectForKeyCost(_: ObjectType, forKey: KeyType, cost: number): void;
}

interface NSCacheDelegate extends NSObject {
  cacheWithWillEvictObject?(_: NSCache<any, any>, willEvictObject: any): void;
}

declare var NSCacheDelegate: {
  prototype: NSCacheDelegate;
};

declare class NSCachedURLResponse extends NSObject implements NSCopying, NSSecureCoding {
  readonly data: Data;
  readonly response: URLResponse;
  readonly storagePolicy: URLCache.StoragePolicy;
  readonly userInfo: NSDictionary<any, any>;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithResponseData(response: URLResponse, data: Data): this;
  static createWithResponseDataUserInfoStoragePolicy(response: URLResponse, data: Data, userInfo?: NSDictionary<any, any>, storagePolicy: URLCache.StoragePolicy): this;
}

declare class NSCalendar extends NSObject implements NSCopying, NSSecureCoding {
  readonly AMSymbol: string;
  readonly PMSymbol: string;
  readonly calendarIdentifier: string;
  readonly eraSymbols: NSArray<string>;
  firstWeekday: number;
  setFirstWeekday(_: number)
  locale: Locale;
  setLocale(_: Locale)
  readonly longEraSymbols: NSArray<string>;
  minimumDaysInFirstWeek: number;
  setMinimumDaysInFirstWeek(_: number)
  readonly monthSymbols: NSArray<string>;
  readonly quarterSymbols: NSArray<string>;
  readonly shortMonthSymbols: NSArray<string>;
  readonly shortQuarterSymbols: NSArray<string>;
  readonly shortStandaloneMonthSymbols: NSArray<string>;
  readonly shortStandaloneQuarterSymbols: NSArray<string>;
  readonly shortStandaloneWeekdaySymbols: NSArray<string>;
  readonly shortWeekdaySymbols: NSArray<string>;
  readonly standaloneMonthSymbols: NSArray<string>;
  readonly standaloneQuarterSymbols: NSArray<string>;
  readonly standaloneWeekdaySymbols: NSArray<string>;
  timeZone: NSTimeZone;
  setTimeZone(_: NSTimeZone)
  readonly veryShortMonthSymbols: NSArray<string>;
  readonly veryShortStandaloneMonthSymbols: NSArray<string>;
  readonly veryShortStandaloneWeekdaySymbols: NSArray<string>;
  readonly veryShortWeekdaySymbols: NSArray<string>;
  readonly weekdaySymbols: NSArray<string>;
  static autoupdatingCurrentCalendar(): NSCalendar;
  static currentCalendar(): NSCalendar;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  compareDateToDateToUnitGranularity(_: Date, to: Date, toUnitGranularity: NSCalendar.Unit): ComparisonResult;
  componentFromDate(_: NSCalendar.Unit, from: Date): number;
  componentsFromDate(_: NSCalendar.Unit, from: Date): NSDateComponents;
  componentsFromDateToDateOptions(_: NSCalendar.Unit, from: Date, to: Date, options: NSCalendar.Options): NSDateComponents;
  componentsFromDateComponentsToDateComponentsOptions(_: NSCalendar.Unit, from: NSDateComponents, to: NSDateComponents, options: NSCalendar.Options): NSDateComponents;
  componentsInTimeZoneFromDate(in_: NSTimeZone, from: Date): NSDateComponents;
  dateMatchesComponents(_: Date, matchesComponents: NSDateComponents): boolean;
  dateByAddingComponentsToDateOptions(byAdding: NSDateComponents, to: Date, options: NSCalendar.Options): Date;
  dateByAddingUnitValueToDateOptions(byAdding: NSCalendar.Unit, value: number, to: Date, options: NSCalendar.Options): Date;
  dateBySettingHourMinuteSecondOfDateOptions(bySettingHour: number, minute: number, second: number, of: Date, options: NSCalendar.Options): Date;
  dateBySettingUnitValueOfDateOptions(bySettingUnit: NSCalendar.Unit, value: number, of: Date, options: NSCalendar.Options): Date;
  dateFromComponents(from: NSDateComponents): Date;
  dateWithEraYearMonthDayHourMinuteSecondNanosecond(era: number, year: number, month: number, day: number, hour: number, minute: number, second: number, nanosecond: number): Date;
  dateWithEraYearForWeekOfYearWeekOfYearWeekdayHourMinuteSecondNanosecond(era: number, yearForWeekOfYear: number, weekOfYear: number, weekday: number, hour: number, minute: number, second: number, nanosecond: number): Date;
  encodeWithCoder(with_: NSCoder): void;
  enumerateDatesStartingAfterDateMatchingComponentsOptionsUsingBlock(startingAfter: Date, matching: NSDateComponents, options: NSCalendar.Options, using?: (p1: Date, p2: boolean, p3: boolean) => void): void;
  getEraYearMonthDayFromDate(_?: number, year?: number, month?: number, day?: number, from: Date): void;
  getEraYearForWeekOfYearWeekOfYearWeekdayFromDate(_?: number, yearForWeekOfYear?: number, weekOfYear?: number, weekday?: number, from: Date): void;
  getHourMinuteSecondNanosecondFromDate(_?: number, minute?: number, second?: number, nanosecond?: number, from: Date): void;
  static createWithCalendarIdentifier(calendarIdentifier: string): this;
  static createWithCoder(coder: NSCoder): this;
  isDateEqualToDateToUnitGranularity(_: Date, equalTo: Date, toUnitGranularity: NSCalendar.Unit): boolean;
  isDateInSameDayAsDate(_: Date, inSameDayAs: Date): boolean;
  isDateInToday(_: Date): boolean;
  isDateInTomorrow(_: Date): boolean;
  isDateInWeekend(_: Date): boolean;
  isDateInYesterday(_: Date): boolean;
  maximumRangeOfUnit(of: NSCalendar.Unit): NSRange;
  minimumRangeOfUnit(of: NSCalendar.Unit): NSRange;
  nextDateAfterDateMatchingComponentsOptions(after: Date, matching: NSDateComponents, options: NSCalendar.Options): Date;
  nextDateAfterDateMatchingHourMinuteSecondOptions(after: Date, matchingHour: number, minute: number, second: number, options: NSCalendar.Options): Date;
  nextDateAfterDateMatchingUnitValueOptions(after: Date, matching: NSCalendar.Unit, value: number, options: NSCalendar.Options): Date;
  nextWeekendStartDateIntervalOptionsAfterDate(_?: Date, interval?: number, options: NSCalendar.Options, after: Date): boolean;
  ordinalityOfUnitInUnitForDate(of: NSCalendar.Unit, in_: NSCalendar.Unit, for_: Date): number;
  rangeOfUnitInUnitForDate(of: NSCalendar.Unit, in_: NSCalendar.Unit, for_: Date): NSRange;
  rangeOfUnitStartDateIntervalForDate(of: NSCalendar.Unit, start?: Date, interval?: number, for_: Date): boolean;
  rangeOfWeekendStartDateIntervalContainingDate(ofWeekendStart?: Date, interval?: number, containing: Date): boolean;
  startOfDayForDate(for_: Date): Date;
}

declare var NSCalendarDayChangedNotification: string;

declare var NSCalendarIdentifierBuddhist: string;

declare var NSCalendarIdentifierChinese: string;

declare var NSCalendarIdentifierCoptic: string;

declare var NSCalendarIdentifierEthiopicAmeteAlem: string;

declare var NSCalendarIdentifierEthiopicAmeteMihret: string;

declare var NSCalendarIdentifierGregorian: string;

declare var NSCalendarIdentifierHebrew: string;

declare var NSCalendarIdentifierISO8601: string;

declare var NSCalendarIdentifierIndian: string;

declare var NSCalendarIdentifierIslamic: string;

declare var NSCalendarIdentifierIslamicCivil: string;

declare var NSCalendarIdentifierIslamicTabular: string;

declare var NSCalendarIdentifierIslamicUmmAlQura: string;

declare var NSCalendarIdentifierJapanese: string;

declare var NSCalendarIdentifierPersian: string;

declare var NSCalendarIdentifierRepublicOfChina: string;


declare const NSCannotCreateScriptCommandError: number;
declare var NSCharacterConversionException: string;

declare class NSCharacterSet extends NSObject implements NSCopying, NSMutableCopying, NSSecureCoding {
  readonly bitmapRepresentation: Data;
  readonly invertedSet: CharacterSet;
  static URLFragmentAllowedCharacterSet(): CharacterSet;
  static URLHostAllowedCharacterSet(): CharacterSet;
  static URLPasswordAllowedCharacterSet(): CharacterSet;
  static URLPathAllowedCharacterSet(): CharacterSet;
  static URLQueryAllowedCharacterSet(): CharacterSet;
  static URLUserAllowedCharacterSet(): CharacterSet;
  static alphanumericCharacterSet(): CharacterSet;
  static capitalizedLetterCharacterSet(): CharacterSet;
  static controlCharacterSet(): CharacterSet;
  static decimalDigitCharacterSet(): CharacterSet;
  static decomposableCharacterSet(): CharacterSet;
  static illegalCharacterSet(): CharacterSet;
  static letterCharacterSet(): CharacterSet;
  static lowercaseLetterCharacterSet(): CharacterSet;
  static newlineCharacterSet(): CharacterSet;
  static nonBaseCharacterSet(): CharacterSet;
  static punctuationCharacterSet(): CharacterSet;
  static symbolCharacterSet(): CharacterSet;
  static uppercaseLetterCharacterSet(): CharacterSet;
  static whitespaceAndNewlineCharacterSet(): CharacterSet;
  static whitespaceCharacterSet(): CharacterSet;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  characterIsMember(_: string): boolean;
  encodeWithCoder(with_: NSCoder): void;
  hasMemberInPlane(_: number): boolean;
  static createWithCoder(coder: NSCoder): this;
  isSupersetOfSet(of: CharacterSet): boolean;
  longCharacterIsMember(_: number): boolean;
}

declare class NSClassDescription extends NSObject {
  static invalidateClassDescriptionCache(): void;
  static registerClassDescriptionForClass(_: NSClassDescription, for_: typeof NSObject): void;
}

declare var NSClassDescriptionNeededForClassNotification: string;

declare function NSClassFromString(aClassName: string): typeof NSObject;
declare class NSCloneCommand extends NSScriptCommand {
  readonly keySpecifier: NSScriptObjectSpecifier;
  setReceiversSpecifier(_?: NSScriptObjectSpecifier): void;
}

declare class NSCloseCommand extends NSScriptCommand {
  readonly saveOptions: NSSaveOptions;
}


declare const NSCloudSharingConflictError: number;

declare const NSCloudSharingErrorMaximum: number;

declare const NSCloudSharingErrorMinimum: number;

declare const NSCloudSharingNetworkFailureError: number;

declare const NSCloudSharingNoPermissionError: number;

declare const NSCloudSharingOtherError: number;

declare const NSCloudSharingQuotaExceededError: number;

declare const NSCloudSharingTooManyParticipantsError: number;
declare var NSCocoaErrorDomain: string;

declare class NSCoder extends NSObject {
  readonly allowedClasses: Set<typeof NSObject>;
  readonly allowsKeyedCoding: boolean;
  readonly decodingFailurePolicy: NSCoder.DecodingFailurePolicy;
  readonly error: Error;
  readonly requiresSecureCoding: boolean;
  readonly systemVersion: number;
  containsValueForKey(forKey: string): boolean;
  decodeArrayOfObjCTypeCountAt(ofObjCType: string, count: number, at: any): void;
  decodeBoolForKey(forKey: string): boolean;
  decodeBytesForKeyReturnedLength(forKey: string, returnedLength?: number): string;
  decodeBytesWithReturnedLength(withReturnedLength: number): any;
  decodeCMTimeForKey(forKey: string): CMTime;
  decodeCMTimeMappingForKey(forKey: string): CMTimeMapping;
  decodeCMTimeRangeForKey(forKey: string): CMTimeRange;
  decodeDataObject(): Data;
  decodeDoubleForKey(forKey: string): number;
  decodeFloatForKey(forKey: string): number;
  decodeInt32ForKey(forKey: string): number;
  decodeInt64ForKey(forKey: string): number;
  decodeIntForKey(forKey: string): number;
  decodeIntegerForKey(forKey: string): number;
  decodeObject(): any;
  decodeObjectForKey(forKey: string): any;
  decodePoint(): NSPoint;
  decodePointForKey(forKey: string): NSPoint;
  decodePropertyList(): any;
  decodePropertyListForKey(forKey: string): any;
  decodeRect(): NSRect;
  decodeRectForKey(forKey: string): NSRect;
  decodeSize(): NSSize;
  decodeSizeForKey(forKey: string): NSSize;
  decodeValueOfObjCTypeAtSize(ofObjCType: string, at: any, size: number): void;
  encodeArrayOfObjCTypeCountAt(ofObjCType: string, count: number, at: any): void;
  encodeBoolForKey(_: boolean, forKey: string): void;
  encodeBycopyObject(_?: any): void;
  encodeByrefObject(_?: any): void;
  encodeBytesLength(_?: any, length: number): void;
  encodeBytesLengthForKey(_?: string, length: number, forKey: string): void;
  encodeCMTimeForKey(_: CMTime, forKey: string): void;
  encodeCMTimeMappingForKey(_: CMTimeMapping, forKey: string): void;
  encodeCMTimeRangeForKey(_: CMTimeRange, forKey: string): void;
  encodeConditionalObject(_?: any): void;
  encodeConditionalObjectForKey(_?: any, forKey: string): void;
  encodeDataObject(_: Data): void;
  encodeDoubleForKey(_: number, forKey: string): void;
  encodeFloatForKey(_: number, forKey: string): void;
  encodeInt32ForKey(_: number, forKey: string): void;
  encodeInt64ForKey(_: number, forKey: string): void;
  encodeIntForKey(_: number, forKey: string): void;
  encodeIntegerForKey(_: number, forKey: string): void;
  encodeObject(_?: any): void;
  encodeObjectForKey(_?: any, forKey: string): void;
  encodePoint(_: NSPoint): void;
  encodePointForKey(_: NSPoint, forKey: string): void;
  encodePropertyList(_: any): void;
  encodeRect(_: NSRect): void;
  encodeRectForKey(_: NSRect, forKey: string): void;
  encodeRootObject(_: any): void;
  encodeSize(_: NSSize): void;
  encodeSizeForKey(_: NSSize, forKey: string): void;
  encodeValueOfObjCTypeAt(ofObjCType: string, at: any): void;
  failWithError(_: Error): void;
  versionForClassName(forClassName: string): number;
}


declare const NSCoderErrorMaximum: number;

declare const NSCoderErrorMinimum: number;

declare const NSCoderInvalidValueError: number;

declare const NSCoderReadCorruptError: number;

declare const NSCoderValueNotFoundError: number;
interface NSCoding {
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder?(coder: NSCoder): NSCoding;
}

declare var NSCoding: {
  prototype: NSCoding;
};


declare const NSCollectorDisabledOption: number;
declare function NSCompareHashTables(table1: NSHashTable<any>, table2: NSHashTable<any>): boolean;
declare function NSCompareMapTables(table1: NSMapTable<any, any>, table2: NSMapTable<any, any>): boolean;
declare class NSComparisonPredicate extends NSPredicate {
  readonly comparisonPredicateModifier: NSComparisonPredicate.Modifier;
  readonly customSelector: string;
  readonly leftExpression: NSExpression;
  readonly options: NSComparisonPredicate.Options;
  readonly predicateOperatorType: NSComparisonPredicate.Operator;
  readonly rightExpression: NSExpression;
  static createWithLeftExpressionRightExpressionCustomSelector(leftExpression: NSExpression, rightExpression: NSExpression, customSelector: string): this;
  static createWithLeftExpressionRightExpressionModifierTypeOptions(leftExpression: NSExpression, rightExpression: NSExpression, modifier: NSComparisonPredicate.Modifier, type: NSComparisonPredicate.Operator, options: NSComparisonPredicate.Options): this;
}

declare class NSCompoundPredicate extends NSPredicate {
  readonly compoundPredicateType: NSCompoundPredicate.LogicalType;
  readonly subpredicates: NSArray<any>;
  static createWithTypeSubpredicates(type: NSCompoundPredicate.LogicalType, subpredicates: NSArray<NSPredicate>): this;
}


declare const NSCompressionErrorMaximum: number;

declare const NSCompressionErrorMinimum: number;

declare const NSCompressionFailedError: number;
declare class NSCondition extends NSObject implements NSLocking {
  name: string;
  setName(_: string)
  broadcast(): void;
  lock(): void;
  signal(): void;
  unlock(): void;
  wait(): void;
  waitUntilDate(until: Date): boolean;
}

declare class NSConditionLock extends NSObject implements NSLocking {
  readonly condition: number;
  name: string;
  setName(_: string)
  static createWithCondition(condition: number): this;
  lock(): void;
  lockBeforeDate(before: Date): boolean;
  lockWhenCondition(whenCondition: number): void;
  lockWhenConditionBeforeDate(whenCondition: number, before: Date): boolean;
  tryLock(): boolean;
  tryLockWhenCondition(whenCondition: number): boolean;
  unlock(): void;
  unlockWithCondition(withCondition: number): void;
}


declare const NSContainerSpecifierError: number;
declare function NSContainsRect(aRect: NSRect, bRect: NSRect): boolean;
declare function NSCopyHashTableWithZone(table: NSHashTable<any>, zone: any): NSHashTable<any>;
declare function NSCopyMapTableWithZone(table: NSMapTable<any, any>, zone: any): NSMapTable<any, any>;
declare function NSCopyMemoryPages(source: any, dest: any, bytes: number): void;
interface NSCopying {
}

declare var NSCopying: {
  prototype: NSCopying;
};

declare class NSCountCommand extends NSScriptCommand {
}

declare function NSCountFrames(): number;
declare function NSCountHashTable(table: NSHashTable<any>): number;
declare var NSCountKeyValueOperator: string;

declare function NSCountMapTable(table: NSMapTable<any, any>): number;
declare class NSCountedSet<ObjectType> extends NSMutableSet<ObjectType> {
  static setWithCapacity<ObjectType>(capacity: number): NSCountedSet<ObjectType>; // inherited from NSMutableSet
  static setWithObjects<ObjectType>(_: ObjectType): NSCountedSet<ObjectType>; // inherited from NSSet
  countForObject(for_: ObjectType): number;
}

declare class NSCreateCommand extends NSScriptCommand {
  readonly createClassDescription: NSScriptClassDescription;
  readonly resolvedKeyDictionary: NSDictionary<string, any>;
}

declare function NSCreateHashTable(callBacks: NSHashTableCallBacks, capacity: number): NSHashTable<any>;
declare function NSCreateHashTableWithZone(callBacks: NSHashTableCallBacks, capacity: number, zone: any): NSHashTable<any>;
declare function NSCreateMapTable(keyCallBacks: NSMapTableKeyCallBacks, valueCallBacks: NSMapTableValueCallBacks, capacity: number): NSMapTable<any, any>;
declare function NSCreateMapTableWithZone(keyCallBacks: NSMapTableKeyCallBacks, valueCallBacks: NSMapTableValueCallBacks, capacity: number, zone: any): NSMapTable<any, any>;
declare var NSCurrentLocaleDidChangeNotification: string;

declare class NSData extends NSObject implements NSCopying, NSMutableCopying, NSSecureCoding {
  static dataWithContentsOfFileOptionsError(options: string, error: NSData.ReadingOptions): NSData;
  static dataWithContentsOfURLOptionsError(options: NSURL, error: NSData.ReadingOptions): NSData;
  readonly bytes: any;
  readonly length: number;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  base64EncodedDataWithOptions(options: NSData.Base64EncodingOptions): Data;
  base64EncodedStringWithOptions(options: NSData.Base64EncodingOptions): string;
  compressedDataUsingAlgorithmError(using: NSData.CompressionAlgorithm): this;
  decompressedDataUsingAlgorithmError(using: NSData.CompressionAlgorithm): this;
  encodeWithCoder(with_: NSCoder): void;
  enumerateByteRangesUsingBlock(_: (p1: any, p2: NSRange, p3: boolean) => void): void;
  getBytesLength(_: any, length: number): void;
  getBytesRange(_: any, range: NSRange): void;
  static createWithBase64EncodedDataOptions(base64EncodedData: Data, options: NSData.Base64DecodingOptions): this;
  static createWithBase64EncodedStringOptions(base64EncodedString: string, options: NSData.Base64DecodingOptions): this;
  static createWithBytesLength(bytes?: any, length: number): this;
  static createWithBytesNoCopyLength(bytesNoCopy: any, length: number): this;
  static createWithBytesNoCopyLengthDeallocator(bytesNoCopy: any, length: number, deallocator?: (p1: any, p2: number) => void): this;
  static createWithBytesNoCopyLengthFreeWhenDone(bytesNoCopy: any, length: number, freeWhenDone: boolean): this;
  static createWithCoder(coder: NSCoder): this;
  static createWithContentsOfFile(contentsOfFile: string): this;
  static createWithContentsOfFileOptions(contentsOfFile: string, options: NSData.ReadingOptions): this;
  static createWithContentsOfURL(contentsOfURL: NSURL): this;
  static createWithContentsOfURLOptions(contentsOfURL: NSURL, options: NSData.ReadingOptions): this;
  static createWithData(data: Data): this;
  isEqualToData(to: Data): boolean;
  rangeOfDataOptionsRange(of: Data, options: NSData.SearchOptions, in_: NSRange): NSRange;
  subdataWithRange(with_: NSRange): Data;
  writeToFileAtomically(toFile: string, atomically: boolean): boolean;
  writeToFileOptionsError(options: string, error: NSData.WritingOptions): boolean;
  writeToURLAtomically(to: NSURL, atomically: boolean): boolean;
  writeToURLOptionsError(options: NSURL, error: NSData.WritingOptions): boolean;
}

declare class NSDataDetector extends NSRegularExpression {
  static dataDetectorWithTypesError(error: number): NSDataDetector;
  readonly checkingTypes: number;
  static createWithTypes(types: number): this;
}

declare class NSDate extends NSObject implements NSCopying, NSSecureCoding {
  readonly timeIntervalSince1970: number;
  readonly timeIntervalSinceNow: number;
  readonly timeIntervalSinceReferenceDate: number;
  static distantFuture(): Date;
  static distantPast(): Date;
  static now(): Date;
  static timeIntervalSinceReferenceDate(): number;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  compare(_: Date): ComparisonResult;
  dateByAddingTimeInterval(_: number): this;
  descriptionWithLocale(with_?: any): string;
  earlierDate(_: Date): Date;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithTimeIntervalSinceDate(timeInterval: number, sinceDate: Date): this;
  static createWithTimeIntervalSince1970(timeIntervalSince1970: number): this;
  static createWithTimeIntervalSinceNow(timeIntervalSinceNow: number): this;
  static createWithTimeIntervalSinceReferenceDate(timeIntervalSinceReferenceDate: number): this;
  isEqualToDate(to: Date): boolean;
  laterDate(_: Date): Date;
  timeIntervalSinceDate(_: Date): number;
}


declare const NSDateComponentUndefined: number;
declare class NSDateComponents extends NSObject implements NSCopying, NSSecureCoding {
  calendar: NSCalendar;
  setCalendar(_: NSCalendar)
  readonly date: Date;
  day: number;
  setDay(_: number)
  era: number;
  setEra(_: number)
  hour: number;
  setHour(_: number)
  isLeapMonth: boolean;
  setLeapMonth(_: boolean)
  minute: number;
  setMinute(_: number)
  month: number;
  setMonth(_: number)
  nanosecond: number;
  setNanosecond(_: number)
  quarter: number;
  setQuarter(_: number)
  second: number;
  setSecond(_: number)
  timeZone: NSTimeZone;
  setTimeZone(_: NSTimeZone)
  readonly isValidDate: boolean;
  weekOfMonth: number;
  setWeekOfMonth(_: number)
  weekOfYear: number;
  setWeekOfYear(_: number)
  weekday: number;
  setWeekday(_: number)
  weekdayOrdinal: number;
  setWeekdayOrdinal(_: number)
  year: number;
  setYear(_: number)
  yearForWeekOfYear: number;
  setYearForWeekOfYear(_: number)
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  isValidDateInCalendar(in_: NSCalendar): boolean;
  setValueForComponent(_: number, forComponent: NSCalendar.Unit): void;
  valueForComponent(forComponent: NSCalendar.Unit): number;
}

declare class NSDateComponentsFormatter extends NSFormatter {
  static localizedStringFromDateComponentsUnitsStyle(_: NSDateComponents, unitsStyle: DateComponentsFormatter.UnitsStyle): string;
  allowedUnits: NSCalendar.Unit;
  setAllowedUnits(_: NSCalendar.Unit)
  allowsFractionalUnits: boolean;
  setAllowsFractionalUnits(_: boolean)
  calendar: NSCalendar;
  setCalendar(_: NSCalendar)
  collapsesLargestUnit: boolean;
  setCollapsesLargestUnit(_: boolean)
  formattingContext: Formatter.Context;
  setFormattingContext(_: Formatter.Context)
  includesApproximationPhrase: boolean;
  setIncludesApproximationPhrase(_: boolean)
  includesTimeRemainingPhrase: boolean;
  setIncludesTimeRemainingPhrase(_: boolean)
  maximumUnitCount: number;
  setMaximumUnitCount(_: number)
  referenceDate: Date;
  setReferenceDate(_: Date)
  unitsStyle: DateComponentsFormatter.UnitsStyle;
  setUnitsStyle(_: DateComponentsFormatter.UnitsStyle)
  zeroFormattingBehavior: DateComponentsFormatter.ZeroFormattingBehavior;
  setZeroFormattingBehavior(_: DateComponentsFormatter.ZeroFormattingBehavior)
  stringFromDateToDate(_: Date, toDate: Date): string;
  stringFromDateComponents(_: NSDateComponents): string;
  stringFromTimeInterval(from: number): string;
}

declare class NSDateFormatter extends NSFormatter {
  static dateFormatFromTemplateOptionsLocale(_: string, options: number, locale?: Locale): string;
  static localizedStringFromDateDateStyleTimeStyle(from: Date, dateStyle: DateFormatter.Style, timeStyle: DateFormatter.Style): string;
  AMSymbol: string;
  setAMSymbol(_: string)
  PMSymbol: string;
  setPMSymbol(_: string)
  calendar: NSCalendar;
  setCalendar(_: NSCalendar)
  dateFormat: string;
  setDateFormat(_: string)
  dateStyle: DateFormatter.Style;
  setDateStyle(_: DateFormatter.Style)
  defaultDate: Date;
  setDefaultDate(_: Date)
  doesRelativeDateFormatting: boolean;
  setDoesRelativeDateFormatting(_: boolean)
  eraSymbols: NSArray<string>;
  setEraSymbols(_: NSArray<string>)
  formatterBehavior: DateFormatter.Behavior;
  setFormatterBehavior(_: DateFormatter.Behavior)
  formattingContext: Formatter.Context;
  setFormattingContext(_: Formatter.Context)
  generatesCalendarDates: boolean;
  setGeneratesCalendarDates(_: boolean)
  gregorianStartDate: Date;
  setGregorianStartDate(_: Date)
  isLenient: boolean;
  setLenient(_: boolean)
  locale: Locale;
  setLocale(_: Locale)
  longEraSymbols: NSArray<string>;
  setLongEraSymbols(_: NSArray<string>)
  monthSymbols: NSArray<string>;
  setMonthSymbols(_: NSArray<string>)
  quarterSymbols: NSArray<string>;
  setQuarterSymbols(_: NSArray<string>)
  shortMonthSymbols: NSArray<string>;
  setShortMonthSymbols(_: NSArray<string>)
  shortQuarterSymbols: NSArray<string>;
  setShortQuarterSymbols(_: NSArray<string>)
  shortStandaloneMonthSymbols: NSArray<string>;
  setShortStandaloneMonthSymbols(_: NSArray<string>)
  shortStandaloneQuarterSymbols: NSArray<string>;
  setShortStandaloneQuarterSymbols(_: NSArray<string>)
  shortStandaloneWeekdaySymbols: NSArray<string>;
  setShortStandaloneWeekdaySymbols(_: NSArray<string>)
  shortWeekdaySymbols: NSArray<string>;
  setShortWeekdaySymbols(_: NSArray<string>)
  standaloneMonthSymbols: NSArray<string>;
  setStandaloneMonthSymbols(_: NSArray<string>)
  standaloneQuarterSymbols: NSArray<string>;
  setStandaloneQuarterSymbols(_: NSArray<string>)
  standaloneWeekdaySymbols: NSArray<string>;
  setStandaloneWeekdaySymbols(_: NSArray<string>)
  timeStyle: DateFormatter.Style;
  setTimeStyle(_: DateFormatter.Style)
  timeZone: NSTimeZone;
  setTimeZone(_: NSTimeZone)
  twoDigitStartDate: Date;
  setTwoDigitStartDate(_: Date)
  veryShortMonthSymbols: NSArray<string>;
  setVeryShortMonthSymbols(_: NSArray<string>)
  veryShortStandaloneMonthSymbols: NSArray<string>;
  setVeryShortStandaloneMonthSymbols(_: NSArray<string>)
  veryShortStandaloneWeekdaySymbols: NSArray<string>;
  setVeryShortStandaloneWeekdaySymbols(_: NSArray<string>)
  veryShortWeekdaySymbols: NSArray<string>;
  setVeryShortWeekdaySymbols(_: NSArray<string>)
  weekdaySymbols: NSArray<string>;
  setWeekdaySymbols(_: NSArray<string>)
  static defaultFormatterBehavior: DateFormatter.Behavior;
  setDefaultFormatterBehavior(_: DateFormatter.Behavior)
  dateFromString(_: string): Date;
  getObjectValueForStringRangeError(forString?: any, range: string, error?: NSRange): boolean;
  setLocalizedDateFormatFromTemplate(_: string): void;
  stringFromDate(_: Date): string;
}

declare class NSDateInterval extends NSObject implements NSCopying, NSSecureCoding {
  readonly duration: number;
  readonly endDate: Date;
  readonly startDate: Date;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  compare(_: NSDateInterval): ComparisonResult;
  containsDate(_: Date): boolean;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithStartDateDuration(startDate: Date, duration: number): this;
  static createWithStartDateEndDate(startDate: Date, endDate: Date): this;
  intersectionWithDateInterval(with_: NSDateInterval): NSDateInterval;
  intersectsDateInterval(_: NSDateInterval): boolean;
  isEqualToDateInterval(to: NSDateInterval): boolean;
}

declare class NSDateIntervalFormatter extends NSFormatter {
  calendar: NSCalendar;
  setCalendar(_: NSCalendar)
  dateStyle: DateIntervalFormatter.Style;
  setDateStyle(_: DateIntervalFormatter.Style)
  dateTemplate: string;
  setDateTemplate(_: string)
  locale: Locale;
  setLocale(_: Locale)
  timeStyle: DateIntervalFormatter.Style;
  setTimeStyle(_: DateIntervalFormatter.Style)
  timeZone: NSTimeZone;
  setTimeZone(_: NSTimeZone)
  stringFromDateToDate(_: Date, toDate: Date): string;
  stringFromDateInterval(_: NSDateInterval): string;
}

declare function NSDeallocateMemoryPages(ptr: any, bytes: number): void;
declare function NSDeallocateObject(object_: any): void;
declare var NSDeallocateZombies: boolean;

declare var NSDebugDescriptionErrorKey: string;

declare var NSDebugEnabled: boolean;

interface NSDecimal {
  _exponent: number;
  _length: number;
  _isNegative: number;
  _isCompact: number;
  _reserved: number;
  _mantissa: number;
}

declare var NSDecimal: NSDecimal;

declare function NSDecimalAdd(result: Decimal, leftOperand: Decimal, rightOperand: Decimal, roundingMode: NSDecimalNumber.RoundingMode): NSDecimalNumber.CalculationError;
declare function NSDecimalCompact(number: Decimal): void;
declare function NSDecimalCompare(leftOperand: Decimal, rightOperand: Decimal): ComparisonResult;
declare function NSDecimalCopy(destination: Decimal, source: Decimal): void;
declare function NSDecimalDivide(result: Decimal, leftOperand: Decimal, rightOperand: Decimal, roundingMode: NSDecimalNumber.RoundingMode): NSDecimalNumber.CalculationError;
declare function NSDecimalMultiply(result: Decimal, leftOperand: Decimal, rightOperand: Decimal, roundingMode: NSDecimalNumber.RoundingMode): NSDecimalNumber.CalculationError;
declare function NSDecimalMultiplyByPowerOf10(result: Decimal, number: Decimal, power: number, roundingMode: NSDecimalNumber.RoundingMode): NSDecimalNumber.CalculationError;
declare function NSDecimalNormalize(number1: Decimal, number2: Decimal, roundingMode: NSDecimalNumber.RoundingMode): NSDecimalNumber.CalculationError;
declare class NSDecimalNumber extends NSNumber {
  static defaultBehavior: NSDecimalNumberBehaviors;
  setDefaultBehavior(_: NSDecimalNumberBehaviors)
  static maximumDecimalNumber(): NSDecimalNumber;
  static minimumDecimalNumber(): NSDecimalNumber;
  static notANumber(): NSDecimalNumber;
  static one(): NSDecimalNumber;
  static zero(): NSDecimalNumber;
  decimalNumberByAdding(_: NSDecimalNumber): NSDecimalNumber;
  decimalNumberByAddingWithBehavior(_: NSDecimalNumber, withBehavior?: NSDecimalNumberBehaviors): NSDecimalNumber;
  decimalNumberByDividingBy(by: NSDecimalNumber): NSDecimalNumber;
  decimalNumberByDividingByWithBehavior(by: NSDecimalNumber, withBehavior?: NSDecimalNumberBehaviors): NSDecimalNumber;
  decimalNumberByMultiplyingBy(by: NSDecimalNumber): NSDecimalNumber;
  decimalNumberByMultiplyingByWithBehavior(by: NSDecimalNumber, withBehavior?: NSDecimalNumberBehaviors): NSDecimalNumber;
  decimalNumberByMultiplyingByPowerOf10(byPowerOf10: number): NSDecimalNumber;
  decimalNumberByMultiplyingByPowerOf10WithBehavior(byPowerOf10: number, withBehavior?: NSDecimalNumberBehaviors): NSDecimalNumber;
  decimalNumberByRaisingToPower(toPower: number): NSDecimalNumber;
  decimalNumberByRaisingToPowerWithBehavior(toPower: number, withBehavior?: NSDecimalNumberBehaviors): NSDecimalNumber;
  decimalNumberByRoundingAccordingToBehavior(accordingToBehavior?: NSDecimalNumberBehaviors): NSDecimalNumber;
  decimalNumberBySubtracting(_: NSDecimalNumber): NSDecimalNumber;
  decimalNumberBySubtractingWithBehavior(_: NSDecimalNumber, withBehavior?: NSDecimalNumberBehaviors): NSDecimalNumber;
  static createWithDecimal(decimal: Decimal): this;
  static createWithMantissaExponentIsNegative(mantissa: number, exponent: number, isNegative: boolean): this;
  static createWithString(string?: string): this;
  static createWithStringLocale(string?: string, locale?: any): this;
}

interface NSDecimalNumberBehaviors {
  exceptionDuringOperationErrorLeftOperandRightOperand(_: string, error: NSDecimalNumber.CalculationError, leftOperand: NSDecimalNumber, rightOperand?: NSDecimalNumber): NSDecimalNumber;
  roundingMode(): NSDecimalNumber.RoundingMode;
  scale(): number;
}

declare var NSDecimalNumberBehaviors: {
  prototype: NSDecimalNumberBehaviors;
};

declare var NSDecimalNumberDivideByZeroException: string;

declare var NSDecimalNumberExactnessException: string;

declare class NSDecimalNumberHandler extends NSObject implements NSCoding, NSDecimalNumberBehaviors {
  static decimalNumberHandlerWithRoundingModeScaleRaiseOnExactnessRaiseOnOverflowRaiseOnUnderflowRaiseOnDivideByZero(roundingMode: NSDecimalNumber.RoundingMode, scale: number, raiseOnExactness: boolean, raiseOnOverflow: boolean, raiseOnUnderflow: boolean, raiseOnDivideByZero: boolean): NSDecimalNumberHandler;
  static defaultDecimalNumberHandler(): NSDecimalNumberHandler;
  encodeWithCoder(with_: NSCoder): void;
  exceptionDuringOperationErrorLeftOperandRightOperand(_: string, error: NSDecimalNumber.CalculationError, leftOperand: NSDecimalNumber, rightOperand?: NSDecimalNumber): NSDecimalNumber;
  static createWithCoder(coder: NSCoder): this;
  static createWithRoundingModeScaleRaiseOnExactnessRaiseOnOverflowRaiseOnUnderflowRaiseOnDivideByZero(roundingMode: NSDecimalNumber.RoundingMode, scale: number, raiseOnExactness: boolean, raiseOnOverflow: boolean, raiseOnUnderflow: boolean, raiseOnDivideByZero: boolean): this;
  roundingMode(): NSDecimalNumber.RoundingMode;
  scale(): number;
}

declare var NSDecimalNumberOverflowException: string;

declare var NSDecimalNumberUnderflowException: string;

declare function NSDecimalPower(result: Decimal, number: Decimal, power: number, roundingMode: NSDecimalNumber.RoundingMode): NSDecimalNumber.CalculationError;
declare function NSDecimalRound(result: Decimal, number: Decimal, scale: number, roundingMode: NSDecimalNumber.RoundingMode): void;
declare function NSDecimalString(dcm: Decimal, locale: any): string;
declare function NSDecimalSubtract(result: Decimal, leftOperand: Decimal, rightOperand: Decimal, roundingMode: NSDecimalNumber.RoundingMode): NSDecimalNumber.CalculationError;

declare const NSDecompressionFailedError: number;
declare function NSDecrementExtraRefCountWasZero(object_: any): boolean;
declare var NSDefaultRunLoopMode: string;

declare class NSDeleteCommand extends NSScriptCommand {
  readonly keySpecifier: NSScriptObjectSpecifier;
  setReceiversSpecifier(_?: NSScriptObjectSpecifier): void;
}

declare var NSDestinationInvalidException: string;

declare class NSDictionary<KeyType, ObjectType> extends NSObject implements NSCopying, NSFastEnumeration, NSMutableCopying, NSSecureCoding, NSFastEnumeration {
  static sharedKeySetForKeys<KeyType>(forKeys: NSArray<KeyType>): any;
  readonly allKeys: NSArray<KeyType>;
  readonly allValues: NSArray<ObjectType>;
  readonly count: number;
  readonly descriptionInStringsFileFormat: string;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  allKeysForObject(for_: ObjectType): NSArray<KeyType>;
  countByEnumeratingWithStateObjectsCount(with_: NSFastEnumerationState, objects?: K, count: number): number;
  descriptionWithLocale(withLocale?: any): string;
  descriptionWithLocaleIndent(withLocale?: any, indent: number): string;
  encodeWithCoder(with_: NSCoder): void;
  enumerateKeysAndObjectsUsingBlock(_: (p1: KeyType, p2: ObjectType, p3: boolean) => void): void;
  enumerateKeysAndObjectsWithOptionsUsingBlock(options: NSEnumerationOptions, using: (p1: KeyType, p2: ObjectType, p3: boolean) => void): void;
  fileCreationDate(): Date;
  fileExtensionHidden(): boolean;
  fileGroupOwnerAccountID(): number;
  fileGroupOwnerAccountName(): string;
  fileHFSCreatorCode(): number;
  fileHFSTypeCode(): number;
  fileIsAppendOnly(): boolean;
  fileIsImmutable(): boolean;
  fileModificationDate(): Date;
  fileOwnerAccountID(): number;
  fileOwnerAccountName(): string;
  filePosixPermissions(): number;
  fileSize(): number;
  fileSystemFileNumber(): number;
  fileSystemNumber(): number;
  fileType(): string;
  static createWithCoder(coder: NSCoder): this;
  static createWithContentsOfFile(contentsOfFile: string): this;
  static createWithContentsOfURL(contentsOfURL: NSURL): this;
  static createWithContentsOfURL(contentsOfURL: NSURL): this;
  static createWithDictionary(dictionary: NSDictionary<KeyType, ObjectType>): this;
  static createWithDictionaryCopyItems(dictionary: NSDictionary<KeyType, ObjectType>, copyItems: boolean): this;
  static createWithObjectsForKeys(objects: NSArray<ObjectType>, forKeys: NSArray<KeyType>): this;
  static createWithObjectsForKeysCount(objects?: ObjectType, forKeys?: KeyType, count: number): this;
  static createWithObjectsAndKeys(objectsAndKeys: any): this;
  isEqualToDictionary(to: NSDictionary<KeyType, ObjectType>): boolean;
  keyEnumerator(): NSEnumerator<KeyType>;
  keysOfEntriesPassingTest(passingTest: (p1: KeyType, p2: ObjectType, p3: boolean) => boolean): Set<KeyType>;
  keysOfEntriesWithOptionsPassingTest(options: NSEnumerationOptions, passingTest: (p1: KeyType, p2: ObjectType, p3: boolean) => boolean): Set<KeyType>;
  keysSortedByValueUsingComparator(comparator: (p1: any, p2: any) => ComparisonResult): NSArray<KeyType>;
  keysSortedByValueUsingSelector(using: string): NSArray<KeyType>;
  keysSortedByValueWithOptionsUsingComparator(options: NSSortOptions, usingComparator: (p1: any, p2: any) => ComparisonResult): NSArray<KeyType>;
  objectEnumerator(): NSEnumerator<ObjectType>;
  objectForKey(forKey: KeyType): ObjectType;
  objectsForKeysNotFoundMarker(forKeys: NSArray<KeyType>, notFoundMarker: ObjectType): NSArray<ObjectType>;
  valueForKey(forKey: string): ObjectType;
  writeToURLError(error: NSURL): boolean;
}

declare var NSDidBecomeSingleThreadedNotification: string;

declare class NSDimension extends NSUnit implements NSSecureCoding {
  static baseUnit(): NSDimension;
  readonly converter: UnitConverter;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithSymbolConverter(symbol: string, converter: UnitConverter): this;
}

declare class NSDirectoryEnumerator<ObjectType> extends NSEnumerator<ObjectType> {
  readonly directoryAttributes: NSDictionary<string, any>;
  readonly fileAttributes: NSDictionary<string, any>;
  readonly isEnumeratingDirectoryPostOrder: boolean;
  readonly level: number;
  skipDescendants(): void;
  skipDescendents(): void;
}

interface NSDiscardableContent {
  beginContentAccess(): boolean;
  discardContentIfPossible(): void;
  endContentAccess(): void;
  isContentDiscarded(): boolean;
}

declare var NSDiscardableContent: {
  prototype: NSDiscardableContent;
};

declare var NSDistinctUnionOfArraysKeyValueOperator: string;

declare var NSDistinctUnionOfObjectsKeyValueOperator: string;

declare var NSDistinctUnionOfSetsKeyValueOperator: string;

declare class NSDistributedLock extends NSObject {
  readonly lockDate: Date;
  breakLock(): void;
  static createWithPath(path: string): this;
  tryLock(): boolean;
  unlock(): void;
}

declare class NSDistributedNotificationCenter extends NSNotificationCenter {
  static notificationCenterForType(_: string): DistributedNotificationCenter;
  suspended: boolean;
  setSuspended(_: boolean)
  addObserverSelectorNameObject(_: any, selector: string, name?: string, object_?: string): void;
  addObserverSelectorNameObjectSuspensionBehavior(_: any, selector: string, name?: string, object_?: string, suspensionBehavior: DistributedNotificationCenter.SuspensionBehavior): void;
  postNotificationNameObject(_: string, object_?: string): void;
  postNotificationNameObjectUserInfo(_: string, object_?: string, userInfo?: NSDictionary<any, any>): void;
  postNotificationNameObjectUserInfoDeliverImmediately(_: string, object_?: string, userInfo?: NSDictionary<any, any>, deliverImmediately: boolean): void;
  postNotificationNameObjectUserInfoOptions(_: string, object_?: string, userInfo?: NSDictionary<any, any>, options: DistributedNotificationCenter.Options): void;
  removeObserverNameObject(_: any, name?: string, object_?: string): void;
}

declare function NSDivideRect(inRect: NSRect, slice: NSRect, rem: NSRect, amount: number, edge: NSRectEdge): void;
interface NSEdgeInsets {
  top: number;
  left: number;
  bottom: number;
  right: number;
}

declare var NSEdgeInsets: NSEdgeInsets;

declare function NSEdgeInsetsEqual(aInsets: NSEdgeInsets, bInsets: NSEdgeInsets): boolean;
declare var NSEdgeInsetsZero: NSEdgeInsets;

declare function NSEndHashTableEnumeration(enumerator: NSHashEnumerator): void;
declare function NSEndMapTableEnumeration(enumerator: NSMapEnumerator): void;
declare class NSEnergyFormatter extends NSFormatter {
  isForFoodEnergyUse: boolean;
  setForFoodEnergyUse(_: boolean)
  numberFormatter: NumberFormatter;
  setNumberFormatter(_: NumberFormatter)
  unitStyle: Formatter.UnitStyle;
  setUnitStyle(_: Formatter.UnitStyle)
  stringFromJoules(_: number): string;
  stringFromValueUnit(_: number, unit: EnergyFormatter.Unit): string;
  unitStringFromJoulesUsedUnit(_: number, usedUnit?: EnergyFormatter.Unit): string;
  unitStringFromValueUnit(_: number, unit: EnergyFormatter.Unit): string;
}

declare function NSEnumerateHashTable(table: NSHashTable<any>): NSHashEnumerator;
declare function NSEnumerateMapTable(table: NSMapTable<any, any>): NSMapEnumerator;
declare class NSEnumerator<ObjectType> extends NSObject implements NSFastEnumeration {
  readonly allObjects: NSArray<ObjectType>;
  countByEnumeratingWithStateObjectsCount(with_: NSFastEnumerationState, objects?: any, count: number): number;
  nextObject(): ObjectType;
}

declare function NSEqualPoints(aPoint: NSPoint, bPoint: NSPoint): boolean;
declare function NSEqualRects(aRect: NSRect, bRect: NSRect): boolean;
declare function NSEqualSizes(aSize: NSSize, bSize: NSSize): boolean;
declare class NSError extends NSObject implements NSCopying, NSSecureCoding {
  static setUserInfoValueProviderForDomainProvider(forDomain: string, provider?: (p1: Error, p2: string) => any): void;
  static userInfoValueProviderForDomain(forDomain: string): (p1: Error, p2: string) => any;
  readonly code: number;
  readonly domain: string;
  readonly helpAnchor: string;
  readonly localizedDescription: string;
  readonly localizedFailureReason: string;
  readonly localizedRecoveryOptions: NSArray<string>;
  readonly localizedRecoverySuggestion: string;
  readonly recoveryAttempter: any;
  readonly userInfo: NSDictionary<string, any>;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithDomainCodeUserInfo(domain: string, code: number, userInfo?: NSDictionary<string, any>): this;
}

declare class NSException extends NSObject implements NSCopying, NSSecureCoding {
  readonly callStackReturnAddresses: NSArray<number>;
  readonly callStackSymbols: NSArray<string>;
  readonly name: string;
  readonly reason: string;
  readonly userInfo: NSDictionary<any, any>;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithNameReasonUserInfo(name: string, reason?: string, userInfo?: NSDictionary<any, any>): this;
  raise(): void;
}


declare const NSExecutableArchitectureMismatchError: number;

declare const NSExecutableErrorMaximum: number;

declare const NSExecutableErrorMinimum: number;

declare const NSExecutableLinkError: number;

declare const NSExecutableLoadError: number;

declare const NSExecutableNotLoadableError: number;

declare const NSExecutableRuntimeMismatchError: number;
declare class NSExistsCommand extends NSScriptCommand {
}

declare class NSExpression extends NSObject implements NSCopying, NSSecureCoding {
  static expressionForAnyKey(): NSExpression;
  static expressionForEvaluatedObject(): NSExpression;
  readonly arguments: NSArray<NSExpression>;
  readonly collection: any;
  readonly constantValue: any;
  readonly expressionBlock: (p1: any, p2: NSArray<NSExpression>, p3: NSMutableDictionary<any, any>) => any;
  readonly expressionType: NSExpression.ExpressionType;
  readonly falseExpression: NSExpression;
  readonly function: string;
  readonly keyPath: string;
  readonly leftExpression: NSExpression;
  readonly operand: NSExpression;
  readonly predicate: NSPredicate;
  readonly rightExpression: NSExpression;
  readonly trueExpression: NSExpression;
  readonly variable: string;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  allowEvaluation(): void;
  encodeWithCoder(with_: NSCoder): void;
  expressionValueWithWithContext(with_?: any, context?: NSMutableDictionary<any, any>): any;
  static createWithCoder(coder: NSCoder): this;
  static createWithExpressionType(expressionType: NSExpression.ExpressionType): this;
}

declare class NSExtensionContext extends NSObject {
  readonly inputItems: NSArray<any>;
  cancelRequestWithError(withError: Error): void;
  completeRequestReturningItemsCompletionHandler(returningItems?: NSArray<any>, completionHandler?: (p1: boolean) => void): void;
  openURLCompletionHandler(_: NSURL, completionHandler?: (p1: boolean) => void): void;
}

declare var NSExtensionHostDidBecomeActiveNotification: string;

declare var NSExtensionHostDidEnterBackgroundNotification: string;

declare var NSExtensionHostWillEnterForegroundNotification: string;

declare var NSExtensionHostWillResignActiveNotification: string;

declare class NSExtensionItem extends NSObject implements NSCopying, NSSecureCoding {
  attachments: NSArray<NSItemProvider>;
  setAttachments(_: NSArray<NSItemProvider>)
  attributedContentText: NSAttributedString;
  setAttributedContentText(_: NSAttributedString)
  attributedTitle: NSAttributedString;
  setAttributedTitle(_: NSAttributedString)
  userInfo: NSDictionary<any, any>;
  setUserInfo(_: NSDictionary<any, any>)
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare var NSExtensionItemAttachmentsKey: string;

declare var NSExtensionItemAttributedContentTextKey: string;

declare var NSExtensionItemAttributedTitleKey: string;

declare var NSExtensionItemsAndErrorsKey: string;

declare var NSExtensionJavaScriptPreprocessingResultsKey: string;

interface NSExtensionRequestHandling extends NSObject {
  beginRequestWithExtensionContext(with_: NSExtensionContext): void;
}

declare var NSExtensionRequestHandling: {
  prototype: NSExtensionRequestHandling;
};

declare function NSExtraRefCount(object_: any): number;
interface NSFastEnumeration {
  countByEnumeratingWithStateObjectsCount(with_: NSFastEnumerationState, objects?: any, count: number): number;
}

declare var NSFastEnumeration: {
  prototype: NSFastEnumeration;
};

interface NSFastEnumerationState {
  state: number;
  itemsPtr: any;
  mutationsPtr: number;
  extra: number;
}

declare var NSFastEnumerationState: NSFastEnumerationState;


declare const NSFeatureUnsupportedError: number;
declare class NSFileAccessIntent extends NSObject {
  static readingIntentWithURLOptions(with_: NSURL, options: NSFileCoordinator.ReadingOptions): NSFileAccessIntent;
  static writingIntentWithURLOptions(with_: NSURL, options: NSFileCoordinator.WritingOptions): NSFileAccessIntent;
  readonly URL: NSURL;
}

declare var NSFileAppendOnly: string;

declare var NSFileBusy: string;

declare class NSFileCoordinator extends NSObject {
  static addFilePresenter(_: NSFilePresenter): void;
  static removeFilePresenter(_: NSFilePresenter): void;
  purposeIdentifier: string;
  setPurposeIdentifier(_: string)
  static filePresenters(): NSArray<NSFilePresenter>;
  cancel(): void;
  coordinateAccessWithIntentsQueueByAccessor(with_: NSArray<NSFileAccessIntent>, queue: OperationQueue, byAccessor?: (p1: Error) => void): void;
  coordinateReadingItemAtURLOptionsErrorByAccessor(readingItemAt: NSURL, options: NSFileCoordinator.ReadingOptions, error?: Error, byAccessor: (p1: NSURL) => void): void;
  coordinateReadingItemAtURLOptionsWritingItemAtURLOptionsErrorByAccessor(readingItemAt: NSURL, options: NSFileCoordinator.ReadingOptions, writingItemAt: NSURL, options: NSFileCoordinator.WritingOptions, error?: Error, byAccessor: (p1: NSURL, p2: NSURL) => void): void;
  coordinateWritingItemAtURLOptionsErrorByAccessor(writingItemAt: NSURL, options: NSFileCoordinator.WritingOptions, error?: Error, byAccessor: (p1: NSURL) => void): void;
  coordinateWritingItemAtURLOptionsWritingItemAtURLOptionsErrorByAccessor(writingItemAt: NSURL, options: NSFileCoordinator.WritingOptions, writingItemAt: NSURL, options: NSFileCoordinator.WritingOptions, error?: Error, byAccessor: (p1: NSURL, p2: NSURL) => void): void;
  static createWithFilePresenter(filePresenter?: NSFilePresenter): this;
  itemWithAtDidChangeUbiquityAttributes(at: NSURL, didChangeUbiquityAttributes: Set<string>): void;
  itemAtURLDidMoveToURL(at: NSURL, didMoveTo: NSURL): void;
  itemAtURLWillMoveToURL(at: NSURL, willMoveTo: NSURL): void;
  prepareForReadingItemsAtURLsOptionsWritingItemsAtURLsOptionsErrorByAccessor(forReadingItemsAt: NSArray<NSURL>, options: NSFileCoordinator.ReadingOptions, writingItemsAt: NSArray<NSURL>, options: NSFileCoordinator.WritingOptions, error?: Error, byAccessor: (p1: () => void) => void): void;
}

declare var NSFileCreationDate: string;

declare var NSFileDeviceIdentifier: string;


declare const NSFileErrorMaximum: number;

declare const NSFileErrorMinimum: number;
declare var NSFileExtensionHidden: string;

declare var NSFileGroupOwnerAccountID: string;

declare var NSFileGroupOwnerAccountName: string;

declare var NSFileHFSCreatorCode: string;

declare var NSFileHFSTypeCode: string;

declare class NSFileHandle extends NSObject implements NSSecureCoding {
  static fileHandleForReadingAtPath(_: string): NSFileHandle;
  static fileHandleForReadingFromURLError(error: NSURL): NSFileHandle;
  static fileHandleForUpdatingAtPath(_: string): NSFileHandle;
  static fileHandleForUpdatingURLError(error: NSURL): NSFileHandle;
  static fileHandleForWritingAtPath(_: string): NSFileHandle;
  static fileHandleForWritingToURLError(error: NSURL): NSFileHandle;
  readonly availableData: Data;
  readonly fileDescriptor: number;
  readonly offsetInFile: number;
  readabilityHandler: (p1: FileHandle) => void;
  setReadabilityHandler(_: (p1: FileHandle) => void)
  writeabilityHandler: (p1: FileHandle) => void;
  setWriteabilityHandler(_: (p1: FileHandle) => void)
  static fileHandleWithNullDevice(): FileHandle;
  static fileHandleWithStandardError(): FileHandle;
  static fileHandleWithStandardInput(): FileHandle;
  static fileHandleWithStandardOutput(): FileHandle;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  acceptConnectionInBackgroundAndNotify(): void;
  acceptConnectionInBackgroundAndNotifyForModes(_?: NSArray<string>): void;
  closeAndReturnError(): boolean;
  closeFile(): void;
  encodeWithCoder(with_: NSCoder): void;
  getOffsetError(error: number): boolean;
  static createWithCoder(coder: NSCoder): this;
  static createWithFileDescriptor(fileDescriptor: number): this;
  static createWithFileDescriptorCloseOnDealloc(fileDescriptor: number, closeOnDealloc: boolean): this;
  readDataOfLength(_: number): Data;
  readDataToEndOfFile(): Data;
  readDataToEndOfFileAndReturnError(): Data;
  readDataUpToLengthError(error: number): Data;
  readInBackgroundAndNotify(): void;
  readInBackgroundAndNotifyForModes(_?: NSArray<string>): void;
  readToEndOfFileInBackgroundAndNotify(): void;
  readToEndOfFileInBackgroundAndNotifyForModes(_?: NSArray<string>): void;
  seekToEndOfFile(): number;
  seekToEndReturningOffsetError(error?: number): boolean;
  seekToFileOffset(_: number): void;
  seekToOffsetError(error: number): boolean;
  synchronizeAndReturnError(): boolean;
  synchronizeFile(): void;
  truncateAtOffsetError(error: number): boolean;
  truncateFileAtOffset(_: number): void;
  waitForDataInBackgroundAndNotify(): void;
  waitForDataInBackgroundAndNotifyForModes(_?: NSArray<string>): void;
  writeData(_: Data): void;
  writeDataError(error: Data): boolean;
}

declare var NSFileHandleConnectionAcceptedNotification: string;

declare var NSFileHandleDataAvailableNotification: string;

declare var NSFileHandleNotificationDataItem: string;

declare var NSFileHandleNotificationFileHandleItem: string;

declare var NSFileHandleOperationException: string;

declare var NSFileHandleReadCompletionNotification: string;

declare var NSFileHandleReadToEndOfFileCompletionNotification: string;

declare var NSFileImmutable: string;


declare const NSFileLockingError: number;
declare class NSFileManager extends NSObject {
  static fileManagerWithAuthorization(_: NSWorkspace.Authorization): NSFileManager;
  readonly currentDirectoryPath: string;
  delegate: NSFileManagerDelegate;
  setDelegate(_: NSFileManagerDelegate)
  readonly homeDirectoryForCurrentUser: NSURL;
  readonly temporaryDirectory: NSURL;
  readonly ubiquityIdentityToken: any;
  static defaultManager(): FileManager;
  URLForDirectoryInDomainAppropriateForURLCreateError(for_: FileManager.SearchPathDirectory, in_: FileManager.SearchPathDomainMask, appropriateFor?: NSURL, create: boolean): NSURL;
  URLForPublishingUbiquitousItemAtURLExpirationDateError(forPublishingUbiquitousItemAt: NSURL, expiration?: Date): NSURL;
  URLForUbiquityContainerIdentifier(forUbiquityContainerIdentifier?: string): NSURL;
  URLsForDirectoryInDomains(for_: FileManager.SearchPathDirectory, in_: FileManager.SearchPathDomainMask): NSArray<NSURL>;
  attributesOfFileSystemForPathError(error: string): NSDictionary<string, any>;
  attributesOfItemAtPathError(error: string): NSDictionary<string, any>;
  changeCurrentDirectoryPath(_: string): boolean;
  componentsToDisplayForPath(_: string): NSArray<string>;
  containerURLForSecurityApplicationGroupIdentifier(forSecurityApplicationGroupIdentifier: string): NSURL;
  contentsAtPath(_: string): Data;
  contentsEqualAtPathAndPath(_: string, andPath: string): boolean;
  contentsOfDirectoryAtPathError(error: string): NSArray<string>;
  contentsOfDirectoryAtURLIncludingPropertiesForKeysOptionsError(includingPropertiesForKeys: NSURL, options?: NSArray<string>, error: FileManager.DirectoryEnumerationOptions): NSArray<NSURL>;
  copyItemAtPathToPathError(toPath: string, error: string): boolean;
  copyItemAtURLToURLError(toURL: NSURL, error: NSURL): boolean;
  createDirectoryAtPathWithIntermediateDirectoriesAttributesError(withIntermediateDirectories: string, attributes: boolean, error?: NSDictionary<string, any>): boolean;
  createDirectoryAtURLWithIntermediateDirectoriesAttributesError(withIntermediateDirectories: NSURL, attributes: boolean, error?: NSDictionary<string, any>): boolean;
  createFileAtPathContentsAttributes(_: string, contents?: Data, attributes?: NSDictionary<string, any>): boolean;
  createSymbolicLinkAtPathWithDestinationPathError(withDestinationPath: string, error: string): boolean;
  createSymbolicLinkAtURLWithDestinationURLError(withDestinationURL: NSURL, error: NSURL): boolean;
  destinationOfSymbolicLinkAtPathError(error: string): string;
  displayNameAtPath(_: string): string;
  enumeratorAtPath(_: string): FileManager.DirectoryEnumerator<string>;
  enumeratorAtURLIncludingPropertiesForKeysOptionsErrorHandler(_: NSURL, includingPropertiesForKeys?: NSArray<string>, options: FileManager.DirectoryEnumerationOptions, errorHandler?: (p1: NSURL, p2: Error) => boolean): FileManager.DirectoryEnumerator<NSURL>;
  evictUbiquitousItemAtURLError(error: NSURL): boolean;
  fileExistsAtPath(_: string): boolean;
  fileExistsAtPathIsDirectory(_: string, isDirectory?: boolean): boolean;
  fileSystemRepresentationWithPath(_: string): string;
  getFileProviderServicesForItemAtURLCompletionHandler(_: NSURL, completionHandler?: (p1: NSDictionary<string, NSFileProviderService>, p2: Error) => void): void;
  getRelationshipOfDirectoryInDomainToItemAtURLError(ofDirectory: FileManager.URLRelationship, inDomain: FileManager.SearchPathDirectory, toItemAtURL: FileManager.SearchPathDomainMask, error: NSURL): boolean;
  getRelationshipOfDirectoryAtURLToItemAtURLError(ofDirectoryAtURL: FileManager.URLRelationship, toItemAtURL: NSURL, error: NSURL): boolean;
  homeDirectoryForUser(_: string): NSURL;
  isDeletableFileAtPath(_: string): boolean;
  isExecutableFileAtPath(_: string): boolean;
  isReadableFileAtPath(_: string): boolean;
  isUbiquitousItemAtURL(_: NSURL): boolean;
  isWritableFileAtPath(_: string): boolean;
  linkItemAtPathToPathError(toPath: string, error: string): boolean;
  linkItemAtURLToURLError(toURL: NSURL, error: NSURL): boolean;
  mountedVolumeURLsIncludingResourceValuesForKeysOptions(includingResourceValuesForKeys?: NSArray<string>, options: FileManager.VolumeEnumerationOptions): NSArray<NSURL>;
  moveItemAtPathToPathError(toPath: string, error: string): boolean;
  moveItemAtURLToURLError(toURL: NSURL, error: NSURL): boolean;
  removeItemAtPathError(error: string): boolean;
  removeItemAtURLError(error: NSURL): boolean;
  replaceItemAtURLWithItemAtURLBackupItemNameOptionsResultingItemURLError(withItemAtURL: NSURL, backupItemName: NSURL, options?: string, resultingItemURL: FileManager.ItemReplacementOptions, error?: NSURL): boolean;
  setAttributesOfItemAtPathError(ofItemAtPath: NSDictionary<string, any>, error: string): boolean;
  setUbiquitousItemAtURLDestinationURLError(itemAtURL: boolean, destinationURL: NSURL, error: NSURL): boolean;
  startDownloadingUbiquitousItemAtURLError(error: NSURL): boolean;
  stringWithFileSystemRepresentationLength(_: string, length: number): string;
  subpathsAtPath(_: string): NSArray<string>;
  subpathsOfDirectoryAtPathError(error: string): NSArray<string>;
  trashItemAtURLResultingItemURLError(resultingItemURL: NSURL, error?: NSURL): boolean;
  unmountVolumeAtURLOptionsCompletionHandler(_: NSURL, options: FileManager.UnmountOptions, completionHandler?: (p1: Error) => void): void;
}

interface NSFileManagerDelegate extends NSObject {
  fileManagerShouldCopyItemAtPathToPath?(_: FileManager, shouldCopyItemAtPath: string, toPath: string): boolean;
  fileManagerShouldCopyItemAtURLToURL?(_: FileManager, shouldCopyItemAtURL: NSURL, toURL: NSURL): boolean;
  fileManagerShouldLinkItemAtPathToPath?(_: FileManager, shouldLinkItemAtPath: string, toPath: string): boolean;
  fileManagerShouldLinkItemAtURLToURL?(_: FileManager, shouldLinkItemAtURL: NSURL, toURL: NSURL): boolean;
  fileManagerShouldMoveItemAtPathToPath?(_: FileManager, shouldMoveItemAtPath: string, toPath: string): boolean;
  fileManagerShouldMoveItemAtURLToURL?(_: FileManager, shouldMoveItemAtURL: NSURL, toURL: NSURL): boolean;
  fileManagerShouldProceedAfterErrorCopyingItemAtPathToPath?(_: FileManager, shouldProceedAfterError: Error, copyingItemAtPath: string, toPath: string): boolean;
  fileManagerShouldProceedAfterErrorCopyingItemAtURLToURL?(_: FileManager, shouldProceedAfterError: Error, copyingItemAtURL: NSURL, toURL: NSURL): boolean;
  fileManagerShouldProceedAfterErrorLinkingItemAtPathToPath?(_: FileManager, shouldProceedAfterError: Error, linkingItemAtPath: string, toPath: string): boolean;
  fileManagerShouldProceedAfterErrorLinkingItemAtURLToURL?(_: FileManager, shouldProceedAfterError: Error, linkingItemAtURL: NSURL, toURL: NSURL): boolean;
  fileManagerShouldProceedAfterErrorMovingItemAtPathToPath?(_: FileManager, shouldProceedAfterError: Error, movingItemAtPath: string, toPath: string): boolean;
  fileManagerShouldProceedAfterErrorMovingItemAtURLToURL?(_: FileManager, shouldProceedAfterError: Error, movingItemAtURL: NSURL, toURL: NSURL): boolean;
  fileManagerShouldProceedAfterErrorRemovingItemAtPath?(_: FileManager, shouldProceedAfterError: Error, removingItemAtPath: string): boolean;
  fileManagerShouldProceedAfterErrorRemovingItemAtURL?(_: FileManager, shouldProceedAfterError: Error, removingItemAtURL: NSURL): boolean;
  fileManagerShouldRemoveItemAtPath?(_: FileManager, shouldRemoveItemAtPath: string): boolean;
  fileManagerShouldRemoveItemAtURL?(_: FileManager, shouldRemoveItemAtURL: NSURL): boolean;
}

declare var NSFileManagerDelegate: {
  prototype: NSFileManagerDelegate;
};


declare const NSFileManagerUnmountBusyError: number;
declare var NSFileManagerUnmountDissentingProcessIdentifierErrorKey: string;


declare const NSFileManagerUnmountUnknownError: number;
declare var NSFileModificationDate: string;


declare const NSFileNoSuchFileError: number;
declare var NSFileOwnerAccountID: string;

declare var NSFileOwnerAccountName: string;

declare var NSFilePathErrorKey: string;

declare var NSFilePosixPermissions: string;

interface NSFilePresenter extends NSObject {
  observedPresentedItemUbiquityAttributes?: Set<string>;
  presentedItemOperationQueue: OperationQueue;
  presentedItemURL: NSURL;
  primaryPresentedItemURL?: NSURL;
  accommodatePresentedItemDeletionWithCompletionHandler?(completionHandler?: (p1: Error) => void): void;
  accommodatePresentedSubitemDeletionAtURLCompletionHandler?(at: NSURL, completionHandler?: (p1: Error) => void): void;
  presentedItemDidChange?(): void;
  presentedItemDidChangeUbiquityAttributes?(_: Set<string>): void;
  presentedItemDidGainVersion?(_: NSFileVersion): void;
  presentedItemDidLoseVersion?(_: NSFileVersion): void;
  presentedItemDidMoveToURL?(to: NSURL): void;
  presentedItemDidResolveConflictVersion?(_: NSFileVersion): void;
  presentedSubitemAtURLDidMoveToURL?(at: NSURL, didMoveTo: NSURL): void;
  presentedSubitemAtURLDidGainVersion?(at: NSURL, didGain: NSFileVersion): void;
  presentedSubitemAtURLDidLoseVersion?(at: NSURL, didLose: NSFileVersion): void;
  presentedSubitemAtURLDidResolveConflictVersion?(at: NSURL, didResolve: NSFileVersion): void;
  presentedSubitemDidAppearAtURL?(at: NSURL): void;
  presentedSubitemDidChangeAtURL?(at: NSURL): void;
  relinquishPresentedItemToReader?(toReader?: (p1: () => void) => void): void;
  relinquishPresentedItemToWriter?(toWriter?: (p1: () => void) => void): void;
  savePresentedItemChangesWithCompletionHandler?(completionHandler?: (p1: Error) => void): void;
}

declare var NSFilePresenter: {
  prototype: NSFilePresenter;
};

declare var NSFileProtectionComplete: string;

declare var NSFileProtectionCompleteUnlessOpen: string;

declare var NSFileProtectionCompleteUntilFirstUserAuthentication: string;

declare var NSFileProtectionKey: string;

declare var NSFileProtectionNone: string;

declare class NSFileProviderService extends NSObject {
  readonly name: string;
  getFileProviderConnectionWithCompletionHandler(completionHandler?: (p1: NSXPCConnection, p2: Error) => void): void;
}


declare const NSFileReadCorruptFileError: number;

declare const NSFileReadInapplicableStringEncodingError: number;

declare const NSFileReadInvalidFileNameError: number;

declare const NSFileReadNoPermissionError: number;

declare const NSFileReadNoSuchFileError: number;

declare const NSFileReadTooLargeError: number;

declare const NSFileReadUnknownError: number;

declare const NSFileReadUnknownStringEncodingError: number;

declare const NSFileReadUnsupportedSchemeError: number;
declare var NSFileReferenceCount: string;

declare class NSFileSecurity extends NSObject implements NSCopying, NSSecureCoding {
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare var NSFileSize: string;

declare var NSFileSystemFileNumber: string;

declare var NSFileSystemFreeNodes: string;

declare var NSFileSystemFreeSize: string;

declare var NSFileSystemNodes: string;

declare var NSFileSystemNumber: string;

declare var NSFileSystemSize: string;

declare var NSFileType: string;

declare var NSFileTypeBlockSpecial: string;

declare var NSFileTypeCharacterSpecial: string;

declare var NSFileTypeDirectory: string;

declare function NSFileTypeForHFSTypeCode(hfsFileTypeCode: number): string;
declare var NSFileTypeRegular: string;

declare var NSFileTypeSocket: string;

declare var NSFileTypeSymbolicLink: string;

declare var NSFileTypeUnknown: string;

declare class NSFileVersion extends NSObject {
  static addVersionOfItemAtURLWithContentsOfURLOptionsError(withContentsOfURL: NSURL, options: NSURL, error: NSFileVersion.AddingOptions): NSFileVersion;
  static currentVersionOfItemAtURL(at: NSURL): NSFileVersion;
  static getNonlocalVersionsOfItemAtURLCompletionHandler(at: NSURL, completionHandler?: (p1: NSArray<NSFileVersion>, p2: Error) => void): void;
  static otherVersionsOfItemAtURL(at: NSURL): NSArray<NSFileVersion>;
  static removeOtherVersionsOfItemAtURLError(error: NSURL): boolean;
  static temporaryDirectoryURLForNewVersionOfItemAtURL(at: NSURL): NSURL;
  static unresolvedConflictVersionsOfItemAtURL(at: NSURL): NSArray<NSFileVersion>;
  readonly URL: NSURL;
  readonly isConflict: boolean;
  isDiscardable: boolean;
  setDiscardable(_: boolean)
  readonly hasLocalContents: boolean;
  readonly hasThumbnail: boolean;
  readonly localizedName: string;
  readonly localizedNameOfSavingComputer: string;
  readonly modificationDate: Date;
  readonly originatorNameComponents: NSPersonNameComponents;
  readonly persistentIdentifier: NSCoding;
  isResolved: boolean;
  setResolved(_: boolean)
  removeAndReturnError(): boolean;
  replaceItemAtURLOptionsError(options: NSURL, error: NSFileVersion.ReplacingOptions): NSURL;
}

declare class NSFileWrapper extends NSObject implements NSSecureCoding {
  readonly isDirectory: boolean;
  fileAttributes: NSDictionary<string, any>;
  setFileAttributes(_: NSDictionary<string, any>)
  readonly fileWrappers: NSDictionary<string, FileWrapper>;
  filename: string;
  setFilename(_: string)
  icon: NSImage;
  setIcon(_: NSImage)
  preferredFilename: string;
  setPreferredFilename(_: string)
  readonly isRegularFile: boolean;
  readonly regularFileContents: Data;
  readonly serializedRepresentation: Data;
  readonly isSymbolicLink: boolean;
  readonly symbolicLinkDestinationURL: NSURL;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  addFileWrapper(_: FileWrapper): string;
  addRegularFileWithContentsPreferredFilename(_: Data, preferredFilename: string): string;
  encodeWithCoder(with_: NSCoder): void;
  static createWithDirectoryWithFileWrappers(directoryWithFileWrappers: NSDictionary<string, FileWrapper>): this;
  static createWithRegularFileWithContents(regularFileWithContents: Data): this;
  static createWithSymbolicLinkWithDestinationURL(symbolicLinkWithDestinationURL: NSURL): this;
  static createWithCoder(coder: NSCoder): this;
  static createWithSerializedRepresentation(serializedRepresentation: Data): this;
  static createWithUrlOptions(URL: NSURL, options: FileWrapper.ReadingOptions): this;
  keyForFileWrapper(_: FileWrapper): string;
  matchesContentsOfURL(_: NSURL): boolean;
  readFromURLOptionsError(options: NSURL, error: FileWrapper.ReadingOptions): boolean;
  removeFileWrapper(_: FileWrapper): void;
  writeToURLOptionsOriginalContentsURLError(options: NSURL, originalContentsURL: FileWrapper.WritingOptions, error?: NSURL): boolean;
}


declare const NSFileWriteFileExistsError: number;

declare const NSFileWriteInapplicableStringEncodingError: number;

declare const NSFileWriteInvalidFileNameError: number;

declare const NSFileWriteNoPermissionError: number;

declare const NSFileWriteOutOfSpaceError: number;

declare const NSFileWriteUnknownError: number;

declare const NSFileWriteUnsupportedSchemeError: number;

declare const NSFileWriteVolumeReadOnlyError: number;
declare class NSFormatter extends NSObject implements NSCoding, NSCopying {
  attributedStringForObjectValueWithDefaultAttributes(_: any, withDefaultAttributes?: NSDictionary<string, any>): NSAttributedString;
  editingStringForObjectValue(_: any): string;
  encodeWithCoder(with_: NSCoder): void;
  getObjectValueForStringErrorDescription(_?: any, forString: string, errorDescription?: string): boolean;
  static createWithCoder(coder: NSCoder): this;
  isPartialStringValidNewEditingStringErrorDescription(_: string, newEditingString?: string, errorDescription?: string): boolean;
  isPartialStringValidProposedSelectedRangeOriginalStringOriginalSelectedRangeErrorDescription(_: string, proposedSelectedRange?: NSRange, originalString: string, originalSelectedRange: NSRange, errorDescription?: string): boolean;
  stringForObjectValue(_?: any): string;
}


declare const NSFormattingError: number;

declare const NSFormattingErrorMaximum: number;

declare const NSFormattingErrorMinimum: number;
declare var NSFoundationVersionNumber: number;

declare function NSFrameAddress(frame: number): any;
declare function NSFreeHashTable(table: NSHashTable<any>): void;
declare function NSFreeMapTable(table: NSMapTable<any, any>): void;
declare function NSFullUserName(): string;
declare var NSGenericException: string;

declare class NSGetCommand extends NSScriptCommand {
}

declare function NSGetSizeAndAlignment(typePtr: string | any, sizep: number, alignp: number): string;
declare function NSGetUncaughtExceptionHandler(): (p1: NSException) => void;
declare var NSGlobalDomain: string;

declare var NSGrammarCorrections: string;

declare var NSGrammarRange: string;

declare var NSGrammarUserDescription: string;

declare function NSHFSTypeCodeFromFileType(fileTypeString: string): number;
declare function NSHFSTypeOfFile(fullFilePath: string): string;

declare const NSHPUXOperatingSystem: number;
declare class NSHTTPCookie extends NSObject {
  static cookieWithProperties(_: NSDictionary<string, any>): HTTPCookie;
  static cookiesWithResponseHeaderFieldsForURL(_: NSDictionary<string, string>, forURL: NSURL): NSArray<HTTPCookie>;
  static requestHeaderFieldsWithCookies(_: NSArray<HTTPCookie>): NSDictionary<string, string>;
  readonly isHTTPOnly: boolean;
  readonly comment: string;
  readonly commentURL: NSURL;
  readonly domain: string;
  readonly expiresDate: Date;
  readonly name: string;
  readonly path: string;
  readonly portList: NSArray<number>;
  readonly properties: NSDictionary<string, any>;
  readonly sameSitePolicy: string;
  readonly isSecure: boolean;
  readonly isSessionOnly: boolean;
  readonly value: string;
  readonly version: number;
  static createWithProperties(properties: NSDictionary<string, any>): this;
}

declare var NSHTTPCookieComment: string;

declare var NSHTTPCookieCommentURL: string;

declare var NSHTTPCookieDiscard: string;

declare var NSHTTPCookieDomain: string;

declare var NSHTTPCookieExpires: string;

declare var NSHTTPCookieManagerAcceptPolicyChangedNotification: string;

declare var NSHTTPCookieManagerCookiesChangedNotification: string;

declare var NSHTTPCookieMaximumAge: string;

declare var NSHTTPCookieName: string;

declare var NSHTTPCookieOriginURL: string;

declare var NSHTTPCookiePath: string;

declare var NSHTTPCookiePort: string;

declare var NSHTTPCookieSameSiteLax: string;

declare var NSHTTPCookieSameSitePolicy: string;

declare var NSHTTPCookieSameSiteStrict: string;

declare var NSHTTPCookieSecure: string;

declare class NSHTTPCookieStorage extends NSObject {
  static sharedCookieStorageForGroupContainerIdentifier(_: string): HTTPCookieStorage;
  cookieAcceptPolicy: HTTPCookie.AcceptPolicy;
  setCookieAcceptPolicy(_: HTTPCookie.AcceptPolicy)
  readonly cookies: NSArray<HTTPCookie>;
  static sharedHTTPCookieStorage(): HTTPCookieStorage;
  cookiesForURL(_: NSURL): NSArray<HTTPCookie>;
  deleteCookie(_: HTTPCookie): void;
  getCookiesForTaskCompletionHandler(_: URLSessionTask, completionHandler?: (p1: NSArray<HTTPCookie>) => void): void;
  removeCookiesSinceDate(_: Date): void;
  setCookie(_: HTTPCookie): void;
  setCookiesForURLMainDocumentURL(_: NSArray<HTTPCookie>, forURL?: NSURL, mainDocumentURL?: NSURL): void;
  sortedCookiesUsingDescriptors(_: NSArray<NSSortDescriptor>): NSArray<HTTPCookie>;
  storeCookiesForTask(_: NSArray<HTTPCookie>, forTask: URLSessionTask): void;
}

declare var NSHTTPCookieValue: string;

declare var NSHTTPCookieVersion: string;

declare class NSHTTPURLResponse extends NSURLResponse {
  static localizedStringForStatusCode(_: number): string;
  readonly allHeaderFields: NSDictionary<any, any>;
  readonly statusCode: number;
  static createWithUrlStatusCodeHTTPVersionHeaderFields(URL: NSURL, statusCode: number, HTTPVersion?: string, headerFields?: NSDictionary<string, string>): this;
  valueForHTTPHeaderField(_: string): string;
}

interface NSHashEnumerator {
  _pi: number;
  _si: number;
  _bs: any;
}

declare var NSHashEnumerator: NSHashEnumerator;

declare function NSHashGet(table: NSHashTable<any>, pointer: any): any;
declare function NSHashInsert(table: NSHashTable<any>, pointer: any): void;
declare function NSHashInsertIfAbsent(table: NSHashTable<any>, pointer: any): any;
declare function NSHashInsertKnownAbsent(table: NSHashTable<any>, pointer: any): void;
declare function NSHashRemove(table: NSHashTable<any>, pointer: any): void;
declare class NSHashTable<ObjectType> extends NSObject implements NSCopying, NSFastEnumeration, NSSecureCoding {
  static weakObjectsHashTable<ObjectType>(): NSHashTable<ObjectType>;
  readonly allObjects: NSArray<ObjectType>;
  readonly anyObject: ObjectType;
  readonly count: number;
  readonly pointerFunctions: NSPointerFunctions;
  readonly setRepresentation: Set<ObjectType>;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  addObject(_?: ObjectType): void;
  containsObject(_?: ObjectType): boolean;
  countByEnumeratingWithStateObjectsCount(with_: NSFastEnumerationState, objects?: any, count: number): number;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithOptionsCapacity(options: NSPointerFunctions.Options, capacity: number): this;
  static createWithPointerFunctionsCapacity(pointerFunctions: NSPointerFunctions, capacity: number): this;
  intersectWith_(_: NSHashTable<ObjectType>): void;
  intersectsWith_(_: NSHashTable<ObjectType>): boolean;
  isEqualWithTo(to: NSHashTable<ObjectType>): boolean;
  isSubsetOf(of: NSHashTable<ObjectType>): boolean;
  member(_?: ObjectType): ObjectType;
  minusWith_(_: NSHashTable<ObjectType>): void;
  objectEnumerator(): NSEnumerator<ObjectType>;
  removeAllObjects(): void;
  removeObject(_?: ObjectType): void;
  unionWith_(_: NSHashTable<ObjectType>): void;
}

interface NSHashTableCallBacks {
  hash: (p1: NSHashTable<any>, p2: any) => number;
  isEqual: (p1: NSHashTable<any>, p2: any, p3: any) => boolean;
  retain: (p1: NSHashTable<any>, p2: any) => void;
  release: (p1: NSHashTable<any>, p2: any) => void;
  describe: (p1: NSHashTable<any>, p2: any) => string;
}

declare var NSHashTableCallBacks: NSHashTableCallBacks;

declare var NSHashTableCopyIn: NSPointerFunctions.Options;

declare var NSHashTableObjectPointerPersonality: NSPointerFunctions.Options;

declare var NSHashTableStrongMemory: NSPointerFunctions.Options;

declare var NSHashTableWeakMemory: NSPointerFunctions.Options;

declare var NSHelpAnchorErrorKey: string;

declare function NSHomeDirectory(): string;
declare function NSHomeDirectoryForUser(userName: string): string;
declare class NSHost extends NSObject {
  static currentHost(): NSHost;
  static hostWithAddress(_: string): NSHost;
  static hostWithName(_?: string): NSHost;
  readonly address: string;
  readonly addresses: NSArray<string>;
  readonly localizedName: string;
  readonly name: string;
  readonly names: NSArray<string>;
  isEqualToHost(_: Host): boolean;
}


declare const NSISO2022JPStringEncoding: number;
declare class NSISO8601DateFormatter extends NSFormatter implements NSSecureCoding {
  static stringFromDateTimeZoneFormatOptions(_: Date, timeZone: NSTimeZone, formatOptions: ISO8601DateFormatter.Options): string;
  formatOptions: ISO8601DateFormatter.Options;
  setFormatOptions(_: ISO8601DateFormatter.Options)
  timeZone: NSTimeZone;
  setTimeZone(_: NSTimeZone)
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  dateFromString(_: string): Date;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  stringFromDate(_: Date): string;
}


declare const NSISOLatin1StringEncoding: number;

declare const NSISOLatin2StringEncoding: number;
declare var NSInconsistentArchiveException: string;

declare function NSIncrementExtraRefCount(object_: any): void;
declare class NSIndexPath extends NSObject implements NSCopying, NSSecureCoding {
  readonly item: number;
  readonly length: number;
  readonly section: number;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  compare(_: IndexPath): ComparisonResult;
  encodeWithCoder(with_: NSCoder): void;
  getIndexesRange(_: number, range: NSRange): void;
  indexAtPosition(atPosition: number): number;
  indexPathByAddingIndex(_: number): IndexPath;
  indexPathByRemovingLastIndex(): IndexPath;
  static createWithCoder(coder: NSCoder): this;
  static createWithIndex(index: number): this;
  static createWithIndexesLength(indexes?: number, length: number): this;
}

declare class NSIndexSet extends NSObject implements NSCopying, NSMutableCopying, NSSecureCoding {
  readonly count: number;
  readonly firstIndex: number;
  readonly lastIndex: number;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  containsIndex(_: number): boolean;
  containsIndexes(_: IndexSet): boolean;
  containsIndexesInRange(in_: NSRange): boolean;
  countOfIndexesInRange(in_: NSRange): number;
  encodeWithCoder(with_: NSCoder): void;
  enumerateIndexesInRangeOptionsUsingBlock(in_: NSRange, options: NSEnumerationOptions, using: (p1: number, p2: boolean) => void): void;
  enumerateIndexesUsingBlock(_: (p1: number, p2: boolean) => void): void;
  enumerateIndexesWithOptionsUsingBlock(options: NSEnumerationOptions, using: (p1: number, p2: boolean) => void): void;
  enumerateRangesInRangeOptionsUsingBlock(in_: NSRange, options: NSEnumerationOptions, using: (p1: NSRange, p2: boolean) => void): void;
  enumerateRangesUsingBlock(_: (p1: NSRange, p2: boolean) => void): void;
  enumerateRangesWithOptionsUsingBlock(options: NSEnumerationOptions, using: (p1: NSRange, p2: boolean) => void): void;
  getIndexesMaxCountInIndexRange(_: number, maxCount: number, inIndexRange?: NSRange): number;
  indexGreaterThanIndex(_: number): number;
  indexGreaterThanOrEqualToIndex(to: number): number;
  indexInRangeOptionsPassingTest(in_: NSRange, options: NSEnumerationOptions, passingTest: (p1: number, p2: boolean) => boolean): number;
  indexLessThanIndex(_: number): number;
  indexLessThanOrEqualToIndex(to: number): number;
  indexPassingTest(passingTest: (p1: number, p2: boolean) => boolean): number;
  indexWithOptionsPassingTest(options: NSEnumerationOptions, passingTest: (p1: number, p2: boolean) => boolean): number;
  indexesInRangeOptionsPassingTest(in_: NSRange, options: NSEnumerationOptions, passingTest: (p1: number, p2: boolean) => boolean): IndexSet;
  indexesPassingTest(passingTest: (p1: number, p2: boolean) => boolean): IndexSet;
  indexesWithOptionsPassingTest(options: NSEnumerationOptions, passingTest: (p1: number, p2: boolean) => boolean): IndexSet;
  static createWithCoder(coder: NSCoder): this;
  static createWithIndex(index: number): this;
  static createWithIndexSet(indexSet: IndexSet): this;
  static createWithIndexesInRange(indexesInRange: NSRange): this;
  intersectsIndexesInRange(in_: NSRange): boolean;
  isEqualToIndexSet(to: IndexSet): boolean;
}

declare class NSIndexSpecifier extends NSScriptObjectSpecifier {
  index: number;
  setIndex(_: number)
  static createWithContainerClassDescriptionContainerSpecifierKeyIndex(containerClassDescription: NSScriptClassDescription, containerSpecifier?: NSScriptObjectSpecifier, key: string, index: number): this;
}

declare class NSInputStream extends NSStream {
  static inputStreamWithData(_: Data): NSInputStream;
  static inputStreamWithFileAtPath(_: string): NSInputStream;
  static inputStreamWithURL(_: NSURL): NSInputStream;
  readonly hasBytesAvailable: boolean;
  getBufferLength(_?: string, length: number): boolean;
  static createWithData(data: Data): this;
  static createWithFileAtPath(fileAtPath: string): this;
  static createWithUrl(URL: NSURL): this;
  readMaxLength(_: string, maxLength: number): number;
}

declare function NSInsetRect(aRect: NSRect, dX: number, dY: number): NSRect;
declare var NSIntegerHashCallBacks: NSHashTableCallBacks;

declare var NSIntegerMapKeyCallBacks: NSMapTableKeyCallBacks;

declare var NSIntegerMapValueCallBacks: NSMapTableValueCallBacks;

declare function NSIntegralRect(aRect: NSRect): NSRect;
declare function NSIntegralRectWithOptions(aRect: NSRect, opts: AlignmentOptions): NSRect;
declare var NSInternalInconsistencyException: string;


declare const NSInternalScriptError: number;

declare const NSInternalSpecifierError: number;
declare function NSIntersectionRange(range1: NSRange, range2: NSRange): NSRange;
declare function NSIntersectionRect(aRect: NSRect, bRect: NSRect): NSRect;
declare function NSIntersectsRect(aRect: NSRect, bRect: NSRect): boolean;
declare var NSInvalidArchiveOperationException: string;

declare var NSInvalidArgumentException: string;


declare const NSInvalidIndexSpecifierError: number;
declare var NSInvalidReceivePortException: string;

declare var NSInvalidSendPortException: string;

declare var NSInvalidUnarchiveOperationException: string;

declare var NSInvocationOperationCancelledException: string;

declare var NSInvocationOperationVoidResultException: string;

declare function NSIsEmptyRect(aRect: NSRect): boolean;
declare function NSIsFreedObject(anObject: any): boolean;
declare var NSIsNilTransformerName: string;

declare var NSIsNotNilTransformerName: string;

declare class NSItemProvider extends NSObject implements NSCopying {
  readonly containerFrame: NSRect;
  readonly preferredPresentationSize: NSSize;
  previewImageHandler: (p1: (p1: NSSecureCoding, p2: Error) => void, p2: typeof NSObject, p3: NSDictionary<any, any>) => void;
  setPreviewImageHandler(_: (p1: (p1: NSSecureCoding, p2: Error) => void, p2: typeof NSObject, p3: NSDictionary<any, any>) => void)
  readonly registeredTypeIdentifiers: NSArray<string>;
  readonly sourceFrame: NSRect;
  suggestedName: string;
  setSuggestedName(_: string)
  canLoadObjectOfClass(ofClass: typeof NSObject): boolean;
  hasItemConformingToTypeIdentifier(_: string): boolean;
  hasRepresentationConformingToTypeIdentifierFileOptions(toTypeIdentifier: string, fileOptions: NSItemProviderFileOptions): boolean;
  static createWithContentsOfURL(contentsOfURL: NSURL): this;
  static createWithItemTypeIdentifier(item?: NSSecureCoding, typeIdentifier?: string): this;
  static createWithObject(object_: NSItemProviderWriting): this;
  loadDataRepresentationForTypeIdentifierCompletionHandler(forTypeIdentifier: string, completionHandler?: (p1: Data, p2: Error) => void): Progress;
  loadFileRepresentationForTypeIdentifierCompletionHandler(forTypeIdentifier: string, completionHandler?: (p1: NSURL, p2: Error) => void): Progress;
  loadInPlaceFileRepresentationForTypeIdentifierCompletionHandler(forTypeIdentifier: string, completionHandler?: (p1: NSURL, p2: boolean, p3: Error) => void): Progress;
  loadItemForTypeIdentifierOptionsCompletionHandler(forTypeIdentifier: string, options?: NSDictionary<any, any>, completionHandler?: (p1: NSSecureCoding, p2: Error) => void): void;
  loadObjectOfClassCompletionHandler(ofClass: typeof NSObject, completionHandler?: (p1: NSItemProviderReading, p2: Error) => void): Progress;
  loadPreviewImageWithOptionsCompletionHandler(options: NSDictionary<any, any>, completionHandler: (p1: NSSecureCoding, p2: Error) => void): void;
  registerCloudKitShareContainer(_: CKShare, container: CKContainer): void;
  registerCloudKitShareWithPreparationHandler(preparationHandler?: (p1: (p1: CKShare, p2: CKContainer, p3: Error) => void) => void): void;
  registerDataRepresentationForTypeIdentifierVisibilityLoadHandler(forTypeIdentifier: string, visibility: NSItemProviderRepresentationVisibility, loadHandler?: (p1: (p1: Data, p2: Error) => void) => Progress): void;
  registerFileRepresentationForTypeIdentifierFileOptionsVisibilityLoadHandler(forTypeIdentifier: string, fileOptions: NSItemProviderFileOptions, visibility: NSItemProviderRepresentationVisibility, loadHandler?: (p1: (p1: NSURL, p2: boolean, p3: Error) => void) => Progress): void;
  registerItemForTypeIdentifierLoadHandler(forTypeIdentifier: string, loadHandler: (p1: (p1: NSSecureCoding, p2: Error) => void, p2: typeof NSObject, p3: NSDictionary<any, any>) => void): void;
  registerObjectVisibility(_: NSItemProviderWriting, visibility: NSItemProviderRepresentationVisibility): void;
  registerObjectOfClassVisibilityLoadHandler(ofClass: typeof NSObject, visibility: NSItemProviderRepresentationVisibility, loadHandler?: (p1: (p1: NSItemProviderWriting, p2: Error) => void) => Progress): void;
  registeredTypeIdentifiersWithFileOptions(fileOptions: NSItemProviderFileOptions): NSArray<string>;
}

declare var NSItemProviderErrorDomain: string;

declare var NSItemProviderPreferredImageSizeKey: string;

interface NSItemProviderReading extends NSObject {
}

declare var NSItemProviderReading: {
  prototype: NSItemProviderReading;
   static objectWithItemProviderDataTypeIdentifierError(typeIdentifier: Data, error: string): NSItemProviderReading;
};

interface NSItemProviderWriting extends NSObject {
  writableTypeIdentifiersForItemProvider?: NSArray<string>;
  itemProviderVisibilityForRepresentationWithTypeIdentifier?(withTypeIdentifier: string): NSItemProviderRepresentationVisibility;
  loadDataWithTypeIdentifierForItemProviderCompletionHandler(withTypeIdentifier: string, forItemProviderCompletionHandler?: (p1: Data, p2: Error) => void): Progress;
}

declare var NSItemProviderWriting: {
  prototype: NSItemProviderWriting;
   static itemProviderVisibilityForRepresentationWithTypeIdentifier?(withTypeIdentifier: string): NSItemProviderRepresentationVisibility;
};

declare class NSJSONSerialization extends NSObject {
  static JSONObjectWithDataOptionsError(options: Data, error: JSONSerialization.ReadingOptions): any;
  static JSONObjectWithStreamOptionsError(options: InputStream, error: JSONSerialization.ReadingOptions): any;
  static dataWithJSONObjectOptionsError(options: any, error: JSONSerialization.WritingOptions): Data;
  static isValidJSONObject(_: any): boolean;
  static writeJSONObjectToStreamOptionsError(toStream: any, options: OutputStream, error: JSONSerialization.WritingOptions): number;
}


declare const NSJapaneseEUCStringEncoding: number;
declare var NSKeepAllocationStatistics: boolean;


declare const NSKeySpecifierEvaluationScriptError: number;
declare var NSKeyValueChangeIndexesKey: string;

declare var NSKeyValueChangeKindKey: string;

declare var NSKeyValueChangeNewKey: string;

declare var NSKeyValueChangeNotificationIsPriorKey: string;

declare var NSKeyValueChangeOldKey: string;


declare const NSKeyValueValidationError: number;
declare var NSKeyedArchiveRootObjectKey: string;

declare class NSKeyedArchiver extends NSCoder {
  static archivedDataWithRootObjectRequiringSecureCodingError(requiringSecureCoding: any, error: boolean): Data;
  static classNameForClass(for_: typeof NSObject): string;
  static setClassNameForClass(_?: string, for_: typeof NSObject): void;
  delegate: NSKeyedArchiverDelegate;
  setDelegate(_: NSKeyedArchiverDelegate)
  readonly encodedData: Data;
  outputFormat: PropertyListSerialization.PropertyListFormat;
  setOutputFormat(_: PropertyListSerialization.PropertyListFormat)
  requiresSecureCoding: boolean;
  setRequiresSecureCoding(_: boolean)
  classNameForClass(for_: typeof NSObject): string;
  finishEncoding(): void;
  static createWithRequiringSecureCoding(requiringSecureCoding: boolean): this;
  setClassNameForClass(_?: string, for_: typeof NSObject): void;
}

interface NSKeyedArchiverDelegate extends NSObject {
  archiverWillEncodeObject?(_: NSKeyedArchiver, willEncode: any): any;
  archiverDidEncodeObject?(_: NSKeyedArchiver, didEncode?: any): void;
  archiverWillReplaceObjectWithObject?(_: NSKeyedArchiver, willReplace?: any, with_?: any): void;
  archiverDidFinish?(_: NSKeyedArchiver): void;
  archiverWillFinish?(_: NSKeyedArchiver): void;
}

declare var NSKeyedArchiverDelegate: {
  prototype: NSKeyedArchiverDelegate;
};

declare class NSKeyedUnarchiver extends NSCoder {
  static classForClassName(forClassName: string): typeof NSObject;
  static setClassForClassName(_?: typeof NSObject, forClassName: string): void;
  static unarchivedObjectOfClassFromDataError(fromData: typeof NSObject, error: Data): any;
  static unarchivedObjectOfClassesWithFromDataError(fromData: Set<typeof NSObject>, error: Data): any;
  decodingFailurePolicy: NSCoder.DecodingFailurePolicy;
  setDecodingFailurePolicy(_: NSCoder.DecodingFailurePolicy)
  delegate: NSKeyedUnarchiverDelegate;
  setDelegate(_: NSKeyedUnarchiverDelegate)
  requiresSecureCoding: boolean;
  setRequiresSecureCoding(_: boolean)
  classForClassName(forClassName: string): typeof NSObject;
  finishDecoding(): void;
  static createForReadingFromData(forReadingFromData: Data): this;
  setClassForClassName(_?: typeof NSObject, forClassName: string): void;
}

interface NSKeyedUnarchiverDelegate extends NSObject {
  unarchiverDidDecodeObject?(_: NSKeyedUnarchiver, didDecode?: any): any;
  unarchiverWillReplaceObjectWithObject?(_: NSKeyedUnarchiver, willReplace: any, with_: any): void;
  unarchiverCannotDecodeObjectOfClassNameOriginalClasses?(_: NSKeyedUnarchiver, cannotDecodeObjectOfClassName: string, originalClasses: NSArray<string>): typeof NSObject;
  unarchiverDidFinish?(_: NSKeyedUnarchiver): void;
  unarchiverWillFinish?(_: NSKeyedUnarchiver): void;
}

declare var NSKeyedUnarchiverDelegate: {
  prototype: NSKeyedUnarchiverDelegate;
};

declare class NSLengthFormatter extends NSFormatter {
  isForPersonHeightUse: boolean;
  setForPersonHeightUse(_: boolean)
  numberFormatter: NumberFormatter;
  setNumberFormatter(_: NumberFormatter)
  unitStyle: Formatter.UnitStyle;
  setUnitStyle(_: Formatter.UnitStyle)
  stringFromMeters(_: number): string;
  stringFromValueUnit(_: number, unit: LengthFormatter.Unit): string;
  unitStringFromMetersUsedUnit(_: number, usedUnit?: LengthFormatter.Unit): string;
  unitStringFromValueUnit(_: number, unit: LengthFormatter.Unit): string;
}

declare var NSLinguisticTagAdjective: string;

declare var NSLinguisticTagAdverb: string;

declare var NSLinguisticTagClassifier: string;

declare var NSLinguisticTagCloseParenthesis: string;

declare var NSLinguisticTagCloseQuote: string;

declare var NSLinguisticTagConjunction: string;

declare var NSLinguisticTagDash: string;

declare var NSLinguisticTagDeterminer: string;

declare var NSLinguisticTagIdiom: string;

declare var NSLinguisticTagInterjection: string;

declare var NSLinguisticTagNoun: string;

declare var NSLinguisticTagNumber: string;

declare var NSLinguisticTagOpenParenthesis: string;

declare var NSLinguisticTagOpenQuote: string;

declare var NSLinguisticTagOrganizationName: string;

declare var NSLinguisticTagOther: string;

declare var NSLinguisticTagOtherPunctuation: string;

declare var NSLinguisticTagOtherWhitespace: string;

declare var NSLinguisticTagOtherWord: string;

declare var NSLinguisticTagParagraphBreak: string;

declare var NSLinguisticTagParticle: string;

declare var NSLinguisticTagPersonalName: string;

declare var NSLinguisticTagPlaceName: string;

declare var NSLinguisticTagPreposition: string;

declare var NSLinguisticTagPronoun: string;

declare var NSLinguisticTagPunctuation: string;

declare var NSLinguisticTagSchemeLanguage: string;

declare var NSLinguisticTagSchemeLemma: string;

declare var NSLinguisticTagSchemeLexicalClass: string;

declare var NSLinguisticTagSchemeNameType: string;

declare var NSLinguisticTagSchemeNameTypeOrLexicalClass: string;

declare var NSLinguisticTagSchemeScript: string;

declare var NSLinguisticTagSchemeTokenType: string;

declare var NSLinguisticTagSentenceTerminator: string;

declare var NSLinguisticTagVerb: string;

declare var NSLinguisticTagWhitespace: string;

declare var NSLinguisticTagWord: string;

declare var NSLinguisticTagWordJoiner: string;

declare class NSLinguisticTagger extends NSObject {
  static createWithTagSchemesOptions(tagSchemes: NSArray<string>, options: number): this;
}

declare class NSListFormatter extends NSFormatter {
  static localizedStringByJoiningStrings(_: NSArray<string>): string;
  itemFormatter: Formatter;
  setItemFormatter(_: Formatter)
  locale: Locale;
  setLocale(_: Locale)
  stringFromItems(from: NSArray<any>): string;
}

declare var NSLoadedClasses: string;

declare var NSLocalNotificationCenterType: string;

declare class NSLocale extends NSObject implements NSCopying, NSSecureCoding {
  static canonicalLanguageIdentifierFromString(from: string): string;
  static canonicalLocaleIdentifierFromString(from: string): string;
  static characterDirectionForLanguage(forLanguage: string): NSLocale.LanguageDirection;
  static componentsFromLocaleIdentifier(fromLocaleIdentifier: string): NSDictionary<string, string>;
  static lineDirectionForLanguage(forLanguage: string): NSLocale.LanguageDirection;
  static localeIdentifierFromComponents(fromComponents: NSDictionary<string, string>): string;
  static localeIdentifierFromWindowsLocaleCode(fromWindowsLocaleCode: number): string;
  static windowsLocaleCodeFromLocaleIdentifier(fromLocaleIdentifier: string): number;
  readonly alternateQuotationBeginDelimiter: string;
  readonly alternateQuotationEndDelimiter: string;
  readonly calendarIdentifier: string;
  readonly collationIdentifier: string;
  readonly collatorIdentifier: string;
  readonly countryCode: string;
  readonly currencyCode: string;
  readonly currencySymbol: string;
  readonly decimalSeparator: string;
  readonly exemplarCharacterSet: CharacterSet;
  readonly groupingSeparator: string;
  readonly languageCode: string;
  readonly localeIdentifier: string;
  readonly quotationBeginDelimiter: string;
  readonly quotationEndDelimiter: string;
  readonly scriptCode: string;
  readonly usesMetricSystem: boolean;
  readonly variantCode: string;
  static ISOCountryCodes(): NSArray<string>;
  static ISOCurrencyCodes(): NSArray<string>;
  static ISOLanguageCodes(): NSArray<string>;
  static autoupdatingCurrentLocale(): Locale;
  static availableLocaleIdentifiers(): NSArray<string>;
  static commonISOCurrencyCodes(): NSArray<string>;
  static currentLocale(): Locale;
  static preferredLanguages(): NSArray<string>;
  static systemLocale(): Locale;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  displayNameForKeyValue(forKey: string, value: any): string;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithLocaleIdentifier(localeIdentifier: string): this;
  localizedStringForCalendarIdentifier(forCalendarIdentifier: string): string;
  localizedStringForCollationIdentifier(forCollationIdentifier: string): string;
  localizedStringForCollatorIdentifier(forCollatorIdentifier: string): string;
  localizedStringForCountryCode(forCountryCode: string): string;
  localizedStringForCurrencyCode(forCurrencyCode: string): string;
  localizedStringForLanguageCode(forLanguageCode: string): string;
  localizedStringForLocaleIdentifier(forLocaleIdentifier: string): string;
  localizedStringForScriptCode(forScriptCode: string): string;
  localizedStringForVariantCode(forVariantCode: string): string;
  objectForKey(forKey: string): any;
}

declare var NSLocaleAlternateQuotationBeginDelimiterKey: string;

declare var NSLocaleAlternateQuotationEndDelimiterKey: string;

declare var NSLocaleCalendar: string;

declare var NSLocaleCollationIdentifier: string;

declare var NSLocaleCollatorIdentifier: string;

declare var NSLocaleCountryCode: string;

declare var NSLocaleCurrencyCode: string;

declare var NSLocaleCurrencySymbol: string;

declare var NSLocaleDecimalSeparator: string;

declare var NSLocaleExemplarCharacterSet: string;

declare var NSLocaleGroupingSeparator: string;

declare var NSLocaleIdentifier: string;

declare var NSLocaleLanguageCode: string;

declare var NSLocaleMeasurementSystem: string;

declare var NSLocaleQuotationBeginDelimiterKey: string;

declare var NSLocaleQuotationEndDelimiterKey: string;

declare var NSLocaleScriptCode: string;

declare var NSLocaleUsesMetricSystem: string;

declare var NSLocaleVariantCode: string;

declare var NSLocalizedDescriptionKey: string;

declare var NSLocalizedFailureErrorKey: string;

declare var NSLocalizedFailureReasonErrorKey: string;

declare var NSLocalizedRecoveryOptionsErrorKey: string;

declare var NSLocalizedRecoverySuggestionErrorKey: string;

declare class NSLock extends NSObject implements NSLocking {
  name: string;
  setName(_: string)
  lock(): void;
  lockBeforeDate(before: Date): boolean;
  tryLock(): boolean;
  unlock(): void;
}

interface NSLocking {
  lock(): void;
  unlock(): void;
}

declare var NSLocking: {
  prototype: NSLocking;
};

declare function NSLogPageSize(): number;
declare class NSLogicalTest extends NSScriptWhoseTest {
  static createWithAndTestWithTests(andTestWithTests: NSArray<NSSpecifierTest>): this;
  static createWithNotTestWithTest(notTestWithTest: NSScriptWhoseTest): this;
  static createWithOrTestWithTests(orTestWithTests: NSArray<NSSpecifierTest>): this;
}


declare const NSMACHOperatingSystem: number;

declare const NSMacOSRomanStringEncoding: number;
declare var NSMachErrorDomain: string;

declare class NSMachPort extends NSPort {
  static portWithMachPort(withMachPort: number): Port;
  static portWithMachPortOptions(withMachPort: number, options: NSMachPort.Options): Port;
  readonly machPort: number;
  delegate(): NSMachPortDelegate;
  static createWithMachPort(machPort: number): this;
  static createWithMachPortOptions(machPort: number, options: NSMachPort.Options): this;
  setDelegate(_?: NSMachPortDelegate): void;
}

interface NSMachPortDelegate extends NSPortDelegate {
  handleMachMessage?(_: any): void;
}

declare var NSMachPortDelegate: {
  prototype: NSMachPortDelegate;
};

declare var NSMallocException: string;

interface NSMapEnumerator {
  _pi: number;
  _si: number;
  _bs: any;
}

declare var NSMapEnumerator: NSMapEnumerator;

declare function NSMapGet(table: NSMapTable<any, any>, key: any): any;
declare function NSMapInsert(table: NSMapTable<any, any>, key: any, value: any): void;
declare function NSMapInsertIfAbsent(table: NSMapTable<any, any>, key: any, value: any): any;
declare function NSMapInsertKnownAbsent(table: NSMapTable<any, any>, key: any, value: any): void;
declare function NSMapMember(table: NSMapTable<any, any>, key: any, originalKey: any, value: any): boolean;
declare function NSMapRemove(table: NSMapTable<any, any>, key: any): void;
declare class NSMapTable<KeyType, ObjectType> extends NSObject implements NSCopying, NSFastEnumeration, NSSecureCoding {
  static strongToStrongObjectsMapTable<KeyType, ObjectType>(): NSMapTable<KeyType, ObjectType>;
  static strongToWeakObjectsMapTable<KeyType, ObjectType>(): NSMapTable<KeyType, ObjectType>;
  static weakToStrongObjectsMapTable<KeyType, ObjectType>(): NSMapTable<KeyType, ObjectType>;
  static weakToWeakObjectsMapTable<KeyType, ObjectType>(): NSMapTable<KeyType, ObjectType>;
  readonly count: number;
  readonly keyPointerFunctions: NSPointerFunctions;
  readonly valuePointerFunctions: NSPointerFunctions;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  countByEnumeratingWithStateObjectsCount(with_: NSFastEnumerationState, objects?: any, count: number): number;
  dictionaryRepresentation(): NSDictionary<KeyType, ObjectType>;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithKeyOptionsValueOptionsCapacity(keyOptions: NSPointerFunctions.Options, valueOptions: NSPointerFunctions.Options, capacity: number): this;
  static createWithKeyPointerFunctionsValuePointerFunctionsCapacity(keyPointerFunctions: NSPointerFunctions, valuePointerFunctions: NSPointerFunctions, capacity: number): this;
  keyEnumerator(): NSEnumerator<KeyType>;
  objectEnumerator(): NSEnumerator<ObjectType>;
  objectForKey(forKey?: KeyType): ObjectType;
  removeAllObjects(): void;
  removeObjectForKey(forKey?: KeyType): void;
  setObjectForKey(_?: ObjectType, forKey?: KeyType): void;
}

declare var NSMapTableCopyIn: NSPointerFunctions.Options;

interface NSMapTableKeyCallBacks {
  hash: (p1: NSMapTable<any, any>, p2: any) => number;
  isEqual: (p1: NSMapTable<any, any>, p2: any, p3: any) => boolean;
  retain: (p1: NSMapTable<any, any>, p2: any) => void;
  release: (p1: NSMapTable<any, any>, p2: any) => void;
  describe: (p1: NSMapTable<any, any>, p2: any) => string;
  notAKeyMarker: any;
}

declare var NSMapTableKeyCallBacks: NSMapTableKeyCallBacks;

declare var NSMapTableObjectPointerPersonality: NSPointerFunctions.Options;

declare var NSMapTableStrongMemory: NSPointerFunctions.Options;

interface NSMapTableValueCallBacks {
  retain: (p1: NSMapTable<any, any>, p2: any) => void;
  release: (p1: NSMapTable<any, any>, p2: any) => void;
  describe: (p1: NSMapTable<any, any>, p2: any) => string;
}

declare var NSMapTableValueCallBacks: NSMapTableValueCallBacks;

declare var NSMapTableWeakMemory: NSPointerFunctions.Options;

declare class NSMassFormatter extends NSFormatter {
  isForPersonMassUse: boolean;
  setForPersonMassUse(_: boolean)
  numberFormatter: NumberFormatter;
  setNumberFormatter(_: NumberFormatter)
  unitStyle: Formatter.UnitStyle;
  setUnitStyle(_: Formatter.UnitStyle)
  stringFromKilograms(_: number): string;
  stringFromValueUnit(_: number, unit: MassFormatter.Unit): string;
  unitStringFromKilogramsUsedUnit(_: number, usedUnit?: MassFormatter.Unit): string;
  unitStringFromValueUnit(_: number, unit: MassFormatter.Unit): string;
}

declare var NSMaximumKeyValueOperator: string;

declare class NSMeasurement<UnitType> extends NSObject implements NSCopying, NSSecureCoding {
  readonly doubleValue: number;
  readonly unit: UnitType;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  canBeConvertedToUnit(to: Unit): boolean;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithDoubleValueUnit(doubleValue: number, unit: UnitType): this;
  addingWith_(_: NSMeasurement<UnitType>): NSMeasurement<UnitType>;
  measurementByConvertingToUnit(to: Unit): NSMeasurement<any>;
  subtractingWith_(_: NSMeasurement<UnitType>): NSMeasurement<UnitType>;
}

declare class NSMeasurementFormatter extends NSFormatter implements NSSecureCoding {
  locale: Locale;
  setLocale(_: Locale)
  numberFormatter: NumberFormatter;
  setNumberFormatter(_: NumberFormatter)
  unitOptions: MeasurementFormatter.UnitOptions;
  setUnitOptions(_: MeasurementFormatter.UnitOptions)
  unitStyle: Formatter.UnitStyle;
  setUnitStyle(_: Formatter.UnitStyle)
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  stringFromMeasurement(_: NSMeasurement<any>): string;
  stringFromUnit(_: Unit): string;
}

declare class NSMessagePort extends NSPort {
}

declare class NSMetadataItem extends NSObject {
  readonly attributes: NSArray<string>;
  static createWithUrl(URL: NSURL): this;
  valueForAttribute(forAttribute: string): any;
  valuesForAttributes(forAttributes: NSArray<string>): NSDictionary<string, any>;
}

declare var NSMetadataItemAcquisitionMakeKey: string;

declare var NSMetadataItemAcquisitionModelKey: string;

declare var NSMetadataItemAlbumKey: string;

declare var NSMetadataItemAltitudeKey: string;

declare var NSMetadataItemApertureKey: string;

declare var NSMetadataItemAppleLoopDescriptorsKey: string;

declare var NSMetadataItemAppleLoopsKeyFilterTypeKey: string;

declare var NSMetadataItemAppleLoopsLoopModeKey: string;

declare var NSMetadataItemAppleLoopsRootKeyKey: string;

declare var NSMetadataItemApplicationCategoriesKey: string;

declare var NSMetadataItemAttributeChangeDateKey: string;

declare var NSMetadataItemAudiencesKey: string;

declare var NSMetadataItemAudioBitRateKey: string;

declare var NSMetadataItemAudioChannelCountKey: string;

declare var NSMetadataItemAudioEncodingApplicationKey: string;

declare var NSMetadataItemAudioSampleRateKey: string;

declare var NSMetadataItemAudioTrackNumberKey: string;

declare var NSMetadataItemAuthorAddressesKey: string;

declare var NSMetadataItemAuthorEmailAddressesKey: string;

declare var NSMetadataItemAuthorsKey: string;

declare var NSMetadataItemBitsPerSampleKey: string;

declare var NSMetadataItemCFBundleIdentifierKey: string;

declare var NSMetadataItemCameraOwnerKey: string;

declare var NSMetadataItemCityKey: string;

declare var NSMetadataItemCodecsKey: string;

declare var NSMetadataItemColorSpaceKey: string;

declare var NSMetadataItemCommentKey: string;

declare var NSMetadataItemComposerKey: string;

declare var NSMetadataItemContactKeywordsKey: string;

declare var NSMetadataItemContentCreationDateKey: string;

declare var NSMetadataItemContentModificationDateKey: string;

declare var NSMetadataItemContentTypeKey: string;

declare var NSMetadataItemContentTypeTreeKey: string;

declare var NSMetadataItemContributorsKey: string;

declare var NSMetadataItemCopyrightKey: string;

declare var NSMetadataItemCountryKey: string;

declare var NSMetadataItemCoverageKey: string;

declare var NSMetadataItemCreatorKey: string;

declare var NSMetadataItemDateAddedKey: string;

declare var NSMetadataItemDeliveryTypeKey: string;

declare var NSMetadataItemDescriptionKey: string;

declare var NSMetadataItemDirectorKey: string;

declare var NSMetadataItemDisplayNameKey: string;

declare var NSMetadataItemDownloadedDateKey: string;

declare var NSMetadataItemDueDateKey: string;

declare var NSMetadataItemDurationSecondsKey: string;

declare var NSMetadataItemEXIFGPSVersionKey: string;

declare var NSMetadataItemEXIFVersionKey: string;

declare var NSMetadataItemEditorsKey: string;

declare var NSMetadataItemEmailAddressesKey: string;

declare var NSMetadataItemEncodingApplicationsKey: string;

declare var NSMetadataItemExecutableArchitecturesKey: string;

declare var NSMetadataItemExecutablePlatformKey: string;

declare var NSMetadataItemExposureModeKey: string;

declare var NSMetadataItemExposureProgramKey: string;

declare var NSMetadataItemExposureTimeSecondsKey: string;

declare var NSMetadataItemExposureTimeStringKey: string;

declare var NSMetadataItemFNumberKey: string;

declare var NSMetadataItemFSContentChangeDateKey: string;

declare var NSMetadataItemFSCreationDateKey: string;

declare var NSMetadataItemFSNameKey: string;

declare var NSMetadataItemFSSizeKey: string;

declare var NSMetadataItemFinderCommentKey: string;

declare var NSMetadataItemFlashOnOffKey: string;

declare var NSMetadataItemFocalLength35mmKey: string;

declare var NSMetadataItemFocalLengthKey: string;

declare var NSMetadataItemFontsKey: string;

declare var NSMetadataItemGPSAreaInformationKey: string;

declare var NSMetadataItemGPSDOPKey: string;

declare var NSMetadataItemGPSDateStampKey: string;

declare var NSMetadataItemGPSDestBearingKey: string;

declare var NSMetadataItemGPSDestDistanceKey: string;

declare var NSMetadataItemGPSDestLatitudeKey: string;

declare var NSMetadataItemGPSDestLongitudeKey: string;

declare var NSMetadataItemGPSDifferentalKey: string;

declare var NSMetadataItemGPSMapDatumKey: string;

declare var NSMetadataItemGPSMeasureModeKey: string;

declare var NSMetadataItemGPSProcessingMethodKey: string;

declare var NSMetadataItemGPSStatusKey: string;

declare var NSMetadataItemGPSTrackKey: string;

declare var NSMetadataItemGenreKey: string;

declare var NSMetadataItemHasAlphaChannelKey: string;

declare var NSMetadataItemHeadlineKey: string;

declare var NSMetadataItemISOSpeedKey: string;

declare var NSMetadataItemIdentifierKey: string;

declare var NSMetadataItemImageDirectionKey: string;

declare var NSMetadataItemInformationKey: string;

declare var NSMetadataItemInstantMessageAddressesKey: string;

declare var NSMetadataItemInstructionsKey: string;

declare var NSMetadataItemIsApplicationManagedKey: string;

declare var NSMetadataItemIsGeneralMIDISequenceKey: string;

declare var NSMetadataItemIsLikelyJunkKey: string;

declare var NSMetadataItemIsUbiquitousKey: string;

declare var NSMetadataItemKeySignatureKey: string;

declare var NSMetadataItemKeywordsKey: string;

declare var NSMetadataItemKindKey: string;

declare var NSMetadataItemLanguagesKey: string;

declare var NSMetadataItemLastUsedDateKey: string;

declare var NSMetadataItemLatitudeKey: string;

declare var NSMetadataItemLayerNamesKey: string;

declare var NSMetadataItemLensModelKey: string;

declare var NSMetadataItemLongitudeKey: string;

declare var NSMetadataItemLyricistKey: string;

declare var NSMetadataItemMaxApertureKey: string;

declare var NSMetadataItemMediaTypesKey: string;

declare var NSMetadataItemMeteringModeKey: string;

declare var NSMetadataItemMusicalGenreKey: string;

declare var NSMetadataItemMusicalInstrumentCategoryKey: string;

declare var NSMetadataItemMusicalInstrumentNameKey: string;

declare var NSMetadataItemNamedLocationKey: string;

declare var NSMetadataItemNumberOfPagesKey: string;

declare var NSMetadataItemOrganizationsKey: string;

declare var NSMetadataItemOrientationKey: string;

declare var NSMetadataItemOriginalFormatKey: string;

declare var NSMetadataItemOriginalSourceKey: string;

declare var NSMetadataItemPageHeightKey: string;

declare var NSMetadataItemPageWidthKey: string;

declare var NSMetadataItemParticipantsKey: string;

declare var NSMetadataItemPathKey: string;

declare var NSMetadataItemPerformersKey: string;

declare var NSMetadataItemPhoneNumbersKey: string;

declare var NSMetadataItemPixelCountKey: string;

declare var NSMetadataItemPixelHeightKey: string;

declare var NSMetadataItemPixelWidthKey: string;

declare var NSMetadataItemProducerKey: string;

declare var NSMetadataItemProfileNameKey: string;

declare var NSMetadataItemProjectsKey: string;

declare var NSMetadataItemPublishersKey: string;

declare var NSMetadataItemRecipientAddressesKey: string;

declare var NSMetadataItemRecipientEmailAddressesKey: string;

declare var NSMetadataItemRecipientsKey: string;

declare var NSMetadataItemRecordingDateKey: string;

declare var NSMetadataItemRecordingYearKey: string;

declare var NSMetadataItemRedEyeOnOffKey: string;

declare var NSMetadataItemResolutionHeightDPIKey: string;

declare var NSMetadataItemResolutionWidthDPIKey: string;

declare var NSMetadataItemRightsKey: string;

declare var NSMetadataItemSecurityMethodKey: string;

declare var NSMetadataItemSpeedKey: string;

declare var NSMetadataItemStarRatingKey: string;

declare var NSMetadataItemStateOrProvinceKey: string;

declare var NSMetadataItemStreamableKey: string;

declare var NSMetadataItemSubjectKey: string;

declare var NSMetadataItemTempoKey: string;

declare var NSMetadataItemTextContentKey: string;

declare var NSMetadataItemThemeKey: string;

declare var NSMetadataItemTimeSignatureKey: string;

declare var NSMetadataItemTimestampKey: string;

declare var NSMetadataItemTitleKey: string;

declare var NSMetadataItemTotalBitRateKey: string;

declare var NSMetadataItemURLKey: string;

declare var NSMetadataItemVersionKey: string;

declare var NSMetadataItemVideoBitRateKey: string;

declare var NSMetadataItemWhereFromsKey: string;

declare var NSMetadataItemWhiteBalanceKey: string;

declare class NSMetadataQuery extends NSObject {
  delegate: NSMetadataQueryDelegate;
  setDelegate(_: NSMetadataQueryDelegate)
  readonly isGathering: boolean;
  readonly groupedResults: NSArray<NSMetadataQueryResultGroup>;
  groupingAttributes: NSArray<string>;
  setGroupingAttributes(_: NSArray<string>)
  notificationBatchingInterval: number;
  setNotificationBatchingInterval(_: number)
  operationQueue: OperationQueue;
  setOperationQueue(_: OperationQueue)
  predicate: NSPredicate;
  setPredicate(_: NSPredicate)
  readonly resultCount: number;
  readonly results: NSArray<any>;
  searchItems: NSArray<any>;
  setSearchItems(_: NSArray<any>)
  searchScopes: NSArray<any>;
  setSearchScopes(_: NSArray<any>)
  sortDescriptors: NSArray<NSSortDescriptor>;
  setSortDescriptors(_: NSArray<NSSortDescriptor>)
  readonly isStarted: boolean;
  readonly isStopped: boolean;
  valueListAttributes: NSArray<string>;
  setValueListAttributes(_: NSArray<string>)
  readonly valueLists: NSDictionary<string, NSArray<NSMetadataQueryAttributeValueTuple>>;
  disableUpdates(): void;
  enableUpdates(): void;
  enumerateResultsUsingBlock(_: (p1: any, p2: number, p3: boolean) => void): void;
  enumerateResultsWithOptionsUsingBlock(options: NSEnumerationOptions, using: (p1: any, p2: number, p3: boolean) => void): void;
  indexOfResult(ofResult: any): number;
  resultAtIndex(at: number): any;
  startQuery(): boolean;
  stopQuery(): void;
  valueOfAttributeForResultAtIndex(ofAttribute: string, forResultAt: number): any;
}

declare var NSMetadataQueryAccessibleUbiquitousExternalDocumentsScope: string;

declare class NSMetadataQueryAttributeValueTuple extends NSObject {
  readonly attribute: string;
  readonly count: number;
  readonly value: any;
}

interface NSMetadataQueryDelegate extends NSObject {
  metadataQueryReplacementObjectForResultObject?(_: NSMetadataQuery, replacementObjectForResultObject: NSMetadataItem): any;
  metadataQueryReplacementValueForAttributeValue?(_: NSMetadataQuery, replacementValueForAttribute: string, value: any): any;
}

declare var NSMetadataQueryDelegate: {
  prototype: NSMetadataQueryDelegate;
};

declare var NSMetadataQueryDidFinishGatheringNotification: string;

declare var NSMetadataQueryDidStartGatheringNotification: string;

declare var NSMetadataQueryDidUpdateNotification: string;

declare var NSMetadataQueryGatheringProgressNotification: string;

declare var NSMetadataQueryIndexedLocalComputerScope: string;

declare var NSMetadataQueryIndexedNetworkScope: string;

declare var NSMetadataQueryLocalComputerScope: string;

declare var NSMetadataQueryNetworkScope: string;

declare var NSMetadataQueryResultContentRelevanceAttribute: string;

declare class NSMetadataQueryResultGroup extends NSObject {
  readonly attribute: string;
  readonly resultCount: number;
  readonly results: NSArray<any>;
  readonly subgroups: NSArray<NSMetadataQueryResultGroup>;
  readonly value: any;
  resultAtIndex(at: number): any;
}

declare var NSMetadataQueryUbiquitousDataScope: string;

declare var NSMetadataQueryUbiquitousDocumentsScope: string;

declare var NSMetadataQueryUpdateAddedItemsKey: string;

declare var NSMetadataQueryUpdateChangedItemsKey: string;

declare var NSMetadataQueryUpdateRemovedItemsKey: string;

declare var NSMetadataQueryUserHomeScope: string;

declare var NSMetadataUbiquitousItemContainerDisplayNameKey: string;

declare var NSMetadataUbiquitousItemDownloadRequestedKey: string;

declare var NSMetadataUbiquitousItemDownloadingErrorKey: string;

declare var NSMetadataUbiquitousItemDownloadingStatusCurrent: string;

declare var NSMetadataUbiquitousItemDownloadingStatusDownloaded: string;

declare var NSMetadataUbiquitousItemDownloadingStatusKey: string;

declare var NSMetadataUbiquitousItemDownloadingStatusNotDownloaded: string;

declare var NSMetadataUbiquitousItemHasUnresolvedConflictsKey: string;

declare var NSMetadataUbiquitousItemIsDownloadingKey: string;

declare var NSMetadataUbiquitousItemIsExternalDocumentKey: string;

declare var NSMetadataUbiquitousItemIsSharedKey: string;

declare var NSMetadataUbiquitousItemIsUploadedKey: string;

declare var NSMetadataUbiquitousItemIsUploadingKey: string;

declare var NSMetadataUbiquitousItemPercentDownloadedKey: string;

declare var NSMetadataUbiquitousItemPercentUploadedKey: string;

declare var NSMetadataUbiquitousItemURLInLocalContainerKey: string;

declare var NSMetadataUbiquitousItemUploadingErrorKey: string;

declare var NSMetadataUbiquitousSharedItemCurrentUserPermissionsKey: string;

declare var NSMetadataUbiquitousSharedItemCurrentUserRoleKey: string;

declare var NSMetadataUbiquitousSharedItemMostRecentEditorNameComponentsKey: string;

declare var NSMetadataUbiquitousSharedItemOwnerNameComponentsKey: string;

declare var NSMetadataUbiquitousSharedItemPermissionsReadOnly: string;

declare var NSMetadataUbiquitousSharedItemPermissionsReadWrite: string;

declare var NSMetadataUbiquitousSharedItemRoleOwner: string;

declare var NSMetadataUbiquitousSharedItemRoleParticipant: string;

declare class NSMiddleSpecifier extends NSScriptObjectSpecifier {
}

declare var NSMinimumKeyValueOperator: string;

declare function NSMouseInRect(aPoint: NSPoint, aRect: NSRect, flipped: boolean): boolean;
declare class NSMoveCommand extends NSScriptCommand {
  readonly keySpecifier: NSScriptObjectSpecifier;
  setReceiversSpecifier(_?: NSScriptObjectSpecifier): void;
}

declare class NSMutableArray<ObjectType> extends NSArray<ObjectType> {
  static arrayWithCapacity<ObjectType>(capacity: number): NSMutableArray<ObjectType>;
  static arrayWithObjects<ObjectType>(_: ObjectType): NSMutableArray<ObjectType>; // inherited from NSArray
  addObject(_: ObjectType): void;
  addObjectsFromArray(from: NSArray<ObjectType>): void;
  exchangeObjectAtIndexWithObjectAtIndex(at: number, withObjectAt: number): void;
  filterUsingPredicate(using: NSPredicate): void;
  static createWithCapacity(capacity: number): this;
  insertObjectAtIndex(_: ObjectType, at: number): void;
  insertObjectsAtIndexes(_: NSArray<ObjectType>, at: IndexSet): void;
  removeAllObjects(): void;
  removeLastObject(): void;
  removeObject(_: ObjectType): void;
  removeObjectInRange(_: ObjectType, in_: NSRange): void;
  removeObjectAtIndex(at: number): void;
  removeObjectIdenticalTo(identicalTo: ObjectType): void;
  removeObjectIdenticalToInRange(identicalTo: ObjectType, in_: NSRange): void;
  removeObjectsAtIndexes(at: IndexSet): void;
  removeObjectsInArray(in_: NSArray<ObjectType>): void;
  removeObjectsInRange(in_: NSRange): void;
  replaceObjectAtIndexWithObject(at: number, with_: ObjectType): void;
  replaceObjectsAtIndexesWithObjects(at: IndexSet, with_: NSArray<ObjectType>): void;
  replaceObjectsInRangeWithObjectsFromArray(in_: NSRange, withObjectsFrom: NSArray<ObjectType>): void;
  replaceObjectsInRangeWithObjectsFromArrayRange(in_: NSRange, withObjectsFrom: NSArray<ObjectType>, range: NSRange): void;
  setArray(_: NSArray<ObjectType>): void;
  setObjectAtIndexedSubscript(_: ObjectType, atIndexedSubscript: number): void;
  sortUsingComparator(comparator: (p1: any, p2: any) => ComparisonResult): void;
  sortUsingDescriptors(using: NSArray<NSSortDescriptor>): void;
  sortUsingFunctionContext(_?: (p1: ObjectType, p2: ObjectType, p3: any) => number, context?: any): void;
  sortUsingSelector(using: string): void;
  sortWithOptionsUsingComparator(options: NSSortOptions, usingComparator: (p1: any, p2: any) => ComparisonResult): void;
}

declare class NSMutableAttributedString extends NSAttributedString {
  readonly mutableString: NSMutableString;
  addAttributeValueRange(_: string, value: any, range: NSRange): void;
  addAttributesRange(_: NSDictionary<string, any>, range: NSRange): void;
  appendAttributedString(_: NSAttributedString): void;
  applyFontTraitsRange(_: NSFontTraitMask, range: NSRange): void;
  beginEditing(): void;
  deleteCharactersInRange(in_: NSRange): void;
  endEditing(): void;
  fixAttachmentAttributeInRange(in_: NSRange): void;
  fixAttributesInRange(in_: NSRange): void;
  fixFontAttributeInRange(in_: NSRange): void;
  fixParagraphStyleAttributeInRange(in_: NSRange): void;
  insertAttributedStringAtIndex(_: NSAttributedString, at: number): void;
  readFromDataOptionsDocumentAttributesError(from: Data, options: NSDictionary<string, any>, documentAttributes?: NSDictionary<string, any>): boolean;
  readFromURLOptionsDocumentAttributesError(from: NSURL, options: NSDictionary<string, any>, documentAttributes?: NSDictionary<string, any>): boolean;
  removeAttributeRange(_: string, range: NSRange): void;
  replaceCharactersInRangeWithAttributedString(in_: NSRange, with_: NSAttributedString): void;
  replaceCharactersInRangeWithString(in_: NSRange, with_: string): void;
  setAlignmentRange(_: NSTextAlignment, range: NSRange): void;
  setAttributedString(_: NSAttributedString): void;
  setAttributesRange(_?: NSDictionary<string, any>, range: NSRange): void;
  setBaseWritingDirectionRange(_: NSWritingDirection, range: NSRange): void;
  subscriptRange(_: NSRange): void;
  superscriptRange(_: NSRange): void;
  unscriptRange(_: NSRange): void;
  updateAttachmentsFromPath(fromPath: string): void;
}

declare class NSMutableCharacterSet extends NSCharacterSet implements NSCopying, NSMutableCopying, NSSecureCoding {
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  addCharactersInRange(in_: NSRange): void;
  addCharactersInString(in_: string): void;
  encodeWithCoder(with_: NSCoder): void;
  formIntersectionWithCharacterSet(with_: CharacterSet): void;
  formUnionWithCharacterSet(with_: CharacterSet): void;
  static createWithCoder(coder: NSCoder): this;
  invert(): void;
  removeCharactersInRange(in_: NSRange): void;
  removeCharactersInString(in_: string): void;
}

interface NSMutableCopying {
}

declare var NSMutableCopying: {
  prototype: NSMutableCopying;
};

declare class NSMutableData extends NSData {
  static dataWithCapacity(capacity: number): NSMutableData;
  static dataWithContentsOfFileOptionsError(options: string, error: NSData.ReadingOptions): NSMutableData; // inherited from NSData
  static dataWithContentsOfURLOptionsError(options: NSURL, error: NSData.ReadingOptions): NSMutableData; // inherited from NSData
  static dataWithLength(length: number): NSMutableData;
  length: number;
  setLength(_: number)
  readonly mutableBytes: any;
  appendBytesLength(_: any, length: number): void;
  appendData(_: Data): void;
  compressUsingAlgorithmError(error: NSData.CompressionAlgorithm): boolean;
  decompressUsingAlgorithmError(error: NSData.CompressionAlgorithm): boolean;
  increaseLengthBy(by: number): void;
  static createWithCapacity(capacity: number): this;
  static createWithLength(length: number): this;
  replaceBytesInRangeWithBytes(in_: NSRange, withBytes: any): void;
  replaceBytesInRangeWithBytesLength(in_: NSRange, withBytes?: any, length: number): void;
  resetBytesInRange(in_: NSRange): void;
  setData(_: Data): void;
}

declare class NSMutableDictionary<KeyType, ObjectType> extends NSDictionary<KeyType, ObjectType> {
  static dictionaryWithCapacity<KeyType, ObjectType>(capacity: number): NSMutableDictionary<KeyType, ObjectType>;
  static dictionaryWithSharedKeySet<KeyType, ObjectType>(sharedKeySet: any): NSMutableDictionary<KeyType, ObjectType>;
  addEntriesFromDictionary(from: NSDictionary<KeyType, ObjectType>): void;
  static createWithCapacity(capacity: number): this;
  removeAllObjects(): void;
  removeObjectForKey(forKey: KeyType): void;
  removeObjectsForKeys(forKeys: NSArray<KeyType>): void;
  setDictionary(_: NSDictionary<KeyType, ObjectType>): void;
  setObjectForKey(_: ObjectType, forKey: KeyType): void;
  setObjectForKeyedSubscript(_?: ObjectType, forKeyedSubscript: KeyType): void;
  setValueForKey(_?: ObjectType, forKey: string): void;
}

declare class NSMutableIndexSet extends NSIndexSet {
  addIndex(_: number): void;
  addIndexes(_: IndexSet): void;
  addIndexesInRange(in_: NSRange): void;
  removeAllIndexes(): void;
  removeIndex(_: number): void;
  removeIndexes(_: IndexSet): void;
  removeIndexesInRange(in_: NSRange): void;
  shiftIndexesStartingAtIndexBy(at: number, by: number): void;
}

declare class NSMutableOrderedSet<ObjectType> extends NSOrderedSet<ObjectType> {
  static orderedSetWithCapacity<ObjectType>(capacity: number): NSMutableOrderedSet<ObjectType>;
  static orderedSetWithObjects<ObjectType>(_: ObjectType): NSMutableOrderedSet<ObjectType>; // inherited from NSOrderedSet
  addObject(_: ObjectType): void;
  addObjectsCount(_?: ObjectType, count: number): void;
  addObjectsFromArray(from: NSArray<ObjectType>): void;
  exchangeObjectAtIndexWithObjectAtIndex(at: number, withObjectAt: number): void;
  filterUsingPredicate(using: NSPredicate): void;
  static createWithCapacity(capacity: number): this;
  insertObjectAtIndex(_: ObjectType, at: number): void;
  insertObjectsAtIndexes(_: NSArray<ObjectType>, at: IndexSet): void;
  intersectWith_(_: NSOrderedSet<ObjectType>): void;
  intersectSet(_: Set<ObjectType>): void;
  minusWith_(_: NSOrderedSet<ObjectType>): void;
  minusSet(_: Set<ObjectType>): void;
  moveObjectsAtIndexesToIndex(at: IndexSet, to: number): void;
  removeAllObjects(): void;
  removeObject(_: ObjectType): void;
  removeObjectAtIndex(at: number): void;
  removeObjectsAtIndexes(at: IndexSet): void;
  removeObjectsInArray(in_: NSArray<ObjectType>): void;
  removeObjectsInRange(in_: NSRange): void;
  replaceObjectAtIndexWithObject(at: number, with_: ObjectType): void;
  replaceObjectsAtIndexesWithObjects(at: IndexSet, with_: NSArray<ObjectType>): void;
  replaceObjectsInRangeWithObjectsCount(in_: NSRange, with_?: ObjectType, count: number): void;
  setObjectAtIndex(_: ObjectType, at: number): void;
  setObjectAtIndexedSubscript(_: ObjectType, atIndexedSubscript: number): void;
  sortRangeOptionsUsingComparator(_: NSRange, options: NSSortOptions, usingComparator: (p1: any, p2: any) => ComparisonResult): void;
  sortUsingComparator(comparator: (p1: any, p2: any) => ComparisonResult): void;
  sortUsingDescriptors(using: NSArray<NSSortDescriptor>): void;
  sortWithOptionsUsingComparator(options: NSSortOptions, usingComparator: (p1: any, p2: any) => ComparisonResult): void;
  unionWith_(_: NSOrderedSet<ObjectType>): void;
  unionSet(_: Set<ObjectType>): void;
}

declare class NSMutableSet<ObjectType> extends NSSet<ObjectType> {
  static setWithCapacity<ObjectType>(capacity: number): NSMutableSet<ObjectType>;
  static setWithObjects<ObjectType>(_: ObjectType): NSMutableSet<ObjectType>; // inherited from NSSet
  addObject(_: ObjectType): void;
  addObjectsFromArray(from: NSArray<ObjectType>): void;
  filterUsingPredicate(using: NSPredicate): void;
  static createWithCapacity(capacity: number): this;
  intersectWith_(_: Set<ObjectType>): void;
  minusWith_(_: Set<ObjectType>): void;
  removeAllObjects(): void;
  removeObject(_: ObjectType): void;
  setSet(_: Set<ObjectType>): void;
  unionWith_(_: Set<ObjectType>): void;
}

declare class NSMutableString extends NSString {
  static objectWithItemProviderDataTypeIdentifierError(typeIdentifier: Data, error: string): NSMutableString; // inherited from NSItemProviderReading
  static stringWithCapacity(capacity: number): NSMutableString;
  static stringWithContentsOfFileEncodingError(encoding: string, error: number): NSMutableString; // inherited from NSString
  static stringWithContentsOfFileUsedEncodingError(usedEncoding: string, error?: number): NSMutableString; // inherited from NSString
  static stringWithContentsOfURLEncodingError(encoding: NSURL, error: number): NSMutableString; // inherited from NSString
  static stringWithContentsOfURLUsedEncodingError(usedEncoding: NSURL, error?: number): NSMutableString; // inherited from NSString
  appendString(_: string): void;
  applyTransformReverseRangeUpdatedRange(_: string, reverse: boolean, range: NSRange, updatedRange?: NSRange): boolean;
  deleteCharactersInRange(in_: NSRange): void;
  static createWithCapacity(capacity: number): this;
  insertStringAtIndex(_: string, at: number): void;
  replaceCharactersInRangeWithString(in_: NSRange, with_: string): void;
  replaceOccurrencesOfStringWithStringOptionsRange(of: string, with_: string, options: NSString.CompareOptions, range: NSRange): number;
  setString(_: string): void;
}

declare class NSMutableURLRequest extends NSURLRequest {
  HTTPBody: Data;
  setHTTPBody(_: Data)
  HTTPBodyStream: InputStream;
  setHTTPBodyStream(_: InputStream)
  HTTPMethod: string;
  setHTTPMethod(_: string)
  HTTPShouldHandleCookies: boolean;
  setHTTPShouldHandleCookies(_: boolean)
  HTTPShouldUsePipelining: boolean;
  setHTTPShouldUsePipelining(_: boolean)
  URL: NSURL;
  setURL(_: NSURL)
  allHTTPHeaderFields: NSDictionary<string, string>;
  setAllHTTPHeaderFields(_: NSDictionary<string, string>)
  allowsCellularAccess: boolean;
  setAllowsCellularAccess(_: boolean)
  allowsConstrainedNetworkAccess: boolean;
  setAllowsConstrainedNetworkAccess(_: boolean)
  allowsExpensiveNetworkAccess: boolean;
  setAllowsExpensiveNetworkAccess(_: boolean)
  cachePolicy: NSURLRequest.CachePolicy;
  setCachePolicy(_: NSURLRequest.CachePolicy)
  mainDocumentURL: NSURL;
  setMainDocumentURL(_: NSURL)
  networkServiceType: NSURLRequest.NetworkServiceType;
  setNetworkServiceType(_: NSURLRequest.NetworkServiceType)
  timeoutInterval: number;
  setTimeoutInterval(_: number)
  addValueForHTTPHeaderField(_: string, forHTTPHeaderField: string): void;
  setValueForHTTPHeaderField(_?: string, forHTTPHeaderField: string): void;
}


declare const NSNEXTSTEPStringEncoding: number;
declare class NSNameSpecifier extends NSScriptObjectSpecifier {
  name: string;
  setName(_: string)
  static createWithContainerClassDescriptionContainerSpecifierKeyName(containerClassDescription: NSScriptClassDescription, containerSpecifier?: NSScriptObjectSpecifier, key: string, name: string): this;
}

declare var NSNegateBooleanTransformerName: string;

declare class NSNetService extends NSObject {
  static dataFromTXTRecordDictionary(_: NSDictionary<string, Data>): Data;
  static dictionaryFromTXTRecordData(_: Data): NSDictionary<string, Data>;
  readonly addresses: NSArray<Data>;
  delegate: NSNetServiceDelegate;
  setDelegate(_: NSNetServiceDelegate)
  readonly domain: string;
  readonly hostName: string;
  includesPeerToPeer: boolean;
  setIncludesPeerToPeer(_: boolean)
  readonly name: string;
  readonly port: number;
  readonly type: string;
  TXTRecordData(): Data;
  getInputStreamOutputStream(_?: InputStream, outputStream?: OutputStream): boolean;
  static createWithDomainTypeName(domain: string, type: string, name: string): this;
  static createWithDomainTypeNamePort(domain: string, type: string, name: string, port: number): this;
  publish(): void;
  publishWithOptions(_: NSNetService.Options): void;
  removeFromRunLoopForMode(_: RunLoop, forMode: string): void;
  resolveWithTimeout(_: number): void;
  scheduleInRunLoopForMode(_: RunLoop, forMode: string): void;
  setTXTRecordData(_?: Data): boolean;
  startMonitoring(): void;
  stop(): void;
  stopMonitoring(): void;
}

declare class NSNetServiceBrowser extends NSObject {
  delegate: NSNetServiceBrowserDelegate;
  setDelegate(_: NSNetServiceBrowserDelegate)
  includesPeerToPeer: boolean;
  setIncludesPeerToPeer(_: boolean)
  removeFromRunLoopForMode(_: RunLoop, forMode: string): void;
  scheduleInRunLoopForMode(_: RunLoop, forMode: string): void;
  searchForBrowsableDomains(): void;
  searchForRegistrationDomains(): void;
  searchForServicesOfTypeInDomain(_: string, inDomain: string): void;
  stop(): void;
}

interface NSNetServiceBrowserDelegate extends NSObject {
  netServiceBrowserDidFindDomainMoreComing?(_: NetServiceBrowser, didFindDomain: string, moreComing: boolean): void;
  netServiceBrowserDidFindServiceMoreComing?(_: NetServiceBrowser, didFindService: NetService, moreComing: boolean): void;
  netServiceBrowserDidNotSearch?(_: NetServiceBrowser, didNotSearch: NSDictionary<string, number>): void;
  netServiceBrowserDidRemoveDomainMoreComing?(_: NetServiceBrowser, didRemoveDomain: string, moreComing: boolean): void;
  netServiceBrowserDidRemoveServiceMoreComing?(_: NetServiceBrowser, didRemoveService: NetService, moreComing: boolean): void;
  netServiceBrowserDidStopSearch?(_: NetServiceBrowser): void;
  netServiceBrowserWillSearch?(_: NetServiceBrowser): void;
}

declare var NSNetServiceBrowserDelegate: {
  prototype: NSNetServiceBrowserDelegate;
};

interface NSNetServiceDelegate extends NSObject {
  netServiceDidAcceptConnectionWithInputStreamOutputStream?(_: NetService, didAcceptConnectionWithInputStream: InputStream, outputStream: OutputStream): void;
  netServiceDidNotPublish?(_: NetService, didNotPublish: NSDictionary<string, number>): void;
  netServiceDidNotResolve?(_: NetService, didNotResolve: NSDictionary<string, number>): void;
  netServiceDidUpdateTXTRecordData?(_: NetService, didUpdateTXTRecordData: Data): void;
  netServiceDidPublish?(_: NetService): void;
  netServiceDidResolveAddress?(_: NetService): void;
  netServiceDidStop?(_: NetService): void;
  netServiceWillPublish?(_: NetService): void;
  netServiceWillResolve?(_: NetService): void;
}

declare var NSNetServiceDelegate: {
  prototype: NSNetServiceDelegate;
};

declare var NSNetServicesErrorCode: string;

declare var NSNetServicesErrorDomain: string;

declare function NSNextHashEnumeratorItem(enumerator: NSHashEnumerator): any;
declare function NSNextMapEnumeratorPair(enumerator: NSMapEnumerator, key: any, value: any): boolean;

declare const NSNoScriptError: number;

declare const NSNoSpecifierError: number;

declare const NSNoTopLevelContainersSpecifierError: number;

declare const NSNonLossyASCIIStringEncoding: number;
declare var NSNonOwnedPointerHashCallBacks: NSHashTableCallBacks;

declare var NSNonOwnedPointerMapKeyCallBacks: NSMapTableKeyCallBacks;

declare var NSNonOwnedPointerMapValueCallBacks: NSMapTableValueCallBacks;

declare var NSNonOwnedPointerOrNullMapKeyCallBacks: NSMapTableKeyCallBacks;

declare var NSNonRetainedObjectHashCallBacks: NSHashTableCallBacks;

declare var NSNonRetainedObjectMapKeyCallBacks: NSMapTableKeyCallBacks;

declare var NSNonRetainedObjectMapValueCallBacks: NSMapTableValueCallBacks;

declare var NSNotFound: number;

declare class NSNotification extends NSObject implements NSCoding, NSCopying {
  readonly name: string;
  readonly object: any;
  readonly userInfo: NSDictionary<any, any>;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithNameObjectUserInfo(name: string, object_?: any, userInfo?: NSDictionary<any, any>): this;
}

declare class NSNotificationCenter extends NSObject {
  static defaultCenter(): NotificationCenter;
  addObserverSelectorNameObject(_: any, selector: string, name?: string, object_?: any): void;
  addObserverForNameObjectQueueUsingBlock(_?: string, object_?: any, queue?: OperationQueue, usingBlock: (p1: Notification) => void): NSObject;
  postNotification(_: Notification): void;
  postNotificationNameObject(name: string, object_?: any): void;
  postNotificationNameObjectUserInfo(name: string, object_?: any, userInfo?: NSDictionary<any, any>): void;
  removeObserver(_: any): void;
  removeObserverNameObject(_: any, name?: string, object_?: any): void;
}

declare var NSNotificationDeliverImmediately: DistributedNotificationCenter.Options;

declare var NSNotificationPostToAllSessions: DistributedNotificationCenter.Options;

declare class NSNotificationQueue extends NSObject {
  static defaultQueue(): NotificationQueue;
  dequeueNotificationsMatchingCoalesceMask(_: Notification, coalesceMask: number): void;
  enqueueNotificationPostingStyle(_: Notification, postingStyle: NotificationQueue.PostingStyle): void;
  enqueueNotificationPostingStyleCoalesceMaskForModes(_: Notification, postingStyle: NotificationQueue.PostingStyle, coalesceMask: NotificationQueue.NotificationCoalescing, forModes?: NSArray<string>): void;
  static createWithNotificationCenter(notificationCenter: NotificationCenter): this;
}

declare class NSNull extends NSObject implements NSCopying, NSSecureCoding, CAAction {
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  runActionForKeyObjectArguments(forKey: string, object_: any, arguments_?: NSDictionary<any, any>): void;
}

declare class NSNumber extends NSValue {
  static numberWithBool(bool: boolean): number;
  static numberWithChar(char: number): number;
  static numberWithDouble(double: number): number;
  static numberWithFloat(float: number): number;
  static numberWithInt(int: number): number;
  static numberWithInteger(integer: number): number;
  static numberWithLong(long: number): number;
  static numberWithLongLong(longLong: number): number;
  static numberWithShort(short: number): number;
  static numberWithUnsignedChar(unsignedChar: number): number;
  static numberWithUnsignedInt(unsignedInt: number): number;
  static numberWithUnsignedInteger(unsignedInteger: number): number;
  static numberWithUnsignedLong(unsignedLong: number): number;
  static numberWithUnsignedLongLong(unsignedLongLong: number): number;
  static numberWithUnsignedShort(unsignedShort: number): number;
  readonly boolValue: boolean;
  readonly charValue: number;
  readonly decimalValue: Decimal;
  readonly doubleValue: number;
  readonly floatValue: number;
  readonly intValue: number;
  readonly integerValue: number;
  readonly longLongValue: number;
  readonly longValue: number;
  readonly shortValue: number;
  readonly stringValue: string;
  readonly unsignedCharValue: number;
  readonly unsignedIntValue: number;
  readonly unsignedIntegerValue: number;
  readonly unsignedLongLongValue: number;
  readonly unsignedLongValue: number;
  readonly unsignedShortValue: number;
  compare(_: number): ComparisonResult;
  descriptionWithLocale(withLocale?: any): string;
  static createWithBool(bool: boolean): this;
  static createWithChar(char: number): this;
  static createWithDouble(double: number): this;
  static createWithFloat(float: number): this;
  static createWithInt(int: number): this;
  static createWithInteger(integer: number): this;
  static createWithLong(long: number): this;
  static createWithLongLong(longLong: number): this;
  static createWithShort(short: number): this;
  static createWithUnsignedChar(unsignedChar: number): this;
  static createWithUnsignedInt(unsignedInt: number): this;
  static createWithUnsignedInteger(unsignedInteger: number): this;
  static createWithUnsignedLong(unsignedLong: number): this;
  static createWithUnsignedLongLong(unsignedLongLong: number): this;
  static createWithUnsignedShort(unsignedShort: number): this;
  isEqualToNumber(to: number): boolean;
}

declare class NSNumberFormatter extends NSFormatter {
  static defaultFormatterBehavior(): NumberFormatter.Behavior;
  static localizedStringFromNumberNumberStyle(_: number, numberStyle: NumberFormatter.Style): string;
  static setDefaultFormatterBehavior(_: NumberFormatter.Behavior): void;
  allowsFloats: boolean;
  setAllowsFloats(_: boolean)
  alwaysShowsDecimalSeparator: boolean;
  setAlwaysShowsDecimalSeparator(_: boolean)
  attributedStringForNil: NSAttributedString;
  setAttributedStringForNil(_: NSAttributedString)
  attributedStringForNotANumber: NSAttributedString;
  setAttributedStringForNotANumber(_: NSAttributedString)
  attributedStringForZero: NSAttributedString;
  setAttributedStringForZero(_: NSAttributedString)
  currencyCode: string;
  setCurrencyCode(_: string)
  currencyDecimalSeparator: string;
  setCurrencyDecimalSeparator(_: string)
  currencyGroupingSeparator: string;
  setCurrencyGroupingSeparator(_: string)
  currencySymbol: string;
  setCurrencySymbol(_: string)
  decimalSeparator: string;
  setDecimalSeparator(_: string)
  exponentSymbol: string;
  setExponentSymbol(_: string)
  format: string;
  setFormat(_: string)
  formatWidth: number;
  setFormatWidth(_: number)
  formatterBehavior: NumberFormatter.Behavior;
  setFormatterBehavior(_: NumberFormatter.Behavior)
  formattingContext: Formatter.Context;
  setFormattingContext(_: Formatter.Context)
  generatesDecimalNumbers: boolean;
  setGeneratesDecimalNumbers(_: boolean)
  groupingSeparator: string;
  setGroupingSeparator(_: string)
  groupingSize: number;
  setGroupingSize(_: number)
  hasThousandSeparators: boolean;
  setHasThousandSeparators(_: boolean)
  internationalCurrencySymbol: string;
  setInternationalCurrencySymbol(_: string)
  isLenient: boolean;
  setLenient(_: boolean)
  locale: Locale;
  setLocale(_: Locale)
  localizesFormat: boolean;
  setLocalizesFormat(_: boolean)
  maximum: number;
  setMaximum(_: number)
  maximumFractionDigits: number;
  setMaximumFractionDigits(_: number)
  maximumIntegerDigits: number;
  setMaximumIntegerDigits(_: number)
  maximumSignificantDigits: number;
  setMaximumSignificantDigits(_: number)
  minimum: number;
  setMinimum(_: number)
  minimumFractionDigits: number;
  setMinimumFractionDigits(_: number)
  minimumIntegerDigits: number;
  setMinimumIntegerDigits(_: number)
  minimumSignificantDigits: number;
  setMinimumSignificantDigits(_: number)
  minusSign: string;
  setMinusSign(_: string)
  multiplier: number;
  setMultiplier(_: number)
  negativeFormat: string;
  setNegativeFormat(_: string)
  negativeInfinitySymbol: string;
  setNegativeInfinitySymbol(_: string)
  negativePrefix: string;
  setNegativePrefix(_: string)
  negativeSuffix: string;
  setNegativeSuffix(_: string)
  nilSymbol: string;
  setNilSymbol(_: string)
  notANumberSymbol: string;
  setNotANumberSymbol(_: string)
  numberStyle: NumberFormatter.Style;
  setNumberStyle(_: NumberFormatter.Style)
  paddingCharacter: string;
  setPaddingCharacter(_: string)
  paddingPosition: NumberFormatter.PadPosition;
  setPaddingPosition(_: NumberFormatter.PadPosition)
  isPartialStringValidationEnabled: boolean;
  setPartialStringValidationEnabled(_: boolean)
  perMillSymbol: string;
  setPerMillSymbol(_: string)
  percentSymbol: string;
  setPercentSymbol(_: string)
  plusSign: string;
  setPlusSign(_: string)
  positiveFormat: string;
  setPositiveFormat(_: string)
  positiveInfinitySymbol: string;
  setPositiveInfinitySymbol(_: string)
  positivePrefix: string;
  setPositivePrefix(_: string)
  positiveSuffix: string;
  setPositiveSuffix(_: string)
  roundingBehavior: NSDecimalNumberHandler;
  setRoundingBehavior(_: NSDecimalNumberHandler)
  roundingIncrement: number;
  setRoundingIncrement(_: number)
  roundingMode: NumberFormatter.RoundingMode;
  setRoundingMode(_: NumberFormatter.RoundingMode)
  secondaryGroupingSize: number;
  setSecondaryGroupingSize(_: number)
  textAttributesForNegativeInfinity: NSDictionary<string, any>;
  setTextAttributesForNegativeInfinity(_: NSDictionary<string, any>)
  textAttributesForNegativeValues: NSDictionary<string, any>;
  setTextAttributesForNegativeValues(_: NSDictionary<string, any>)
  textAttributesForNil: NSDictionary<string, any>;
  setTextAttributesForNil(_: NSDictionary<string, any>)
  textAttributesForNotANumber: NSDictionary<string, any>;
  setTextAttributesForNotANumber(_: NSDictionary<string, any>)
  textAttributesForPositiveInfinity: NSDictionary<string, any>;
  setTextAttributesForPositiveInfinity(_: NSDictionary<string, any>)
  textAttributesForPositiveValues: NSDictionary<string, any>;
  setTextAttributesForPositiveValues(_: NSDictionary<string, any>)
  textAttributesForZero: NSDictionary<string, any>;
  setTextAttributesForZero(_: NSDictionary<string, any>)
  thousandSeparator: string;
  setThousandSeparator(_: string)
  usesGroupingSeparator: boolean;
  setUsesGroupingSeparator(_: boolean)
  usesSignificantDigits: boolean;
  setUsesSignificantDigits(_: boolean)
  zeroSymbol: string;
  setZeroSymbol(_: string)
  getObjectValueForStringRangeError(forString?: any, range: string, error?: NSRange): boolean;
  numberFromString(_: string): number;
  stringFromNumber(_: number): string;
}


declare const NSOSF1OperatingSystem: number;
declare var NSOSStatusErrorDomain: string;

declare var NSObjectHashCallBacks: NSHashTableCallBacks;

declare var NSObjectInaccessibleException: string;

declare var NSObjectMapKeyCallBacks: NSMapTableKeyCallBacks;

declare var NSObjectMapValueCallBacks: NSMapTableValueCallBacks;

declare var NSObjectNotAvailableException: string;

declare function NSOffsetRect(aRect: NSRect, dX: number, dY: number): NSRect;
declare var NSOldStyleException: string;

declare function NSOpenStepRootDirectory(): string;

declare const NSOpenStepUnicodeReservedBase: number;
interface NSOperatingSystemVersion {
  majorVersion: number;
  minorVersion: number;
  patchVersion: number;
}

declare var NSOperatingSystemVersion: NSOperatingSystemVersion;

declare class NSOperation extends NSObject {
  readonly isAsynchronous: boolean;
  readonly isCancelled: boolean;
  completionBlock: () => void;
  setCompletionBlock(_: () => void)
  readonly isConcurrent: boolean;
  readonly dependencies: NSArray<Operation>;
  readonly isExecuting: boolean;
  readonly isFinished: boolean;
  name: string;
  setName(_: string)
  qualityOfService: QualityOfService;
  setQualityOfService(_: QualityOfService)
  queuePriority: Operation.QueuePriority;
  setQueuePriority(_: Operation.QueuePriority)
  readonly isReady: boolean;
  addDependency(_: Operation): void;
  cancel(): void;
  main(): void;
  removeDependency(_: Operation): void;
  start(): void;
  waitUntilFinished(): void;
}

declare var NSOperationNotSupportedForKeyException: string;


declare const NSOperationNotSupportedForKeyScriptError: number;

declare const NSOperationNotSupportedForKeySpecifierError: number;
declare class NSOperationQueue extends NSObject implements NSProgressReporting {
  maxConcurrentOperationCount: number;
  setMaxConcurrentOperationCount(_: number)
  name: string;
  setName(_: string)
  readonly operationCount: number;
  readonly operations: NSArray<Operation>;
  qualityOfService: QualityOfService;
  setQualityOfService(_: QualityOfService)
  isSuspended: boolean;
  setSuspended(_: boolean)
  underlyingQueue: NSObject;
  setUnderlyingQueue(_: NSObject)
  static currentQueue(): OperationQueue;
  static mainQueue(): OperationQueue;
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly progress: Progress; // inherited from NSProgressReporting
  readonly superclass: typeof NSObject; // inherited from NSObject
  addBarrierBlock(_: () => void): void;
  addOperation(_: Operation): void;
  addOperationWithBlock(_: () => void): void;
  addOperationsWaitUntilFinished(_: NSArray<Operation>, waitUntilFinished: boolean): void;
  cancelAllOperations(): void;
  conformsToProtocol(to: any /* Protocol */): boolean;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
  waitUntilAllOperationsAreFinished(): void;
}

declare var NSOperationQueueDefaultMaxConcurrentOperationCount: number;

declare class NSOrderedCollectionChange<ObjectType> extends NSObject {
  readonly associatedIndex: number;
  readonly changeType: NSCollectionChangeType;
  readonly index: number;
  readonly object: ObjectType;
  static createWithObjectTypeIndex(object_?: ObjectType, type: NSCollectionChangeType, index: number): this;
  static createWithObjectTypeIndexAssociatedIndex(object_?: ObjectType, type: NSCollectionChangeType, index: number, associatedIndex: number): this;
}

declare class NSOrderedCollectionDifference<ObjectType> extends NSObject implements NSFastEnumeration {
  readonly hasChanges: boolean;
  readonly insertions: NSArray<NSOrderedCollectionChange<ObjectType>>;
  readonly removals: NSArray<NSOrderedCollectionChange<ObjectType>>;
  countByEnumeratingWithStateObjectsCount(with_: NSFastEnumerationState, objects?: any, count: number): number;
  transformingChangesWith_(_: (p1: NSOrderedCollectionChange<ObjectType>) => NSOrderedCollectionChange<any>): NSOrderedCollectionDifference<any>;
  static createWithChanges(changes: NSArray<NSOrderedCollectionChange<ObjectType>>): this;
  static createWithInsertIndexesInsertedObjectsRemoveIndexesRemovedObjects(insertIndexes: IndexSet, insertedObjects?: NSArray<ObjectType>, removeIndexes: IndexSet, removedObjects?: NSArray<ObjectType>): this;
  static createWithInsertIndexesInsertedObjectsRemoveIndexesRemovedObjectsAdditionalChanges(insertIndexes: IndexSet, insertedObjects?: NSArray<ObjectType>, removeIndexes: IndexSet, removedObjects?: NSArray<ObjectType>, additionalChanges: NSArray<NSOrderedCollectionChange<ObjectType>>): this;
  inverseDifference(): this;
}

declare class NSOrderedSet<ObjectType> extends NSObject implements NSCopying, NSFastEnumeration, NSMutableCopying, NSSecureCoding {
  static orderedSetWithObjects<ObjectType>(_: ObjectType): NSOrderedSet<ObjectType>;
  readonly array: NSArray<ObjectType>;
  readonly count: number;
  readonly firstObject: ObjectType;
  readonly lastObject: ObjectType;
  readonly reversedOrderedSet: NSOrderedSet<ObjectType>;
  readonly set: Set<ObjectType>;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  containsObject(_: ObjectType): boolean;
  countByEnumeratingWithStateObjectsCount(with_: NSFastEnumerationState, objects?: any, count: number): number;
  descriptionWithLocale(withLocale?: any): string;
  descriptionWithLocaleIndent(withLocale?: any, indent: number): string;
  encodeWithCoder(with_: NSCoder): void;
  enumerateObjectsAtIndexesOptionsUsingBlock(at: IndexSet, options: NSEnumerationOptions, using: (p1: ObjectType, p2: number, p3: boolean) => void): void;
  enumerateObjectsUsingBlock(_: (p1: ObjectType, p2: number, p3: boolean) => void): void;
  enumerateObjectsWithOptionsUsingBlock(options: NSEnumerationOptions, using: (p1: ObjectType, p2: number, p3: boolean) => void): void;
  filteredOrderedSetUsingPredicate(using: NSPredicate): NSOrderedSet<ObjectType>;
  indexOfObject(of: ObjectType): number;
  indexOfObjectInSortedRangeOptionsUsingComparator(of: ObjectType, inSortedRange: NSRange, options: NSBinarySearchingOptions, usingComparator: (p1: any, p2: any) => ComparisonResult): number;
  indexOfObjectAtIndexesOptionsPassingTest(ofObjectAt: IndexSet, options: NSEnumerationOptions, passingTest: (p1: ObjectType, p2: number, p3: boolean) => boolean): number;
  indexOfObjectPassingTest(ofObjectPassingTest: (p1: ObjectType, p2: number, p3: boolean) => boolean): number;
  indexOfObjectWithOptionsPassingTest(_: NSEnumerationOptions, ofObjectPassingTest: (p1: ObjectType, p2: number, p3: boolean) => boolean): number;
  indexesOfObjectsAtIndexesOptionsPassingTest(ofObjectsAt: IndexSet, options: NSEnumerationOptions, passingTest: (p1: ObjectType, p2: number, p3: boolean) => boolean): IndexSet;
  indexesOfObjectsPassingTest(ofObjectsPassingTest: (p1: ObjectType, p2: number, p3: boolean) => boolean): IndexSet;
  indexesOfObjectsWithOptionsPassingTest(options: NSEnumerationOptions, ofObjectsPassingTest: (p1: ObjectType, p2: number, p3: boolean) => boolean): IndexSet;
  static createWithArray(array: NSArray<ObjectType>): this;
  static createWithArrayCopyItems(array: NSArray<ObjectType>, copyItems: boolean): this;
  static createWithArrayRangeCopyItems(array: NSArray<ObjectType>, range: NSRange, copyItems: boolean): this;
  static createWithCoder(coder: NSCoder): this;
  static createWithObject(object_: ObjectType): this;
  static createWithObjects(objects: ObjectType): this;
  static createWithObjectsCount(objects?: ObjectType, count: number): this;
  static createWithOrderedSet(orderedSet: NSOrderedSet<ObjectType>): this;
  static createWithOrderedSetCopyItems(orderedSet: NSOrderedSet<ObjectType>, copyItems: boolean): this;
  static createWithOrderedSetRangeCopyItems(orderedSet: NSOrderedSet<ObjectType>, range: NSRange, copyItems: boolean): this;
  static createWithSet(set: Set<ObjectType>): this;
  static createWithSetCopyItems(set: Set<ObjectType>, copyItems: boolean): this;
  intersectsWith_(_: NSOrderedSet<ObjectType>): boolean;
  intersectsSet(_: Set<ObjectType>): boolean;
  isEqualWithTo(to: NSOrderedSet<ObjectType>): boolean;
  isSubsetOf(of: NSOrderedSet<ObjectType>): boolean;
  isSubsetOf(of: Set<ObjectType>): boolean;
  objectAtIndex(at: number): ObjectType;
  objectEnumerator(): NSEnumerator<ObjectType>;
  objectsAtIndexes(at: IndexSet): NSArray<ObjectType>;
  reverseObjectEnumerator(): NSEnumerator<ObjectType>;
  sortedArrayUsingComparator(comparator: (p1: any, p2: any) => ComparisonResult): NSArray<ObjectType>;
  sortedArrayUsingDescriptors(using: NSArray<NSSortDescriptor>): NSArray<ObjectType>;
  sortedArrayWithOptionsUsingComparator(options: NSSortOptions, usingComparator: (p1: any, p2: any) => ComparisonResult): NSArray<ObjectType>;
}

declare class NSOrthography extends NSObject implements NSCopying, NSSecureCoding {
  static defaultOrthographyForLanguage(forLanguage: string): NSOrthography;
  readonly allLanguages: NSArray<string>;
  readonly allScripts: NSArray<string>;
  readonly dominantLanguage: string;
  readonly dominantScript: string;
  readonly languageMap: NSDictionary<string, NSArray<string>>;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  dominantLanguageForScript(forScript: string): string;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithDominantScriptLanguageMap(dominantScript: string, languageMap: NSDictionary<string, NSArray<string>>): this;
  languagesForScript(forScript: string): NSArray<string>;
}

declare class NSOutputStream extends NSStream {
  static outputStreamToBufferCapacity(_: string, capacity: number): NSOutputStream;
  static outputStreamToFileAtPathAppend(_: string, append: boolean): NSOutputStream;
  static outputStreamToMemory(): NSOutputStream;
  static outputStreamWithURLAppend(_: NSURL, append: boolean): NSOutputStream;
  readonly hasSpaceAvailable: boolean;
  static createWithToBufferCapacity(toBuffer: string, capacity: number): this;
  static createWithToFileAtPathAppend(toFileAtPath: string, append: boolean): this;
  static createWithToMemory(): this;
  static createWithUrlAppend(URL: NSURL, append: boolean): this;
  writeMaxLength(_: string, maxLength: number): number;
}

declare var NSOwnedObjectIdentityHashCallBacks: NSHashTableCallBacks;

declare var NSOwnedPointerHashCallBacks: NSHashTableCallBacks;

declare var NSOwnedPointerMapKeyCallBacks: NSMapTableKeyCallBacks;

declare var NSOwnedPointerMapValueCallBacks: NSMapTableValueCallBacks;

declare var NSPOSIXErrorDomain: string;

declare function NSPageSize(): number;
declare var NSParseErrorException: string;

declare var NSPersonNameComponentDelimiter: string;

declare var NSPersonNameComponentFamilyName: string;

declare var NSPersonNameComponentGivenName: string;

declare var NSPersonNameComponentKey: string;

declare var NSPersonNameComponentMiddleName: string;

declare var NSPersonNameComponentNickname: string;

declare var NSPersonNameComponentPrefix: string;

declare var NSPersonNameComponentSuffix: string;

declare class NSPersonNameComponents extends NSObject implements NSCopying, NSSecureCoding {
  familyName: string;
  setFamilyName(_: string)
  givenName: string;
  setGivenName(_: string)
  middleName: string;
  setMiddleName(_: string)
  namePrefix: string;
  setNamePrefix(_: string)
  nameSuffix: string;
  setNameSuffix(_: string)
  nickname: string;
  setNickname(_: string)
  phoneticRepresentation: NSPersonNameComponents;
  setPhoneticRepresentation(_: NSPersonNameComponents)
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class NSPersonNameComponentsFormatter extends NSFormatter {
  static localizedStringFromPersonNameComponentsStyleOptions(_: NSPersonNameComponents, style: PersonNameComponentsFormatter.Style, options: PersonNameComponentsFormatter.Options): string;
  isPhonetic: boolean;
  setPhonetic(_: boolean)
  style: PersonNameComponentsFormatter.Style;
  setStyle(_: PersonNameComponentsFormatter.Style)
  annotatedStringFromPersonNameComponents(_: NSPersonNameComponents): NSAttributedString;
  personNameComponentsFromString(_: string): NSPersonNameComponents;
  stringFromPersonNameComponents(_: NSPersonNameComponents): string;
}

declare class NSPipe extends NSObject {
  static pipe(): Pipe;
  readonly fileHandleForReading: FileHandle;
  readonly fileHandleForWriting: FileHandle;
}

declare function NSPointFromString(aString: string): NSPoint;
declare function NSPointInRect(aPoint: NSPoint, aRect: NSRect): boolean;
declare class NSPointerArray extends NSObject implements NSCopying, NSFastEnumeration, NSSecureCoding {
  static strongObjectsPointerArray(): NSPointerArray;
  static weakObjectsPointerArray(): NSPointerArray;
  readonly allObjects: NSArray<any>;
  count: number;
  setCount(_: number)
  readonly pointerFunctions: NSPointerFunctions;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  addPointer(_?: any): void;
  compact(): void;
  countByEnumeratingWithStateObjectsCount(with_: NSFastEnumerationState, objects?: any, count: number): number;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithOptions(options: NSPointerFunctions.Options): this;
  static createWithPointerFunctions(pointerFunctions: NSPointerFunctions): this;
  insertPointerAtIndex(_?: any, at: number): void;
  pointerAtIndex(at: number): any;
  removePointerAtIndex(at: number): void;
  replacePointerAtIndexWithPointer(at: number, withPointer?: any): void;
}

declare class NSPointerFunctions extends NSObject implements NSCopying {
  acquireFunction: (p1: any, p2: (p1: any) => number, p3: boolean) => any;
  setAcquireFunction(_: (p1: any, p2: (p1: any) => number, p3: boolean) => any)
  descriptionFunction: (p1: any) => string;
  setDescriptionFunction(_: (p1: any) => string)
  hashFunction: (p1: any, p2: (p1: any) => number) => number;
  setHashFunction(_: (p1: any, p2: (p1: any) => number) => number)
  isEqualFunction: (p1: any, p2: any, p3: (p1: any) => number) => boolean;
  setIsEqualFunction(_: (p1: any, p2: any, p3: (p1: any) => number) => boolean)
  relinquishFunction: (p1: any, p2: (p1: any) => number) => void;
  setRelinquishFunction(_: (p1: any, p2: (p1: any) => number) => void)
  sizeFunction: (p1: any) => number;
  setSizeFunction(_: (p1: any) => number)
  static createWithOptions(options: NSPointerFunctions.Options): this;
}

declare var NSPointerToStructHashCallBacks: NSHashTableCallBacks;

declare class NSPort extends NSObject implements NSCoding, NSCopying {
  static port(): Port;
  readonly reservedSpaceLength: number;
  readonly isValid: boolean;
  delegate(): NSPortDelegate;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  invalidate(): void;
  removeFromRunLoopForMode(_: RunLoop, forMode: string): void;
  scheduleInRunLoopForMode(_: RunLoop, forMode: string): void;
  sendBeforeDateWithComponentsFromReserved(_: Date, components?: NSMutableArray<any>, from?: Port, reserved: number): boolean;
  sendBeforeDateWithMsgidComponentsFromReserved(_: Date, msgid: number, components?: NSMutableArray<any>, from?: Port, reserved: number): boolean;
  setDelegate(_?: NSPortDelegate): void;
}

interface NSPortDelegate extends NSObject {
  handlePortMessage?(_: PortMessage): void;
}

declare var NSPortDelegate: {
  prototype: NSPortDelegate;
};

declare var NSPortDidBecomeInvalidNotification: string;

declare class NSPortMessage extends NSObject {
  readonly components: NSArray<any>;
  msgid: number;
  setMsgid(_: number)
  readonly receivePort: Port;
  readonly sendPort: Port;
  static createWithSendPortReceivePortComponents(sendPort?: Port, receivePort?: Port, components?: NSArray<any>): this;
  sendBeforeDate(_: Date): boolean;
}

declare var NSPortReceiveException: string;

declare var NSPortSendException: string;

declare var NSPortTimeoutException: string;

declare class NSPositionalSpecifier extends NSObject {
  readonly insertionContainer: any;
  readonly insertionIndex: number;
  readonly insertionKey: string;
  readonly insertionReplaces: boolean;
  readonly position: NSPositionalSpecifier.InsertionPosition;
  evaluate(): void;
  static createWithPositionObjectSpecifier(position: NSPositionalSpecifier.InsertionPosition, objectSpecifier: NSScriptObjectSpecifier): this;
  setInsertionClassDescription(_: NSScriptClassDescription): void;
}

declare class NSPredicate extends NSObject implements NSCopying, NSSecureCoding {
  readonly predicateFormat: string;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  allowEvaluation(): void;
  encodeWithCoder(with_: NSCoder): void;
  evaluateWithObject(with_?: any): boolean;
  evaluateWithObjectSubstitutionVariables(with_?: any, substitutionVariables?: NSDictionary<string, any>): boolean;
  static createWithCoder(coder: NSCoder): this;
  predicateWithSubstitutionVariables(_: NSDictionary<string, any>): this;
}

declare class NSProcessInfo extends NSObject {
  readonly activeProcessorCount: number;
  readonly arguments: NSArray<string>;
  automaticTerminationSupportEnabled: boolean;
  setAutomaticTerminationSupportEnabled(_: boolean)
  readonly environment: NSDictionary<string, string>;
  readonly fullUserName: string;
  readonly globallyUniqueString: string;
  readonly hostName: string;
  readonly isMacCatalystApp: boolean;
  readonly operatingSystemVersion: OperatingSystemVersion;
  readonly operatingSystemVersionString: string;
  readonly physicalMemory: number;
  readonly processIdentifier: number;
  processName: string;
  setProcessName(_: string)
  readonly processorCount: number;
  readonly systemUptime: number;
  readonly thermalState: ProcessInfo.ThermalState;
  readonly userName: string;
  static processInfo(): ProcessInfo;
  beginActivityWithOptionsReason(_: ProcessInfo.ActivityOptions, reason: string): NSObject;
  disableAutomaticTermination(_: string): void;
  disableSuddenTermination(): void;
  enableAutomaticTermination(_: string): void;
  enableSuddenTermination(): void;
  endActivity(_: NSObject): void;
  isOperatingSystemAtLeastVersion(_: OperatingSystemVersion): boolean;
  performActivityWithOptionsReasonUsingBlock(_: ProcessInfo.ActivityOptions, reason: string, usingBlock: () => void): void;
}

declare var NSProcessInfoPowerStateDidChangeNotification: string;

declare var NSProcessInfoThermalStateDidChangeNotification: string;

declare class NSProgress extends NSObject {
  static addSubscriberForFileURLWithPublishingHandler(_: NSURL, withPublishingHandler: (p1: Progress) => () => void): any;
  static currentProgress(): Progress;
  static discreteProgressWithTotalUnitCount(totalUnitCount: number): Progress;
  static progressWithTotalUnitCount(_: number): Progress;
  static progressWithTotalUnitCountParentPendingUnitCount(_: number, parent: Progress, pendingUnitCount: number): Progress;
  static removeSubscriber(_: any): void;
  isCancellable: boolean;
  setCancellable(_: boolean)
  cancellationHandler: () => void;
  setCancellationHandler(_: () => void)
  readonly isCancelled: boolean;
  completedUnitCount: number;
  setCompletedUnitCount(_: number)
  estimatedTimeRemaining: number;
  setEstimatedTimeRemaining(_: number)
  fileCompletedCount: number;
  setFileCompletedCount(_: number)
  fileOperationKind: string;
  setFileOperationKind(_: string)
  fileTotalCount: number;
  setFileTotalCount(_: number)
  fileURL: NSURL;
  setFileURL(_: NSURL)
  readonly isFinished: boolean;
  readonly fractionCompleted: number;
  readonly isIndeterminate: boolean;
  kind: string;
  setKind(_: string)
  localizedAdditionalDescription: string;
  setLocalizedAdditionalDescription(_: string)
  localizedDescription: string;
  setLocalizedDescription(_: string)
  readonly isOld: boolean;
  isPausable: boolean;
  setPausable(_: boolean)
  readonly isPaused: boolean;
  pausingHandler: () => void;
  setPausingHandler(_: () => void)
  resumingHandler: () => void;
  setResumingHandler(_: () => void)
  throughput: number;
  setThroughput(_: number)
  totalUnitCount: number;
  setTotalUnitCount(_: number)
  readonly userInfo: NSDictionary<string, any>;
  addChildWithPendingUnitCount(_: Progress, withPendingUnitCount: number): void;
  becomeCurrentWithPendingUnitCount(_: number): void;
  cancel(): void;
  static createWithParentUserInfo(parent?: Progress, userInfo?: NSDictionary<string, any>): this;
  pause(): void;
  performAsCurrentWithPendingUnitCountUsingBlock(_: number, usingBlock: () => void): void;
  publish(): void;
  resignCurrent(): void;
  resume(): void;
  setUserInfoObjectForKey(_?: any, forKey: string): void;
  unpublish(): void;
}

declare var NSProgressEstimatedTimeRemainingKey: string;

declare var NSProgressFileAnimationImageKey: string;

declare var NSProgressFileAnimationImageOriginalRectKey: string;

declare var NSProgressFileCompletedCountKey: string;

declare var NSProgressFileIconKey: string;

declare var NSProgressFileOperationKindCopying: string;

declare var NSProgressFileOperationKindDecompressingAfterDownloading: string;

declare var NSProgressFileOperationKindDownloading: string;

declare var NSProgressFileOperationKindKey: string;

declare var NSProgressFileOperationKindReceiving: string;

declare var NSProgressFileTotalCountKey: string;

declare var NSProgressFileURLKey: string;

declare var NSProgressKindFile: string;

interface NSProgressReporting extends NSObject {
  progress: Progress;
}

declare var NSProgressReporting: {
  prototype: NSProgressReporting;
};

declare var NSProgressThroughputKey: string;


declare const NSPropertyListErrorMaximum: number;

declare const NSPropertyListErrorMinimum: number;

declare const NSPropertyListReadCorruptError: number;

declare const NSPropertyListReadStreamError: number;

declare const NSPropertyListReadUnknownVersionError: number;
declare class NSPropertyListSerialization extends NSObject {
  static dataWithPropertyListFormatOptionsError(fromPropertyList: any, format: PropertyListSerialization.PropertyListFormat, options: number): Data;
  static propertyListIsValidForFormat(_: any, isValidForFormat: PropertyListSerialization.PropertyListFormat): boolean;
  static propertyListWithDataOptionsFormatError(from: Data, options: PropertyListSerialization.MutabilityOptions, format?: PropertyListSerialization.PropertyListFormat): any;
  static propertyListWithStreamOptionsFormatError(options: InputStream, format: PropertyListSerialization.MutabilityOptions, error?: PropertyListSerialization.PropertyListFormat): any;
  static writePropertyListToStreamFormatOptionsError(toStream: any, format: OutputStream, options: PropertyListSerialization.PropertyListFormat, error: number): number;
}


declare const NSPropertyListWriteInvalidError: number;

declare const NSPropertyListWriteStreamError: number;
declare class NSPropertySpecifier extends NSScriptObjectSpecifier {
}


declare const NSProprietaryStringEncoding: number;
declare class NSProtocolChecker extends NSProxy {
  static alloc(): NSProtocolChecker; // inherited from NSProxy
  readonly protocol: any /* Protocol */;
  readonly target: NSObject;
  static createWithTargetProtocol(target: NSObject, protocol: any /* Protocol */): this;
}

declare function NSProtocolFromString(namestr: string): any /* Protocol */;
declare class NSProxy implements NSObject {
  static alloc(): NSProxy;
  static class(): typeof NSObject;
  static respondsToSelector(to: string): boolean;
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  conformsToProtocol(to: any /* Protocol */): boolean;
  dealloc(): void;
  finalize(): void;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  self(): this;
}

declare class NSPurgeableData extends NSMutableData implements NSDiscardableContent {
  static dataWithCapacity(capacity: number): NSPurgeableData; // inherited from NSMutableData
  static dataWithContentsOfFileOptionsError(options: string, error: NSData.ReadingOptions): NSPurgeableData; // inherited from NSData
  static dataWithContentsOfURLOptionsError(options: NSURL, error: NSData.ReadingOptions): NSPurgeableData; // inherited from NSData
  static dataWithLength(length: number): NSPurgeableData; // inherited from NSMutableData
  beginContentAccess(): boolean;
  discardContentIfPossible(): void;
  endContentAccess(): void;
  isContentDiscarded(): boolean;
}

declare class NSQuitCommand extends NSScriptCommand {
  readonly saveOptions: NSSaveOptions;
}

declare class NSRandomSpecifier extends NSScriptObjectSpecifier {
}

interface NSRange {
  location: number;
  length: number;
}

declare var NSRange: NSRange;

declare var NSRangeException: string;

declare function NSRangeFromString(aString: string): NSRange;
declare class NSRangeSpecifier extends NSScriptObjectSpecifier {
  endSpecifier: NSScriptObjectSpecifier;
  setEndSpecifier(_: NSScriptObjectSpecifier)
  startSpecifier: NSScriptObjectSpecifier;
  setStartSpecifier(_: NSScriptObjectSpecifier)
  static createWithContainerClassDescriptionContainerSpecifierKeyStartSpecifierEndSpecifier(containerClassDescription: NSScriptClassDescription, containerSpecifier?: NSScriptObjectSpecifier, key: string, startSpecifier?: NSScriptObjectSpecifier, endSpecifier?: NSScriptObjectSpecifier): this;
}


declare const NSReceiverEvaluationScriptError: number;

declare const NSReceiversCantHandleCommandScriptError: number;
declare function NSRecordAllocationEvent(eventType: number, object_: any): void;
declare var NSRecoveryAttempterErrorKey: string;

declare function NSRectFromString(aString: string): NSRect;
declare class NSRecursiveLock extends NSObject implements NSLocking {
  name: string;
  setName(_: string)
  lock(): void;
  lockBeforeDate(before: Date): boolean;
  tryLock(): boolean;
  unlock(): void;
}

declare var NSRegistrationDomain: string;

declare class NSRegularExpression extends NSObject implements NSCopying, NSSecureCoding {
  static escapedPatternForString(for_: string): string;
  static escapedTemplateForString(for_: string): string;
  static regularExpressionWithPatternOptionsError(options: string, error: NSRegularExpression.Options): NSRegularExpression;
  readonly numberOfCaptureGroups: number;
  readonly options: NSRegularExpression.Options;
  readonly pattern: string;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  enumerateMatchesInStringOptionsRangeUsingBlock(in_: string, options: NSRegularExpression.MatchingOptions, range: NSRange, using?: (p1: NSTextCheckingResult, p2: NSRegularExpression.MatchingFlags, p3: boolean) => void): void;
  firstMatchInStringOptionsRange(in_: string, options: NSRegularExpression.MatchingOptions, range: NSRange): NSTextCheckingResult;
  static createWithCoder(coder: NSCoder): this;
  static createWithPatternOptions(pattern: string, options: NSRegularExpression.Options): this;
  matchesInStringOptionsRange(in_: string, options: NSRegularExpression.MatchingOptions, range: NSRange): NSArray<NSTextCheckingResult>;
  numberOfMatchesInStringOptionsRange(in_: string, options: NSRegularExpression.MatchingOptions, range: NSRange): number;
  rangeOfFirstMatchInStringOptionsRange(in_: string, options: NSRegularExpression.MatchingOptions, range: NSRange): NSRange;
  replaceMatchesInStringOptionsRangeWithTemplate(in_: NSMutableString, options: NSRegularExpression.MatchingOptions, range: NSRange, withTemplate: string): number;
  replacementStringForResultInStringOffsetTemplate(for_: NSTextCheckingResult, in_: string, offset: number, template: string): string;
  stringByReplacingMatchesInStringOptionsRangeWithTemplate(in_: string, options: NSRegularExpression.MatchingOptions, range: NSRange, withTemplate: string): string;
}

declare class NSRelativeDateTimeFormatter extends NSFormatter {
  calendar: NSCalendar;
  setCalendar(_: NSCalendar)
  dateTimeStyle: RelativeDateTimeFormatter.DateTimeStyle;
  setDateTimeStyle(_: RelativeDateTimeFormatter.DateTimeStyle)
  formattingContext: Formatter.Context;
  setFormattingContext(_: Formatter.Context)
  locale: Locale;
  setLocale(_: Locale)
  unitsStyle: RelativeDateTimeFormatter.UnitsStyle;
  setUnitsStyle(_: RelativeDateTimeFormatter.UnitsStyle)
  localizedStringForDateRelativeToDate(_: Date, relativeToDate: Date): string;
  localizedStringFromDateComponents(_: NSDateComponents): string;
  localizedStringFromTimeInterval(_: number): string;
}

declare class NSRelativeSpecifier extends NSScriptObjectSpecifier {
  baseSpecifier: NSScriptObjectSpecifier;
  setBaseSpecifier(_: NSScriptObjectSpecifier)
  relativePosition: NSRelativeSpecifier.RelativePosition;
  setRelativePosition(_: NSRelativeSpecifier.RelativePosition)
  static createWithContainerClassDescriptionContainerSpecifierKeyRelativePositionBaseSpecifier(containerClassDescription: NSScriptClassDescription, containerSpecifier?: NSScriptObjectSpecifier, key: string, relativePosition: NSRelativeSpecifier.RelativePosition, baseSpecifier?: NSScriptObjectSpecifier): this;
}


declare const NSRequiredArgumentsMissingScriptError: number;
declare function NSResetHashTable(table: NSHashTable<any>): void;
declare function NSResetMapTable(table: NSMapTable<any, any>): void;
declare function NSReturnAddress(frame: number): any;
declare function NSRoundDownToMultipleOfPageSize(bytes: number): number;
declare function NSRoundUpToMultipleOfPageSize(bytes: number): number;
declare class NSRunLoop extends NSObject {
  readonly currentMode: string;
  static currentRunLoop(): RunLoop;
  static mainRunLoop(): RunLoop;
  acceptInputForModeBeforeDate(_: string, beforeDate: Date): void;
  addPortForMode(_: Port, forMode: string): void;
  addTimerForMode(_: Timer, forMode: string): void;
  cancelPerformSelectorTargetArgument(_: string, target: any, argument?: any): void;
  cancelPerformSelectorsWithTarget(_: any): void;
  getCFRunLoop(): any;
  limitDateForMode(_: string): Date;
  performBlock(_: () => void): void;
  performInModesBlock(_: NSArray<string>, block: () => void): void;
  performSelectorTargetArgumentOrderModes(_: string, target: any, argument?: any, order: number, modes: NSArray<string>): void;
  removePortForMode(_: Port, forMode: string): void;
  run(): void;
  runModeBeforeDate(mode: string, before: Date): boolean;
  runUntilDate(_: Date): void;
}

declare var NSRunLoopCommonModes: string;


declare const NSScannedOption: number;
declare class NSScanner extends NSObject implements NSCopying {
  static localizedScannerWithString(_: string): any;
  static scannerWithString(_: string): NSScanner;
  readonly isAtEnd: boolean;
  caseSensitive: boolean;
  setCaseSensitive(_: boolean)
  charactersToBeSkipped: CharacterSet;
  setCharactersToBeSkipped(_: CharacterSet)
  locale: any;
  setLocale(_: any)
  scanLocation: number;
  setScanLocation(_: number)
  readonly string: string;
  static createWithString(string: string): this;
  scanCharactersFromSetIntoString(_: CharacterSet, intoString?: string): boolean;
  scanDecimal(_?: Decimal): boolean;
  scanDouble(_?: number): boolean;
  scanFloat(_?: number): boolean;
  scanHexDouble(_?: number): boolean;
  scanHexFloat(_?: number): boolean;
  scanHexInt(_?: number): boolean;
  scanHexLongLong(_?: number): boolean;
  scanInt(_?: number): boolean;
  scanInteger(_?: number): boolean;
  scanLongLong(_?: number): boolean;
  scanStringIntoString(_: string, intoString?: string): boolean;
  scanUnsignedLongLong(_?: number): boolean;
  scanUpToCharactersFromSetIntoString(_: CharacterSet, intoString?: string): boolean;
  scanUpToStringIntoString(_: string, into?: string): boolean;
}

declare class NSScriptClassDescription extends NSClassDescription {
  readonly appleEventCode: number;
  readonly defaultSubcontainerAttributeKey: string;
  readonly implementationClassName: string;
  readonly suiteName: string;
  readonly superclassDescription: NSScriptClassDescription;
  appleEventCodeForKey(forKey: string): number;
  classDescriptionForKey(_: string): NSScriptClassDescription;
  hasOrderedToManyRelationshipForKey(forKey: string): boolean;
  hasPropertyForKey(forKey: string): boolean;
  hasReadablePropertyForKey(forKey: string): boolean;
  hasWritablePropertyForKey(forKey: string): boolean;
  static createWithSuiteNameClassNameDictionary(suiteName: string, className: string, dictionary?: NSDictionary<any, any>): this;
  isLocationRequiredToCreateForKey(forKey: string): boolean;
  keyWithAppleEventCode(withAppleEventCode: number): string;
  matchesAppleEventCode(_: number): boolean;
  selectorForCommand(forCommand: NSScriptCommandDescription): string;
  supportsCommand(_: NSScriptCommandDescription): boolean;
  typeForKey(forKey: string): string;
}

declare class NSScriptCoercionHandler extends NSObject {
  static sharedCoercionHandler(): NSScriptCoercionHandler;
  coerceValueToClass(_: any, to: typeof NSObject): any;
  registerCoercerSelectorToConvertFromClassToClass(_: any, selector: string, toConvertFrom: typeof NSObject, to: typeof NSObject): void;
}

declare class NSScriptCommand extends NSObject implements NSCoding {
  static currentCommand(): NSScriptCommand;
  readonly appleEvent: NSAppleEventDescriptor;
  arguments: NSDictionary<string, any>;
  setArguments(_: NSDictionary<string, any>)
  readonly commandDescription: NSScriptCommandDescription;
  directParameter: any;
  setDirectParameter(_: any)
  readonly evaluatedArguments: NSDictionary<string, any>;
  readonly evaluatedReceivers: any;
  receiversSpecifier: NSScriptObjectSpecifier;
  setReceiversSpecifier(_: NSScriptObjectSpecifier)
  scriptErrorExpectedTypeDescriptor: NSAppleEventDescriptor;
  setScriptErrorExpectedTypeDescriptor(_: NSAppleEventDescriptor)
  scriptErrorNumber: number;
  setScriptErrorNumber(_: number)
  scriptErrorOffendingObjectDescriptor: NSAppleEventDescriptor;
  setScriptErrorOffendingObjectDescriptor(_: NSAppleEventDescriptor)
  scriptErrorString: string;
  setScriptErrorString(_: string)
  readonly isWellFormed: boolean;
  encodeWithCoder(with_: NSCoder): void;
  executeCommand(): any;
  static createWithCoder(coder: NSCoder): this;
  static createWithCommandDescription(commandDescription: NSScriptCommandDescription): this;
  performDefaultImplementation(): any;
  resumeExecutionWithResult(withResult?: any): void;
  suspendExecution(): void;
}

declare class NSScriptCommandDescription extends NSObject implements NSCoding {
  readonly appleEventClassCode: number;
  readonly appleEventCode: number;
  readonly appleEventCodeForReturnType: number;
  readonly argumentNames: NSArray<string>;
  readonly commandClassName: string;
  readonly commandName: string;
  readonly returnType: string;
  readonly suiteName: string;
  appleEventCodeForArgumentWithName(withName: string): number;
  createCommandInstance(): NSScriptCommand;
  createCommandInstanceWithZone(with_?: any): NSScriptCommand;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithSuiteNameCommandNameDictionary(suiteName: string, commandName: string, dictionary?: NSDictionary<any, any>): this;
  isOptionalArgumentWithName(withName: string): boolean;
  typeForArgumentWithName(withName: string): string;
}

declare class NSScriptExecutionContext extends NSObject {
  static sharedScriptExecutionContext(): NSScriptExecutionContext;
  objectBeingTested: any;
  setObjectBeingTested(_: any)
  rangeContainerObject: any;
  setRangeContainerObject(_: any)
  topLevelObject: any;
  setTopLevelObject(_: any)
}

declare class NSScriptObjectSpecifier extends NSObject implements NSCoding {
  static objectSpecifierWithDescriptor(descriptor: NSAppleEventDescriptor): NSScriptObjectSpecifier;
  childSpecifier: NSScriptObjectSpecifier;
  setChildSpecifier(_: NSScriptObjectSpecifier)
  containerClassDescription: NSScriptClassDescription;
  setContainerClassDescription(_: NSScriptClassDescription)
  containerIsObjectBeingTested: boolean;
  setContainerIsObjectBeingTested(_: boolean)
  containerIsRangeContainerObject: boolean;
  setContainerIsRangeContainerObject(_: boolean)
  containerSpecifier: NSScriptObjectSpecifier;
  setContainerSpecifier(_: NSScriptObjectSpecifier)
  readonly descriptor: NSAppleEventDescriptor;
  evaluationErrorNumber: number;
  setEvaluationErrorNumber(_: number)
  readonly evaluationErrorSpecifier: NSScriptObjectSpecifier;
  key: string;
  setKey(_: string)
  readonly keyClassDescription: NSScriptClassDescription;
  readonly objectsByEvaluatingSpecifier: any;
  encodeWithCoder(with_: NSCoder): void;
  indicesOfObjectsByEvaluatingWithContainerCount(withContainer: any, count: number): number;
  static createWithCoder(coder: NSCoder): this;
  static createWithContainerClassDescriptionContainerSpecifierKey(containerClassDescription: NSScriptClassDescription, containerSpecifier?: NSScriptObjectSpecifier, key: string): this;
  static createWithContainerSpecifierKey(containerSpecifier: NSScriptObjectSpecifier, key: string): this;
  objectsByEvaluatingWithContainers(withContainers: any): any;
}

declare class NSScriptSuiteRegistry extends NSObject {
  static setSharedScriptSuiteRegistry(_: NSScriptSuiteRegistry): void;
  static sharedScriptSuiteRegistry(): NSScriptSuiteRegistry;
  readonly suiteNames: NSArray<string>;
  aeteResource(_: string): Data;
  appleEventCodeForSuite(forSuite: string): number;
  bundleForSuite(forSuite: string): Bundle;
  classDescriptionWithAppleEventCode(withAppleEventCode: number): NSScriptClassDescription;
  classDescriptionsInSuite(inSuite: string): NSDictionary<string, NSScriptClassDescription>;
  commandDescriptionWithAppleEventClassAndAppleEventCode(withAppleEventClass: number, andAppleEventCode: number): NSScriptCommandDescription;
  commandDescriptionsInSuite(inSuite: string): NSDictionary<string, NSScriptCommandDescription>;
  loadSuiteWithDictionaryFromBundle(with_: NSDictionary<any, any>, from: Bundle): void;
  loadSuitesFromBundle(from: Bundle): void;
  registerClassDescription(_: NSScriptClassDescription): void;
  registerCommandDescription(_: NSScriptCommandDescription): void;
  suiteForAppleEventCode(forAppleEventCode: number): string;
}

declare class NSScriptWhoseTest extends NSObject implements NSCoding {
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  isTrue(): boolean;
}

declare function NSSearchPathForDirectoriesInDomains(directory: FileManager.SearchPathDirectory, domainMask: FileManager.SearchPathDomainMask, expandTilde: boolean): NSArray<string>;
interface NSSecureCoding extends NSCoding {
}

declare var NSSecureCoding: {
  prototype: NSSecureCoding;
};

declare class NSSecureUnarchiveFromDataTransformer extends NSValueTransformer {
  static allowedTopLevelClasses(): NSArray<typeof NSObject>;
}

declare var NSSecureUnarchiveFromDataTransformerName: string;

declare function NSSelectorFromString(aSelectorName: string): string;
declare class NSSet<ObjectType> extends NSObject implements NSCopying, NSFastEnumeration, NSMutableCopying, NSSecureCoding {
  static setWithObjects<ObjectType>(_: ObjectType): NSSet<ObjectType>;
  readonly allObjects: NSArray<ObjectType>;
  readonly count: number;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  anyObject(): ObjectType;
  containsObject(_: ObjectType): boolean;
  countByEnumeratingWithStateObjectsCount(with_: NSFastEnumerationState, objects?: any, count: number): number;
  descriptionWithLocale(withLocale?: any): string;
  encodeWithCoder(with_: NSCoder): void;
  enumerateIndexPathsWithOptionsUsingBlock(options: NSEnumerationOptions, using: (p1: IndexPath, p2: boolean) => void): void;
  enumerateObjectsUsingBlock(_: (p1: ObjectType, p2: boolean) => void): void;
  enumerateObjectsWithOptionsUsingBlock(options: NSEnumerationOptions, using: (p1: ObjectType, p2: boolean) => void): void;
  filteredSetUsingPredicate(using: NSPredicate): Set<ObjectType>;
  static createWithArray(array: NSArray<ObjectType>): this;
  static createWithCoder(coder: NSCoder): this;
  static createWithObjects(objects: ObjectType): this;
  static createWithObjectsCount(objects?: ObjectType, count: number): this;
  static createWithSet(set: Set<ObjectType>): this;
  static createWithSetCopyItems(set: Set<ObjectType>, copyItems: boolean): this;
  intersectsWith_(_: Set<ObjectType>): boolean;
  isEqualWithTo(to: Set<ObjectType>): boolean;
  isSubsetOf(of: Set<ObjectType>): boolean;
  member(_: ObjectType): ObjectType;
  objectEnumerator(): NSEnumerator<ObjectType>;
  objectsPassingTest(passingTest: (p1: ObjectType, p2: boolean) => boolean): Set<ObjectType>;
  objectsWithOptionsPassingTest(options: NSEnumerationOptions, passingTest: (p1: ObjectType, p2: boolean) => boolean): Set<ObjectType>;
  setByAddingObject(_: ObjectType): Set<ObjectType>;
  setByAddingObjectsFromArray(from: NSArray<ObjectType>): Set<ObjectType>;
  addingObjectsWithFrom(from: Set<ObjectType>): Set<ObjectType>;
  sortedArrayUsingDescriptors(using: NSArray<NSSortDescriptor>): NSArray<ObjectType>;
}

declare class NSSetCommand extends NSScriptCommand {
  readonly keySpecifier: NSScriptObjectSpecifier;
  setReceiversSpecifier(_?: NSScriptObjectSpecifier): void;
}

declare function NSSetUncaughtExceptionHandler(p1: (p1: NSException) => void): void;

declare const NSShiftJISStringEncoding: number;
declare function NSShouldRetainWithZone(anObject: any, requestedZone: any): boolean;
declare function NSSizeFromString(aString: string): NSSize;
declare class NSSocketPort extends NSPort {
  readonly address: Data;
  readonly protocol: number;
  readonly protocolFamily: number;
  readonly socket: number;
  readonly socketType: number;
  static createWithRemoteWithProtocolFamilySocketTypeProtocolAddress(remoteWithProtocolFamily: number, socketType: number, protocol: number, address: Data): this;
  static createWithRemoteWithTCPPortHost(remoteWithTCPPort: number, host?: string): this;
  static createWithProtocolFamilySocketTypeProtocolAddress(protocolFamily: number, socketType: number, protocol: number, address: Data): this;
  static createWithProtocolFamilySocketTypeProtocolSocket(protocolFamily: number, socketType: number, protocol: number, socket: number): this;
  static createWithTCPPort(TCPPort: number): this;
}


declare const NSSolarisOperatingSystem: number;
declare class NSSortDescriptor extends NSObject implements NSCopying, NSSecureCoding {
  readonly ascending: boolean;
  readonly comparator: (p1: any, p2: any) => ComparisonResult;
  readonly key: string;
  readonly reversedSortDescriptor: any;
  readonly selector: string;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  allowEvaluation(): void;
  compareObjectToObject(_: any, to: any): ComparisonResult;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithKeyAscending(key?: string, ascending: boolean): this;
  static createWithKeyAscendingComparator(key?: string, ascending: boolean, comparator: (p1: any, p2: any) => ComparisonResult): this;
  static createWithKeyAscendingSelector(key?: string, ascending: boolean, selector?: string): this;
}

declare class NSSpecifierTest extends NSScriptWhoseTest {
  static createWithObjectSpecifierComparisonOperatorTestObject(objectSpecifier?: NSScriptObjectSpecifier, comparisonOperator: NSSpecifierTest.TestComparisonOperation, testObject?: any): this;
}

declare class NSSpellServer extends NSObject {
  delegate: NSSpellServerDelegate;
  setDelegate(_: NSSpellServerDelegate)
  isWordInUserDictionariesCaseSensitive(inUserDictionaries: string, caseSensitive: boolean): boolean;
  registerLanguageByVendor(_?: string, byVendor?: string): boolean;
  run(): void;
}

interface NSSpellServerDelegate extends NSObject {
  spellServerFindMisspelledWordInStringLanguageWordCountCountOnly?(_: NSSpellServer, findMisspelledWordIn: string, language: string, wordCount: number, countOnly: boolean): NSRange;
  spellServerSuggestCompletionsForPartialWordRangeInStringLanguage?(_: NSSpellServer, suggestCompletionsForPartialWordRange: NSRange, in_: string, language: string): NSArray<string>;
  spellServerCheckGrammarInStringLanguageDetails?(_: NSSpellServer, checkGrammarIn: string, language?: string, details?: NSArray<NSDictionary<string, any>>): NSRange;
  spellServerCheckStringOffsetTypesOptionsOrthographyWordCount?(_: NSSpellServer, check: string, offset: number, types: number, options?: NSDictionary<string, any>, orthography?: NSOrthography, wordCount: number): NSArray<NSTextCheckingResult>;
  spellServerDidForgetWordInLanguage?(_: NSSpellServer, didForgetWord: string, inLanguage: string): void;
  spellServerDidLearnWordInLanguage?(_: NSSpellServer, didLearnWord: string, inLanguage: string): void;
  spellServerRecordResponseToCorrectionForWordLanguage?(_: NSSpellServer, recordResponse: number, toCorrection: string, forWord: string, language: string): void;
  spellServerSuggestGuessesForWordInLanguage?(_: NSSpellServer, suggestGuessesForWord: string, inLanguage: string): NSArray<string>;
}

declare var NSSpellServerDelegate: {
  prototype: NSSpellServerDelegate;
};

declare class NSStream extends NSObject {
  static getBoundStreamsWithBufferSizeInputStreamOutputStream(_: number, inputStream?: InputStream, outputStream?: OutputStream): void;
  static getStreamsToHostWithNamePortInputStreamOutputStream(_: string, port: number, inputStream?: InputStream, outputStream?: OutputStream): void;
  delegate: NSStreamDelegate;
  setDelegate(_: NSStreamDelegate)
  readonly streamError: Error;
  readonly streamStatus: Stream.Status;
  close(): void;
  open(): void;
  propertyForKey(_: string): any;
  removeFromRunLoopForMode(_: RunLoop, forMode: string): void;
  scheduleInRunLoopForMode(_: RunLoop, forMode: string): void;
  setPropertyForKey(_?: any, forKey: string): boolean;
}

declare var NSStreamDataWrittenToMemoryStreamKey: string;

interface NSStreamDelegate extends NSObject {
  streamHandleEvent?(_: Stream, handleEvent: Stream.Event): void;
}

declare var NSStreamDelegate: {
  prototype: NSStreamDelegate;
};

declare var NSStreamFileCurrentOffsetKey: string;

declare var NSStreamNetworkServiceType: string;

declare var NSStreamNetworkServiceTypeBackground: string;

declare var NSStreamNetworkServiceTypeCallSignaling: string;

declare var NSStreamNetworkServiceTypeVideo: string;

declare var NSStreamNetworkServiceTypeVoIP: string;

declare var NSStreamNetworkServiceTypeVoice: string;

declare var NSStreamSOCKSErrorDomain: string;

declare var NSStreamSOCKSProxyConfigurationKey: string;

declare var NSStreamSOCKSProxyHostKey: string;

declare var NSStreamSOCKSProxyPasswordKey: string;

declare var NSStreamSOCKSProxyPortKey: string;

declare var NSStreamSOCKSProxyUserKey: string;

declare var NSStreamSOCKSProxyVersion4: string;

declare var NSStreamSOCKSProxyVersion5: string;

declare var NSStreamSOCKSProxyVersionKey: string;

declare var NSStreamSocketSSLErrorDomain: string;

declare var NSStreamSocketSecurityLevelKey: string;

declare var NSStreamSocketSecurityLevelNegotiatedSSL: string;

declare var NSStreamSocketSecurityLevelNone: string;

declare var NSStreamSocketSecurityLevelSSLv2: string;

declare var NSStreamSocketSecurityLevelSSLv3: string;

declare var NSStreamSocketSecurityLevelTLSv1: string;

declare class NSString extends NSObject implements NSCopying, NSMutableCopying, NSSecureCoding, NSItemProviderReading, NSItemProviderWriting, NSPasteboardReading, NSPasteboardWriting {
  static itemProviderVisibilityForRepresentationWithTypeIdentifier(withTypeIdentifier: string): NSItemProviderRepresentationVisibility;
  static localizedNameOfStringEncoding(of: number): string;
  static objectWithItemProviderDataTypeIdentifierError(typeIdentifier: Data, error: string): NSString;
  static pathWithComponents(withComponents: NSArray<string>): string;
  static readableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;
  static readingOptionsForTypePasteboard(forType: string, pasteboard: NSPasteboard): NSPasteboard.ReadingOptions;
  static stringEncodingForDataEncodingOptionsConvertedStringUsedLossyConversion(for_: Data, encodingOptions?: NSDictionary<string, any>, convertedString?: string, usedLossyConversion?: boolean): number;
  static stringWithContentsOfFileEncodingError(encoding: string, error: number): NSString;
  static stringWithContentsOfFileUsedEncodingError(usedEncoding: string, error?: number): NSString;
  static stringWithContentsOfURLEncodingError(encoding: NSURL, error: number): NSString;
  static stringWithContentsOfURLUsedEncodingError(usedEncoding: NSURL, error?: number): NSString;
  readonly UTF8String: string;
  readonly isAbsolutePath: boolean;
  readonly boolValue: boolean;
  readonly capitalizedString: string;
  readonly decomposedStringWithCanonicalMapping: string;
  readonly decomposedStringWithCompatibilityMapping: string;
  readonly doubleValue: number;
  readonly fastestEncoding: number;
  readonly fileSystemRepresentation: string;
  readonly floatValue: number;
  readonly intValue: number;
  readonly integerValue: number;
  readonly lastPathComponent: string;
  readonly length: number;
  readonly localizedCapitalizedString: string;
  readonly localizedLowercaseString: string;
  readonly localizedUppercaseString: string;
  readonly longLongValue: number;
  readonly lowercaseString: string;
  readonly pathComponents: NSArray<string>;
  readonly pathExtension: string;
  readonly precomposedStringWithCanonicalMapping: string;
  readonly precomposedStringWithCompatibilityMapping: string;
  readonly smallestEncoding: number;
  readonly stringByAbbreviatingWithTildeInPath: string;
  readonly stringByDeletingLastPathComponent: string;
  readonly stringByDeletingPathExtension: string;
  readonly stringByExpandingTildeInPath: string;
  readonly stringByRemovingPercentEncoding: string;
  readonly stringByResolvingSymlinksInPath: string;
  readonly stringByStandardizingPath: string;
  readonly uppercaseString: string;
  static availableStringEncodings(): number;
  static defaultCStringEncoding(): number;
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly superclass: typeof NSObject; // inherited from NSObject
  readonly writableTypeIdentifiersForItemProvider: NSArray<string>; // inherited from NSItemProviderWriting
  static readableTypeIdentifiersForItemProvider(): NSArray<string>; // inherited from NSItemProviderReading
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  static writableTypeIdentifiersForItemProvider(): NSArray<string>; // inherited from NSItemProviderWriting
  boundingRectWithSizeOptionsAttributes(with_: NSSize, options: NSString.DrawingOptions, attributes?: NSDictionary<string, any>): NSRect;
  boundingRectWithSizeOptionsAttributesContext(with_: NSSize, options: NSString.DrawingOptions, attributes?: NSDictionary<string, any>, context?: NSStringDrawingContext): NSRect;
  cStringUsingEncoding(using: number): string;
  canBeConvertedToEncoding(to: number): boolean;
  capitalizedStringWithLocale(with_?: Locale): string;
  caseInsensitiveCompare(_: string): ComparisonResult;
  characterAtIndex(at: number): string;
  commonPrefixWithStringOptions(with_: string, options: NSString.CompareOptions): string;
  compare(_: string): ComparisonResult;
  compareOptions(_: string, options: NSString.CompareOptions): ComparisonResult;
  compareOptionsRange(_: string, options: NSString.CompareOptions, range: NSRange): ComparisonResult;
  compareOptionsRangeLocale(_: string, options: NSString.CompareOptions, range: NSRange, locale?: any): ComparisonResult;
  completePathIntoStringCaseSensitiveMatchesIntoArrayFilterTypes(into?: string, caseSensitive: boolean, matchesInto?: NSArray<string>, filterTypes?: NSArray<string>): number;
  componentsSeparatedByCharactersInSet(separatedBy: CharacterSet): NSArray<string>;
  componentsSeparatedByString(separatedBy: string): NSArray<string>;
  conformsToProtocol(to: any /* Protocol */): boolean;
  containsString(_: string): boolean;
  dataUsingEncoding(using: number): Data;
  dataUsingEncodingAllowLossyConversion(using: number, allowLossyConversion: boolean): Data;
  drawAtPointWithAttributes(at: NSPoint, withAttributes?: NSDictionary<string, any>): void;
  drawInRectWithAttributes(in_: NSRect, withAttributes?: NSDictionary<string, any>): void;
  drawWithRectOptionsAttributes(with_: NSRect, options: NSString.DrawingOptions, attributes?: NSDictionary<string, any>): void;
  drawWithRectOptionsAttributesContext(with_: NSRect, options: NSString.DrawingOptions, attributes?: NSDictionary<string, any>, context?: NSStringDrawingContext): void;
  encodeWithCoder(with_: NSCoder): void;
  enumerateLinesUsingBlock(_: (p1: string, p2: boolean) => void): void;
  enumerateSubstringsInRangeOptionsUsingBlock(in_: NSRange, options: NSString.EnumerationOptions, using?: (p1: string, p2: NSRange, p3: NSRange, p4: boolean) => void): void;
  getBytesMaxLengthUsedLengthEncodingOptionsRangeRemainingRange(_?: any, maxLength: number, usedLength?: number, encoding: number, options: NSString.EncodingConversionOptions, range: NSRange, remaining?: NSRange): boolean;
  getCStringMaxLengthEncoding(_: string, maxLength: number, encoding: number): boolean;
  getCharacters(_: string): void;
  getCharactersRange(_: string, range: NSRange): void;
  getFileSystemRepresentationMaxLength(_: string, maxLength: number): boolean;
  getLineStartEndContentsEndForRange(_?: number, end?: number, contentsEnd?: number, for_: NSRange): void;
  getParagraphStartEndContentsEndForRange(_?: number, end?: number, contentsEnd?: number, for_: NSRange): void;
  hasPrefix(_: string): boolean;
  hasSuffix(_: string): boolean;
  static createWithBytesLengthEncoding(bytes: any, length: number, encoding: number): this;
  static createWithBytesNoCopyLengthEncodingFreeWhenDone(bytesNoCopy: any, length: number, encoding: number, freeWhenDone: boolean): this;
  static createWithCStringEncoding(CString: string, encoding: number): this;
  static createWithCharactersLength(characters: string, length: number): this;
  static createWithCharactersNoCopyLengthFreeWhenDone(charactersNoCopy: string, length: number, freeWhenDone: boolean): this;
  static createWithCoder(coder: NSCoder): this;
  static createWithContentsOfFileEncoding(contentsOfFile: string, encoding: number): this;
  static createWithContentsOfFileUsedEncoding(contentsOfFile: string, usedEncoding?: number): this;
  static createWithContentsOfURLEncoding(contentsOfURL: NSURL, encoding: number): this;
  static createWithContentsOfURLUsedEncoding(contentsOfURL: NSURL, usedEncoding?: number): this;
  static createWithDataEncoding(data: Data, encoding: number): this;
  static createWithPasteboardPropertyListOfType(pasteboardPropertyList: any, ofType: string): this;
  static createWithString(string: string): this;
  static createWithUTF8String(UTF8String: string): this;
  isEqual(_: any): boolean;
  isEqualToString(to: string): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  itemProviderVisibilityForRepresentationWithTypeIdentifier(withTypeIdentifier: string): NSItemProviderRepresentationVisibility;
  lengthOfBytesUsingEncoding(using: number): number;
  lineRangeForRange(for_: NSRange): NSRange;
  loadDataWithTypeIdentifierForItemProviderCompletionHandler(withTypeIdentifier: string, forItemProviderCompletionHandler?: (p1: Data, p2: Error) => void): Progress;
  localizedCaseInsensitiveCompare(_: string): ComparisonResult;
  localizedCaseInsensitiveContainsString(_: string): boolean;
  localizedCompare(_: string): ComparisonResult;
  localizedStandardCompare(_: string): ComparisonResult;
  localizedStandardContainsString(_: string): boolean;
  localizedStandardRangeOfString(of: string): NSRange;
  lowercaseStringWithLocale(with_?: Locale): string;
  maximumLengthOfBytesUsingEncoding(using: number): number;
  paragraphRangeForRange(for_: NSRange): NSRange;
  pasteboardPropertyListForType(forType: string): any;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  propertyList(): any;
  propertyListFromStringsFileFormat(): NSDictionary<any, any>;
  rangeOfCharacterFromSet(from: CharacterSet): NSRange;
  rangeOfCharacterFromSetOptions(from: CharacterSet, options: NSString.CompareOptions): NSRange;
  rangeOfCharacterFromSetOptionsRange(from: CharacterSet, options: NSString.CompareOptions, range: NSRange): NSRange;
  rangeOfComposedCharacterSequenceAtIndex(at: number): NSRange;
  rangeOfComposedCharacterSequencesForRange(for_: NSRange): NSRange;
  rangeOfString(of: string): NSRange;
  rangeOfStringOptions(of: string, options: NSString.CompareOptions): NSRange;
  rangeOfStringOptionsRange(of: string, options: NSString.CompareOptions, range: NSRange): NSRange;
  rangeOfStringOptionsRangeLocale(of: string, options: NSString.CompareOptions, range: NSRange, locale?: Locale): NSRange;
  respondsToSelector(_: string): boolean;
  self(): this;
  sizeWithAttributes(withAttributes?: NSDictionary<string, any>): NSSize;
  stringByAddingPercentEncodingWithAllowedCharacters(withAllowedCharacters: CharacterSet): string;
  stringByAppendingPathComponent(_: string): string;
  stringByAppendingPathExtension(_: string): string;
  stringByAppendingString(_: string): string;
  stringByApplyingTransformReverse(_: string, reverse: boolean): string;
  stringByFoldingWithOptionsLocale(options: NSString.CompareOptions, locale?: Locale): string;
  stringByPaddingToLengthWithStringStartingAtIndex(toLength: number, withPad: string, startingAt: number): string;
  stringByReplacingCharactersInRangeWithString(in_: NSRange, with_: string): string;
  stringByReplacingOccurrencesOfStringWithString(of: string, with_: string): string;
  stringByReplacingOccurrencesOfStringWithStringOptionsRange(of: string, with_: string, options: NSString.CompareOptions, range: NSRange): string;
  stringByTrimmingCharactersInSet(in_: CharacterSet): string;
  stringsByAppendingPaths(byAppendingPaths: NSArray<string>): NSArray<string>;
  substringFromIndex(from: number): string;
  substringToIndex(to: number): string;
  substringWithRange(with_: NSRange): string;
  uppercaseStringWithLocale(with_?: Locale): string;
  variantFittingPresentationWidth(_: number): string;
  writableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;
  writeToFileAtomicallyEncodingError(atomically: string, encoding: boolean, error: number): boolean;
  writeToURLAtomicallyEncodingError(atomically: NSURL, encoding: boolean, error: number): boolean;
  writingOptionsForTypePasteboard(forType: string, pasteboard: NSPasteboard): NSPasteboard.WritingOptions;
}

declare var NSStringEncodingDetectionAllowLossyKey: string;

declare var NSStringEncodingDetectionDisallowedEncodingsKey: string;

declare var NSStringEncodingDetectionFromWindowsKey: string;

declare var NSStringEncodingDetectionLikelyLanguageKey: string;

declare var NSStringEncodingDetectionLossySubstitutionKey: string;

declare var NSStringEncodingDetectionSuggestedEncodingsKey: string;

declare var NSStringEncodingDetectionUseOnlySuggestedEncodingsKey: string;

declare var NSStringEncodingErrorKey: string;

declare function NSStringFromClass(aClass: typeof NSObject): string;
declare function NSStringFromHashTable(table: NSHashTable<any>): string;
declare function NSStringFromMapTable(table: NSMapTable<any, any>): string;
declare function NSStringFromPoint(aPoint: NSPoint): string;
declare function NSStringFromProtocol(proto: any /* Protocol */): string;
declare function NSStringFromRange(range: NSRange): string;
declare function NSStringFromRect(aRect: NSRect): string;
declare function NSStringFromSelector(aSelector: string): string;
declare function NSStringFromSize(aSize: NSSize): string;
declare var NSStringTransformFullwidthToHalfwidth: string;

declare var NSStringTransformHiraganaToKatakana: string;

declare var NSStringTransformLatinToArabic: string;

declare var NSStringTransformLatinToCyrillic: string;

declare var NSStringTransformLatinToGreek: string;

declare var NSStringTransformLatinToHangul: string;

declare var NSStringTransformLatinToHebrew: string;

declare var NSStringTransformLatinToHiragana: string;

declare var NSStringTransformLatinToKatakana: string;

declare var NSStringTransformLatinToThai: string;

declare var NSStringTransformMandarinToLatin: string;

declare var NSStringTransformStripCombiningMarks: string;

declare var NSStringTransformStripDiacritics: string;

declare var NSStringTransformToLatin: string;

declare var NSStringTransformToUnicodeName: string;

declare var NSStringTransformToXMLHex: string;

declare var NSSumKeyValueOperator: string;


declare const NSSunOSOperatingSystem: number;
interface NSSwappedDouble {
  v: number;
}

declare var NSSwappedDouble: NSSwappedDouble;

interface NSSwappedFloat {
  v: number;
}

declare var NSSwappedFloat: NSSwappedFloat;


declare const NSSymbolStringEncoding: number;
declare var NSSystemClockDidChangeNotification: string;

declare var NSSystemTimeZoneDidChangeNotification: string;

declare class NSTask extends NSObject {
  static launchedTaskWithExecutableURLArgumentsErrorTerminationHandler(_: NSURL, _: NSArray<string>, arguments_?: Error, terminationHandler?: (p1: Process) => void): Process;
  static launchedTaskWithLaunchPathArguments(launchPath: string, arguments_: NSArray<string>): Process;
  arguments: NSArray<string>;
  setArguments(_: NSArray<string>)
  currentDirectoryPath: string;
  setCurrentDirectoryPath(_: string)
  currentDirectoryURL: NSURL;
  setCurrentDirectoryURL(_: NSURL)
  environment: NSDictionary<string, string>;
  setEnvironment(_: NSDictionary<string, string>)
  executableURL: NSURL;
  setExecutableURL(_: NSURL)
  launchPath: string;
  setLaunchPath(_: string)
  readonly processIdentifier: number;
  qualityOfService: QualityOfService;
  setQualityOfService(_: QualityOfService)
  readonly isRunning: boolean;
  standardError: any;
  setStandardError(_: any)
  standardInput: any;
  setStandardInput(_: any)
  standardOutput: any;
  setStandardOutput(_: any)
  terminationHandler: (p1: Process) => void;
  setTerminationHandler(_: (p1: Process) => void)
  readonly terminationReason: Process.TerminationReason;
  readonly terminationStatus: number;
  interrupt(): void;
  launch(): void;
  launchAndReturnError(): boolean;
  resume(): boolean;
  suspend(): boolean;
  terminate(): void;
  waitUntilExit(): void;
}

declare var NSTaskDidTerminateNotification: string;

declare function NSTemporaryDirectory(): string;
declare var NSTextCheckingAirlineKey: string;


declare const NSTextCheckingAllCustomTypes: number;

declare const NSTextCheckingAllSystemTypes: number;

declare const NSTextCheckingAllTypes: number;
declare var NSTextCheckingCityKey: string;

declare var NSTextCheckingCountryKey: string;

declare var NSTextCheckingFlightKey: string;

declare var NSTextCheckingJobTitleKey: string;

declare var NSTextCheckingNameKey: string;

declare var NSTextCheckingOrganizationKey: string;

declare var NSTextCheckingPhoneKey: string;

declare class NSTextCheckingResult extends NSObject implements NSCopying, NSSecureCoding {
  static addressCheckingResultWithRangeComponents(range: NSRange, components: NSDictionary<string, string>): NSTextCheckingResult;
  static correctionCheckingResultWithRangeReplacementString(range: NSRange, replacementString: string): NSTextCheckingResult;
  static correctionCheckingResultWithRangeReplacementStringAlternativeStrings(range: NSRange, replacementString: string, alternativeStrings: NSArray<string>): NSTextCheckingResult;
  static dashCheckingResultWithRangeReplacementString(range: NSRange, replacementString: string): NSTextCheckingResult;
  static dateCheckingResultWithRangeDate(range: NSRange, date: Date): NSTextCheckingResult;
  static dateCheckingResultWithRangeDateTimeZoneDuration(range: NSRange, date: Date, timeZone: NSTimeZone, duration: number): NSTextCheckingResult;
  static grammarCheckingResultWithRangeDetails(range: NSRange, details: NSArray<NSDictionary<string, any>>): NSTextCheckingResult;
  static linkCheckingResultWithRangeUrl(range: NSRange, url: NSURL): NSTextCheckingResult;
  static orthographyCheckingResultWithRangeOrthography(range: NSRange, orthography: NSOrthography): NSTextCheckingResult;
  static phoneNumberCheckingResultWithRangePhoneNumber(range: NSRange, phoneNumber: string): NSTextCheckingResult;
  static quoteCheckingResultWithRangeReplacementString(range: NSRange, replacementString: string): NSTextCheckingResult;
  static regularExpressionCheckingResultWithRangesCountRegularExpression(ranges: NSRange, count: number, regularExpression: NSRegularExpression): NSTextCheckingResult;
  static replacementCheckingResultWithRangeReplacementString(range: NSRange, replacementString: string): NSTextCheckingResult;
  static spellCheckingResultWithRange(range: NSRange): NSTextCheckingResult;
  static transitInformationCheckingResultWithRangeComponents(range: NSRange, components: NSDictionary<string, string>): NSTextCheckingResult;
  readonly URL: NSURL;
  readonly addressComponents: NSDictionary<string, string>;
  readonly alternativeStrings: NSArray<string>;
  readonly components: NSDictionary<string, string>;
  readonly date: Date;
  readonly duration: number;
  readonly grammarDetails: NSArray<NSDictionary<string, any>>;
  readonly numberOfRanges: number;
  readonly orthography: NSOrthography;
  readonly phoneNumber: string;
  readonly range: NSRange;
  readonly regularExpression: NSRegularExpression;
  readonly replacementString: string;
  readonly resultType: NSTextCheckingResult.CheckingType;
  readonly timeZone: NSTimeZone;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  rangeAtIndex(at: number): NSRange;
  rangeWithName(withName: string): NSRange;
  resultByAdjustingRangesWithOffset(offset: number): NSTextCheckingResult;
}

declare var NSTextCheckingStateKey: string;

declare var NSTextCheckingStreetKey: string;

declare var NSTextCheckingZIPKey: string;

declare class NSThread extends NSObject {
  static detachNewThreadSelectorToTargetWithObject(_: string, toTarget: any, withObject?: any): void;
  static detachNewThreadWithBlock(_: () => void): void;
  static exit(): void;
  static isMultiThreaded(): boolean;
  static setThreadPriority(_: number): boolean;
  static sleepForTimeInterval(_: number): void;
  static sleepUntilDate(_: Date): void;
  static threadPriority(): number;
  readonly isCancelled: boolean;
  readonly isExecuting: boolean;
  readonly isFinished: boolean;
  readonly isMainThread: boolean;
  name: string;
  setName(_: string)
  qualityOfService: QualityOfService;
  setQualityOfService(_: QualityOfService)
  stackSize: number;
  setStackSize(_: number)
  readonly threadDictionary: NSMutableDictionary<any, any>;
  threadPriority: number;
  setThreadPriority(_: number)
  static callStackReturnAddresses(): NSArray<number>;
  static callStackSymbols(): NSArray<string>;
  static currentThread(): Thread;
  static isMainThread(): boolean;
  static mainThread(): Thread;
  cancel(): void;
  static createWithBlock(block: () => void): this;
  static createWithTargetSelectorObject(target: any, selector: string, object_?: any): this;
  main(): void;
  start(): void;
}

declare var NSThreadWillExitNotification: string;

declare var NSThumbnail1024x1024SizeKey: string;

declare class NSTimeZone extends NSObject implements NSCopying, NSSecureCoding {
  static resetSystemTimeZone(): void;
  readonly abbreviation: string;
  readonly data: Data;
  readonly isDaylightSavingTime: boolean;
  readonly daylightSavingTimeOffset: number;
  readonly name: string;
  readonly nextDaylightSavingTimeTransition: Date;
  readonly secondsFromGMT: number;
  static abbreviationDictionary: NSDictionary<string, string>;
  setAbbreviationDictionary(_: NSDictionary<string, string>)
  static defaultTimeZone: NSTimeZone;
  setDefaultTimeZone(_: NSTimeZone)
  static knownTimeZoneNames(): NSArray<string>;
  static localTimeZone(): NSTimeZone;
  static systemTimeZone(): NSTimeZone;
  static timeZoneDataVersion(): string;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  abbreviationForDate(for_: Date): string;
  daylightSavingTimeOffsetForDate(for_: Date): number;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithName(name: string): this;
  static createWithNameData(name: string, data?: Data): this;
  isDaylightSavingTimeForDate(for_: Date): boolean;
  isEqualToTimeZone(to: NSTimeZone): boolean;
  localizedNameLocale(_: NSTimeZone.NameStyle, locale?: Locale): string;
  nextDaylightSavingTimeTransitionAfterDate(after: Date): Date;
  secondsFromGMTForDate(for_: Date): number;
}

declare class NSTimer extends NSObject {
  static scheduledTimerWithTimeIntervalRepeatsBlock(_: number, repeats: boolean, block: (p1: Timer) => void): Timer;
  static scheduledTimerWithTimeIntervalTargetSelectorUserInfoRepeats(timeInterval: number, target: any, selector: string, userInfo?: any, repeats: boolean): Timer;
  static timerWithTimeIntervalRepeatsBlock(_: number, repeats: boolean, block: (p1: Timer) => void): Timer;
  static timerWithTimeIntervalTargetSelectorUserInfoRepeats(_: number, target: any, selector: string, userInfo?: any, repeats: boolean): Timer;
  fireDate: Date;
  setFireDate(_: Date)
  readonly timeInterval: number;
  tolerance: number;
  setTolerance(_: number)
  readonly userInfo: any;
  readonly isValid: boolean;
  fire(): void;
  static createWithFireDateIntervalRepeatsBlock(fireDate: Date, interval: number, repeats: boolean, block: (p1: Timer) => void): this;
  static createWithFireDateIntervalTargetSelectorUserInfoRepeats(fireDate: Date, interval: number, target: any, selector: string, userInfo?: any, repeats: boolean): this;
  invalidate(): void;
}

declare class NSURL extends NSObject implements NSCopying, NSSecureCoding, NSItemProviderReading, NSItemProviderWriting, NSPasteboardReading, NSPasteboardWriting, QLPreviewItem {
  static URLByResolvingAliasFileAtURLOptionsError(resolvingAliasFileAt: NSURL, options: NSURL.BookmarkResolutionOptions): NSURL;
  static URLByResolvingBookmarkDataOptionsRelativeToURLBookmarkDataIsStaleError(options: Data, relativeToURL: NSURL.BookmarkResolutionOptions, bookmarkDataIsStale?: NSURL, error?: boolean): NSURL;
  static absoluteURLWithDataRepresentationRelativeToURL(withDataRepresentation: Data, relativeTo?: NSURL): NSURL;
  static bookmarkDataWithContentsOfURLError(error: NSURL): Data;
  static fileURLWithFileSystemRepresentationIsDirectoryRelativeToURL(withFileSystemRepresentation: string, isDirectory: boolean, relativeTo?: NSURL): NSURL;
  static fileURLWithPath(withPath: string): NSURL;
  static fileURLWithPathIsDirectory(withPath: string, isDirectory: boolean): NSURL;
  static fileURLWithPathIsDirectoryRelativeToURL(withPath: string, isDirectory: boolean, relativeTo?: NSURL): NSURL;
  static fileURLWithPathRelativeToURL(withPath: string, relativeTo?: NSURL): NSURL;
  static fileURLWithPathComponents(withPathComponents: NSArray<string>): NSURL;
  static itemProviderVisibilityForRepresentationWithTypeIdentifier(withTypeIdentifier: string): NSItemProviderRepresentationVisibility;
  static objectWithItemProviderDataTypeIdentifierError(typeIdentifier: Data, error: string): NSURL;
  static readableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;
  static readingOptionsForTypePasteboard(forType: string, pasteboard: NSPasteboard): NSPasteboard.ReadingOptions;
  static resourceValuesForKeysFromBookmarkData(forKeys: NSArray<string>, fromBookmarkData: Data): NSDictionary<string, any>;
  static writeBookmarkDataToURLOptionsError(toURL: Data, options: NSURL, error: number): boolean;
  readonly URLByDeletingLastPathComponent: NSURL;
  readonly URLByDeletingPathExtension: NSURL;
  readonly URLByResolvingSymlinksInPath: NSURL;
  readonly URLByStandardizingPath: NSURL;
  readonly absoluteString: string;
  readonly absoluteURL: NSURL;
  readonly baseURL: NSURL;
  readonly dataRepresentation: Data;
  readonly filePathURL: NSURL;
  readonly fileSystemRepresentation: string;
  readonly isFileURL: boolean;
  readonly fragment: string;
  readonly hasDirectoryPath: boolean;
  readonly host: string;
  readonly lastPathComponent: string;
  readonly password: string;
  readonly path: string;
  readonly pathComponents: NSArray<string>;
  readonly pathExtension: string;
  readonly port: number;
  readonly query: string;
  readonly relativePath: string;
  readonly relativeString: string;
  readonly resourceSpecifier: string;
  readonly scheme: string;
  readonly standardizedURL: NSURL;
  readonly user: string;
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly previewItemDisplayState: any; // inherited from QLPreviewItem
  readonly previewItemTitle: string; // inherited from QLPreviewItem
  readonly previewItemURL: NSURL; // inherited from QLPreviewItem
  readonly superclass: typeof NSObject; // inherited from NSObject
  readonly writableTypeIdentifiersForItemProvider: NSArray<string>; // inherited from NSItemProviderWriting
  static readableTypeIdentifiersForItemProvider(): NSArray<string>; // inherited from NSItemProviderReading
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  static writableTypeIdentifiersForItemProvider(): NSArray<string>; // inherited from NSItemProviderWriting
  URLByAppendingPathComponent(_: string): NSURL;
  URLByAppendingPathComponentIsDirectory(_: string, isDirectory: boolean): NSURL;
  URLByAppendingPathExtension(_: string): NSURL;
  bookmarkDataWithOptionsIncludingResourceValuesForKeysRelativeToURLError(includingResourceValuesForKeys: NSURL.BookmarkCreationOptions, relativeToURL?: NSArray<string>, error?: NSURL): Data;
  checkPromisedItemIsReachableAndReturnError(): boolean;
  checkResourceIsReachableAndReturnError(): boolean;
  conformsToProtocol(to: any /* Protocol */): boolean;
  encodeWithCoder(with_: NSCoder): void;
  fileReferenceURL(): NSURL;
  getFileSystemRepresentationMaxLength(_: string, maxLength: number): boolean;
  getPromisedItemResourceValueForKeyError(forKey?: any, error: string): boolean;
  getResourceValueForKeyError(forKey?: any, error: string): boolean;
  static createWithAbsoluteURLWithDataRepresentationRelativeToURL(absoluteURLWithDataRepresentation: Data, relativeToURL?: NSURL): this;
  static createWithByResolvingBookmarkDataOptionsRelativeToURLBookmarkDataIsStale(byResolvingBookmarkData: Data, options: NSURL.BookmarkResolutionOptions, relativeToURL?: NSURL, bookmarkDataIsStale?: boolean): this;
  static createWithFileURLWithFileSystemRepresentationIsDirectoryRelativeToURL(fileURLWithFileSystemRepresentation: string, isDirectory: boolean, relativeToURL?: NSURL): this;
  static createWithFileURLWithPath(fileURLWithPath: string): this;
  static createWithFileURLWithPathIsDirectory(fileURLWithPath: string, isDirectory: boolean): this;
  static createWithFileURLWithPathIsDirectoryRelativeToURL(fileURLWithPath: string, isDirectory: boolean, relativeToURL?: NSURL): this;
  static createWithFileURLWithPathRelativeToURL(fileURLWithPath: string, relativeToURL?: NSURL): this;
  static createWithCoder(coder: NSCoder): this;
  static createWithDataRepresentationRelativeToURL(dataRepresentation: Data, relativeToURL?: NSURL): this;
  static createWithPasteboardPropertyListOfType(pasteboardPropertyList: any, ofType: string): this;
  static createWithString(string: string): this;
  static createWithStringRelativeToURL(string: string, relativeToURL?: NSURL): this;
  isEqual(_: any): boolean;
  isFileReferenceURL(): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  itemProviderVisibilityForRepresentationWithTypeIdentifier(withTypeIdentifier: string): NSItemProviderRepresentationVisibility;
  loadDataWithTypeIdentifierForItemProviderCompletionHandler(withTypeIdentifier: string, forItemProviderCompletionHandler?: (p1: Data, p2: Error) => void): Progress;
  pasteboardPropertyListForType(forType: string): any;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  promisedItemResourceValuesForKeysError(error: NSArray<string>): NSDictionary<string, any>;
  removeAllCachedResourceValues(): void;
  removeCachedResourceValueForKey(forKey: string): void;
  resourceValuesForKeysError(error: NSArray<string>): NSDictionary<string, any>;
  respondsToSelector(_: string): boolean;
  self(): this;
  setResourceValueForKeyError(forKey?: any, error: string): boolean;
  setResourceValuesError(error: NSDictionary<string, any>): boolean;
  setTemporaryResourceValueForKey(_?: any, forKey: string): void;
  startAccessingSecurityScopedResource(): boolean;
  stopAccessingSecurityScopedResource(): void;
  writableTypesForPasteboard(for_: NSPasteboard): NSArray<string>;
  writeToPasteboard(to: NSPasteboard): void;
  writingOptionsForTypePasteboard(forType: string, pasteboard: NSPasteboard): NSPasteboard.WritingOptions;
}

declare var NSURLAddedToDirectoryDateKey: string;

declare var NSURLApplicationIsScriptableKey: string;

declare var NSURLAttributeModificationDateKey: string;

declare class NSURLAuthenticationChallenge extends NSObject implements NSSecureCoding {
  readonly error: Error;
  readonly failureResponse: URLResponse;
  readonly previousFailureCount: number;
  readonly proposedCredential: URLCredential;
  readonly protectionSpace: URLProtectionSpace;
  readonly sender: NSURLAuthenticationChallengeSender;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithAuthenticationChallengeSender(authenticationChallenge: URLAuthenticationChallenge, sender: NSURLAuthenticationChallengeSender): this;
  static createWithCoder(coder: NSCoder): this;
  static createWithProtectionSpaceProposedCredentialPreviousFailureCountFailureResponseErrorSender(protectionSpace: URLProtectionSpace, proposedCredential?: URLCredential, previousFailureCount: number, failureResponse?: URLResponse, error?: Error, sender: NSURLAuthenticationChallengeSender): this;
}

interface NSURLAuthenticationChallengeSender extends NSObject {
  cancelAuthenticationChallenge(_: URLAuthenticationChallenge): void;
  continueWithoutCredentialForAuthenticationChallenge(_: URLAuthenticationChallenge): void;
  performDefaultHandlingForAuthenticationChallenge?(_: URLAuthenticationChallenge): void;
  rejectProtectionSpaceAndContinueWithChallenge?(_: URLAuthenticationChallenge): void;
  useCredentialForAuthenticationChallenge(_: URLCredential, forAuthenticationChallenge: URLAuthenticationChallenge): void;
}

declare var NSURLAuthenticationChallengeSender: {
  prototype: NSURLAuthenticationChallengeSender;
};

declare var NSURLAuthenticationMethodClientCertificate: string;

declare var NSURLAuthenticationMethodDefault: string;

declare var NSURLAuthenticationMethodHTMLForm: string;

declare var NSURLAuthenticationMethodHTTPBasic: string;

declare var NSURLAuthenticationMethodHTTPDigest: string;

declare var NSURLAuthenticationMethodNTLM: string;

declare var NSURLAuthenticationMethodNegotiate: string;

declare var NSURLAuthenticationMethodServerTrust: string;

declare class NSURLCache extends NSObject {
  readonly currentDiskUsage: number;
  readonly currentMemoryUsage: number;
  diskCapacity: number;
  setDiskCapacity(_: number)
  memoryCapacity: number;
  setMemoryCapacity(_: number)
  static sharedURLCache: URLCache;
  setSharedURLCache(_: URLCache)
  cachedResponseForRequest(_: NSURLRequest): CachedURLResponse;
  getCachedResponseForDataTaskCompletionHandler(_: URLSessionDataTask, completionHandler?: (p1: CachedURLResponse) => void): void;
  static createWithMemoryCapacityDiskCapacityDirectoryURL(memoryCapacity: number, diskCapacity: number, directoryURL?: NSURL): this;
  static createWithMemoryCapacityDiskCapacityDiskPath(memoryCapacity: number, diskCapacity: number, diskPath?: string): this;
  removeAllCachedResponses(): void;
  removeCachedResponseForDataTask(_: URLSessionDataTask): void;
  removeCachedResponseForRequest(_: NSURLRequest): void;
  removeCachedResponsesSinceDate(_: Date): void;
  storeCachedResponseForDataTask(_: CachedURLResponse, forDataTask: URLSessionDataTask): void;
  storeCachedResponseForRequest(_: CachedURLResponse, forRequest: NSURLRequest): void;
}

declare var NSURLCanonicalPathKey: string;

declare class NSURLComponents extends NSObject implements NSCopying {
  static componentsWithString(string: string): NSURLComponents;
  static componentsWithURLResolvingAgainstBaseURL(url: NSURL, resolvingAgainstBaseURL: boolean): NSURLComponents;
  readonly URL: NSURL;
  fragment: string;
  setFragment(_: string)
  host: string;
  setHost(_: string)
  password: string;
  setPassword(_: string)
  path: string;
  setPath(_: string)
  percentEncodedFragment: string;
  setPercentEncodedFragment(_: string)
  percentEncodedHost: string;
  setPercentEncodedHost(_: string)
  percentEncodedPassword: string;
  setPercentEncodedPassword(_: string)
  percentEncodedPath: string;
  setPercentEncodedPath(_: string)
  percentEncodedQuery: string;
  setPercentEncodedQuery(_: string)
  percentEncodedQueryItems: NSArray<NSURLQueryItem>;
  setPercentEncodedQueryItems(_: NSArray<NSURLQueryItem>)
  percentEncodedUser: string;
  setPercentEncodedUser(_: string)
  port: number;
  setPort(_: number)
  query: string;
  setQuery(_: string)
  queryItems: NSArray<NSURLQueryItem>;
  setQueryItems(_: NSArray<NSURLQueryItem>)
  readonly rangeOfFragment: NSRange;
  readonly rangeOfHost: NSRange;
  readonly rangeOfPassword: NSRange;
  readonly rangeOfPath: NSRange;
  readonly rangeOfPort: NSRange;
  readonly rangeOfQuery: NSRange;
  readonly rangeOfScheme: NSRange;
  readonly rangeOfUser: NSRange;
  scheme: string;
  setScheme(_: string)
  readonly string: string;
  user: string;
  setUser(_: string)
  URLRelativeToURL(relativeTo?: NSURL): NSURL;
  static createWithString(string: string): this;
  static createWithUrlResolvingAgainstBaseURL(URL: NSURL, resolvingAgainstBaseURL: boolean): this;
}

declare class NSURLConnection extends NSObject {
  static canHandleRequest(_: NSURLRequest): boolean;
  readonly currentRequest: NSURLRequest;
  readonly originalRequest: NSURLRequest;
  cancel(): void;
  scheduleInRunLoopForMode(in_: RunLoop, forMode: string): void;
  setDelegateQueue(_?: OperationQueue): void;
  start(): void;
  unscheduleFromRunLoopForMode(from: RunLoop, forMode: string): void;
}

interface NSURLConnectionDataDelegate extends NSURLConnectionDelegate {
  connectionWillSendRequestRedirectResponse?(_: NSURLConnection, willSend: NSURLRequest, redirectResponse?: URLResponse): NSURLRequest;
  connectionDidReceiveResponse?(_: NSURLConnection, didReceive: URLResponse): void;
  connectionDidReceiveData?(_: NSURLConnection, didReceive: Data): void;
  connectionDidSendBodyDataTotalBytesWrittenTotalBytesExpectedToWrite?(_: NSURLConnection, didSendBodyData: number, totalBytesWritten: number, totalBytesExpectedToWrite: number): void;
  connectionNeedNewBodyStream?(_: NSURLConnection, needNewBodyStream: NSURLRequest): InputStream;
  connectionWillCacheResponse?(_: NSURLConnection, willCacheResponse: CachedURLResponse): CachedURLResponse;
  connectionDidFinishLoading?(_: NSURLConnection): void;
}

declare var NSURLConnectionDataDelegate: {
  prototype: NSURLConnectionDataDelegate;
};

interface NSURLConnectionDelegate extends NSObject {
  connectionWillSendRequestForAuthenticationChallenge?(_: NSURLConnection, willSendRequestFor: URLAuthenticationChallenge): void;
  connectionDidFailWithError?(_: NSURLConnection, didFailWithError: Error): void;
  connectionShouldUseCredentialStorage?(_: NSURLConnection): boolean;
}

declare var NSURLConnectionDelegate: {
  prototype: NSURLConnectionDelegate;
};

interface NSURLConnectionDownloadDelegate extends NSURLConnectionDelegate {
  connectionDidWriteDataTotalBytesWrittenExpectedTotalBytes?(_: NSURLConnection, didWriteData: number, totalBytesWritten: number, expectedTotalBytes: number): void;
  connectionDidFinishDownloadingDestinationURL(_: NSURLConnection, destinationURL: NSURL): void;
  connectionDidResumeDownloadingTotalBytesWrittenExpectedTotalBytes?(_: NSURLConnection, totalBytesWritten: number, expectedTotalBytes: number): void;
}

declare var NSURLConnectionDownloadDelegate: {
  prototype: NSURLConnectionDownloadDelegate;
};

declare var NSURLContentAccessDateKey: string;

declare var NSURLContentModificationDateKey: string;

declare var NSURLCreationDateKey: string;

declare class NSURLCredential extends NSObject implements NSCopying, NSSecureCoding {
  static credentialForTrust(trust: any): URLCredential;
  static credentialWithIdentityCertificatesPersistence(_: any, certificates?: NSArray<any>, persistence: URLCredential.Persistence): URLCredential;
  static credentialWithUserPasswordPersistence(_: string, password: string, persistence: URLCredential.Persistence): URLCredential;
  readonly certificates: NSArray<any>;
  readonly hasPassword: boolean;
  readonly identity: any;
  readonly password: string;
  readonly persistence: URLCredential.Persistence;
  readonly user: string;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithIdentityCertificatesPersistence(identity: any, certificates?: NSArray<any>, persistence: URLCredential.Persistence): this;
  static createWithTrust(trust: any): this;
  static createWithUserPasswordPersistence(user: string, password: string, persistence: URLCredential.Persistence): this;
}

declare class NSURLCredentialStorage extends NSObject {
  readonly allCredentials: NSDictionary<URLProtectionSpace, NSDictionary<string, URLCredential>>;
  static sharedCredentialStorage(): URLCredentialStorage;
  credentialsForProtectionSpace(_: URLProtectionSpace): NSDictionary<string, URLCredential>;
  defaultCredentialForProtectionSpace(_: URLProtectionSpace): URLCredential;
  getCredentialsForProtectionSpaceTaskCompletionHandler(for_: URLProtectionSpace, task: URLSessionTask, completionHandler?: (p1: NSDictionary<string, URLCredential>) => void): void;
  getDefaultCredentialForProtectionSpaceTaskCompletionHandler(_: URLProtectionSpace, task: URLSessionTask, completionHandler?: (p1: URLCredential) => void): void;
  removeCredentialForProtectionSpace(_: URLCredential, forProtectionSpace: URLProtectionSpace): void;
  removeCredentialForProtectionSpaceOptions(_: URLCredential, forProtectionSpace: URLProtectionSpace, options?: NSDictionary<string, any>): void;
  removeCredentialForProtectionSpaceOptionsTask(_: URLCredential, forProtectionSpace: URLProtectionSpace, options?: NSDictionary<string, any>, task: URLSessionTask): void;
  setCredentialForProtectionSpace(_: URLCredential, for_: URLProtectionSpace): void;
  setCredentialForProtectionSpaceTask(_: URLCredential, for_: URLProtectionSpace, task: URLSessionTask): void;
  setDefaultCredentialForProtectionSpace(_: URLCredential, forProtectionSpace: URLProtectionSpace): void;
  setDefaultCredentialForProtectionSpaceTask(_: URLCredential, forProtectionSpace: URLProtectionSpace, task: URLSessionTask): void;
}

declare var NSURLCredentialStorageChangedNotification: string;

declare var NSURLCredentialStorageRemoveSynchronizableCredentials: string;

declare var NSURLCustomIconKey: string;

declare var NSURLDocumentIdentifierKey: string;

declare class NSURLDownload extends NSObject {
  static canResumeDownloadDecodedWithEncodingMIMEType(withEncodingMIMEType: string): boolean;
  deletesFileUponFailure: boolean;
  setDeletesFileUponFailure(_: boolean)
  readonly request: NSURLRequest;
  readonly resumeData: Data;
  cancel(): void;
  setDestinationAllowOverwrite(_: string, allowOverwrite: boolean): void;
}

interface NSURLDownloadDelegate extends NSObject {
  downloadWillSendRequestRedirectResponse?(_: NSURLDownload, willSend: NSURLRequest, redirectResponse?: URLResponse): NSURLRequest;
  downloadDidReceiveAuthenticationChallenge?(_: NSURLDownload, didReceive: URLAuthenticationChallenge): void;
  downloadDidCancelAuthenticationChallenge?(_: NSURLDownload, didCancel: URLAuthenticationChallenge): void;
  downloadDidReceiveResponse?(_: NSURLDownload, didReceive: URLResponse): void;
  downloadWillResumeWithResponseFromByte?(_: NSURLDownload, willResumeWith: URLResponse, fromByte: number): void;
  downloadCanAuthenticateAgainstProtectionSpace?(_: NSURLDownload, canAuthenticateAgainstProtectionSpace: URLProtectionSpace): boolean;
  downloadDecideDestinationWithSuggestedFilename?(_: NSURLDownload, decideDestinationWithSuggestedFilename: string): void;
  downloadDidCreateDestination?(_: NSURLDownload, didCreateDestination: string): void;
  downloadDidFailWithError?(_: NSURLDownload, didFailWithError: Error): void;
  downloadDidReceiveDataOfLength?(_: NSURLDownload, didReceiveDataOfLength: number): void;
  downloadShouldDecodeSourceDataOfMIMEType?(_: NSURLDownload, shouldDecodeSourceDataOfMIMEType: string): boolean;
  downloadDidBegin?(_: NSURLDownload): void;
  downloadDidFinish?(_: NSURLDownload): void;
  downloadShouldUseCredentialStorage?(_: NSURLDownload): boolean;
}

declare var NSURLDownloadDelegate: {
  prototype: NSURLDownloadDelegate;
};

declare var NSURLEffectiveIconKey: string;


declare const NSURLErrorAppTransportSecurityRequiresSecureConnection: number;

declare const NSURLErrorBackgroundSessionInUseByAnotherProcess: number;

declare const NSURLErrorBackgroundSessionRequiresSharedContainer: number;

declare const NSURLErrorBackgroundSessionWasDisconnected: number;
declare var NSURLErrorBackgroundTaskCancelledReasonKey: string;


declare const NSURLErrorBadServerResponse: number;

declare const NSURLErrorBadURL: number;

declare const NSURLErrorCallIsActive: number;

declare const NSURLErrorCancelled: number;

declare const NSURLErrorCancelledReasonBackgroundUpdatesDisabled: number;

declare const NSURLErrorCancelledReasonInsufficientSystemResources: number;

declare const NSURLErrorCancelledReasonUserForceQuitApplication: number;

declare const NSURLErrorCannotCloseFile: number;

declare const NSURLErrorCannotConnectToHost: number;

declare const NSURLErrorCannotCreateFile: number;

declare const NSURLErrorCannotDecodeContentData: number;

declare const NSURLErrorCannotDecodeRawData: number;

declare const NSURLErrorCannotFindHost: number;

declare const NSURLErrorCannotLoadFromNetwork: number;

declare const NSURLErrorCannotMoveFile: number;

declare const NSURLErrorCannotOpenFile: number;

declare const NSURLErrorCannotParseResponse: number;

declare const NSURLErrorCannotRemoveFile: number;

declare const NSURLErrorCannotWriteToFile: number;

declare const NSURLErrorClientCertificateRejected: number;

declare const NSURLErrorClientCertificateRequired: number;

declare const NSURLErrorDNSLookupFailed: number;

declare const NSURLErrorDataLengthExceedsMaximum: number;

declare const NSURLErrorDataNotAllowed: number;
declare var NSURLErrorDomain: string;


declare const NSURLErrorDownloadDecodingFailedMidStream: number;

declare const NSURLErrorDownloadDecodingFailedToComplete: number;
declare var NSURLErrorFailingURLErrorKey: string;

declare var NSURLErrorFailingURLPeerTrustErrorKey: string;

declare var NSURLErrorFailingURLStringErrorKey: string;


declare const NSURLErrorFileDoesNotExist: number;

declare const NSURLErrorFileIsDirectory: number;

declare const NSURLErrorFileOutsideSafeArea: number;

declare const NSURLErrorHTTPTooManyRedirects: number;

declare const NSURLErrorInternationalRoamingOff: number;
declare var NSURLErrorKey: string;


declare const NSURLErrorNetworkConnectionLost: number;
declare var NSURLErrorNetworkUnavailableReasonKey: string;


declare const NSURLErrorNoPermissionsToReadFile: number;

declare const NSURLErrorNotConnectedToInternet: number;

declare const NSURLErrorRedirectToNonExistentLocation: number;

declare const NSURLErrorRequestBodyStreamExhausted: number;

declare const NSURLErrorResourceUnavailable: number;

declare const NSURLErrorSecureConnectionFailed: number;

declare const NSURLErrorServerCertificateHasBadDate: number;

declare const NSURLErrorServerCertificateHasUnknownRoot: number;

declare const NSURLErrorServerCertificateNotYetValid: number;

declare const NSURLErrorServerCertificateUntrusted: number;

declare const NSURLErrorTimedOut: number;

declare const NSURLErrorUnknown: number;

declare const NSURLErrorUnsupportedURL: number;

declare const NSURLErrorUserAuthenticationRequired: number;

declare const NSURLErrorUserCancelledAuthentication: number;

declare const NSURLErrorZeroByteResource: number;
declare var NSURLFileAllocatedSizeKey: string;

declare var NSURLFileProtectionComplete: string;

declare var NSURLFileProtectionCompleteUnlessOpen: string;

declare var NSURLFileProtectionCompleteUntilFirstUserAuthentication: string;

declare var NSURLFileProtectionKey: string;

declare var NSURLFileProtectionNone: string;

declare var NSURLFileResourceIdentifierKey: string;

declare var NSURLFileResourceTypeBlockSpecial: string;

declare var NSURLFileResourceTypeCharacterSpecial: string;

declare var NSURLFileResourceTypeDirectory: string;

declare var NSURLFileResourceTypeKey: string;

declare var NSURLFileResourceTypeNamedPipe: string;

declare var NSURLFileResourceTypeRegular: string;

declare var NSURLFileResourceTypeSocket: string;

declare var NSURLFileResourceTypeSymbolicLink: string;

declare var NSURLFileResourceTypeUnknown: string;

declare var NSURLFileScheme: string;

declare var NSURLFileSecurityKey: string;

declare var NSURLFileSizeKey: string;

declare var NSURLGenerationIdentifierKey: string;

declare class NSURLHandle extends NSObject {
}

declare var NSURLHasHiddenExtensionKey: string;

declare var NSURLIsAliasFileKey: string;

declare var NSURLIsApplicationKey: string;

declare var NSURLIsDirectoryKey: string;

declare var NSURLIsExcludedFromBackupKey: string;

declare var NSURLIsExecutableKey: string;

declare var NSURLIsHiddenKey: string;

declare var NSURLIsMountTriggerKey: string;

declare var NSURLIsPackageKey: string;

declare var NSURLIsReadableKey: string;

declare var NSURLIsRegularFileKey: string;

declare var NSURLIsSymbolicLinkKey: string;

declare var NSURLIsSystemImmutableKey: string;

declare var NSURLIsUbiquitousItemKey: string;

declare var NSURLIsUserImmutableKey: string;

declare var NSURLIsVolumeKey: string;

declare var NSURLIsWritableKey: string;

declare var NSURLKeysOfUnsetValuesKey: string;

declare var NSURLLabelColorKey: string;

declare var NSURLLabelNumberKey: string;

declare var NSURLLinkCountKey: string;

declare var NSURLLocalizedLabelKey: string;

declare var NSURLLocalizedNameKey: string;

declare var NSURLLocalizedTypeDescriptionKey: string;

declare var NSURLNameKey: string;

declare var NSURLParentDirectoryURLKey: string;

declare var NSURLPathKey: string;

declare var NSURLPreferredIOBlockSizeKey: string;

declare class NSURLProtectionSpace extends NSObject implements NSCopying, NSSecureCoding {
  readonly authenticationMethod: string;
  readonly distinguishedNames: NSArray<Data>;
  readonly host: string;
  readonly isProxy: boolean;
  readonly port: number;
  readonly protocol: string;
  readonly proxyType: string;
  readonly realm: string;
  readonly receivesCredentialSecurely: boolean;
  readonly serverTrust: any;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithHostPortProtocolRealmAuthenticationMethod(host: string, port: number, protocol?: string, realm?: string, authenticationMethod?: string): this;
  static createWithProxyHostPortTypeRealmAuthenticationMethod(proxyHost: string, port: number, type?: string, realm?: string, authenticationMethod?: string): this;
}

declare var NSURLProtectionSpaceFTP: string;

declare var NSURLProtectionSpaceFTPProxy: string;

declare var NSURLProtectionSpaceHTTP: string;

declare var NSURLProtectionSpaceHTTPProxy: string;

declare var NSURLProtectionSpaceHTTPS: string;

declare var NSURLProtectionSpaceHTTPSProxy: string;

declare var NSURLProtectionSpaceSOCKSProxy: string;

declare class NSURLProtocol extends NSObject {
  static canInitWithRequest(_: NSURLRequest): boolean;
  static canInitWithTask(_: URLSessionTask): boolean;
  static canonicalRequestForRequest(_: NSURLRequest): NSURLRequest;
  static propertyForKeyInRequest(_: string, inRequest: NSURLRequest): any;
  static registerClass(_: typeof NSObject): boolean;
  static removePropertyForKeyInRequest(_: string, inRequest: NSMutableURLRequest): void;
  static requestIsCacheEquivalentToRequest(_: NSURLRequest, toRequest: NSURLRequest): boolean;
  static setPropertyForKeyInRequest(_: any, forKey: string, inRequest: NSMutableURLRequest): void;
  static unregisterClass(_: typeof NSObject): void;
  readonly cachedResponse: CachedURLResponse;
  readonly client: NSURLProtocolClient;
  readonly request: NSURLRequest;
  readonly task: URLSessionTask;
  static createWithRequestCachedResponseClient(request: NSURLRequest, cachedResponse?: CachedURLResponse, client?: NSURLProtocolClient): this;
  static createWithTaskCachedResponseClient(task: URLSessionTask, cachedResponse?: CachedURLResponse, client?: NSURLProtocolClient): this;
  startLoading(): void;
  stopLoading(): void;
}

interface NSURLProtocolClient extends NSObject {
  URLProtocolCachedResponseIsValid(_: URLProtocol, cachedResponseIsValid: CachedURLResponse): void;
  URLProtocolDidCancelAuthenticationChallenge(_: URLProtocol, didCancelAuthenticationChallenge: URLAuthenticationChallenge): void;
  URLProtocolDidFailWithError(_: URLProtocol, didFailWithError: Error): void;
  URLProtocolDidLoadData(_: URLProtocol, didLoadData: Data): void;
  URLProtocolDidReceiveAuthenticationChallenge(_: URLProtocol, didReceiveAuthenticationChallenge: URLAuthenticationChallenge): void;
  URLProtocolDidReceiveResponseCacheStoragePolicy(_: URLProtocol, didReceiveResponse: URLResponse, cacheStoragePolicy: URLCache.StoragePolicy): void;
  URLProtocolWasRedirectedToRequestRedirectResponse(_: URLProtocol, wasRedirectedToRequest: NSURLRequest, redirectResponse: URLResponse): void;
  URLProtocolDidFinishLoading(_: URLProtocol): void;
}

declare var NSURLProtocolClient: {
  prototype: NSURLProtocolClient;
};

declare var NSURLQuarantinePropertiesKey: string;

declare class NSURLQueryItem extends NSObject implements NSCopying, NSSecureCoding {
  static queryItemWithNameValue(name: string, value?: string): NSURLQueryItem;
  readonly name: string;
  readonly value: string;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithNameValue(name: string, value?: string): this;
}

declare class NSURLRequest extends NSObject implements NSCopying, NSMutableCopying, NSSecureCoding {
  readonly HTTPBody: Data;
  readonly HTTPBodyStream: InputStream;
  readonly HTTPMethod: string;
  readonly HTTPShouldHandleCookies: boolean;
  readonly HTTPShouldUsePipelining: boolean;
  readonly URL: NSURL;
  readonly allHTTPHeaderFields: NSDictionary<string, string>;
  readonly allowsCellularAccess: boolean;
  readonly allowsConstrainedNetworkAccess: boolean;
  readonly allowsExpensiveNetworkAccess: boolean;
  readonly cachePolicy: NSURLRequest.CachePolicy;
  readonly mainDocumentURL: NSURL;
  readonly networkServiceType: NSURLRequest.NetworkServiceType;
  readonly timeoutInterval: number;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithUrl(URL: NSURL): this;
  static createWithUrlCachePolicyTimeoutInterval(URL: NSURL, cachePolicy: NSURLRequest.CachePolicy, timeoutInterval: number): this;
  valueForHTTPHeaderField(forHTTPHeaderField: string): string;
}

declare class NSURLResponse extends NSObject implements NSCopying, NSSecureCoding {
  readonly MIMEType: string;
  readonly URL: NSURL;
  readonly expectedContentLength: number;
  readonly suggestedFilename: string;
  readonly textEncodingName: string;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithUrlMIMETypeExpectedContentLengthTextEncodingName(URL: NSURL, MIMEType?: string, expectedContentLength: number, textEncodingName?: string): this;
}

declare class NSURLSession extends NSObject {
  static sessionWithConfiguration(_: URLSessionConfiguration): URLSession;
  static sessionWithConfigurationDelegateDelegateQueue(_: URLSessionConfiguration, delegate?: NSURLSessionDelegate, delegateQueue?: OperationQueue): URLSession;
  readonly configuration: URLSessionConfiguration;
  readonly delegate: NSURLSessionDelegate;
  readonly delegateQueue: OperationQueue;
  sessionDescription: string;
  setSessionDescription(_: string)
  static sharedSession(): URLSession;
  dataTaskWithRequest(_: NSURLRequest): URLSessionDataTask;
  dataTaskWithRequestCompletionHandler(_: NSURLRequest, completionHandler?: (p1: Data, p2: URLResponse, p3: Error) => void): URLSessionDataTask;
  dataTaskWithURL(_: NSURL): URLSessionDataTask;
  dataTaskWithURLCompletionHandler(_: NSURL, completionHandler?: (p1: Data, p2: URLResponse, p3: Error) => void): URLSessionDataTask;
  downloadTaskWithRequest(_: NSURLRequest): URLSessionDownloadTask;
  downloadTaskWithRequestCompletionHandler(_: NSURLRequest, completionHandler?: (p1: NSURL, p2: URLResponse, p3: Error) => void): URLSessionDownloadTask;
  downloadTaskWithResumeData(_: Data): URLSessionDownloadTask;
  downloadTaskWithResumeDataCompletionHandler(_: Data, completionHandler?: (p1: NSURL, p2: URLResponse, p3: Error) => void): URLSessionDownloadTask;
  downloadTaskWithURL(_: NSURL): URLSessionDownloadTask;
  downloadTaskWithURLCompletionHandler(_: NSURL, completionHandler?: (p1: NSURL, p2: URLResponse, p3: Error) => void): URLSessionDownloadTask;
  finishTasksAndInvalidate(): void;
  flushWithCompletionHandler(_: () => void): void;
  getAllTasksWithCompletionHandler(_: (p1: NSArray<URLSessionTask>) => void): void;
  getTasksWithCompletionHandler(_: (p1: NSArray<URLSessionDataTask>, p2: NSArray<URLSessionUploadTask>, p3: NSArray<URLSessionDownloadTask>) => void): void;
  invalidateAndCancel(): void;
  resetWithCompletionHandler(_: () => void): void;
  streamTaskWithHostNamePort(_: string, port: number): URLSessionStreamTask;
  streamTaskWithNetService(_: NetService): URLSessionStreamTask;
  uploadTaskWithRequestFromData(_: NSURLRequest, fromData: Data): URLSessionUploadTask;
  uploadTaskWithRequestFromDataCompletionHandler(_: NSURLRequest, fromData?: Data, completionHandler?: (p1: Data, p2: URLResponse, p3: Error) => void): URLSessionUploadTask;
  uploadTaskWithRequestFromFile(_: NSURLRequest, fromFile: NSURL): URLSessionUploadTask;
  uploadTaskWithRequestFromFileCompletionHandler(_: NSURLRequest, fromFile: NSURL, completionHandler?: (p1: Data, p2: URLResponse, p3: Error) => void): URLSessionUploadTask;
  uploadTaskWithStreamedRequest(_: NSURLRequest): URLSessionUploadTask;
  webSocketTaskWithRequest(_: NSURLRequest): URLSessionWebSocketTask;
  webSocketTaskWithURL(_: NSURL): URLSessionWebSocketTask;
  webSocketTaskWithURLProtocols(_: NSURL, protocols: NSArray<string>): URLSessionWebSocketTask;
}

declare class NSURLSessionConfiguration extends NSObject implements NSCopying {
  static backgroundSessionConfigurationWithIdentifier(withIdentifier: string): URLSessionConfiguration;
  HTTPAdditionalHeaders: NSDictionary<any, any>;
  setHTTPAdditionalHeaders(_: NSDictionary<any, any>)
  HTTPCookieAcceptPolicy: HTTPCookie.AcceptPolicy;
  setHTTPCookieAcceptPolicy(_: HTTPCookie.AcceptPolicy)
  HTTPCookieStorage: HTTPCookieStorage;
  setHTTPCookieStorage(_: HTTPCookieStorage)
  HTTPMaximumConnectionsPerHost: number;
  setHTTPMaximumConnectionsPerHost(_: number)
  HTTPShouldSetCookies: boolean;
  setHTTPShouldSetCookies(_: boolean)
  HTTPShouldUsePipelining: boolean;
  setHTTPShouldUsePipelining(_: boolean)
  TLSMaximumSupportedProtocol: SSLProtocol;
  setTLSMaximumSupportedProtocol(_: SSLProtocol)
  TLSMaximumSupportedProtocolVersion: tls_protocol_version_t;
  setTLSMaximumSupportedProtocolVersion(_: tls_protocol_version_t)
  TLSMinimumSupportedProtocol: SSLProtocol;
  setTLSMinimumSupportedProtocol(_: SSLProtocol)
  TLSMinimumSupportedProtocolVersion: tls_protocol_version_t;
  setTLSMinimumSupportedProtocolVersion(_: tls_protocol_version_t)
  URLCache: URLCache;
  setURLCache(_: URLCache)
  URLCredentialStorage: URLCredentialStorage;
  setURLCredentialStorage(_: URLCredentialStorage)
  allowsCellularAccess: boolean;
  setAllowsCellularAccess(_: boolean)
  allowsConstrainedNetworkAccess: boolean;
  setAllowsConstrainedNetworkAccess(_: boolean)
  allowsExpensiveNetworkAccess: boolean;
  setAllowsExpensiveNetworkAccess(_: boolean)
  connectionProxyDictionary: NSDictionary<any, any>;
  setConnectionProxyDictionary(_: NSDictionary<any, any>)
  isDiscretionary: boolean;
  setDiscretionary(_: boolean)
  readonly identifier: string;
  networkServiceType: NSURLRequest.NetworkServiceType;
  setNetworkServiceType(_: NSURLRequest.NetworkServiceType)
  protocolClasses: NSArray<typeof NSObject>;
  setProtocolClasses(_: NSArray<typeof NSObject>)
  requestCachePolicy: NSURLRequest.CachePolicy;
  setRequestCachePolicy(_: NSURLRequest.CachePolicy)
  sharedContainerIdentifier: string;
  setSharedContainerIdentifier(_: string)
  shouldUseExtendedBackgroundIdleMode: boolean;
  setShouldUseExtendedBackgroundIdleMode(_: boolean)
  timeoutIntervalForRequest: number;
  setTimeoutIntervalForRequest(_: number)
  timeoutIntervalForResource: number;
  setTimeoutIntervalForResource(_: number)
  waitsForConnectivity: boolean;
  setWaitsForConnectivity(_: boolean)
  static defaultSessionConfiguration(): URLSessionConfiguration;
  static ephemeralSessionConfiguration(): URLSessionConfiguration;
}

interface NSURLSessionDataDelegate extends NSURLSessionTaskDelegate {
  URLSessionDataTaskDidBecomeDownloadTask?(_: URLSession, dataTask: URLSessionDataTask, didBecomeDownloadTask: URLSessionDownloadTask): void;
  URLSessionDataTaskDidBecomeStreamTask?(_: URLSession, dataTask: URLSessionDataTask, didBecomeStreamTask: URLSessionStreamTask): void;
  URLSessionDataTaskDidReceiveData?(_: URLSession, dataTask: URLSessionDataTask, didReceiveData: Data): void;
  URLSessionDataTaskDidReceiveResponseCompletionHandler?(_: URLSession, dataTask: URLSessionDataTask, didReceiveResponse: URLResponse, completionHandler: (p1: URLSession.ResponseDisposition) => void): void;
  URLSessionDataTaskWillCacheResponseCompletionHandler?(_: URLSession, dataTask: URLSessionDataTask, willCacheResponse: CachedURLResponse, completionHandler?: (p1: CachedURLResponse) => void): void;
}

declare var NSURLSessionDataDelegate: {
  prototype: NSURLSessionDataDelegate;
};

declare class NSURLSessionDataTask extends NSURLSessionTask {
}

interface NSURLSessionDelegate extends NSObject {
  URLSessionDidBecomeInvalidWithError?(_: URLSession, didBecomeInvalidWithError?: Error): void;
  URLSessionDidReceiveChallengeCompletionHandler?(_: URLSession, didReceiveChallenge: URLAuthenticationChallenge, completionHandler?: (p1: URLSession.AuthChallengeDisposition, p2: URLCredential) => void): void;
}

declare var NSURLSessionDelegate: {
  prototype: NSURLSessionDelegate;
};

interface NSURLSessionDownloadDelegate extends NSURLSessionTaskDelegate {
  URLSessionDownloadTaskDidFinishDownloadingToURL(_: URLSession, downloadTask: URLSessionDownloadTask, didFinishDownloadingToURL: NSURL): void;
  URLSessionDownloadTaskDidResumeAtOffsetExpectedTotalBytes?(_: URLSession, downloadTask: URLSessionDownloadTask, didResumeAtOffset: number, expectedTotalBytes: number): void;
  URLSessionDownloadTaskDidWriteDataTotalBytesWrittenTotalBytesExpectedToWrite?(_: URLSession, downloadTask: URLSessionDownloadTask, didWriteData: number, totalBytesWritten: number, totalBytesExpectedToWrite: number): void;
}

declare var NSURLSessionDownloadDelegate: {
  prototype: NSURLSessionDownloadDelegate;
};

declare class NSURLSessionDownloadTask extends NSURLSessionTask {
  cancelByProducingResumeData(_?: (p1: Data) => void): void;
}

declare var NSURLSessionDownloadTaskResumeData: string;

interface NSURLSessionStreamDelegate extends NSURLSessionTaskDelegate {
  URLSessionBetterRouteDiscoveredForStreamTask?(_: URLSession, betterRouteDiscoveredForStreamTask: URLSessionStreamTask): void;
  URLSessionReadClosedForStreamTask?(_: URLSession, readClosedForStreamTask: URLSessionStreamTask): void;
  URLSessionStreamTaskDidBecomeInputStreamOutputStream?(_: URLSession, streamTask: URLSessionStreamTask, didBecomeInputStream: InputStream, outputStream: OutputStream): void;
  URLSessionWriteClosedForStreamTask?(_: URLSession, writeClosedForStreamTask: URLSessionStreamTask): void;
}

declare var NSURLSessionStreamDelegate: {
  prototype: NSURLSessionStreamDelegate;
};

declare class NSURLSessionStreamTask extends NSURLSessionTask {
  captureStreams(): void;
  closeRead(): void;
  closeWrite(): void;
  readDataOfMinLengthMaxLengthTimeoutCompletionHandler(_: number, maxLength: number, timeout: number, completionHandler?: (p1: Data, p2: boolean, p3: Error) => void): void;
  startSecureConnection(): void;
  writeDataTimeoutCompletionHandler(_: Data, timeout: number, completionHandler?: (p1: Error) => void): void;
}

declare class NSURLSessionTask extends NSObject implements NSCopying, NSProgressReporting {
  countOfBytesClientExpectsToReceive: number;
  setCountOfBytesClientExpectsToReceive(_: number)
  countOfBytesClientExpectsToSend: number;
  setCountOfBytesClientExpectsToSend(_: number)
  readonly countOfBytesExpectedToReceive: number;
  readonly countOfBytesExpectedToSend: number;
  readonly countOfBytesReceived: number;
  readonly countOfBytesSent: number;
  readonly currentRequest: NSURLRequest;
  earliestBeginDate: Date;
  setEarliestBeginDate(_: Date)
  readonly error: Error;
  readonly originalRequest: NSURLRequest;
  priority: number;
  setPriority(_: number)
  readonly response: URLResponse;
  readonly state: URLSessionTask.State;
  taskDescription: string;
  setTaskDescription(_: string)
  readonly taskIdentifier: number;
  readonly debugDescription: string; // inherited from NSObject
  readonly description: string; // inherited from NSObject
  readonly hash: number; // inherited from NSObject
  readonly isProxy: boolean; // inherited from NSObject
  readonly progress: Progress; // inherited from NSProgressReporting
  readonly superclass: typeof NSObject; // inherited from NSObject
  cancel(): void;
  conformsToProtocol(to: any /* Protocol */): boolean;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  resume(): void;
  self(): this;
  suspend(): void;
}

interface NSURLSessionTaskDelegate extends NSURLSessionDelegate {
  URLSessionTaskDidCompleteWithError?(_: URLSession, task: URLSessionTask, didCompleteWithError?: Error): void;
  URLSessionTaskDidFinishCollectingMetrics?(_: URLSession, task: URLSessionTask, didFinishCollectingMetrics: URLSessionTaskMetrics): void;
  URLSessionTaskDidReceiveChallengeCompletionHandler?(_: URLSession, task: URLSessionTask, didReceiveChallenge: URLAuthenticationChallenge, completionHandler?: (p1: URLSession.AuthChallengeDisposition, p2: URLCredential) => void): void;
  URLSessionTaskDidSendBodyDataTotalBytesSentTotalBytesExpectedToSend?(_: URLSession, task: URLSessionTask, didSendBodyData: number, totalBytesSent: number, totalBytesExpectedToSend: number): void;
  URLSessionTaskNeedNewBodyStream?(_: URLSession, task: URLSessionTask, needNewBodyStream?: (p1: InputStream) => void): void;
  URLSessionTaskWillBeginDelayedRequestCompletionHandler?(_: URLSession, task: URLSessionTask, willBeginDelayedRequest: NSURLRequest, completionHandler?: (p1: NSURLSessionDelayedRequestDisposition, p2: NSURLRequest) => void): void;
  URLSessionTaskWillPerformHTTPRedirectionNewRequestCompletionHandler?(_: URLSession, task: URLSessionTask, willPerformHTTPRedirection: HTTPURLResponse, newRequest: NSURLRequest, completionHandler?: (p1: NSURLRequest) => void): void;
  URLSessionTaskIsWaitingForConnectivity?(_: URLSession, taskIsWaitingForConnectivity: URLSessionTask): void;
}

declare var NSURLSessionTaskDelegate: {
  prototype: NSURLSessionTaskDelegate;
};

declare class NSURLSessionTaskMetrics extends NSObject {
  readonly redirectCount: number;
  readonly taskInterval: NSDateInterval;
  readonly transactionMetrics: NSArray<URLSessionTaskTransactionMetrics>;
}

declare var NSURLSessionTaskPriorityDefault: number;

declare var NSURLSessionTaskPriorityHigh: number;

declare var NSURLSessionTaskPriorityLow: number;

declare class NSURLSessionTaskTransactionMetrics extends NSObject {
  readonly isCellular: boolean;
  readonly connectEndDate: Date;
  readonly connectStartDate: Date;
  readonly isConstrained: boolean;
  readonly countOfRequestBodyBytesBeforeEncoding: number;
  readonly countOfRequestBodyBytesSent: number;
  readonly countOfRequestHeaderBytesSent: number;
  readonly countOfResponseBodyBytesAfterDecoding: number;
  readonly countOfResponseBodyBytesReceived: number;
  readonly countOfResponseHeaderBytesReceived: number;
  readonly domainLookupEndDate: Date;
  readonly domainLookupStartDate: Date;
  readonly isExpensive: boolean;
  readonly fetchStartDate: Date;
  readonly localAddress: string;
  readonly localPort: number;
  readonly isMultipath: boolean;
  readonly negotiatedTLSCipherSuite: number;
  readonly negotiatedTLSProtocolVersion: number;
  readonly networkProtocolName: string;
  readonly isProxyConnection: boolean;
  readonly remoteAddress: string;
  readonly remotePort: number;
  readonly request: NSURLRequest;
  readonly requestEndDate: Date;
  readonly requestStartDate: Date;
  readonly resourceFetchType: URLSessionTaskMetrics.ResourceFetchType;
  readonly response: URLResponse;
  readonly responseEndDate: Date;
  readonly responseStartDate: Date;
  readonly isReusedConnection: boolean;
  readonly secureConnectionEndDate: Date;
  readonly secureConnectionStartDate: Date;
}

declare var NSURLSessionTransferSizeUnknown: number;

declare class NSURLSessionUploadTask extends NSURLSessionDataTask {
}

interface NSURLSessionWebSocketDelegate extends NSURLSessionTaskDelegate {
  URLSessionWebSocketTaskDidCloseWithCodeReason?(_: URLSession, webSocketTask: URLSessionWebSocketTask, didCloseWithCode: URLSessionWebSocketTask.CloseCode, reason?: Data): void;
  URLSessionWebSocketTaskDidOpenWithProtocol?(_: URLSession, webSocketTask: URLSessionWebSocketTask, didOpenWithProtocol?: string): void;
}

declare var NSURLSessionWebSocketDelegate: {
  prototype: NSURLSessionWebSocketDelegate;
};

declare class NSURLSessionWebSocketMessage extends NSObject {
  readonly data: Data;
  readonly string: string;
  readonly type: NSURLSessionWebSocketMessageType;
  static createWithData(data: Data): this;
  static createWithString(string: string): this;
}

declare class NSURLSessionWebSocketTask extends NSURLSessionTask {
  readonly closeCode: URLSessionWebSocketTask.CloseCode;
  readonly closeReason: Data;
  maximumMessageSize: number;
  setMaximumMessageSize(_: number)
  cancelWithCloseCodeReason(_: URLSessionWebSocketTask.CloseCode, reason?: Data): void;
  receiveMessageWithCompletionHandler(_?: (p1: NSURLSessionWebSocketMessage, p2: Error) => void): void;
  sendMessageCompletionHandler(_: NSURLSessionWebSocketMessage, completionHandler?: (p1: Error) => void): void;
  sendPingWithPongReceiveHandler(_?: (p1: Error) => void): void;
}

declare var NSURLTagNamesKey: string;

declare var NSURLThumbnailDictionaryKey: string;

declare var NSURLThumbnailKey: string;

declare var NSURLTotalFileAllocatedSizeKey: string;

declare var NSURLTotalFileSizeKey: string;

declare var NSURLTypeIdentifierKey: string;

declare var NSURLUbiquitousItemContainerDisplayNameKey: string;

declare var NSURLUbiquitousItemDownloadRequestedKey: string;

declare var NSURLUbiquitousItemDownloadingErrorKey: string;

declare var NSURLUbiquitousItemDownloadingStatusCurrent: string;

declare var NSURLUbiquitousItemDownloadingStatusDownloaded: string;

declare var NSURLUbiquitousItemDownloadingStatusKey: string;

declare var NSURLUbiquitousItemDownloadingStatusNotDownloaded: string;

declare var NSURLUbiquitousItemHasUnresolvedConflictsKey: string;

declare var NSURLUbiquitousItemIsDownloadingKey: string;

declare var NSURLUbiquitousItemIsSharedKey: string;

declare var NSURLUbiquitousItemIsUploadedKey: string;

declare var NSURLUbiquitousItemIsUploadingKey: string;

declare var NSURLUbiquitousItemUploadingErrorKey: string;

declare var NSURLUbiquitousSharedItemCurrentUserPermissionsKey: string;

declare var NSURLUbiquitousSharedItemCurrentUserRoleKey: string;

declare var NSURLUbiquitousSharedItemMostRecentEditorNameComponentsKey: string;

declare var NSURLUbiquitousSharedItemOwnerNameComponentsKey: string;

declare var NSURLUbiquitousSharedItemPermissionsReadOnly: string;

declare var NSURLUbiquitousSharedItemPermissionsReadWrite: string;

declare var NSURLUbiquitousSharedItemRoleOwner: string;

declare var NSURLUbiquitousSharedItemRoleParticipant: string;

declare var NSURLVolumeAvailableCapacityForImportantUsageKey: string;

declare var NSURLVolumeAvailableCapacityForOpportunisticUsageKey: string;

declare var NSURLVolumeAvailableCapacityKey: string;

declare var NSURLVolumeCreationDateKey: string;

declare var NSURLVolumeIdentifierKey: string;

declare var NSURLVolumeIsAutomountedKey: string;

declare var NSURLVolumeIsBrowsableKey: string;

declare var NSURLVolumeIsEjectableKey: string;

declare var NSURLVolumeIsEncryptedKey: string;

declare var NSURLVolumeIsInternalKey: string;

declare var NSURLVolumeIsJournalingKey: string;

declare var NSURLVolumeIsLocalKey: string;

declare var NSURLVolumeIsReadOnlyKey: string;

declare var NSURLVolumeIsRemovableKey: string;

declare var NSURLVolumeIsRootFileSystemKey: string;

declare var NSURLVolumeLocalizedFormatDescriptionKey: string;

declare var NSURLVolumeLocalizedNameKey: string;

declare var NSURLVolumeMaximumFileSizeKey: string;

declare var NSURLVolumeNameKey: string;

declare var NSURLVolumeResourceCountKey: string;

declare var NSURLVolumeSupportsAccessPermissionsKey: string;

declare var NSURLVolumeSupportsAdvisoryFileLockingKey: string;

declare var NSURLVolumeSupportsCasePreservedNamesKey: string;

declare var NSURLVolumeSupportsCaseSensitiveNamesKey: string;

declare var NSURLVolumeSupportsCompressionKey: string;

declare var NSURLVolumeSupportsExclusiveRenamingKey: string;

declare var NSURLVolumeSupportsExtendedSecurityKey: string;

declare var NSURLVolumeSupportsFileCloningKey: string;

declare var NSURLVolumeSupportsHardLinksKey: string;

declare var NSURLVolumeSupportsImmutableFilesKey: string;

declare var NSURLVolumeSupportsJournalingKey: string;

declare var NSURLVolumeSupportsPersistentIDsKey: string;

declare var NSURLVolumeSupportsRenamingKey: string;

declare var NSURLVolumeSupportsRootDirectoryDatesKey: string;

declare var NSURLVolumeSupportsSparseFilesKey: string;

declare var NSURLVolumeSupportsSwapRenamingKey: string;

declare var NSURLVolumeSupportsSymbolicLinksKey: string;

declare var NSURLVolumeSupportsVolumeSizesKey: string;

declare var NSURLVolumeSupportsZeroRunsKey: string;

declare var NSURLVolumeTotalCapacityKey: string;

declare var NSURLVolumeURLForRemountingKey: string;

declare var NSURLVolumeURLKey: string;

declare var NSURLVolumeUUIDStringKey: string;


declare const NSUTF16BigEndianStringEncoding: number;

declare const NSUTF16LittleEndianStringEncoding: number;

declare const NSUTF16StringEncoding: number;

declare const NSUTF32BigEndianStringEncoding: number;

declare const NSUTF32LittleEndianStringEncoding: number;

declare const NSUTF32StringEncoding: number;

declare const NSUTF8StringEncoding: number;
declare class NSUUID extends NSObject implements NSCopying, NSSecureCoding {
  readonly UUIDString: string;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  getUUIDBytes(_: number): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithUUIDBytes(UUIDBytes?: number): this;
  static createWithUUIDString(UUIDString: string): this;
}


declare const NSUbiquitousFileErrorMaximum: number;

declare const NSUbiquitousFileErrorMinimum: number;

declare const NSUbiquitousFileNotUploadedDueToQuotaError: number;

declare const NSUbiquitousFileUbiquityServerNotAvailable: number;

declare const NSUbiquitousFileUnavailableError: number;
declare class NSUbiquitousKeyValueStore extends NSObject {
  readonly dictionaryRepresentation: NSDictionary<string, any>;
  static defaultStore(): NSUbiquitousKeyValueStore;
  arrayForKey(forKey: string): NSArray<any>;
  boolForKey(forKey: string): boolean;
  dataForKey(forKey: string): Data;
  dictionaryForKey(forKey: string): NSDictionary<string, any>;
  doubleForKey(forKey: string): number;
  longLongForKey(forKey: string): number;
  objectForKey(forKey: string): any;
  removeObjectForKey(forKey: string): void;
  setArrayForKey(_?: NSArray<any>, forKey: string): void;
  setBoolForKey(_: boolean, forKey: string): void;
  setDataForKey(_?: Data, forKey: string): void;
  setDictionaryForKey(_?: NSDictionary<string, any>, forKey: string): void;
  setDoubleForKey(_: number, forKey: string): void;
  setLongLongForKey(_: number, forKey: string): void;
  setObjectForKey(_?: any, forKey: string): void;
  setStringForKey(_?: string, forKey: string): void;
  stringForKey(forKey: string): string;
  synchronize(): boolean;
}


declare const NSUbiquitousKeyValueStoreAccountChange: number;
declare var NSUbiquitousKeyValueStoreChangeReasonKey: string;

declare var NSUbiquitousKeyValueStoreChangedKeysKey: string;

declare var NSUbiquitousKeyValueStoreDidChangeExternallyNotification: string;


declare const NSUbiquitousKeyValueStoreInitialSyncChange: number;

declare const NSUbiquitousKeyValueStoreQuotaViolationChange: number;

declare const NSUbiquitousKeyValueStoreServerChange: number;
declare var NSUbiquitousUserDefaultsCompletedInitialSyncNotification: string;

declare var NSUbiquitousUserDefaultsDidChangeAccountsNotification: string;

declare var NSUbiquitousUserDefaultsNoCloudAccountNotification: string;

declare var NSUbiquityIdentityDidChangeNotification: string;

declare var NSUndefinedKeyException: string;

declare var NSUnderlyingErrorKey: string;

declare var NSUndoCloseGroupingRunLoopOrdering: number;

declare class NSUndoManager extends NSObject {
  readonly canRedo: boolean;
  readonly canUndo: boolean;
  readonly groupingLevel: number;
  groupsByEvent: boolean;
  setGroupsByEvent(_: boolean)
  levelsOfUndo: number;
  setLevelsOfUndo(_: number)
  readonly redoActionIsDiscardable: boolean;
  readonly redoActionName: string;
  readonly redoMenuItemTitle: string;
  readonly isRedoing: boolean;
  runLoopModes: NSArray<string>;
  setRunLoopModes(_: NSArray<string>)
  readonly undoActionIsDiscardable: boolean;
  readonly undoActionName: string;
  readonly undoMenuItemTitle: string;
  readonly isUndoRegistrationEnabled: boolean;
  readonly isUndoing: boolean;
  beginUndoGrouping(): void;
  disableUndoRegistration(): void;
  enableUndoRegistration(): void;
  endUndoGrouping(): void;
  prepareWithInvocationTarget(_: any): any;
  redo(): void;
  redoMenuTitleForUndoActionName(_: string): string;
  registerUndoWithTargetHandler(_: any, handler: (p1: any) => void): void;
  registerUndoWithTargetSelectorObject(_: any, selector: string, object_?: any): void;
  removeAllActions(): void;
  removeAllActionsWithTarget(_: any): void;
  setActionIsDiscardable(_: boolean): void;
  setActionName(_: string): void;
  undo(): void;
  undoMenuTitleForUndoActionName(_: string): string;
  undoNestedGroup(): void;
}

declare var NSUndoManagerCheckpointNotification: string;

declare var NSUndoManagerDidCloseUndoGroupNotification: string;

declare var NSUndoManagerDidOpenUndoGroupNotification: string;

declare var NSUndoManagerDidRedoChangeNotification: string;

declare var NSUndoManagerDidUndoChangeNotification: string;

declare var NSUndoManagerGroupIsDiscardableKey: string;

declare var NSUndoManagerWillCloseUndoGroupNotification: string;

declare var NSUndoManagerWillRedoChangeNotification: string;

declare var NSUndoManagerWillUndoChangeNotification: string;


declare const NSUnicodeStringEncoding: number;
declare var NSUnionOfArraysKeyValueOperator: string;

declare var NSUnionOfObjectsKeyValueOperator: string;

declare var NSUnionOfSetsKeyValueOperator: string;

declare function NSUnionRange(range1: NSRange, range2: NSRange): NSRange;
declare function NSUnionRect(aRect: NSRect, bRect: NSRect): NSRect;
declare class NSUniqueIDSpecifier extends NSScriptObjectSpecifier {
  uniqueID: any;
  setUniqueID(_: any)
  static createWithContainerClassDescriptionContainerSpecifierKeyUniqueID(containerClassDescription: NSScriptClassDescription, containerSpecifier?: NSScriptObjectSpecifier, key: string, uniqueID: any): this;
}

declare class NSUnit extends NSObject implements NSCopying, NSSecureCoding {
  readonly symbol: string;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithSymbol(symbol: string): this;
}

declare class NSUnitAcceleration extends NSDimension implements NSSecureCoding {
  static baseUnit(): NSUnitAcceleration; // inherited from NSDimension
  static gravity(): UnitAcceleration;
  static metersPerSecondSquared(): UnitAcceleration;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class NSUnitAngle extends NSDimension implements NSSecureCoding {
  static baseUnit(): NSUnitAngle; // inherited from NSDimension
  static arcMinutes(): UnitAngle;
  static arcSeconds(): UnitAngle;
  static degrees(): UnitAngle;
  static gradians(): UnitAngle;
  static radians(): UnitAngle;
  static revolutions(): UnitAngle;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class NSUnitArea extends NSDimension implements NSSecureCoding {
  static baseUnit(): NSUnitArea; // inherited from NSDimension
  static acres(): UnitArea;
  static ares(): UnitArea;
  static hectares(): UnitArea;
  static squareCentimeters(): UnitArea;
  static squareFeet(): UnitArea;
  static squareInches(): UnitArea;
  static squareKilometers(): UnitArea;
  static squareMegameters(): UnitArea;
  static squareMeters(): UnitArea;
  static squareMicrometers(): UnitArea;
  static squareMiles(): UnitArea;
  static squareMillimeters(): UnitArea;
  static squareNanometers(): UnitArea;
  static squareYards(): UnitArea;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class NSUnitConcentrationMass extends NSDimension implements NSSecureCoding {
  static baseUnit(): NSUnitConcentrationMass; // inherited from NSDimension
  static millimolesPerLiterWithGramsPerMole(_: number): UnitConcentrationMass;
  static gramsPerLiter(): UnitConcentrationMass;
  static milligramsPerDeciliter(): UnitConcentrationMass;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class NSUnitConverter extends NSObject {
  baseUnitValueFromValue(_: number): number;
  valueFromBaseUnitValue(_: number): number;
}

declare class NSUnitConverterLinear extends NSUnitConverter implements NSSecureCoding {
  readonly coefficient: number;
  readonly constant: number;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithCoefficient(coefficient: number): this;
  static createWithCoefficientConstant(coefficient: number, constant: number): this;
}

declare class NSUnitDispersion extends NSDimension implements NSSecureCoding {
  static baseUnit(): NSUnitDispersion; // inherited from NSDimension
  static partsPerMillion(): UnitDispersion;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class NSUnitDuration extends NSDimension implements NSSecureCoding {
  static baseUnit(): NSUnitDuration; // inherited from NSDimension
  static hours(): UnitDuration;
  static microseconds(): UnitDuration;
  static milliseconds(): UnitDuration;
  static minutes(): UnitDuration;
  static nanoseconds(): UnitDuration;
  static picoseconds(): UnitDuration;
  static seconds(): UnitDuration;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class NSUnitElectricCharge extends NSDimension implements NSSecureCoding {
  static baseUnit(): NSUnitElectricCharge; // inherited from NSDimension
  static ampereHours(): UnitElectricCharge;
  static coulombs(): UnitElectricCharge;
  static kiloampereHours(): UnitElectricCharge;
  static megaampereHours(): UnitElectricCharge;
  static microampereHours(): UnitElectricCharge;
  static milliampereHours(): UnitElectricCharge;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class NSUnitElectricCurrent extends NSDimension implements NSSecureCoding {
  static baseUnit(): NSUnitElectricCurrent; // inherited from NSDimension
  static amperes(): UnitElectricCurrent;
  static kiloamperes(): UnitElectricCurrent;
  static megaamperes(): UnitElectricCurrent;
  static microamperes(): UnitElectricCurrent;
  static milliamperes(): UnitElectricCurrent;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class NSUnitElectricPotentialDifference extends NSDimension implements NSSecureCoding {
  static baseUnit(): NSUnitElectricPotentialDifference; // inherited from NSDimension
  static kilovolts(): UnitElectricPotentialDifference;
  static megavolts(): UnitElectricPotentialDifference;
  static microvolts(): UnitElectricPotentialDifference;
  static millivolts(): UnitElectricPotentialDifference;
  static volts(): UnitElectricPotentialDifference;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class NSUnitElectricResistance extends NSDimension implements NSSecureCoding {
  static baseUnit(): NSUnitElectricResistance; // inherited from NSDimension
  static kiloohms(): UnitElectricResistance;
  static megaohms(): UnitElectricResistance;
  static microohms(): UnitElectricResistance;
  static milliohms(): UnitElectricResistance;
  static ohms(): UnitElectricResistance;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class NSUnitEnergy extends NSDimension implements NSSecureCoding {
  static baseUnit(): NSUnitEnergy; // inherited from NSDimension
  static calories(): UnitEnergy;
  static joules(): UnitEnergy;
  static kilocalories(): UnitEnergy;
  static kilojoules(): UnitEnergy;
  static kilowattHours(): UnitEnergy;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class NSUnitFrequency extends NSDimension implements NSSecureCoding {
  static baseUnit(): NSUnitFrequency; // inherited from NSDimension
  static framesPerSecond(): UnitFrequency;
  static gigahertz(): UnitFrequency;
  static hertz(): UnitFrequency;
  static kilohertz(): UnitFrequency;
  static megahertz(): UnitFrequency;
  static microhertz(): UnitFrequency;
  static millihertz(): UnitFrequency;
  static nanohertz(): UnitFrequency;
  static terahertz(): UnitFrequency;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class NSUnitFuelEfficiency extends NSDimension implements NSSecureCoding {
  static baseUnit(): NSUnitFuelEfficiency; // inherited from NSDimension
  static litersPer100Kilometers(): UnitFuelEfficiency;
  static milesPerGallon(): UnitFuelEfficiency;
  static milesPerImperialGallon(): UnitFuelEfficiency;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class NSUnitIlluminance extends NSDimension implements NSSecureCoding {
  static baseUnit(): NSUnitIlluminance; // inherited from NSDimension
  static lux(): UnitIlluminance;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class NSUnitInformationStorage extends NSDimension implements NSSecureCoding {
  static baseUnit(): NSUnitInformationStorage; // inherited from NSDimension
  static bits(): NSUnitInformationStorage;
  static bytes(): NSUnitInformationStorage;
  static exabits(): NSUnitInformationStorage;
  static exabytes(): NSUnitInformationStorage;
  static exbibits(): NSUnitInformationStorage;
  static exbibytes(): NSUnitInformationStorage;
  static gibibits(): NSUnitInformationStorage;
  static gibibytes(): NSUnitInformationStorage;
  static gigabits(): NSUnitInformationStorage;
  static gigabytes(): NSUnitInformationStorage;
  static kibibits(): NSUnitInformationStorage;
  static kibibytes(): NSUnitInformationStorage;
  static kilobits(): NSUnitInformationStorage;
  static kilobytes(): NSUnitInformationStorage;
  static mebibits(): NSUnitInformationStorage;
  static mebibytes(): NSUnitInformationStorage;
  static megabits(): NSUnitInformationStorage;
  static megabytes(): NSUnitInformationStorage;
  static nibbles(): NSUnitInformationStorage;
  static pebibits(): NSUnitInformationStorage;
  static pebibytes(): NSUnitInformationStorage;
  static petabits(): NSUnitInformationStorage;
  static petabytes(): NSUnitInformationStorage;
  static tebibits(): NSUnitInformationStorage;
  static tebibytes(): NSUnitInformationStorage;
  static terabits(): NSUnitInformationStorage;
  static terabytes(): NSUnitInformationStorage;
  static yobibits(): NSUnitInformationStorage;
  static yobibytes(): NSUnitInformationStorage;
  static yottabits(): NSUnitInformationStorage;
  static yottabytes(): NSUnitInformationStorage;
  static zebibits(): NSUnitInformationStorage;
  static zebibytes(): NSUnitInformationStorage;
  static zettabits(): NSUnitInformationStorage;
  static zettabytes(): NSUnitInformationStorage;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class NSUnitLength extends NSDimension implements NSSecureCoding {
  static baseUnit(): NSUnitLength; // inherited from NSDimension
  static astronomicalUnits(): UnitLength;
  static centimeters(): UnitLength;
  static decameters(): UnitLength;
  static decimeters(): UnitLength;
  static fathoms(): UnitLength;
  static feet(): UnitLength;
  static furlongs(): UnitLength;
  static hectometers(): UnitLength;
  static inches(): UnitLength;
  static kilometers(): UnitLength;
  static lightyears(): UnitLength;
  static megameters(): UnitLength;
  static meters(): UnitLength;
  static micrometers(): UnitLength;
  static miles(): UnitLength;
  static millimeters(): UnitLength;
  static nanometers(): UnitLength;
  static nauticalMiles(): UnitLength;
  static parsecs(): UnitLength;
  static picometers(): UnitLength;
  static scandinavianMiles(): UnitLength;
  static yards(): UnitLength;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class NSUnitMass extends NSDimension implements NSSecureCoding {
  static baseUnit(): NSUnitMass; // inherited from NSDimension
  static carats(): UnitMass;
  static centigrams(): UnitMass;
  static decigrams(): UnitMass;
  static grams(): UnitMass;
  static kilograms(): UnitMass;
  static metricTons(): UnitMass;
  static micrograms(): UnitMass;
  static milligrams(): UnitMass;
  static nanograms(): UnitMass;
  static ounces(): UnitMass;
  static ouncesTroy(): UnitMass;
  static picograms(): UnitMass;
  static poundsMass(): UnitMass;
  static shortTons(): UnitMass;
  static slugs(): UnitMass;
  static stones(): UnitMass;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class NSUnitPower extends NSDimension implements NSSecureCoding {
  static baseUnit(): NSUnitPower; // inherited from NSDimension
  static femtowatts(): UnitPower;
  static gigawatts(): UnitPower;
  static horsepower(): UnitPower;
  static kilowatts(): UnitPower;
  static megawatts(): UnitPower;
  static microwatts(): UnitPower;
  static milliwatts(): UnitPower;
  static nanowatts(): UnitPower;
  static picowatts(): UnitPower;
  static terawatts(): UnitPower;
  static watts(): UnitPower;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class NSUnitPressure extends NSDimension implements NSSecureCoding {
  static baseUnit(): NSUnitPressure; // inherited from NSDimension
  static bars(): UnitPressure;
  static gigapascals(): UnitPressure;
  static hectopascals(): UnitPressure;
  static inchesOfMercury(): UnitPressure;
  static kilopascals(): UnitPressure;
  static megapascals(): UnitPressure;
  static millibars(): UnitPressure;
  static millimetersOfMercury(): UnitPressure;
  static newtonsPerMetersSquared(): UnitPressure;
  static poundsForcePerSquareInch(): UnitPressure;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class NSUnitSpeed extends NSDimension implements NSSecureCoding {
  static baseUnit(): NSUnitSpeed; // inherited from NSDimension
  static kilometersPerHour(): UnitSpeed;
  static knots(): UnitSpeed;
  static metersPerSecond(): UnitSpeed;
  static milesPerHour(): UnitSpeed;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class NSUnitTemperature extends NSDimension implements NSSecureCoding {
  static baseUnit(): NSUnitTemperature; // inherited from NSDimension
  static celsius(): UnitTemperature;
  static fahrenheit(): UnitTemperature;
  static kelvin(): UnitTemperature;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare class NSUnitVolume extends NSDimension implements NSSecureCoding {
  static baseUnit(): NSUnitVolume; // inherited from NSDimension
  static acreFeet(): UnitVolume;
  static bushels(): UnitVolume;
  static centiliters(): UnitVolume;
  static cubicCentimeters(): UnitVolume;
  static cubicDecimeters(): UnitVolume;
  static cubicFeet(): UnitVolume;
  static cubicInches(): UnitVolume;
  static cubicKilometers(): UnitVolume;
  static cubicMeters(): UnitVolume;
  static cubicMiles(): UnitVolume;
  static cubicMillimeters(): UnitVolume;
  static cubicYards(): UnitVolume;
  static cups(): UnitVolume;
  static deciliters(): UnitVolume;
  static fluidOunces(): UnitVolume;
  static gallons(): UnitVolume;
  static imperialFluidOunces(): UnitVolume;
  static imperialGallons(): UnitVolume;
  static imperialPints(): UnitVolume;
  static imperialQuarts(): UnitVolume;
  static imperialTablespoons(): UnitVolume;
  static imperialTeaspoons(): UnitVolume;
  static kiloliters(): UnitVolume;
  static liters(): UnitVolume;
  static megaliters(): UnitVolume;
  static metricCups(): UnitVolume;
  static milliliters(): UnitVolume;
  static pints(): UnitVolume;
  static quarts(): UnitVolume;
  static tablespoons(): UnitVolume;
  static teaspoons(): UnitVolume;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}


declare const NSUnknownKeyScriptError: number;

declare const NSUnknownKeySpecifierError: number;
declare class NSUserActivity extends NSObject {
  readonly activityType: string;
  delegate: NSUserActivityDelegate;
  setDelegate(_: NSUserActivityDelegate)
  readonly detectedBarcodeDescriptor: CIBarcodeDescriptor;
  isEligibleForHandoff: boolean;
  setEligibleForHandoff(_: boolean)
  isEligibleForPublicIndexing: boolean;
  setEligibleForPublicIndexing(_: boolean)
  isEligibleForSearch: boolean;
  setEligibleForSearch(_: boolean)
  expirationDate: Date;
  setExpirationDate(_: Date)
  keywords: Set<string>;
  setKeywords(_: Set<string>)
  needsSave: boolean;
  setNeedsSave(_: boolean)
  referrerURL: NSURL;
  setReferrerURL(_: NSURL)
  requiredUserInfoKeys: Set<string>;
  setRequiredUserInfoKeys(_: Set<string>)
  supportsContinuationStreams: boolean;
  setSupportsContinuationStreams(_: boolean)
  targetContentIdentifier: string;
  setTargetContentIdentifier(_: string)
  title: string;
  setTitle(_: string)
  userInfo: NSDictionary<any, any>;
  setUserInfo(_: NSDictionary<any, any>)
  webpageURL: NSURL;
  setWebpageURL(_: NSURL)
  addUserInfoEntriesFromDictionary(from: NSDictionary<any, any>): void;
  becomeCurrent(): void;
  getContinuationStreamsWithCompletionHandler(completionHandler?: (p1: InputStream, p2: OutputStream, p3: Error) => void): void;
  static createWithActivityType(activityType: string): this;
  invalidate(): void;
  resignCurrent(): void;
}


declare const NSUserActivityConnectionUnavailableError: number;
interface NSUserActivityDelegate extends NSObject {
  userActivityDidReceiveInputStreamOutputStream?(_: NSUserActivity, didReceive: InputStream, outputStream: OutputStream): void;
  userActivityWasContinued?(_: NSUserActivity): void;
  userActivityWillSave?(_: NSUserActivity): void;
}

declare var NSUserActivityDelegate: {
  prototype: NSUserActivityDelegate;
};


declare const NSUserActivityErrorMaximum: number;

declare const NSUserActivityErrorMinimum: number;

declare const NSUserActivityHandoffFailedError: number;

declare const NSUserActivityHandoffUserInfoTooLargeError: number;

declare const NSUserActivityRemoteApplicationTimedOutError: number;
declare var NSUserActivityTypeBrowsingWeb: string;

declare class NSUserAppleScriptTask extends NSUserScriptTask {
  executeWithAppleEventCompletionHandler(withAppleEvent?: NSAppleEventDescriptor, completionHandler?: (p1: NSAppleEventDescriptor, p2: Error) => void): void;
}

declare class NSUserAutomatorTask extends NSUserScriptTask {
  variables: NSDictionary<string, any>;
  setVariables(_: NSDictionary<string, any>)
  executeWithInputCompletionHandler(withInput?: NSSecureCoding, completionHandler?: (p1: any, p2: Error) => void): void;
}


declare const NSUserCancelledError: number;
declare class NSUserDefaults extends NSObject {
  static resetStandardUserDefaults(): void;
  readonly volatileDomainNames: NSArray<string>;
  static standardUserDefaults(): UserDefaults;
  URLForKey(_: string): NSURL;
  addSuiteNamed(named: string): void;
  arrayForKey(_: string): NSArray<any>;
  boolForKey(_: string): boolean;
  dataForKey(_: string): Data;
  dictionaryForKey(_: string): NSDictionary<string, any>;
  dictionaryRepresentation(): NSDictionary<string, any>;
  doubleForKey(_: string): number;
  floatForKey(_: string): number;
  static createWithSuiteName(suiteName?: string): this;
  integerForKey(_: string): number;
  objectForKey(_: string): any;
  objectIsForcedForKey(_: string): boolean;
  objectIsForcedForKeyInDomain(_: string, inDomain: string): boolean;
  persistentDomainForName(_: string): NSDictionary<string, any>;
  registerDefaults(defaults: NSDictionary<string, any>): void;
  removeObjectForKey(_: string): void;
  removePersistentDomainForName(_: string): void;
  removeSuiteNamed(named: string): void;
  removeVolatileDomainForName(_: string): void;
  setBoolForKey(_: boolean, forKey: string): void;
  setDoubleForKey(_: number, forKey: string): void;
  setFloatForKey(_: number, forKey: string): void;
  setIntegerForKey(_: number, forKey: string): void;
  setObjectForKey(_?: any, forKey: string): void;
  setPersistentDomainForName(_: NSDictionary<string, any>, forName: string): void;
  setURLForKey(_?: NSURL, forKey: string): void;
  setVolatileDomainForName(_: NSDictionary<string, any>, forName: string): void;
  stringArrayForKey(_: string): NSArray<string>;
  stringForKey(_: string): string;
  synchronize(): boolean;
  volatileDomainForName(_: string): NSDictionary<string, any>;
}

declare var NSUserDefaultsDidChangeNotification: string;

declare var NSUserDefaultsSizeLimitExceededNotification: string;

declare function NSUserName(): string;
declare class NSUserNotification extends NSObject implements NSCopying {
  actionButtonTitle: string;
  setActionButtonTitle(_: string)
  readonly activationType: NSUserNotification.ActivationType;
  readonly actualDeliveryDate: Date;
  additionalActions: NSArray<NSUserNotificationAction>;
  setAdditionalActions(_: NSArray<NSUserNotificationAction>)
  readonly additionalActivationAction: NSUserNotificationAction;
  contentImage: NSImage;
  setContentImage(_: NSImage)
  deliveryDate: Date;
  setDeliveryDate(_: Date)
  deliveryRepeatInterval: NSDateComponents;
  setDeliveryRepeatInterval(_: NSDateComponents)
  deliveryTimeZone: NSTimeZone;
  setDeliveryTimeZone(_: NSTimeZone)
  hasActionButton: boolean;
  setHasActionButton(_: boolean)
  hasReplyButton: boolean;
  setHasReplyButton(_: boolean)
  identifier: string;
  setIdentifier(_: string)
  informativeText: string;
  setInformativeText(_: string)
  otherButtonTitle: string;
  setOtherButtonTitle(_: string)
  readonly isPresented: boolean;
  readonly isRemote: boolean;
  readonly response: NSAttributedString;
  responsePlaceholder: string;
  setResponsePlaceholder(_: string)
  soundName: string;
  setSoundName(_: string)
  subtitle: string;
  setSubtitle(_: string)
  title: string;
  setTitle(_: string)
  userInfo: NSDictionary<string, any>;
  setUserInfo(_: NSDictionary<string, any>)
}

declare class NSUserNotificationAction extends NSObject implements NSCopying {
  static actionWithIdentifierTitle(identifier?: string, title?: string): NSUserNotificationAction;
  readonly identifier: string;
  readonly title: string;
}

declare class NSUserNotificationCenter extends NSObject {
  delegate: NSUserNotificationCenterDelegate;
  setDelegate(_: NSUserNotificationCenterDelegate)
  readonly deliveredNotifications: NSArray<NSUserNotification>;
  scheduledNotifications: NSArray<NSUserNotification>;
  setScheduledNotifications(_: NSArray<NSUserNotification>)
  static defaultUserNotificationCenter(): NSUserNotificationCenter;
  deliverNotification(_: NSUserNotification): void;
  removeAllDeliveredNotifications(): void;
  removeDeliveredNotification(_: NSUserNotification): void;
  removeScheduledNotification(_: NSUserNotification): void;
  scheduleNotification(_: NSUserNotification): void;
}

interface NSUserNotificationCenterDelegate extends NSObject {
  userNotificationCenterDidDeliverNotification?(_: NSUserNotificationCenter, didDeliver: NSUserNotification): void;
  userNotificationCenterDidActivateNotification?(_: NSUserNotificationCenter, didActivate: NSUserNotification): void;
  userNotificationCenterShouldPresentNotification?(_: NSUserNotificationCenter, shouldPresent: NSUserNotification): boolean;
}

declare var NSUserNotificationCenterDelegate: {
  prototype: NSUserNotificationCenterDelegate;
};

declare var NSUserNotificationDefaultSoundName: string;

declare class NSUserScriptTask extends NSObject {
  readonly scriptURL: NSURL;
  executeWithCompletionHandler(completionHandler?: (p1: Error) => void): void;
  static createWithUrl(URL: NSURL): this;
}

declare class NSUserUnixTask extends NSUserScriptTask {
  standardError: FileHandle;
  setStandardError(_: FileHandle)
  standardInput: FileHandle;
  setStandardInput(_: FileHandle)
  standardOutput: FileHandle;
  setStandardOutput(_: FileHandle)
  executeWithArgumentsCompletionHandler(withArguments?: NSArray<string>, completionHandler?: (p1: Error) => void): void;
}


declare const NSValidationErrorMaximum: number;

declare const NSValidationErrorMinimum: number;
declare class NSValue extends NSObject implements NSCopying, NSSecureCoding {
  static valueWithCMTime(time: CMTime): NSValue;
  static valueWithCMTimeMapping(timeMapping: CMTimeMapping): NSValue;
  static valueWithCMTimeRange(timeRange: CMTimeRange): NSValue;
  readonly CATransform3DValue: CATransform3D;
  readonly CMTimeMappingValue: CMTimeMapping;
  readonly CMTimeRangeValue: CMTimeRange;
  readonly CMTimeValue: CMTime;
  readonly edgeInsetsValue: NSEdgeInsets;
  readonly nonretainedObjectValue: any;
  readonly objCType: string;
  readonly pointValue: NSPoint;
  readonly pointerValue: any;
  readonly rangeValue: NSRange;
  readonly rectValue: NSRect;
  readonly sizeValue: NSSize;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  getValueSize(_: any, size: number): void;
  static createWithBytesObjCType(bytes: any, objCType: string): this;
  static createWithCoder(coder: NSCoder): this;
  isEqualToValue(to: NSValue): boolean;
}

declare class NSValueTransformer extends NSObject {
  static allowsReverseTransformation(): boolean;
  static setValueTransformerForName(_?: ValueTransformer, forName: string): void;
  static transformedValueClass(): typeof NSObject;
  static valueTransformerForName(_: string): ValueTransformer;
  static valueTransformerNames(): NSArray<string>;
  reverseTransformedValue(_?: any): any;
  transformedValue(_?: any): any;
}

declare class NSWhoseSpecifier extends NSScriptObjectSpecifier {
  endSubelementIdentifier: NSWhoseSpecifier.SubelementIdentifier;
  setEndSubelementIdentifier(_: NSWhoseSpecifier.SubelementIdentifier)
  endSubelementIndex: number;
  setEndSubelementIndex(_: number)
  startSubelementIdentifier: NSWhoseSpecifier.SubelementIdentifier;
  setStartSubelementIdentifier(_: NSWhoseSpecifier.SubelementIdentifier)
  startSubelementIndex: number;
  setStartSubelementIndex(_: number)
  test: NSScriptWhoseTest;
  setTest(_: NSScriptWhoseTest)
  static createWithContainerClassDescriptionContainerSpecifierKeyTest(containerClassDescription: NSScriptClassDescription, containerSpecifier?: NSScriptObjectSpecifier, key: string, test: NSScriptWhoseTest): this;
}

declare var NSWillBecomeMultiThreadedNotification: string;


declare const NSWindows95OperatingSystem: number;

declare const NSWindowsCP1250StringEncoding: number;

declare const NSWindowsCP1251StringEncoding: number;

declare const NSWindowsCP1252StringEncoding: number;

declare const NSWindowsCP1253StringEncoding: number;

declare const NSWindowsCP1254StringEncoding: number;

declare const NSWindowsNTOperatingSystem: number;
declare class NSXMLDTD extends NSXMLNode {
  static predefinedEntityDeclarationForName(_: string): XMLDTDNode;
  publicID: string;
  setPublicID(_: string)
  systemID: string;
  setSystemID(_: string)
  addChild(_: XMLNode): void;
  attributeDeclarationForNameElementName(_: string, elementName: string): XMLDTDNode;
  elementDeclarationForName(_: string): XMLDTDNode;
  entityDeclarationForName(_: string): XMLDTDNode;
  static createWithContentsOfURLOptions(contentsOfURL: NSURL, options: XMLNode.Options): this;
  static createWithDataOptions(data: Data, options: XMLNode.Options): this;
  insertChildAtIndex(_: XMLNode, atIndex: number): void;
  insertChildrenAtIndex(_: NSArray<XMLNode>, atIndex: number): void;
  notationDeclarationForName(_: string): XMLDTDNode;
  removeChildAtIndex(_: number): void;
  replaceChildAtIndexWithNode(_: number, withNode: XMLNode): void;
  setChildren(_?: NSArray<XMLNode>): void;
}

declare class NSXMLDTDNode extends NSXMLNode {
  DTDKind: XMLDTDNode.DTDKind;
  setDTDKind(_: XMLDTDNode.DTDKind)
  readonly isExternal: boolean;
  notationName: string;
  setNotationName(_: string)
  publicID: string;
  setPublicID(_: string)
  systemID: string;
  setSystemID(_: string)
  static createWithXMLString(XMLString: string): this;
}

declare class NSXMLDocument extends NSXMLNode {
  static replacementClassForClass(_: typeof NSObject): typeof NSObject;
  DTD: XMLDTD;
  setDTD(_: XMLDTD)
  MIMEType: string;
  setMIMEType(_: string)
  readonly XMLData: Data;
  characterEncoding: string;
  setCharacterEncoding(_: string)
  documentContentKind: XMLDocument.ContentKind;
  setDocumentContentKind(_: XMLDocument.ContentKind)
  isStandalone: boolean;
  setStandalone(_: boolean)
  version: string;
  setVersion(_: string)
  XMLDataWithOptions(_: XMLNode.Options): Data;
  addChild(_: XMLNode): void;
  static createWithContentsOfURLOptions(contentsOfURL: NSURL, options: XMLNode.Options): this;
  static createWithDataOptions(data: Data, options: XMLNode.Options): this;
  static createWithRootElement(rootElement?: XMLElement): this;
  static createWithXMLStringOptions(XMLString: string, options: XMLNode.Options): this;
  insertChildAtIndex(_: XMLNode, atIndex: number): void;
  insertChildrenAtIndex(_: NSArray<XMLNode>, atIndex: number): void;
  objectByApplyingXSLTArgumentsError(arguments_: Data, error?: NSDictionary<string, string>): any;
  objectByApplyingXSLTAtURLArgumentsError(arguments_: NSURL, error?: NSDictionary<string, string>): any;
  objectByApplyingXSLTStringArgumentsError(arguments_: string, error?: NSDictionary<string, string>): any;
  removeChildAtIndex(_: number): void;
  replaceChildAtIndexWithNode(_: number, withNode: XMLNode): void;
  rootElement(): XMLElement;
  setChildren(_?: NSArray<XMLNode>): void;
  setRootElement(_: XMLElement): void;
  validateAndReturnError(): boolean;
}

declare class NSXMLElement extends NSXMLNode {
  attributes: NSArray<XMLNode>;
  setAttributes(_: NSArray<XMLNode>)
  namespaces: NSArray<XMLNode>;
  setNamespaces(_: NSArray<XMLNode>)
  addAttribute(_: XMLNode): void;
  addChild(_: XMLNode): void;
  addNamespace(_: XMLNode): void;
  attributeForLocalNameUri(_: string, URI?: string): XMLNode;
  attributeForName(_: string): XMLNode;
  elementsForLocalNameUri(_: string, URI?: string): NSArray<XMLElement>;
  elementsForName(_: string): NSArray<XMLElement>;
  static createWithName(name: string): this;
  static createWithNameUri(name: string, URI?: string): this;
  static createWithNameStringValue(name: string, stringValue?: string): this;
  static createWithXMLString(XMLString: string): this;
  insertChildAtIndex(_: XMLNode, atIndex: number): void;
  insertChildrenAtIndex(_: NSArray<XMLNode>, atIndex: number): void;
  namespaceForPrefix(_: string): XMLNode;
  normalizeAdjacentTextNodesPreservingCDATA(_: boolean): void;
  removeAttributeForName(_: string): void;
  removeChildAtIndex(_: number): void;
  removeNamespaceForPrefix(_: string): void;
  replaceChildAtIndexWithNode(_: number, withNode: XMLNode): void;
  resolveNamespaceForName(_: string): XMLNode;
  resolvePrefixForNamespaceURI(_: string): string;
  setAttributesAsDictionary(_: NSDictionary<any, any>): void;
  setAttributesWithDictionary(_: NSDictionary<string, string>): void;
  setChildren(_?: NSArray<XMLNode>): void;
}

declare class NSXMLNode extends NSObject implements NSCopying {
  static DTDNodeWithXMLString(_: string): any;
  static attributeWithNameUriStringValue(_: string, URI: string, stringValue: string): any;
  static attributeWithNameStringValue(_: string, stringValue: string): any;
  static commentWithStringValue(_: string): any;
  static document(): any;
  static documentWithRootElement(_: XMLElement): any;
  static elementWithName(_: string): any;
  static elementWithNameUri(_: string, URI: string): any;
  static elementWithNameChildrenAttributes(_: string, children?: NSArray<XMLNode>, attributes?: NSArray<XMLNode>): any;
  static elementWithNameStringValue(_: string, stringValue: string): any;
  static localNameForName(_: string): string;
  static namespaceWithNameStringValue(_: string, stringValue: string): any;
  static predefinedNamespaceForPrefix(_: string): XMLNode;
  static prefixForName(_: string): string;
  static processingInstructionWithNameStringValue(_: string, stringValue: string): any;
  static textWithStringValue(_: string): any;
  URI: string;
  setURI(_: string)
  readonly XMLString: string;
  readonly XPath: string;
  readonly childCount: number;
  readonly children: NSArray<XMLNode>;
  readonly index: number;
  readonly kind: XMLNode.Kind;
  readonly level: number;
  readonly localName: string;
  name: string;
  setName(_: string)
  readonly nextNode: XMLNode;
  readonly nextSibling: XMLNode;
  objectValue: any;
  setObjectValue(_: any)
  readonly parent: XMLNode;
  readonly prefix: string;
  readonly previousNode: XMLNode;
  readonly previousSibling: XMLNode;
  readonly rootDocument: XMLDocument;
  stringValue: string;
  setStringValue(_: string)
  XMLStringWithOptions(_: XMLNode.Options): string;
  canonicalXMLStringPreservingComments(_: boolean): string;
  childAtIndex(_: number): XMLNode;
  detach(): void;
  static createWithKind(kind: XMLNode.Kind): this;
  static createWithKindOptions(kind: XMLNode.Kind, options: XMLNode.Options): this;
  nodesForXPathError(error: string): NSArray<XMLNode>;
  objectsForXQueryConstantsError(constants: string, error?: NSDictionary<string, any>): NSArray<any>;
  objectsForXQueryError(error: string): NSArray<any>;
  setStringValueResolvingEntities(_: string, resolvingEntities: boolean): void;
}

declare class NSXMLParser extends NSObject {
  allowedExternalEntityURLs: Set<NSURL>;
  setAllowedExternalEntityURLs(_: Set<NSURL>)
  readonly columnNumber: number;
  delegate: NSXMLParserDelegate;
  setDelegate(_: NSXMLParserDelegate)
  externalEntityResolvingPolicy: XMLParser.ExternalEntityResolvingPolicy;
  setExternalEntityResolvingPolicy(_: XMLParser.ExternalEntityResolvingPolicy)
  readonly lineNumber: number;
  readonly parserError: Error;
  readonly publicID: string;
  shouldProcessNamespaces: boolean;
  setShouldProcessNamespaces(_: boolean)
  shouldReportNamespacePrefixes: boolean;
  setShouldReportNamespacePrefixes(_: boolean)
  shouldResolveExternalEntities: boolean;
  setShouldResolveExternalEntities(_: boolean)
  readonly systemID: string;
  abortParsing(): void;
  static createWithContentsOfURL(contentsOfURL: NSURL): this;
  static createWithData(data: Data): this;
  static createWithStream(stream: InputStream): this;
  parse(): boolean;
}

interface NSXMLParserDelegate extends NSObject {
  parserDidEndElementNamespaceURIQualifiedName?(_: XMLParser, didEndElement: string, namespaceURI?: string, qualifiedName?: string): void;
  parserDidEndMappingPrefix?(_: XMLParser, didEndMappingPrefix: string): void;
  parserDidStartElementNamespaceURIQualifiedNameAttributes?(_: XMLParser, didStartElement: string, namespaceURI?: string, qualifiedName?: string, attributes: NSDictionary<string, string>): void;
  parserDidStartMappingPrefixToURI?(_: XMLParser, didStartMappingPrefix: string, toURI: string): void;
  parserFoundAttributeDeclarationWithNameForElementTypeDefaultValue?(_: XMLParser, foundAttributeDeclarationWithName: string, forElement: string, type?: string, defaultValue?: string): void;
  parserFoundCDATA?(_: XMLParser, foundCDATA: Data): void;
  parserFoundCharacters?(_: XMLParser, foundCharacters: string): void;
  parserFoundComment?(_: XMLParser, foundComment: string): void;
  parserFoundElementDeclarationWithNameModel?(_: XMLParser, foundElementDeclarationWithName: string, model: string): void;
  parserFoundExternalEntityDeclarationWithNamePublicIDSystemID?(_: XMLParser, foundExternalEntityDeclarationWithName: string, publicID?: string, systemID?: string): void;
  parserFoundIgnorableWhitespace?(_: XMLParser, foundIgnorableWhitespace: string): void;
  parserFoundInternalEntityDeclarationWithNameValue?(_: XMLParser, foundInternalEntityDeclarationWithName: string, value?: string): void;
  parserFoundNotationDeclarationWithNamePublicIDSystemID?(_: XMLParser, foundNotationDeclarationWithName: string, publicID?: string, systemID?: string): void;
  parserFoundProcessingInstructionWithTargetData?(_: XMLParser, foundProcessingInstructionWithTarget: string, data?: string): void;
  parserFoundUnparsedEntityDeclarationWithNamePublicIDSystemIDNotationName?(_: XMLParser, foundUnparsedEntityDeclarationWithName: string, publicID?: string, systemID?: string, notationName?: string): void;
  parserParseErrorOccurred?(_: XMLParser, parseErrorOccurred: Error): void;
  parserResolveExternalEntityNameSystemID?(_: XMLParser, resolveExternalEntityName: string, systemID?: string): Data;
  parserValidationErrorOccurred?(_: XMLParser, validationErrorOccurred: Error): void;
  parserDidEndDocument?(_: XMLParser): void;
  parserDidStartDocument?(_: XMLParser): void;
}

declare var NSXMLParserDelegate: {
  prototype: NSXMLParserDelegate;
};

declare var NSXMLParserErrorDomain: string;

declare class NSXPCCoder extends NSCoder {
  readonly connection: NSXPCConnection;
  userInfo: NSObject;
  setUserInfo(_: NSObject)
  decodeXPCObjectOfTypeForKey(ofType: any, forKey: string): NSObject;
  encodeXPCObjectForKey(_: NSObject, forKey: string): void;
}

declare class NSXPCConnection extends NSObject implements NSXPCProxyCreating {
  static currentConnection(): NSXPCConnection;
  readonly auditSessionIdentifier: number;
  readonly effectiveGroupIdentifier: number;
  readonly effectiveUserIdentifier: number;
  readonly endpoint: NSXPCListenerEndpoint;
  exportedInterface: NSXPCInterface;
  setExportedInterface(_: NSXPCInterface)
  exportedObject: any;
  setExportedObject(_: any)
  interruptionHandler: () => void;
  setInterruptionHandler(_: () => void)
  invalidationHandler: () => void;
  setInvalidationHandler(_: () => void)
  readonly processIdentifier: number;
  remoteObjectInterface: NSXPCInterface;
  setRemoteObjectInterface(_: NSXPCInterface)
  readonly remoteObjectProxy: any;
  readonly serviceName: string;
  static createWithListenerEndpoint(listenerEndpoint: NSXPCListenerEndpoint): this;
  static createWithMachServiceNameOptions(machServiceName: string, options: NSXPCConnection.Options): this;
  static createWithServiceName(serviceName: string): this;
  invalidate(): void;
  remoteObjectProxyWithErrorHandler(_: (p1: Error) => void): any;
  resume(): void;
  scheduleSendBarrierBlock(_: () => void): void;
  suspend(): void;
  synchronousRemoteObjectProxyWithErrorHandler(_: (p1: Error) => void): any;
}


declare const NSXPCConnectionErrorMaximum: number;

declare const NSXPCConnectionErrorMinimum: number;

declare const NSXPCConnectionInterrupted: number;

declare const NSXPCConnectionInvalid: number;

declare const NSXPCConnectionReplyInvalid: number;
declare class NSXPCInterface extends NSObject {
  static interfaceWithProtocol(with_: any /* Protocol */): NSXPCInterface;
  protocol: any /* Protocol */;
  setProtocol(_: any /* Protocol */)
  XPCTypeForSelectorArgumentIndexOfReply(for_: string, argumentIndex: number, ofReply: boolean): any;
  classesForSelectorArgumentIndexOfReply(for_: string, argumentIndex: number, ofReply: boolean): Set<typeof NSObject>;
  interfaceForSelectorArgumentIndexOfReply(_: string, argumentIndex: number, ofReply: boolean): NSXPCInterface;
  setClassesWith_ForArgumentIndexOfReply(_: Set<typeof NSObject>, for_: string, argumentIndex: number, ofReply: boolean): void;
  setInterfaceForSelectorArgumentIndexOfReply(_: NSXPCInterface, for_: string, argumentIndex: number, ofReply: boolean): void;
  setXPCTypeForSelectorArgumentIndexOfReply(_: any, for_: string, argumentIndex: number, ofReply: boolean): void;
}

declare class NSXPCListener extends NSObject {
  static anonymousListener(): NSXPCListener;
  static serviceListener(): NSXPCListener;
  delegate: NSXPCListenerDelegate;
  setDelegate(_: NSXPCListenerDelegate)
  readonly endpoint: NSXPCListenerEndpoint;
  static createWithMachServiceName(machServiceName: string): this;
  invalidate(): void;
  resume(): void;
  suspend(): void;
}

interface NSXPCListenerDelegate extends NSObject {
  listenerShouldAcceptNewConnection?(_: NSXPCListener, shouldAcceptNewConnection: NSXPCConnection): boolean;
}

declare var NSXPCListenerDelegate: {
  prototype: NSXPCListenerDelegate;
};

declare class NSXPCListenerEndpoint extends NSObject implements NSSecureCoding {
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

interface NSXPCProxyCreating {
  remoteObjectProxy: any;
  remoteObjectProxyWithErrorHandler(_: (p1: Error) => void): any;
  synchronousRemoteObjectProxyWithErrorHandler?(_: (p1: Error) => void): any;
}

declare var NSXPCProxyCreating: {
  prototype: NSXPCProxyCreating;
};

declare var NSZeroPoint: NSPoint;

declare var NSZeroRect: NSRect;

declare var NSZeroSize: NSSize;

declare var NSZombieEnabled: boolean;


declare const NS_BigEndian: number;

declare const NS_LittleEndian: number;

declare const NS_UnknownByteOrder: number;
interface __ssFlags {
  delegateLearnsWords: number;
  delegateForgetsWords: number;
  busy: number;
  _reserved: number;
}

declare var __ssFlags: __ssFlags;

interface _expressionFlags {
  _evaluationBlocked: number;
  _reservedExpressionFlags: number;
}

declare var _expressionFlags: _expressionFlags;

interface _predicateFlags {
  _evaluationBlocked: number;
  _reservedPredicateFlags: number;
}

declare var _predicateFlags: _predicateFlags;

enum AlignmentOptions {
    MinXInward = 1,
    MinYInward = 2,
    MaxXInward = 4,
    MaxYInward = 8,
    WidthInward = 16,
    HeightInward = 32,
    MinXOutward = 256,
    MinYOutward = 512,
    MaxXOutward = 1024,
    MaxYOutward = 2048,
    WidthOutward = 4096,
    HeightOutward = 8192,
    MinXNearest = 65536,
    MinYNearest = 131072,
    MaxXNearest = 262144,
    MaxYNearest = 524288,
    WidthNearest = 1048576,
    HeightNearest = 2097152,
    RectFlipped = -9223372036854775808,
    AllEdgesInward = 15,
    AllEdgesOutward = 3840,
    AllEdgesNearest = 983040
}

module ByteCountFormatter {
  enum CountStyle {
    File = 0,
    Memory = 1,
    Decimal = 2,
    Binary = 3
  }
  enum Units {
    UseDefault = 0,
    UseBytes = 1,
    UseKB = 2,
    UseMB = 4,
    UseGB = 8,
    UseTB = 16,
    UsePB = 32,
    UseEB = 64,
    UseZB = 128,
    UseYBOrHigher = 65280,
    UseAll = 65535
  }
}

enum ComparisonResult {
    OrderedAscending = -1,
    OrderedSame = 0,
    OrderedDescending = 1
}

module DateComponentsFormatter {
  enum UnitsStyle {
    Positional = 0,
    Abbreviated = 1,
    Short = 2,
    Full = 3,
    SpellOut = 4,
    Brief = 5
  }
  enum ZeroFormattingBehavior {
    None = 0,
    Default = 1,
    DropLeading = 2,
    DropMiddle = 4,
    DropTrailing = 8,
    DropAll = 14,
    Pad = 65536
  }
}

module DateFormatter {
  enum Behavior {
    BehaviorDefault = 0,
    Behavior10_0 = 1000,
    Behavior10_4 = 1040
  }
  enum Style {
    NoStyle = 0,
    ShortStyle = 1,
    MediumStyle = 2,
    LongStyle = 3,
    FullStyle = 4
  }
}

module DateIntervalFormatter {
  enum Style {
    NoStyle = 0,
    ShortStyle = 1,
    MediumStyle = 2,
    LongStyle = 3,
    FullStyle = 4
  }
}

module DistributedNotificationCenter {
  enum Options {
    DeliverImmediately = 1,
    PostToAllSessions = 2
  }
  enum SuspensionBehavior {
    Drop = 1,
    Coalesce = 2,
    Hold = 3,
    DeliverImmediately = 4
  }
}

module EnergyFormatter {
  enum Unit {
    Joule = 11,
    Kilojoule = 14,
    Calorie = 1793,
    Kilocalorie = 1794
  }
}

module FileManager {
  enum DirectoryEnumerationOptions {
    SkipsSubdirectoryDescendants = 1,
    SkipsPackageDescendants = 2,
    SkipsHiddenFiles = 4,
    IncludesDirectoriesPostOrder = 8,
    ProducesRelativePathURLs = 16
  }
  enum ItemReplacementOptions {
    UsingNewMetadataOnly = 1,
    WithoutDeletingBackupItem = 2
  }
  enum SearchPathDirectory {
    ApplicationDirectory = 1,
    DemoApplicationDirectory = 2,
    DeveloperApplicationDirectory = 3,
    AdminApplicationDirectory = 4,
    LibraryDirectory = 5,
    DeveloperDirectory = 6,
    UserDirectory = 7,
    DocumentationDirectory = 8,
    DocumentDirectory = 9,
    CoreServiceDirectory = 10,
    AutosavedInformationDirectory = 11,
    DesktopDirectory = 12,
    CachesDirectory = 13,
    ApplicationSupportDirectory = 14,
    DownloadsDirectory = 15,
    InputMethodsDirectory = 16,
    MoviesDirectory = 17,
    MusicDirectory = 18,
    PicturesDirectory = 19,
    PrinterDescriptionDirectory = 20,
    SharedPublicDirectory = 21,
    PreferencePanesDirectory = 22,
    ApplicationScriptsDirectory = 23,
    ItemReplacementDirectory = 99,
    AllApplicationsDirectory = 100,
    AllLibrariesDirectory = 101,
    TrashDirectory = 102
  }
  enum SearchPathDomainMask {
    UserDomainMask = 1,
    LocalDomainMask = 2,
    NetworkDomainMask = 4,
    SystemDomainMask = 8,
    AllDomainsMask = 65535
  }
  enum URLRelationship {
    Contains = 0,
    Same = 1,
    Other = 2
  }
  enum UnmountOptions {
    AllPartitionsAndEjectDisk = 1,
    WithoutUI = 2
  }
  enum VolumeEnumerationOptions {
    SkipHiddenVolumes = 2,
    ProduceFileReferenceURLs = 4
  }
}

module FileWrapper {
  enum ReadingOptions {
    Immediate = 1,
    WithoutMapping = 2
  }
  enum WritingOptions {
    Atomic = 1,
    WithNameUpdating = 2
  }
}

module Formatter {
  enum Context {
    Unknown = 0,
    Dynamic = 1,
    Standalone = 2,
    ListItem = 3,
    BeginningOfSentence = 4,
    MiddleOfSentence = 5
  }
  enum UnitStyle {
    Short = 1,
    Medium = 2,
    Long = 3
  }
}

module HTTPCookie {
  enum AcceptPolicy {
    Always = 0,
    Never = 1,
    OnlyFromMainDocumentDomain = 2
  }
}

module ISO8601DateFormatter {
  enum Options {
    WithYear = 1,
    WithMonth = 2,
    WithWeekOfYear = 4,
    WithDay = 16,
    WithTime = 32,
    WithTimeZone = 64,
    WithSpaceBetweenDateAndTime = 128,
    WithDashSeparatorInDate = 256,
    WithColonSeparatorInTime = 512,
    WithColonSeparatorInTimeZone = 1024,
    WithFractionalSeconds = 2048,
    WithFullDate = 275,
    WithFullTime = 1632,
    WithInternetDateTime = 1907
  }
}

module JSONSerialization {
  enum ReadingOptions {
    MutableContainers = 1,
    MutableLeaves = 2,
    FragmentsAllowed = 4,
    AllowFragments = 4
  }
  enum WritingOptions {
    PrettyPrinted = 1,
    SortedKeys = 2,
    FragmentsAllowed = 4,
    WithoutEscapingSlashes = 8
  }
}

module LengthFormatter {
  enum Unit {
    Millimeter = 8,
    Centimeter = 9,
    Meter = 11,
    Kilometer = 14,
    Inch = 1281,
    Foot = 1282,
    Yard = 1283,
    Mile = 1284
  }
}

module MassFormatter {
  enum Unit {
    Gram = 11,
    Kilogram = 14,
    Ounce = 1537,
    Pound = 1538,
    Stone = 1539
  }
}

module MeasurementFormatter {
  enum UnitOptions {
    ProvidedUnit = 1,
    NaturalScale = 2,
    TemperatureWithoutUnit = 4
  }
}

module NSAppleEventDescriptor {
  enum SendOptions {
    NoReply = 1,
    QueueReply = 2,
    WaitForReply = 3,
    NeverInteract = 16,
    CanInteract = 32,
    AlwaysInteract = 48,
    CanSwitchLayer = 64,
    DontRecord = 4096,
    DontExecute = 8192,
    DontAnnotate = 65536,
    DefaultOptions = 35
  }
}

module NSAttributedString {
  enum EnumerationOptions {
    Reverse = 2,
    LongestEffectiveRangeNotRequired = 1048576
  }
}

module NSBackgroundActivityScheduler {
  enum Result {
    Finished = 1,
    Deferred = 2
  }
}

enum NSBinarySearchingOptions {
    FirstEqual = 256,
    LastEqual = 512,
    InsertionIndex = 1024
}

module NSCalendar {
  enum Options {
    WrapComponents = 1,
    MatchStrictly = 2,
    SearchBackwards = 4,
    MatchPreviousTimePreservingSmallerUnits = 256,
    MatchNextTimePreservingSmallerUnits = 512,
    MatchNextTime = 1024,
    MatchFirst = 4096,
    MatchLast = 8192
  }
  enum Unit {
    CalendarUnitEra = 2,
    CalendarUnitYear = 4,
    CalendarUnitMonth = 8,
    CalendarUnitDay = 16,
    CalendarUnitHour = 32,
    CalendarUnitMinute = 64,
    CalendarUnitSecond = 128,
    CalendarUnitWeekday = 512,
    CalendarUnitWeekdayOrdinal = 1024,
    CalendarUnitQuarter = 2048,
    CalendarUnitWeekOfMonth = 4096,
    CalendarUnitWeekOfYear = 8192,
    CalendarUnitYearForWeekOfYear = 16384,
    CalendarUnitNanosecond = 32768,
    CalendarUnitCalendar = 1048576,
    CalendarUnitTimeZone = 2097152,
    EraCalendarUnit = 2,
    YearCalendarUnit = 4,
    MonthCalendarUnit = 8,
    DayCalendarUnit = 16,
    HourCalendarUnit = 32,
    MinuteCalendarUnit = 64,
    SecondCalendarUnit = 128,
    WeekCalendarUnit = 256,
    WeekdayCalendarUnit = 512,
    WeekdayOrdinalCalendarUnit = 1024,
    QuarterCalendarUnit = 2048,
    WeekOfMonthCalendarUnit = 4096,
    WeekOfYearCalendarUnit = 8192,
    YearForWeekOfYearCalendarUnit = 16384,
    CalendarCalendarUnit = 1048576,
    TimeZoneCalendarUnit = 2097152
  }
}

module NSCoder {
  enum DecodingFailurePolicy {
    RaiseException = 0,
    SetErrorAndReturn = 1
  }
}

enum NSCollectionChangeType {
    Insert = 0,
    Remove = 1
}

module NSComparisonPredicate {
  enum Modifier {
    DirectPredicateModifier = 0,
    AllPredicateModifier = 1,
    AnyPredicateModifier = 2
  }
  enum Operator {
    LessThanPredicateOperatorType = 0,
    LessThanOrEqualToPredicateOperatorType = 1,
    GreaterThanPredicateOperatorType = 2,
    GreaterThanOrEqualToPredicateOperatorType = 3,
    EqualToPredicateOperatorType = 4,
    NotEqualToPredicateOperatorType = 5,
    MatchesPredicateOperatorType = 6,
    LikePredicateOperatorType = 7,
    BeginsWithPredicateOperatorType = 8,
    EndsWithPredicateOperatorType = 9,
    InPredicateOperatorType = 10,
    CustomSelectorPredicateOperatorType = 11,
    ContainsPredicateOperatorType = 99,
    BetweenPredicateOperatorType = 100
  }
  enum Options {
    CaseInsensitivePredicateOption = 1,
    DiacriticInsensitivePredicateOption = 2,
    NormalizedPredicateOption = 4
  }
}

module NSCompoundPredicate {
  enum LogicalType {
    NotPredicateType = 0,
    AndPredicateType = 1,
    OrPredicateType = 2
  }
}

module NSData {
  enum Base64DecodingOptions {
    IgnoreUnknownCharacters = 1
  }
  enum Base64EncodingOptions {
    Encoding64CharacterLineLength = 1,
    Encoding76CharacterLineLength = 2,
    EncodingEndLineWithCarriageReturn = 16,
    EncodingEndLineWithLineFeed = 32
  }
  enum CompressionAlgorithm {
    LZFSE = 0,
    LZ4 = 1,
    LZMA = 2,
    Zlib = 3
  }
  enum ReadingOptions {
    DataReadingMappedIfSafe = 1,
    DataReadingUncached = 2,
    DataReadingMappedAlways = 8,
    DataReadingMapped = 1,
    MappedRead = 1,
    UncachedRead = 2
  }
  enum SearchOptions {
    Backwards = 1,
    Anchored = 2
  }
  enum WritingOptions {
    DataWritingAtomic = 1,
    DataWritingWithoutOverwriting = 2,
    DataWritingFileProtectionNone = 268435456,
    DataWritingFileProtectionComplete = 536870912,
    DataWritingFileProtectionCompleteUnlessOpen = 805306368,
    DataWritingFileProtectionCompleteUntilFirstUserAuthentication = 1073741824,
    DataWritingFileProtectionMask = 4026531840,
    AtomicWrite = 1
  }
}

module NSDecimalNumber {
  enum CalculationError {
    NoError = 0,
    LossOfPrecision = 1,
    Underflow = 2,
    Overflow = 3,
    DivideByZero = 4
  }
  enum RoundingMode {
    Plain = 0,
    Down = 1,
    Up = 2,
    Bankers = 3
  }
}

enum NSEnumerationOptions {
    Concurrent = 1,
    Reverse = 2
}

module NSExpression {
  enum ExpressionType {
    ConstantValueExpressionType = 0,
    EvaluatedObjectExpressionType = 1,
    VariableExpressionType = 2,
    KeyPathExpressionType = 3,
    FunctionExpressionType = 4,
    UnionSetExpressionType = 5,
    IntersectSetExpressionType = 6,
    MinusSetExpressionType = 7,
    SubqueryExpressionType = 13,
    AggregateExpressionType = 14,
    AnyKeyExpressionType = 15,
    BlockExpressionType = 19,
    ConditionalExpressionType = 20
  }
}

module NSFileCoordinator {
  enum ReadingOptions {
    WithoutChanges = 1,
    ResolvesSymbolicLink = 2,
    ImmediatelyAvailableMetadataOnly = 4,
    ForUploading = 8
  }
  enum WritingOptions {
    ForDeleting = 1,
    ForMoving = 2,
    ForMerging = 4,
    ForReplacing = 8,
    ContentIndependentMetadataOnly = 16
  }
}

module NSFileVersion {
  enum AddingOptions {
    ByMoving = 1
  }
  enum ReplacingOptions {
    ByMoving = 1
  }
}

module NSItemProvider {
  enum ErrorCode {
    UnknownError = -1,
    ItemUnavailableError = -1000,
    UnexpectedValueClassError = -1100,
    UnavailableCoercionError = -1200
  }
}

enum NSItemProviderFileOptions {
    OpenInPlace = 1
}

enum NSItemProviderRepresentationVisibility {
    All = 0,
    Team = 1,
    Group = 2,
    OwnProcess = 3
}

enum NSKeyValueChange {
    Setting = 1,
    Insertion = 2,
    Removal = 3,
    Replacement = 4
}

enum NSKeyValueObservingOptions {
    New = 1,
    Old = 2,
    Initial = 4,
    Prior = 8
}

enum NSKeyValueSetMutationKind {
    UnionSetMutation = 1,
    MinusSetMutation = 2,
    IntersectSetMutation = 3,
    SetSetMutation = 4
}

module NSLinguisticTagger {
  enum Options {
    OmitWords = 1,
    OmitPunctuation = 2,
    OmitWhitespace = 4,
    OmitOther = 8,
    JoinNames = 16
  }
}

enum NSLinguisticTaggerUnit {
    Word = 0,
    Sentence = 1,
    Paragraph = 2,
    Document = 3
}

module NSLocale {
  enum LanguageDirection {
    Unknown = 0,
    LeftToRight = 1,
    RightToLeft = 2,
    TopToBottom = 3,
    BottomToTop = 4
  }
}

module NSMachPort {
  enum Options {
    DeallocateNone = 0,
    DeallocateSendRight = 1,
    DeallocateReceiveRight = 2
  }
}

module NSNetService {
  enum ErrorCode {
    UnknownError = -72000,
    CollisionError = -72001,
    NotFoundError = -72002,
    ActivityInProgress = -72003,
    BadArgumentError = -72004,
    CancelledError = -72005,
    InvalidError = -72006,
    TimeoutError = -72007
  }
  enum Options {
    NoAutoRename = 1,
    ListenForConnections = 2
  }
}

enum NSOrderedCollectionDifferenceCalculationOptions {
    OmitInsertedObjects = 1,
    OmitRemovedObjects = 2,
    InferMoves = 4
}

module NSPointerFunctions {
  enum Options {
    StrongMemory = 0,
    ZeroingWeakMemory = 1,
    OpaqueMemory = 2,
    MallocMemory = 3,
    MachVirtualMemory = 4,
    WeakMemory = 5,
    ObjectPersonality = 0,
    OpaquePersonality = 256,
    ObjectPointerPersonality = 512,
    CStringPersonality = 768,
    StructPersonality = 1024,
    IntegerPersonality = 1280,
    CopyIn = 65536
  }
}

module NSPositionalSpecifier {
  enum InsertionPosition {
    PositionAfter = 0,
    PositionBefore = 1,
    PositionBeginning = 2,
    PositionEnd = 3,
    PositionReplace = 4
  }
}

enum NSRectEdge {
    RectEdgeMinX = 0,
    RectEdgeMinY = 1,
    RectEdgeMaxX = 2,
    RectEdgeMaxY = 3,
    MinXEdge = 0,
    MinYEdge = 1,
    MaxXEdge = 2,
    MaxYEdge = 3
}

module NSRegularExpression {
  enum MatchingFlags {
    Progress = 1,
    Completed = 2,
    HitEnd = 4,
    RequiredEnd = 8,
    InternalError = 16
  }
  enum MatchingOptions {
    ReportProgress = 1,
    ReportCompletion = 2,
    Anchored = 4,
    WithTransparentBounds = 8,
    WithoutAnchoringBounds = 16
  }
  enum Options {
    CaseInsensitive = 1,
    AllowCommentsAndWhitespace = 2,
    IgnoreMetacharacters = 4,
    DotMatchesLineSeparators = 8,
    AnchorsMatchLines = 16,
    UseUnixLineSeparators = 32,
    UseUnicodeWordBoundaries = 64
  }
}

module NSRelativeSpecifier {
  enum RelativePosition {
    After = 0,
    Before = 1
  }
}

enum NSSaveOptions {
    Yes = 0,
    No = 1,
    Ask = 2
}

enum NSSortOptions {
    Concurrent = 1,
    Stable = 16
}

module NSSpecifierTest {
  enum TestComparisonOperation {
    EqualToComparison = 0,
    LessThanOrEqualToComparison = 1,
    LessThanComparison = 2,
    GreaterThanOrEqualToComparison = 3,
    GreaterThanComparison = 4,
    BeginsWithComparison = 5,
    EndsWithComparison = 6,
    ContainsComparison = 7
  }
}

module NSString {
  enum CompareOptions {
    CaseInsensitiveSearch = 1,
    LiteralSearch = 2,
    BackwardsSearch = 4,
    AnchoredSearch = 8,
    NumericSearch = 64,
    DiacriticInsensitiveSearch = 128,
    WidthInsensitiveSearch = 256,
    ForcedOrderingSearch = 512,
    RegularExpressionSearch = 1024
  }
  enum EncodingConversionOptions {
    AllowLossy = 1,
    ExternalRepresentation = 2
  }
  enum EnumerationOptions {
    ByLines = 0,
    ByParagraphs = 1,
    ByComposedCharacterSequences = 2,
    ByWords = 3,
    BySentences = 4,
    Reverse = 256,
    SubstringNotRequired = 512,
    Localized = 1024
  }
}

module NSTextCheckingResult {
  enum CheckingType {
    Orthography = 1,
    Spelling = 2,
    Grammar = 4,
    Date = 8,
    Address = 16,
    Link = 32,
    Quote = 64,
    Dash = 128,
    Replacement = 256,
    Correction = 512,
    RegularExpression = 1024,
    PhoneNumber = 2048,
    TransitInformation = 4096
  }
}

module NSTimeZone {
  enum NameStyle {
    Standard = 0,
    ShortStandard = 1,
    DaylightSaving = 2,
    ShortDaylightSaving = 3,
    Generic = 4,
    ShortGeneric = 5
  }
}

module NSURL {
  enum BookmarkCreationOptions {
    PreferFileIDResolution = 256,
    MinimalBookmark = 512,
    SuitableForBookmarkFile = 1024,
    WithSecurityScope = 2048,
    SecurityScopeAllowOnlyReadAccess = 4096
  }
  enum BookmarkResolutionOptions {
    WithoutUI = 256,
    WithoutMounting = 512,
    WithSecurityScope = 1024
  }
}

enum NSURLErrorNetworkUnavailableReason {
    Cellular = 0,
    Expensive = 1,
    Constrained = 2
}

module NSURLHandle {
  enum Status {
    NotLoaded = 0,
    LoadSucceeded = 1,
    LoadInProgress = 2,
    LoadFailed = 3
  }
}

module NSURLRequest {
  enum CachePolicy {
    UseProtocolCachePolicy = 0,
    ReloadIgnoringLocalCacheData = 1,
    ReloadIgnoringLocalAndRemoteCacheData = 4,
    ReloadIgnoringCacheData = 1,
    ReturnCacheDataElseLoad = 2,
    ReturnCacheDataDontLoad = 3,
    ReloadRevalidatingCacheData = 5
  }
  enum NetworkServiceType {
    NetworkServiceTypeDefault = 0,
    NetworkServiceTypeVoIP = 1,
    NetworkServiceTypeVideo = 2,
    NetworkServiceTypeBackground = 3,
    NetworkServiceTypeVoice = 4,
    NetworkServiceTypeResponsiveData = 6,
    NetworkServiceTypeAVStreaming = 8,
    NetworkServiceTypeResponsiveAV = 9,
    NetworkServiceTypeCallSignaling = 11
  }
}

enum NSURLSessionDelayedRequestDisposition {
    ContinueLoading = 0,
    UseNewRequest = 1,
    Cancel = 2
}

enum NSURLSessionWebSocketMessageType {
    Data = 0,
    String = 1
}

module NSUserNotification {
  enum ActivationType {
    None = 0,
    ContentsClicked = 1,
    ActionButtonClicked = 2,
    Replied = 3,
    AdditionalActionClicked = 4
  }
}

module NSWhoseSpecifier {
  enum SubelementIdentifier {
    IndexSubelement = 0,
    EverySubelement = 1,
    MiddleSubelement = 2,
    RandomSubelement = 3,
    NoSubelement = 4
  }
}

module NSXPCConnection {
  enum Options {
    Privileged = 4096
  }
}

module NotificationQueue {
  enum NotificationCoalescing {
    NoCoalescing = 0,
    CoalescingOnName = 1,
    CoalescingOnSender = 2
  }
  enum PostingStyle {
    WhenIdle = 1,
    ASAP = 2,
    Now = 3
  }
}

module NumberFormatter {
  enum Behavior {
    BehaviorDefault = 0,
    Behavior10_0 = 1000,
    Behavior10_4 = 1040
  }
  enum PadPosition {
    BeforePrefix = 0,
    AfterPrefix = 1,
    BeforeSuffix = 2,
    AfterSuffix = 3
  }
  enum RoundingMode {
    Ceiling = 0,
    Floor = 1,
    Down = 2,
    Up = 3,
    HalfEven = 4,
    HalfDown = 5,
    HalfUp = 6
  }
  enum Style {
    NoStyle = 0,
    DecimalStyle = 1,
    CurrencyStyle = 2,
    PercentStyle = 3,
    ScientificStyle = 4,
    SpellOutStyle = 5,
    OrdinalStyle = 6,
    CurrencyISOCodeStyle = 8,
    CurrencyPluralStyle = 9,
    CurrencyAccountingStyle = 10
  }
}

module Operation {
  enum QueuePriority {
    VeryLow = -8,
    Low = -4,
    Normal = 0,
    High = 4,
    VeryHigh = 8
  }
}

module PersonNameComponentsFormatter {
  enum Options {
    Phonetic = 2
  }
  enum Style {
    Default = 0,
    Short = 1,
    Medium = 2,
    Long = 3,
    Abbreviated = 4
  }
}

module Process {
  enum TerminationReason {
    Exit = 1,
    UncaughtSignal = 2
  }
}

module ProcessInfo {
  enum ActivityOptions {
    IdleDisplaySleepDisabled = 1099511627776,
    IdleSystemSleepDisabled = 1048576,
    SuddenTerminationDisabled = 16384,
    AutomaticTerminationDisabled = 32768,
    UserInitiated = 16777215,
    UserInitiatedAllowingIdleSystemSleep = 15728639,
    Background = 255,
    LatencyCritical = 1095216660480
  }
  enum ThermalState {
    Nominal = 0,
    Fair = 1,
    Serious = 2,
    Critical = 3
  }
}

module PropertyListSerialization {
  enum MutabilityOptions {
    Immutable = 0,
    MutableContainers = 1,
    MutableContainersAndLeaves = 2
  }
  enum PropertyListFormat {
    OpenStepFormat = 1,
    XMLFormat_v1_0 = 100,
    BinaryFormat_v1_0 = 200
  }
}

enum QualityOfService {
    UserInteractive = 33,
    UserInitiated = 25,
    Utility = 17,
    Background = 9,
    Default = -1
}

module RelativeDateTimeFormatter {
  enum DateTimeStyle {
    Numeric = 0,
    Named = 1
  }
  enum UnitsStyle {
    Full = 0,
    SpellOut = 1,
    Short = 2,
    Abbreviated = 3
  }
}

module Stream {
  enum Event {
    None = 0,
    OpenCompleted = 1,
    HasBytesAvailable = 2,
    HasSpaceAvailable = 4,
    ErrorOccurred = 8,
    EndEncountered = 16
  }
  enum Status {
    NotOpen = 0,
    Opening = 1,
    Open = 2,
    Reading = 3,
    Writing = 4,
    AtEnd = 5,
    Closed = 6,
    Error = 7
  }
}

module URLCache {
  enum StoragePolicy {
    Allowed = 0,
    AllowedInMemoryOnly = 1,
    NotAllowed = 2
  }
}

module URLCredential {
  enum Persistence {
    None = 0,
    ForSession = 1,
    Permanent = 2,
    Synchronizable = 3
  }
}

module URLSession {
  enum AuthChallengeDisposition {
    UseCredential = 0,
    PerformDefaultHandling = 1,
    CancelAuthenticationChallenge = 2,
    RejectProtectionSpace = 3
  }
  enum ResponseDisposition {
    Cancel = 0,
    Allow = 1,
    BecomeDownload = 2,
    BecomeStream = 3
  }
}

module URLSessionTask {
  enum State {
    Running = 0,
    Suspended = 1,
    Canceling = 2,
    Completed = 3
  }
}

module URLSessionTaskMetrics {
  enum ResourceFetchType {
    Unknown = 0,
    NetworkLoad = 1,
    ServerPush = 2,
    LocalCache = 3
  }
}

module URLSessionWebSocketTask {
  enum CloseCode {
    Invalid = 0,
    NormalClosure = 1000,
    GoingAway = 1001,
    ProtocolError = 1002,
    UnsupportedData = 1003,
    NoStatusReceived = 1005,
    AbnormalClosure = 1006,
    InvalidFramePayloadData = 1007,
    PolicyViolation = 1008,
    MessageTooBig = 1009,
    MandatoryExtensionMissing = 1010,
    InternalServerError = 1011,
    TLSHandshakeFailure = 1015
  }
}

module XMLDTDNode {
  enum DTDKind {
    EntityGeneralKind = 1,
    EntityParsedKind = 2,
    EntityUnparsedKind = 3,
    EntityParameterKind = 4,
    EntityPredefined = 5,
    AttributeCDATAKind = 6,
    AttributeIDKind = 7,
    AttributeIDRefKind = 8,
    AttributeIDRefsKind = 9,
    AttributeEntityKind = 10,
    AttributeEntitiesKind = 11,
    AttributeNMTokenKind = 12,
    AttributeNMTokensKind = 13,
    AttributeEnumerationKind = 14,
    AttributeNotationKind = 15,
    ElementDeclarationUndefinedKind = 16,
    ElementDeclarationEmptyKind = 17,
    ElementDeclarationAnyKind = 18,
    ElementDeclarationMixedKind = 19,
    ElementDeclarationElementKind = 20
  }
}

module XMLDocument {
  enum ContentKind {
    XMLKind = 0,
    XHTMLKind = 1,
    HTMLKind = 2,
    TextKind = 3
  }
}

module XMLNode {
  enum Kind {
    InvalidKind = 0,
    DocumentKind = 1,
    ElementKind = 2,
    AttributeKind = 3,
    NamespaceKind = 4,
    ProcessingInstructionKind = 5,
    CommentKind = 6,
    TextKind = 7,
    DTDKind = 8,
    EntityDeclarationKind = 9,
    AttributeDeclarationKind = 10,
    ElementDeclarationKind = 11,
    NotationDeclarationKind = 12
  }
  enum Options {
    NodeOptionsNone = 0,
    NodeIsCDATA = 1,
    NodeExpandEmptyElement = 2,
    NodeCompactEmptyElement = 4,
    NodeUseSingleQuotes = 8,
    NodeUseDoubleQuotes = 16,
    NodeNeverEscapeContents = 32,
    DocumentTidyHTML = 512,
    DocumentTidyXML = 1024,
    DocumentValidate = 8192,
    NodeLoadExternalEntitiesAlways = 16384,
    NodeLoadExternalEntitiesSameOriginOnly = 32768,
    NodeLoadExternalEntitiesNever = 524288,
    DocumentXInclude = 65536,
    NodePrettyPrint = 131072,
    DocumentIncludeContentTypeDeclaration = 262144,
    NodePreserveNamespaceOrder = 1048576,
    NodePreserveAttributeOrder = 2097152,
    NodePreserveEntities = 4194304,
    NodePreservePrefixes = 8388608,
    NodePreserveCDATA = 16777216,
    NodePreserveWhitespace = 33554432,
    NodePreserveDTD = 67108864,
    NodePreserveCharacterReferences = 134217728,
    NodePromoteSignificantWhitespace = 268435456,
    NodePreserveEmptyElements = 6,
    NodePreserveQuotes = 24,
    NodePreserveAll = 4293918750
  }
}

module XMLParser {
  enum ErrorCode {
    InternalError = 1,
    OutOfMemoryError = 2,
    DocumentStartError = 3,
    EmptyDocumentError = 4,
    PrematureDocumentEndError = 5,
    InvalidHexCharacterRefError = 6,
    InvalidDecimalCharacterRefError = 7,
    InvalidCharacterRefError = 8,
    InvalidCharacterError = 9,
    CharacterRefAtEOFError = 10,
    CharacterRefInPrologError = 11,
    CharacterRefInEpilogError = 12,
    CharacterRefInDTDError = 13,
    EntityRefAtEOFError = 14,
    EntityRefInPrologError = 15,
    EntityRefInEpilogError = 16,
    EntityRefInDTDError = 17,
    ParsedEntityRefAtEOFError = 18,
    ParsedEntityRefInPrologError = 19,
    ParsedEntityRefInEpilogError = 20,
    ParsedEntityRefInInternalSubsetError = 21,
    EntityReferenceWithoutNameError = 22,
    EntityReferenceMissingSemiError = 23,
    ParsedEntityRefNoNameError = 24,
    ParsedEntityRefMissingSemiError = 25,
    UndeclaredEntityError = 26,
    UnparsedEntityError = 28,
    EntityIsExternalError = 29,
    EntityIsParameterError = 30,
    UnknownEncodingError = 31,
    EncodingNotSupportedError = 32,
    StringNotStartedError = 33,
    StringNotClosedError = 34,
    NamespaceDeclarationError = 35,
    EntityNotStartedError = 36,
    EntityNotFinishedError = 37,
    LessThanSymbolInAttributeError = 38,
    AttributeNotStartedError = 39,
    AttributeNotFinishedError = 40,
    AttributeHasNoValueError = 41,
    AttributeRedefinedError = 42,
    LiteralNotStartedError = 43,
    LiteralNotFinishedError = 44,
    CommentNotFinishedError = 45,
    ProcessingInstructionNotStartedError = 46,
    ProcessingInstructionNotFinishedError = 47,
    NotationNotStartedError = 48,
    NotationNotFinishedError = 49,
    AttributeListNotStartedError = 50,
    AttributeListNotFinishedError = 51,
    MixedContentDeclNotStartedError = 52,
    MixedContentDeclNotFinishedError = 53,
    ElementContentDeclNotStartedError = 54,
    ElementContentDeclNotFinishedError = 55,
    XMLDeclNotStartedError = 56,
    XMLDeclNotFinishedError = 57,
    ConditionalSectionNotStartedError = 58,
    ConditionalSectionNotFinishedError = 59,
    ExternalSubsetNotFinishedError = 60,
    DOCTYPEDeclNotFinishedError = 61,
    MisplacedCDATAEndStringError = 62,
    CDATANotFinishedError = 63,
    MisplacedXMLDeclarationError = 64,
    SpaceRequiredError = 65,
    SeparatorRequiredError = 66,
    NMTOKENRequiredError = 67,
    NAMERequiredError = 68,
    PCDATARequiredError = 69,
    URIRequiredError = 70,
    PublicIdentifierRequiredError = 71,
    LTRequiredError = 72,
    GTRequiredError = 73,
    LTSlashRequiredError = 74,
    EqualExpectedError = 75,
    TagNameMismatchError = 76,
    UnfinishedTagError = 77,
    StandaloneValueError = 78,
    InvalidEncodingNameError = 79,
    CommentContainsDoubleHyphenError = 80,
    InvalidEncodingError = 81,
    ExternalStandaloneEntityError = 82,
    InvalidConditionalSectionError = 83,
    EntityValueRequiredError = 84,
    NotWellBalancedError = 85,
    ExtraContentError = 86,
    InvalidCharacterInEntityError = 87,
    ParsedEntityRefInInternalError = 88,
    EntityRefLoopError = 89,
    EntityBoundaryError = 90,
    InvalidURIError = 91,
    URIFragmentError = 92,
    NoDTDError = 94,
    DelegateAbortedParseError = 512
  }
  enum ExternalEntityResolvingPolicy {
    ResolveExternalEntitiesNever = 0,
    ResolveExternalEntitiesNoNetwork = 1,
    ResolveExternalEntitiesSameOriginOnly = 2,
    ResolveExternalEntitiesAlways = 3
  }
}

