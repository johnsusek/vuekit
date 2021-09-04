
enum DVDAspectRatio {

	kDVDAspectRatioUninitialized = 0,

	kDVDAspectRatio4x3 = 1,

	kDVDAspectRatio4x3PanAndScan = 2,

	kDVDAspectRatio16x9 = 3,

	kDVDAspectRatioLetterBox = 4
}


enum DVDAudioFormat {

	kDVDAudioUnknownFormat = 0,

	kDVDAudioAC3Format = 1,

	kDVDAudioMPEG1Format = 2,

	kDVDAudioMPEG2Format = 3,

	kDVDAudioPCMFormat = 4,

	kDVDAudioDTSFormat = 5,

	kDVDAudioSDDSFormat = 6,

	kDVDAudioMLPFormat = 7,

	kDVDAudioDDPlusFormat = 8,

	kDVDAudioDTSHDFormat = 9
}


enum DVDDomainCode {

	kDVDFPDomain = 0,

	kDVDVMGMDomain = 1,

	kDVDVTSMDomain = 2,

	kDVDTTDomain = 3,

	kDVDSTOPDomain = 4,

	kDVDAMGMDomain = 5,

	kDVDTTGRDomain = 6
}


enum DVDEventCode {

	kDVDEventTitle = 1,

	kDVDEventPTT = 2,

	kDVDEventValidUOP = 3,

	kDVDEventAngle = 4,

	kDVDEventAudioStream = 5,

	kDVDEventSubpictureStream = 6,

	kDVDEventDisplayMode = 7,

	kDVDEventDomain = 8,

	kDVDEventBitrate = 9,

	kDVDEventStill = 10,

	kDVDEventPlayback = 11,

	kDVDEventVideoStandard = 12,

	kDVDEventStreams = 13,

	kDVDEventScanSpeed = 14,

	kDVDEventMenuCalled = 15,

	kDVDEventParental = 16,

	kDVDEventPGC = 17,

	kDVDEventGPRM = 18,

	kDVDEventRegionMismatch = 19,

	kDVDEventTitleTime = 20,

	kDVDEventSubpictureStreamNumbers = 21,

	kDVDEventAudioStreamNumbers = 22,

	kDVDEventAngleNumbers = 23,

	kDVDEventError = 24,

	kDVDEventCCInfo = 25,

	kDVDEventChapterTime = 26
}


enum DVDFormat {

	kDVDFormatUninitialized = 0,

	kDVDFormatNTSC = 1,

	kDVDFormatPAL = 2,

	kDVDFormatNTSC_HDTV = 3,

	kDVDFormatPAL_HDTV = 4
}


enum DVDMenu {

	kDVDMenuTitle = 0,

	kDVDMenuRoot = 1,

	kDVDMenuSubPicture = 2,

	kDVDMenuAudio = 3,

	kDVDMenuAngle = 4,

	kDVDMenuPTT = 5,

	kDVDMenuNone = 6
}


enum DVDScanDirection {

	kDVDScanDirectionForward = 0,

	kDVDScanDirectionBackward = 1
}


enum DVDScanRate {

	kDVDScanRateOneEigth = -8,

	kDVDScanRateOneFourth = -4,

	kDVDScanRateOneHalf = -2,

	kDVDScanRate1x = 1,

	kDVDScanRate2x = 2,

	kDVDScanRate4x = 4,

	kDVDScanRate8x = 8,

	kDVDScanRate16x = 16,

	kDVDScanRate32x = 32
}


enum DVDState {

	kDVDStateUnknown = 0,

	kDVDStatePlaying = 1,

	kDVDStatePlayingStill = 2,

	kDVDStatePaused = 3,

	kDVDStateStopped = 4,

	kDVDStateScanning = 5,

	kDVDStateIdle = 6,

	kDVDStatePlayingSlow = 7
}


enum DVDUserNavigation {

	kDVDUserNavigationMoveUp = 1,

	kDVDUserNavigationMoveDown = 2,

	kDVDUserNavigationMoveLeft = 3,

	kDVDUserNavigationMoveRight = 4,

	kDVDUserNavigationEnter = 5
}


declare const kDVDAudioExtensionCodeDirectorsComment1: number;

declare const kDVDAudioExtensionCodeDirectorsComment2: number;

declare const kDVDAudioExtensionCodeNVisualImpaired: number;

declare const kDVDAudioExtensionCodeNormalCaptions: number;

declare const kDVDAudioExtensionCodeNotSpecified: number;

declare const kDVDAudioModeProLogic: number;

declare const kDVDAudioModeSPDIF: number;

declare const kDVDAudioModeUninitialized: number;

declare const kDVDButtonIndexNone: number;

declare const kDVDErrorAlreadyPlaying: number;

declare const kDVDErrorAuthentification: number;

declare const kDVDErrorDisplayAuthentification: number;

declare const kDVDErrorDontNeedWakeup: number;

declare const kDVDErrorGraphicsDevice: number;

declare const kDVDErrorInitializingLib: number;

declare const kDVDErrorInvalidBookmarkForMedia: number;

declare const kDVDErrorInvalidBookmarkSize: number;

declare const kDVDErrorInvalidBookmarkVersion: number;

declare const kDVDErrorInvalidRegionCode: number;

declare const kDVDErrorIsAlreadySleeping: number;

declare const kDVDErrorMismatchedRegionCode: number;

declare const kDVDErrorMissingDrive: number;

declare const kDVDErrorMissingGraphicsDevice: number;

declare const kDVDErrorNavigation: number;

declare const kDVDErrorNoAudioOutputDevice: number;

declare const kDVDErrorNoFatalErrCallBack: number;

declare const kDVDErrorNoMoreRegionSets: number;

declare const kDVDErrorNoValidBookmarkForLastPlay: number;

declare const kDVDErrorNoValidMedia: number;

declare const kDVDErrorNotAllowedDuringPlayback: number;

declare const kDVDErrorNotSupportedConfiguration: number;

declare const kDVDErrorNotSupportedFunction: number;

declare const kDVDErrorOutOfVideoMemory: number;

declare const kDVDErrorPlaybackOpen: number;

declare const kDVDErrorRgnMgrInstall: number;

declare const kDVDErrorSystem: number;

declare const kDVDErrorTimeOutOfRange: number;

declare const kDVDErrorUnassignedGrafPort: number;

declare const kDVDErrorUninitializedLib: number;

declare const kDVDErrorUnknown: number;

declare const kDVDErrorUserActionNoOp: number;

declare const kDVDErrorWrongParam: number;

declare const kDVDErrordRegionCodeUninitialized: number;

declare const kDVDLanguageCodeAbkhazian: number;

declare const kDVDLanguageCodeAfar: number;

declare const kDVDLanguageCodeAfrikaans: number;

declare const kDVDLanguageCodeAlbanian: number;

declare const kDVDLanguageCodeAmharic: number;

declare const kDVDLanguageCodeArabic: number;

declare const kDVDLanguageCodeArmenian: number;

declare const kDVDLanguageCodeAssamese: number;

declare const kDVDLanguageCodeAymara: number;

declare const kDVDLanguageCodeAzerbaijani: number;

declare const kDVDLanguageCodeBashkir: number;

declare const kDVDLanguageCodeBasque: number;

declare const kDVDLanguageCodeBengali: number;

declare const kDVDLanguageCodeBhutani: number;

declare const kDVDLanguageCodeBihari: number;

declare const kDVDLanguageCodeBislama: number;

declare const kDVDLanguageCodeBreton: number;

declare const kDVDLanguageCodeBulgarian: number;

declare const kDVDLanguageCodeBurmese: number;

declare const kDVDLanguageCodeByelorussian: number;

declare const kDVDLanguageCodeCambodian: number;

declare const kDVDLanguageCodeCatalan: number;

declare const kDVDLanguageCodeChinese: number;

declare const kDVDLanguageCodeCorsican: number;

declare const kDVDLanguageCodeCroatian: number;

declare const kDVDLanguageCodeCzech: number;

declare const kDVDLanguageCodeDanish: number;

declare const kDVDLanguageCodeDutch: number;

declare const kDVDLanguageCodeEnglish: number;

declare const kDVDLanguageCodeEsperanto: number;

declare const kDVDLanguageCodeEstonian: number;

declare const kDVDLanguageCodeFaeroese: number;

declare const kDVDLanguageCodeFiji: number;

declare const kDVDLanguageCodeFinnish: number;

declare const kDVDLanguageCodeFrench: number;

declare const kDVDLanguageCodeFrisian: number;

declare const kDVDLanguageCodeGalician: number;

declare const kDVDLanguageCodeGeorgian: number;

declare const kDVDLanguageCodeGerman: number;

declare const kDVDLanguageCodeGreek: number;

declare const kDVDLanguageCodeGreenlandic: number;

declare const kDVDLanguageCodeGuarani: number;

declare const kDVDLanguageCodeGujarati: number;

declare const kDVDLanguageCodeHausa: number;

declare const kDVDLanguageCodeHebrew: number;

declare const kDVDLanguageCodeHindi: number;

declare const kDVDLanguageCodeHungarian: number;

declare const kDVDLanguageCodeIcelandic: number;

declare const kDVDLanguageCodeIndonesian: number;

declare const kDVDLanguageCodeInterlingua: number;

declare const kDVDLanguageCodeInterlingue: number;

declare const kDVDLanguageCodeInupiak: number;

declare const kDVDLanguageCodeIrish: number;

declare const kDVDLanguageCodeItalian: number;

declare const kDVDLanguageCodeJapanese: number;

declare const kDVDLanguageCodeJavanese: number;

declare const kDVDLanguageCodeKannada: number;

declare const kDVDLanguageCodeKashmiri: number;

declare const kDVDLanguageCodeKazakh: number;

declare const kDVDLanguageCodeKinyarwanda: number;

declare const kDVDLanguageCodeKirghiz: number;

declare const kDVDLanguageCodeKirundi: number;

declare const kDVDLanguageCodeKorean: number;

declare const kDVDLanguageCodeKurdish: number;

declare const kDVDLanguageCodeLaothian: number;

declare const kDVDLanguageCodeLatin: number;

declare const kDVDLanguageCodeLatvian: number;

declare const kDVDLanguageCodeLingala: number;

declare const kDVDLanguageCodeLithuanian: number;

declare const kDVDLanguageCodeMacedonian: number;

declare const kDVDLanguageCodeMalagasy: number;

declare const kDVDLanguageCodeMalay: number;

declare const kDVDLanguageCodeMalayalam: number;

declare const kDVDLanguageCodeMaltese: number;

declare const kDVDLanguageCodeMaori: number;

declare const kDVDLanguageCodeMarathi: number;

declare const kDVDLanguageCodeMoldavian: number;

declare const kDVDLanguageCodeMongolian: number;

declare const kDVDLanguageCodeNauru: number;

declare const kDVDLanguageCodeNepali: number;

declare const kDVDLanguageCodeNone: number;

declare const kDVDLanguageCodeNorwegian: number;

declare const kDVDLanguageCodeOccitan: number;

declare const kDVDLanguageCodeOriya: number;

declare const kDVDLanguageCodeOromo: number;

declare const kDVDLanguageCodePashto: number;

declare const kDVDLanguageCodePersian: number;

declare const kDVDLanguageCodePolish: number;

declare const kDVDLanguageCodePortugese: number;

declare const kDVDLanguageCodePunjabi: number;

declare const kDVDLanguageCodeQuechua: number;

declare const kDVDLanguageCodeRhaetoRomance: number;

declare const kDVDLanguageCodeRomanian: number;

declare const kDVDLanguageCodeRussian: number;

declare const kDVDLanguageCodeSamoan: number;

declare const kDVDLanguageCodeSangro: number;

declare const kDVDLanguageCodeSanskrit: number;

declare const kDVDLanguageCodeScotsGaelic: number;

declare const kDVDLanguageCodeSerbian: number;

declare const kDVDLanguageCodeSerboCroatian: number;

declare const kDVDLanguageCodeSesotho: number;

declare const kDVDLanguageCodeSetswana: number;

declare const kDVDLanguageCodeShona: number;

declare const kDVDLanguageCodeSindhi: number;

declare const kDVDLanguageCodeSinghalese: number;

declare const kDVDLanguageCodeSiswati: number;

declare const kDVDLanguageCodeSlovak: number;

declare const kDVDLanguageCodeSlovenian: number;

declare const kDVDLanguageCodeSomali: number;

declare const kDVDLanguageCodeSpanish: number;

declare const kDVDLanguageCodeSudanese: number;

declare const kDVDLanguageCodeSwahili: number;

declare const kDVDLanguageCodeSwedish: number;

declare const kDVDLanguageCodeTagalog: number;

declare const kDVDLanguageCodeTajik: number;

declare const kDVDLanguageCodeTamil: number;

declare const kDVDLanguageCodeTatar: number;

declare const kDVDLanguageCodeTelugu: number;

declare const kDVDLanguageCodeThai: number;

declare const kDVDLanguageCodeTibetan: number;

declare const kDVDLanguageCodeTigrinya: number;

declare const kDVDLanguageCodeTonga: number;

declare const kDVDLanguageCodeTsonga: number;

declare const kDVDLanguageCodeTurkish: number;

declare const kDVDLanguageCodeTurkmen: number;

declare const kDVDLanguageCodeTwi: number;

declare const kDVDLanguageCodeUkranian: number;

declare const kDVDLanguageCodeUninitialized: number;

declare const kDVDLanguageCodeUrdu: number;

declare const kDVDLanguageCodeUzbek: number;

declare const kDVDLanguageCodeVietnamese: number;

declare const kDVDLanguageCodeVolapuk: number;

declare const kDVDLanguageCodeWelsh: number;

declare const kDVDLanguageCodeWolof: number;

declare const kDVDLanguageCodeXhosa: number;

declare const kDVDLanguageCodeYiddish: number;

declare const kDVDLanguageCodeYoruba: number;

declare const kDVDLanguageCodeZulu: number;

declare const kDVDLanguageNoPreference: number;

declare const kDVDRegionCode1: number;

declare const kDVDRegionCode2: number;

declare const kDVDRegionCode3: number;

declare const kDVDRegionCode4: number;

declare const kDVDRegionCode5: number;

declare const kDVDRegionCode6: number;

declare const kDVDRegionCode7: number;

declare const kDVDRegionCode8: number;

declare const kDVDRegionCodeUninitialized: number;

declare const kDVDSubpictureExtensionCodeCaption4Children: number;

declare const kDVDSubpictureExtensionCodeCaptionBiggerSize: number;

declare const kDVDSubpictureExtensionCodeCaptionNormalSize: number;

declare const kDVDSubpictureExtensionCodeClosedCaption4Children: number;

declare const kDVDSubpictureExtensionCodeClosedCaptionBiggerSize: number;

declare const kDVDSubpictureExtensionCodeClosedCaptionNormalSize: number;

declare const kDVDSubpictureExtensionCodeForcedCaption: number;

declare const kDVDSubpictureExtensionCodeNotSpecified: number;

declare const kDVDSubpictureExtensionDirectorsComment4Children: number;

declare const kDVDSubpictureExtensionDirectorsCommentBiggerSize: number;

declare const kDVDSubpictureExtensionDirectorsCommentNormalSize: number;

declare const kDVDTimeCodeChapterDurationSeconds: number;

declare const kDVDTimeCodeChapterElapsedSeconds: number;

declare const kDVDTimeCodeChapterRemainingSeconds: number;

declare const kDVDTimeCodeElapsedSeconds: number;

declare const kDVDTimeCodeRemainingSeconds: number;

declare const kDVDTimeCodeTitleDurationSeconds: number;

declare const kDVDTimeCodeUninitialized: number;

declare const kDVDUOPAngleChange: number;

declare const kDVDUOPAudioStreamChange: number;

declare const kDVDUOPBackwardScan: number;

declare const kDVDUOPButton: number;

declare const kDVDUOPForwardScan: number;

declare const kDVDUOPGoUp: number;

declare const kDVDUOPKaraokeModeChange: number;

declare const kDVDUOPMenuCallAngle: number;

declare const kDVDUOPMenuCallAudio: number;

declare const kDVDUOPMenuCallPTT: number;

declare const kDVDUOPMenuCallRoot: number;

declare const kDVDUOPMenuCallSubPicture: number;

declare const kDVDUOPMenuCallTitle: number;

declare const kDVDUOPNextPGSearch: number;

declare const kDVDUOPPTTPlaySearch: number;

declare const kDVDUOPPauseOff: number;

declare const kDVDUOPPauseOn: number;

declare const kDVDUOPPrevTopPGSearch: number;

declare const kDVDUOPResume: number;

declare const kDVDUOPScanOff: number;

declare const kDVDUOPStillOff: number;

declare const kDVDUOPStop: number;

declare const kDVDUOPSubPictureStreamChange: number;

declare const kDVDUOPTimePTTSearch: number;

declare const kDVDUOPTimePlaySearch: number;

declare const kDVDUOPTitlePlay: number;

declare const kDVDUOPVideoModeChange: number;
