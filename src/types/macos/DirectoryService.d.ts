
declare function dsGetDataLength(inDataList: tDataList): number;

interface tAccessControlEntry {
	fGuestAccessFlags: number;
	fDirMemberFlags: number;
	fDirNodeMemberFlags: number;
	fOwnerFlags: number;
	fAdministratorFlags: number;
}
declare var tAccessControlEntry: tAccessControlEntry;

interface tAttributeEntry {
	fReserved1: number;
	fReserved2: tAccessControlEntry;
	fAttributeValueCount: number;
	fAttributeDataSize: number;
	fAttributeValueMaxSize: number;
	fAttributeSignature: tDataBuffer;
}
declare var tAttributeEntry: tAttributeEntry;

interface tAttributeValueEntry {
	fAttributeValueID: number;
	fAttributeValueData: tDataBuffer;
}
declare var tAttributeValueEntry: tAttributeValueEntry;

interface tDataBuffer {
	fBufferSize: number;
	fBufferLength: number;
	fBufferData: number;
}
declare var tDataBuffer: tDataBuffer;

interface tDataList {
	fDataNodeCount: number;
	fDataListHead: tDataBuffer;
}
declare var tDataList: tDataList;

enum tDirPatternMatch {

	eDSNoMatch1 = 0,

	eDSAnyMatch = 1,

	eDSBeginAppleReserve1 = 2,

	eDSEndAppleReserve1 = 8191,

	eDSExact = 8193,

	eDSStartsWith = 8194,

	eDSEndsWith = 8195,

	eDSContains = 8196,

	eDSLessThan = 8197,

	eDSGreaterThan = 8198,

	eDSLessEqual = 8199,

	eDSGreaterEqual = 8200,

	eDSWildCardPattern = 8201,

	eDSRegularExpression = 8202,

	eDSCompoundExpression = 8203,

	eDSiExact = 8449,

	eDSiStartsWith = 8450,

	eDSiEndsWith = 8451,

	eDSiContains = 8452,

	eDSiLessThan = 8453,

	eDSiGreaterThan = 8454,

	eDSiLessEqual = 8455,

	eDSiGreaterEqual = 8456,

	eDSiWildCardPattern = 8457,

	eDSiRegularExpression = 8458,

	eDSiCompoundExpression = 8459,

	eDSLocalNodeNames = 8704,

	eDSSearchNodeName = 8705,

	eDSConfigNodeName = 8706,

	eDSLocalHostedNodes = 8707,

	eDSAuthenticationSearchNodeName = 8705,

	eDSContactsSearchNodeName = 8708,

	eDSNetworkSearchNodeName = 8709,

	eDSDefaultNetworkNodes = 8710,

	eDSCacheNodeName = 8711,

	dDSBeginPlugInCustom = 12288,

	eDSEndPlugInCustom = 20479,

	eDSBeginAppleReserve2 = 20480,

	eDSEndAppleReserve2 = 65534,

	eDSNoMatch2 = 65535
}


enum tDirStatus {

	eDSNoErr = 0,

	eDSOpenFailed = -14000,

	eDSCloseFailed = -14001,

	eDSOpenNodeFailed = -14002,

	eDSBadDirRefences = -14003,

	eDSNullRecordReference = -14004,

	eDSMaxSessionsOpen = -14005,

	eDSCannotAccessSession = -14006,

	eDSDirSrvcNotOpened = -14007,

	eDSNodeNotFound = -14008,

	eDSUnknownNodeName = -14009,

	eDSRegisterCustomFailed = -14010,

	eDSGetCustomFailed = -14011,

	eDSUnRegisterFailed = -14012,

	eDSLocalDSDaemonInUse = -14015,

	eDSNormalDSDaemonInUse = -14016,

	eDSAllocationFailed = -14050,

	eDSDeAllocateFailed = -14051,

	eDSCustomBlockFailed = -14052,

	eDSCustomUnblockFailed = -14053,

	eDSCustomYieldFailed = -14054,

	eDSCorruptBuffer = -14060,

	eDSInvalidIndex = -14061,

	eDSIndexOutOfRange = -14062,

	eDSIndexNotFound = -14063,

	eDSCorruptRecEntryData = -14065,

	eDSRefSpaceFull = -14069,

	eDSRefTableAllocError = -14070,

	eDSInvalidReference = -14071,

	eDSInvalidRefType = -14072,

	eDSInvalidDirRef = -14073,

	eDSInvalidNodeRef = -14074,

	eDSInvalidRecordRef = -14075,

	eDSInvalidAttrListRef = -14076,

	eDSInvalidAttrValueRef = -14077,

	eDSInvalidContinueData = -14078,

	eDSInvalidBuffFormat = -14079,

	eDSInvalidPatternMatchType = -14080,

	eDSRefTableError = -14081,

	eDSRefTableNilError = -14082,

	eDSRefTableIndexOutOfBoundsError = -14083,

	eDSRefTableEntryNilError = -14084,

	eDSRefTableCSBPAllocError = -14085,

	eDSRefTableFWAllocError = -14086,

	eDSAuthFailed = -14090,

	eDSAuthMethodNotSupported = -14091,

	eDSAuthResponseBufTooSmall = -14092,

	eDSAuthParameterError = -14093,

	eDSAuthInBuffFormatError = -14094,

	eDSAuthNoSuchEntity = -14095,

	eDSAuthBadPassword = -14096,

	eDSAuthContinueDataBad = -14097,

	eDSAuthUnknownUser = -14098,

	eDSAuthInvalidUserName = -14099,

	eDSAuthCannotRecoverPasswd = -14100,

	eDSAuthFailedClearTextOnly = -14101,

	eDSAuthNoAuthServerFound = -14102,

	eDSAuthServerError = -14103,

	eDSInvalidContext = -14104,

	eDSBadContextData = -14105,

	eDSPermissionError = -14120,

	eDSReadOnly = -14121,

	eDSInvalidDomain = -14122,

	eNetInfoError = -14123,

	eDSInvalidRecordType = -14130,

	eDSInvalidAttributeType = -14131,

	eDSInvalidRecordName = -14133,

	eDSAttributeNotFound = -14134,

	eDSRecordAlreadyExists = -14135,

	eDSRecordNotFound = -14136,

	eDSAttributeDoesNotExist = -14137,

	eDSRecordTypeDisabled = -14138,

	eDSNoStdMappingAvailable = -14140,

	eDSInvalidNativeMapping = -14141,

	eDSSchemaError = -14142,

	eDSAttributeValueNotFound = -14143,

	eDSVersionMismatch = -14149,

	eDSPlugInConfigFileError = -14150,

	eDSInvalidPlugInConfigData = -14151,

	eDSAuthNewPasswordRequired = -14161,

	eDSAuthPasswordExpired = -14162,

	eDSAuthPasswordQualityCheckFailed = -14165,

	eDSAuthAccountDisabled = -14167,

	eDSAuthAccountExpired = -14168,

	eDSAuthAccountInactive = -14169,

	eDSAuthPasswordTooShort = -14170,

	eDSAuthPasswordTooLong = -14171,

	eDSAuthPasswordNeedsLetter = -14172,

	eDSAuthPasswordNeedsDigit = -14173,

	eDSAuthPasswordChangeTooSoon = -14174,

	eDSAuthInvalidLogonHours = -14175,

	eDSAuthInvalidComputer = -14176,

	eDSAuthMasterUnreachable = -14177,

	eDSNullParameter = -14200,

	eDSNullDataBuff = -14201,

	eDSNullNodeName = -14202,

	eDSNullRecEntryPtr = -14203,

	eDSNullRecName = -14204,

	eDSNullRecNameList = -14205,

	eDSNullRecType = -14206,

	eDSNullRecTypeList = -14207,

	eDSNullAttribute = -14208,

	eDSNullAttributeAccess = -14209,

	eDSNullAttributeValue = -14210,

	eDSNullAttributeType = -14211,

	eDSNullAttributeTypeList = -14212,

	eDSNullAttributeControlPtr = -14213,

	eDSNullAttributeRequestList = -14214,

	eDSNullDataList = -14215,

	eDSNullDirNodeTypeList = -14216,

	eDSNullAutMethod = -14217,

	eDSNullAuthStepData = -14218,

	eDSNullAuthStepDataResp = -14219,

	eDSNullNodeInfoTypeList = -14220,

	eDSNullPatternMatch = -14221,

	eDSNullNodeNamePattern = -14222,

	eDSNullTargetArgument = -14223,

	eDSEmptyParameter = -14230,

	eDSEmptyBuffer = -14231,

	eDSEmptyNodeName = -14232,

	eDSEmptyRecordName = -14233,

	eDSEmptyRecordNameList = -14234,

	eDSEmptyRecordType = -14235,

	eDSEmptyRecordTypeList = -14236,

	eDSEmptyRecordEntry = -14237,

	eDSEmptyPatternMatch = -14238,

	eDSEmptyNodeNamePattern = -14239,

	eDSEmptyAttribute = -14240,

	eDSEmptyAttributeType = -14241,

	eDSEmptyAttributeTypeList = -14242,

	eDSEmptyAttributeValue = -14243,

	eDSEmptyAttributeRequestList = -14244,

	eDSEmptyDataList = -14245,

	eDSEmptyNodeInfoTypeList = -14246,

	eDSEmptyAuthMethod = -14247,

	eDSEmptyAuthStepData = -14248,

	eDSEmptyAuthStepDataResp = -14249,

	eDSEmptyPattern2Match = -14250,

	eDSBadDataNodeLength = -14255,

	eDSBadDataNodeFormat = -14256,

	eDSBadSourceDataNode = -14257,

	eDSBadTargetDataNode = -14258,

	eDSBufferTooSmall = -14260,

	eDSUnknownMatchType = -14261,

	eDSUnSupportedMatchType = -14262,

	eDSInvalDataList = -14263,

	eDSAttrListError = -14264,

	eServerNotRunning = -14270,

	eUnknownAPICall = -14271,

	eUnknownServerError = -14272,

	eUnknownPlugIn = -14273,

	ePlugInDataError = -14274,

	ePlugInNotFound = -14275,

	ePlugInError = -14276,

	ePlugInInitError = -14277,

	ePlugInNotActive = -14278,

	ePlugInFailedToInitialize = -14279,

	ePlugInCallTimedOut = -14280,

	eNoSearchNodesFound = -14290,

	eSearchPathNotDefined = -14291,

	eNotHandledByThisNode = -14292,

	eIPCSendError = -14330,

	eIPCReceiveError = -14331,

	eServerReplyError = -14332,

	eDSTCPSendError = -14350,

	eDSTCPReceiveError = -14351,

	eDSTCPVersionMismatch = -14352,

	eDSIPUnreachable = -14353,

	eDSUnknownHost = -14354,

	ePluginHandlerNotLoaded = -14400,

	eNoPluginsLoaded = -14402,

	ePluginAlreadyLoaded = -14404,

	ePluginVersionNotFound = -14406,

	ePluginNameNotFound = -14408,

	eNoPluginFactoriesFound = -14410,

	ePluginConfigAvailNotFound = -14412,

	ePluginConfigFileNotFound = -14414,

	eCFMGetFileSysRepErr = -14450,

	eCFPlugInGetBundleErr = -14452,

	eCFBndleGetInfoDictErr = -14454,

	eCFDictGetValueErr = -14456,

	eDSServerTimeout = -14470,

	eDSContinue = -14471,

	eDSInvalidHandle = -14472,

	eDSSendFailed = -14473,

	eDSReceiveFailed = -14474,

	eDSBadPacket = -14475,

	eDSInvalidTag = -14476,

	eDSInvalidSession = -14477,

	eDSInvalidName = -14478,

	eDSUserUnknown = -14479,

	eDSUnrecoverablePassword = -14480,

	eDSAuthenticationFailed = -14481,

	eDSBogusServer = -14482,

	eDSOperationFailed = -14483,

	eDSNotAuthorized = -14484,

	eDSNetInfoError = -14485,

	eDSContactMaster = -14486,

	eDSServiceUnavailable = -14487,

	eDSInvalidFilePath = -14488,

	eDSOperationTimeout = -14489,

	eFWGetDirNodeNameErr1 = -14501,

	eFWGetDirNodeNameErr2 = -14502,

	eFWGetDirNodeNameErr3 = -14503,

	eFWGetDirNodeNameErr4 = -14504,

	eParameterSendError = -14700,

	eParameterReceiveError = -14720,

	eServerSendError = -14740,

	eServerReceiveError = -14760,

	eMemoryError = -14900,

	eMemoryAllocError = -14901,

	eServerError = -14910,

	eParameterError = -14915,

	eDataReceiveErr_NoDirRef = -14950,

	eDataReceiveErr_NoRecRef = -14951,

	eDataReceiveErr_NoAttrListRef = -14952,

	eDataReceiveErr_NoAttrValueListRef = -14953,

	eDataReceiveErr_NoAttrEntry = -14954,

	eDataReceiveErr_NoAttrValueEntry = -14955,

	eDataReceiveErr_NoNodeCount = -14956,

	eDataReceiveErr_NoAttrCount = -14957,

	eDataReceiveErr_NoRecEntry = -14958,

	eDataReceiveErr_NoRecEntryCount = -14959,

	eDataReceiveErr_NoRecMatchCount = -14960,

	eDataReceiveErr_NoDataBuff = -14961,

	eDataReceiveErr_NoContinueData = -14962,

	eDataReceiveErr_NoNodeChangeToken = -14963,

	eNoLongerSupported = -14986,

	eUndefinedError = -14987,

	eNotYetImplemented = -14988,

	eDSLastValue = -14999
}


interface tRecordEntry {
	fReserved1: number;
	fReserved2: tAccessControlEntry;
	fRecordAttributeCount: number;
	fRecordNameAndType: tDataBuffer;
}
declare var tRecordEntry: tRecordEntry;
