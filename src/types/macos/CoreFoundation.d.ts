globalThis.CFCalendarUnit = globalThis.CFCalendarUnit || {};

globalThis.CFCalendarUnit = {
    kCFCalendarUnitEra: 2,
    kCFCalendarUnitYear: 4,
    kCFCalendarUnitMonth: 8,
    kCFCalendarUnitDay: 16,
    kCFCalendarUnitHour: 32,
    kCFCalendarUnitMinute: 64,
    kCFCalendarUnitSecond: 128,
    kCFCalendarUnitWeek: 256,
    kCFCalendarUnitWeekday: 512,
    kCFCalendarUnitWeekdayOrdinal: 1024,
    kCFCalendarUnitQuarter: 2048,
    kCFCalendarUnitWeekOfMonth: 4096,
    kCFCalendarUnitWeekOfYear: 8192,
    kCFCalendarUnitYearForWeekOfYear: 16384,
    '2': 'kCFCalendarUnitEra',
    '4': 'kCFCalendarUnitYear',
    '8': 'kCFCalendarUnitMonth',
    '16': 'kCFCalendarUnitDay',
    '32': 'kCFCalendarUnitHour',
    '64': 'kCFCalendarUnitMinute',
    '128': 'kCFCalendarUnitSecond',
    '256': 'kCFCalendarUnitWeek',
    '512': 'kCFCalendarUnitWeekday',
    '1024': 'kCFCalendarUnitWeekdayOrdinal',
    '2048': 'kCFCalendarUnitQuarter',
    '4096': 'kCFCalendarUnitWeekOfMonth',
    '8192': 'kCFCalendarUnitWeekOfYear',
    '16384': 'kCFCalendarUnitYearForWeekOfYear'
}

globalThis.CFCharacterSetPredefinedSet = globalThis.CFCharacterSetPredefinedSet || {};

globalThis.CFCharacterSetPredefinedSet = {
    kCFCharacterSetControl: 1,
    kCFCharacterSetWhitespace: 2,
    kCFCharacterSetWhitespaceAndNewline: 3,
    kCFCharacterSetDecimalDigit: 4,
    kCFCharacterSetLetter: 5,
    kCFCharacterSetLowercaseLetter: 6,
    kCFCharacterSetUppercaseLetter: 7,
    kCFCharacterSetNonBase: 8,
    kCFCharacterSetDecomposable: 9,
    kCFCharacterSetAlphaNumeric: 10,
    kCFCharacterSetPunctuation: 11,
    kCFCharacterSetCapitalizedLetter: 13,
    kCFCharacterSetSymbol: 14,
    kCFCharacterSetNewline: 15,
    kCFCharacterSetIllegal: 12,
    '1': 'kCFCharacterSetControl',
    '2': 'kCFCharacterSetWhitespace',
    '3': 'kCFCharacterSetWhitespaceAndNewline',
    '4': 'kCFCharacterSetDecimalDigit',
    '5': 'kCFCharacterSetLetter',
    '6': 'kCFCharacterSetLowercaseLetter',
    '7': 'kCFCharacterSetUppercaseLetter',
    '8': 'kCFCharacterSetNonBase',
    '9': 'kCFCharacterSetDecomposable',
    '10': 'kCFCharacterSetAlphaNumeric',
    '11': 'kCFCharacterSetPunctuation',
    '13': 'kCFCharacterSetCapitalizedLetter',
    '14': 'kCFCharacterSetSymbol',
    '15': 'kCFCharacterSetNewline',
    '12': 'kCFCharacterSetIllegal'
}

globalThis.CFComparisonResult = globalThis.CFComparisonResult || {};

globalThis.CFComparisonResult = {
    kCFCompareLessThan: -1,
    kCFCompareEqualTo: 0,
    kCFCompareGreaterThan: 1,
    '-1': 'kCFCompareLessThan',
    '0': 'kCFCompareEqualTo',
    '1': 'kCFCompareGreaterThan'
}

globalThis.CFDataSearchFlags = globalThis.CFDataSearchFlags || {};

globalThis.CFDataSearchFlags = {
    kCFDataSearchBackwards: 1,
    kCFDataSearchAnchored: 2,
    '1': 'kCFDataSearchBackwards',
    '2': 'kCFDataSearchAnchored'
}

globalThis.CFDateFormatterStyle = globalThis.CFDateFormatterStyle || {};

globalThis.CFDateFormatterStyle = {
    kCFDateFormatterNoStyle: 0,
    kCFDateFormatterShortStyle: 1,
    kCFDateFormatterMediumStyle: 2,
    kCFDateFormatterLongStyle: 3,
    kCFDateFormatterFullStyle: 4,
    '0': 'kCFDateFormatterNoStyle',
    '1': 'kCFDateFormatterShortStyle',
    '2': 'kCFDateFormatterMediumStyle',
    '3': 'kCFDateFormatterLongStyle',
    '4': 'kCFDateFormatterFullStyle'
}

globalThis.CFFileSecurityClearOptions = globalThis.CFFileSecurityClearOptions || {};

globalThis.CFFileSecurityClearOptions = {
    kCFFileSecurityClearOwner: 1,
    kCFFileSecurityClearGroup: 2,
    kCFFileSecurityClearMode: 4,
    kCFFileSecurityClearOwnerUUID: 8,
    kCFFileSecurityClearGroupUUID: 16,
    kCFFileSecurityClearAccessControlList: 32,
    '1': 'kCFFileSecurityClearOwner',
    '2': 'kCFFileSecurityClearGroup',
    '4': 'kCFFileSecurityClearMode',
    '8': 'kCFFileSecurityClearOwnerUUID',
    '16': 'kCFFileSecurityClearGroupUUID',
    '32': 'kCFFileSecurityClearAccessControlList'
}

globalThis.CFGregorianUnitFlags = globalThis.CFGregorianUnitFlags || {};

globalThis.CFGregorianUnitFlags = {
    kCFGregorianUnitsYears: 1,
    kCFGregorianUnitsMonths: 2,
    kCFGregorianUnitsDays: 4,
    kCFGregorianUnitsHours: 8,
    kCFGregorianUnitsMinutes: 16,
    kCFGregorianUnitsSeconds: 32,
    kCFGregorianAllUnits: 16777215,
    '1': 'kCFGregorianUnitsYears',
    '2': 'kCFGregorianUnitsMonths',
    '4': 'kCFGregorianUnitsDays',
    '8': 'kCFGregorianUnitsHours',
    '16': 'kCFGregorianUnitsMinutes',
    '32': 'kCFGregorianUnitsSeconds',
    '16777215': 'kCFGregorianAllUnits'
}

globalThis.CFISO8601DateFormatOptions = globalThis.CFISO8601DateFormatOptions || {};

globalThis.CFISO8601DateFormatOptions = {
    kCFISO8601DateFormatWithYear: 1,
    kCFISO8601DateFormatWithMonth: 2,
    kCFISO8601DateFormatWithWeekOfYear: 4,
    kCFISO8601DateFormatWithDay: 16,
    kCFISO8601DateFormatWithTime: 32,
    kCFISO8601DateFormatWithTimeZone: 64,
    kCFISO8601DateFormatWithSpaceBetweenDateAndTime: 128,
    kCFISO8601DateFormatWithDashSeparatorInDate: 256,
    kCFISO8601DateFormatWithColonSeparatorInTime: 512,
    kCFISO8601DateFormatWithColonSeparatorInTimeZone: 1024,
    kCFISO8601DateFormatWithFractionalSeconds: 2048,
    kCFISO8601DateFormatWithFullDate: 275,
    kCFISO8601DateFormatWithFullTime: 1632,
    kCFISO8601DateFormatWithInternetDateTime: 1907,
    '1': 'kCFISO8601DateFormatWithYear',
    '2': 'kCFISO8601DateFormatWithMonth',
    '4': 'kCFISO8601DateFormatWithWeekOfYear',
    '16': 'kCFISO8601DateFormatWithDay',
    '32': 'kCFISO8601DateFormatWithTime',
    '64': 'kCFISO8601DateFormatWithTimeZone',
    '128': 'kCFISO8601DateFormatWithSpaceBetweenDateAndTime',
    '256': 'kCFISO8601DateFormatWithDashSeparatorInDate',
    '512': 'kCFISO8601DateFormatWithColonSeparatorInTime',
    '1024': 'kCFISO8601DateFormatWithColonSeparatorInTimeZone',
    '2048': 'kCFISO8601DateFormatWithFractionalSeconds',
    '275': 'kCFISO8601DateFormatWithFullDate',
    '1632': 'kCFISO8601DateFormatWithFullTime',
    '1907': 'kCFISO8601DateFormatWithInternetDateTime'
}

globalThis.CFLocaleLanguageDirection = globalThis.CFLocaleLanguageDirection || {};

globalThis.CFLocaleLanguageDirection = {
    kCFLocaleLanguageDirectionUnknown: 0,
    kCFLocaleLanguageDirectionLeftToRight: 1,
    kCFLocaleLanguageDirectionRightToLeft: 2,
    kCFLocaleLanguageDirectionTopToBottom: 3,
    kCFLocaleLanguageDirectionBottomToTop: 4,
    '0': 'kCFLocaleLanguageDirectionUnknown',
    '1': 'kCFLocaleLanguageDirectionLeftToRight',
    '2': 'kCFLocaleLanguageDirectionRightToLeft',
    '3': 'kCFLocaleLanguageDirectionTopToBottom',
    '4': 'kCFLocaleLanguageDirectionBottomToTop'
}

globalThis.CFNotificationSuspensionBehavior = globalThis.CFNotificationSuspensionBehavior || {};

globalThis.CFNotificationSuspensionBehavior = {
    Drop: 1,
    Coalesce: 2,
    Hold: 3,
    DeliverImmediately: 4,
    '1': 'Drop',
    '2': 'Coalesce',
    '3': 'Hold',
    '4': 'DeliverImmediately'
}

globalThis.CFNumberFormatterOptionFlags = globalThis.CFNumberFormatterOptionFlags || {};

globalThis.CFNumberFormatterOptionFlags = {
    kCFNumberFormatterParseIntegersOnly: 1,
    '1': 'kCFNumberFormatterParseIntegersOnly'
}

globalThis.CFNumberFormatterPadPosition = globalThis.CFNumberFormatterPadPosition || {};

globalThis.CFNumberFormatterPadPosition = {
    kCFNumberFormatterPadBeforePrefix: 0,
    kCFNumberFormatterPadAfterPrefix: 1,
    kCFNumberFormatterPadBeforeSuffix: 2,
    kCFNumberFormatterPadAfterSuffix: 3,
    '0': 'kCFNumberFormatterPadBeforePrefix',
    '1': 'kCFNumberFormatterPadAfterPrefix',
    '2': 'kCFNumberFormatterPadBeforeSuffix',
    '3': 'kCFNumberFormatterPadAfterSuffix'
}

globalThis.CFNumberFormatterRoundingMode = globalThis.CFNumberFormatterRoundingMode || {};

globalThis.CFNumberFormatterRoundingMode = {
    kCFNumberFormatterRoundCeiling: 0,
    kCFNumberFormatterRoundFloor: 1,
    kCFNumberFormatterRoundDown: 2,
    kCFNumberFormatterRoundUp: 3,
    kCFNumberFormatterRoundHalfEven: 4,
    kCFNumberFormatterRoundHalfDown: 5,
    kCFNumberFormatterRoundHalfUp: 6,
    '0': 'kCFNumberFormatterRoundCeiling',
    '1': 'kCFNumberFormatterRoundFloor',
    '2': 'kCFNumberFormatterRoundDown',
    '3': 'kCFNumberFormatterRoundUp',
    '4': 'kCFNumberFormatterRoundHalfEven',
    '5': 'kCFNumberFormatterRoundHalfDown',
    '6': 'kCFNumberFormatterRoundHalfUp'
}

globalThis.CFNumberFormatterStyle = globalThis.CFNumberFormatterStyle || {};

globalThis.CFNumberFormatterStyle = {
    kCFNumberFormatterNoStyle: 0,
    kCFNumberFormatterDecimalStyle: 1,
    kCFNumberFormatterCurrencyStyle: 2,
    kCFNumberFormatterPercentStyle: 3,
    kCFNumberFormatterScientificStyle: 4,
    kCFNumberFormatterSpellOutStyle: 5,
    kCFNumberFormatterOrdinalStyle: 6,
    kCFNumberFormatterCurrencyISOCodeStyle: 8,
    kCFNumberFormatterCurrencyPluralStyle: 9,
    kCFNumberFormatterCurrencyAccountingStyle: 10,
    '0': 'kCFNumberFormatterNoStyle',
    '1': 'kCFNumberFormatterDecimalStyle',
    '2': 'kCFNumberFormatterCurrencyStyle',
    '3': 'kCFNumberFormatterPercentStyle',
    '4': 'kCFNumberFormatterScientificStyle',
    '5': 'kCFNumberFormatterSpellOutStyle',
    '6': 'kCFNumberFormatterOrdinalStyle',
    '8': 'kCFNumberFormatterCurrencyISOCodeStyle',
    '9': 'kCFNumberFormatterCurrencyPluralStyle',
    '10': 'kCFNumberFormatterCurrencyAccountingStyle'
}

globalThis.CFNumberType = globalThis.CFNumberType || {};

globalThis.CFNumberType = {
    kCFNumberSInt8Type: 1,
    kCFNumberSInt16Type: 2,
    kCFNumberSInt32Type: 3,
    kCFNumberSInt64Type: 4,
    kCFNumberFloat32Type: 5,
    kCFNumberFloat64Type: 6,
    kCFNumberCharType: 7,
    kCFNumberShortType: 8,
    kCFNumberIntType: 9,
    kCFNumberLongType: 10,
    kCFNumberLongLongType: 11,
    kCFNumberFloatType: 12,
    kCFNumberDoubleType: 13,
    kCFNumberCFIndexType: 14,
    kCFNumberNSIntegerType: 15,
    kCFNumberCGFloatType: 16,
    kCFNumberMaxType: 16,
    '1': 'kCFNumberSInt8Type',
    '2': 'kCFNumberSInt16Type',
    '3': 'kCFNumberSInt32Type',
    '4': 'kCFNumberSInt64Type',
    '5': 'kCFNumberFloat32Type',
    '6': 'kCFNumberFloat64Type',
    '7': 'kCFNumberCharType',
    '8': 'kCFNumberShortType',
    '9': 'kCFNumberIntType',
    '10': 'kCFNumberLongType',
    '11': 'kCFNumberLongLongType',
    '12': 'kCFNumberFloatType',
    '13': 'kCFNumberDoubleType',
    '14': 'kCFNumberCFIndexType',
    '15': 'kCFNumberNSIntegerType',
    '16': 'kCFNumberCGFloatType',
    '16': 'kCFNumberMaxType'
}

globalThis.CFPropertyListFormat = globalThis.CFPropertyListFormat || {};

globalThis.CFPropertyListFormat = {
    kCFPropertyListOpenStepFormat: 1,
    kCFPropertyListXMLFormat_v1_0: 100,
    kCFPropertyListBinaryFormat_v1_0: 200,
    '1': 'kCFPropertyListOpenStepFormat',
    '100': 'kCFPropertyListXMLFormat_v1_0',
    '200': 'kCFPropertyListBinaryFormat_v1_0'
}

globalThis.CFPropertyListMutabilityOptions = globalThis.CFPropertyListMutabilityOptions || {};

globalThis.CFPropertyListMutabilityOptions = {
    kCFPropertyListImmutable: 0,
    kCFPropertyListMutableContainers: 1,
    kCFPropertyListMutableContainersAndLeaves: 2,
    '0': 'kCFPropertyListImmutable',
    '1': 'kCFPropertyListMutableContainers',
    '2': 'kCFPropertyListMutableContainersAndLeaves'
}

globalThis.CFRunLoopActivity = globalThis.CFRunLoopActivity || {};

globalThis.CFRunLoopActivity = {
    kCFRunLoopEntry: 1,
    kCFRunLoopBeforeTimers: 2,
    kCFRunLoopBeforeSources: 4,
    kCFRunLoopBeforeWaiting: 32,
    kCFRunLoopAfterWaiting: 64,
    kCFRunLoopExit: 128,
    kCFRunLoopAllActivities: 268435455,
    '1': 'kCFRunLoopEntry',
    '2': 'kCFRunLoopBeforeTimers',
    '4': 'kCFRunLoopBeforeSources',
    '32': 'kCFRunLoopBeforeWaiting',
    '64': 'kCFRunLoopAfterWaiting',
    '128': 'kCFRunLoopExit',
    '268435455': 'kCFRunLoopAllActivities'
}

globalThis.CFRunLoopRunResult = globalThis.CFRunLoopRunResult || {};

globalThis.CFRunLoopRunResult = {
    kCFRunLoopRunFinished: 1,
    kCFRunLoopRunStopped: 2,
    kCFRunLoopRunTimedOut: 3,
    kCFRunLoopRunHandledSource: 4,
    '1': 'kCFRunLoopRunFinished',
    '2': 'kCFRunLoopRunStopped',
    '3': 'kCFRunLoopRunTimedOut',
    '4': 'kCFRunLoopRunHandledSource'
}

globalThis.CFSocketCallBackType = globalThis.CFSocketCallBackType || {};

globalThis.CFSocketCallBackType = {
    kCFSocketNoCallBack: 0,
    kCFSocketReadCallBack: 1,
    kCFSocketAcceptCallBack: 2,
    kCFSocketDataCallBack: 3,
    kCFSocketConnectCallBack: 4,
    kCFSocketWriteCallBack: 8,
    '0': 'kCFSocketNoCallBack',
    '1': 'kCFSocketReadCallBack',
    '2': 'kCFSocketAcceptCallBack',
    '3': 'kCFSocketDataCallBack',
    '4': 'kCFSocketConnectCallBack',
    '8': 'kCFSocketWriteCallBack'
}

globalThis.CFSocketError = globalThis.CFSocketError || {};

globalThis.CFSocketError = {
    kCFSocketSuccess: 0,
    kCFSocketError: -1,
    kCFSocketTimeout: -2,
    '0': 'kCFSocketSuccess',
    '-1': 'kCFSocketError',
    '-2': 'kCFSocketTimeout'
}

globalThis.CFStreamErrorDomain = globalThis.CFStreamErrorDomain || {};

globalThis.CFStreamErrorDomain = {
    kCFStreamErrorDomainCustom: -1,
    kCFStreamErrorDomainPOSIX: 1,
    kCFStreamErrorDomainMacOSStatus: 2,
    '-1': 'kCFStreamErrorDomainCustom',
    '1': 'kCFStreamErrorDomainPOSIX',
    '2': 'kCFStreamErrorDomainMacOSStatus'
}

globalThis.CFStreamEventType = globalThis.CFStreamEventType || {};

globalThis.CFStreamEventType = {
    kCFStreamEventNone: 0,
    kCFStreamEventOpenCompleted: 1,
    kCFStreamEventHasBytesAvailable: 2,
    kCFStreamEventCanAcceptBytes: 4,
    kCFStreamEventErrorOccurred: 8,
    kCFStreamEventEndEncountered: 16,
    '0': 'kCFStreamEventNone',
    '1': 'kCFStreamEventOpenCompleted',
    '2': 'kCFStreamEventHasBytesAvailable',
    '4': 'kCFStreamEventCanAcceptBytes',
    '8': 'kCFStreamEventErrorOccurred',
    '16': 'kCFStreamEventEndEncountered'
}

globalThis.CFStreamStatus = globalThis.CFStreamStatus || {};

globalThis.CFStreamStatus = {
    kCFStreamStatusNotOpen: 0,
    kCFStreamStatusOpening: 1,
    kCFStreamStatusOpen: 2,
    kCFStreamStatusReading: 3,
    kCFStreamStatusWriting: 4,
    kCFStreamStatusAtEnd: 5,
    kCFStreamStatusClosed: 6,
    kCFStreamStatusError: 7,
    '0': 'kCFStreamStatusNotOpen',
    '1': 'kCFStreamStatusOpening',
    '2': 'kCFStreamStatusOpen',
    '3': 'kCFStreamStatusReading',
    '4': 'kCFStreamStatusWriting',
    '5': 'kCFStreamStatusAtEnd',
    '6': 'kCFStreamStatusClosed',
    '7': 'kCFStreamStatusError'
}

globalThis.CFStringBuiltInEncodings = globalThis.CFStringBuiltInEncodings || {};

globalThis.CFStringBuiltInEncodings = {
    kCFStringEncodingMacRoman: 0,
    kCFStringEncodingWindowsLatin1: 1280,
    kCFStringEncodingISOLatin1: 513,
    kCFStringEncodingNextStepLatin: 2817,
    kCFStringEncodingASCII: 1536,
    kCFStringEncodingUnicode: 256,
    kCFStringEncodingUTF8: 134217984,
    kCFStringEncodingNonLossyASCII: 3071,
    kCFStringEncodingUTF16: 256,
    kCFStringEncodingUTF16BE: 268435712,
    kCFStringEncodingUTF16LE: 335544576,
    kCFStringEncodingUTF32: 201326848,
    kCFStringEncodingUTF32BE: 402653440,
    kCFStringEncodingUTF32LE: 469762304,
    '0': 'kCFStringEncodingMacRoman',
    '1280': 'kCFStringEncodingWindowsLatin1',
    '513': 'kCFStringEncodingISOLatin1',
    '2817': 'kCFStringEncodingNextStepLatin',
    '1536': 'kCFStringEncodingASCII',
    '256': 'kCFStringEncodingUnicode',
    '134217984': 'kCFStringEncodingUTF8',
    '3071': 'kCFStringEncodingNonLossyASCII',
    '256': 'kCFStringEncodingUTF16',
    '268435712': 'kCFStringEncodingUTF16BE',
    '335544576': 'kCFStringEncodingUTF16LE',
    '201326848': 'kCFStringEncodingUTF32',
    '402653440': 'kCFStringEncodingUTF32BE',
    '469762304': 'kCFStringEncodingUTF32LE'
}

globalThis.CFStringCompareFlags = globalThis.CFStringCompareFlags || {};

globalThis.CFStringCompareFlags = {
    kCFCompareCaseInsensitive: 1,
    kCFCompareBackwards: 4,
    kCFCompareAnchored: 8,
    kCFCompareNonliteral: 16,
    kCFCompareLocalized: 32,
    kCFCompareNumerically: 64,
    kCFCompareDiacriticInsensitive: 128,
    kCFCompareWidthInsensitive: 256,
    kCFCompareForcedOrdering: 512,
    '1': 'kCFCompareCaseInsensitive',
    '4': 'kCFCompareBackwards',
    '8': 'kCFCompareAnchored',
    '16': 'kCFCompareNonliteral',
    '32': 'kCFCompareLocalized',
    '64': 'kCFCompareNumerically',
    '128': 'kCFCompareDiacriticInsensitive',
    '256': 'kCFCompareWidthInsensitive',
    '512': 'kCFCompareForcedOrdering'
}

globalThis.CFStringEncodings = globalThis.CFStringEncodings || {};

globalThis.CFStringEncodings = {
    kCFStringEncodingMacJapanese: 1,
    kCFStringEncodingMacChineseTrad: 2,
    kCFStringEncodingMacKorean: 3,
    kCFStringEncodingMacArabic: 4,
    kCFStringEncodingMacHebrew: 5,
    kCFStringEncodingMacGreek: 6,
    kCFStringEncodingMacCyrillic: 7,
    kCFStringEncodingMacDevanagari: 9,
    kCFStringEncodingMacGurmukhi: 10,
    kCFStringEncodingMacGujarati: 11,
    kCFStringEncodingMacOriya: 12,
    kCFStringEncodingMacBengali: 13,
    kCFStringEncodingMacTamil: 14,
    kCFStringEncodingMacTelugu: 15,
    kCFStringEncodingMacKannada: 16,
    kCFStringEncodingMacMalayalam: 17,
    kCFStringEncodingMacSinhalese: 18,
    kCFStringEncodingMacBurmese: 19,
    kCFStringEncodingMacKhmer: 20,
    kCFStringEncodingMacThai: 21,
    kCFStringEncodingMacLaotian: 22,
    kCFStringEncodingMacGeorgian: 23,
    kCFStringEncodingMacArmenian: 24,
    kCFStringEncodingMacChineseSimp: 25,
    kCFStringEncodingMacTibetan: 26,
    kCFStringEncodingMacMongolian: 27,
    kCFStringEncodingMacEthiopic: 28,
    kCFStringEncodingMacCentralEurRoman: 29,
    kCFStringEncodingMacVietnamese: 30,
    kCFStringEncodingMacExtArabic: 31,
    kCFStringEncodingMacSymbol: 33,
    kCFStringEncodingMacDingbats: 34,
    kCFStringEncodingMacTurkish: 35,
    kCFStringEncodingMacCroatian: 36,
    kCFStringEncodingMacIcelandic: 37,
    kCFStringEncodingMacRomanian: 38,
    kCFStringEncodingMacCeltic: 39,
    kCFStringEncodingMacGaelic: 40,
    kCFStringEncodingMacFarsi: 140,
    kCFStringEncodingMacUkrainian: 152,
    kCFStringEncodingMacInuit: 236,
    kCFStringEncodingMacVT100: 252,
    kCFStringEncodingMacHFS: 255,
    kCFStringEncodingISOLatin2: 514,
    kCFStringEncodingISOLatin3: 515,
    kCFStringEncodingISOLatin4: 516,
    kCFStringEncodingISOLatinCyrillic: 517,
    kCFStringEncodingISOLatinArabic: 518,
    kCFStringEncodingISOLatinGreek: 519,
    kCFStringEncodingISOLatinHebrew: 520,
    kCFStringEncodingISOLatin5: 521,
    kCFStringEncodingISOLatin6: 522,
    kCFStringEncodingISOLatinThai: 523,
    kCFStringEncodingISOLatin7: 525,
    kCFStringEncodingISOLatin8: 526,
    kCFStringEncodingISOLatin9: 527,
    kCFStringEncodingISOLatin10: 528,
    kCFStringEncodingDOSLatinUS: 1024,
    kCFStringEncodingDOSGreek: 1029,
    kCFStringEncodingDOSBalticRim: 1030,
    kCFStringEncodingDOSLatin1: 1040,
    kCFStringEncodingDOSGreek1: 1041,
    kCFStringEncodingDOSLatin2: 1042,
    kCFStringEncodingDOSCyrillic: 1043,
    kCFStringEncodingDOSTurkish: 1044,
    kCFStringEncodingDOSPortuguese: 1045,
    kCFStringEncodingDOSIcelandic: 1046,
    kCFStringEncodingDOSHebrew: 1047,
    kCFStringEncodingDOSCanadianFrench: 1048,
    kCFStringEncodingDOSArabic: 1049,
    kCFStringEncodingDOSNordic: 1050,
    kCFStringEncodingDOSRussian: 1051,
    kCFStringEncodingDOSGreek2: 1052,
    kCFStringEncodingDOSThai: 1053,
    kCFStringEncodingDOSJapanese: 1056,
    kCFStringEncodingDOSChineseSimplif: 1057,
    kCFStringEncodingDOSKorean: 1058,
    kCFStringEncodingDOSChineseTrad: 1059,
    kCFStringEncodingWindowsLatin2: 1281,
    kCFStringEncodingWindowsCyrillic: 1282,
    kCFStringEncodingWindowsGreek: 1283,
    kCFStringEncodingWindowsLatin5: 1284,
    kCFStringEncodingWindowsHebrew: 1285,
    kCFStringEncodingWindowsArabic: 1286,
    kCFStringEncodingWindowsBalticRim: 1287,
    kCFStringEncodingWindowsVietnamese: 1288,
    kCFStringEncodingWindowsKoreanJohab: 1296,
    kCFStringEncodingANSEL: 1537,
    kCFStringEncodingJIS_X0201_76: 1568,
    kCFStringEncodingJIS_X0208_83: 1569,
    kCFStringEncodingJIS_X0208_90: 1570,
    kCFStringEncodingJIS_X0212_90: 1571,
    kCFStringEncodingJIS_C6226_78: 1572,
    kCFStringEncodingShiftJIS_X0213: 1576,
    kCFStringEncodingShiftJIS_X0213_MenKuTen: 1577,
    kCFStringEncodingGB_2312_80: 1584,
    kCFStringEncodingGBK_95: 1585,
    kCFStringEncodingGB_18030_2000: 1586,
    kCFStringEncodingKSC_5601_87: 1600,
    kCFStringEncodingKSC_5601_92_Johab: 1601,
    kCFStringEncodingCNS_11643_92_P1: 1617,
    kCFStringEncodingCNS_11643_92_P2: 1618,
    kCFStringEncodingCNS_11643_92_P3: 1619,
    kCFStringEncodingISO_2022_JP: 2080,
    kCFStringEncodingISO_2022_JP_2: 2081,
    kCFStringEncodingISO_2022_JP_1: 2082,
    kCFStringEncodingISO_2022_JP_3: 2083,
    kCFStringEncodingISO_2022_CN: 2096,
    kCFStringEncodingISO_2022_CN_EXT: 2097,
    kCFStringEncodingISO_2022_KR: 2112,
    kCFStringEncodingEUC_JP: 2336,
    kCFStringEncodingEUC_CN: 2352,
    kCFStringEncodingEUC_TW: 2353,
    kCFStringEncodingEUC_KR: 2368,
    kCFStringEncodingShiftJIS: 2561,
    kCFStringEncodingKOI8_R: 2562,
    kCFStringEncodingBig5: 2563,
    kCFStringEncodingMacRomanLatin1: 2564,
    kCFStringEncodingHZ_GB_2312: 2565,
    kCFStringEncodingBig5_HKSCS_1999: 2566,
    kCFStringEncodingVISCII: 2567,
    kCFStringEncodingKOI8_U: 2568,
    kCFStringEncodingBig5_E: 2569,
    kCFStringEncodingNextStepJapanese: 2818,
    kCFStringEncodingEBCDIC_US: 3073,
    kCFStringEncodingEBCDIC_CP037: 3074,
    kCFStringEncodingUTF7: 67109120,
    kCFStringEncodingUTF7_IMAP: 2576,
    kCFStringEncodingShiftJIS_X0213_00: 1576,
    '1': 'kCFStringEncodingMacJapanese',
    '2': 'kCFStringEncodingMacChineseTrad',
    '3': 'kCFStringEncodingMacKorean',
    '4': 'kCFStringEncodingMacArabic',
    '5': 'kCFStringEncodingMacHebrew',
    '6': 'kCFStringEncodingMacGreek',
    '7': 'kCFStringEncodingMacCyrillic',
    '9': 'kCFStringEncodingMacDevanagari',
    '10': 'kCFStringEncodingMacGurmukhi',
    '11': 'kCFStringEncodingMacGujarati',
    '12': 'kCFStringEncodingMacOriya',
    '13': 'kCFStringEncodingMacBengali',
    '14': 'kCFStringEncodingMacTamil',
    '15': 'kCFStringEncodingMacTelugu',
    '16': 'kCFStringEncodingMacKannada',
    '17': 'kCFStringEncodingMacMalayalam',
    '18': 'kCFStringEncodingMacSinhalese',
    '19': 'kCFStringEncodingMacBurmese',
    '20': 'kCFStringEncodingMacKhmer',
    '21': 'kCFStringEncodingMacThai',
    '22': 'kCFStringEncodingMacLaotian',
    '23': 'kCFStringEncodingMacGeorgian',
    '24': 'kCFStringEncodingMacArmenian',
    '25': 'kCFStringEncodingMacChineseSimp',
    '26': 'kCFStringEncodingMacTibetan',
    '27': 'kCFStringEncodingMacMongolian',
    '28': 'kCFStringEncodingMacEthiopic',
    '29': 'kCFStringEncodingMacCentralEurRoman',
    '30': 'kCFStringEncodingMacVietnamese',
    '31': 'kCFStringEncodingMacExtArabic',
    '33': 'kCFStringEncodingMacSymbol',
    '34': 'kCFStringEncodingMacDingbats',
    '35': 'kCFStringEncodingMacTurkish',
    '36': 'kCFStringEncodingMacCroatian',
    '37': 'kCFStringEncodingMacIcelandic',
    '38': 'kCFStringEncodingMacRomanian',
    '39': 'kCFStringEncodingMacCeltic',
    '40': 'kCFStringEncodingMacGaelic',
    '140': 'kCFStringEncodingMacFarsi',
    '152': 'kCFStringEncodingMacUkrainian',
    '236': 'kCFStringEncodingMacInuit',
    '252': 'kCFStringEncodingMacVT100',
    '255': 'kCFStringEncodingMacHFS',
    '514': 'kCFStringEncodingISOLatin2',
    '515': 'kCFStringEncodingISOLatin3',
    '516': 'kCFStringEncodingISOLatin4',
    '517': 'kCFStringEncodingISOLatinCyrillic',
    '518': 'kCFStringEncodingISOLatinArabic',
    '519': 'kCFStringEncodingISOLatinGreek',
    '520': 'kCFStringEncodingISOLatinHebrew',
    '521': 'kCFStringEncodingISOLatin5',
    '522': 'kCFStringEncodingISOLatin6',
    '523': 'kCFStringEncodingISOLatinThai',
    '525': 'kCFStringEncodingISOLatin7',
    '526': 'kCFStringEncodingISOLatin8',
    '527': 'kCFStringEncodingISOLatin9',
    '528': 'kCFStringEncodingISOLatin10',
    '1024': 'kCFStringEncodingDOSLatinUS',
    '1029': 'kCFStringEncodingDOSGreek',
    '1030': 'kCFStringEncodingDOSBalticRim',
    '1040': 'kCFStringEncodingDOSLatin1',
    '1041': 'kCFStringEncodingDOSGreek1',
    '1042': 'kCFStringEncodingDOSLatin2',
    '1043': 'kCFStringEncodingDOSCyrillic',
    '1044': 'kCFStringEncodingDOSTurkish',
    '1045': 'kCFStringEncodingDOSPortuguese',
    '1046': 'kCFStringEncodingDOSIcelandic',
    '1047': 'kCFStringEncodingDOSHebrew',
    '1048': 'kCFStringEncodingDOSCanadianFrench',
    '1049': 'kCFStringEncodingDOSArabic',
    '1050': 'kCFStringEncodingDOSNordic',
    '1051': 'kCFStringEncodingDOSRussian',
    '1052': 'kCFStringEncodingDOSGreek2',
    '1053': 'kCFStringEncodingDOSThai',
    '1056': 'kCFStringEncodingDOSJapanese',
    '1057': 'kCFStringEncodingDOSChineseSimplif',
    '1058': 'kCFStringEncodingDOSKorean',
    '1059': 'kCFStringEncodingDOSChineseTrad',
    '1281': 'kCFStringEncodingWindowsLatin2',
    '1282': 'kCFStringEncodingWindowsCyrillic',
    '1283': 'kCFStringEncodingWindowsGreek',
    '1284': 'kCFStringEncodingWindowsLatin5',
    '1285': 'kCFStringEncodingWindowsHebrew',
    '1286': 'kCFStringEncodingWindowsArabic',
    '1287': 'kCFStringEncodingWindowsBalticRim',
    '1288': 'kCFStringEncodingWindowsVietnamese',
    '1296': 'kCFStringEncodingWindowsKoreanJohab',
    '1537': 'kCFStringEncodingANSEL',
    '1568': 'kCFStringEncodingJIS_X0201_76',
    '1569': 'kCFStringEncodingJIS_X0208_83',
    '1570': 'kCFStringEncodingJIS_X0208_90',
    '1571': 'kCFStringEncodingJIS_X0212_90',
    '1572': 'kCFStringEncodingJIS_C6226_78',
    '1576': 'kCFStringEncodingShiftJIS_X0213',
    '1577': 'kCFStringEncodingShiftJIS_X0213_MenKuTen',
    '1584': 'kCFStringEncodingGB_2312_80',
    '1585': 'kCFStringEncodingGBK_95',
    '1586': 'kCFStringEncodingGB_18030_2000',
    '1600': 'kCFStringEncodingKSC_5601_87',
    '1601': 'kCFStringEncodingKSC_5601_92_Johab',
    '1617': 'kCFStringEncodingCNS_11643_92_P1',
    '1618': 'kCFStringEncodingCNS_11643_92_P2',
    '1619': 'kCFStringEncodingCNS_11643_92_P3',
    '2080': 'kCFStringEncodingISO_2022_JP',
    '2081': 'kCFStringEncodingISO_2022_JP_2',
    '2082': 'kCFStringEncodingISO_2022_JP_1',
    '2083': 'kCFStringEncodingISO_2022_JP_3',
    '2096': 'kCFStringEncodingISO_2022_CN',
    '2097': 'kCFStringEncodingISO_2022_CN_EXT',
    '2112': 'kCFStringEncodingISO_2022_KR',
    '2336': 'kCFStringEncodingEUC_JP',
    '2352': 'kCFStringEncodingEUC_CN',
    '2353': 'kCFStringEncodingEUC_TW',
    '2368': 'kCFStringEncodingEUC_KR',
    '2561': 'kCFStringEncodingShiftJIS',
    '2562': 'kCFStringEncodingKOI8_R',
    '2563': 'kCFStringEncodingBig5',
    '2564': 'kCFStringEncodingMacRomanLatin1',
    '2565': 'kCFStringEncodingHZ_GB_2312',
    '2566': 'kCFStringEncodingBig5_HKSCS_1999',
    '2567': 'kCFStringEncodingVISCII',
    '2568': 'kCFStringEncodingKOI8_U',
    '2569': 'kCFStringEncodingBig5_E',
    '2818': 'kCFStringEncodingNextStepJapanese',
    '3073': 'kCFStringEncodingEBCDIC_US',
    '3074': 'kCFStringEncodingEBCDIC_CP037',
    '67109120': 'kCFStringEncodingUTF7',
    '2576': 'kCFStringEncodingUTF7_IMAP',
    '1576': 'kCFStringEncodingShiftJIS_X0213_00'
}

globalThis.CFStringNormalizationForm = globalThis.CFStringNormalizationForm || {};

globalThis.CFStringNormalizationForm = {
    kCFStringNormalizationFormD: 0,
    kCFStringNormalizationFormKD: 1,
    kCFStringNormalizationFormC: 2,
    kCFStringNormalizationFormKC: 3,
    '0': 'kCFStringNormalizationFormD',
    '1': 'kCFStringNormalizationFormKD',
    '2': 'kCFStringNormalizationFormC',
    '3': 'kCFStringNormalizationFormKC'
}

globalThis.CFStringTokenizerTokenType = globalThis.CFStringTokenizerTokenType || {};

globalThis.CFStringTokenizerTokenType = {
    kCFStringTokenizerTokenNone: 0,
    kCFStringTokenizerTokenNormal: 1,
    kCFStringTokenizerTokenHasSubTokensMask: 2,
    kCFStringTokenizerTokenHasDerivedSubTokensMask: 4,
    kCFStringTokenizerTokenHasHasNumbersMask: 8,
    kCFStringTokenizerTokenHasNonLettersMask: 16,
    kCFStringTokenizerTokenIsCJWordMask: 32,
    '0': 'kCFStringTokenizerTokenNone',
    '1': 'kCFStringTokenizerTokenNormal',
    '2': 'kCFStringTokenizerTokenHasSubTokensMask',
    '4': 'kCFStringTokenizerTokenHasDerivedSubTokensMask',
    '8': 'kCFStringTokenizerTokenHasHasNumbersMask',
    '16': 'kCFStringTokenizerTokenHasNonLettersMask',
    '32': 'kCFStringTokenizerTokenIsCJWordMask'
}

globalThis.CFTimeZoneNameStyle = globalThis.CFTimeZoneNameStyle || {};

globalThis.CFTimeZoneNameStyle = {
    kCFTimeZoneNameStyleStandard: 0,
    kCFTimeZoneNameStyleShortStandard: 1,
    kCFTimeZoneNameStyleDaylightSaving: 2,
    kCFTimeZoneNameStyleShortDaylightSaving: 3,
    kCFTimeZoneNameStyleGeneric: 4,
    kCFTimeZoneNameStyleShortGeneric: 5,
    '0': 'kCFTimeZoneNameStyleStandard',
    '1': 'kCFTimeZoneNameStyleShortStandard',
    '2': 'kCFTimeZoneNameStyleDaylightSaving',
    '3': 'kCFTimeZoneNameStyleShortDaylightSaving',
    '4': 'kCFTimeZoneNameStyleGeneric',
    '5': 'kCFTimeZoneNameStyleShortGeneric'
}

globalThis.CFURLBookmarkCreationOptions = globalThis.CFURLBookmarkCreationOptions || {};

globalThis.CFURLBookmarkCreationOptions = {
    kCFURLBookmarkCreationMinimalBookmarkMask: 512,
    kCFURLBookmarkCreationSuitableForBookmarkFile: 1024,
    kCFURLBookmarkCreationWithSecurityScope: 2048,
    kCFURLBookmarkCreationSecurityScopeAllowOnlyReadAccess: 4096,
    kCFURLBookmarkCreationPreferFileIDResolutionMask: 256,
    '512': 'kCFURLBookmarkCreationMinimalBookmarkMask',
    '1024': 'kCFURLBookmarkCreationSuitableForBookmarkFile',
    '2048': 'kCFURLBookmarkCreationWithSecurityScope',
    '4096': 'kCFURLBookmarkCreationSecurityScopeAllowOnlyReadAccess',
    '256': 'kCFURLBookmarkCreationPreferFileIDResolutionMask'
}

globalThis.CFURLBookmarkResolutionOptions = globalThis.CFURLBookmarkResolutionOptions || {};

globalThis.CFURLBookmarkResolutionOptions = {
    kCFURLBookmarkResolutionWithoutUIMask: 256,
    kCFURLBookmarkResolutionWithoutMountingMask: 512,
    kCFURLBookmarkResolutionWithSecurityScope: 1024,
    kCFBookmarkResolutionWithoutUIMask: 256,
    kCFBookmarkResolutionWithoutMountingMask: 512,
    '256': 'kCFURLBookmarkResolutionWithoutUIMask',
    '512': 'kCFURLBookmarkResolutionWithoutMountingMask',
    '1024': 'kCFURLBookmarkResolutionWithSecurityScope',
    '256': 'kCFBookmarkResolutionWithoutUIMask',
    '512': 'kCFBookmarkResolutionWithoutMountingMask'
}

globalThis.CFURLComponentType = globalThis.CFURLComponentType || {};

globalThis.CFURLComponentType = {
    kCFURLComponentScheme: 1,
    kCFURLComponentNetLocation: 2,
    kCFURLComponentPath: 3,
    kCFURLComponentResourceSpecifier: 4,
    kCFURLComponentUser: 5,
    kCFURLComponentPassword: 6,
    kCFURLComponentUserInfo: 7,
    kCFURLComponentHost: 8,
    kCFURLComponentPort: 9,
    kCFURLComponentParameterString: 10,
    kCFURLComponentQuery: 11,
    kCFURLComponentFragment: 12,
    '1': 'kCFURLComponentScheme',
    '2': 'kCFURLComponentNetLocation',
    '3': 'kCFURLComponentPath',
    '4': 'kCFURLComponentResourceSpecifier',
    '5': 'kCFURLComponentUser',
    '6': 'kCFURLComponentPassword',
    '7': 'kCFURLComponentUserInfo',
    '8': 'kCFURLComponentHost',
    '9': 'kCFURLComponentPort',
    '10': 'kCFURLComponentParameterString',
    '11': 'kCFURLComponentQuery',
    '12': 'kCFURLComponentFragment'
}

globalThis.CFURLEnumeratorOptions = globalThis.CFURLEnumeratorOptions || {};

globalThis.CFURLEnumeratorOptions = {
    kCFURLEnumeratorDefaultBehavior: 0,
    kCFURLEnumeratorDescendRecursively: 1,
    kCFURLEnumeratorSkipInvisibles: 2,
    kCFURLEnumeratorGenerateFileReferenceURLs: 4,
    kCFURLEnumeratorSkipPackageContents: 8,
    kCFURLEnumeratorIncludeDirectoriesPreOrder: 16,
    kCFURLEnumeratorIncludeDirectoriesPostOrder: 32,
    kCFURLEnumeratorGenerateRelativePathURLs: 64,
    '0': 'kCFURLEnumeratorDefaultBehavior',
    '1': 'kCFURLEnumeratorDescendRecursively',
    '2': 'kCFURLEnumeratorSkipInvisibles',
    '4': 'kCFURLEnumeratorGenerateFileReferenceURLs',
    '8': 'kCFURLEnumeratorSkipPackageContents',
    '16': 'kCFURLEnumeratorIncludeDirectoriesPreOrder',
    '32': 'kCFURLEnumeratorIncludeDirectoriesPostOrder',
    '64': 'kCFURLEnumeratorGenerateRelativePathURLs'
}

globalThis.CFURLEnumeratorResult = globalThis.CFURLEnumeratorResult || {};

globalThis.CFURLEnumeratorResult = {
    kCFURLEnumeratorSuccess: 1,
    kCFURLEnumeratorEnd: 2,
    kCFURLEnumeratorError: 3,
    kCFURLEnumeratorDirectoryPostOrderSuccess: 4,
    '1': 'kCFURLEnumeratorSuccess',
    '2': 'kCFURLEnumeratorEnd',
    '3': 'kCFURLEnumeratorError',
    '4': 'kCFURLEnumeratorDirectoryPostOrderSuccess'
}

globalThis.CFURLPathStyle = globalThis.CFURLPathStyle || {};

globalThis.CFURLPathStyle = {
    kCFURLPOSIXPathStyle: 0,
    kCFURLHFSPathStyle: 1,
    kCFURLWindowsPathStyle: 2,
    '0': 'kCFURLPOSIXPathStyle',
    '1': 'kCFURLHFSPathStyle',
    '2': 'kCFURLWindowsPathStyle'
}

globalThis.CFXMLEntityTypeCode = globalThis.CFXMLEntityTypeCode || {};

globalThis.CFXMLEntityTypeCode = {
    kCFXMLEntityTypeParameter: 0,
    kCFXMLEntityTypeParsedInternal: 1,
    kCFXMLEntityTypeParsedExternal: 2,
    kCFXMLEntityTypeUnparsed: 3,
    kCFXMLEntityTypeCharacter: 4,
    '0': 'kCFXMLEntityTypeParameter',
    '1': 'kCFXMLEntityTypeParsedInternal',
    '2': 'kCFXMLEntityTypeParsedExternal',
    '3': 'kCFXMLEntityTypeUnparsed',
    '4': 'kCFXMLEntityTypeCharacter'
}

globalThis.CFXMLNodeTypeCode = globalThis.CFXMLNodeTypeCode || {};

globalThis.CFXMLNodeTypeCode = {
    kCFXMLNodeTypeDocument: 1,
    kCFXMLNodeTypeElement: 2,
    kCFXMLNodeTypeAttribute: 3,
    kCFXMLNodeTypeProcessingInstruction: 4,
    kCFXMLNodeTypeComment: 5,
    kCFXMLNodeTypeText: 6,
    kCFXMLNodeTypeCDATASection: 7,
    kCFXMLNodeTypeDocumentFragment: 8,
    kCFXMLNodeTypeEntity: 9,
    kCFXMLNodeTypeEntityReference: 10,
    kCFXMLNodeTypeDocumentType: 11,
    kCFXMLNodeTypeWhitespace: 12,
    kCFXMLNodeTypeNotation: 13,
    kCFXMLNodeTypeElementTypeDeclaration: 14,
    kCFXMLNodeTypeAttributeListDeclaration: 15,
    '1': 'kCFXMLNodeTypeDocument',
    '2': 'kCFXMLNodeTypeElement',
    '3': 'kCFXMLNodeTypeAttribute',
    '4': 'kCFXMLNodeTypeProcessingInstruction',
    '5': 'kCFXMLNodeTypeComment',
    '6': 'kCFXMLNodeTypeText',
    '7': 'kCFXMLNodeTypeCDATASection',
    '8': 'kCFXMLNodeTypeDocumentFragment',
    '9': 'kCFXMLNodeTypeEntity',
    '10': 'kCFXMLNodeTypeEntityReference',
    '11': 'kCFXMLNodeTypeDocumentType',
    '12': 'kCFXMLNodeTypeWhitespace',
    '13': 'kCFXMLNodeTypeNotation',
    '14': 'kCFXMLNodeTypeElementTypeDeclaration',
    '15': 'kCFXMLNodeTypeAttributeListDeclaration'
}

globalThis.CFXMLParserOptions = globalThis.CFXMLParserOptions || {};

globalThis.CFXMLParserOptions = {
    kCFXMLParserValidateDocument: 1,
    kCFXMLParserSkipMetaData: 2,
    kCFXMLParserReplacePhysicalEntities: 4,
    kCFXMLParserSkipWhitespace: 8,
    kCFXMLParserResolveExternalEntities: 16,
    kCFXMLParserAddImpliedAttributes: 32,
    kCFXMLParserAllOptions: 16777215,
    kCFXMLParserNoOptions: 0,
    '1': 'kCFXMLParserValidateDocument',
    '2': 'kCFXMLParserSkipMetaData',
    '4': 'kCFXMLParserReplacePhysicalEntities',
    '8': 'kCFXMLParserSkipWhitespace',
    '16': 'kCFXMLParserResolveExternalEntities',
    '32': 'kCFXMLParserAddImpliedAttributes',
    '16777215': 'kCFXMLParserAllOptions',
    '0': 'kCFXMLParserNoOptions'
}

globalThis.CFXMLParserStatusCode = globalThis.CFXMLParserStatusCode || {};

globalThis.CFXMLParserStatusCode = {
    kCFXMLStatusParseNotBegun: -2,
    kCFXMLStatusParseInProgress: -1,
    kCFXMLStatusParseSuccessful: 0,
    kCFXMLErrorUnexpectedEOF: 1,
    kCFXMLErrorUnknownEncoding: 2,
    kCFXMLErrorEncodingConversionFailure: 3,
    kCFXMLErrorMalformedProcessingInstruction: 4,
    kCFXMLErrorMalformedDTD: 5,
    kCFXMLErrorMalformedName: 6,
    kCFXMLErrorMalformedCDSect: 7,
    kCFXMLErrorMalformedCloseTag: 8,
    kCFXMLErrorMalformedStartTag: 9,
    kCFXMLErrorMalformedDocument: 10,
    kCFXMLErrorElementlessDocument: 11,
    kCFXMLErrorMalformedComment: 12,
    kCFXMLErrorMalformedCharacterReference: 13,
    kCFXMLErrorMalformedParsedCharacterData: 14,
    kCFXMLErrorNoData: 15,
    '-2': 'kCFXMLStatusParseNotBegun',
    '-1': 'kCFXMLStatusParseInProgress',
    '0': 'kCFXMLStatusParseSuccessful',
    '1': 'kCFXMLErrorUnexpectedEOF',
    '2': 'kCFXMLErrorUnknownEncoding',
    '3': 'kCFXMLErrorEncodingConversionFailure',
    '4': 'kCFXMLErrorMalformedProcessingInstruction',
    '5': 'kCFXMLErrorMalformedDTD',
    '6': 'kCFXMLErrorMalformedName',
    '7': 'kCFXMLErrorMalformedCDSect',
    '8': 'kCFXMLErrorMalformedCloseTag',
    '9': 'kCFXMLErrorMalformedStartTag',
    '10': 'kCFXMLErrorMalformedDocument',
    '11': 'kCFXMLErrorElementlessDocument',
    '12': 'kCFXMLErrorMalformedComment',
    '13': 'kCFXMLErrorMalformedCharacterReference',
    '14': 'kCFXMLErrorMalformedParsedCharacterData',
    '15': 'kCFXMLErrorNoData'
}

globalThis.__CFByteOrder = globalThis.__CFByteOrder || {};

globalThis.__CFByteOrder = {
    CFByteOrderUnknown: 0,
    CFByteOrderLittleEndian: 1,
    CFByteOrderBigEndian: 2,
    '0': 'CFByteOrderUnknown',
    '1': 'CFByteOrderLittleEndian',
    '2': 'CFByteOrderBigEndian'
}

declare function CFAbsoluteTimeGetCurrent(): number;
declare function CFAllocatorAllocate(allocator: any, size: number, hint: number): any;
interface CFAllocatorContext {
  version: number;
  info: any;
  retain: (p1: any) => any;
  release: (p1: any) => void;
  copyDescription: (p1: any) => string;
  allocate: (p1: number, p2: number, p3: any) => any;
  reallocate: (p1: any, p2: number, p3: number, p4: any) => any;
  deallocate: (p1: any, p2: any) => void;
  preferredSize: (p1: number, p2: number, p3: any) => number;
}

declare var CFAllocatorContext: CFAllocatorContext;

declare function CFAllocatorCreate(allocator: any, context: CFAllocatorContext): any;
declare function CFAllocatorDeallocate(allocator: any, ptr: any): void;
declare function CFAllocatorGetContext(allocator: any, context: CFAllocatorContext): void;
declare function CFAllocatorGetDefault(): any;
declare function CFAllocatorGetPreferredSizeForSize(allocator: any, size: number, hint: number): number;
declare function CFAllocatorGetTypeID(): number;
declare function CFAllocatorReallocate(allocator: any, ptr: any, newsize: number, hint: number): any;
declare function CFAllocatorSetDefault(allocator: any): void;
declare function CFArrayAppendArray(theArray: NSArray<any> | any[], otherArray: NSArray<any> | any[], otherRange: CFRange): void;
declare function CFArrayAppendValue(theArray: NSArray<any> | any[], value: any): void;
declare function CFArrayApplyFunction(theArray: NSArray<any> | any[], range: CFRange, applier: (p1: any, p2: any) => void, context: any): void;
declare function CFArrayBSearchValues(theArray: NSArray<any> | any[], range: CFRange, value: any, comparator: (p1: any, p2: any, p3: any) => CFComparisonResult, context: any): number;
interface CFArrayCallBacks {
  version: number;
  retain: (p1: any, p2: any) => any;
  release: (p1: any, p2: any) => void;
  copyDescription: (p1: any) => string;
  equal: (p1: any, p2: any) => boolean;
}

declare var CFArrayCallBacks: CFArrayCallBacks;

declare function CFArrayContainsValue(theArray: NSArray<any> | any[], range: CFRange, value: any): boolean;
declare function CFArrayCreate(allocator: any, values: any, numValues: number, callBacks: CFArrayCallBacks): NSArray<any>;
declare function CFArrayCreateCopy(allocator: any, theArray: NSArray<any> | any[]): NSArray<any>;
declare function CFArrayCreateMutable(allocator: any, capacity: number, callBacks: CFArrayCallBacks): NSArray<any>;
declare function CFArrayCreateMutableCopy(allocator: any, capacity: number, theArray: NSArray<any> | any[]): NSArray<any>;
declare function CFArrayExchangeValuesAtIndices(theArray: NSArray<any> | any[], idx1: number, idx2: number): void;
declare function CFArrayGetCount(theArray: NSArray<any> | any[]): number;
declare function CFArrayGetCountOfValue(theArray: NSArray<any> | any[], range: CFRange, value: any): number;
declare function CFArrayGetFirstIndexOfValue(theArray: NSArray<any> | any[], range: CFRange, value: any): number;
declare function CFArrayGetLastIndexOfValue(theArray: NSArray<any> | any[], range: CFRange, value: any): number;
declare function CFArrayGetTypeID(): number;
declare function CFArrayGetValueAtIndex(theArray: NSArray<any> | any[], idx: number): any;
declare function CFArrayGetValues(theArray: NSArray<any> | any[], range: CFRange, values: any): void;
declare function CFArrayInsertValueAtIndex(theArray: NSArray<any> | any[], idx: number, value: any): void;
declare function CFArrayRemoveAllValues(theArray: NSArray<any> | any[]): void;
declare function CFArrayRemoveValueAtIndex(theArray: NSArray<any> | any[], idx: number): void;
declare function CFArrayReplaceValues(theArray: NSArray<any> | any[], range: CFRange, newValues: any, newCount: number): void;
declare function CFArraySetValueAtIndex(theArray: NSArray<any> | any[], idx: number, value: any): void;
declare function CFArraySortValues(theArray: NSArray<any> | any[], range: CFRange, comparator: (p1: any, p2: any, p3: any) => CFComparisonResult, context: any): void;
declare function CFAttributedStringBeginEditing(aStr: NSAttributedString): void;
declare function CFAttributedStringCreate(alloc: any, str: string, attributes: NSDictionary<any, any>): NSAttributedString;
declare function CFAttributedStringCreateCopy(alloc: any, aStr: NSAttributedString): NSAttributedString;
declare function CFAttributedStringCreateMutable(alloc: any, maxLength: number): NSAttributedString;
declare function CFAttributedStringCreateMutableCopy(alloc: any, maxLength: number, aStr: NSAttributedString): NSAttributedString;
declare function CFAttributedStringCreateWithSubstring(alloc: any, aStr: NSAttributedString, range: CFRange): NSAttributedString;
declare function CFAttributedStringEndEditing(aStr: NSAttributedString): void;
declare function CFAttributedStringGetAttribute(aStr: NSAttributedString, loc: number, attrName: string, effectiveRange: CFRange): any;
declare function CFAttributedStringGetAttributeAndLongestEffectiveRange(aStr: NSAttributedString, loc: number, attrName: string, inRange: CFRange, longestEffectiveRange: CFRange): any;
declare function CFAttributedStringGetAttributes(aStr: NSAttributedString, loc: number, effectiveRange: CFRange): NSDictionary<any, any>;
declare function CFAttributedStringGetAttributesAndLongestEffectiveRange(aStr: NSAttributedString, loc: number, inRange: CFRange, longestEffectiveRange: CFRange): NSDictionary<any, any>;
declare function CFAttributedStringGetLength(aStr: NSAttributedString): number;
declare function CFAttributedStringGetMutableString(aStr: NSAttributedString): string;
declare function CFAttributedStringGetString(aStr: NSAttributedString): string;
declare function CFAttributedStringGetTypeID(): number;
declare function CFAttributedStringRemoveAttribute(aStr: NSAttributedString, range: CFRange, attrName: string): void;
declare function CFAttributedStringReplaceAttributedString(aStr: NSAttributedString, range: CFRange, replacement: NSAttributedString): void;
declare function CFAttributedStringReplaceString(aStr: NSAttributedString, range: CFRange, replacement: string): void;
declare function CFAttributedStringSetAttribute(aStr: NSAttributedString, range: CFRange, attrName: string, value: any): void;
declare function CFAttributedStringSetAttributes(aStr: NSAttributedString, range: CFRange, replacement: NSDictionary<any, any>, clearOtherAttributes: boolean): void;
declare function CFAutorelease(arg: any): any;
declare function CFBagAddValue(theBag: any, value: any): void;
declare function CFBagApplyFunction(theBag: any, applier: (p1: any, p2: any) => void, context: any): void;
interface CFBagCallBacks {
  version: number;
  retain: (p1: any, p2: any) => any;
  release: (p1: any, p2: any) => void;
  copyDescription: (p1: any) => string;
  equal: (p1: any, p2: any) => boolean;
  hash: (p1: any) => number;
}

declare var CFBagCallBacks: CFBagCallBacks;

declare function CFBagContainsValue(theBag: any, value: any): boolean;
declare function CFBagCreate(allocator: any, values: any, numValues: number, callBacks: CFBagCallBacks): any;
declare function CFBagCreateCopy(allocator: any, theBag: any): any;
declare function CFBagCreateMutable(allocator: any, capacity: number, callBacks: CFBagCallBacks): any;
declare function CFBagCreateMutableCopy(allocator: any, capacity: number, theBag: any): any;
declare function CFBagGetCount(theBag: any): number;
declare function CFBagGetCountOfValue(theBag: any, value: any): number;
declare function CFBagGetTypeID(): number;
declare function CFBagGetValue(theBag: any, value: any): any;
declare function CFBagGetValueIfPresent(theBag: any, candidate: any, value: any): boolean;
declare function CFBagGetValues(theBag: any, values: any): void;
declare function CFBagRemoveAllValues(theBag: any): void;
declare function CFBagRemoveValue(theBag: any, value: any): void;
declare function CFBagReplaceValue(theBag: any, value: any): void;
declare function CFBagSetValue(theBag: any, value: any): void;
declare function CFBinaryHeapAddValue(heap: any, value: any): void;
declare function CFBinaryHeapApplyFunction(heap: any, applier: (p1: any, p2: any) => void, context: any): void;
interface CFBinaryHeapCallBacks {
  version: number;
  retain: (p1: any, p2: any) => any;
  release: (p1: any, p2: any) => void;
  copyDescription: (p1: any) => string;
  compare: (p1: any, p2: any, p3: any) => CFComparisonResult;
}

declare var CFBinaryHeapCallBacks: CFBinaryHeapCallBacks;

interface CFBinaryHeapCompareContext {
  version: number;
  info: any;
  retain: (p1: any) => any;
  release: (p1: any) => void;
  copyDescription: (p1: any) => string;
}

declare var CFBinaryHeapCompareContext: CFBinaryHeapCompareContext;

declare function CFBinaryHeapContainsValue(heap: any, value: any): boolean;
declare function CFBinaryHeapCreate(allocator: any, capacity: number, callBacks: CFBinaryHeapCallBacks, compareContext: CFBinaryHeapCompareContext): any;
declare function CFBinaryHeapCreateCopy(allocator: any, capacity: number, heap: any): any;
declare function CFBinaryHeapGetCount(heap: any): number;
declare function CFBinaryHeapGetCountOfValue(heap: any, value: any): number;
declare function CFBinaryHeapGetMinimum(heap: any): any;
declare function CFBinaryHeapGetMinimumIfPresent(heap: any, value: any): boolean;
declare function CFBinaryHeapGetTypeID(): number;
declare function CFBinaryHeapGetValues(heap: any, values: any): void;
declare function CFBinaryHeapRemoveAllValues(heap: any): void;
declare function CFBinaryHeapRemoveMinimumValue(heap: any): void;
declare function CFBitVectorContainsBit(bv: any, range: CFRange, value: number): boolean;
declare function CFBitVectorCreate(allocator: any, bytes: string | any, numBits: number): any;
declare function CFBitVectorCreateCopy(allocator: any, bv: any): any;
declare function CFBitVectorCreateMutable(allocator: any, capacity: number): any;
declare function CFBitVectorCreateMutableCopy(allocator: any, capacity: number, bv: any): any;
declare function CFBitVectorFlipBitAtIndex(bv: any, idx: number): void;
declare function CFBitVectorFlipBits(bv: any, range: CFRange): void;
declare function CFBitVectorGetBitAtIndex(bv: any, idx: number): number;
declare function CFBitVectorGetBits(bv: any, range: CFRange, bytes: string | any): void;
declare function CFBitVectorGetCount(bv: any): number;
declare function CFBitVectorGetCountOfBit(bv: any, range: CFRange, value: number): number;
declare function CFBitVectorGetFirstIndexOfBit(bv: any, range: CFRange, value: number): number;
declare function CFBitVectorGetLastIndexOfBit(bv: any, range: CFRange, value: number): number;
declare function CFBitVectorGetTypeID(): number;
declare function CFBitVectorSetAllBits(bv: any, value: number): void;
declare function CFBitVectorSetBitAtIndex(bv: any, idx: number, value: number): void;
declare function CFBitVectorSetBits(bv: any, range: CFRange, value: number): void;
declare function CFBitVectorSetCount(bv: any, count: number): void;
declare function CFBooleanGetTypeID(): number;
declare function CFBooleanGetValue(boolean: number): boolean;
declare function CFBundleCopyAuxiliaryExecutableURL(bundle: any, executableName: string): NSURL;
declare function CFBundleCopyBuiltInPlugInsURL(bundle: any): NSURL;
declare function CFBundleCopyBundleLocalizations(bundle: any): NSArray<any>;
declare function CFBundleCopyBundleURL(bundle: any): NSURL;
declare function CFBundleCopyExecutableArchitectures(bundle: any): NSArray<any>;
declare function CFBundleCopyExecutableArchitecturesForURL(url: NSURL): NSArray<any>;
declare function CFBundleCopyExecutableURL(bundle: any): NSURL;
declare function CFBundleCopyInfoDictionaryForURL(url: NSURL): NSDictionary<any, any>;
declare function CFBundleCopyInfoDictionaryInDirectory(bundleURL: NSURL): NSDictionary<any, any>;
declare function CFBundleCopyLocalizationsForPreferences(locArray: NSArray<any> | any[], prefArray: NSArray<any> | any[]): NSArray<any>;
declare function CFBundleCopyLocalizationsForURL(url: NSURL): NSArray<any>;
declare function CFBundleCopyLocalizedString(bundle: any, key: string, value: string, tableName: string): string;
declare function CFBundleCopyPreferredLocalizationsFromArray(locArray: NSArray<any> | any[]): NSArray<any>;
declare function CFBundleCopyPrivateFrameworksURL(bundle: any): NSURL;
declare function CFBundleCopyResourceURL(bundle: any, resourceName: string, resourceType: string, subDirName: string): NSURL;
declare function CFBundleCopyResourceURLForLocalization(bundle: any, resourceName: string, resourceType: string, subDirName: string, localizationName: string): NSURL;
declare function CFBundleCopyResourceURLInDirectory(bundleURL: NSURL, resourceName: string, resourceType: string, subDirName: string): NSURL;
declare function CFBundleCopyResourceURLsOfType(bundle: any, resourceType: string, subDirName: string): NSArray<any>;
declare function CFBundleCopyResourceURLsOfTypeForLocalization(bundle: any, resourceType: string, subDirName: string, localizationName: string): NSArray<any>;
declare function CFBundleCopyResourceURLsOfTypeInDirectory(bundleURL: NSURL, resourceType: string, subDirName: string): NSArray<any>;
declare function CFBundleCopyResourcesDirectoryURL(bundle: any): NSURL;
declare function CFBundleCopySharedFrameworksURL(bundle: any): NSURL;
declare function CFBundleCopySharedSupportURL(bundle: any): NSURL;
declare function CFBundleCopySupportFilesDirectoryURL(bundle: any): NSURL;
declare function CFBundleCreate(allocator: any, bundleURL: NSURL): any;
declare function CFBundleCreateBundlesFromDirectory(allocator: any, directoryURL: NSURL, bundleType: string): NSArray<any>;
declare function CFBundleGetAllBundles(): NSArray<any>;
declare function CFBundleGetBundleWithIdentifier(bundleID: string): any;
declare function CFBundleGetDataPointerForName(bundle: any, symbolName: string): any;
declare function CFBundleGetDataPointersForNames(bundle: any, symbolNames: NSArray<any> | any[], stbl: any): void;
declare function CFBundleGetDevelopmentRegion(bundle: any): string;
declare function CFBundleGetFunctionPointerForName(bundle: any, functionName: string): any;
declare function CFBundleGetFunctionPointersForNames(bundle: any, functionNames: NSArray<any> | any[], ftbl: any): void;
declare function CFBundleGetIdentifier(bundle: any): string;
declare function CFBundleGetInfoDictionary(bundle: any): NSDictionary<any, any>;
declare function CFBundleGetLocalInfoDictionary(bundle: any): NSDictionary<any, any>;
declare function CFBundleGetMainBundle(): any;
declare function CFBundleGetPackageInfo(bundle: any, packageType: number, packageCreator: number): void;
declare function CFBundleGetPackageInfoInDirectory(url: NSURL, packageType: number, packageCreator: number): boolean;
declare function CFBundleGetPlugIn(bundle: any): any;
declare function CFBundleGetTypeID(): number;
declare function CFBundleGetValueForInfoDictionaryKey(bundle: any, key: string): any;
declare function CFBundleGetVersionNumber(bundle: any): number;
declare function CFBundleIsExecutableLoaded(bundle: any): boolean;
declare function CFBundleLoadExecutable(bundle: any): boolean;
declare function CFBundleLoadExecutableAndReturnError(bundle: any, error: Error): boolean;
declare function CFBundlePreflightExecutable(bundle: any, error: Error): boolean;
declare function CFBundleUnloadExecutable(bundle: any): void;
declare function CFCalendarCopyCurrent(): NSCalendar;
declare function CFCalendarCopyLocale(calendar: NSCalendar): Locale;
declare function CFCalendarCopyTimeZone(calendar: NSCalendar): NSTimeZone;
declare function CFCalendarCreateWithIdentifier(allocator: any, identifier: any): NSCalendar;
declare function CFCalendarGetFirstWeekday(calendar: NSCalendar): number;
declare function CFCalendarGetIdentifier(calendar: NSCalendar): any;
declare function CFCalendarGetMaximumRangeOfUnit(calendar: NSCalendar, unit: CFCalendarUnit): CFRange;
declare function CFCalendarGetMinimumDaysInFirstWeek(calendar: NSCalendar): number;
declare function CFCalendarGetMinimumRangeOfUnit(calendar: NSCalendar, unit: CFCalendarUnit): CFRange;
declare function CFCalendarGetOrdinalityOfUnit(calendar: NSCalendar, smallerUnit: CFCalendarUnit, biggerUnit: CFCalendarUnit, at: number): number;
declare function CFCalendarGetRangeOfUnit(calendar: NSCalendar, smallerUnit: CFCalendarUnit, biggerUnit: CFCalendarUnit, at: number): CFRange;
declare function CFCalendarGetTimeRangeOfUnit(calendar: NSCalendar, unit: CFCalendarUnit, at: number, startp: number, tip: number): boolean;
declare function CFCalendarGetTypeID(): number;
declare function CFCalendarSetFirstWeekday(calendar: NSCalendar, wkdy: number): void;
declare function CFCalendarSetLocale(calendar: NSCalendar, locale: Locale): void;
declare function CFCalendarSetMinimumDaysInFirstWeek(calendar: NSCalendar, mwd: number): void;
declare function CFCalendarSetTimeZone(calendar: NSCalendar, tz: NSTimeZone): void;
declare function CFCharacterSetAddCharactersInRange(theSet: CharacterSet, theRange: CFRange): void;
declare function CFCharacterSetAddCharactersInString(theSet: CharacterSet, theString: string): void;
declare function CFCharacterSetCreateBitmapRepresentation(alloc: any, theSet: CharacterSet): Data;
declare function CFCharacterSetCreateCopy(alloc: any, theSet: CharacterSet): CharacterSet;
declare function CFCharacterSetCreateInvertedSet(alloc: any, theSet: CharacterSet): CharacterSet;
declare function CFCharacterSetCreateMutable(alloc: any): CharacterSet;
declare function CFCharacterSetCreateMutableCopy(alloc: any, theSet: CharacterSet): CharacterSet;
declare function CFCharacterSetCreateWithBitmapRepresentation(alloc: any, theData: Data): CharacterSet;
declare function CFCharacterSetCreateWithCharactersInRange(alloc: any, theRange: CFRange): CharacterSet;
declare function CFCharacterSetCreateWithCharactersInString(alloc: any, theString: string): CharacterSet;
declare function CFCharacterSetGetPredefined(theSetIdentifier: CFCharacterSetPredefinedSet): CharacterSet;
declare function CFCharacterSetGetTypeID(): number;
declare function CFCharacterSetHasMemberInPlane(theSet: CharacterSet, thePlane: number): boolean;
declare function CFCharacterSetIntersect(theSet: CharacterSet, theOtherSet: CharacterSet): void;
declare function CFCharacterSetInvert(theSet: CharacterSet): void;
declare function CFCharacterSetIsCharacterMember(theSet: CharacterSet, theChar: number): boolean;
declare function CFCharacterSetIsLongCharacterMember(theSet: CharacterSet, theChar: number): boolean;
declare function CFCharacterSetIsSupersetOfSet(theSet: CharacterSet, theOtherset: CharacterSet): boolean;
declare function CFCharacterSetRemoveCharactersInRange(theSet: CharacterSet, theRange: CFRange): void;
declare function CFCharacterSetRemoveCharactersInString(theSet: CharacterSet, theString: string): void;
declare function CFCharacterSetUnion(theSet: CharacterSet, theOtherSet: CharacterSet): void;
declare function CFCopyDescription(cf: any): string;
declare function CFCopyTypeIDDescription(type_id: number): string;
declare function CFDataAppendBytes(theData: Data, bytes: string | any, length: number): void;
declare function CFDataCreate(allocator: any, bytes: string | any, length: number): Data;
declare function CFDataCreateCopy(allocator: any, theData: Data): Data;
declare function CFDataCreateMutable(allocator: any, capacity: number): Data;
declare function CFDataCreateMutableCopy(allocator: any, capacity: number, theData: Data): Data;
declare function CFDataCreateWithBytesNoCopy(allocator: any, bytes: string | any, length: number, bytesDeallocator: any): Data;
declare function CFDataDeleteBytes(theData: Data, range: CFRange): void;
declare function CFDataFind(theData: Data, dataToFind: Data, searchRange: CFRange, compareOptions: CFDataSearchFlags): CFRange;
declare function CFDataGetBytePtr(theData: Data): string;
declare function CFDataGetBytes(theData: Data, range: CFRange, buffer: string | any): void;
declare function CFDataGetLength(theData: Data): number;
declare function CFDataGetMutableBytePtr(theData: Data): string;
declare function CFDataGetTypeID(): number;
declare function CFDataIncreaseLength(theData: Data, extraLength: number): void;
declare function CFDataReplaceBytes(theData: Data, range: CFRange, newBytes: string | any, newLength: number): void;
declare function CFDataSetLength(theData: Data, length: number): void;
declare function CFDateCompare(theDate: Date, otherDate: Date, context: any): CFComparisonResult;
declare function CFDateCreate(allocator: any, at: number): Date;
declare function CFDateFormatterCopyProperty(formatter: any, key: any): any;
declare function CFDateFormatterCreate(allocator: any, locale: Locale, dateStyle: CFDateFormatterStyle, timeStyle: CFDateFormatterStyle): any;
declare function CFDateFormatterCreateDateFormatFromTemplate(allocator: any, tmplate: string, options: number, locale: Locale): string;
declare function CFDateFormatterCreateDateFromString(allocator: any, formatter: any, string: string, rangep: CFRange): Date;
declare function CFDateFormatterCreateISO8601Formatter(allocator: any, formatOptions: CFISO8601DateFormatOptions): any;
declare function CFDateFormatterCreateStringWithAbsoluteTime(allocator: any, formatter: any, at: number): string;
declare function CFDateFormatterCreateStringWithDate(allocator: any, formatter: any, date: Date): string;
declare function CFDateFormatterGetAbsoluteTimeFromString(formatter: any, string: string, rangep: CFRange, atp: number): boolean;
declare function CFDateFormatterGetDateStyle(formatter: any): CFDateFormatterStyle;
declare function CFDateFormatterGetFormat(formatter: any): string;
declare function CFDateFormatterGetLocale(formatter: any): Locale;
declare function CFDateFormatterGetTimeStyle(formatter: any): CFDateFormatterStyle;
declare function CFDateFormatterGetTypeID(): number;
declare function CFDateFormatterSetFormat(formatter: any, formatString: string): void;
declare function CFDateFormatterSetProperty(formatter: any, key: string, value: any): void;
declare function CFDateGetAbsoluteTime(theDate: Date): number;
declare function CFDateGetTimeIntervalSinceDate(theDate: Date, otherDate: Date): number;
declare function CFDateGetTypeID(): number;
declare function CFDictionaryAddValue(theDict: NSDictionary<any, any>, key: any, value: any): void;
declare function CFDictionaryApplyFunction(theDict: NSDictionary<any, any>, applier: (p1: any, p2: any, p3: any) => void, context: any): void;
declare function CFDictionaryContainsKey(theDict: NSDictionary<any, any>, key: any): boolean;
declare function CFDictionaryContainsValue(theDict: NSDictionary<any, any>, value: any): boolean;
declare function CFDictionaryCreate(allocator: any, keys: any, values: any, numValues: number, keyCallBacks: CFDictionaryKeyCallBacks, valueCallBacks: CFDictionaryValueCallBacks): NSDictionary<any, any>;
declare function CFDictionaryCreateCopy(allocator: any, theDict: NSDictionary<any, any>): NSDictionary<any, any>;
declare function CFDictionaryCreateMutable(allocator: any, capacity: number, keyCallBacks: CFDictionaryKeyCallBacks, valueCallBacks: CFDictionaryValueCallBacks): NSDictionary<any, any>;
declare function CFDictionaryCreateMutableCopy(allocator: any, capacity: number, theDict: NSDictionary<any, any>): NSDictionary<any, any>;
declare function CFDictionaryGetCount(theDict: NSDictionary<any, any>): number;
declare function CFDictionaryGetCountOfKey(theDict: NSDictionary<any, any>, key: any): number;
declare function CFDictionaryGetCountOfValue(theDict: NSDictionary<any, any>, value: any): number;
declare function CFDictionaryGetKeysAndValues(theDict: NSDictionary<any, any>, keys: any, values: any): void;
declare function CFDictionaryGetTypeID(): number;
declare function CFDictionaryGetValue(theDict: NSDictionary<any, any>, key: any): any;
declare function CFDictionaryGetValueIfPresent(theDict: NSDictionary<any, any>, key: any, value: any): boolean;
interface CFDictionaryKeyCallBacks {
  version: number;
  retain: (p1: any, p2: any) => any;
  release: (p1: any, p2: any) => void;
  copyDescription: (p1: any) => string;
  equal: (p1: any, p2: any) => boolean;
  hash: (p1: any) => number;
}

declare var CFDictionaryKeyCallBacks: CFDictionaryKeyCallBacks;

declare function CFDictionaryRemoveAllValues(theDict: NSDictionary<any, any>): void;
declare function CFDictionaryRemoveValue(theDict: NSDictionary<any, any>, key: any): void;
declare function CFDictionaryReplaceValue(theDict: NSDictionary<any, any>, key: any, value: any): void;
declare function CFDictionarySetValue(theDict: NSDictionary<any, any>, key: any, value: any): void;
interface CFDictionaryValueCallBacks {
  version: number;
  retain: (p1: any, p2: any) => any;
  release: (p1: any, p2: any) => void;
  copyDescription: (p1: any) => string;
  equal: (p1: any, p2: any) => boolean;
}

declare var CFDictionaryValueCallBacks: CFDictionaryValueCallBacks;

declare function CFEqual(cf1: any, cf2: any): boolean;
declare function CFErrorCopyDescription(err: Error): string;
declare function CFErrorCopyFailureReason(err: Error): string;
declare function CFErrorCopyRecoverySuggestion(err: Error): string;
declare function CFErrorCopyUserInfo(err: Error): NSDictionary<any, any>;
declare function CFErrorCreate(allocator: any, domain: any, code: number, userInfo: NSDictionary<any, any>): Error;
declare function CFErrorCreateWithUserInfoKeysAndValues(allocator: any, domain: any, code: number, userInfoKeys: any, userInfoValues: any, numUserInfoValues: number): Error;
declare function CFErrorGetCode(err: Error): number;
declare function CFErrorGetDomain(err: Error): any;
declare function CFErrorGetTypeID(): number;
interface CFFileDescriptorContext {
  version: number;
  info: any;
  retain: (p1: any) => any;
  release: (p1: any) => void;
  copyDescription: (p1: any) => string;
}

declare var CFFileDescriptorContext: CFFileDescriptorContext;

declare function CFFileDescriptorCreate(allocator: any, fd: number, closeOnInvalidate: boolean, callout: (p1: any, p2: number, p3: any) => void, context: CFFileDescriptorContext): any;
declare function CFFileDescriptorCreateRunLoopSource(allocator: any, f: any, order: number): any;
declare function CFFileDescriptorDisableCallBacks(f: any, callBackTypes: number): void;
declare function CFFileDescriptorEnableCallBacks(f: any, callBackTypes: number): void;
declare function CFFileDescriptorGetContext(f: any, context: CFFileDescriptorContext): void;
declare function CFFileDescriptorGetNativeDescriptor(f: any): number;
declare function CFFileDescriptorGetTypeID(): number;
declare function CFFileDescriptorInvalidate(f: any): void;
declare function CFFileDescriptorIsValid(f: any): boolean;
declare function CFFileSecurityClearProperties(fileSec: NSFileSecurity, clearPropertyMask: CFFileSecurityClearOptions): boolean;
declare function CFFileSecurityCopyAccessControlList(fileSec: NSFileSecurity, accessControlList: any): boolean;
declare function CFFileSecurityCopyGroupUUID(fileSec: NSFileSecurity, groupUUID: any): boolean;
declare function CFFileSecurityCopyOwnerUUID(fileSec: NSFileSecurity, ownerUUID: any): boolean;
declare function CFFileSecurityCreate(allocator: any): NSFileSecurity;
declare function CFFileSecurityCreateCopy(allocator: any, fileSec: NSFileSecurity): NSFileSecurity;
declare function CFFileSecurityGetGroup(fileSec: NSFileSecurity, group: number): boolean;
declare function CFFileSecurityGetMode(fileSec: NSFileSecurity, mode: number): boolean;
declare function CFFileSecurityGetOwner(fileSec: NSFileSecurity, owner: number): boolean;
declare function CFFileSecurityGetTypeID(): number;
declare function CFFileSecuritySetAccessControlList(fileSec: NSFileSecurity, accessControlList: any): boolean;
declare function CFFileSecuritySetGroup(fileSec: NSFileSecurity, group: number): boolean;
declare function CFFileSecuritySetGroupUUID(fileSec: NSFileSecurity, groupUUID: any): boolean;
declare function CFFileSecuritySetMode(fileSec: NSFileSecurity, mode: number): boolean;
declare function CFFileSecuritySetOwner(fileSec: NSFileSecurity, owner: number): boolean;
declare function CFFileSecuritySetOwnerUUID(fileSec: NSFileSecurity, ownerUUID: any): boolean;
declare function CFGetAllocator(cf: any): any;
declare function CFGetRetainCount(cf: any): number;
declare function CFGetTypeID(cf: any): number;
interface CFGregorianDate {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}

declare var CFGregorianDate: CFGregorianDate;

interface CFGregorianUnits {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

declare var CFGregorianUnits: CFGregorianUnits;

declare function CFHash(cf: any): number;
declare function CFLocaleCopyAvailableLocaleIdentifiers(): NSArray<any>;
declare function CFLocaleCopyCommonISOCurrencyCodes(): NSArray<any>;
declare function CFLocaleCopyCurrent(): Locale;
declare function CFLocaleCopyDisplayNameForPropertyValue(displayLocale: Locale, key: any, value: string): string;
declare function CFLocaleCopyISOCountryCodes(): NSArray<any>;
declare function CFLocaleCopyISOCurrencyCodes(): NSArray<any>;
declare function CFLocaleCopyISOLanguageCodes(): NSArray<any>;
declare function CFLocaleCopyPreferredLanguages(): NSArray<any>;
declare function CFLocaleCreate(allocator: any, localeIdentifier: any): Locale;
declare function CFLocaleCreateCanonicalLanguageIdentifierFromString(allocator: any, localeIdentifier: string): any;
declare function CFLocaleCreateCanonicalLocaleIdentifierFromScriptManagerCodes(allocator: any, lcode: number, rcode: number): any;
declare function CFLocaleCreateCanonicalLocaleIdentifierFromString(allocator: any, localeIdentifier: string): any;
declare function CFLocaleCreateComponentsFromLocaleIdentifier(allocator: any, localeID: any): NSDictionary<any, any>;
declare function CFLocaleCreateCopy(allocator: any, locale: Locale): Locale;
declare function CFLocaleCreateLocaleIdentifierFromComponents(allocator: any, dictionary: NSDictionary<any, any>): any;
declare function CFLocaleCreateLocaleIdentifierFromWindowsLocaleCode(allocator: any, lcid: number): any;
declare function CFLocaleGetIdentifier(locale: Locale): any;
declare function CFLocaleGetLanguageCharacterDirection(isoLangCode: string): CFLocaleLanguageDirection;
declare function CFLocaleGetLanguageLineDirection(isoLangCode: string): CFLocaleLanguageDirection;
declare function CFLocaleGetSystem(): Locale;
declare function CFLocaleGetTypeID(): number;
declare function CFLocaleGetValue(locale: Locale, key: any): any;
declare function CFLocaleGetWindowsLocaleCodeFromLocaleIdentifier(localeIdentifier: any): number;
interface CFMachPortContext {
  version: number;
  info: any;
  retain: (p1: any) => any;
  release: (p1: any) => void;
  copyDescription: (p1: any) => string;
}

declare var CFMachPortContext: CFMachPortContext;

declare function CFMachPortCreate(allocator: any, callout: (p1: NSMachPort, p2: any, p3: number, p4: any) => void, context: CFMachPortContext, shouldFreeInfo: string | any): NSMachPort;
declare function CFMachPortCreateRunLoopSource(allocator: any, port: NSMachPort, order: number): any;
declare function CFMachPortCreateWithPort(allocator: any, portNum: number, callout: (p1: NSMachPort, p2: any, p3: number, p4: any) => void, context: CFMachPortContext, shouldFreeInfo: string | any): NSMachPort;
declare function CFMachPortGetContext(port: NSMachPort, context: CFMachPortContext): void;
declare function CFMachPortGetInvalidationCallBack(port: NSMachPort): (p1: NSMachPort, p2: any) => void;
declare function CFMachPortGetPort(port: NSMachPort): number;
declare function CFMachPortGetTypeID(): number;
declare function CFMachPortInvalidate(port: NSMachPort): void;
declare function CFMachPortIsValid(port: NSMachPort): boolean;
declare function CFMachPortSetInvalidationCallBack(port: NSMachPort, callout: (p1: NSMachPort, p2: any) => void): void;
declare function CFMakeCollectable(cf: any): any;
interface CFMessagePortContext {
  version: number;
  info: any;
  retain: (p1: any) => any;
  release: (p1: any) => void;
  copyDescription: (p1: any) => string;
}

declare var CFMessagePortContext: CFMessagePortContext;

declare function CFMessagePortCreateLocal(allocator: any, name: string, callout: (p1: MessagePort, p2: number, p3: Data, p4: any) => Data, context: CFMessagePortContext, shouldFreeInfo: string | any): MessagePort;
declare function CFMessagePortCreateRemote(allocator: any, name: string): MessagePort;
declare function CFMessagePortCreateRunLoopSource(allocator: any, local: MessagePort, order: number): any;
declare function CFMessagePortGetContext(ms: MessagePort, context: CFMessagePortContext): void;
declare function CFMessagePortGetInvalidationCallBack(ms: MessagePort): (p1: MessagePort, p2: any) => void;
declare function CFMessagePortGetName(ms: MessagePort): string;
declare function CFMessagePortGetTypeID(): number;
declare function CFMessagePortInvalidate(ms: MessagePort): void;
declare function CFMessagePortIsRemote(ms: MessagePort): boolean;
declare function CFMessagePortIsValid(ms: MessagePort): boolean;
declare function CFMessagePortSendRequest(remote: MessagePort, msgid: number, data: Data, sendTimeout: number, rcvTimeout: number, replyMode: string, returnData: Data): number;
declare function CFMessagePortSetDispatchQueue(ms: MessagePort, queue: NSObject): void;
declare function CFMessagePortSetInvalidationCallBack(ms: MessagePort, callout: (p1: MessagePort, p2: any) => void): void;
declare function CFMessagePortSetName(ms: MessagePort, newName: string): boolean;
declare function CFNotificationCenterAddObserver(center: any, observer: any, callBack: (p1: any, p2: any, p3: any, p4: any, p5: NSDictionary<any, any>) => void, name: string, object_: any, suspensionBehavior: CFNotificationSuspensionBehavior): void;
declare function CFNotificationCenterGetDarwinNotifyCenter(): any;
declare function CFNotificationCenterGetDistributedCenter(): any;
declare function CFNotificationCenterGetLocalCenter(): any;
declare function CFNotificationCenterGetTypeID(): number;
declare function CFNotificationCenterPostNotification(center: any, name: any, object_: any, userInfo: NSDictionary<any, any>, deliverImmediately: boolean): void;
declare function CFNotificationCenterPostNotificationWithOptions(center: any, name: any, object_: any, userInfo: NSDictionary<any, any>, options: number): void;
declare function CFNotificationCenterRemoveEveryObserver(center: any, observer: any): void;
declare function CFNotificationCenterRemoveObserver(center: any, observer: any, name: any, object_: any): void;
declare function CFNullGetTypeID(): number;
declare function CFNumberCompare(number: number, otherNumber: number, context: any): CFComparisonResult;
declare function CFNumberCreate(allocator: any, theType: CFNumberType, valuePtr: any): number;
declare function CFNumberFormatterCopyProperty(formatter: any, key: any): any;
declare function CFNumberFormatterCreate(allocator: any, locale: Locale, style: CFNumberFormatterStyle): any;
declare function CFNumberFormatterCreateNumberFromString(allocator: any, formatter: any, string: string, rangep: CFRange, options: number): number;
declare function CFNumberFormatterCreateStringWithNumber(allocator: any, formatter: any, number: number): string;
declare function CFNumberFormatterCreateStringWithValue(allocator: any, formatter: any, numberType: CFNumberType, valuePtr: any): string;
declare function CFNumberFormatterGetDecimalInfoForCurrencyCode(currencyCode: string, defaultFractionDigits: number, roundingIncrement: number): boolean;
declare function CFNumberFormatterGetFormat(formatter: any): string;
declare function CFNumberFormatterGetLocale(formatter: any): Locale;
declare function CFNumberFormatterGetStyle(formatter: any): CFNumberFormatterStyle;
declare function CFNumberFormatterGetTypeID(): number;
declare function CFNumberFormatterGetValueFromString(formatter: any, string: string, rangep: CFRange, numberType: CFNumberType, valuePtr: any): boolean;
declare function CFNumberFormatterSetFormat(formatter: any, formatString: string): void;
declare function CFNumberFormatterSetProperty(formatter: any, key: any, value: any): void;
declare function CFNumberGetByteSize(number: number): number;
declare function CFNumberGetType(number: number): CFNumberType;
declare function CFNumberGetTypeID(): number;
declare function CFNumberGetValue(number: number, theType: CFNumberType, valuePtr: any): boolean;
declare function CFNumberIsFloatType(number: number): boolean;
declare function CFPlugInAddInstanceForFactory(factoryID: any): void;
declare function CFPlugInCreate(allocator: any, plugInURL: NSURL): any;
declare function CFPlugInFindFactoriesForPlugInType(typeUUID: any): NSArray<any>;
declare function CFPlugInFindFactoriesForPlugInTypeInPlugIn(typeUUID: any, plugIn: any): NSArray<any>;
declare function CFPlugInGetBundle(plugIn: any): any;
declare function CFPlugInGetTypeID(): number;
declare function CFPlugInInstanceCreate(allocator: any, factoryUUID: any, typeUUID: any): any;
declare function CFPlugInInstanceCreateWithInstanceDataSize(allocator: any, instanceDataSize: number, deallocateInstanceFunction: (p1: any) => void, factoryName: string, getInterfaceFunction: (p1: any, p2: string, p3: any) => boolean): any;
declare function CFPlugInInstanceGetFactoryName(instance: any): string;
declare function CFPlugInInstanceGetInstanceData(instance: any): any;
declare function CFPlugInInstanceGetInterfaceFunctionTable(instance: any, interfaceName: string, ftbl: any): boolean;
declare function CFPlugInInstanceGetTypeID(): number;
declare function CFPlugInIsLoadOnDemand(plugIn: any): boolean;
declare function CFPlugInRegisterFactoryFunction(factoryUUID: any, func: (p1: any, p2: any) => any): boolean;
declare function CFPlugInRegisterFactoryFunctionByName(factoryUUID: any, plugIn: any, functionName: string): boolean;
declare function CFPlugInRegisterPlugInType(factoryUUID: any, typeUUID: any): boolean;
declare function CFPlugInRemoveInstanceForFactory(factoryID: any): void;
declare function CFPlugInSetLoadOnDemand(plugIn: any, flag: boolean): void;
declare function CFPlugInUnregisterFactory(factoryUUID: any): boolean;
declare function CFPlugInUnregisterPlugInType(factoryUUID: any, typeUUID: any): boolean;
declare function CFPreferencesAddSuitePreferencesToApp(applicationID: string, suiteID: string): void;
declare function CFPreferencesAppSynchronize(applicationID: string): boolean;
declare function CFPreferencesAppValueIsForced(key: string, applicationID: string): boolean;
declare function CFPreferencesCopyAppValue(key: string, applicationID: string): any;
declare function CFPreferencesCopyKeyList(applicationID: string, userName: string, hostName: string): NSArray<any>;
declare function CFPreferencesCopyMultiple(keysToFetch: NSArray<any> | any[], applicationID: string, userName: string, hostName: string): NSDictionary<any, any>;
declare function CFPreferencesCopyValue(key: string, applicationID: string, userName: string, hostName: string): any;
declare function CFPreferencesGetAppBooleanValue(key: string, applicationID: string, keyExistsAndHasValidFormat: string | any): boolean;
declare function CFPreferencesGetAppIntegerValue(key: string, applicationID: string, keyExistsAndHasValidFormat: string | any): number;
declare function CFPreferencesRemoveSuitePreferencesFromApp(applicationID: string, suiteID: string): void;
declare function CFPreferencesSetAppValue(key: string, value: any, applicationID: string): void;
declare function CFPreferencesSetMultiple(keysToSet: NSDictionary<any, any>, keysToRemove: NSArray<any> | any[], applicationID: string, userName: string, hostName: string): void;
declare function CFPreferencesSetValue(key: string, value: any, applicationID: string, userName: string, hostName: string): void;
declare function CFPreferencesSynchronize(applicationID: string, userName: string, hostName: string): boolean;
declare function CFPropertyListCreateData(allocator: any, propertyList: any, format: CFPropertyListFormat, options: number, error: Error): Data;
declare function CFPropertyListCreateDeepCopy(allocator: any, propertyList: any, mutabilityOption: number): any;
declare function CFPropertyListCreateWithData(allocator: any, data: Data, options: number, format: CFPropertyListFormat, error: Error): any;
declare function CFPropertyListCreateWithStream(allocator: any, stream: InputStream, streamLength: number, options: number, format: CFPropertyListFormat, error: Error): any;
declare function CFPropertyListIsValid(plist: any, format: CFPropertyListFormat): boolean;
declare function CFPropertyListWrite(propertyList: any, stream: OutputStream, format: CFPropertyListFormat, options: number, error: Error): number;
interface CFRange {
  location: number;
  length: number;
}

declare var CFRange: CFRange;

declare function CFReadStreamClose(stream: InputStream): void;
declare function CFReadStreamCopyDispatchQueue(stream: InputStream): NSObject;
declare function CFReadStreamCopyError(stream: InputStream): Error;
declare function CFReadStreamCopyProperty(stream: InputStream, propertyName: any): any;
declare function CFReadStreamCreateWithBytesNoCopy(alloc: any, bytes: string | any, length: number, bytesDeallocator: any): InputStream;
declare function CFReadStreamCreateWithFile(alloc: any, fileURL: NSURL): InputStream;
declare function CFReadStreamGetBuffer(stream: InputStream, maxBytesToRead: number, numBytesRead: number): string;
declare function CFReadStreamGetError(stream: InputStream): CFStreamError;
declare function CFReadStreamGetStatus(stream: InputStream): CFStreamStatus;
declare function CFReadStreamGetTypeID(): number;
declare function CFReadStreamHasBytesAvailable(stream: InputStream): boolean;
declare function CFReadStreamOpen(stream: InputStream): boolean;
declare function CFReadStreamRead(stream: InputStream, buffer: string | any, bufferLength: number): number;
declare function CFReadStreamScheduleWithRunLoop(stream: InputStream, runLoop: any, runLoopMode: any): void;
declare function CFReadStreamSetClient(stream: InputStream, streamEvents: number, clientCB: (p1: InputStream, p2: CFStreamEventType, p3: any) => void, clientContext: CFStreamClientContext): boolean;
declare function CFReadStreamSetDispatchQueue(stream: InputStream, q: NSObject): void;
declare function CFReadStreamSetProperty(stream: InputStream, propertyName: any, propertyValue: any): boolean;
declare function CFReadStreamUnscheduleFromRunLoop(stream: InputStream, runLoop: any, runLoopMode: any): void;
declare function CFRelease(cf: any): void;
declare function CFRetain(cf: any): any;
declare function CFRunLoopAddCommonMode(rl: any, mode: any): void;
declare function CFRunLoopAddObserver(rl: any, observer: any, mode: any): void;
declare function CFRunLoopAddSource(rl: any, source: any, mode: any): void;
declare function CFRunLoopAddTimer(rl: any, timer: Timer, mode: any): void;
declare function CFRunLoopContainsObserver(rl: any, observer: any, mode: any): boolean;
declare function CFRunLoopContainsSource(rl: any, source: any, mode: any): boolean;
declare function CFRunLoopContainsTimer(rl: any, timer: Timer, mode: any): boolean;
declare function CFRunLoopCopyAllModes(rl: any): NSArray<any>;
declare function CFRunLoopCopyCurrentMode(rl: any): any;
declare function CFRunLoopGetCurrent(): any;
declare function CFRunLoopGetMain(): any;
declare function CFRunLoopGetNextTimerFireDate(rl: any, mode: any): number;
declare function CFRunLoopGetTypeID(): number;
declare function CFRunLoopIsWaiting(rl: any): boolean;
interface CFRunLoopObserverContext {
  version: number;
  info: any;
  retain: (p1: any) => any;
  release: (p1: any) => void;
  copyDescription: (p1: any) => string;
}

declare var CFRunLoopObserverContext: CFRunLoopObserverContext;

declare function CFRunLoopObserverCreate(allocator: any, activities: number, repeats: boolean, order: number, callout: (p1: any, p2: CFRunLoopActivity, p3: any) => void, context: CFRunLoopObserverContext): any;
declare function CFRunLoopObserverCreateWithHandler(allocator: any, activities: number, repeats: boolean, order: number, block: (p1: any, p2: CFRunLoopActivity) => void): any;
declare function CFRunLoopObserverDoesRepeat(observer: any): boolean;
declare function CFRunLoopObserverGetActivities(observer: any): number;
declare function CFRunLoopObserverGetContext(observer: any, context: CFRunLoopObserverContext): void;
declare function CFRunLoopObserverGetOrder(observer: any): number;
declare function CFRunLoopObserverGetTypeID(): number;
declare function CFRunLoopObserverInvalidate(observer: any): void;
declare function CFRunLoopObserverIsValid(observer: any): boolean;
declare function CFRunLoopPerformBlock(rl: any, mode: any, block: () => void): void;
declare function CFRunLoopRemoveObserver(rl: any, observer: any, mode: any): void;
declare function CFRunLoopRemoveSource(rl: any, source: any, mode: any): void;
declare function CFRunLoopRemoveTimer(rl: any, timer: Timer, mode: any): void;
declare function CFRunLoopRun(): void;
declare function CFRunLoopRunInMode(mode: any, seconds: number, returnAfterSourceHandled: boolean): CFRunLoopRunResult;
interface CFRunLoopSourceContext {
  version: number;
  info: any;
  retain: (p1: any) => any;
  release: (p1: any) => void;
  copyDescription: (p1: any) => string;
  equal: (p1: any, p2: any) => boolean;
  hash: (p1: any) => number;
  schedule: (p1: any, p2: any, p3: any) => void;
  cancel: (p1: any, p2: any, p3: any) => void;
  perform: (p1: any) => void;
}

declare var CFRunLoopSourceContext: CFRunLoopSourceContext;

interface CFRunLoopSourceContext1 {
  version: number;
  info: any;
  retain: (p1: any) => any;
  release: (p1: any) => void;
  copyDescription: (p1: any) => string;
  equal: (p1: any, p2: any) => boolean;
  hash: (p1: any) => number;
  getPort: (p1: any) => number;
  perform: (p1: any, p2: number, p3: any, p4: any) => any;
}

declare var CFRunLoopSourceContext1: CFRunLoopSourceContext1;

declare function CFRunLoopSourceCreate(allocator: any, order: number, context: CFRunLoopSourceContext): any;
declare function CFRunLoopSourceGetContext(source: any, context: CFRunLoopSourceContext): void;
declare function CFRunLoopSourceGetOrder(source: any): number;
declare function CFRunLoopSourceGetTypeID(): number;
declare function CFRunLoopSourceInvalidate(source: any): void;
declare function CFRunLoopSourceIsValid(source: any): boolean;
declare function CFRunLoopSourceSignal(source: any): void;
declare function CFRunLoopStop(rl: any): void;
interface CFRunLoopTimerContext {
  version: number;
  info: any;
  retain: (p1: any) => any;
  release: (p1: any) => void;
  copyDescription: (p1: any) => string;
}

declare var CFRunLoopTimerContext: CFRunLoopTimerContext;

declare function CFRunLoopTimerCreate(allocator: any, fireDate: number, interval: number, flags: number, order: number, callout: (p1: Timer, p2: any) => void, context: CFRunLoopTimerContext): Timer;
declare function CFRunLoopTimerCreateWithHandler(allocator: any, fireDate: number, interval: number, flags: number, order: number, block: (p1: Timer) => void): Timer;
declare function CFRunLoopTimerDoesRepeat(timer: Timer): boolean;
declare function CFRunLoopTimerGetContext(timer: Timer, context: CFRunLoopTimerContext): void;
declare function CFRunLoopTimerGetInterval(timer: Timer): number;
declare function CFRunLoopTimerGetNextFireDate(timer: Timer): number;
declare function CFRunLoopTimerGetOrder(timer: Timer): number;
declare function CFRunLoopTimerGetTolerance(timer: Timer): number;
declare function CFRunLoopTimerGetTypeID(): number;
declare function CFRunLoopTimerInvalidate(timer: Timer): void;
declare function CFRunLoopTimerIsValid(timer: Timer): boolean;
declare function CFRunLoopTimerSetNextFireDate(timer: Timer, fireDate: number): void;
declare function CFRunLoopTimerSetTolerance(timer: Timer, tolerance: number): void;
declare function CFRunLoopWakeUp(rl: any): void;
declare function CFSetAddValue(theSet: Set<any>, value: any): void;
declare function CFSetApplyFunction(theSet: Set<any>, applier: (p1: any, p2: any) => void, context: any): void;
interface CFSetCallBacks {
  version: number;
  retain: (p1: any, p2: any) => any;
  release: (p1: any, p2: any) => void;
  copyDescription: (p1: any) => string;
  equal: (p1: any, p2: any) => boolean;
  hash: (p1: any) => number;
}

declare var CFSetCallBacks: CFSetCallBacks;

declare function CFSetContainsValue(theSet: Set<any>, value: any): boolean;
declare function CFSetCreate(allocator: any, values: any, numValues: number, callBacks: CFSetCallBacks): Set<any>;
declare function CFSetCreateCopy(allocator: any, theSet: Set<any>): Set<any>;
declare function CFSetCreateMutable(allocator: any, capacity: number, callBacks: CFSetCallBacks): Set<any>;
declare function CFSetCreateMutableCopy(allocator: any, capacity: number, theSet: Set<any>): Set<any>;
declare function CFSetGetCount(theSet: Set<any>): number;
declare function CFSetGetCountOfValue(theSet: Set<any>, value: any): number;
declare function CFSetGetTypeID(): number;
declare function CFSetGetValue(theSet: Set<any>, value: any): any;
declare function CFSetGetValueIfPresent(theSet: Set<any>, candidate: any, value: any): boolean;
declare function CFSetGetValues(theSet: Set<any>, values: any): void;
declare function CFSetRemoveAllValues(theSet: Set<any>): void;
declare function CFSetRemoveValue(theSet: Set<any>, value: any): void;
declare function CFSetReplaceValue(theSet: Set<any>, value: any): void;
declare function CFSetSetValue(theSet: Set<any>, value: any): void;
declare function CFShow(obj: any): void;
declare function CFShowStr(str: string): void;
declare function CFSocketConnectToAddress(s: any, address: Data, timeout: number): CFSocketError;
interface CFSocketContext {
  version: number;
  info: any;
  retain: (p1: any) => any;
  release: (p1: any) => void;
  copyDescription: (p1: any) => string;
}

declare var CFSocketContext: CFSocketContext;

declare function CFSocketCopyAddress(s: any): Data;
declare function CFSocketCopyPeerAddress(s: any): Data;
declare function CFSocketCopyRegisteredSocketSignature(nameServerSignature: CFSocketSignature, timeout: number, name: string, signature: CFSocketSignature, nameServerAddress: Data): CFSocketError;
declare function CFSocketCopyRegisteredValue(nameServerSignature: CFSocketSignature, timeout: number, name: string, value: any, nameServerAddress: Data): CFSocketError;
declare function CFSocketCreate(allocator: any, protocolFamily: number, socketType: number, protocol: number, callBackTypes: number, callout: (p1: any, p2: CFSocketCallBackType, p3: Data, p4: any, p5: any) => void, context: CFSocketContext): any;
declare function CFSocketCreateConnectedToSocketSignature(allocator: any, signature: CFSocketSignature, callBackTypes: number, callout: (p1: any, p2: CFSocketCallBackType, p3: Data, p4: any, p5: any) => void, context: CFSocketContext, timeout: number): any;
declare function CFSocketCreateRunLoopSource(allocator: any, s: any, order: number): any;
declare function CFSocketCreateWithNative(allocator: any, sock: number, callBackTypes: number, callout: (p1: any, p2: CFSocketCallBackType, p3: Data, p4: any, p5: any) => void, context: CFSocketContext): any;
declare function CFSocketCreateWithSocketSignature(allocator: any, signature: CFSocketSignature, callBackTypes: number, callout: (p1: any, p2: CFSocketCallBackType, p3: Data, p4: any, p5: any) => void, context: CFSocketContext): any;
declare function CFSocketDisableCallBacks(s: any, callBackTypes: number): void;
declare function CFSocketEnableCallBacks(s: any, callBackTypes: number): void;
declare function CFSocketGetContext(s: any, context: CFSocketContext): void;
declare function CFSocketGetDefaultNameRegistryPortNumber(): number;
declare function CFSocketGetNative(s: any): number;
declare function CFSocketGetSocketFlags(s: any): number;
declare function CFSocketGetTypeID(): number;
declare function CFSocketInvalidate(s: any): void;
declare function CFSocketIsValid(s: any): boolean;
declare function CFSocketRegisterSocketSignature(nameServerSignature: CFSocketSignature, timeout: number, name: string, signature: CFSocketSignature): CFSocketError;
declare function CFSocketRegisterValue(nameServerSignature: CFSocketSignature, timeout: number, name: string, value: any): CFSocketError;
declare function CFSocketSendData(s: any, address: Data, data: Data, timeout: number): CFSocketError;
declare function CFSocketSetAddress(s: any, address: Data): CFSocketError;
declare function CFSocketSetDefaultNameRegistryPortNumber(port: number): void;
declare function CFSocketSetSocketFlags(s: any, flags: number): void;
interface CFSocketSignature {
  protocolFamily: number;
  socketType: number;
  protocol: number;
  address: Data;
}

declare var CFSocketSignature: CFSocketSignature;

declare function CFSocketUnregister(nameServerSignature: CFSocketSignature, timeout: number, name: string): CFSocketError;
interface CFStreamClientContext {
  version: number;
  info: any;
  retain: (p1: any) => any;
  release: (p1: any) => void;
  copyDescription: (p1: any) => string;
}

declare var CFStreamClientContext: CFStreamClientContext;

declare function CFStreamCreateBoundPair(alloc: any, readStream: InputStream, writeStream: OutputStream, transferBufferSize: number): void;
declare function CFStreamCreatePairWithPeerSocketSignature(alloc: any, signature: CFSocketSignature, readStream: InputStream, writeStream: OutputStream): void;
declare function CFStreamCreatePairWithSocket(alloc: any, sock: number, readStream: InputStream, writeStream: OutputStream): void;
declare function CFStreamCreatePairWithSocketToHost(alloc: any, host: string, port: number, readStream: InputStream, writeStream: OutputStream): void;
interface CFStreamError {
  domain: number;
  error: number;
}

declare var CFStreamError: CFStreamError;

declare function CFStringAppend(theString: string, appendedString: string): void;
declare function CFStringAppendCString(theString: string, cStr: string | any, encoding: number): void;
declare function CFStringAppendCharacters(theString: string, chars: number, numChars: number): void;
declare function CFStringAppendPascalString(theString: string, pStr: string | any, encoding: number): void;
declare function CFStringCapitalize(theString: string, locale: Locale): void;
declare function CFStringCompare(theString1: string, theString2: string, compareOptions: CFStringCompareFlags): CFComparisonResult;
declare function CFStringCompareWithOptions(theString1: string, theString2: string, rangeToCompare: CFRange, compareOptions: CFStringCompareFlags): CFComparisonResult;
declare function CFStringCompareWithOptionsAndLocale(theString1: string, theString2: string, rangeToCompare: CFRange, compareOptions: CFStringCompareFlags, locale: Locale): CFComparisonResult;
declare function CFStringConvertEncodingToIANACharSetName(encoding: number): string;
declare function CFStringConvertEncodingToNSStringEncoding(encoding: number): number;
declare function CFStringConvertEncodingToWindowsCodepage(encoding: number): number;
declare function CFStringConvertIANACharSetNameToEncoding(theString: string): number;
declare function CFStringConvertNSStringEncodingToEncoding(encoding: number): number;
declare function CFStringConvertWindowsCodepageToEncoding(codepage: number): number;
declare function CFStringCreateArrayBySeparatingStrings(alloc: any, theString: string, separatorString: string): NSArray<any>;
declare function CFStringCreateArrayWithFindResults(alloc: any, theString: string, stringToFind: string, rangeToSearch: CFRange, compareOptions: CFStringCompareFlags): NSArray<any>;
declare function CFStringCreateByCombiningStrings(alloc: any, theArray: NSArray<any> | any[], separatorString: string): string;
declare function CFStringCreateCopy(alloc: any, theString: string): string;
declare function CFStringCreateExternalRepresentation(alloc: any, theString: string, encoding: number, lossByte: number): Data;
declare function CFStringCreateFromExternalRepresentation(alloc: any, data: Data, encoding: number): string;
declare function CFStringCreateMutable(alloc: any, maxLength: number): string;
declare function CFStringCreateMutableCopy(alloc: any, maxLength: number, theString: string): string;
declare function CFStringCreateMutableWithExternalCharactersNoCopy(alloc: any, chars: number, numChars: number, capacity: number, externalCharactersAllocator: any): string;
declare function CFStringCreateWithBytes(alloc: any, bytes: string | any, numBytes: number, encoding: number, isExternalRepresentation: boolean): string;
declare function CFStringCreateWithBytesNoCopy(alloc: any, bytes: string | any, numBytes: number, encoding: number, isExternalRepresentation: boolean, contentsDeallocator: any): string;
declare function CFStringCreateWithCString(alloc: any, cStr: string | any, encoding: number): string;
declare function CFStringCreateWithCStringNoCopy(alloc: any, cStr: string | any, encoding: number, contentsDeallocator: any): string;
declare function CFStringCreateWithCharacters(alloc: any, chars: number, numChars: number): string;
declare function CFStringCreateWithCharactersNoCopy(alloc: any, chars: number, numChars: number, contentsDeallocator: any): string;
declare function CFStringCreateWithFileSystemRepresentation(alloc: any, buffer: string | any): string;
declare function CFStringCreateWithPascalString(alloc: any, pStr: string | any, encoding: number): string;
declare function CFStringCreateWithPascalStringNoCopy(alloc: any, pStr: string | any, encoding: number, contentsDeallocator: any): string;
declare function CFStringCreateWithSubstring(alloc: any, str: string, range: CFRange): string;
declare function CFStringDelete(theString: string, range: CFRange): void;
declare function CFStringFind(theString: string, stringToFind: string, compareOptions: CFStringCompareFlags): CFRange;
declare function CFStringFindAndReplace(theString: string, stringToFind: string, replacementString: string, rangeToSearch: CFRange, compareOptions: CFStringCompareFlags): number;
declare function CFStringFindCharacterFromSet(theString: string, theSet: CharacterSet, rangeToSearch: CFRange, searchOptions: CFStringCompareFlags, result: CFRange): boolean;
declare function CFStringFindWithOptions(theString: string, stringToFind: string, rangeToSearch: CFRange, searchOptions: CFStringCompareFlags, result: CFRange): boolean;
declare function CFStringFindWithOptionsAndLocale(theString: string, stringToFind: string, rangeToSearch: CFRange, searchOptions: CFStringCompareFlags, locale: Locale, result: CFRange): boolean;
declare function CFStringFold(theString: string, theFlags: CFStringCompareFlags, theLocale: Locale): void;
declare function CFStringGetBytes(theString: string, range: CFRange, encoding: number, lossByte: number, isExternalRepresentation: boolean, buffer: string | any, maxBufLen: number, usedBufLen: number): number;
declare function CFStringGetCString(theString: string, buffer: string | any, bufferSize: number, encoding: number): boolean;
declare function CFStringGetCStringPtr(theString: string, encoding: number): string;
declare function CFStringGetCharacterAtIndex(theString: string, idx: number): number;
declare function CFStringGetCharacters(theString: string, range: CFRange, buffer: number): void;
declare function CFStringGetCharactersPtr(theString: string): number;
declare function CFStringGetDoubleValue(str: string): number;
declare function CFStringGetFastestEncoding(theString: string): number;
declare function CFStringGetFileSystemRepresentation(string: string, buffer: string | any, maxBufLen: number): boolean;
declare function CFStringGetHyphenationLocationBeforeIndex(string: string, location: number, limitRange: CFRange, options: number, locale: Locale, character: number): number;
declare function CFStringGetIntValue(str: string): number;
declare function CFStringGetLength(theString: string): number;
declare function CFStringGetLineBounds(theString: string, range: CFRange, lineBeginIndex: number, lineEndIndex: number, contentsEndIndex: number): void;
declare function CFStringGetListOfAvailableEncodings(): number;
declare function CFStringGetMaximumSizeForEncoding(length: number, encoding: number): number;
declare function CFStringGetMaximumSizeOfFileSystemRepresentation(string: string): number;
declare function CFStringGetMostCompatibleMacStringEncoding(encoding: number): number;
declare function CFStringGetNameOfEncoding(encoding: number): string;
declare function CFStringGetParagraphBounds(string: string, range: CFRange, parBeginIndex: number, parEndIndex: number, contentsEndIndex: number): void;
declare function CFStringGetPascalString(theString: string, buffer: string | any, bufferSize: number, encoding: number): boolean;
declare function CFStringGetPascalStringPtr(theString: string, encoding: number): string;
declare function CFStringGetRangeOfComposedCharactersAtIndex(theString: string, theIndex: number): CFRange;
declare function CFStringGetSmallestEncoding(theString: string): number;
declare function CFStringGetSystemEncoding(): number;
declare function CFStringGetTypeID(): number;
declare function CFStringHasPrefix(theString: string, prefix: string): boolean;
declare function CFStringHasSuffix(theString: string, suffix: string): boolean;
interface CFStringInlineBuffer {
  buffer: number;
  theString: string;
  directUniCharBuffer: number;
  directCStringBuffer: string;
  rangeToBuffer: CFRange;
  bufferedRangeStart: number;
  bufferedRangeEnd: number;
}

declare var CFStringInlineBuffer: CFStringInlineBuffer;

declare function CFStringInsert(str: string, idx: number, insertedStr: string): void;
declare function CFStringIsEncodingAvailable(encoding: number): boolean;
declare function CFStringIsHyphenationAvailableForLocale(locale: Locale): boolean;
declare function CFStringLowercase(theString: string, locale: Locale): void;
declare function CFStringNormalize(theString: string, theForm: CFStringNormalizationForm): void;
declare function CFStringPad(theString: string, padString: string, length: number, indexIntoPad: number): void;
declare function CFStringReplace(theString: string, range: CFRange, replacement: string): void;
declare function CFStringReplaceAll(theString: string, replacement: string): void;
declare function CFStringSetExternalCharactersNoCopy(theString: string, chars: number, length: number, capacity: number): void;
declare function CFStringTokenizerAdvanceToNextToken(tokenizer: any): CFStringTokenizerTokenType;
declare function CFStringTokenizerCopyBestStringLanguage(string: string, range: CFRange): string;
declare function CFStringTokenizerCopyCurrentTokenAttribute(tokenizer: any, attribute: number): any;
declare function CFStringTokenizerCreate(alloc: any, string: string, range: CFRange, options: number, locale: Locale): any;
declare function CFStringTokenizerGetCurrentSubTokens(tokenizer: any, ranges: CFRange, maxRangeLength: number, derivedSubTokens: NSArray<any> | any[]): number;
declare function CFStringTokenizerGetCurrentTokenRange(tokenizer: any): CFRange;
declare function CFStringTokenizerGetTypeID(): number;
declare function CFStringTokenizerGoToTokenAtIndex(tokenizer: any, index: number): CFStringTokenizerTokenType;
declare function CFStringTokenizerSetString(tokenizer: any, string: string, range: CFRange): void;
declare function CFStringTransform(string: string, range: CFRange, transform: string, reverse: boolean): boolean;
declare function CFStringTrim(theString: string, trimString: string): void;
declare function CFStringTrimWhitespace(theString: string): void;
declare function CFStringUppercase(theString: string, locale: Locale): void;
interface CFSwappedFloat32 {
  v: number;
}

declare var CFSwappedFloat32: CFSwappedFloat32;

interface CFSwappedFloat64 {
  v: number;
}

declare var CFSwappedFloat64: CFSwappedFloat64;

declare function CFTimeZoneCopyAbbreviation(tz: NSTimeZone, at: number): string;
declare function CFTimeZoneCopyAbbreviationDictionary(): NSDictionary<any, any>;
declare function CFTimeZoneCopyDefault(): NSTimeZone;
declare function CFTimeZoneCopyKnownNames(): NSArray<any>;
declare function CFTimeZoneCopyLocalizedName(tz: NSTimeZone, style: CFTimeZoneNameStyle, locale: Locale): string;
declare function CFTimeZoneCopySystem(): NSTimeZone;
declare function CFTimeZoneCreate(allocator: any, name: string, data: Data): NSTimeZone;
declare function CFTimeZoneCreateWithName(allocator: any, name: string, tryAbbrev: boolean): NSTimeZone;
declare function CFTimeZoneCreateWithTimeIntervalFromGMT(allocator: any, ti: number): NSTimeZone;
declare function CFTimeZoneGetData(tz: NSTimeZone): Data;
declare function CFTimeZoneGetDaylightSavingTimeOffset(tz: NSTimeZone, at: number): number;
declare function CFTimeZoneGetName(tz: NSTimeZone): string;
declare function CFTimeZoneGetNextDaylightSavingTimeTransition(tz: NSTimeZone, at: number): number;
declare function CFTimeZoneGetSecondsFromGMT(tz: NSTimeZone, at: number): number;
declare function CFTimeZoneGetTypeID(): number;
declare function CFTimeZoneIsDaylightSavingTime(tz: NSTimeZone, at: number): boolean;
declare function CFTimeZoneResetSystem(): void;
declare function CFTimeZoneSetAbbreviationDictionary(dict: NSDictionary<any, any>): void;
declare function CFTimeZoneSetDefault(tz: NSTimeZone): void;
declare function CFTreeAppendChild(tree: any, newChild: any): void;
declare function CFTreeApplyFunctionToChildren(tree: any, applier: (p1: any, p2: any) => void, context: any): void;
interface CFTreeContext {
  version: number;
  info: any;
  retain: (p1: any) => any;
  release: (p1: any) => void;
  copyDescription: (p1: any) => string;
}

declare var CFTreeContext: CFTreeContext;

declare function CFTreeCreate(allocator: any, context: CFTreeContext): any;
declare function CFTreeFindRoot(tree: any): any;
declare function CFTreeGetChildAtIndex(tree: any, idx: number): any;
declare function CFTreeGetChildCount(tree: any): number;
declare function CFTreeGetChildren(tree: any, children: any): void;
declare function CFTreeGetContext(tree: any, context: CFTreeContext): void;
declare function CFTreeGetFirstChild(tree: any): any;
declare function CFTreeGetNextSibling(tree: any): any;
declare function CFTreeGetParent(tree: any): any;
declare function CFTreeGetTypeID(): number;
declare function CFTreeInsertSibling(tree: any, newSibling: any): void;
declare function CFTreePrependChild(tree: any, newChild: any): void;
declare function CFTreeRemove(tree: any): void;
declare function CFTreeRemoveAllChildren(tree: any): void;
declare function CFTreeSetContext(tree: any, context: CFTreeContext): void;
declare function CFTreeSortChildren(tree: any, comparator: (p1: any, p2: any, p3: any) => CFComparisonResult, context: any): void;
declare function CFURLCanBeDecomposed(anURL: NSURL): boolean;
declare function CFURLClearResourcePropertyCache(url: NSURL): void;
declare function CFURLClearResourcePropertyCacheForKey(url: NSURL, key: string): void;
declare function CFURLCopyAbsoluteURL(relativeURL: NSURL): NSURL;
declare function CFURLCopyFileSystemPath(anURL: NSURL, pathStyle: CFURLPathStyle): string;
declare function CFURLCopyFragment(anURL: NSURL, charactersToLeaveEscaped: string): string;
declare function CFURLCopyHostName(anURL: NSURL): string;
declare function CFURLCopyLastPathComponent(url: NSURL): string;
declare function CFURLCopyNetLocation(anURL: NSURL): string;
declare function CFURLCopyPassword(anURL: NSURL): string;
declare function CFURLCopyPath(anURL: NSURL): string;
declare function CFURLCopyPathExtension(url: NSURL): string;
declare function CFURLCopyQueryString(anURL: NSURL, charactersToLeaveEscaped: string): string;
declare function CFURLCopyResourcePropertiesForKeys(url: NSURL, keys: NSArray<any> | any[], error: Error): NSDictionary<any, any>;
declare function CFURLCopyResourcePropertyForKey(url: NSURL, key: string, propertyValueTypeRefPtr: any, error: Error): boolean;
declare function CFURLCopyResourceSpecifier(anURL: NSURL): string;
declare function CFURLCopyScheme(anURL: NSURL): string;
declare function CFURLCopyStrictPath(anURL: NSURL, isAbsolute: string | any): string;
declare function CFURLCopyUserName(anURL: NSURL): string;
declare function CFURLCreateAbsoluteURLWithBytes(alloc: any, relativeURLBytes: string | any, length: number, encoding: number, baseURL: NSURL, useCompatibilityMode: boolean): NSURL;
declare function CFURLCreateBookmarkData(allocator: any, url: NSURL, options: CFURLBookmarkCreationOptions, resourcePropertiesToInclude: NSArray<any> | any[], relativeToURL: NSURL, error: Error): Data;
declare function CFURLCreateBookmarkDataFromAliasRecord(allocatorRef: any, aliasRecordDataRef: Data): Data;
declare function CFURLCreateBookmarkDataFromFile(allocator: any, fileURL: NSURL, errorRef: Error): Data;
declare function CFURLCreateByResolvingBookmarkData(allocator: any, bookmark: Data, options: CFURLBookmarkResolutionOptions, relativeToURL: NSURL, resourcePropertiesToInclude: NSArray<any> | any[], isStale: string | any, error: Error): NSURL;
declare function CFURLCreateCopyAppendingPathComponent(allocator: any, url: NSURL, pathComponent: string, isDirectory: boolean): NSURL;
declare function CFURLCreateCopyAppendingPathExtension(allocator: any, url: NSURL, extension: string): NSURL;
declare function CFURLCreateCopyDeletingLastPathComponent(allocator: any, url: NSURL): NSURL;
declare function CFURLCreateCopyDeletingPathExtension(allocator: any, url: NSURL): NSURL;
declare function CFURLCreateData(allocator: any, url: NSURL, encoding: number, escapeWhitespace: boolean): Data;
declare function CFURLCreateFilePathURL(allocator: any, url: NSURL, error: Error): NSURL;
declare function CFURLCreateFileReferenceURL(allocator: any, url: NSURL, error: Error): NSURL;
declare function CFURLCreateFromFileSystemRepresentation(allocator: any, buffer: string | any, bufLen: number, isDirectory: boolean): NSURL;
declare function CFURLCreateFromFileSystemRepresentationRelativeToBase(allocator: any, buffer: string | any, bufLen: number, isDirectory: boolean, baseURL: NSURL): NSURL;
declare function CFURLCreateResourcePropertiesForKeysFromBookmarkData(allocator: any, resourcePropertiesToReturn: NSArray<any> | any[], bookmark: Data): NSDictionary<any, any>;
declare function CFURLCreateResourcePropertyForKeyFromBookmarkData(allocator: any, resourcePropertyKey: string, bookmark: Data): any;
declare function CFURLCreateStringByReplacingPercentEscapes(allocator: any, originalString: string, charactersToLeaveEscaped: string): string;
declare function CFURLCreateWithBytes(allocator: any, URLBytes: string | any, length: number, encoding: number, baseURL: NSURL): NSURL;
declare function CFURLCreateWithFileSystemPath(allocator: any, filePath: string, pathStyle: CFURLPathStyle, isDirectory: boolean): NSURL;
declare function CFURLCreateWithFileSystemPathRelativeToBase(allocator: any, filePath: string, pathStyle: CFURLPathStyle, isDirectory: boolean, baseURL: NSURL): NSURL;
declare function CFURLCreateWithString(allocator: any, URLString: string, baseURL: NSURL): NSURL;
declare function CFURLEnumeratorCreateForDirectoryURL(alloc: any, directoryURL: NSURL, option: CFURLEnumeratorOptions, propertyKeys: NSArray<any> | any[]): any;
declare function CFURLEnumeratorCreateForMountedVolumes(alloc: any, option: CFURLEnumeratorOptions, propertyKeys: NSArray<any> | any[]): any;
declare function CFURLEnumeratorGetDescendentLevel(enumerator: any): number;
declare function CFURLEnumeratorGetNextURL(enumerator: any, url: NSURL, error: Error): CFURLEnumeratorResult;
declare function CFURLEnumeratorGetTypeID(): number;
declare function CFURLEnumeratorSkipDescendents(enumerator: any): void;
declare function CFURLGetBaseURL(anURL: NSURL): NSURL;
declare function CFURLGetByteRangeForComponent(url: NSURL, component: CFURLComponentType, rangeIncludingSeparators: CFRange): CFRange;
declare function CFURLGetBytes(url: NSURL, buffer: string | any, bufferLength: number): number;
declare function CFURLGetFileSystemRepresentation(url: NSURL, resolveAgainstBase: boolean, buffer: string | any, maxBufLen: number): boolean;
declare function CFURLGetPortNumber(anURL: NSURL): number;
declare function CFURLGetString(anURL: NSURL): string;
declare function CFURLGetTypeID(): number;
declare function CFURLHasDirectoryPath(anURL: NSURL): boolean;
declare function CFURLIsFileReferenceURL(url: NSURL): boolean;
declare function CFURLResourceIsReachable(url: NSURL, error: Error): boolean;
declare function CFURLSetResourcePropertiesForKeys(url: NSURL, keyedPropertyValues: NSDictionary<any, any>, error: Error): boolean;
declare function CFURLSetResourcePropertyForKey(url: NSURL, key: string, propertyValue: any, error: Error): boolean;
declare function CFURLSetTemporaryResourcePropertyForKey(url: NSURL, key: string, propertyValue: any): void;
declare function CFURLStartAccessingSecurityScopedResource(url: NSURL): boolean;
declare function CFURLStopAccessingSecurityScopedResource(url: NSURL): void;
declare function CFURLWriteBookmarkDataToFile(bookmarkRef: Data, fileURL: NSURL, options: number, errorRef: Error): boolean;
interface CFUUIDBytes {
  byte0: number;
  byte1: number;
  byte2: number;
  byte3: number;
  byte4: number;
  byte5: number;
  byte6: number;
  byte7: number;
  byte8: number;
  byte9: number;
  byte10: number;
  byte11: number;
  byte12: number;
  byte13: number;
  byte14: number;
  byte15: number;
}

declare var CFUUIDBytes: CFUUIDBytes;

declare function CFUUIDCreate(alloc: any): any;
declare function CFUUIDCreateFromString(alloc: any, uuidStr: string): any;
declare function CFUUIDCreateFromUUIDBytes(alloc: any, bytes: CFUUIDBytes): any;
declare function CFUUIDCreateString(alloc: any, uuid: any): string;
declare function CFUUIDCreateWithBytes(alloc: any, byte0: number, byte1: number, byte2: number, byte3: number, byte4: number, byte5: number, byte6: number, byte7: number, byte8: number, byte9: number, byte10: number, byte11: number, byte12: number, byte13: number, byte14: number, byte15: number): any;
declare function CFUUIDGetConstantUUIDWithBytes(alloc: any, byte0: number, byte1: number, byte2: number, byte3: number, byte4: number, byte5: number, byte6: number, byte7: number, byte8: number, byte9: number, byte10: number, byte11: number, byte12: number, byte13: number, byte14: number, byte15: number): any;
declare function CFUUIDGetTypeID(): number;
declare function CFUUIDGetUUIDBytes(uuid: any): CFUUIDBytes;
declare function CFUserNotificationCancel(userNotification: any): number;
declare function CFUserNotificationCreate(allocator: any, timeout: number, flags: number, error: number, dictionary: NSDictionary<any, any>): any;
declare function CFUserNotificationCreateRunLoopSource(allocator: any, userNotification: any, callout: (p1: any, p2: number) => void, order: number): any;
declare function CFUserNotificationDisplayAlert(timeout: number, flags: number, iconURL: NSURL, soundURL: NSURL, localizationURL: NSURL, alertHeader: string, alertMessage: string, defaultButtonTitle: string, alternateButtonTitle: string, otherButtonTitle: string, responseFlags: number): number;
declare function CFUserNotificationDisplayNotice(timeout: number, flags: number, iconURL: NSURL, soundURL: NSURL, localizationURL: NSURL, alertHeader: string, alertMessage: string, defaultButtonTitle: string): number;
declare function CFUserNotificationGetResponseDictionary(userNotification: any): NSDictionary<any, any>;
declare function CFUserNotificationGetResponseValue(userNotification: any, key: string, idx: number): string;
declare function CFUserNotificationGetTypeID(): number;
declare function CFUserNotificationReceiveResponse(userNotification: any, timeout: number, responseFlags: number): number;
declare function CFUserNotificationUpdate(userNotification: any, timeout: number, flags: number, dictionary: NSDictionary<any, any>): number;
declare function CFWriteStreamCanAcceptBytes(stream: OutputStream): boolean;
declare function CFWriteStreamClose(stream: OutputStream): void;
declare function CFWriteStreamCopyDispatchQueue(stream: OutputStream): NSObject;
declare function CFWriteStreamCopyError(stream: OutputStream): Error;
declare function CFWriteStreamCopyProperty(stream: OutputStream, propertyName: any): any;
declare function CFWriteStreamCreateWithAllocatedBuffers(alloc: any, bufferAllocator: any): OutputStream;
declare function CFWriteStreamCreateWithBuffer(alloc: any, buffer: string | any, bufferCapacity: number): OutputStream;
declare function CFWriteStreamCreateWithFile(alloc: any, fileURL: NSURL): OutputStream;
declare function CFWriteStreamGetError(stream: OutputStream): CFStreamError;
declare function CFWriteStreamGetStatus(stream: OutputStream): CFStreamStatus;
declare function CFWriteStreamGetTypeID(): number;
declare function CFWriteStreamOpen(stream: OutputStream): boolean;
declare function CFWriteStreamScheduleWithRunLoop(stream: OutputStream, runLoop: any, runLoopMode: any): void;
declare function CFWriteStreamSetClient(stream: OutputStream, streamEvents: number, clientCB: (p1: OutputStream, p2: CFStreamEventType, p3: any) => void, clientContext: CFStreamClientContext): boolean;
declare function CFWriteStreamSetDispatchQueue(stream: OutputStream, q: NSObject): void;
declare function CFWriteStreamSetProperty(stream: OutputStream, propertyName: any, propertyValue: any): boolean;
declare function CFWriteStreamUnscheduleFromRunLoop(stream: OutputStream, runLoop: any, runLoopMode: any): void;
declare function CFWriteStreamWrite(stream: OutputStream, buffer: string | any, bufferLength: number): number;
interface CFXMLAttributeDeclarationInfo {
  attributeName: string;
  typeString: string;
  defaultString: string;
}

declare var CFXMLAttributeDeclarationInfo: CFXMLAttributeDeclarationInfo;

interface CFXMLAttributeListDeclarationInfo {
  numberOfAttributes: number;
  attributes: CFXMLAttributeDeclarationInfo;
}

declare var CFXMLAttributeListDeclarationInfo: CFXMLAttributeListDeclarationInfo;

declare function CFXMLCreateStringByEscapingEntities(allocator: any, string: string, entitiesDictionary: NSDictionary<any, any>): string;
declare function CFXMLCreateStringByUnescapingEntities(allocator: any, string: string, entitiesDictionary: NSDictionary<any, any>): string;
interface CFXMLDocumentInfo {
  sourceURL: NSURL;
  encoding: number;
}

declare var CFXMLDocumentInfo: CFXMLDocumentInfo;

interface CFXMLDocumentTypeInfo {
  externalID: CFXMLExternalID;
}

declare var CFXMLDocumentTypeInfo: CFXMLDocumentTypeInfo;

interface CFXMLElementInfo {
  attributes: NSDictionary<any, any>;
  attributeOrder: NSArray<any>;
  isEmpty: boolean;
  _reserved: number;
}

declare var CFXMLElementInfo: CFXMLElementInfo;

interface CFXMLElementTypeDeclarationInfo {
  contentDescription: string;
}

declare var CFXMLElementTypeDeclarationInfo: CFXMLElementTypeDeclarationInfo;

interface CFXMLEntityInfo {
  entityType: CFXMLEntityTypeCode;
  replacementText: string;
  entityID: CFXMLExternalID;
  notationName: string;
}

declare var CFXMLEntityInfo: CFXMLEntityInfo;

interface CFXMLEntityReferenceInfo {
  entityType: CFXMLEntityTypeCode;
}

declare var CFXMLEntityReferenceInfo: CFXMLEntityReferenceInfo;

interface CFXMLExternalID {
  systemID: NSURL;
  publicID: string;
}

declare var CFXMLExternalID: CFXMLExternalID;

interface CFXMLNotationInfo {
  externalID: CFXMLExternalID;
}

declare var CFXMLNotationInfo: CFXMLNotationInfo;

interface CFXMLParserCallBacks {
  version: number;
  createXMLStructure: (p1: any, p2: any, p3: any) => any;
  addChild: (p1: any, p2: any, p3: any, p4: any) => void;
  endXMLStructure: (p1: any, p2: any, p3: any) => void;
  resolveExternalEntity: (p1: any, p2: CFXMLExternalID, p3: any) => Data;
  handleError: (p1: any, p2: CFXMLParserStatusCode, p3: any) => boolean;
}

declare var CFXMLParserCallBacks: CFXMLParserCallBacks;

interface CFXMLParserContext {
  version: number;
  info: any;
  retain: (p1: any) => any;
  release: (p1: any) => void;
  copyDescription: (p1: any) => string;
}

declare var CFXMLParserContext: CFXMLParserContext;

interface CFXMLProcessingInstructionInfo {
  dataString: string;
}

declare var CFXMLProcessingInstructionInfo: CFXMLProcessingInstructionInfo;

interface IUnknownVTbl {
  _reserved: any;
  QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
  AddRef: (p1: any) => number;
  Release: (p1: any) => number;
}

declare var IUnknownVTbl: IUnknownVTbl;

declare function __CFRangeMake(loc: number, len: number): CFRange;
declare function __CFStringMakeConstantString(cStr: string | any): string;
declare var kCFAbsoluteTimeIntervalSince1904: number;

declare var kCFAbsoluteTimeIntervalSince1970: number;

declare var kCFAllocatorDefault: any;

declare var kCFAllocatorMalloc: any;

declare var kCFAllocatorMallocZone: any;

declare var kCFAllocatorNull: any;

declare var kCFAllocatorSystemDefault: any;

declare var kCFAllocatorUseContext: any;

declare var kCFBooleanFalse: number;

declare var kCFBooleanTrue: number;

declare var kCFBuddhistCalendar: any;

declare var kCFBundleDevelopmentRegionKey: string;


declare const kCFBundleExecutableArchitectureI386: number;

declare const kCFBundleExecutableArchitecturePPC: number;

declare const kCFBundleExecutableArchitecturePPC64: number;

declare const kCFBundleExecutableArchitectureX86_64: number;
declare var kCFBundleExecutableKey: string;

declare var kCFBundleIdentifierKey: string;

declare var kCFBundleInfoDictionaryVersionKey: string;

declare var kCFBundleLocalizationsKey: string;

declare var kCFBundleNameKey: string;

declare var kCFBundleVersionKey: string;


declare const kCFCalendarComponentsWrap: number;
declare var kCFChineseCalendar: any;

declare var kCFCopyStringBagCallBacks: CFBagCallBacks;

declare var kCFCopyStringDictionaryKeyCallBacks: CFDictionaryKeyCallBacks;

declare var kCFCopyStringSetCallBacks: CFSetCallBacks;

declare var kCFCoreFoundationVersionNumber: number;

declare var kCFDateFormatterAMSymbol: any;

declare var kCFDateFormatterCalendar: any;

declare var kCFDateFormatterCalendarName: any;

declare var kCFDateFormatterDefaultDate: any;

declare var kCFDateFormatterDefaultFormat: any;

declare var kCFDateFormatterDoesRelativeDateFormattingKey: any;

declare var kCFDateFormatterEraSymbols: any;

declare var kCFDateFormatterGregorianStartDate: any;

declare var kCFDateFormatterIsLenient: any;

declare var kCFDateFormatterLongEraSymbols: any;

declare var kCFDateFormatterMonthSymbols: any;

declare var kCFDateFormatterPMSymbol: any;

declare var kCFDateFormatterQuarterSymbols: any;

declare var kCFDateFormatterShortMonthSymbols: any;

declare var kCFDateFormatterShortQuarterSymbols: any;

declare var kCFDateFormatterShortStandaloneMonthSymbols: any;

declare var kCFDateFormatterShortStandaloneQuarterSymbols: any;

declare var kCFDateFormatterShortStandaloneWeekdaySymbols: any;

declare var kCFDateFormatterShortWeekdaySymbols: any;

declare var kCFDateFormatterStandaloneMonthSymbols: any;

declare var kCFDateFormatterStandaloneQuarterSymbols: any;

declare var kCFDateFormatterStandaloneWeekdaySymbols: any;

declare var kCFDateFormatterTimeZone: any;

declare var kCFDateFormatterTwoDigitStartDate: any;

declare var kCFDateFormatterVeryShortMonthSymbols: any;

declare var kCFDateFormatterVeryShortStandaloneMonthSymbols: any;

declare var kCFDateFormatterVeryShortStandaloneWeekdaySymbols: any;

declare var kCFDateFormatterVeryShortWeekdaySymbols: any;

declare var kCFDateFormatterWeekdaySymbols: any;

declare var kCFErrorDescriptionKey: string;

declare var kCFErrorDomainCocoa: any;

declare var kCFErrorDomainMach: any;

declare var kCFErrorDomainOSStatus: any;

declare var kCFErrorDomainPOSIX: any;

declare var kCFErrorFilePathKey: string;

declare var kCFErrorLocalizedDescriptionKey: string;

declare var kCFErrorLocalizedFailureKey: string;

declare var kCFErrorLocalizedFailureReasonKey: string;

declare var kCFErrorLocalizedRecoverySuggestionKey: string;

declare var kCFErrorURLKey: string;

declare var kCFErrorUnderlyingErrorKey: string;


declare const kCFFileDescriptorReadCallBack: number;

declare const kCFFileDescriptorWriteCallBack: number;
declare var kCFGregorianCalendar: any;

declare var kCFHebrewCalendar: any;

declare var kCFISO8601Calendar: any;

declare var kCFIndianCalendar: any;

declare var kCFIslamicCalendar: any;

declare var kCFIslamicCivilCalendar: any;

declare var kCFIslamicTabularCalendar: any;

declare var kCFIslamicUmmAlQuraCalendar: any;

declare var kCFJapaneseCalendar: any;

declare var kCFLocaleAlternateQuotationBeginDelimiterKey: any;

declare var kCFLocaleAlternateQuotationEndDelimiterKey: any;

declare var kCFLocaleCalendar: any;

declare var kCFLocaleCalendarIdentifier: any;

declare var kCFLocaleCollationIdentifier: any;

declare var kCFLocaleCollatorIdentifier: any;

declare var kCFLocaleCountryCode: any;

declare var kCFLocaleCurrencyCode: any;

declare var kCFLocaleCurrencySymbol: any;

declare var kCFLocaleCurrentLocaleDidChangeNotification: any;

declare var kCFLocaleDecimalSeparator: any;

declare var kCFLocaleExemplarCharacterSet: any;

declare var kCFLocaleGroupingSeparator: any;

declare var kCFLocaleIdentifier: any;

declare var kCFLocaleLanguageCode: any;

declare var kCFLocaleMeasurementSystem: any;

declare var kCFLocaleQuotationBeginDelimiterKey: any;

declare var kCFLocaleQuotationEndDelimiterKey: any;

declare var kCFLocaleScriptCode: any;

declare var kCFLocaleUsesMetricSystem: any;

declare var kCFLocaleVariantCode: any;


declare const kCFMessagePortBecameInvalidError: number;

declare const kCFMessagePortIsInvalid: number;

declare const kCFMessagePortReceiveTimeout: number;

declare const kCFMessagePortSendTimeout: number;

declare const kCFMessagePortSuccess: number;

declare const kCFMessagePortTransportError: number;
declare var kCFNotFound: number;


declare const kCFNotificationDeliverImmediately: number;

declare const kCFNotificationPostToAllSessions: number;
declare var kCFNull: NSNull;

declare var kCFNumberFormatterAlwaysShowDecimalSeparator: any;

declare var kCFNumberFormatterCurrencyCode: any;

declare var kCFNumberFormatterCurrencyDecimalSeparator: any;

declare var kCFNumberFormatterCurrencyGroupingSeparator: any;

declare var kCFNumberFormatterCurrencySymbol: any;

declare var kCFNumberFormatterDecimalSeparator: any;

declare var kCFNumberFormatterDefaultFormat: any;

declare var kCFNumberFormatterExponentSymbol: any;

declare var kCFNumberFormatterFormatWidth: any;

declare var kCFNumberFormatterGroupingSeparator: any;

declare var kCFNumberFormatterGroupingSize: any;

declare var kCFNumberFormatterInfinitySymbol: any;

declare var kCFNumberFormatterInternationalCurrencySymbol: any;

declare var kCFNumberFormatterIsLenient: any;

declare var kCFNumberFormatterMaxFractionDigits: any;

declare var kCFNumberFormatterMaxIntegerDigits: any;

declare var kCFNumberFormatterMaxSignificantDigits: any;

declare var kCFNumberFormatterMinFractionDigits: any;

declare var kCFNumberFormatterMinIntegerDigits: any;

declare var kCFNumberFormatterMinSignificantDigits: any;

declare var kCFNumberFormatterMinusSign: any;

declare var kCFNumberFormatterMultiplier: any;

declare var kCFNumberFormatterNaNSymbol: any;

declare var kCFNumberFormatterNegativePrefix: any;

declare var kCFNumberFormatterNegativeSuffix: any;

declare var kCFNumberFormatterPaddingCharacter: any;

declare var kCFNumberFormatterPaddingPosition: any;

declare var kCFNumberFormatterPerMillSymbol: any;

declare var kCFNumberFormatterPercentSymbol: any;

declare var kCFNumberFormatterPlusSign: any;

declare var kCFNumberFormatterPositivePrefix: any;

declare var kCFNumberFormatterPositiveSuffix: any;

declare var kCFNumberFormatterRoundingIncrement: any;

declare var kCFNumberFormatterRoundingMode: any;

declare var kCFNumberFormatterSecondaryGroupingSize: any;

declare var kCFNumberFormatterUseGroupingSeparator: any;

declare var kCFNumberFormatterUseSignificantDigits: any;

declare var kCFNumberFormatterZeroSymbol: any;

declare var kCFNumberNaN: number;

declare var kCFNumberNegativeInfinity: number;

declare var kCFNumberPositiveInfinity: number;

declare var kCFPersianCalendar: any;

declare var kCFPlugInDynamicRegisterFunctionKey: string;

declare var kCFPlugInDynamicRegistrationKey: string;

declare var kCFPlugInFactoriesKey: string;

declare var kCFPlugInTypesKey: string;

declare var kCFPlugInUnloadFunctionKey: string;

declare var kCFPreferencesAnyApplication: string;

declare var kCFPreferencesAnyHost: string;

declare var kCFPreferencesAnyUser: string;

declare var kCFPreferencesCurrentApplication: string;

declare var kCFPreferencesCurrentHost: string;

declare var kCFPreferencesCurrentUser: string;


declare const kCFPropertyListReadCorruptError: number;

declare const kCFPropertyListReadStreamError: number;

declare const kCFPropertyListReadUnknownVersionError: number;

declare const kCFPropertyListWriteStreamError: number;
declare var kCFRepublicOfChinaCalendar: any;

declare var kCFRunLoopCommonModes: any;

declare var kCFRunLoopDefaultMode: any;


declare const kCFSocketAutomaticallyReenableAcceptCallBack: number;

declare const kCFSocketAutomaticallyReenableDataCallBack: number;

declare const kCFSocketAutomaticallyReenableReadCallBack: number;

declare const kCFSocketAutomaticallyReenableWriteCallBack: number;

declare const kCFSocketCloseOnInvalidate: number;
declare var kCFSocketCommandKey: string;

declare var kCFSocketErrorKey: string;


declare const kCFSocketLeaveErrors: number;
declare var kCFSocketNameKey: string;

declare var kCFSocketRegisterCommand: string;

declare var kCFSocketResultKey: string;

declare var kCFSocketRetrieveCommand: string;

declare var kCFSocketValueKey: string;

declare var kCFStreamErrorDomainSOCKS: number;

declare var kCFStreamErrorDomainSSL: number;

declare var kCFStreamPropertyAppendToFile: any;

declare var kCFStreamPropertyDataWritten: any;

declare var kCFStreamPropertyFileCurrentOffset: any;

declare var kCFStreamPropertySOCKSPassword: string;

declare var kCFStreamPropertySOCKSProxy: string;

declare var kCFStreamPropertySOCKSProxyHost: string;

declare var kCFStreamPropertySOCKSProxyPort: string;

declare var kCFStreamPropertySOCKSUser: string;

declare var kCFStreamPropertySOCKSVersion: string;

declare var kCFStreamPropertyShouldCloseNativeSocket: string;

declare var kCFStreamPropertySocketNativeHandle: any;

declare var kCFStreamPropertySocketRemoteHostName: any;

declare var kCFStreamPropertySocketRemotePortNumber: any;

declare var kCFStreamPropertySocketSecurityLevel: string;

declare var kCFStreamSocketSOCKSVersion4: string;

declare var kCFStreamSocketSOCKSVersion5: string;

declare var kCFStreamSocketSecurityLevelNegotiatedSSL: string;

declare var kCFStreamSocketSecurityLevelNone: string;

declare var kCFStreamSocketSecurityLevelTLSv1: string;

declare var kCFStringBinaryHeapCallBacks: CFBinaryHeapCallBacks;


declare const kCFStringTokenizerAttributeLanguage: number;

declare const kCFStringTokenizerAttributeLatinTranscription: number;

declare const kCFStringTokenizerUnitLineBreak: number;

declare const kCFStringTokenizerUnitParagraph: number;

declare const kCFStringTokenizerUnitSentence: number;

declare const kCFStringTokenizerUnitWord: number;

declare const kCFStringTokenizerUnitWordBoundary: number;
declare var kCFStringTransformFullwidthHalfwidth: string;

declare var kCFStringTransformHiraganaKatakana: string;

declare var kCFStringTransformLatinArabic: string;

declare var kCFStringTransformLatinCyrillic: string;

declare var kCFStringTransformLatinGreek: string;

declare var kCFStringTransformLatinHangul: string;

declare var kCFStringTransformLatinHebrew: string;

declare var kCFStringTransformLatinHiragana: string;

declare var kCFStringTransformLatinKatakana: string;

declare var kCFStringTransformLatinThai: string;

declare var kCFStringTransformMandarinLatin: string;

declare var kCFStringTransformStripCombiningMarks: string;

declare var kCFStringTransformStripDiacritics: string;

declare var kCFStringTransformToLatin: string;

declare var kCFStringTransformToUnicodeName: string;

declare var kCFStringTransformToXMLHex: string;

declare var kCFTimeZoneSystemTimeZoneDidChangeNotification: any;

declare var kCFTypeArrayCallBacks: CFArrayCallBacks;

declare var kCFTypeBagCallBacks: CFBagCallBacks;

declare var kCFTypeDictionaryKeyCallBacks: CFDictionaryKeyCallBacks;

declare var kCFTypeDictionaryValueCallBacks: CFDictionaryValueCallBacks;

declare var kCFTypeSetCallBacks: CFSetCallBacks;

declare var kCFURLAddedToDirectoryDateKey: string;

declare var kCFURLApplicationIsScriptableKey: string;

declare var kCFURLAttributeModificationDateKey: string;

declare var kCFURLCanonicalPathKey: string;

declare var kCFURLContentAccessDateKey: string;

declare var kCFURLContentModificationDateKey: string;

declare var kCFURLCreationDateKey: string;

declare var kCFURLDocumentIdentifierKey: string;

declare var kCFURLFileAllocatedSizeKey: string;

declare var kCFURLFileResourceIdentifierKey: string;

declare var kCFURLFileResourceTypeBlockSpecial: string;

declare var kCFURLFileResourceTypeCharacterSpecial: string;

declare var kCFURLFileResourceTypeDirectory: string;

declare var kCFURLFileResourceTypeKey: string;

declare var kCFURLFileResourceTypeNamedPipe: string;

declare var kCFURLFileResourceTypeRegular: string;

declare var kCFURLFileResourceTypeSocket: string;

declare var kCFURLFileResourceTypeSymbolicLink: string;

declare var kCFURLFileResourceTypeUnknown: string;

declare var kCFURLFileSecurityKey: string;

declare var kCFURLFileSizeKey: string;

declare var kCFURLGenerationIdentifierKey: string;

declare var kCFURLHasHiddenExtensionKey: string;

declare var kCFURLIsAliasFileKey: string;

declare var kCFURLIsApplicationKey: string;

declare var kCFURLIsDirectoryKey: string;

declare var kCFURLIsExcludedFromBackupKey: string;

declare var kCFURLIsExecutableKey: string;

declare var kCFURLIsHiddenKey: string;

declare var kCFURLIsMountTriggerKey: string;

declare var kCFURLIsPackageKey: string;

declare var kCFURLIsReadableKey: string;

declare var kCFURLIsRegularFileKey: string;

declare var kCFURLIsSymbolicLinkKey: string;

declare var kCFURLIsSystemImmutableKey: string;

declare var kCFURLIsUbiquitousItemKey: string;

declare var kCFURLIsUserImmutableKey: string;

declare var kCFURLIsVolumeKey: string;

declare var kCFURLIsWritableKey: string;

declare var kCFURLKeysOfUnsetValuesKey: string;

declare var kCFURLLabelNumberKey: string;

declare var kCFURLLinkCountKey: string;

declare var kCFURLLocalizedLabelKey: string;

declare var kCFURLLocalizedNameKey: string;

declare var kCFURLLocalizedTypeDescriptionKey: string;

declare var kCFURLNameKey: string;

declare var kCFURLParentDirectoryURLKey: string;

declare var kCFURLPathKey: string;

declare var kCFURLPreferredIOBlockSizeKey: string;

declare var kCFURLQuarantinePropertiesKey: string;

declare var kCFURLTagNamesKey: string;

declare var kCFURLTotalFileAllocatedSizeKey: string;

declare var kCFURLTotalFileSizeKey: string;

declare var kCFURLTypeIdentifierKey: string;

declare var kCFURLUbiquitousItemDownloadingErrorKey: string;

declare var kCFURLUbiquitousItemDownloadingStatusCurrent: string;

declare var kCFURLUbiquitousItemDownloadingStatusDownloaded: string;

declare var kCFURLUbiquitousItemDownloadingStatusKey: string;

declare var kCFURLUbiquitousItemDownloadingStatusNotDownloaded: string;

declare var kCFURLUbiquitousItemHasUnresolvedConflictsKey: string;

declare var kCFURLUbiquitousItemIsDownloadingKey: string;

declare var kCFURLUbiquitousItemIsUploadedKey: string;

declare var kCFURLUbiquitousItemIsUploadingKey: string;

declare var kCFURLUbiquitousItemUploadingErrorKey: string;

declare var kCFURLVolumeAvailableCapacityForImportantUsageKey: string;

declare var kCFURLVolumeAvailableCapacityForOpportunisticUsageKey: string;

declare var kCFURLVolumeAvailableCapacityKey: string;

declare var kCFURLVolumeCreationDateKey: string;

declare var kCFURLVolumeIdentifierKey: string;

declare var kCFURLVolumeIsAutomountedKey: string;

declare var kCFURLVolumeIsBrowsableKey: string;

declare var kCFURLVolumeIsEjectableKey: string;

declare var kCFURLVolumeIsEncryptedKey: string;

declare var kCFURLVolumeIsInternalKey: string;

declare var kCFURLVolumeIsJournalingKey: string;

declare var kCFURLVolumeIsLocalKey: string;

declare var kCFURLVolumeIsReadOnlyKey: string;

declare var kCFURLVolumeIsRemovableKey: string;

declare var kCFURLVolumeIsRootFileSystemKey: string;

declare var kCFURLVolumeLocalizedFormatDescriptionKey: string;

declare var kCFURLVolumeLocalizedNameKey: string;

declare var kCFURLVolumeMaximumFileSizeKey: string;

declare var kCFURLVolumeNameKey: string;

declare var kCFURLVolumeResourceCountKey: string;

declare var kCFURLVolumeSupportsAccessPermissionsKey: string;

declare var kCFURLVolumeSupportsAdvisoryFileLockingKey: string;

declare var kCFURLVolumeSupportsCasePreservedNamesKey: string;

declare var kCFURLVolumeSupportsCaseSensitiveNamesKey: string;

declare var kCFURLVolumeSupportsCompressionKey: string;

declare var kCFURLVolumeSupportsExclusiveRenamingKey: string;

declare var kCFURLVolumeSupportsExtendedSecurityKey: string;

declare var kCFURLVolumeSupportsFileCloningKey: string;

declare var kCFURLVolumeSupportsHardLinksKey: string;

declare var kCFURLVolumeSupportsImmutableFilesKey: string;

declare var kCFURLVolumeSupportsJournalingKey: string;

declare var kCFURLVolumeSupportsPersistentIDsKey: string;

declare var kCFURLVolumeSupportsRenamingKey: string;

declare var kCFURLVolumeSupportsRootDirectoryDatesKey: string;

declare var kCFURLVolumeSupportsSparseFilesKey: string;

declare var kCFURLVolumeSupportsSwapRenamingKey: string;

declare var kCFURLVolumeSupportsSymbolicLinksKey: string;

declare var kCFURLVolumeSupportsVolumeSizesKey: string;

declare var kCFURLVolumeSupportsZeroRunsKey: string;

declare var kCFURLVolumeTotalCapacityKey: string;

declare var kCFURLVolumeURLForRemountingKey: string;

declare var kCFURLVolumeURLKey: string;

declare var kCFURLVolumeUUIDStringKey: string;

declare var kCFUserNotificationAlertHeaderKey: string;

declare var kCFUserNotificationAlertMessageKey: string;

declare var kCFUserNotificationAlertTopMostKey: string;

declare var kCFUserNotificationAlternateButtonTitleKey: string;


declare const kCFUserNotificationAlternateResponse: number;

declare const kCFUserNotificationCancelResponse: number;

declare const kCFUserNotificationCautionAlertLevel: number;
declare var kCFUserNotificationCheckBoxTitlesKey: string;

declare var kCFUserNotificationDefaultButtonTitleKey: string;


declare const kCFUserNotificationDefaultResponse: number;
declare var kCFUserNotificationIconURLKey: string;

declare var kCFUserNotificationKeyboardTypesKey: string;

declare var kCFUserNotificationLocalizationURLKey: string;


declare const kCFUserNotificationNoDefaultButtonFlag: number;

declare const kCFUserNotificationNoteAlertLevel: number;
declare var kCFUserNotificationOtherButtonTitleKey: string;


declare const kCFUserNotificationOtherResponse: number;

declare const kCFUserNotificationPlainAlertLevel: number;
declare var kCFUserNotificationPopUpSelectionKey: string;

declare var kCFUserNotificationPopUpTitlesKey: string;

declare var kCFUserNotificationProgressIndicatorValueKey: string;

declare var kCFUserNotificationSoundURLKey: string;


declare const kCFUserNotificationStopAlertLevel: number;
declare var kCFUserNotificationTextFieldTitlesKey: string;

declare var kCFUserNotificationTextFieldValuesKey: string;


declare const kCFUserNotificationUseRadioButtonsFlag: number;

declare const kCFXMLNodeCurrentVersion: number;
declare var kCFXMLTreeErrorDescription: string;

declare var kCFXMLTreeErrorLineNumber: string;

declare var kCFXMLTreeErrorLocation: string;

declare var kCFXMLTreeErrorStatusCode: string;

enum CFCalendarUnit {
    kCFCalendarUnitEra = 2,
    kCFCalendarUnitYear = 4,
    kCFCalendarUnitMonth = 8,
    kCFCalendarUnitDay = 16,
    kCFCalendarUnitHour = 32,
    kCFCalendarUnitMinute = 64,
    kCFCalendarUnitSecond = 128,
    kCFCalendarUnitWeek = 256,
    kCFCalendarUnitWeekday = 512,
    kCFCalendarUnitWeekdayOrdinal = 1024,
    kCFCalendarUnitQuarter = 2048,
    kCFCalendarUnitWeekOfMonth = 4096,
    kCFCalendarUnitWeekOfYear = 8192,
    kCFCalendarUnitYearForWeekOfYear = 16384
}

enum CFCharacterSetPredefinedSet {
    kCFCharacterSetControl = 1,
    kCFCharacterSetWhitespace = 2,
    kCFCharacterSetWhitespaceAndNewline = 3,
    kCFCharacterSetDecimalDigit = 4,
    kCFCharacterSetLetter = 5,
    kCFCharacterSetLowercaseLetter = 6,
    kCFCharacterSetUppercaseLetter = 7,
    kCFCharacterSetNonBase = 8,
    kCFCharacterSetDecomposable = 9,
    kCFCharacterSetAlphaNumeric = 10,
    kCFCharacterSetPunctuation = 11,
    kCFCharacterSetCapitalizedLetter = 13,
    kCFCharacterSetSymbol = 14,
    kCFCharacterSetNewline = 15,
    kCFCharacterSetIllegal = 12
}

enum CFComparisonResult {
    kCFCompareLessThan = -1,
    kCFCompareEqualTo = 0,
    kCFCompareGreaterThan = 1
}

enum CFDataSearchFlags {
    kCFDataSearchBackwards = 1,
    kCFDataSearchAnchored = 2
}

enum CFDateFormatterStyle {
    kCFDateFormatterNoStyle = 0,
    kCFDateFormatterShortStyle = 1,
    kCFDateFormatterMediumStyle = 2,
    kCFDateFormatterLongStyle = 3,
    kCFDateFormatterFullStyle = 4
}

enum CFFileSecurityClearOptions {
    kCFFileSecurityClearOwner = 1,
    kCFFileSecurityClearGroup = 2,
    kCFFileSecurityClearMode = 4,
    kCFFileSecurityClearOwnerUUID = 8,
    kCFFileSecurityClearGroupUUID = 16,
    kCFFileSecurityClearAccessControlList = 32
}

enum CFGregorianUnitFlags {
    kCFGregorianUnitsYears = 1,
    kCFGregorianUnitsMonths = 2,
    kCFGregorianUnitsDays = 4,
    kCFGregorianUnitsHours = 8,
    kCFGregorianUnitsMinutes = 16,
    kCFGregorianUnitsSeconds = 32,
    kCFGregorianAllUnits = 16777215
}

enum CFISO8601DateFormatOptions {
    kCFISO8601DateFormatWithYear = 1,
    kCFISO8601DateFormatWithMonth = 2,
    kCFISO8601DateFormatWithWeekOfYear = 4,
    kCFISO8601DateFormatWithDay = 16,
    kCFISO8601DateFormatWithTime = 32,
    kCFISO8601DateFormatWithTimeZone = 64,
    kCFISO8601DateFormatWithSpaceBetweenDateAndTime = 128,
    kCFISO8601DateFormatWithDashSeparatorInDate = 256,
    kCFISO8601DateFormatWithColonSeparatorInTime = 512,
    kCFISO8601DateFormatWithColonSeparatorInTimeZone = 1024,
    kCFISO8601DateFormatWithFractionalSeconds = 2048,
    kCFISO8601DateFormatWithFullDate = 275,
    kCFISO8601DateFormatWithFullTime = 1632,
    kCFISO8601DateFormatWithInternetDateTime = 1907
}

enum CFLocaleLanguageDirection {
    kCFLocaleLanguageDirectionUnknown = 0,
    kCFLocaleLanguageDirectionLeftToRight = 1,
    kCFLocaleLanguageDirectionRightToLeft = 2,
    kCFLocaleLanguageDirectionTopToBottom = 3,
    kCFLocaleLanguageDirectionBottomToTop = 4
}

enum CFNotificationSuspensionBehavior {
    Drop = 1,
    Coalesce = 2,
    Hold = 3,
    DeliverImmediately = 4
}

enum CFNumberFormatterOptionFlags {
    kCFNumberFormatterParseIntegersOnly = 1
}

enum CFNumberFormatterPadPosition {
    kCFNumberFormatterPadBeforePrefix = 0,
    kCFNumberFormatterPadAfterPrefix = 1,
    kCFNumberFormatterPadBeforeSuffix = 2,
    kCFNumberFormatterPadAfterSuffix = 3
}

enum CFNumberFormatterRoundingMode {
    kCFNumberFormatterRoundCeiling = 0,
    kCFNumberFormatterRoundFloor = 1,
    kCFNumberFormatterRoundDown = 2,
    kCFNumberFormatterRoundUp = 3,
    kCFNumberFormatterRoundHalfEven = 4,
    kCFNumberFormatterRoundHalfDown = 5,
    kCFNumberFormatterRoundHalfUp = 6
}

enum CFNumberFormatterStyle {
    kCFNumberFormatterNoStyle = 0,
    kCFNumberFormatterDecimalStyle = 1,
    kCFNumberFormatterCurrencyStyle = 2,
    kCFNumberFormatterPercentStyle = 3,
    kCFNumberFormatterScientificStyle = 4,
    kCFNumberFormatterSpellOutStyle = 5,
    kCFNumberFormatterOrdinalStyle = 6,
    kCFNumberFormatterCurrencyISOCodeStyle = 8,
    kCFNumberFormatterCurrencyPluralStyle = 9,
    kCFNumberFormatterCurrencyAccountingStyle = 10
}

enum CFNumberType {
    kCFNumberSInt8Type = 1,
    kCFNumberSInt16Type = 2,
    kCFNumberSInt32Type = 3,
    kCFNumberSInt64Type = 4,
    kCFNumberFloat32Type = 5,
    kCFNumberFloat64Type = 6,
    kCFNumberCharType = 7,
    kCFNumberShortType = 8,
    kCFNumberIntType = 9,
    kCFNumberLongType = 10,
    kCFNumberLongLongType = 11,
    kCFNumberFloatType = 12,
    kCFNumberDoubleType = 13,
    kCFNumberCFIndexType = 14,
    kCFNumberNSIntegerType = 15,
    kCFNumberCGFloatType = 16,
    kCFNumberMaxType = 16
}

enum CFPropertyListFormat {
    kCFPropertyListOpenStepFormat = 1,
    kCFPropertyListXMLFormat_v1_0 = 100,
    kCFPropertyListBinaryFormat_v1_0 = 200
}

enum CFPropertyListMutabilityOptions {
    kCFPropertyListImmutable = 0,
    kCFPropertyListMutableContainers = 1,
    kCFPropertyListMutableContainersAndLeaves = 2
}

enum CFRunLoopActivity {
    kCFRunLoopEntry = 1,
    kCFRunLoopBeforeTimers = 2,
    kCFRunLoopBeforeSources = 4,
    kCFRunLoopBeforeWaiting = 32,
    kCFRunLoopAfterWaiting = 64,
    kCFRunLoopExit = 128,
    kCFRunLoopAllActivities = 268435455
}

enum CFRunLoopRunResult {
    kCFRunLoopRunFinished = 1,
    kCFRunLoopRunStopped = 2,
    kCFRunLoopRunTimedOut = 3,
    kCFRunLoopRunHandledSource = 4
}

enum CFSocketCallBackType {
    kCFSocketNoCallBack = 0,
    kCFSocketReadCallBack = 1,
    kCFSocketAcceptCallBack = 2,
    kCFSocketDataCallBack = 3,
    kCFSocketConnectCallBack = 4,
    kCFSocketWriteCallBack = 8
}

enum CFSocketError {
    kCFSocketSuccess = 0,
    kCFSocketError = -1,
    kCFSocketTimeout = -2
}

enum CFStreamErrorDomain {
    kCFStreamErrorDomainCustom = -1,
    kCFStreamErrorDomainPOSIX = 1,
    kCFStreamErrorDomainMacOSStatus = 2
}

enum CFStreamEventType {
    kCFStreamEventNone = 0,
    kCFStreamEventOpenCompleted = 1,
    kCFStreamEventHasBytesAvailable = 2,
    kCFStreamEventCanAcceptBytes = 4,
    kCFStreamEventErrorOccurred = 8,
    kCFStreamEventEndEncountered = 16
}

enum CFStreamStatus {
    kCFStreamStatusNotOpen = 0,
    kCFStreamStatusOpening = 1,
    kCFStreamStatusOpen = 2,
    kCFStreamStatusReading = 3,
    kCFStreamStatusWriting = 4,
    kCFStreamStatusAtEnd = 5,
    kCFStreamStatusClosed = 6,
    kCFStreamStatusError = 7
}

enum CFStringBuiltInEncodings {
    kCFStringEncodingMacRoman = 0,
    kCFStringEncodingWindowsLatin1 = 1280,
    kCFStringEncodingISOLatin1 = 513,
    kCFStringEncodingNextStepLatin = 2817,
    kCFStringEncodingASCII = 1536,
    kCFStringEncodingUnicode = 256,
    kCFStringEncodingUTF8 = 134217984,
    kCFStringEncodingNonLossyASCII = 3071,
    kCFStringEncodingUTF16 = 256,
    kCFStringEncodingUTF16BE = 268435712,
    kCFStringEncodingUTF16LE = 335544576,
    kCFStringEncodingUTF32 = 201326848,
    kCFStringEncodingUTF32BE = 402653440,
    kCFStringEncodingUTF32LE = 469762304
}

enum CFStringCompareFlags {
    kCFCompareCaseInsensitive = 1,
    kCFCompareBackwards = 4,
    kCFCompareAnchored = 8,
    kCFCompareNonliteral = 16,
    kCFCompareLocalized = 32,
    kCFCompareNumerically = 64,
    kCFCompareDiacriticInsensitive = 128,
    kCFCompareWidthInsensitive = 256,
    kCFCompareForcedOrdering = 512
}

enum CFStringEncodings {
    kCFStringEncodingMacJapanese = 1,
    kCFStringEncodingMacChineseTrad = 2,
    kCFStringEncodingMacKorean = 3,
    kCFStringEncodingMacArabic = 4,
    kCFStringEncodingMacHebrew = 5,
    kCFStringEncodingMacGreek = 6,
    kCFStringEncodingMacCyrillic = 7,
    kCFStringEncodingMacDevanagari = 9,
    kCFStringEncodingMacGurmukhi = 10,
    kCFStringEncodingMacGujarati = 11,
    kCFStringEncodingMacOriya = 12,
    kCFStringEncodingMacBengali = 13,
    kCFStringEncodingMacTamil = 14,
    kCFStringEncodingMacTelugu = 15,
    kCFStringEncodingMacKannada = 16,
    kCFStringEncodingMacMalayalam = 17,
    kCFStringEncodingMacSinhalese = 18,
    kCFStringEncodingMacBurmese = 19,
    kCFStringEncodingMacKhmer = 20,
    kCFStringEncodingMacThai = 21,
    kCFStringEncodingMacLaotian = 22,
    kCFStringEncodingMacGeorgian = 23,
    kCFStringEncodingMacArmenian = 24,
    kCFStringEncodingMacChineseSimp = 25,
    kCFStringEncodingMacTibetan = 26,
    kCFStringEncodingMacMongolian = 27,
    kCFStringEncodingMacEthiopic = 28,
    kCFStringEncodingMacCentralEurRoman = 29,
    kCFStringEncodingMacVietnamese = 30,
    kCFStringEncodingMacExtArabic = 31,
    kCFStringEncodingMacSymbol = 33,
    kCFStringEncodingMacDingbats = 34,
    kCFStringEncodingMacTurkish = 35,
    kCFStringEncodingMacCroatian = 36,
    kCFStringEncodingMacIcelandic = 37,
    kCFStringEncodingMacRomanian = 38,
    kCFStringEncodingMacCeltic = 39,
    kCFStringEncodingMacGaelic = 40,
    kCFStringEncodingMacFarsi = 140,
    kCFStringEncodingMacUkrainian = 152,
    kCFStringEncodingMacInuit = 236,
    kCFStringEncodingMacVT100 = 252,
    kCFStringEncodingMacHFS = 255,
    kCFStringEncodingISOLatin2 = 514,
    kCFStringEncodingISOLatin3 = 515,
    kCFStringEncodingISOLatin4 = 516,
    kCFStringEncodingISOLatinCyrillic = 517,
    kCFStringEncodingISOLatinArabic = 518,
    kCFStringEncodingISOLatinGreek = 519,
    kCFStringEncodingISOLatinHebrew = 520,
    kCFStringEncodingISOLatin5 = 521,
    kCFStringEncodingISOLatin6 = 522,
    kCFStringEncodingISOLatinThai = 523,
    kCFStringEncodingISOLatin7 = 525,
    kCFStringEncodingISOLatin8 = 526,
    kCFStringEncodingISOLatin9 = 527,
    kCFStringEncodingISOLatin10 = 528,
    kCFStringEncodingDOSLatinUS = 1024,
    kCFStringEncodingDOSGreek = 1029,
    kCFStringEncodingDOSBalticRim = 1030,
    kCFStringEncodingDOSLatin1 = 1040,
    kCFStringEncodingDOSGreek1 = 1041,
    kCFStringEncodingDOSLatin2 = 1042,
    kCFStringEncodingDOSCyrillic = 1043,
    kCFStringEncodingDOSTurkish = 1044,
    kCFStringEncodingDOSPortuguese = 1045,
    kCFStringEncodingDOSIcelandic = 1046,
    kCFStringEncodingDOSHebrew = 1047,
    kCFStringEncodingDOSCanadianFrench = 1048,
    kCFStringEncodingDOSArabic = 1049,
    kCFStringEncodingDOSNordic = 1050,
    kCFStringEncodingDOSRussian = 1051,
    kCFStringEncodingDOSGreek2 = 1052,
    kCFStringEncodingDOSThai = 1053,
    kCFStringEncodingDOSJapanese = 1056,
    kCFStringEncodingDOSChineseSimplif = 1057,
    kCFStringEncodingDOSKorean = 1058,
    kCFStringEncodingDOSChineseTrad = 1059,
    kCFStringEncodingWindowsLatin2 = 1281,
    kCFStringEncodingWindowsCyrillic = 1282,
    kCFStringEncodingWindowsGreek = 1283,
    kCFStringEncodingWindowsLatin5 = 1284,
    kCFStringEncodingWindowsHebrew = 1285,
    kCFStringEncodingWindowsArabic = 1286,
    kCFStringEncodingWindowsBalticRim = 1287,
    kCFStringEncodingWindowsVietnamese = 1288,
    kCFStringEncodingWindowsKoreanJohab = 1296,
    kCFStringEncodingANSEL = 1537,
    kCFStringEncodingJIS_X0201_76 = 1568,
    kCFStringEncodingJIS_X0208_83 = 1569,
    kCFStringEncodingJIS_X0208_90 = 1570,
    kCFStringEncodingJIS_X0212_90 = 1571,
    kCFStringEncodingJIS_C6226_78 = 1572,
    kCFStringEncodingShiftJIS_X0213 = 1576,
    kCFStringEncodingShiftJIS_X0213_MenKuTen = 1577,
    kCFStringEncodingGB_2312_80 = 1584,
    kCFStringEncodingGBK_95 = 1585,
    kCFStringEncodingGB_18030_2000 = 1586,
    kCFStringEncodingKSC_5601_87 = 1600,
    kCFStringEncodingKSC_5601_92_Johab = 1601,
    kCFStringEncodingCNS_11643_92_P1 = 1617,
    kCFStringEncodingCNS_11643_92_P2 = 1618,
    kCFStringEncodingCNS_11643_92_P3 = 1619,
    kCFStringEncodingISO_2022_JP = 2080,
    kCFStringEncodingISO_2022_JP_2 = 2081,
    kCFStringEncodingISO_2022_JP_1 = 2082,
    kCFStringEncodingISO_2022_JP_3 = 2083,
    kCFStringEncodingISO_2022_CN = 2096,
    kCFStringEncodingISO_2022_CN_EXT = 2097,
    kCFStringEncodingISO_2022_KR = 2112,
    kCFStringEncodingEUC_JP = 2336,
    kCFStringEncodingEUC_CN = 2352,
    kCFStringEncodingEUC_TW = 2353,
    kCFStringEncodingEUC_KR = 2368,
    kCFStringEncodingShiftJIS = 2561,
    kCFStringEncodingKOI8_R = 2562,
    kCFStringEncodingBig5 = 2563,
    kCFStringEncodingMacRomanLatin1 = 2564,
    kCFStringEncodingHZ_GB_2312 = 2565,
    kCFStringEncodingBig5_HKSCS_1999 = 2566,
    kCFStringEncodingVISCII = 2567,
    kCFStringEncodingKOI8_U = 2568,
    kCFStringEncodingBig5_E = 2569,
    kCFStringEncodingNextStepJapanese = 2818,
    kCFStringEncodingEBCDIC_US = 3073,
    kCFStringEncodingEBCDIC_CP037 = 3074,
    kCFStringEncodingUTF7 = 67109120,
    kCFStringEncodingUTF7_IMAP = 2576,
    kCFStringEncodingShiftJIS_X0213_00 = 1576
}

enum CFStringNormalizationForm {
    kCFStringNormalizationFormD = 0,
    kCFStringNormalizationFormKD = 1,
    kCFStringNormalizationFormC = 2,
    kCFStringNormalizationFormKC = 3
}

enum CFStringTokenizerTokenType {
    kCFStringTokenizerTokenNone = 0,
    kCFStringTokenizerTokenNormal = 1,
    kCFStringTokenizerTokenHasSubTokensMask = 2,
    kCFStringTokenizerTokenHasDerivedSubTokensMask = 4,
    kCFStringTokenizerTokenHasHasNumbersMask = 8,
    kCFStringTokenizerTokenHasNonLettersMask = 16,
    kCFStringTokenizerTokenIsCJWordMask = 32
}

enum CFTimeZoneNameStyle {
    kCFTimeZoneNameStyleStandard = 0,
    kCFTimeZoneNameStyleShortStandard = 1,
    kCFTimeZoneNameStyleDaylightSaving = 2,
    kCFTimeZoneNameStyleShortDaylightSaving = 3,
    kCFTimeZoneNameStyleGeneric = 4,
    kCFTimeZoneNameStyleShortGeneric = 5
}

enum CFURLBookmarkCreationOptions {
    kCFURLBookmarkCreationMinimalBookmarkMask = 512,
    kCFURLBookmarkCreationSuitableForBookmarkFile = 1024,
    kCFURLBookmarkCreationWithSecurityScope = 2048,
    kCFURLBookmarkCreationSecurityScopeAllowOnlyReadAccess = 4096,
    kCFURLBookmarkCreationPreferFileIDResolutionMask = 256
}

enum CFURLBookmarkResolutionOptions {
    kCFURLBookmarkResolutionWithoutUIMask = 256,
    kCFURLBookmarkResolutionWithoutMountingMask = 512,
    kCFURLBookmarkResolutionWithSecurityScope = 1024,
    kCFBookmarkResolutionWithoutUIMask = 256,
    kCFBookmarkResolutionWithoutMountingMask = 512
}

enum CFURLComponentType {
    kCFURLComponentScheme = 1,
    kCFURLComponentNetLocation = 2,
    kCFURLComponentPath = 3,
    kCFURLComponentResourceSpecifier = 4,
    kCFURLComponentUser = 5,
    kCFURLComponentPassword = 6,
    kCFURLComponentUserInfo = 7,
    kCFURLComponentHost = 8,
    kCFURLComponentPort = 9,
    kCFURLComponentParameterString = 10,
    kCFURLComponentQuery = 11,
    kCFURLComponentFragment = 12
}

enum CFURLEnumeratorOptions {
    kCFURLEnumeratorDefaultBehavior = 0,
    kCFURLEnumeratorDescendRecursively = 1,
    kCFURLEnumeratorSkipInvisibles = 2,
    kCFURLEnumeratorGenerateFileReferenceURLs = 4,
    kCFURLEnumeratorSkipPackageContents = 8,
    kCFURLEnumeratorIncludeDirectoriesPreOrder = 16,
    kCFURLEnumeratorIncludeDirectoriesPostOrder = 32,
    kCFURLEnumeratorGenerateRelativePathURLs = 64
}

enum CFURLEnumeratorResult {
    kCFURLEnumeratorSuccess = 1,
    kCFURLEnumeratorEnd = 2,
    kCFURLEnumeratorError = 3,
    kCFURLEnumeratorDirectoryPostOrderSuccess = 4
}

enum CFURLPathStyle {
    kCFURLPOSIXPathStyle = 0,
    kCFURLHFSPathStyle = 1,
    kCFURLWindowsPathStyle = 2
}

enum CFXMLEntityTypeCode {
    kCFXMLEntityTypeParameter = 0,
    kCFXMLEntityTypeParsedInternal = 1,
    kCFXMLEntityTypeParsedExternal = 2,
    kCFXMLEntityTypeUnparsed = 3,
    kCFXMLEntityTypeCharacter = 4
}

enum CFXMLNodeTypeCode {
    kCFXMLNodeTypeDocument = 1,
    kCFXMLNodeTypeElement = 2,
    kCFXMLNodeTypeAttribute = 3,
    kCFXMLNodeTypeProcessingInstruction = 4,
    kCFXMLNodeTypeComment = 5,
    kCFXMLNodeTypeText = 6,
    kCFXMLNodeTypeCDATASection = 7,
    kCFXMLNodeTypeDocumentFragment = 8,
    kCFXMLNodeTypeEntity = 9,
    kCFXMLNodeTypeEntityReference = 10,
    kCFXMLNodeTypeDocumentType = 11,
    kCFXMLNodeTypeWhitespace = 12,
    kCFXMLNodeTypeNotation = 13,
    kCFXMLNodeTypeElementTypeDeclaration = 14,
    kCFXMLNodeTypeAttributeListDeclaration = 15
}

enum CFXMLParserOptions {
    kCFXMLParserValidateDocument = 1,
    kCFXMLParserSkipMetaData = 2,
    kCFXMLParserReplacePhysicalEntities = 4,
    kCFXMLParserSkipWhitespace = 8,
    kCFXMLParserResolveExternalEntities = 16,
    kCFXMLParserAddImpliedAttributes = 32,
    kCFXMLParserAllOptions = 16777215,
    kCFXMLParserNoOptions = 0
}

enum CFXMLParserStatusCode {
    kCFXMLStatusParseNotBegun = -2,
    kCFXMLStatusParseInProgress = -1,
    kCFXMLStatusParseSuccessful = 0,
    kCFXMLErrorUnexpectedEOF = 1,
    kCFXMLErrorUnknownEncoding = 2,
    kCFXMLErrorEncodingConversionFailure = 3,
    kCFXMLErrorMalformedProcessingInstruction = 4,
    kCFXMLErrorMalformedDTD = 5,
    kCFXMLErrorMalformedName = 6,
    kCFXMLErrorMalformedCDSect = 7,
    kCFXMLErrorMalformedCloseTag = 8,
    kCFXMLErrorMalformedStartTag = 9,
    kCFXMLErrorMalformedDocument = 10,
    kCFXMLErrorElementlessDocument = 11,
    kCFXMLErrorMalformedComment = 12,
    kCFXMLErrorMalformedCharacterReference = 13,
    kCFXMLErrorMalformedParsedCharacterData = 14,
    kCFXMLErrorNoData = 15
}

enum __CFByteOrder {
    CFByteOrderUnknown = 0,
    CFByteOrderLittleEndian = 1,
    CFByteOrderBigEndian = 2
}

