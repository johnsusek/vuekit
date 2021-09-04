
interface BluetoothAFHHostChannelClassification {
	data: number;
}
declare var BluetoothAFHHostChannelClassification: BluetoothAFHHostChannelClassification;

interface BluetoothAFHResults {
	handle: number;
	mode: number;
	afhMap: number;
}
declare var BluetoothAFHResults: BluetoothAFHResults;

enum BluetoothAMPCommandRejectReason {

	kBluetoothAMPManagerCommandRejectReasonCommandNotRecognized = 0
}


enum BluetoothAMPCreatePhysicalLinkResponseStatus {

	kBluetoothAMPManagerCreatePhysicalLinkResponseSuccess = 0,

	kBluetoothAMPManagerCreatePhysicalLinkResponseInvalidControllerID = 1,

	kBluetoothAMPManagerCreatePhysicalLinkResponseUnableToStartLinkCreation = 2,

	kBluetoothAMPManagerCreatePhysicalLinkResponseCollisionOccurred = 3,

	kBluetoothAMPManagerCreatePhysicalLinkResponseAMPDisconnectedPhysicalLinkRequestReceived = 4,

	kBluetoothAMPManagerCreatePhysicalLinkResponsePhysicalLinkAlreadyExists = 5,

	kBluetoothAMPManagerCreatePhysicalLinkResponseSecurityViolation = 6
}


enum BluetoothAMPDisconnectPhysicalLinkResponseStatus {

	kBluetoothAMPManagerDisconnectPhysicalLinkResponseSuccess = 0,

	kBluetoothAMPManagerDisconnectPhysicalLinkResponseInvalidControllerID = 1,

	kBluetoothAMPManagerDisconnectPhysicalLinkResponseNoPhysicalLink = 2
}


enum BluetoothAMPDiscoverResponseControllerStatus {

	kBluetoothAMPManagerDiscoverResponseControllerStatusPoweredDown = 0,

	kBluetoothAMPManagerDiscoverResponseControllerStatusBluetoothOnly = 1,

	kBluetoothAMPManagerDiscoverResponseControllerStatusNoCapacity = 2,

	kBluetoothAMPManagerDiscoverResponseControllerStatusLowCapacity = 3,

	kBluetoothAMPManagerDiscoverResponseControllerStatusMediumCapacity = 4,

	kBluetoothAMPManagerDiscoverResponseControllerStatusHighCapacity = 5,

	kBluetoothAMPManagerDiscoverResponseControllerStatusFullCapacity = 6
}


enum BluetoothAMPGetAssocResponseStatus {

	kBluetoothAMPManagerGetAssocResponseSuccess = 0,

	kBluetoothAMPManagerGetAssocResponseInvalidControllerID = 1
}


enum BluetoothAMPGetInfoResponseStatus {

	kBluetoothAMPManagerGetInfoResponseSuccess = 0,

	kBluetoothAMPManagerGetInfoResponseInvalidControllerID = 1
}


enum BluetoothAMPManagerCode {

	kBluetoothAMPManagerCodeReserved = 0,

	kBluetoothAMPManagerCodeAMPCommandReject = 1,

	kBluetoothAMPManagerCodeAMPDiscoverRequest = 2,

	kBluetoothAMPManagerCodeAMPDiscoverResponse = 3,

	kBluetoothAMPManagerCodeAMPChangeNotify = 4,

	kBluetoothAMPManagerCodeAMPChangeResponse = 5,

	kBluetoothAMPManagerCodeAMPGetInfoRequest = 6,

	kBluetoothAMPManagerCodeAMPGetInfoResponse = 7,

	kBluetoothAMPManagerCodeAMPGetAssocRequest = 8,

	kBluetoothAMPManagerCodeAMPGetAssocResponse = 9,

	kBluetoothAMPManagerCodeAMPCreatePhysicalLinkRequest = 10,

	kBluetoothAMPManagerCodeAMPCreatePhysicalLinkResponse = 11,

	kBluetoothAMPManagerCodeAMPDisconnectPhysicalLinkRequest = 12,

	kBluetoothAMPManagerCodeAMPDisconnectPhysicalLinkResponse = 13
}


enum BluetoothAuthenticationRequirementsValues {

	kBluetoothAuthenticationRequirementsMITMProtectionNotRequired = 0,

	kBluetoothAuthenticationRequirementsMITMProtectionRequired = 1,

	kBluetoothAuthenticationRequirementsMITMProtectionNotRequiredNoBonding = 0,

	kBluetoothAuthenticationRequirementsMITMProtectionRequiredNoBonding = 1,

	kBluetoothAuthenticationRequirementsMITMProtectionNotRequiredDedicatedBonding = 2,

	kBluetoothAuthenticationRequirementsMITMProtectionRequiredDedicatedBonding = 3,

	kBluetoothAuthenticationRequirementsMITMProtectionNotRequiredGeneralBonding = 4,

	kBluetoothAuthenticationRequirementsMITMProtectionRequiredGeneralBonding = 5
}


enum BluetoothCompanyIdentifers {

	kBluetoothCompanyIdentiferEricssonTechnologyLicensing = 0,

	kBluetoothCompanyIdentiferNokiaMobilePhones = 1,

	kBluetoothCompanyIdentiferIntel = 2,

	kBluetoothCompanyIdentiferIBM = 3,

	kBluetoothCompanyIdentiferToshiba = 4,

	kBluetoothCompanyIdentifer3Com = 5,

	kBluetoothCompanyIdentiferMicrosoft = 6,

	kBluetoothCompanyIdentiferLucent = 7,

	kBluetoothCompanyIdentiferMotorola = 8,

	kBluetoothCompanyIdentiferInfineonTechnologiesAG = 9,

	kBluetoothCompanyIdentiferCambridgeSiliconRadio = 10,

	kBluetoothCompanyIdentiferSiliconWave = 11,

	kBluetoothCompanyIdentiferDigianswerAS = 12,

	kBluetoothCompanyIdentiferTexasInstruments = 13,

	kBluetoothCompanyIdentiferParthusTechnologies = 14,

	kBluetoothCompanyIdentiferBroadcom = 15,

	kBluetoothCompanyIdentiferMitelSemiconductor = 16,

	kBluetoothCompanyIdentiferWidcomm = 17,

	kBluetoothCompanyIdentiferZeevo = 18,

	kBluetoothCompanyIdentiferAtmel = 19,

	kBluetoothCompanyIdentiferMistubishiElectric = 20,

	kBluetoothCompanyIdentiferRTXTelecom = 21,

	kBluetoothCompanyIdentiferKCTechnology = 22,

	kBluetoothCompanyIdentiferNewlogic = 23,

	kBluetoothCompanyIdentiferTransilica = 24,

	kBluetoothCompanyIdentiferRohdeandSchwarz = 25,

	kBluetoothCompanyIdentiferTTPCom = 26,

	kBluetoothCompanyIdentiferSigniaTechnologies = 27,

	kBluetoothCompanyIdentiferConexantSystems = 28,

	kBluetoothCompanyIdentiferQualcomm = 29,

	kBluetoothCompanyIdentiferInventel = 30,

	kBluetoothCompanyIdentiferAVMBerlin = 31,

	kBluetoothCompanyIdentiferBandspeed = 32,

	kBluetoothCompanyIdentiferMansella = 33,

	kBluetoothCompanyIdentiferNEC = 34,

	kBluetoothCompanyIdentiferWavePlusTechnology = 35,

	kBluetoothCompanyIdentiferAlcatel = 36,

	kBluetoothCompanyIdentiferPhilipsSemiconductor = 37,

	kBluetoothCompanyIdentiferCTechnologies = 38,

	kBluetoothCompanyIdentiferOpenInterface = 39,

	kBluetoothCompanyIdentiferRFCMicroDevices = 40,

	kBluetoothCompanyIdentiferHitachi = 41,

	kBluetoothCompanyIdentiferSymbolTechnologies = 42,

	kBluetoothCompanyIdentiferTenovis = 43,

	kBluetoothCompanyIdentiferMacronixInternational = 44,

	kBluetoothCompanyIdentiferGCTSemiconductor = 45,

	kBluetoothCompanyIdentiferNorwoodSystems = 46,

	kBluetoothCompanyIdentiferMewTelTechnology = 47,

	kBluetoothCompanyIdentiferSTMicroelectronics = 48,

	kBluetoothCompanyIdentiferSynopsys = 49,

	kBluetoothCompanyIdentiferRedMCommunications = 50,

	kBluetoothCompanyIdentiferCommil = 51,

	kBluetoothCompanyIdentiferCATC = 52,

	kBluetoothCompanyIdentiferEclipse = 53,

	kBluetoothCompanyIdentiferRenesasTechnology = 54,

	kBluetoothCompanyIdentiferMobilian = 55,

	kBluetoothCompanyIdentiferTerax = 56,

	kBluetoothCompanyIdentiferIntegratedSystemSolution = 57,

	kBluetoothCompanyIdentiferMatsushitaElectricIndustrial = 58,

	kBluetoothCompanyIdentiferGennum = 59,

	kBluetoothCompanyIdentiferResearchInMotion = 60,

	kBluetoothCompanyIdentiferIPextreme = 61,

	kBluetoothCompanyIdentiferSystemsAndChips = 62,

	kBluetoothCompanyIdentiferBluetoothSIG = 63,

	kBluetoothCompanyIdentiferSeikoEpson = 64,

	kBluetoothCompanyIdentiferIntegratedSiliconSolution = 65,

	kBluetoothCompanyIdentiferCONWISETechnology = 66,

	kBluetoothCompanyIdentiferParrotSA = 67,

	kBluetoothCompanyIdentiferSocketCommunications = 68,

	kBluetoothCompanyIdentiferAtherosCommunications = 69,

	kBluetoothCompanyIdentiferMediaTek = 70,

	kBluetoothCompanyIdentiferBluegiga = 71,

	kBluetoothCompanyIdentiferMarvellTechnologyGroup = 72,

	kBluetoothCompanyIdentifer3DSP = 73,

	kBluetoothCompanyIdentiferAccelSemiconductor = 74,

	kBluetoothCompanyIdentiferContinentialAutomotiveSystems = 75,

	kBluetoothCompanyIdentiferApple = 76,

	kBluetoothCompanyIdentiferStaccatoCommunications = 77,

	kBluetoothCompanyIdentiferAvagoTechnologies = 78,

	kBluetoothCompanyIdentiferAPT = 79,

	kBluetoothCompanyIdentiferSiRFTechnology = 80,

	kBluetoothCompanyIdentiferTZeroTechnologies = 81,

	kBluetoothCompanyIdentiferJandM = 82,

	kBluetoothCompanyIdentiferFree2Move = 83,

	kBluetoothCompanyIdentifer3DiJoy = 84,

	kBluetoothCompanyIdentiferPlantronics = 85,

	kBluetoothCompanyIdentiferSonyEricssonMobileCommunications = 86,

	kBluetoothCompanyIdentiferHarmonInternational = 87,

	kBluetoothCompanyIdentiferVisio = 88,

	kBluetoothCompanyIdentiferNordicSemiconductor = 89,

	kBluetoothCompanyIdentiferEMMicroElectronicMarin = 90,

	kBluetoothCompanyIdentiferRalinkTechnology = 91,

	kBluetoothCompanyIdentiferBelkinInternational = 92,

	kBluetoothCompanyIdentiferRealtekSemiconductor = 93,

	kBluetoothCompanyIdentiferStonestreetOne = 94,

	kBluetoothCompanyIdentiferWicentric = 95,

	kBluetoothCompanyIdentiferRivieraWaves = 96,

	kBluetoothCompanyIdentiferRDAMicroelectronics = 97,

	kBluetoothCompanyIdentiferGibsonGuitars = 98,

	kBluetoothCompanyIdentiferMiCommand = 99,

	kBluetoothCompanyIdentiferBandXIInternational = 100,

	kBluetoothCompanyIdentiferHewlettPackard = 101,

	kBluetoothCompanyIdentifer9SolutionsOy = 102,

	kBluetoothCompanyIdentiferGNNetcom = 103,

	kBluetoothCompanyIdentiferGeneralMotors = 104,

	kBluetoothCompanyIdentiferAAndDEngineering = 105,

	kBluetoothCompanyIdentiferMindTree = 106,

	kBluetoothCompanyIdentiferPolarElectroOY = 107,

	kBluetoothCompanyIdentiferBeautifulEnterprise = 108,

	kBluetoothCompanyIdentiferBriarTek = 109,

	kBluetoothCompanyIdentiferSummitDataCommunications = 110,

	kBluetoothCompanyIdentiferSoundID = 111,

	kBluetoothCompanyIdentiferMonster = 112,

	kBluetoothCompanyIdentiferConnectBlueAB = 113,

	kBluetoothCompanyIdentiferShangHaiSuperSmartElectronics = 114,

	kBluetoothCompanyIdentiferGroupSense = 115,

	kBluetoothCompanyIdentiferZomm = 116,

	kBluetoothCompanyIdentiferSamsungElectronics = 117,

	kBluetoothCompanyIdentiferCreativeTechnology = 118,

	kBluetoothCompanyIdentiferLairdTechnologies = 119,

	kBluetoothCompanyIdentiferNike = 120,

	kBluetoothCompanyIdentiferLessWire = 121,

	kBluetoothCompanyIdentiferMStarTechnologies = 122,

	kBluetoothCompanyIdentiferHanlynnTechnologies = 123,

	kBluetoothCompanyIdentiferAAndRCambridge = 124,

	kBluetoothCompanyIdentiferSeersTechnology = 125,

	kBluetoothCompanyIdentiferSportsTrackingTechnologies = 126,

	kBluetoothCompanyIdentiferAutonetMobile = 127,

	kBluetoothCompanyIdentiferDeLormePublishingCompany = 128,

	kBluetoothCompanyIdentiferWuXiVimicro = 129,

	kBluetoothCompanyIdentiferSennheiserCommunications = 130,

	kBluetoothCompanyIdentiferTimeKeepingSystems = 131,

	kBluetoothCompanyIdentiferLudusHelsinki = 132,

	kBluetoothCompanyIdentiferBlueRadios = 133,

	kBluetoothCompanyIdentiferEquinux = 134,

	kBluetoothCompanyIdentiferGarminInternational = 135,

	kBluetoothCompanyIdentiferEcotest = 136,

	kBluetoothCompanyIdentiferGNResound = 137,

	kBluetoothCompanyIdentiferJawbone = 138,

	kBluetoothCompanyIdentiferTopconPositioningSystems = 139,

	kBluetoothCompanyIdentiferGimbal = 140,

	kBluetoothCompanyIdentiferZscanSoftware = 141,

	kBluetoothCompanyIdentiferQuintic = 142,

	kBluetoothCompanyIdentiferTelitWirelessSolutions = 143,

	kBluetoothCompanyIdentiferFunaiElectric = 144,

	kBluetoothCompanyIdentiferAdvancedPANMOBILSystems = 145,

	kBluetoothCompanyIdentiferThinkOptics = 146,

	kBluetoothCompanyIdentiferUniversalElectriconics = 147,

	kBluetoothCompanyIdentiferAirohaTechnology = 148,

	kBluetoothCompanyIdentiferNECLightning = 149,

	kBluetoothCompanyIdentiferODMTechnology = 150,

	kBluetoothCompanyIdentiferConnecteDevice = 151,

	kBluetoothCompanyIdentiferZero1TV = 152,

	kBluetoothCompanyIdentiferITechDynamicGlobalDistribution = 153,

	kBluetoothCompanyIdentiferAlpwise = 154,

	kBluetoothCompanyIdentiferJiangsuToppowerAutomotiveElectronics = 155,

	kBluetoothCompanyIdentiferColorfy = 156,

	kBluetoothCompanyIdentiferGeoforce = 157,

	kBluetoothCompanyIdentiferBose = 158,

	kBluetoothCompanyIdentiferSuuntoOy = 159,

	kBluetoothCompanyIdentiferKensingtonComputerProductsGroup = 160,

	kBluetoothCompanyIdentiferSRMedizinelektronik = 161,

	kBluetoothCompanyIdentiferVertu = 162,

	kBluetoothCompanyIdentiferMetaWatch = 163,

	kBluetoothCompanyIdentiferLinak = 164,

	kBluetoothCompanyIdentiferOTLDynamics = 165,

	kBluetoothCompanyIdentiferPandaOcean = 166,

	kBluetoothCompanyIdentiferVisteon = 167,

	kBluetoothCompanyIdentiferARPDevicesUnlimited = 168,

	kBluetoothCompanyIdentiferMagnetiMarelli = 169,

	kBluetoothCompanyIdentiferCaenRFID = 170,

	kBluetoothCompanyIdentiferIngenieurSystemgruppeZahn = 171,

	kBluetoothCompanyIdentiferGreenThrottleGames = 172,

	kBluetoothCompanyIdentiferPeterSystemtechnik = 173,

	kBluetoothCompanyIdentiferOmegawave = 174,

	kBluetoothCompanyIdentiferCinetix = 175,

	kBluetoothCompanyIdentiferPassifSemiconductor = 176,

	kBluetoothCompanyIdentiferSarisCyclingGroup = 177,

	kBluetoothCompanyIdentiferBekey = 178,

	kBluetoothCompanyIdentiferClarinoxTechnologies = 179,

	kBluetoothCompanyIdentiferBDETechnology = 180,

	kBluetoothCompanyIdentiferSwirlNetworks = 181,

	kBluetoothCompanyIdentiferMesoInternational = 182,

	kBluetoothCompanyIdentiferTreLab = 183,

	kBluetoothCompanyIdentiferQualcommInnovationCenter = 184,

	kBluetoothCompanyIdentiferJohnsonControls = 185,

	kBluetoothCompanyIdentiferStarkeyLaboratories = 186,

	kBluetoothCompanyIdentiferSPowerElectronics = 187,

	kBluetoothCompanyIdentiferAceSensor = 188,

	kBluetoothCompanyIdentiferAplix = 189,

	kBluetoothCompanyIdentiferAAMPofAmerica = 190,

	kBluetoothCompanyIdentiferStalmartTechnology = 191,

	kBluetoothCompanyIdentiferAMICCOMElectronics = 192,

	kBluetoothCompanyIdentiferShenzhenExcelsecuDataTechnology = 193,

	kBluetoothCompanyIdentiferGeneq = 194,

	kBluetoothCompanyIdentiferAdidas = 195,

	kBluetoothCompanyIdentiferLGElectronics = 196,

	kBluetoothCompanyIdentiferOnsetComputer = 197,

	kBluetoothCompanyIdentiferSelflyBV = 198,

	kBluetoothCompanyIdentiferQuupa = 199,

	kBluetoothCompanyIdentiferGeLo = 200,

	kBluetoothCompanyIdentiferEvluma = 201,

	kBluetoothCompanyIdentiferMC10 = 202,

	kBluetoothCompanyIdentiferBinauricSE = 203,

	kBluetoothCompanyIdentiferBeatsElectronics = 204,

	kBluetoothCompanyIdentiferMicrochipTechnology = 205,

	kBluetoothCompanyIdentiferElgatoSystems = 206,

	kBluetoothCompanyIdentiferARCHOS = 207,

	kBluetoothCompanyIdentiferDexcom = 208,

	kBluetoothCompanyIdentiferPolarElectroEurope = 209,

	kBluetoothCompanyIdentiferDialogSemiconductor = 210,

	kBluetoothCompanyIdentiferTaixingbangTechnology = 211,

	kBluetoothCompanyIdentiferKawantech = 212,

	kBluetoothCompanyIdentiferAustcoCommunicationsSystems = 213,

	kBluetoothCompanyIdentiferTimexGroup = 214,

	kBluetoothCompanyIdentiferQualcommTechnologies = 215,

	kBluetoothCompanyIdentiferQualcommConnectedExperiences = 216,

	kBluetoothCompanyIdentiferVoyetraTurtleBeach = 217,

	kBluetoothCompanyIdentifertxtrGMBH = 218,

	kBluetoothCompanyIdentiferBiosentronics = 219,

	kBluetoothCompanyIdentiferProctorAndGamble = 220,

	kBluetoothCompanyIdentiferHosiden = 221,

	kBluetoothCompanyIdentiferMusik = 222,

	kBluetoothCompanyIdentiferMisfitWearables = 223,

	kBluetoothCompanyIdentiferGoogle = 224,

	kBluetoothCompanyIdentiferDanlers = 225,

	kBluetoothCompanyIdentiferSemilink = 226,

	kBluetoothCompanyIdentiferInMusicBrands = 227,

	kBluetoothCompanyIdentiferLSResearch = 228,

	kBluetoothCompanyIdentiferEdenSoftwareConsultants = 229,

	kBluetoothCompanyIdentiferFreshtemp = 230,

	kBluetoothCompanyIdentiferKSTechnologies = 231,

	kBluetoothCompanyIdentiferACTSTechnologies = 232,

	kBluetoothCompanyIdentiferVtrackSystems = 233,

	kBluetoothCompanyIdentiferNielsenKellerman = 234,

	kBluetoothCompanyIdentiferServerTechnology = 235,

	kBluetoothCompanyIdentiferBioResearchAssociates = 236,

	kBluetoothCompanyIdentiferJollyLogic = 237,

	kBluetoothCompanyIdentiferAboveAverageOutcomes = 238,

	kBluetoothCompanyIdentiferBitsplitters = 239,

	kBluetoothCompanyIdentiferPayPal = 240,

	kBluetoothCompanyIdentiferWitronTechnology = 241,

	kBluetoothCompanyIdentiferMorseProject = 242,

	kBluetoothCompanyIdentiferKentDisplays = 243,

	kBluetoothCompanyIdentiferNautilus = 244,

	kBluetoothCompanyIdentiferSmartifier = 245,

	kBluetoothCompanyIdentiferElcometer = 246,

	kBluetoothCompanyIdentiferVSNTechnologies = 247,

	kBluetoothCompanyIdentiferAceUni = 248,

	kBluetoothCompanyIdentiferStickNFind = 249,

	kBluetoothCompanyIdentiferCrystalCode = 250,

	kBluetoothCompanyIdentiferKOUKAMM = 251,

	kBluetoothCompanyIdentiferDelphi = 252,

	kBluetoothCompanyIdentiferValenceTech = 253,

	kBluetoothCompanyIdentiferStanleyBlackAndDecker = 254,

	kBluetoothCompanyIdentiferTypeProducts = 255,

	kBluetoothCompanyIdentiferTomTomInternational = 256,

	kBluetoothCompanyIdentiferFuGoo = 257,

	kBluetoothCompanyIdentiferKeiser = 258,

	kBluetoothCompanyIdentiferBangAndOlufson = 259,

	kBluetoothCompanyIdentiferPLUSLocationSystems = 260,

	kBluetoothCompanyIdentiferUbiquitousComputingTechnology = 261,

	kBluetoothCompanyIdentiferInnovativeYachtterSolutions = 262,

	kBluetoothCompanyIdentiferWilliamDemantHolding = 263,

	kBluetoothCompanyIdentiferInteropIdentifier = 65535
}


interface BluetoothDeviceAddress {
	data: number;
}
declare var BluetoothDeviceAddress: BluetoothDeviceAddress;

interface BluetoothEnhancedSynchronousConnectionInfo {
	transmitBandWidth: number;
	receiveBandWidth: number;
	transmitCodingFormat: number;
	receiveCodingFormat: number;
	transmitCodecFrameSize: number;
	receiveCodecFrameSize: number;
	inputBandwidth: number;
	outputBandwidth: number;
	inputCodingFormat: number;
	outputCodingFormat: number;
	inputCodedDataSize: number;
	outputCodedDataSize: number;
	inputPCMDataFormat: number;
	outputPCMDataFormat: number;
	inputPCMSampelPayloadMSBPosition: number;
	outputPCMSampelPayloadMSBPosition: number;
	inputDataPath: number;
	outputDataPath: number;
	inputTransportUnitSize: number;
	outputTransportUnitSize: number;
	maxLatency: number;
	voiceSetting: number;
	retransmissionEffort: number;
	packetType: number;
}
declare var BluetoothEnhancedSynchronousConnectionInfo: BluetoothEnhancedSynchronousConnectionInfo;

interface BluetoothEventFilterCondition {
	data: number;
}
declare var BluetoothEventFilterCondition: BluetoothEventFilterCondition;

enum BluetoothFeatureBits {

	kBluetoothFeatureThreeSlotPackets = 1,

	kBluetoothFeatureFiveSlotPackets = 2,

	kBluetoothFeatureEncryption = 4,

	kBluetoothFeatureSlotOffset = 8,

	kBluetoothFeatureTimingAccuracy = 16,

	kBluetoothFeatureSwitchRoles = 32,

	kBluetoothFeatureHoldMode = 64,

	kBluetoothFeatureSniffMode = 128,

	kBluetoothFeatureParkMode = 1,

	kBluetoothFeatureRSSI = 2,

	kBluetoothFeaturePowerControlRequests = 2,

	kBluetoothFeatureChannelQuality = 4,

	kBluetoothFeatureSCOLink = 8,

	kBluetoothFeatureHV2Packets = 16,

	kBluetoothFeatureHV3Packets = 32,

	kBluetoothFeatureULawLog = 64,

	kBluetoothFeatureALawLog = 128,

	kBluetoothFeatureCVSD = 1,

	kBluetoothFeaturePagingScheme = 2,

	kBluetoothFeaturePowerControl = 4,

	kBluetoothFeatureTransparentSCOData = 8,

	kBluetoothFeatureFlowControlLagBit0 = 16,

	kBluetoothFeatureFlowControlLagBit1 = 32,

	kBluetoothFeatureFlowControlLagBit2 = 64,

	kBluetoothFeatureBroadcastEncryption = 128,

	kBluetoothFeatureScatterMode = 1,

	kBluetoothFeatureEnhancedDataRateACL2MbpsMode = 2,

	kBluetoothFeatureEnhancedDataRateACL3MbpsMode = 4,

	kBluetoothFeatureEnhancedInquiryScan = 8,

	kBluetoothFeatureInterlacedInquiryScan = 16,

	kBluetoothFeatureInterlacedPageScan = 32,

	kBluetoothFeatureRSSIWithInquiryResult = 64,

	kBluetoothFeatureExtendedSCOLink = 128,

	kBluetoothFeatureEV4Packets = 1,

	kBluetoothFeatureEV5Packets = 2,

	kBluetoothFeatureAbsenceMasks = 4,

	kBluetoothFeatureAFHCapableSlave = 8,

	kBluetoothFeatureAFHClassificationSlave = 16,

	kBluetoothFeatureAliasAuhentication = 32,

	kBluetoothFeatureLESupportedController = 64,

	kBluetoothFeature3SlotEnhancedDataRateACLPackets = 128,

	kBluetoothFeature5SlotEnhancedDataRateACLPackets = 1,

	kBluetoothFeatureSniffSubrating = 2,

	kBluetoothFeaturePauseEncryption = 4,

	kBluetoothFeatureAFHCapableMaster = 8,

	kBluetoothFeatureAFHClassificationMaster = 16,

	kBluetoothFeatureEnhancedDataRateeSCO2MbpsMode = 32,

	kBluetoothFeatureEnhancedDataRateeSCO3MbpsMode = 64,

	kBluetoothFeature3SlotEnhancedDataRateeSCOPackets = 128,

	kBluetoothFeatureExtendedInquiryResponse = 1,

	kBluetoothFeatureSecureSimplePairing = 8,

	kBluetoothFeatureEncapsulatedPDU = 16,

	kBluetoothFeatureErroneousDataReporting = 32,

	kBluetoothFeatureNonFlushablePacketBoundaryFlag = 64,

	kBluetoothFeatureLinkSupervisionTimeoutChangedEvent = 1,

	kBluetoothFeatureInquiryTransmissionPowerLevel = 2,

	kBluetoothFeatureExtendedFeatures = 128,

	kBluetoothExtendedFeatureSimpleSecurePairingHostMode = 1,

	kBluetoothExtendedFeatureLESupportedHostMode = 2,

	kBluetoothExtendedFeatureLEAndBREDRToSameDeviceHostMode = 4,

	KBluetoothExtendedFeatureSecureConnectionsHostMode = 8,

	kBluetoothExtendedFeatureSecureConnectionsControllerSupport = 1,

	kBluetoothExtendedFeaturePing = 2,

	kBluetoothExtendedFeatureReserved = 4,

	kBluetoothExtendedFeatureTrainNudging = 8,

	kBluetoothExtendedFeatureSlotAvailabilityMask = 16
}


enum BluetoothHCIAFHChannelAssessmentModes {

	kAFHChannelAssessmentModeDisabled = 0,

	kAFHChannelAssessmentModeEnabled = 1
}


interface BluetoothHCIAcceptSynchronousConnectionRequestParams {
	transmitBandwidth: number;
	receiveBandwidth: number;
	maxLatency: number;
	contentFormat: number;
	retransmissionEffort: number;
	packetType: number;
}
declare var BluetoothHCIAcceptSynchronousConnectionRequestParams: BluetoothHCIAcceptSynchronousConnectionRequestParams;

enum BluetoothHCIAuthentionEnableModes {

	kAuthenticationDisabled = 0,

	kAuthenticationEnabled = 1
}


interface BluetoothHCIAutomaticFlushTimeoutInfo {
	handle: number;
	timeout: number;
}
declare var BluetoothHCIAutomaticFlushTimeoutInfo: BluetoothHCIAutomaticFlushTimeoutInfo;

interface BluetoothHCIBufferSize {
	ACLDataPacketLength: number;
	SCODataPacketLength: number;
	totalNumACLDataPackets: number;
	totalNumSCODataPackets: number;
}
declare var BluetoothHCIBufferSize: BluetoothHCIBufferSize;

enum BluetoothHCIConnectionModes {

	kConnectionActiveMode = 0,

	kConnectionHoldMode = 1,

	kConnectionSniffMode = 2,

	kConnectionParkMode = 3,

	kConnectionModeReservedForFutureUse = 4
}


interface BluetoothHCICurrentInquiryAccessCodes {
	count: number;
	codes: BluetoothHCIInquiryAccessCode;
}
declare var BluetoothHCICurrentInquiryAccessCodes: BluetoothHCICurrentInquiryAccessCodes;

interface BluetoothHCICurrentInquiryAccessCodesForWrite {
	count: number;
	codes: number;
}
declare var BluetoothHCICurrentInquiryAccessCodesForWrite: BluetoothHCICurrentInquiryAccessCodesForWrite;

enum BluetoothHCIDeleteStoredLinkKeyFlags {

	kDeleteKeyForSpecifiedDeviceOnly = 0,

	kDeleteAllStoredLinkKeys = 1
}


interface BluetoothHCIEncryptionKeySizeInfo {
	handle: number;
	keySize: number;
}
declare var BluetoothHCIEncryptionKeySizeInfo: BluetoothHCIEncryptionKeySizeInfo;

enum BluetoothHCIEncryptionModes {

	kEncryptionDisabled = 0,

	kEncryptionOnlyForPointToPointPackets = 1,

	kEncryptionForBothPointToPointAndBroadcastPackets = 2
}


interface BluetoothHCIEnhancedAcceptSynchronousConnectionRequestParams {
	transmitBandwidth: number;
	receiveBandwidth: number;
	transmitCodingFormat: number;
	receiveCodingFormat: number;
	transmitCodecFrameSize: number;
	receiveCodecFrameSize: number;
	inputBandwidth: number;
	outputBandwidth: number;
	inputCodingFormat: number;
	outputCodingFormat: number;
	inputCodedDataSize: number;
	outputCodedDataSize: number;
	inputPCMDataFormat: number;
	outputPCMDataFormat: number;
	inputPCMSamplePayloadMSBPosition: number;
	outputPCMSamplePayloadMSBPosition: number;
	inputDataPath: number;
	outputDataPath: number;
	inputTransportUnitSize: number;
	outputTransportUnitSize: number;
	maxLatency: number;
	packetType: number;
	retransmissionEffort: number;
}
declare var BluetoothHCIEnhancedAcceptSynchronousConnectionRequestParams: BluetoothHCIEnhancedAcceptSynchronousConnectionRequestParams;

interface BluetoothHCIEnhancedSetupSynchronousConnectionParams {
	transmitBandwidth: number;
	receiveBandwidth: number;
	transmitCodingFormat: number;
	receiveCodingFormat: number;
	transmitCodecFrameSize: number;
	receiveCodecFrameSize: number;
	inputBandwidth: number;
	outputBandwidth: number;
	inputCodingFormat: number;
	outputCodingFormat: number;
	inputCodedDataSize: number;
	outputCodedDataSize: number;
	inputPCMDataFormat: number;
	outputPCMDataFormat: number;
	inputPCMSamplePayloadMSBPosition: number;
	outputPCMSamplePayloadMSBPosition: number;
	inputDataPath: number;
	outputDataPath: number;
	inputTransportUnitSize: number;
	outputTransportUnitSize: number;
	maxLatency: number;
	packetType: number;
	retransmissionEffort: number;
}
declare var BluetoothHCIEnhancedSetupSynchronousConnectionParams: BluetoothHCIEnhancedSetupSynchronousConnectionParams;

interface BluetoothHCIEventAuthenticationCompleteResults {
	connectionHandle: number;
}
declare var BluetoothHCIEventAuthenticationCompleteResults: BluetoothHCIEventAuthenticationCompleteResults;

interface BluetoothHCIEventChangeConnectionLinkKeyCompleteResults {
	connectionHandle: number;
}
declare var BluetoothHCIEventChangeConnectionLinkKeyCompleteResults: BluetoothHCIEventChangeConnectionLinkKeyCompleteResults;

interface BluetoothHCIEventConnectionCompleteResults {
	connectionHandle: number;
	deviceAddress: BluetoothDeviceAddress;
	linkType: number;
	encryptionMode: number;
}
declare var BluetoothHCIEventConnectionCompleteResults: BluetoothHCIEventConnectionCompleteResults;

interface BluetoothHCIEventConnectionPacketTypeResults {
	connectionHandle: number;
	packetType: number;
}
declare var BluetoothHCIEventConnectionPacketTypeResults: BluetoothHCIEventConnectionPacketTypeResults;

interface BluetoothHCIEventConnectionRequestResults {
	deviceAddress: BluetoothDeviceAddress;
	classOfDevice: number;
	linkType: number;
}
declare var BluetoothHCIEventConnectionRequestResults: BluetoothHCIEventConnectionRequestResults;

interface BluetoothHCIEventDataBufferOverflowResults {
	linkType: number;
}
declare var BluetoothHCIEventDataBufferOverflowResults: BluetoothHCIEventDataBufferOverflowResults;

interface BluetoothHCIEventDisconnectionCompleteResults {
	connectionHandle: number;
	reason: number;
}
declare var BluetoothHCIEventDisconnectionCompleteResults: BluetoothHCIEventDisconnectionCompleteResults;

interface BluetoothHCIEventEncryptionChangeResults {
	connectionHandle: number;
	enable: number;
}
declare var BluetoothHCIEventEncryptionChangeResults: BluetoothHCIEventEncryptionChangeResults;

interface BluetoothHCIEventEncryptionKeyRefreshCompleteResults {
	connectionHandle: number;
}
declare var BluetoothHCIEventEncryptionKeyRefreshCompleteResults: BluetoothHCIEventEncryptionKeyRefreshCompleteResults;

interface BluetoothHCIEventFlowSpecificationData {
	connectionHandle: number;
	flags: number;
	flowDirection: number;
	serviceType: number;
	tokenRate: number;
	tokenBucketSize: number;
	peakBandwidth: number;
	accessLatency: number;
}
declare var BluetoothHCIEventFlowSpecificationData: BluetoothHCIEventFlowSpecificationData;

interface BluetoothHCIEventFlushOccurredResults {
	connectionHandle: number;
}
declare var BluetoothHCIEventFlushOccurredResults: BluetoothHCIEventFlushOccurredResults;

interface BluetoothHCIEventHardwareErrorResults {
	error: number;
}
declare var BluetoothHCIEventHardwareErrorResults: BluetoothHCIEventHardwareErrorResults;

interface BluetoothHCIEventLEConnectionCompleteResults {
	connectionHandle: number;
	role: number;
	peerAddressType: number;
	peerAddress: BluetoothDeviceAddress;
	connInterval: number;
	connLatency: number;
	supervisionTimeout: number;
	masterClockAccuracy: number;
}
declare var BluetoothHCIEventLEConnectionCompleteResults: BluetoothHCIEventLEConnectionCompleteResults;

interface BluetoothHCIEventLEConnectionUpdateCompleteResults {
	connectionHandle: number;
	connInterval: number;
	connLatency: number;
	supervisionTimeout: number;
}
declare var BluetoothHCIEventLEConnectionUpdateCompleteResults: BluetoothHCIEventLEConnectionUpdateCompleteResults;

interface BluetoothHCIEventLEEnhancedConnectionCompleteResults {
	connectionHandle: number;
	role: number;
	peerAddressType: number;
	peerAddress: BluetoothDeviceAddress;
	localResolvablePrivateAddress: BluetoothDeviceAddress;
	peerResolvablePrivateAddress: BluetoothDeviceAddress;
	connInterval: number;
	connLatency: number;
	supervisionTimeout: number;
	masterClockAccuracy: number;
}
declare var BluetoothHCIEventLEEnhancedConnectionCompleteResults: BluetoothHCIEventLEEnhancedConnectionCompleteResults;

interface BluetoothHCIEventLELongTermKeyRequestResults {
	connectionHandle: number;
	randomNumber: number;
	ediv: number;
}
declare var BluetoothHCIEventLELongTermKeyRequestResults: BluetoothHCIEventLELongTermKeyRequestResults;

interface BluetoothHCIEventLEMetaResults {
	length: number;
	data: number;
}
declare var BluetoothHCIEventLEMetaResults: BluetoothHCIEventLEMetaResults;

interface BluetoothHCIEventLEReadRemoteUsedFeaturesCompleteResults {
	connectionHandle: number;
	usedFeatures: BluetoothHCISupportedFeatures;
}
declare var BluetoothHCIEventLEReadRemoteUsedFeaturesCompleteResults: BluetoothHCIEventLEReadRemoteUsedFeaturesCompleteResults;

interface BluetoothHCIEventLinkKeyNotificationResults {
	deviceAddress: BluetoothDeviceAddress;
	linkKey: BluetoothKey;
	keyType: number;
}
declare var BluetoothHCIEventLinkKeyNotificationResults: BluetoothHCIEventLinkKeyNotificationResults;

interface BluetoothHCIEventMasterLinkKeyCompleteResults {
	connectionHandle: number;
	keyFlag: number;
}
declare var BluetoothHCIEventMasterLinkKeyCompleteResults: BluetoothHCIEventMasterLinkKeyCompleteResults;

interface BluetoothHCIEventMaxSlotsChangeResults {
	connectionHandle: number;
	maxSlots: number;
}
declare var BluetoothHCIEventMaxSlotsChangeResults: BluetoothHCIEventMaxSlotsChangeResults;

interface BluetoothHCIEventModeChangeResults {
	connectionHandle: number;
	mode: number;
	modeInterval: number;
}
declare var BluetoothHCIEventModeChangeResults: BluetoothHCIEventModeChangeResults;

interface BluetoothHCIEventPageScanModeChangeResults {
	deviceAddress: BluetoothDeviceAddress;
	pageScanMode: number;
}
declare var BluetoothHCIEventPageScanModeChangeResults: BluetoothHCIEventPageScanModeChangeResults;

interface BluetoothHCIEventPageScanRepetitionModeChangeResults {
	deviceAddress: BluetoothDeviceAddress;
	pageScanRepetitionMode: number;
}
declare var BluetoothHCIEventPageScanRepetitionModeChangeResults: BluetoothHCIEventPageScanRepetitionModeChangeResults;

interface BluetoothHCIEventQoSSetupCompleteResults {
	connectionHandle: number;
	setupParams: BluetoothHCIQualityOfServiceSetupParams;
}
declare var BluetoothHCIEventQoSSetupCompleteResults: BluetoothHCIEventQoSSetupCompleteResults;

interface BluetoothHCIEventQoSViolationResults {
	connectionHandle: number;
}
declare var BluetoothHCIEventQoSViolationResults: BluetoothHCIEventQoSViolationResults;

interface BluetoothHCIEventReadClockOffsetResults {
	connectionHandle: number;
	clockOffset: number;
}
declare var BluetoothHCIEventReadClockOffsetResults: BluetoothHCIEventReadClockOffsetResults;

interface BluetoothHCIEventReadExtendedFeaturesResults {
	connectionHandle: number;
	supportedFeaturesInfo: BluetoothHCIExtendedFeaturesInfo;
}
declare var BluetoothHCIEventReadExtendedFeaturesResults: BluetoothHCIEventReadExtendedFeaturesResults;

interface BluetoothHCIEventReadRemoteExtendedFeaturesResults {
	error: number;
	connectionHandle: number;
	page: number;
	maxPage: number;
	lmpFeatures: BluetoothHCISupportedFeatures;
}
declare var BluetoothHCIEventReadRemoteExtendedFeaturesResults: BluetoothHCIEventReadRemoteExtendedFeaturesResults;

interface BluetoothHCIEventReadRemoteSupportedFeaturesResults {
	error: number;
	connectionHandle: number;
	lmpFeatures: BluetoothHCISupportedFeatures;
}
declare var BluetoothHCIEventReadRemoteSupportedFeaturesResults: BluetoothHCIEventReadRemoteSupportedFeaturesResults;

interface BluetoothHCIEventReadRemoteVersionInfoResults {
	connectionHandle: number;
	lmpVersion: number;
	manufacturerName: number;
	lmpSubversion: number;
}
declare var BluetoothHCIEventReadRemoteVersionInfoResults: BluetoothHCIEventReadRemoteVersionInfoResults;

interface BluetoothHCIEventReadSupportedFeaturesResults {
	connectionHandle: number;
	supportedFeatures: BluetoothHCISupportedFeatures;
}
declare var BluetoothHCIEventReadSupportedFeaturesResults: BluetoothHCIEventReadSupportedFeaturesResults;

interface BluetoothHCIEventRemoteNameRequestResults {
	deviceAddress: BluetoothDeviceAddress;
	deviceName: number;
}
declare var BluetoothHCIEventRemoteNameRequestResults: BluetoothHCIEventRemoteNameRequestResults;

interface BluetoothHCIEventReturnLinkKeysResults {
	numLinkKeys: number;
	linkKeys: { deviceAddress: BluetoothDeviceAddress; linkKey: BluetoothKey; };
}
declare var BluetoothHCIEventReturnLinkKeysResults: BluetoothHCIEventReturnLinkKeysResults;

interface BluetoothHCIEventRoleChangeResults {
	connectionHandle: number;
	deviceAddress: BluetoothDeviceAddress;
	role: number;
}
declare var BluetoothHCIEventRoleChangeResults: BluetoothHCIEventRoleChangeResults;

interface BluetoothHCIEventSimplePairingCompleteResults {
	deviceAddress: BluetoothDeviceAddress;
}
declare var BluetoothHCIEventSimplePairingCompleteResults: BluetoothHCIEventSimplePairingCompleteResults;

interface BluetoothHCIEventSniffSubratingResults {
	connectionHandle: number;
	maxTransmitLatency: number;
	maxReceiveLatency: number;
	minRemoteTimeout: number;
	minLocalTimeout: number;
}
declare var BluetoothHCIEventSniffSubratingResults: BluetoothHCIEventSniffSubratingResults;

interface BluetoothHCIEventSynchronousConnectionChangedResults {
	connectionHandle: number;
	transmissionInterval: number;
	retransmissionWindow: number;
	receivePacketLength: number;
	transmitPacketLength: number;
}
declare var BluetoothHCIEventSynchronousConnectionChangedResults: BluetoothHCIEventSynchronousConnectionChangedResults;

interface BluetoothHCIEventSynchronousConnectionCompleteResults {
	connectionHandle: number;
	deviceAddress: BluetoothDeviceAddress;
	linkType: number;
	transmissionInterval: number;
	retransmissionWindow: number;
	receivePacketLength: number;
	transmitPacketLength: number;
	airMode: number;
}
declare var BluetoothHCIEventSynchronousConnectionCompleteResults: BluetoothHCIEventSynchronousConnectionCompleteResults;

interface BluetoothHCIEventVendorSpecificResults {
	length: number;
	data: number;
}
declare var BluetoothHCIEventVendorSpecificResults: BluetoothHCIEventVendorSpecificResults;

interface BluetoothHCIExtendedFeaturesInfo {
	page: number;
	maxPage: number;
	data: number;
}
declare var BluetoothHCIExtendedFeaturesInfo: BluetoothHCIExtendedFeaturesInfo;

interface BluetoothHCIExtendedInquiryResponse {
	data: number;
}
declare var BluetoothHCIExtendedInquiryResponse: BluetoothHCIExtendedInquiryResponse;

enum BluetoothHCIExtendedInquiryResponseDataTypes {

	kBluetoothHCIExtendedInquiryResponseDataTypeFlags = 1,

	kBluetoothHCIExtendedInquiryResponseDataType16BitServiceClassUUIDsWithMoreAvailable = 2,

	kBluetoothHCIExtendedInquiryResponseDataType16BitServiceClassUUIDsCompleteList = 3,

	kBluetoothHCIExtendedInquiryResponseDataType32BitServiceClassUUIDsWithMoreAvailable = 4,

	kBluetoothHCIExtendedInquiryResponseDataType32BitServiceClassUUIDsCompleteList = 5,

	kBluetoothHCIExtendedInquiryResponseDataType128BitServiceClassUUIDsWithMoreAvailable = 6,

	kBluetoothHCIExtendedInquiryResponseDataType128BitServiceClassUUIDsCompleteList = 7,

	kBluetoothHCIExtendedInquiryResponseDataTypeShortenedLocalName = 8,

	kBluetoothHCIExtendedInquiryResponseDataTypeCompleteLocalName = 9,

	kBluetoothHCIExtendedInquiryResponseDataTypeTransmitPowerLevel = 10,

	kBluetoothHCIExtendedInquiryResponseDataTypeSSPOOBClassOfDevice = 13,

	kBluetoothHCIExtendedInquiryResponseDataTypeSSPOOBSimplePairingHashC = 14,

	kBluetoothHCIExtendedInquiryResponseDataTypeSSPOOBSimplePairingRandomizerR = 15,

	kBluetoothHCIExtendedInquiryResponseDataTypeDeviceID = 16,

	kBluetoothHCIExtendedInquiryResponseDataTypeSecurityManagerTKValue = 16,

	kBluetoothHCIExtendedInquiryResponseDataTypeSecurityManagerOOBFlags = 17,

	kBluetoothHCIExtendedInquiryResponseDataTypeSlaveConnectionIntervalRange = 18,

	kBluetoothHCIExtendedInquiryResponseDataTypeServiceSolicitation16BitUUIDs = 20,

	kBluetoothHCIExtendedInquiryResponseDataTypeServiceSolicitation128BitUUIDs = 21,

	kBluetoothHCIExtendedInquiryResponseDataTypeServiceData = 22,

	kBluetoothHCIExtendedInquiryResponseDataTypePublicTargetAddress = 23,

	kBluetoothHCIExtendedInquiryResponseDataTypeRandomTargetAddress = 24,

	kBluetoothHCIExtendedInquiryResponseDataTypeAppearance = 25,

	kBluetoothHCIExtendedInquiryResponseDataTypeAdvertisingInterval = 26,

	kBluetoothHCIExtendedInquiryResponseDataTypeLEBluetoothDeviceAddress = 27,

	kBluetoothHCIExtendedInquiryResponseDataTypeLERole = 28,

	kBluetoothHCIExtendedInquiryResponseDataTypeSimplePairingHash = 29,

	kBluetoothHCIExtendedInquiryResponseDataTypeSimplePairingRandomizer = 30,

	kBluetoothHCIExtendedInquiryResponseDataTypeServiceSolicitation32BitUUIDs = 31,

	kBluetoothHCIExtendedInquiryResponseDataTypeServiceData32BitUUID = 32,

	kBluetoothHCIExtendedInquiryResponseDataTypeServiceData128BitUUID = 33,

	kBluetoothHCIExtendedInquiryResponseDataTypeSecureConnectionsConfirmationValue = 34,

	kBluetoothHCIExtendedInquiryResponseDataTypeSecureConnectionsRandomValue = 35,

	kBluetoothHCIExtendedInquiryResponseDataTypeURI = 36,

	kBluetoothHCIExtendedInquiryResponseDataTypeIndoorPositioning = 37,

	kBluetoothHCIExtendedInquiryResponseDataTypeTransportDiscoveryData = 38,

	kBluetoothHCIExtendedInquiryResponseDataType3DInformationData = 61,

	kBluetoothHCIExtendedInquiryResponseDataTypeManufacturerSpecificData = 255
}


interface BluetoothHCIExtendedInquiryResult {
	numberOfReponses: number;
	deviceAddress: BluetoothDeviceAddress;
	pageScanRepetitionMode: number;
	reserved: number;
	classOfDevice: number;
	clockOffset: number;
	RSSIValue: number;
	extendedInquiryResponse: BluetoothHCIExtendedInquiryResponse;
}
declare var BluetoothHCIExtendedInquiryResult: BluetoothHCIExtendedInquiryResult;

enum BluetoothHCIFECRequiredValues {

	kBluetoothHCIFECRequired = 0,

	kBluetoothHCIFECNotRequired = 1
}


interface BluetoothHCIFailedContactInfo {
	count: number;
	handle: number;
}
declare var BluetoothHCIFailedContactInfo: BluetoothHCIFailedContactInfo;

enum BluetoothHCIGeneralFlowControlStates {

	kHostControllerToHostFlowControlOff = 0,

	kHCIACLDataPacketsOnHCISCODataPacketsOff = 1,

	kHCIACLDataPacketsOffHCISCODataPacketsOn = 2,

	kHCIACLDataPacketsOnHCISCODataPacketsOn = 3
}


enum BluetoothHCIHoldModeActivityStates {

	kMaintainCurrentPowerState = 0,

	kSuspendPageScan = 1,

	kSuspendInquiryScan = 2,

	kSuspendPeriodicInquiries = 3
}


interface BluetoothHCIInquiryAccessCode {
	data: number;
}
declare var BluetoothHCIInquiryAccessCode: BluetoothHCIInquiryAccessCode;

enum BluetoothHCIInquiryModes {

	kBluetoothHCIInquiryModeResultFormatStandard = 0,

	kBluetoothHCIInquiryModeResultFormatWithRSSI = 1,

	kBluetoothHCIInquiryModeResultFormatWithRSSIOrExtendedInquiryResultFormat = 2
}


interface BluetoothHCIInquiryResult {
	deviceAddress: BluetoothDeviceAddress;
	pageScanRepetitionMode: number;
	pageScanPeriodMode: number;
	pageScanMode: number;
	classOfDevice: number;
	clockOffset: number;
}
declare var BluetoothHCIInquiryResult: BluetoothHCIInquiryResult;

interface BluetoothHCIInquiryResults {
	results: BluetoothHCIInquiryResult;
	count: number;
}
declare var BluetoothHCIInquiryResults: BluetoothHCIInquiryResults;

enum BluetoothHCIInquiryScanTypes {

	kBluetoothHCIInquiryScanTypeStandard = 0,

	kBluetoothHCIInquiryScanTypeInterlaced = 1,

	kBluetoothHCIInquiryScanTypeReservedStart = 2,

	kBluetoothHCIInquiryScanTypeReservedEnd = 255
}


interface BluetoothHCIInquiryWithRSSIResult {
	deviceAddress: BluetoothDeviceAddress;
	pageScanRepetitionMode: number;
	reserved: number;
	classOfDevice: number;
	clockOffset: number;
	RSSIValue: number;
}
declare var BluetoothHCIInquiryWithRSSIResult: BluetoothHCIInquiryWithRSSIResult;

interface BluetoothHCIInquiryWithRSSIResults {
	results: BluetoothHCIInquiryWithRSSIResult;
	count: number;
}
declare var BluetoothHCIInquiryWithRSSIResults: BluetoothHCIInquiryWithRSSIResults;

interface BluetoothHCILEBufferSize {
	ACLDataPacketLength: number;
	totalNumACLDataPackets: number;
}
declare var BluetoothHCILEBufferSize: BluetoothHCILEBufferSize;

interface BluetoothHCILinkPolicySettingsInfo {
	settings: number;
	handle: number;
}
declare var BluetoothHCILinkPolicySettingsInfo: BluetoothHCILinkPolicySettingsInfo;

enum BluetoothHCILinkPolicySettingsValues {

	kDisableAllLMModes = 0,

	kEnableMasterSlaveSwitch = 1,

	kEnableHoldMode = 2,

	kEnableSniffMode = 4,

	kEnableParkMode = 8,

	kReservedForFutureUse = 16
}


interface BluetoothHCILinkQualityInfo {
	handle: number;
	qualityValue: number;
}
declare var BluetoothHCILinkQualityInfo: BluetoothHCILinkQualityInfo;

interface BluetoothHCILinkSupervisionTimeout {
	handle: number;
	timeout: number;
}
declare var BluetoothHCILinkSupervisionTimeout: BluetoothHCILinkSupervisionTimeout;

enum BluetoothHCIPageScanEnableStates {

	kNoScansEnabled = 0,

	kInquiryScanEnabledPageScanDisabled = 1,

	kInquiryScanDisabledPageScanEnabled = 2,

	kInquiryScanEnabledPageScanEnabled = 3
}


enum BluetoothHCIPageScanModes {

	kMandatoryPageScanMode = 0,

	kOptionalPageScanMode1 = 1,

	kOptionalPageScanMode2 = 2,

	kOptionalPageScanMode3 = 3
}


enum BluetoothHCIPageScanPeriodModes {

	kP0Mode = 0,

	kP1Mode = 1,

	kP2Mode = 2
}


enum BluetoothHCIPageScanTypes {

	kBluetoothHCIPageScanTypeStandard = 0,

	kBluetoothHCIPageScanTypeInterlaced = 1,

	kBluetoothHCIPageScanTypeReservedStart = 2,

	kBluetoothHCIPageScanTypeReservedEnd = 255
}


enum BluetoothHCIPowerState {

	kBluetoothHCIPowerStateON = 1,

	kBluetoothHCIPowerStateOFF = 0,

	kBluetoothHCIPowerStateUnintialized = 255
}


interface BluetoothHCIQualityOfServiceSetupParams {
	flags: number;
	serviceType: number;
	tokenRate: number;
	peakBandwidth: number;
	latency: number;
	delayVariation: number;
}
declare var BluetoothHCIQualityOfServiceSetupParams: BluetoothHCIQualityOfServiceSetupParams;

interface BluetoothHCIRSSIInfo {
	handle: number;
	RSSIValue: number;
}
declare var BluetoothHCIRSSIInfo: BluetoothHCIRSSIInfo;

interface BluetoothHCIReadExtendedInquiryResponseResults {
	outFECRequired: number;
	extendedInquiryResponse: BluetoothHCIExtendedInquiryResponse;
}
declare var BluetoothHCIReadExtendedInquiryResponseResults: BluetoothHCIReadExtendedInquiryResponseResults;

interface BluetoothHCIReadLMPHandleResults {
	handle: number;
	lmp_handle: number;
	reserved: number;
}
declare var BluetoothHCIReadLMPHandleResults: BluetoothHCIReadLMPHandleResults;

interface BluetoothHCIReadLocalOOBDataResults {
	hash: BluetoothHCISimplePairingOOBData;
	randomizer: BluetoothHCISimplePairingOOBData;
}
declare var BluetoothHCIReadLocalOOBDataResults: BluetoothHCIReadLocalOOBDataResults;

enum BluetoothHCIReadStoredLinkKeysFlags {

	kReturnLinkKeyForSpecifiedDeviceOnly = 0,

	kReadAllStoredLinkKeys = 1
}


interface BluetoothHCIRequestCallbackInfo {
	userCallback: number;
	userRefCon: number;
	internalRefCon: number;
	asyncIDRefCon: number;
	reserved: number;
}
declare var BluetoothHCIRequestCallbackInfo: BluetoothHCIRequestCallbackInfo;

enum BluetoothHCIRetransmissionEffortTypes {

	kHCIRetransmissionEffortTypeNone = 0,

	kHCIRetransmissionEffortTypeAtLeastOneAndOptimizeForPower = 1,

	kHCIRetransmissionEffortTypeAtLeastOneAndOptimizeLinkQuality = 2,

	kHCIRetransmissionEffortTypeDontCare = 255
}


interface BluetoothHCIRoleInfo {
	role: number;
	handle: number;
}
declare var BluetoothHCIRoleInfo: BluetoothHCIRoleInfo;

enum BluetoothHCIRoles {

	kBluetoothHCIMasterRole = 0,

	kBluetoothHCISlaveRole = 1
}


enum BluetoothHCISCOFlowControlStates {

	kSCOFlowControlDisabled = 0,

	kSCOFlowControlEnabled = 1
}


interface BluetoothHCIScanActivity {
	scanInterval: number;
	scanWindow: number;
}
declare var BluetoothHCIScanActivity: BluetoothHCIScanActivity;

interface BluetoothHCISetupSynchronousConnectionParams {
	transmitBandwidth: number;
	receiveBandwidth: number;
	maxLatency: number;
	voiceSetting: number;
	retransmissionEffort: number;
	packetType: number;
}
declare var BluetoothHCISetupSynchronousConnectionParams: BluetoothHCISetupSynchronousConnectionParams;

enum BluetoothHCISimplePairingModes {

	kBluetoothHCISimplePairingModeNotSet = 0,

	kBluetoothHCISimplePairingModeEnabled = 1
}


interface BluetoothHCISimplePairingOOBData {
	data: number;
}
declare var BluetoothHCISimplePairingOOBData: BluetoothHCISimplePairingOOBData;

interface BluetoothHCIStoredLinkKeysInfo {
	numLinkKeysRead: number;
	maxNumLinkKeysAllowedInDevice: number;
}
declare var BluetoothHCIStoredLinkKeysInfo: BluetoothHCIStoredLinkKeysInfo;

interface BluetoothHCISupportedCommands {
	data: number;
}
declare var BluetoothHCISupportedCommands: BluetoothHCISupportedCommands;

interface BluetoothHCISupportedFeatures {
	data: number;
}
declare var BluetoothHCISupportedFeatures: BluetoothHCISupportedFeatures;

enum BluetoothHCITimeoutValues {

	kDefaultPageTimeout = 10000
}


interface BluetoothHCITransmitPowerLevelInfo {
	handle: number;
	level: number;
}
declare var BluetoothHCITransmitPowerLevelInfo: BluetoothHCITransmitPowerLevelInfo;

enum BluetoothHCITransmitReadPowerLevelTypes {

	kReadCurrentTransmitPowerLevel = 0,

	kReadMaximumTransmitPowerLevel = 1
}


interface BluetoothHCIVersionInfo {
	manufacturerName: number;
	lmpVersion: number;
	lmpSubVersion: number;
	hciVersion: number;
	hciRevision: number;
}
declare var BluetoothHCIVersionInfo: BluetoothHCIVersionInfo;

enum BluetoothHCIVersions {

	kBluetoothHCIVersionCoreSpecification1_0b = 0,

	kBluetoothHCIVersionCoreSpecification1_1 = 1,

	kBluetoothHCIVersionCoreSpecification1_2 = 2,

	kBluetoothHCIVersionCoreSpecification2_0EDR = 3,

	kBluetoothHCIVersionCoreSpecification2_1EDR = 4,

	kBluetoothHCIVersionCoreSpecification3_0HS = 5,

	kBluetoothHCIVersionCoreSpecification4_0 = 6,

	kBluetoothHCIVersionCoreSpecification4_1 = 7,

	kBluetoothHCIVersionCoreSpecification4_2 = 8,

	kBluetoothHCIVersionCoreSpecification5_0 = 9
}


enum BluetoothIOCapabilities {

	kBluetoothCapabilityTypeDisplayOnly = 0,

	kBluetoothCapabilityTypeDisplayYesNo = 1,

	kBluetoothCapabilityTypeKeyboardOnly = 2,

	kBluetoothCapabilityTypeNoInputNoOutput = 3
}


interface BluetoothIOCapabilityResponse {
	deviceAddress: BluetoothDeviceAddress;
	ioCapability: number;
	OOBDataPresence: number;
	authenticationRequirements: number;
}
declare var BluetoothIOCapabilityResponse: BluetoothIOCapabilityResponse;

interface BluetoothIRK {
	data: number;
}
declare var BluetoothIRK: BluetoothIRK;

interface BluetoothKey {
	data: number;
}
declare var BluetoothKey: BluetoothKey;

interface BluetoothKeypressNotification {
	deviceAddress: BluetoothDeviceAddress;
	notificationType: number;
}
declare var BluetoothKeypressNotification: BluetoothKeypressNotification;

enum BluetoothKeypressNotificationTypes {

	kBluetoothKeypressNotificationTypePasskeyEntryStarted = 0,

	kBluetoothKeypressNotificationTypePasskeyDigitEntered = 1,

	kBluetoothKeypressNotificationTypePasskeyDigitErased = 2,

	kBluetoothKeypressNotificationTypePasskeyCleared = 3,

	kBluetoothKeypressNotificationTypePasskeyEntryCompleted = 4
}


enum BluetoothL2CAPCommandCode {

	kBluetoothL2CAPCommandCodeReserved = 0,

	kBluetoothL2CAPCommandCodeCommandReject = 1,

	kBluetoothL2CAPCommandCodeConnectionRequest = 2,

	kBluetoothL2CAPCommandCodeConnectionResponse = 3,

	kBluetoothL2CAPCommandCodeConfigureRequest = 4,

	kBluetoothL2CAPCommandCodeConfigureResponse = 5,

	kBluetoothL2CAPCommandCodeDisconnectionRequest = 6,

	kBluetoothL2CAPCommandCodeDisconnectionResponse = 7,

	kBluetoothL2CAPCommandCodeEchoRequest = 8,

	kBluetoothL2CAPCommandCodeEchoResponse = 9,

	kBluetoothL2CAPCommandCodeInformationRequest = 10,

	kBluetoothL2CAPCommandCodeInformationResponse = 11,

	kBluetoothL2CAPCommandCodeCreateChannelRequest = 12,

	kBluetoothL2CAPCommandCodeCreateChannelResponse = 13,

	kBluetoothL2CAPCommandCodeMoveChannelRequest = 14,

	kBluetoothL2CAPCommandCodeMoveChannelResponse = 15,

	kBluetoothL2CAPCommandCodeMoveChannelConfirmation = 16,

	kBluetoothL2CAPCommandCodeMoveChannelConfirmationResponse = 17,

	kBluetoothL2CAPCommandCodeConnectionParameterUpdateRequest = 18,

	kBluetoothL2CAPCommandCodeConnectionParameterUpdateResponse = 19,

	kBluetoothL2CAPCommandCodeLECreditBasedConnectionRequest = 20,

	kBluetoothL2CAPCommandCodeLECreditBasedConnectionResponse = 21,

	kBluetoothL2CAPCommandCodeLEFlowControlCredit = 22
}


enum BluetoothL2CAPCommandRejectReason {

	kBluetoothL2CAPCommandRejectReasonCommandNotUnderstood = 0,

	kBluetoothL2CAPCommandRejectReasonSignallingMTUExceeded = 1,

	kBluetoothL2CAPCommandRejectReasonInvalidCIDInRequest = 2
}


enum BluetoothL2CAPConfigurationOption {

	kBluetoothL2CAPConfigurationOptionMTU = 1,

	kBluetoothL2CAPConfigurationOptionFlushTimeout = 2,

	kBluetoothL2CAPConfigurationOptionQoS = 3,

	kBluetoothL2CAPConfigurationOptionRetransmissionAndFlowControl = 4,

	kBluetoothL2CAPConfigurationOptionFrameCheckSequence = 5,

	kBluetoothL2CAPConfigurationOptionExtendedFlowSpecification = 6,

	kBluetoothL2CAPConfigurationOptionExtendedWindowSize = 7
}


enum BluetoothL2CAPConfigurationResult {

	kBluetoothL2CAPConfigurationResultSuccess = 0,

	kBluetoothL2CAPConfigurationResultUnacceptableParams = 1,

	kBluetoothL2CAPConfigurationResultRejected = 2,

	kBluetoothL2CAPConfigurationResultUnknownOptions = 3
}


enum BluetoothL2CAPConfigurationRetransmissionAndFlowControlFlags {

	kBluetoothL2CAPConfigurationBasicL2CAPModeFlag = 0,

	kBluetoothL2CAPConfigurationRetransmissionModeFlag = 1,

	kBluetoothL2CAPConfigurationFlowControlModeFlag = 2,

	kBluetoothL2CAPConfigurationEnhancedRetransmissionMode = 3,

	kBluetoothL2CAPConfigurationStreamingMode = 4
}


enum BluetoothL2CAPConnectionResult {

	kBluetoothL2CAPConnectionResultSuccessful = 0,

	kBluetoothL2CAPConnectionResultPending = 1,

	kBluetoothL2CAPConnectionResultRefusedPSMNotSupported = 2,

	kBluetoothL2CAPConnectionResultRefusedSecurityBlock = 3,

	kBluetoothL2CAPConnectionResultRefusedNoResources = 4,

	kBluetoothL2CAPConnectionResultRefusedReserved = 5,

	kBluetoothL2CAPConnectionResultRefusedInvalidSourceCID = 6,

	kBluetoothL2CAPConnectionResultRefusedSourceCIDAlreadyAllocated = 7
}


enum BluetoothL2CAPConnectionStatus {

	kBluetoothL2CAPConnectionStatusNoInfoAvailable = 0,

	kBluetoothL2CAPConnectionStatusAuthenticationPending = 1,

	kBluetoothL2CAPConnectionStatusAuthorizationPending = 2
}


enum BluetoothL2CAPInformationExtendedFeaturesMask {

	kBluetoothL2CAPInformationNoExtendedFeatures = 0,

	kBluetoothL2CAPInformationFlowControlMode = 1,

	kBluetoothL2CAPInformationRetransmissionMode = 2,

	kBluetoothL2CAPInformationBidirectionalQoS = 4,

	kBluetoothL2CAPInformationEnhancedRetransmissionMode = 8,

	kBluetoothL2CAPInformationStreamingMode = 16,

	kBluetoothL2CAPInformationFCSOption = 32,

	kBluetoothL2CAPInformationExtendedFlowSpecification = 64,

	kBluetoothL2CAPInformationFixedChannels = 128,

	kBluetoothL2CAPInformationExtendedWindowSize = 256,

	kBluetoothL2CAPUnicastConnectionlessDataReception = 512
}


enum BluetoothL2CAPInformationResult {

	kBluetoothL2CAPInformationResultSuccess = 0,

	kBluetoothL2CAPInformationResultNotSupported = 1
}


enum BluetoothL2CAPInformationType {

	kBluetoothL2CAPInformationTypeConnectionlessMTU = 1,

	kBluetoothL2CAPInformationTypeExtendedFeatures = 2,

	kBluetoothL2CAPInformationTypeFixedChannelsSupported = 3
}


enum BluetoothL2CAPQoSType {

	kBluetoothL2CAPQoSTypeNoTraffic = 0,

	kBluetoothL2CAPQoSTypeBestEffort = 1,

	kBluetoothL2CAPQoSTypeGuaranteed = 2
}


interface BluetoothL2CAPQualityOfServiceOptions {
	flags: number;
	serviceType: number;
	tokenRate: number;
	tokenBucketSize: number;
	peakBandwidth: number;
	latency: number;
	delayVariation: number;
}
declare var BluetoothL2CAPQualityOfServiceOptions: BluetoothL2CAPQualityOfServiceOptions;

interface BluetoothL2CAPRetransmissionAndFlowControlOptions {
	flags: number;
	txWindowSize: number;
	maxTransmit: number;
	retransmissionTimeout: number;
	monitorTimeout: number;
	maxPDUPayloadSize: number;
}
declare var BluetoothL2CAPRetransmissionAndFlowControlOptions: BluetoothL2CAPRetransmissionAndFlowControlOptions;

enum BluetoothL2CAPSegmentationAndReassembly {

	kBluetoothL2CAPSegmentationAndReassemblyUnsegmentedSDU = 0,

	kBluetoothL2CAPSegmentationAndReassemblyStartOfSDU = 1,

	kBluetoothL2CAPSegmentationAndReassemblyEndOfSDU = 2,

	kBluetoothL2CAPSegmentationAndReassemblyContinuationOfSDU = 3
}


enum BluetoothL2CAPSupervisoryFuctionType {

	kBluetoothL2CAPSupervisoryFuctionTypeReceiverReady = 0,

	kBluetoothL2CAPSupervisoryFuctionTypeReject = 1,

	kBluetoothL2CAPSupervisoryFuctionTypeReceiverNotReady = 2,

	kBluetoothL2CAPSupervisoryFuctionTypeSelectiveReject = 3
}


enum BluetoothLEAddressType {

	Public = 0,

	Random = 1
}


enum BluetoothLEAdvertisingType {

	ConnectableUndirected = 0,

	ConnectableDirected = 1,

	DiscoverableUndirected = 2,

	NonConnectableUndirected = 3,

	ScanResponse = 4
}


enum BluetoothLEConnectionInterval {

	Min = 6,

	Max = 3200
}


enum BluetoothLEFeatureBits {

	kBluetoothLEFeatureLEEncryption = 1,

	kBluetoothLEFeatureConnectionParamsRequestProcedure = 2,

	kBluetoothLEFeatureExtendedRejectIndication = 4,

	kBluetoothLEFeatureSlaveInitiatedFeaturesExchange = 8,

	kBluetoothLEFeatureLEPing = 16,

	kBluetoothLEFeatureLEDataPacketLengthExtension = 32,

	kBluetoothLEFeatureLLPrivacy = 64,

	kBluetoothLEFeatureExtendedScannerFilterPolicies = 128
}


enum BluetoothLEScan {

	Disable = 0,

	Enable = 1
}


enum BluetoothLEScanDuplicateFilter {

	Disable = 0,

	Enable = 1
}


enum BluetoothLEScanFilter {

	None = 0,

	Whitelist = 1
}


enum BluetoothLEScanType {

	Passive = 0,

	Active = 1
}


enum BluetoothLESecurityManagerCommandCode {

	kBluetoothLESecurityManagerCommandCodeReserved = 0,

	kBluetoothLESecurityManagerCommandCodePairingRequest = 1,

	kBluetoothLESecurityManagerCommandCodePairingResponse = 2,

	kBluetoothLESecurityManagerCommandCodePairingConfirm = 3,

	kBluetoothLESecurityManagerCommandCodePairingRandom = 4,

	kBluetoothLESecurityManagerCommandCodePairingFailed = 5,

	kBluetoothLESecurityManagerCommandCodeEncryptionInfo = 6,

	kBluetoothLESecurityManagerCommandCodeMasterIdentification = 7,

	kBluetoothLESecurityManagerCommandCodeIdentityInfo = 8,

	kBluetoothLESecurityManagerCommandCodeIdentityAddressInfo = 9,

	kBluetoothLESecurityManagerCommandCodeSigningInfo = 10,

	kBluetoothLESecurityManagerCommandCodeSecurityRequest = 11,

	kBluetoothLESecurityManagerCommandCodePairingPublicKey = 12,

	kBluetoothLESecurityManagerCommandCodePairingDHKeyCheck = 13,

	kBluetoothLESecurityManagerCommandCodePairingKeypressNotification = 14,

	kBluetoothLESecurityManagerCommandCodeReservedStart = 15,

	kBluetoothLESecurityManagerCommandCodeReservedEnd = 255
}


enum BluetoothLESecurityManagerIOCapability {

	kBluetoothLESecurityManagerIOCapabilityDisplayOnly = 0,

	kBluetoothLESecurityManagerIOCapabilityDisplayYesNo = 1,

	kBluetoothLESecurityManagerIOCapabilityKeyboardOnly = 2,

	kBluetoothLESecurityManagerIOCapabilityNoInputNoOutput = 3,

	kBluetoothLESecurityManagerIOCapabilityKeyboardDisplay = 4,

	kBluetoothLESecurityManagerIOCapabilityReservedStart = 5,

	kBluetoothLESecurityManagerIOCapabilityReservedEnd = 255
}


enum BluetoothLESecurityManagerKeyDistributionFormat {

	kBluetoothLESecurityManagerEncryptionKey = 1,

	kBluetoothLESecurityManagerIDKey = 2,

	kBluetoothLESecurityManagerSignKey = 4,

	kBluetoothLESecurityManagerLinkKey = 8
}


enum BluetoothLESecurityManagerKeypressNotificationType {

	kBluetoothLESecurityManagerNotificationTypePasskeyEntryStarted = 0,

	kBluetoothLESecurityManagerNotificationTypePasskeyDigitEntered = 1,

	kBluetoothLESecurityManagerNotificationTypePasskeyDigitErased = 2,

	kBluetoothLESecurityManagerNotificationTypePasskeyCleared = 3,

	kBluetoothLESecurityManagerNotificationTypePasskeyEntryCompleted = 4,

	kBluetoothLESecurityManagerNotificationTypeReservedStart = 5,

	kBluetoothLESecurityManagerNotificationTypeReservedEnd = 255
}


enum BluetoothLESecurityManagerOOBData {

	kBluetoothLESecurityManagerOOBAuthenticationDataNotPresent = 0,

	kBluetoothLESecurityManagerOOBAuthenticationDataPresent = 1,

	kBluetoothLESecurityManagerOOBDataReservedStart = 2,

	kBluetoothLESecurityManagerOOBDataReservedEnd = 255
}


enum BluetoothLESecurityManagerPairingFailedReasonCode {

	kBluetoothLESecurityManagerReasonCodeReserved = 0,

	kBluetoothLESecurityManagerReasonCodePasskeyEntryFailed = 1,

	kBluetoothLESecurityManagerReasonCodeOOBNotAvailbale = 2,

	kBluetoothLESecurityManagerReasonCodeAuthenticationRequirements = 3,

	kBluetoothLESecurityManagerReasonCodeConfirmValueFailed = 4,

	kBluetoothLESecurityManagerReasonCodePairingNotSupported = 5,

	kBluetoothLESecurityManagerReasonCodeEncryptionKeySize = 6,

	kBluetoothLESecurityManagerReasonCodeCommandNotSupported = 7,

	kBluetoothLESecurityManagerReasonCodeUnspecifiedReason = 8,

	kBluetoothLESecurityManagerReasonCodeRepeatedAttempts = 9,

	kBluetoothLESecurityManagerReasonCodeInvalidParameters = 10,

	kBluetoothLESecurityManagerReasonCodeDHKeyCheckFailed = 11,

	kBluetoothLESecurityManagerReasonCodeNumericComparisonFailed = 12,

	kBluetoothLESecurityManagerReasonCodeBREDRPairingInProgress = 13,

	kBluetoothLESecurityManagerReasonCodeCrossTransportKeyDerivationGenerationNotAllowed = 14,

	kBluetoothLESecurityManagerReasonCodeReservedStart = 15,

	kBluetoothLESecurityManagerReasonCodeReservedEnd = 255
}


enum BluetoothLESecurityManagerUserInputCapability {

	kBluetoothLESecurityManagerUserInputCapabilityNoInput = 1,

	kBluetoothLESecurityManagerUserInputCapabilityYesNo = 2,

	kBluetoothLESecurityManagerUserInputCapabilityKeyboard = 3
}


enum BluetoothLESecurityManagerUserOutputCapability {

	kBluetoothLESecurityManagerUserOutputCapabilityNoOutput = 1,

	kBluetoothLESecurityManagerUserOutputCapabilityNumericOutput = 2
}


enum BluetoothLMPVersions {

	kBluetoothLMPVersionCoreSpecification1_0b = 0,

	kBluetoothLMPVersionCoreSpecification1_1 = 1,

	kBluetoothLMPVersionCoreSpecification1_2 = 2,

	kBluetoothLMPVersionCoreSpecification2_0EDR = 3,

	kBluetoothLMPVersionCoreSpecification2_1EDR = 4,

	kBluetoothLMPVersionCoreSpecification3_0HS = 5,

	kBluetoothLMPVersionCoreSpecification4_0 = 6,

	kBluetoothLMPVersionCoreSpecification4_1 = 7,

	kBluetoothLMPVersionCoreSpecification4_2 = 8,

	kBluetoothLMPVersionCoreSpecification5_0 = 9
}


enum BluetoothLinkTypes {

	kBluetoothSCOConnection = 0,

	kBluetoothACLConnection = 1,

	kBluetoothESCOConnection = 2,

	kBluetoothLinkTypeNone = 255
}


enum BluetoothOOBDataPresenceValues {

	kBluetoothOOBAuthenticationDataNotPresent = 0,

	kBluetoothOOBAuthenticationDataFromRemoteDevicePresent = 1
}


interface BluetoothPINCode {
	data: number;
}
declare var BluetoothPINCode: BluetoothPINCode;

enum BluetoothRFCOMMLineStatus {

	NoError = 0,

	OverrunError = 1,

	ParityError = 2,

	FramingError = 3
}


enum BluetoothRFCOMMParityType {

	kBluetoothRFCOMMParityTypeNoParity = 0,

	kBluetoothRFCOMMParityTypeOddParity = 1,

	kBluetoothRFCOMMParityTypeEvenParity = 2,

	kBluetoothRFCOMMParityTypeMaxParity = 3
}


interface BluetoothReadClockInfo {
	handle: number;
	clock: number;
	accuracy: number;
}
declare var BluetoothReadClockInfo: BluetoothReadClockInfo;

interface BluetoothRemoteHostSupportedFeaturesNotification {
	deviceAddress: BluetoothDeviceAddress;
	hostSupportedFeatures: BluetoothHCISupportedFeatures;
}
declare var BluetoothRemoteHostSupportedFeaturesNotification: BluetoothRemoteHostSupportedFeaturesNotification;

interface BluetoothSetEventMask {
	data: number;
}
declare var BluetoothSetEventMask: BluetoothSetEventMask;

enum BluetoothSimplePairingDebugModes {

	kBluetoothHCISimplePairingDebugModeDisabled = 0,

	kBluetoothHCISimplePairingDebugModeEnabled = 1
}


interface BluetoothSynchronousConnectionInfo {
	transmitBandWidth: number;
	receiveBandWidth: number;
	maxLatency: number;
	voiceSetting: number;
	retransmissionEffort: number;
	packetType: number;
}
declare var BluetoothSynchronousConnectionInfo: BluetoothSynchronousConnectionInfo;

interface BluetoothTransportInfo {
	productID: number;
	vendorID: number;
	type: number;
	productName: number;
	vendorName: number;
	totalDataBytesSent: number;
	totalSCOBytesSent: number;
	totalDataBytesReceived: number;
	totalSCOBytesReceived: number;
}
declare var BluetoothTransportInfo: BluetoothTransportInfo;

enum BluetoothTransportTypes {

	kBluetoothTransportTypeUSB = 1,

	kBluetoothTransportTypePCCard = 2,

	kBluetoothTransportTypePCICard = 3,

	kBluetoothTransportTypeUART = 4,

	kBluetoothTransportTypePCIe = 5
}


interface BluetoothUserConfirmationRequest {
	deviceAddress: BluetoothDeviceAddress;
	numericValue: number;
}
declare var BluetoothUserConfirmationRequest: BluetoothUserConfirmationRequest;

interface BluetoothUserPasskeyNotification {
	deviceAddress: BluetoothDeviceAddress;
	passkey: number;
}
declare var BluetoothUserPasskeyNotification: BluetoothUserPasskeyNotification;

enum FTSFileType {

	kFTSFileTypeFolder = 1,

	kFTSFileTypeFile = 2
}


declare class IOBluetoothDevice extends IOBluetoothObject implements NSCoding, NSSecureCoding {

	static deviceWithAddress(_: BluetoothDeviceAddress): IOBluetoothDevice;

	static deviceWithAddressString(_: string): IOBluetoothDevice;

	static favoriteDevices(): NSArray<any>;

	static pairedDevices(): NSArray<any>;

	static recentDevices(_: number): NSArray<any>;

	static registerForConnectNotificationsSelector(_: any, selector: string): IOBluetoothUserNotification;

	readonly addressString: string;

	readonly classOfDevice: number;

	readonly connectionHandle: number;

	readonly deviceClassMajor: number;

	readonly deviceClassMinor: number;

	readonly isHandsFreeAudioGateway: boolean;

	readonly isHandsFreeDevice: boolean;

	readonly lastNameUpdate: Date;

	readonly name: string;

	readonly nameOrAddress: string;

	readonly serviceClassMajor: number;

	readonly services: NSArray<any>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	RSSI(): number;

	addToFavorites(): number;

	closeConnection(): number;

	encodeWithCoder(_: NSCoder): void;

	getAddress(): BluetoothDeviceAddress;

	getClockOffset(): number;

	getEncryptionMode(): number;

	getLastInquiryUpdate(): Date;

	getLastServicesUpdate(): Date;

	getLinkType(): number;

	getPageScanMode(): number;

	getPageScanPeriodMode(): number;

	getPageScanRepetitionMode(): number;

	getServiceRecordForUUID(_: IOBluetoothSDPUUID): IOBluetoothSDPServiceRecord;

	handsFreeAudioGatewayServiceRecord(): IOBluetoothSDPServiceRecord;

	handsFreeDeviceServiceRecord(): IOBluetoothSDPServiceRecord;

	isConnected(): boolean;

	isFavorite(): boolean;

	isIncoming(): boolean;

	isPaired(): boolean;

	openConnection(): number;

	openConnection(_: any): number;

	openConnectionWithPageTimeoutAuthenticationRequired(_: any, withPageTimeout: number, authenticationRequired: boolean): number;

	openL2CAPChannelAsyncWithPSMDelegate(_: IOBluetoothL2CAPChannel, withPSM: number, delegate: any): number;

	openL2CAPChannelAsyncWithPSMWithConfigurationDelegate(_: IOBluetoothL2CAPChannel, withPSM: number, withConfiguration: NSDictionary<any, any>, delegate: any): number;

	openL2CAPChannelSyncWithPSMDelegate(_: IOBluetoothL2CAPChannel, withPSM: number, delegate: any): number;

	openL2CAPChannelSyncWithPSMWithConfigurationDelegate(_: IOBluetoothL2CAPChannel, withPSM: number, withConfiguration: NSDictionary<any, any>, delegate: any): number;

	openRFCOMMChannelAsyncWithChannelIDDelegate(_: IOBluetoothRFCOMMChannel, withChannelID: number, delegate: any): number;

	openRFCOMMChannelSyncWithChannelIDDelegate(_: IOBluetoothRFCOMMChannel, withChannelID: number, delegate: any): number;

	performSDPQuery(_: any): number;

	performSDPQueryUuids(_: any, uuids: NSArray<any>): number;

	rawRSSI(): number;

	recentAccessDate(): Date;

	registerForDisconnectNotificationSelector(_: any, selector: string): IOBluetoothUserNotification;

	remoteNameRequest(_: any): number;

	remoteNameRequestWithPageTimeout(_: any, withPageTimeout: number): number;

	removeFromFavorites(): number;

	requestAuthentication(): number;

	sendL2CAPEchoRequestLength(_: any, length: number): number;

	setSupervisionTimeout(_: number): number;
}

interface IOBluetoothDeviceAsyncCallbacks {

	connectionCompleteStatus(_: IOBluetoothDevice, status: number): void;

	remoteNameRequestCompleteStatus(_: IOBluetoothDevice, status: number): void;

	sdpQueryCompleteStatus(_: IOBluetoothDevice, status: number): void;
}
declare var IOBluetoothDeviceAsyncCallbacks: {

	prototype: IOBluetoothDeviceAsyncCallbacks;
};

declare class IOBluetoothDeviceInquiry extends NSObject {

	static inquiryWithDelegate(_: any): IOBluetoothDeviceInquiry;

	setDelegate(_: any)

	delegate: any;

	setInquiryLength(_: number)

	inquiryLength: number;

	setSearchType(_: number)

	searchType: number;

	setUpdateNewDeviceNames(_: boolean)

	updateNewDeviceNames: boolean;

	static create(delegate: any);

	clearFoundDevices(): void;

	foundDevices(): NSArray<any>;

	setSearchCriteriaMajorDeviceClassMinorDeviceClass(_: number, majorDeviceClass: number, minorDeviceClass: number): void;

	start(): number;

	stop(): number;
}

interface IOBluetoothDeviceInquiryDelegate {

	deviceInquiryCompleteErrorAborted?(_: IOBluetoothDeviceInquiry, error: number, aborted: boolean): void;

	deviceInquiryDeviceFoundDevice?(_: IOBluetoothDeviceInquiry, device: IOBluetoothDevice): void;

	deviceInquiryDeviceNameUpdatedDeviceDevicesRemaining?(_: IOBluetoothDeviceInquiry, device: IOBluetoothDevice, devicesRemaining: number): void;

	deviceInquiryStarted?(_: IOBluetoothDeviceInquiry): void;

	deviceInquiryUpdatingDeviceNamesStartedDevicesRemaining?(_: IOBluetoothDeviceInquiry, devicesRemaining: number): void;
}
declare var IOBluetoothDeviceInquiryDelegate: {

	prototype: IOBluetoothDeviceInquiryDelegate;
};

declare class IOBluetoothDevicePair extends NSObject {

	static pairWithDevice(_: IOBluetoothDevice): IOBluetoothDevicePair;

	setDelegate(_: any)

	delegate: any;

	device(): IOBluetoothDevice;

	replyPINCodePINCode(_: number, PINCode: BluetoothPINCode): void;

	replyUserConfirmation(_: boolean): void;

	setDevice(_: IOBluetoothDevice): void;

	start(): number;

	stop(): void;
}

interface IOBluetoothDevicePairDelegate extends NSObjectProtocol {

	devicePairingConnecting?(_: any): void;

	devicePairingFinishedError?(_: any, error: number): void;

	devicePairingPINCodeRequest?(_: any): void;

	devicePairingStarted?(_: any): void;

	devicePairingUserConfirmationRequestNumericValue?(_: any, numericValue: number): void;

	devicePairingUserPasskeyNotificationPasskey?(_: any, passkey: number): void;

	deviceSimplePairingCompleteStatus?(_: any, status: number): void;
}
declare var IOBluetoothDevicePairDelegate: {

	prototype: IOBluetoothDevicePairDelegate;
};

declare function IOBluetoothDeviceRegisterForDisconnectNotification(inDevice: any, callback: (p1: any, p2: any, p3: any) => void, inRefCon: any): any;

interface IOBluetoothDeviceSearchAttributes {
	options: number;
	maxResults: number;
	deviceAttributeCount: number;
	attributeList: IOBluetoothDeviceSearchDeviceAttributes;
}
declare var IOBluetoothDeviceSearchAttributes: IOBluetoothDeviceSearchAttributes;

interface IOBluetoothDeviceSearchDeviceAttributes {
	address: BluetoothDeviceAddress;
	name: number;
	serviceClassMajor: number;
	deviceClassMajor: number;
	deviceClassMinor: number;
}
declare var IOBluetoothDeviceSearchDeviceAttributes: IOBluetoothDeviceSearchDeviceAttributes;

enum IOBluetoothDeviceSearchOptionsBits {

	kSearchOptionsNone = 0,

	kSearchOptionsAlwaysStartInquiry = 1,

	kSearchOptionsDiscardCachedResults = 2
}


enum IOBluetoothDeviceSearchTypesBits {

	kIOBluetoothDeviceSearchClassic = 1,

	kIOBluetoothDeviceSearchLE = 2
}


declare function IOBluetoothFindNumberOfRegistryEntriesOfClassName(deviceType: string | any): number;

declare function IOBluetoothGetUniqueFileNameAndPath(inName: string, inPath: string): string;

declare class IOBluetoothHandsFree extends NSObject {

	readonly isSMSEnabled: boolean;

	readonly SMSMode: IOBluetoothSMSMode;

	readonly isConnected: boolean;

	setDelegate(_: IOBluetoothHandsFreeDelegate)

	delegate: IOBluetoothHandsFreeDelegate;

	readonly device: IOBluetoothDevice;

	readonly deviceCallHoldModes: number;

	readonly deviceSupportedFeatures: number;

	readonly deviceSupportedSMSServices: number;

	setInputMuted(_: boolean)

	isInputMuted: boolean;

	setInputVolume(_: number)

	inputVolume: number;

	setOutputMuted(_: boolean)

	isOutputMuted: boolean;

	setOutputVolume(_: number)

	outputVolume: number;

	setSupportedFeatures(_: number)

	supportedFeatures: number;

	static create(device: IOBluetoothDevice, delegate: IOBluetoothHandsFreeDelegate);

	connect(): void;

	connectSCO(): void;

	disconnect(): void;

	disconnectSCO(): void;

	indicator(_: string): number;

	isSCOConnected(): boolean;

	setIndicatorValue(_: string, value: number): void;
}

declare class IOBluetoothHandsFreeAudioGateway extends IOBluetoothHandsFree {

	static create(device: IOBluetoothDevice, delegate: any);

	createIndicatorMinMaxCurrentValue(_: string, min: number, max: number, currentValue: number): void;

	processATCommand(_: string): void;

	sendOKResponse(): void;

	sendResponse(_: string): void;

	sendResponseWithOK(_: string, withOK: boolean): void;
}

interface IOBluetoothHandsFreeAudioGatewayDelegate {

	handsFreeHangup?(_: IOBluetoothHandsFreeAudioGateway, hangup: number): void;

	handsFreeRedial?(_: IOBluetoothHandsFreeAudioGateway, redial: number): void;
}
declare var IOBluetoothHandsFreeAudioGatewayDelegate: {

	prototype: IOBluetoothHandsFreeAudioGatewayDelegate;
};

enum IOBluetoothHandsFreeAudioGatewayFeatures {

	None = 0,

	ThreeWayCalling = 1,

	ECAndOrNRFunction = 2,

	VoiceRecognition = 4,

	InBandRingTone = 8,

	AttachedNumberToVoiceTag = 16,

	RejectCallCapability = 32,

	EnhancedCallStatus = 64,

	EnhancedCallControl = 128,

	ExtendedErrorResultCodes = 256,

	CodecNegotiation = 512
}


declare var IOBluetoothHandsFreeCallDirection: string;

enum IOBluetoothHandsFreeCallHoldModes {

	Mode0 = 1,

	Mode1 = 2,

	Mode1idx = 4,

	Mode2 = 8,

	Mode2idx = 16,

	Mode3 = 32,

	Mode4 = 64
}


declare var IOBluetoothHandsFreeCallIndex: string;

declare var IOBluetoothHandsFreeCallMode: string;

declare var IOBluetoothHandsFreeCallMultiparty: string;

declare var IOBluetoothHandsFreeCallName: string;

declare var IOBluetoothHandsFreeCallNumber: string;

declare var IOBluetoothHandsFreeCallStatus: string;

declare var IOBluetoothHandsFreeCallType: string;

enum IOBluetoothHandsFreeCodecID {

	CVSD = 1,

	mSBC = 2,

	AACELD = 128
}


interface IOBluetoothHandsFreeDelegate extends NSObjectProtocol {

	handsFreeConnected?(_: IOBluetoothHandsFree, connected: number): void;

	handsFreeDisconnected?(_: IOBluetoothHandsFree, disconnected: number): void;

	handsFreeScoConnectionClosed?(_: IOBluetoothHandsFree, scoConnectionClosed: number): void;

	handsFreeScoConnectionOpened?(_: IOBluetoothHandsFree, scoConnectionOpened: number): void;
}
declare var IOBluetoothHandsFreeDelegate: {

	prototype: IOBluetoothHandsFreeDelegate;
};

declare class IOBluetoothHandsFreeDevice extends IOBluetoothHandsFree {

	static create(device: IOBluetoothDevice, delegate: any);

	acceptCall(): void;

	acceptCallOnPhone(): void;

	addHeldCall(): void;

	callTransfer(): void;

	currentCallList(): void;

	dialNumber(_: string): void;

	endCall(): void;

	holdCall(): void;

	memoryDial(_: number): void;

	placeAllOthersOnHold(_: number): void;

	redial(): void;

	releaseActiveCalls(): void;

	releaseCall(_: number): void;

	releaseHeldCalls(): void;

	sendATCommand(_: string): void;

	sendATCommandTimeoutSelectorTarget(_: string, timeout: number, selector: string, target: any): void;

	sendDTMF(_: string): void;

	sendSMSMessage(_: string, message: string): void;

	subscriberNumber(): void;

	transferAudioToComputer(): void;

	transferAudioToPhone(): void;
}

interface IOBluetoothHandsFreeDeviceDelegate extends IOBluetoothHandsFreeDelegate {

	handsFreeBatteryCharge?(_: IOBluetoothHandsFreeDevice, batteryCharge: number): void;

	handsFreeCallHoldState?(_: IOBluetoothHandsFreeDevice, callHoldState: number): void;

	handsFreeCallSetupMode?(_: IOBluetoothHandsFreeDevice, callSetupMode: number): void;

	handsFreeCurrentCall?(_: IOBluetoothHandsFreeDevice, currentCall: NSDictionary<any, any>): void;

	handsFreeIncomingCallFrom?(_: IOBluetoothHandsFreeDevice, incomingCallFrom: string): void;

	handsFreeIncomingSMS?(_: IOBluetoothHandsFreeDevice, incomingSMS: NSDictionary<any, any>): void;

	handsFreeIsCallActive?(_: IOBluetoothHandsFreeDevice, isCallActive: number): void;

	handsFreeIsRoaming?(_: IOBluetoothHandsFreeDevice, isRoaming: number): void;

	handsFreeIsServiceAvailable?(_: IOBluetoothHandsFreeDevice, isServiceAvailable: number): void;

	handsFreeRingAttempt?(_: IOBluetoothHandsFreeDevice, ringAttempt: number): void;

	handsFreeSignalStrength?(_: IOBluetoothHandsFreeDevice, signalStrength: number): void;

	handsFreeSubscriberNumber?(_: IOBluetoothHandsFreeDevice, subscriberNumber: string): void;

	handsFreeUnhandledResultCode?(_: IOBluetoothHandsFreeDevice, unhandledResultCode: string): void;
}
declare var IOBluetoothHandsFreeDeviceDelegate: {

	prototype: IOBluetoothHandsFreeDeviceDelegate;
};

enum IOBluetoothHandsFreeDeviceFeatures {

	None = 0,

	ECAndOrNRFunction = 1,

	ThreeWayCalling = 2,

	CLIPresentation = 4,

	VoiceRecognition = 8,

	RemoteVolumeControl = 16,

	EnhancedCallStatus = 32,

	EnhancedCallControl = 64,

	CodecNegotiation = 128
}


declare var IOBluetoothHandsFreeIndicatorBattChg: string;

declare var IOBluetoothHandsFreeIndicatorCall: string;

declare var IOBluetoothHandsFreeIndicatorCallHeld: string;

declare var IOBluetoothHandsFreeIndicatorCallSetup: string;

declare var IOBluetoothHandsFreeIndicatorRoam: string;

declare var IOBluetoothHandsFreeIndicatorService: string;

declare var IOBluetoothHandsFreeIndicatorSignal: string;

enum IOBluetoothHandsFreePDUMessageStatus {

	StatusRecUnread = 0,

	StatusRecRead = 1,

	StatusStoUnsent = 2,

	StatusStoSent = 3,

	StatusAll = 4
}


enum IOBluetoothHandsFreeSMSSupport {

	Phase2SMSSupport = 1,

	Phase2pSMSSupport = 2,

	ManufactureSpecificSMSSupport = 4
}


declare class IOBluetoothHostController extends NSObject {

	static defaultController(): IOBluetoothHostController;

	setDelegate(_: any)

	delegate: any;

	readonly powerState: BluetoothHCIPowerState;

	addressAsString(): string;

	classOfDevice(): number;

	nameAsString(): string;

	setClassOfDeviceForTimeInterval(_: number, forTimeInterval: number): number;
}

declare var IOBluetoothHostControllerPoweredOffNotification: string;

declare var IOBluetoothHostControllerPoweredOnNotification: string;

declare function IOBluetoothIgnoreHIDDevice(device: any): void;

declare function IOBluetoothIsFileAppleDesignatedPIMData(inFileName: string): boolean;

declare class IOBluetoothL2CAPChannel extends IOBluetoothObject implements NSPortDelegate {

	static registerForChannelOpenNotificationsSelector(_: any, selector: string): IOBluetoothUserNotification;

	static registerForChannelOpenNotificationsSelectorWithPSMDirection(_: any, selector: string, withPSM: number, direction: IOBluetoothUserNotificationChannelDirection): IOBluetoothUserNotification;

	static withObjectID(_: number): IOBluetoothL2CAPChannel;

	readonly PSM: number;

	readonly device: IOBluetoothDevice;

	readonly incomingMTU: number;

	readonly localChannelID: number;

	readonly objectID: number;

	readonly outgoingMTU: number;

	readonly remoteChannelID: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	closeChannel(): number;

	conformsToProtocol(_: any /* Protocol */): boolean;

	delegate(): any;

	handlePortMessage(_: NSPortMessage): void;

	isEqual(_: any): boolean;

	isIncoming(): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	registerForChannelCloseNotificationSelector(_: any, selector: string): IOBluetoothUserNotification;

	requestRemoteMTU(_: number): number;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	setDelegate(_: any): number;

	setDelegateWithConfiguration(_: any, withConfiguration: NSDictionary<any, any>): number;

	writeAsyncLengthRefcon(_: any, length: number, refcon: any): number;

	writeAsyncTrapLengthRefcon(_: any, length: number, refcon: any): number;

	writeSyncLength(_: any, length: number): number;
}

interface IOBluetoothL2CAPChannelDataBlock {
	dataPtr: any;
	dataSize: number;
}
declare var IOBluetoothL2CAPChannelDataBlock: IOBluetoothL2CAPChannelDataBlock;

interface IOBluetoothL2CAPChannelDelegate {

	l2capChannelClosed?(_: IOBluetoothL2CAPChannel): void;

	l2capChannelDataDataLength?(_: IOBluetoothL2CAPChannel, data: any, length: number): void;

	l2capChannelOpenCompleteStatus?(_: IOBluetoothL2CAPChannel, status: number): void;

	l2capChannelQueueSpaceAvailable?(_: IOBluetoothL2CAPChannel): void;

	l2capChannelReconfigured?(_: IOBluetoothL2CAPChannel): void;

	l2capChannelWriteCompleteRefconStatus?(_: IOBluetoothL2CAPChannel, refcon: any, status: number): void;
}
declare var IOBluetoothL2CAPChannelDelegate: {

	prototype: IOBluetoothL2CAPChannelDelegate;
};

enum IOBluetoothL2CAPChannelEventType {

	kIOBluetoothL2CAPChannelEventTypeData = 1,

	kIOBluetoothL2CAPChannelEventTypeOpenComplete = 2,

	kIOBluetoothL2CAPChannelEventTypeClosed = 3,

	kIOBluetoothL2CAPChannelEventTypeReconfigured = 4,

	kIOBluetoothL2CAPChannelEventTypeWriteComplete = 5,

	kIOBluetoothL2CAPChannelEventTypeQueueSpaceAvailable = 6
}


declare var IOBluetoothL2CAPChannelPublishedNotification: string;

declare function IOBluetoothL2CAPChannelRegisterForChannelCloseNotification(channel: any, callback: (p1: any, p2: any, p3: any) => void, inRefCon: any): any;

declare var IOBluetoothL2CAPChannelTerminatedNotification: string;

declare function IOBluetoothNSStringFromDeviceAddress(deviceAddress: BluetoothDeviceAddress): string;

declare function IOBluetoothNSStringFromDeviceAddressColon(deviceAddress: BluetoothDeviceAddress): string;

declare function IOBluetoothNSStringToDeviceAddress(inNameString: string, outDeviceAddress: BluetoothDeviceAddress): number;

declare function IOBluetoothNumberOfAvailableHIDDevices(): number;

declare function IOBluetoothNumberOfKeyboardHIDDevices(): number;

declare function IOBluetoothNumberOfPointingHIDDevices(): number;

declare function IOBluetoothNumberOfTabletHIDDevices(): number;

declare class IOBluetoothOBEXSession extends OBEXSession implements IOBluetoothRFCOMMChannelDelegate {

	static withDeviceChannelID(_: IOBluetoothDevice, channelID: number): IOBluetoothOBEXSession;

	static withIncomingRFCOMMChannelEventSelectorSelectorTargetRefCon(_: IOBluetoothRFCOMMChannel, eventSelector: string, selectorTarget: any, refCon: any): IOBluetoothOBEXSession;

	static withSDPServiceRecord(_: IOBluetoothSDPServiceRecord): IOBluetoothOBEXSession;

	static create(device: IOBluetoothDevice, channelID: number);

	static create(incomingRFCOMMChannel: IOBluetoothRFCOMMChannel, eventSelector: string, selectorTarget: any, refCon: any);

	static create(SDPServiceRecord: IOBluetoothSDPServiceRecord);

	getDevice(): IOBluetoothDevice;

	getRFCOMMChannel(): IOBluetoothRFCOMMChannel;

	isSessionTargetAMac(): boolean;

	restartTransmission(): void;

	rfcommChannelClosed(_: IOBluetoothRFCOMMChannel): void;

	rfcommChannelControlSignalsChanged(_: IOBluetoothRFCOMMChannel): void;

	rfcommChannelDataDataLength(_: IOBluetoothRFCOMMChannel, data: any, length: number): void;

	rfcommChannelFlowControlChanged(_: IOBluetoothRFCOMMChannel): void;

	rfcommChannelOpenCompleteStatus(_: IOBluetoothRFCOMMChannel, status: number): void;

	rfcommChannelQueueSpaceAvailable(_: IOBluetoothRFCOMMChannel): void;

	rfcommChannelWriteCompleteRefconStatus(_: IOBluetoothRFCOMMChannel, refcon: any, status: number): void;

	sendBufferTroughChannel(): number;

	setOBEXSessionOpenConnectionCallbackRefCon(_: (p1: any, p2: number, p3: any) => void, refCon: any): void;

	setOpenTransportConnectionAsyncSelectorTargetRefCon(_: string, target: any, refCon: any): void;
}

declare class IOBluetoothObject extends NSObject implements NSCopying {

	copyWithZone(_?: any): any;
}

declare var IOBluetoothPDUEncoding: string;

declare var IOBluetoothPDUOriginatingAddress: string;

declare var IOBluetoothPDUOriginatingAddressType: string;

declare var IOBluetoothPDUProtocolID: string;

declare var IOBluetoothPDUServicCenterAddress: string;

declare var IOBluetoothPDUServiceCenterAddressType: string;

declare var IOBluetoothPDUTimestamp: string;

declare var IOBluetoothPDUType: string;

declare var IOBluetoothPDUUserData: string;

declare class IOBluetoothRFCOMMChannel extends IOBluetoothObject implements NSPortDelegate {

	static registerForChannelOpenNotificationsSelector(_: any, selector: string): IOBluetoothUserNotification;

	static registerForChannelOpenNotificationsSelectorWithChannelIDDirection(_: any, selector: string, withChannelID: number, direction: IOBluetoothUserNotificationChannelDirection): IOBluetoothUserNotification;

	static withObjectID(_: number): IOBluetoothRFCOMMChannel;

	static withRFCOMMChannelRef(_: any): IOBluetoothRFCOMMChannel;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	closeChannel(): number;

	conformsToProtocol(_: any /* Protocol */): boolean;

	delegate(): any;

	getChannelID(): number;

	getDevice(): IOBluetoothDevice;

	getMTU(): number;

	getObjectID(): number;

	getRFCOMMChannelRef(): any;

	handlePortMessage(_: NSPortMessage): void;

	isEqual(_: any): boolean;

	isIncoming(): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	isOpen(): boolean;

	isTransmissionPaused(): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	registerForChannelCloseNotificationSelector(_: any, selector: string): IOBluetoothUserNotification;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	sendRemoteLineStatus(_: BluetoothRFCOMMLineStatus): number;

	setDelegate(_: any): number;

	setSerialParametersDataBitsParityStopBits(_: number, dataBits: number, parity: BluetoothRFCOMMParityType, stopBits: number): number;

	writeAsyncLengthRefcon(_: any, length: number, refcon: any): number;

	writeSyncLength(_: any, length: number): number;
}

interface IOBluetoothRFCOMMChannelDelegate {

	rfcommChannelClosed?(_: IOBluetoothRFCOMMChannel): void;

	rfcommChannelControlSignalsChanged?(_: IOBluetoothRFCOMMChannel): void;

	rfcommChannelDataDataLength?(_: IOBluetoothRFCOMMChannel, data: any, length: number): void;

	rfcommChannelFlowControlChanged?(_: IOBluetoothRFCOMMChannel): void;

	rfcommChannelOpenCompleteStatus?(_: IOBluetoothRFCOMMChannel, status: number): void;

	rfcommChannelQueueSpaceAvailable?(_: IOBluetoothRFCOMMChannel): void;

	rfcommChannelWriteCompleteRefconStatus?(_: IOBluetoothRFCOMMChannel, refcon: any, status: number): void;
}
declare var IOBluetoothRFCOMMChannelDelegate: {

	prototype: IOBluetoothRFCOMMChannelDelegate;
};

declare function IOBluetoothRFCOMMChannelRegisterForChannelCloseNotification(inChannel: any, callback: (p1: any, p2: any, p3: any) => void, inRefCon: any): any;

declare function IOBluetoothRegisterForDeviceConnectNotifications(callback: (p1: any, p2: any, p3: any) => void, inRefCon: any): any;

declare function IOBluetoothRegisterForFilteredL2CAPChannelOpenNotifications(callback: (p1: any, p2: any, p3: any) => void, inRefCon: any, inPSM: number, inDirection: IOBluetoothUserNotificationChannelDirection): any;

declare function IOBluetoothRegisterForFilteredRFCOMMChannelOpenNotifications(callback: (p1: any, p2: any, p3: any) => void, inRefCon: any, channelID: number, inDirection: IOBluetoothUserNotificationChannelDirection): any;

declare function IOBluetoothRegisterForL2CAPChannelOpenNotifications(callback: (p1: any, p2: any, p3: any) => void, inRefCon: any): any;

declare function IOBluetoothRegisterForRFCOMMChannelOpenNotifications(callback: (p1: any, p2: any, p3: any) => void, inRefCon: any): any;

declare function IOBluetoothRemoveIgnoredHIDDevice(device: any): void;

declare class IOBluetoothSDPDataElement extends NSObject implements NSCoding, NSSecureCoding {

	static withElementValue(_: NSObject): IOBluetoothSDPDataElement;

	static withSDPDataElementRef(_: any): IOBluetoothSDPDataElement;

	static withTypeSizeDescriptorSizeValue(_: number, sizeDescriptor: number, size: number, value: NSObject): IOBluetoothSDPDataElement;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(elementValue: NSObject);

	static create(type: number, sizeDescriptor: number, size: number, value: NSObject);

	containsDataElement(_: IOBluetoothSDPDataElement): boolean;

	containsValue(_: NSObject): boolean;

	encodeWithCoder(_: NSCoder): void;

	getArrayValue(): NSArray<any>;

	getDataValue(): NSData;

	getNumberValue(): number;

	getSDPDataElementRef(): any;

	getSize(): number;

	getSizeDescriptor(): number;

	getStringValue(): string;

	getTypeDescriptor(): number;

	getUUIDValue(): IOBluetoothSDPUUID;

	getValue(): NSObject;
}

declare class IOBluetoothSDPServiceAttribute extends NSObject implements NSCoding, NSSecureCoding {

	static withIDAttributeElement(_: number, attributeElement: IOBluetoothSDPDataElement): IOBluetoothSDPServiceAttribute;

	static withIDAttributeElementValue(_: number, attributeElementValue: NSObject): IOBluetoothSDPServiceAttribute;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(ID: number, attributeElement: IOBluetoothSDPDataElement);

	static create(ID: number, attributeElementValue: NSObject);

	encodeWithCoder(_: NSCoder): void;

	getAttributeID(): number;

	getDataElement(): IOBluetoothSDPDataElement;

	getIDDataElement(): IOBluetoothSDPDataElement;
}

declare class IOBluetoothSDPServiceRecord extends NSObject implements NSCoding, NSSecureCoding {

	static publishedServiceRecordWithDictionary(_: NSDictionary<any, any>): IOBluetoothSDPServiceRecord;

	static withSDPServiceRecordRef(_: any): IOBluetoothSDPServiceRecord;

	static withServiceDictionaryDevice(_: NSDictionary<any, any>, device: IOBluetoothDevice): IOBluetoothSDPServiceRecord;

	readonly attributes: NSDictionary<any, any>;

	readonly device: IOBluetoothDevice;

	readonly sortedAttributes: NSArray<any>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(serviceDictionary: NSDictionary<any, any>, device: IOBluetoothDevice);

	encodeWithCoder(_: NSCoder): void;

	getAttributeDataElement(_: number): IOBluetoothSDPDataElement;

	getL2CAPPSM(_: number): number;

	getRFCOMMChannelID(_: string): number;

	getSDPServiceRecordRef(): any;

	getServiceName(): string;

	getServiceRecordHandle(_: number): number;

	handsFreeSupportedFeatures(): number;

	hasServiceFromArray(_: NSArray<any>): boolean;

	matchesSearchArray(_: NSArray<any>): boolean;

	matchesUUID16(_: number): boolean;

	matchesUUIDArray(_: NSArray<any>): boolean;

	removeServiceRecord(): number;
}

declare class IOBluetoothSDPUUID extends NSData implements NSCoding, NSSecureCoding {

	static data(): IOBluetoothSDPUUID; // inherited from NSData

	static dataWithBytesLength(_?: any, length: number): IOBluetoothSDPUUID; // inherited from NSData

	static dataWithBytesNoCopyLength(_: any, length: number): IOBluetoothSDPUUID; // inherited from NSData

	static dataWithBytesNoCopyLengthFreeWhenDone(_: any, length: number, freeWhenDone: boolean): IOBluetoothSDPUUID; // inherited from NSData

	static dataWithContentsOfFile(_: string): IOBluetoothSDPUUID; // inherited from NSData

	static dataWithContentsOfFileOptionsError(options: string, error: NSDataReadingOptions): IOBluetoothSDPUUID; // inherited from NSData

	static dataWithContentsOfURL(_: NSURL): IOBluetoothSDPUUID; // inherited from NSData

	static dataWithContentsOfURLOptionsError(options: NSURL, error: NSDataReadingOptions): IOBluetoothSDPUUID; // inherited from NSData

	static dataWithData(_: NSData): IOBluetoothSDPUUID; // inherited from NSData

	static uuid16(_: number): IOBluetoothSDPUUID;

	static uuid32(_: number): IOBluetoothSDPUUID;

	static uuidWithBytesLength(_: any, length: number): IOBluetoothSDPUUID;

	static uuidWithData(_: NSData): IOBluetoothSDPUUID;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(UUID16: number);

	static create(UUID32: number);

	classForArchiver(): typeof NSObject;

	classForCoder(): typeof NSObject;

	classForPortCoder(): typeof NSObject;

	encodeWithCoder(_: NSCoder): void;

	getUUIDWithLength(_: number): this;

	isEqualToUUID(_: IOBluetoothSDPUUID): boolean;
}

enum IOBluetoothSMSMode {

	PDU = 0,

	Text = 1
}


declare class IOBluetoothUserNotification extends NSObject {

	unregister(): void;
}

enum IOBluetoothUserNotificationChannelDirection {

	kIOBluetoothUserNotificationChannelDirectionAny = 0,

	kIOBluetoothUserNotificationChannelDirectionIncoming = 1,

	kIOBluetoothUserNotificationChannelDirectionOutgoing = 2
}


declare function IOBluetoothUserNotificationUnregister(notificationRef: any): void;

declare const LE_ADVERTISING_SET_TERMINATED_SUBEVENT: number;

declare const LE_CHANNEL_SELECTION_ALGORITHM_SUBEVENT: number;

declare const LE_EXTENDED_ADVERTISING_REPORT_SUBEVENT: number;

declare const LE_PERIODIC_ADVERTISING_REPORT_SUBEVENT: number;

declare const LE_PERIODIC_ADVERTISING_SYNC_ESTABLISHED_SUBEVENT: number;

declare const LE_PERIODIC_ADVERTISING_SYNC_LOST_SUBEVENT: number;

declare const LE_SCAN_REQUEST_RECEIVED_SUBEVENT: number;

declare const LE_SCAN_TIMEOUT_SUBEVENT: number;

interface OBEXAbortCommandData {
	headerDataPtr: any;
	headerDataLength: number;
}
declare var OBEXAbortCommandData: OBEXAbortCommandData;

interface OBEXAbortCommandResponseData {
	serverResponseOpCode: number;
	headerDataPtr: any;
	headerDataLength: number;
}
declare var OBEXAbortCommandResponseData: OBEXAbortCommandResponseData;

declare function OBEXAddApplicationParameterHeader(inHeaderData: any, inHeaderDataLength: number, dictRef: NSDictionary<any, any>): number;

declare function OBEXAddAuthorizationChallengeHeader(inHeaderData: any, inHeaderDataLength: number, dictRef: NSDictionary<any, any>): number;

declare function OBEXAddAuthorizationResponseHeader(inHeaderData: any, inHeaderDataLength: number, dictRef: NSDictionary<any, any>): number;

declare function OBEXAddBodyHeader(inHeaderData: any, inHeaderDataLength: number, isEndOfBody: boolean, dictRef: NSDictionary<any, any>): number;

declare function OBEXAddByteSequenceHeader(inHeaderData: any, inHeaderDataLength: number, dictRef: NSDictionary<any, any>): number;

declare function OBEXAddConnectionIDHeader(inHeaderData: any, inHeaderDataLength: number, dictRef: NSDictionary<any, any>): number;

declare function OBEXAddCountHeader(count: number, dictRef: NSDictionary<any, any>): number;

declare function OBEXAddDescriptionHeader(description: string, dictRef: NSDictionary<any, any>): number;

declare function OBEXAddHTTPHeader(inHeaderData: any, inHeaderDataLength: number, dictRef: NSDictionary<any, any>): number;

declare function OBEXAddLengthHeader(length: number, dictRef: NSDictionary<any, any>): number;

declare function OBEXAddNameHeader(name: string, dictRef: NSDictionary<any, any>): number;

declare function OBEXAddObjectClassHeader(inHeaderData: any, inHeaderDataLength: number, dictRef: NSDictionary<any, any>): number;

declare function OBEXAddTargetHeader(inHeaderData: any, inHeaderDataLength: number, dictRef: NSDictionary<any, any>): number;

declare function OBEXAddTime4ByteHeader(time4Byte: number, dictRef: NSDictionary<any, any>): number;

declare function OBEXAddTimeISOHeader(inHeaderData: any, inHeaderDataLength: number, dictRef: NSDictionary<any, any>): number;

declare function OBEXAddTypeHeader(type: string, dictRef: NSDictionary<any, any>): number;

declare function OBEXAddUserDefinedHeader(inHeaderData: any, inHeaderDataLength: number, dictRef: NSDictionary<any, any>): number;

declare function OBEXAddWhoHeader(inHeaderData: any, inHeaderDataLength: number, dictRef: NSDictionary<any, any>): number;

interface OBEXConnectCommandData {
	headerDataPtr: any;
	headerDataLength: number;
	maxPacketSize: number;
	version: number;
	flags: number;
}
declare var OBEXConnectCommandData: OBEXConnectCommandData;

interface OBEXConnectCommandResponseData {
	serverResponseOpCode: number;
	headerDataPtr: any;
	headerDataLength: number;
	maxPacketSize: number;
	version: number;
	flags: number;
}
declare var OBEXConnectCommandResponseData: OBEXConnectCommandResponseData;

enum OBEXConnectFlagValues {

	kOBEXConnectFlagNone = 0,

	kOBEXConnectFlagSupportMultipleItLMPConnections = 1,

	kOBEXConnectFlag1Reserved = 2,

	kOBEXConnectFlag2Reserved = 4,

	kOBEXConnectFlag3Reserved = 8,

	kOBEXConnectFlag4Reserved = 16,

	kOBEXConnectFlag5Reserved = 32,

	kOBEXConnectFlag6Reserved = 64,

	kOBEXConnectFlag7Reserved = 128
}


interface OBEXDisconnectCommandData {
	headerDataPtr: any;
	headerDataLength: number;
}
declare var OBEXDisconnectCommandData: OBEXDisconnectCommandData;

interface OBEXDisconnectCommandResponseData {
	serverResponseOpCode: number;
	headerDataPtr: any;
	headerDataLength: number;
}
declare var OBEXDisconnectCommandResponseData: OBEXDisconnectCommandResponseData;

enum OBEXErrorCodes {

	kOBEXErrorRangeMin = -21850,

	kOBEXErrorRangeMax = -21899,

	kOBEXSuccess = 0,

	kOBEXGeneralError = -21850,

	kOBEXNoResourcesError = -21851,

	kOBEXUnsupportedError = -21852,

	kOBEXInternalError = -21853,

	kOBEXBadArgumentError = -21854,

	kOBEXTimeoutError = -21855,

	kOBEXBadRequestError = -21856,

	kOBEXCancelledError = -21857,

	kOBEXForbiddenError = -21858,

	kOBEXUnauthorizedError = -21859,

	kOBEXNotAcceptableError = -21860,

	kOBEXConflictError = -21861,

	kOBEXMethodNotAllowedError = -21862,

	kOBEXNotFoundError = -21863,

	kOBEXNotImplementedError = -21864,

	kOBEXPreconditionFailedError = -21865,

	kOBEXSessionBusyError = -21875,

	kOBEXSessionNotConnectedError = -21876,

	kOBEXSessionBadRequestError = -21877,

	kOBEXSessionBadResponseError = -21878,

	kOBEXSessionNoTransportError = -21879,

	kOBEXSessionTransportDiedError = -21880,

	kOBEXSessionTimeoutError = -21881,

	kOBEXSessionAlreadyConnectedError = -21882
}


interface OBEXErrorData {
	error: number;
	dataPtr: any;
	dataLength: number;
}
declare var OBEXErrorData: OBEXErrorData;

declare class OBEXFileTransferServices extends NSObject {

	static withOBEXSession(_: IOBluetoothOBEXSession): OBEXFileTransferServices;

	setDelegate(_: any)

	delegate: any;

	static create(OBEXSession: IOBluetoothOBEXSession);

	abort(): number;

	changeCurrentFolderBackward(): number;

	changeCurrentFolderForwardToPath(_: string): number;

	changeCurrentFolderToRoot(): number;

	connectToFTPService(): number;

	connectToObjectPushService(): number;

	copyRemoteFileToLocalPath(_: string, toLocalPath: string): number;

	createFolder(_: string): number;

	currentPath(): string;

	disconnect(): number;

	getDefaultVCard(_: string): number;

	isBusy(): boolean;

	isConnected(): boolean;

	removeItem(_: string): number;

	retrieveFolderListing(): number;

	sendDataTypeName(_: NSData, type: string, name: string): number;

	sendFile(_: string): number;
}

interface OBEXGetCommandData {
	headerDataPtr: any;
	headerDataLength: number;
}
declare var OBEXGetCommandData: OBEXGetCommandData;

interface OBEXGetCommandResponseData {
	serverResponseOpCode: number;
	headerDataPtr: any;
	headerDataLength: number;
}
declare var OBEXGetCommandResponseData: OBEXGetCommandResponseData;

declare function OBEXGetHeaders(inData: any, inDataSize: number): NSDictionary<any, any>;

enum OBEXHeaderIdentifiers {

	kOBEXHeaderIDName = 1,

	kOBEXHeaderIDDescription = 5,

	kOBEXHeaderIDReservedRangeStart = 16,

	kOBEXHeaderIDReservedRangeEnd = 47,

	kOBEXHeaderIDUserDefinedRangeStart = 48,

	kOBEXHeaderIDUserDefinedRangeEnd = 63,

	kOBEXHeaderIDType = 66,

	kOBEXHeaderIDTimeISO = 68,

	kOBEXHeaderIDTarget = 70,

	kOBEXHeaderIDHTTP = 71,

	kOBEXHeaderIDBody = 72,

	kOBEXHeaderIDEndOfBody = 73,

	kOBEXHeaderIDWho = 74,

	kOBEXHeaderIDAppParameters = 76,

	kOBEXHeaderIDAuthorizationChallenge = 77,

	kOBEXHeaderIDAuthorizationResponse = 78,

	kOBEXHeaderIDObjectClass = 79,

	kOBEXHeaderIDCount = 192,

	kOBEXHeaderIDLength = 195,

	kOBEXHeaderIDTime4Byte = 196,

	kOBEXHeaderIDConnectionID = 203,

	kOBEXHeaderIDOBEX13WANUUID = 80,

	kOBEXHeaderIDOBEX13ObjectClass = 81,

	kOBEXHeaderIDOBEX13SessionParameters = 82,

	kOBEXHeaderIDOBEX13SessionSequenceNumber = 147,

	kOBEXHeaderIDOBEX13CreatorID = 207
}


declare function OBEXHeadersToBytes(dictionaryOfHeaders: NSDictionary<any, any>): NSData;

enum OBEXNonceFlagValues {

	kOBEXNonceFlagNone = 0,

	kOBEXNonceFlagSendUserIDInResponse = 1,

	kOBEXNonceFlagAccessModeReadOnly = 2,

	kOBEXNonceFlag2Reserved = 4,

	kOBEXNonceFlag3Reserved = 8,

	kOBEXNonceFlag4Reserved = 16,

	kOBEXNonceFlag5Reserved = 32,

	kOBEXNonceFlag6Reserved = 64,

	kOBEXNonceFlag7Reserved = 128
}


enum OBEXOpCodeCommandValues {

	kOBEXOpCodeReserved = 4,

	kOBEXOpCodeConnect = 128,

	kOBEXOpCodeDisconnect = 129,

	kOBEXOpCodePut = 2,

	kOBEXOpCodePutWithHighBitSet = 130,

	kOBEXOpCodeGet = 3,

	kOBEXOpCodeGetWithHighBitSet = 131,

	kOBEXOpCodeReservedWithHighBitSet = 132,

	kOBEXOpCodeSetPath = 133,

	kOBEXOpCodeAbort = 255,

	kOBEXOpCodeReservedRangeStart = 6,

	kOBEXOpCodeReservedRangeEnd = 15,

	kOBEXOpCodeUserDefinedStart = 16,

	kOBEXOpCodeUserDefinedEnd = 31
}


enum OBEXOpCodeResponseValues {

	kOBEXResponseCodeReservedRangeStart = 0,

	kOBEXResponseCodeReservedRangeEnd = 15,

	kOBEXResponseCodeContinue = 16,

	kOBEXResponseCodeContinueWithFinalBit = 144,

	kOBEXResponseCodeSuccess = 32,

	kOBEXResponseCodeSuccessWithFinalBit = 160,

	kOBEXResponseCodeCreated = 33,

	kOBEXResponseCodeCreatedWithFinalBit = 161,

	kOBEXResponseCodeAccepted = 34,

	kOBEXResponseCodeAcceptedWithFinalBit = 162,

	kOBEXResponseCodeNonAuthoritativeInfo = 35,

	kOBEXResponseCodeNonAuthoritativeInfoWithFinalBit = 163,

	kOBEXResponseCodeNoContent = 36,

	kOBEXResponseCodeNoContentWithFinalBit = 164,

	kOBEXResponseCodeResetContent = 37,

	kOBEXResponseCodeResetContentWithFinalBit = 165,

	kOBEXResponseCodePartialContent = 38,

	kOBEXResponseCodePartialContentWithFinalBit = 166,

	kOBEXResponseCodeMultipleChoices = 48,

	kOBEXResponseCodeMultipleChoicesWithFinalBit = 176,

	kOBEXResponseCodeMovedPermanently = 49,

	kOBEXResponseCodeMovedPermanentlyWithFinalBit = 177,

	kOBEXResponseCodeMovedTemporarily = 50,

	kOBEXResponseCodeMovedTemporarilyWithFinalBit = 178,

	kOBEXResponseCodeSeeOther = 51,

	kOBEXResponseCodeSeeOtherWithFinalBit = 179,

	kOBEXResponseCodeNotModified = 52,

	kOBEXResponseCodeNotModifiedWithFinalBit = 180,

	kOBEXResponseCodeUseProxy = 53,

	kOBEXResponseCodeUseProxyWithFinalBit = 181,

	kOBEXResponseCodeBadRequest = 64,

	kOBEXResponseCodeBadRequestWithFinalBit = 192,

	kOBEXResponseCodeUnauthorized = 65,

	kOBEXResponseCodeUnauthorizedWithFinalBit = 193,

	kOBEXResponseCodePaymentRequired = 66,

	kOBEXResponseCodePaymentRequiredWithFinalBit = 194,

	kOBEXResponseCodeForbidden = 67,

	kOBEXResponseCodeForbiddenWithFinalBit = 195,

	kOBEXResponseCodeNotFound = 68,

	kOBEXResponseCodeNotFoundWithFinalBit = 196,

	kOBEXResponseCodeMethodNotAllowed = 69,

	kOBEXResponseCodeMethodNotAllowedWithFinalBit = 197,

	kOBEXResponseCodeNotAcceptable = 70,

	kOBEXResponseCodeNotAcceptableWithFinalBit = 198,

	kOBEXResponseCodeProxyAuthenticationRequired = 71,

	kOBEXResponseCodeProxyAuthenticationRequiredWithFinalBit = 199,

	kOBEXResponseCodeRequestTimeOut = 72,

	kOBEXResponseCodeRequestTimeOutWithFinalBit = 200,

	kOBEXResponseCodeConflict = 73,

	kOBEXResponseCodeConflictWithFinalBit = 201,

	kOBEXResponseCodeGone = 74,

	kOBEXResponseCodeGoneWithFinalBit = 202,

	kOBEXResponseCodeLengthRequired = 75,

	kOBEXResponseCodeLengthRequiredFinalBit = 203,

	kOBEXResponseCodePreconditionFailed = 76,

	kOBEXResponseCodePreconditionFailedWithFinalBit = 204,

	kOBEXResponseCodeRequestedEntityTooLarge = 77,

	kOBEXResponseCodeRequestedEntityTooLargeWithFinalBit = 205,

	kOBEXResponseCodeRequestURLTooLarge = 78,

	kOBEXResponseCodeRequestURLTooLargeWithFinalBit = 206,

	kOBEXResponseCodeUnsupportedMediaType = 79,

	kOBEXResponseCodeUnsupportedMediaTypeWithFinalBit = 207,

	kOBEXResponseCodeInternalServerError = 80,

	kOBEXResponseCodeInternalServerErrorWithFinalBit = 208,

	kOBEXResponseCodeNotImplemented = 81,

	kOBEXResponseCodeNotImplementedWithFinalBit = 209,

	kOBEXResponseCodeBadGateway = 82,

	kOBEXResponseCodeBadGatewayWithFinalBit = 210,

	kOBEXResponseCodeServiceUnavailable = 83,

	kOBEXResponseCodeServiceUnavailableWithFinalBit = 211,

	kOBEXResponseCodeGatewayTimeout = 84,

	kOBEXResponseCodeGatewayTimeoutWithFinalBit = 212,

	kOBEXResponseCodeHTTPVersionNotSupported = 85,

	kOBEXResponseCodeHTTPVersionNotSupportedWithFinalBit = 213,

	kOBEXResponseCodeDatabaseFull = 96,

	kOBEXResponseCodeDatabaseFullWithFinalBit = 224,

	kOBEXResponseCodeDatabaseLocked = 97,

	kOBEXResponseCodeDatabaseLockedWithFinalBit = 225
}


enum OBEXOpCodeSessionValues {

	kOBEXOpCodeCreateSession = 0,

	kOBEXOpCodeCloseSession = 1,

	kOBEXOpCodeSuspendSession = 2,

	kOBEXOpCodeResumeSession = 3,

	kOBEXOpCodeSetTimeout = 4
}


interface OBEXPutCommandData {
	headerDataPtr: any;
	headerDataLength: number;
	bodyDataLeftToSend: number;
}
declare var OBEXPutCommandData: OBEXPutCommandData;

interface OBEXPutCommandResponseData {
	serverResponseOpCode: number;
	headerDataPtr: any;
	headerDataLength: number;
}
declare var OBEXPutCommandResponseData: OBEXPutCommandResponseData;

enum OBEXPutFlagValues {

	kOBEXPutFlagNone = 0,

	kOBEXPutFlagGoToParentDirFirst = 1,

	kOBEXPutFlagDontCreateDirectory = 2,

	kOBEXPutFlag2Reserved = 4,

	kOBEXPutFlag3Reserved = 8,

	kOBEXPutFlag4Reserved = 16,

	kOBEXPutFlag5Reserved = 32,

	kOBEXPutFlag6Reserved = 64,

	kOBEXPutFlag7Reserved = 128
}


enum OBEXRealmValues {

	kOBEXRealmASCII = 0,

	kOBEXRealmISO88591 = 1,

	kOBEXRealmISO88592 = 2,

	kOBEXRealmISO88593 = 3,

	kOBEXRealmISO88594 = 4,

	kOBEXRealmISO88595 = 5,

	kOBEXRealmISO88596 = 6,

	kOBEXRealmISO88597 = 7,

	kOBEXRealmISO88598 = 8,

	kOBEXRealmISO88599 = 9,

	kOBEXRealmUNICODE = 255
}


declare class OBEXSession extends NSObject {

	OBEXAbortOptionalHeadersLengthEventSelectorSelectorTargetRefCon(_: any, optionalHeadersLength: number, eventSelector: string, selectorTarget: any, refCon: any): number;

	OBEXAbortResponseOptionalHeadersOptionalHeadersLengthEventSelectorSelectorTargetRefCon(_: number, optionalHeaders: any, optionalHeadersLength: number, eventSelector: string, selectorTarget: any, refCon: any): number;

	OBEXConnectMaxPacketLengthOptionalHeadersOptionalHeadersLengthEventSelectorSelectorTargetRefCon(_: number, maxPacketLength: number, optionalHeaders: any, optionalHeadersLength: number, eventSelector: string, selectorTarget: any, refCon: any): number;

	OBEXConnectResponseFlagsMaxPacketLengthOptionalHeadersOptionalHeadersLengthEventSelectorSelectorTargetRefCon(_: number, flags: number, maxPacketLength: number, optionalHeaders: any, optionalHeadersLength: number, eventSelector: string, selectorTarget: any, refCon: any): number;

	OBEXDisconnectOptionalHeadersLengthEventSelectorSelectorTargetRefCon(_: any, optionalHeadersLength: number, eventSelector: string, selectorTarget: any, refCon: any): number;

	OBEXDisconnectResponseOptionalHeadersOptionalHeadersLengthEventSelectorSelectorTargetRefCon(_: number, optionalHeaders: any, optionalHeadersLength: number, eventSelector: string, selectorTarget: any, refCon: any): number;

	OBEXGetHeadersHeadersLengthEventSelectorSelectorTargetRefCon(_: boolean, headers: any, headersLength: number, eventSelector: string, selectorTarget: any, refCon: any): number;

	OBEXGetResponseOptionalHeadersOptionalHeadersLengthEventSelectorSelectorTargetRefCon(_: number, optionalHeaders: any, optionalHeadersLength: number, eventSelector: string, selectorTarget: any, refCon: any): number;

	OBEXPutHeadersDataHeadersDataLengthBodyDataBodyDataLengthEventSelectorSelectorTargetRefCon(_: boolean, headersData: any, headersDataLength: number, bodyData: any, bodyDataLength: number, eventSelector: string, selectorTarget: any, refCon: any): number;

	OBEXPutResponseOptionalHeadersOptionalHeadersLengthEventSelectorSelectorTargetRefCon(_: number, optionalHeaders: any, optionalHeadersLength: number, eventSelector: string, selectorTarget: any, refCon: any): number;

	OBEXSetPathConstantsOptionalHeadersOptionalHeadersLengthEventSelectorSelectorTargetRefCon(_: number, constants: number, optionalHeaders: any, optionalHeadersLength: number, eventSelector: string, selectorTarget: any, refCon: any): number;

	OBEXSetPathResponseOptionalHeadersOptionalHeadersLengthEventSelectorSelectorTargetRefCon(_: number, optionalHeaders: any, optionalHeadersLength: number, eventSelector: string, selectorTarget: any, refCon: any): number;

	clientHandleIncomingData(_: OBEXTransportEvent): void;

	closeTransportConnection(): number;

	getAvailableCommandPayloadLength(_: number): number;

	getAvailableCommandResponsePayloadLength(_: number): number;

	getMaxPacketLength(): number;

	hasOpenOBEXConnection(): boolean;

	hasOpenTransportConnection(): boolean;

	openTransportConnectionSelectorTargetRefCon(_: string, selectorTarget: any, refCon: any): number;

	sendDataToTransportDataLength(_: any, dataLength: number): number;

	serverHandleIncomingData(_: OBEXTransportEvent): void;

	setEventRefCon(_: any): void;

	setEventSelectorTargetRefCon(_: string, target: any, refCon: any): void;
}

enum OBEXSessionEventTypes {

	kOBEXSessionEventTypeConnectCommandResponseReceived = 1329808707,

	kOBEXSessionEventTypeDisconnectCommandResponseReceived = 1329808708,

	kOBEXSessionEventTypePutCommandResponseReceived = 1329808720,

	kOBEXSessionEventTypeGetCommandResponseReceived = 1329808711,

	kOBEXSessionEventTypeSetPathCommandResponseReceived = 1329808723,

	kOBEXSessionEventTypeAbortCommandResponseReceived = 1329808705,

	kOBEXSessionEventTypeConnectCommandReceived = 1330857283,

	kOBEXSessionEventTypeDisconnectCommandReceived = 1330857284,

	kOBEXSessionEventTypePutCommandReceived = 1330857296,

	kOBEXSessionEventTypeGetCommandReceived = 1330857287,

	kOBEXSessionEventTypeSetPathCommandReceived = 1330857299,

	kOBEXSessionEventTypeAbortCommandReceived = 1330857281,

	kOBEXSessionEventTypeError = 1330070853
}


enum OBEXSessionParameterTags {

	kOBEXSessionParameterTagDeviceAddress = 0,

	kOBEXSessionParameterTagNonce = 1,

	kOBEXSessionParameterTagSessionID = 2,

	kOBEXSessionParameterTagNextSequenceNumber = 3,

	kOBEXSessionParameterTagTimeout = 4,

	kOBEXSessionParameterTagSessionOpcode = 5
}


interface OBEXSetPathCommandData {
	headerDataPtr: any;
	headerDataLength: number;
	flags: number;
	constants: number;
}
declare var OBEXSetPathCommandData: OBEXSetPathCommandData;

interface OBEXSetPathCommandResponseData {
	serverResponseOpCode: number;
	headerDataPtr: any;
	headerDataLength: number;
	flags: number;
	constants: number;
}
declare var OBEXSetPathCommandResponseData: OBEXSetPathCommandResponseData;

interface OBEXTransportEvent {
	type: number;
	status: number;
	dataPtr: any;
	dataLength: number;
}
declare var OBEXTransportEvent: OBEXTransportEvent;

enum OBEXTransportEventTypes {

	kOBEXTransportEventTypeDataReceived = 1147237441,

	kOBEXTransportEventTypeStatus = 1400136020
}


enum OBEXVersions {

	kOBEXVersion10 = 16
}


enum ProtocolParameters {

	kBluetoothSDPProtocolParameterL2CAPPSM = 1,

	kBluetoothSDPProtocolParameterRFCOMMChannel = 1,

	kBluetoothSDPProtocolParameterTCPPort = 1,

	kBluetoothSDPProtocolParameterUDPPort = 1,

	kBluetoothSDPProtocolParameterBNEPVersion = 1,

	kBluetoothSDPProtocolParameterBNEPSupportedNetworkPacketTypeList = 2
}


enum SDPAttributeDeviceIdentificationRecord {

	kBluetoothSDPAttributeDeviceIdentifierServiceDescription = 1,

	kBluetoothSDPAttributeDeviceIdentifierDocumentationURL = 10,

	kBluetoothSDPAttributeDeviceIdentifierClientExecutableURL = 11,

	kBluetoothSDPAttributeDeviceIdentifierSpecificationID = 512,

	kBluetoothSDPAttributeDeviceIdentifierVendorID = 513,

	kBluetoothSDPAttributeDeviceIdentifierProductID = 514,

	kBluetoothSDPAttributeDeviceIdentifierVersion = 515,

	kBluetoothSDPAttributeDeviceIdentifierPrimaryRecord = 516,

	kBluetoothSDPAttributeDeviceIdentifierVendorIDSource = 517,

	kBluetoothSDPAttributeDeviceIdentifierReservedRangeStart = 518,

	kBluetoothSDPAttributeDeviceIdentifierReservedRangeEnd = 767
}


enum SDPAttributeIdentifierCodes {

	kBluetoothSDPAttributeIdentifierServiceRecordHandle = 0,

	kBluetoothSDPAttributeIdentifierServiceClassIDList = 1,

	kBluetoothSDPAttributeIdentifierServiceRecordState = 2,

	kBluetoothSDPAttributeIdentifierServiceID = 3,

	kBluetoothSDPAttributeIdentifierProtocolDescriptorList = 4,

	kBluetoothSDPAttributeIdentifierBrowseGroupList = 5,

	kBluetoothSDPAttributeIdentifierLanguageBaseAttributeIDList = 6,

	kBluetoothSDPAttributeIdentifierServiceInfoTimeToLive = 7,

	kBluetoothSDPAttributeIdentifierServiceAvailability = 8,

	kBluetoothSDPAttributeIdentifierBluetoothProfileDescriptorList = 9,

	kBluetoothSDPAttributeIdentifierDocumentationURL = 10,

	kBluetoothSDPAttributeIdentifierClientExecutableURL = 11,

	kBluetoothSDPAttributeIdentifierIconURL = 12,

	kBluetoothSDPAttributeIdentifierAdditionalProtocolsDescriptorList = 13,

	kBluetoothSDPAttributeIdentifierVersionNumberList = 512,

	kBluetoothSDPAttributeIdentifierServiceDatabaseState = 513,

	kBluetoothSDPAttributeIdentifierGroupID = 512,

	kBluetoothSDPAttributeIdentifierIPSubnet = 512,

	kBluetoothSDPAttributeIdentifierHIDReleaseNumber = 512,

	kBluetoothSDPAttributeIdentifierHIDParserVersion = 513,

	kBluetoothSDPAttributeIdentifierHIDDeviceSubclass = 514,

	kBluetoothSDPAttributeIdentifierHIDCountryCode = 515,

	kBluetoothSDPAttributeIdentifierHIDVirtualCable = 516,

	kBluetoothSDPAttributeIdentifierHIDReconnectInitiate = 517,

	kBluetoothSDPAttributeIdentifierHIDDescriptorList = 518,

	kBluetoothSDPAttributeIdentifierHIDLangIDBaseList = 519,

	kBluetoothSDPAttributeIdentifierHIDSDPDisable = 520,

	kBluetoothSDPAttributeIdentifierHIDBatteryPower = 521,

	kBluetoothSDPAttributeIdentifierHIDRemoteWake = 522,

	kBluetoothSDPAttributeIdentifierHIDProfileVersion = 523,

	kBluetoothSDPAttributeIdentifierHIDSupervisionTimeout = 524,

	kBluetoothSDPAttributeIdentifierHIDNormallyConnectable = 525,

	kBluetoothSDPAttributeIdentifierHIDBootDevice = 526,

	kBluetoothSDPAttributeIdentifierHIDSSRHostMaxLatency = 527,

	kBluetoothSDPAttributeIdentifierHIDSSRHostMinTimeout = 528,

	kBluetoothSDPAttributeIdentifierServiceVersion = 768,

	kBluetoothSDPAttributeIdentifierExternalNetwork = 769,

	kBluetoothSDPAttributeIdentifierNetwork = 769,

	kBluetoothSDPAttributeIdentifierSupportedDataStoresList = 769,

	kBluetoothSDPAttributeIdentifierFaxClass1Support = 770,

	kBluetoothSDPAttributeIdentifierRemoteAudioVolumeControl = 770,

	kBluetoothSDPAttributeIdentifierFaxClass2_0Support = 771,

	kBluetoothSDPAttributeIdentifierSupporterFormatsList = 771,

	kBluetoothSDPAttributeIdentifierFaxClass2Support = 772,

	kBluetoothSDPAttributeIdentifierAudioFeedbackSupport = 773,

	kBluetoothSDPAttributeIdentifierNetworkAddress = 774,

	kBluetoothSDPAttributeIdentifierWAPGateway = 775,

	kBluetoothSDPAttributeIdentifierHomepageURL = 776,

	kBluetoothSDPAttributeIdentifierWAPStackType = 777,

	kBluetoothSDPAttributeIdentifierSecurityDescription = 778,

	kBluetoothSDPAttributeIdentifierNetAccessType = 779,

	kBluetoothSDPAttributeIdentifierMaxNetAccessRate = 780,

	kBluetoothSDPAttributeIdentifierSupportedCapabilities = 784,

	kBluetoothSDPAttributeIdentifierSupportedFeatures = 785,

	kBluetoothSDPAttributeIdentifierSupportedFunctions = 786,

	kBluetoothSDPAttributeIdentifierTotalImagingDataCapacity = 787,

	kBluetoothSDPAttributeIdentifierServiceName = 0,

	kBluetoothSDPAttributeIdentifierServiceDescription = 1,

	kBluetoothSDPAttributeIdentifierProviderName = 2
}


enum SDPServiceClasses {

	kBluetoothSDPUUID16ServiceClassServiceDiscoveryServer = 4096,

	kBluetoothSDPUUID16ServiceClassBrowseGroupDescriptor = 4097,

	kBluetoothSDPUUID16ServiceClassPublicBrowseGroup = 4098,

	kBluetoothSDPUUID16ServiceClassSerialPort = 4353,

	kBluetoothSDPUUID16ServiceClassLANAccessUsingPPP = 4354,

	kBluetoothSDPUUID16ServiceClassDialupNetworking = 4355,

	kBluetoothSDPUUID16ServiceClassIrMCSync = 4356,

	kBluetoothSDPUUID16ServiceClassOBEXObjectPush = 4357,

	kBluetoothSDPUUID16ServiceClassOBEXFileTransfer = 4358,

	kBluetoothSDPUUID16ServiceClassIrMCSyncCommand = 4359,

	kBluetoothSDPUUID16ServiceClassHeadset = 4360,

	kBluetoothSDPUUID16ServiceClassCordlessTelephony = 4361,

	kBluetoothSDPUUID16ServiceClassAudioSource = 4362,

	kBluetoothSDPUUID16ServiceClassAudioSink = 4363,

	kBluetoothSDPUUID16ServiceClassAVRemoteControlTarget = 4364,

	kBluetoothSDPUUID16ServiceClassAdvancedAudioDistribution = 4365,

	kBluetoothSDPUUID16ServiceClassAVRemoteControl = 4366,

	kBluetoothSDPUUID16ServiceClassAVRemoteControlController = 4367,

	kBluetoothSDPUUID16ServiceClassIntercom = 4368,

	kBluetoothSDPUUID16ServiceClassFax = 4369,

	kBluetoothSDPUUID16ServiceClassHeadsetAudioGateway = 4370,

	kBluetoothSDPUUID16ServiceClassWAP = 4371,

	kBluetoothSDPUUID16ServiceClassWAPClient = 4372,

	kBluetoothSDPUUID16ServiceClassPANU = 4373,

	kBluetoothSDPUUID16ServiceClassNAP = 4374,

	kBluetoothSDPUUID16ServiceClassGN = 4375,

	kBluetoothSDPUUID16ServiceClassDirectPrinting = 4376,

	kBluetoothSDPUUID16ServiceClassReferencePrinting = 4377,

	kBluetoothSDPUUID16ServiceClassImaging = 4378,

	kBluetoothSDPUUID16ServiceClassImagingResponder = 4379,

	kBluetoothSDPUUID16ServiceClassImagingAutomaticArchive = 4380,

	kBluetoothSDPUUID16ServiceClassImagingReferencedObjects = 4381,

	kBluetoothSDPUUID16ServiceClassHandsFree = 4382,

	kBluetoothSDPUUID16ServiceClassHandsFreeAudioGateway = 4383,

	kBluetoothSDPUUID16ServiceClassDirectPrintingReferenceObjectsService = 4384,

	kBluetoothSDPUUID16ServiceClassReflectedUI = 4385,

	kBluetoothSDPUUID16ServiceClassBasicPrinting = 4386,

	kBluetoothSDPUUID16ServiceClassPrintingStatus = 4387,

	kBluetoothSDPUUID16ServiceClassHumanInterfaceDeviceService = 4388,

	kBluetoothSDPUUID16ServiceClassHardcopyCableReplacement = 4389,

	kBluetoothSDPUUID16ServiceClassHCR_Print = 4390,

	kBluetoothSDPUUID16ServiceClassHCR_Scan = 4391,

	kBluetoothSDPUUID16ServiceClassCommonISDNAccess = 4392,

	kBluetoothSDPUUID16ServiceClassVideoConferencingGW = 4393,

	kBluetoothSDPUUID16ServiceClassUDI_MT = 4394,

	kBluetoothSDPUUID16ServiceClassUDI_TA = 4395,

	kBluetoothSDPUUID16ServiceClassAudioVideo = 4396,

	kBluetoothSDPUUID16ServiceClassSIM_Access = 4397,

	kBluetoothSDPUUID16ServiceClassPhonebookAccess_PCE = 4398,

	kBluetoothSDPUUID16ServiceClassPhonebookAccess_PSE = 4399,

	kBluetoothSDPUUID16ServiceClassPhonebookAccess = 4400,

	kBluetoothSDPUUID16ServiceClassHeadset_HS = 4401,

	kBluetoothSDPUUID16ServiceClassMessageAccessServer = 4402,

	kBluetoothSDPUUID16ServiceClassMessageNotificationServer = 4403,

	kBluetoothSDPUUID16ServiceClassMessageAccessProfile = 4404,

	kBluetoothSDPUUID16ServiceClassGlobalNavigationSatelliteSystem = 4405,

	kBluetoothSDPUUID16ServiceClassGlobalNavigationSatelliteSystemServer = 4406,

	kBluetoothSDPUUID16ServiceClassPnPInformation = 4608,

	kBluetoothSDPUUID16ServiceClassGenericNetworking = 4609,

	kBluetoothSDPUUID16ServiceClassGenericFileTransfer = 4610,

	kBluetoothSDPUUID16ServiceClassGenericAudio = 4611,

	kBluetoothSDPUUID16ServiceClassGenericTelephony = 4612,

	kBluetoothSDPUUID16ServiceClassVideoSource = 4867,

	kBluetoothSDPUUID16ServiceClassVideoSink = 4868,

	kBluetoothSDPUUID16ServiceClassVideoDistribution = 4869,

	kBluetoothSDPUUID16ServiceClassHealthDevice = 5120,

	kBluetoothSDPUUID16ServiceClassHealthDeviceSource = 5121,

	kBluetoothSDPUUID16ServiceClassHealthDeviceSink = 5122,

	kBluetoothSDPUUID16ServiceClassGATT = 6145
}


declare const kBluetoothACLLogicalChannelL2CAPContinue: number;

declare const kBluetoothACLLogicalChannelL2CAPStart: number;

declare const kBluetoothACLLogicalChannelLMP: number;

declare const kBluetoothACLLogicalChannelReserved: number;

declare const kBluetoothAirModeALawLog: number;

declare const kBluetoothAirModeCVSD: number;

declare const kBluetoothAirModeTransparentData: number;

declare const kBluetoothAirModeULawLog: number;

declare const kBluetoothAllowRoleSwitch: number;

declare const kBluetoothConnectionHandleNone: number;

declare const kBluetoothDeviceClassMajorAny: number;

declare const kBluetoothDeviceClassMajorAudio: number;

declare const kBluetoothDeviceClassMajorComputer: number;

declare const kBluetoothDeviceClassMajorEnd: number;

declare const kBluetoothDeviceClassMajorHealth: number;

declare const kBluetoothDeviceClassMajorImaging: number;

declare const kBluetoothDeviceClassMajorLANAccessPoint: number;

declare const kBluetoothDeviceClassMajorMiscellaneous: number;

declare const kBluetoothDeviceClassMajorNone: number;

declare const kBluetoothDeviceClassMajorPeripheral: number;

declare const kBluetoothDeviceClassMajorPhone: number;

declare const kBluetoothDeviceClassMajorToy: number;

declare const kBluetoothDeviceClassMajorUnclassified: number;

declare const kBluetoothDeviceClassMajorWearable: number;

declare const kBluetoothDeviceClassMinorAny: number;

declare const kBluetoothDeviceClassMinorAudioCamcorder: number;

declare const kBluetoothDeviceClassMinorAudioCar: number;

declare const kBluetoothDeviceClassMinorAudioGamingToy: number;

declare const kBluetoothDeviceClassMinorAudioHandsFree: number;

declare const kBluetoothDeviceClassMinorAudioHeadphones: number;

declare const kBluetoothDeviceClassMinorAudioHeadset: number;

declare const kBluetoothDeviceClassMinorAudioHiFi: number;

declare const kBluetoothDeviceClassMinorAudioLoudspeaker: number;

declare const kBluetoothDeviceClassMinorAudioMicrophone: number;

declare const kBluetoothDeviceClassMinorAudioPortable: number;

declare const kBluetoothDeviceClassMinorAudioReserved1: number;

declare const kBluetoothDeviceClassMinorAudioReserved2: number;

declare const kBluetoothDeviceClassMinorAudioSetTopBox: number;

declare const kBluetoothDeviceClassMinorAudioUnclassified: number;

declare const kBluetoothDeviceClassMinorAudioVCR: number;

declare const kBluetoothDeviceClassMinorAudioVideoCamera: number;

declare const kBluetoothDeviceClassMinorAudioVideoConferencing: number;

declare const kBluetoothDeviceClassMinorAudioVideoDisplayAndLoudspeaker: number;

declare const kBluetoothDeviceClassMinorAudioVideoMonitor: number;

declare const kBluetoothDeviceClassMinorComputerDesktopWorkstation: number;

declare const kBluetoothDeviceClassMinorComputerHandheld: number;

declare const kBluetoothDeviceClassMinorComputerLaptop: number;

declare const kBluetoothDeviceClassMinorComputerPalmSized: number;

declare const kBluetoothDeviceClassMinorComputerServer: number;

declare const kBluetoothDeviceClassMinorComputerUnclassified: number;

declare const kBluetoothDeviceClassMinorComputerWearable: number;

declare const kBluetoothDeviceClassMinorEnd: number;

declare const kBluetoothDeviceClassMinorHealthBloodPressureMonitor: number;

declare const kBluetoothDeviceClassMinorHealthDataDisplay: number;

declare const kBluetoothDeviceClassMinorHealthGlucoseMeter: number;

declare const kBluetoothDeviceClassMinorHealthHeartRateMonitor: number;

declare const kBluetoothDeviceClassMinorHealthPulseOximeter: number;

declare const kBluetoothDeviceClassMinorHealthScale: number;

declare const kBluetoothDeviceClassMinorHealthThermometer: number;

declare const kBluetoothDeviceClassMinorHealthUndefined: number;

declare const kBluetoothDeviceClassMinorImaging1Camera: number;

declare const kBluetoothDeviceClassMinorImaging1Display: number;

declare const kBluetoothDeviceClassMinorImaging1Printer: number;

declare const kBluetoothDeviceClassMinorImaging1Scanner: number;

declare const kBluetoothDeviceClassMinorImaging2Unclassified: number;

declare const kBluetoothDeviceClassMinorNone: number;

declare const kBluetoothDeviceClassMinorPeripheral1Combo: number;

declare const kBluetoothDeviceClassMinorPeripheral1Keyboard: number;

declare const kBluetoothDeviceClassMinorPeripheral1Pointing: number;

declare const kBluetoothDeviceClassMinorPeripheral2AnyPointing: number;

declare const kBluetoothDeviceClassMinorPeripheral2CardReader: number;

declare const kBluetoothDeviceClassMinorPeripheral2DigitalPen: number;

declare const kBluetoothDeviceClassMinorPeripheral2DigitizerTablet: number;

declare const kBluetoothDeviceClassMinorPeripheral2Gamepad: number;

declare const kBluetoothDeviceClassMinorPeripheral2GesturalInputDevice: number;

declare const kBluetoothDeviceClassMinorPeripheral2HandheldScanner: number;

declare const kBluetoothDeviceClassMinorPeripheral2Joystick: number;

declare const kBluetoothDeviceClassMinorPeripheral2RemoteControl: number;

declare const kBluetoothDeviceClassMinorPeripheral2SensingDevice: number;

declare const kBluetoothDeviceClassMinorPeripheral2Unclassified: number;

declare const kBluetoothDeviceClassMinorPhoneCellular: number;

declare const kBluetoothDeviceClassMinorPhoneCommonISDNAccess: number;

declare const kBluetoothDeviceClassMinorPhoneCordless: number;

declare const kBluetoothDeviceClassMinorPhoneSmartPhone: number;

declare const kBluetoothDeviceClassMinorPhoneUnclassified: number;

declare const kBluetoothDeviceClassMinorPhoneWiredModemOrVoiceGateway: number;

declare const kBluetoothDeviceClassMinorToyController: number;

declare const kBluetoothDeviceClassMinorToyDollActionFigure: number;

declare const kBluetoothDeviceClassMinorToyGame: number;

declare const kBluetoothDeviceClassMinorToyRobot: number;

declare const kBluetoothDeviceClassMinorToyVehicle: number;

declare const kBluetoothDeviceClassMinorWearableGlasses: number;

declare const kBluetoothDeviceClassMinorWearableHelmet: number;

declare const kBluetoothDeviceClassMinorWearableJacket: number;

declare const kBluetoothDeviceClassMinorWearablePager: number;

declare const kBluetoothDeviceClassMinorWearableWristWatch: number;

declare const kBluetoothDeviceNameMaxLength: number;

declare const kBluetoothDontAllowRoleSwitch: number;

declare const kBluetoothEncryptionEnableBREDRAESCCM: number;

declare const kBluetoothEncryptionEnableBREDRE0: number;

declare const kBluetoothEncryptionEnableLEAESCCM: number;

declare const kBluetoothEncryptionEnableOff: number;

declare const kBluetoothEncryptionEnableOn: number;

declare const kBluetoothGAPAppearanceGenericBarcodeScanner: number;

declare const kBluetoothGAPAppearanceGenericBloodPressure: number;

declare const kBluetoothGAPAppearanceGenericClock: number;

declare const kBluetoothGAPAppearanceGenericComputer: number;

declare const kBluetoothGAPAppearanceGenericCycling: number;

declare const kBluetoothGAPAppearanceGenericDisplay: number;

declare const kBluetoothGAPAppearanceGenericEyeGlasses: number;

declare const kBluetoothGAPAppearanceGenericGlucoseMeter: number;

declare const kBluetoothGAPAppearanceGenericHeartrateSensor: number;

declare const kBluetoothGAPAppearanceGenericHumanInterfaceDevice: number;

declare const kBluetoothGAPAppearanceGenericKeyring: number;

declare const kBluetoothGAPAppearanceGenericMediaPlayer: number;

declare const kBluetoothGAPAppearanceGenericPhone: number;

declare const kBluetoothGAPAppearanceGenericRemoteControl: number;

declare const kBluetoothGAPAppearanceGenericRunningWalkingSensor: number;

declare const kBluetoothGAPAppearanceGenericTag: number;

declare const kBluetoothGAPAppearanceGenericThermometer: number;

declare const kBluetoothGAPAppearanceGenericWatch: number;

declare const kBluetoothGAPAppearanceHumanInterfaceDeviceBarcodeScanner: number;

declare const kBluetoothGAPAppearanceHumanInterfaceDeviceCardReader: number;

declare const kBluetoothGAPAppearanceHumanInterfaceDeviceDigitalPen: number;

declare const kBluetoothGAPAppearanceHumanInterfaceDeviceDigitizerTablet: number;

declare const kBluetoothGAPAppearanceHumanInterfaceDeviceGamepad: number;

declare const kBluetoothGAPAppearanceHumanInterfaceDeviceJoystick: number;

declare const kBluetoothGAPAppearanceHumanInterfaceDeviceKeyboard: number;

declare const kBluetoothGAPAppearanceHumanInterfaceDeviceMouse: number;

declare const kBluetoothGAPAppearanceUnknown: number;

declare const kBluetoothGeneralInquiryAccessCodeIndex: number;

declare const kBluetoothGeneralInquiryAccessCodeLAPValue: number;

declare const kBluetoothHCICommandAMPTest: number;

declare const kBluetoothHCICommandAMPTestEnd: number;

declare const kBluetoothHCICommandAcceptConnectionRequest: number;

declare const kBluetoothHCICommandAcceptSniffRequest: number;

declare const kBluetoothHCICommandAcceptSynchronousConnectionRequest: number;

declare const kBluetoothHCICommandAddSCOConnection: number;

declare const kBluetoothHCICommandAuthenticationRequested: number;

declare const kBluetoothHCICommandChangeConnectionLinkKey: number;

declare const kBluetoothHCICommandChangeConnectionPacketType: number;

declare const kBluetoothHCICommandChangeLocalName: number;

declare const kBluetoothHCICommandCreateConnection: number;

declare const kBluetoothHCICommandCreateConnectionCancel: number;

declare const kBluetoothHCICommandCreateNewUnitKey: number;

declare const kBluetoothHCICommandDeleteReservedLTADDR: number;

declare const kBluetoothHCICommandDeleteStoredLinkKey: number;

declare const kBluetoothHCICommandDisconnect: number;

declare const kBluetoothHCICommandEnableAMPReceiverReports: number;

declare const kBluetoothHCICommandEnableDeviceUnderTestMode: number;

declare const kBluetoothHCICommandEnhancedAcceptSynchronousConnectionRequest: number;

declare const kBluetoothHCICommandEnhancedFlush: number;

declare const kBluetoothHCICommandEnhancedSetupSynchronousConnection: number;

declare const kBluetoothHCICommandExitParkMode: number;

declare const kBluetoothHCICommandExitPeriodicInquiryMode: number;

declare const kBluetoothHCICommandExitSniffMode: number;

declare const kBluetoothHCICommandFlowSpecification: number;

declare const kBluetoothHCICommandFlush: number;

declare const kBluetoothHCICommandGetLinkQuality: number;

declare const kBluetoothHCICommandGetMWSTransportLayerConfiguration: number;

declare const kBluetoothHCICommandGroupHostController: number;

declare const kBluetoothHCICommandGroupInformational: number;

declare const kBluetoothHCICommandGroupLinkControl: number;

declare const kBluetoothHCICommandGroupLinkPolicy: number;

declare const kBluetoothHCICommandGroupLogoTesting: number;

declare const kBluetoothHCICommandGroupLowEnergy: number;

declare const kBluetoothHCICommandGroupMax: number;

declare const kBluetoothHCICommandGroupNoOp: number;

declare const kBluetoothHCICommandGroupStatus: number;

declare const kBluetoothHCICommandGroupTesting: number;

declare const kBluetoothHCICommandGroupVendorSpecific: number;

declare const kBluetoothHCICommandHoldMode: number;

declare const kBluetoothHCICommandHostBufferSize: number;

declare const kBluetoothHCICommandHostNumberOfCompletedPackets: number;

declare const kBluetoothHCICommandIOCapabilityRequestNegativeReply: number;

declare const kBluetoothHCICommandIOCapabilityRequestReply: number;

declare const kBluetoothHCICommandInquiry: number;

declare const kBluetoothHCICommandInquiryCancel: number;

declare const kBluetoothHCICommandLEAddDeviceToPeriodicAdvertiserList: number;

declare const kBluetoothHCICommandLEAddDeviceToResolvingList: number;

declare const kBluetoothHCICommandLEAddDeviceToWhiteList: number;

declare const kBluetoothHCICommandLEClearAdvertisingSets: number;

declare const kBluetoothHCICommandLEClearPeriodicAdvertiserList: number;

declare const kBluetoothHCICommandLEClearResolvingList: number;

declare const kBluetoothHCICommandLEClearWhiteList: number;

declare const kBluetoothHCICommandLEConnectionUpdate: number;

declare const kBluetoothHCICommandLECreateConnection: number;

declare const kBluetoothHCICommandLECreateConnectionCancel: number;

declare const kBluetoothHCICommandLEEncrypt: number;

declare const kBluetoothHCICommandLEEnhancedReceiverTest: number;

declare const kBluetoothHCICommandLEEnhancedTransmitterTest: number;

declare const kBluetoothHCICommandLEExtendedCreateConnection: number;

declare const kBluetoothHCICommandLEGenerateDHKey: number;

declare const kBluetoothHCICommandLELongTermKeyRequestNegativeReply: number;

declare const kBluetoothHCICommandLELongTermKeyRequestReply: number;

declare const kBluetoothHCICommandLEPeriodicAdvertisingCreateSync: number;

declare const kBluetoothHCICommandLEPeriodicAdvertisingCreateSyncCancel: number;

declare const kBluetoothHCICommandLEPeriodicAdvertisingTerminateSync: number;

declare const kBluetoothHCICommandLERand: number;

declare const kBluetoothHCICommandLEReadAdvertisingChannelTxPower: number;

declare const kBluetoothHCICommandLEReadBufferSize: number;

declare const kBluetoothHCICommandLEReadChannelMap: number;

declare const kBluetoothHCICommandLEReadLocalP256PublicKey: number;

declare const kBluetoothHCICommandLEReadLocalResolvableAddress: number;

declare const kBluetoothHCICommandLEReadLocalSupportedFeatures: number;

declare const kBluetoothHCICommandLEReadMaximumAdvertisingDataLength: number;

declare const kBluetoothHCICommandLEReadMaximumDataLength: number;

declare const kBluetoothHCICommandLEReadNumberofSupportedAdvertisingSets: number;

declare const kBluetoothHCICommandLEReadPeerResolvableAddress: number;

declare const kBluetoothHCICommandLEReadPeriodicAdvertiserListSize: number;

declare const kBluetoothHCICommandLEReadPhy: number;

declare const kBluetoothHCICommandLEReadRFPathCompensation: number;

declare const kBluetoothHCICommandLEReadRemoteUsedFeatures: number;

declare const kBluetoothHCICommandLEReadResolvingListSize: number;

declare const kBluetoothHCICommandLEReadSuggestedDefaultDataLength: number;

declare const kBluetoothHCICommandLEReadSupportedStates: number;

declare const kBluetoothHCICommandLEReadTransmitPower: number;

declare const kBluetoothHCICommandLEReadWhiteListSize: number;

declare const kBluetoothHCICommandLEReceiverTest: number;

declare const kBluetoothHCICommandLERemoteConnectionParameterRequestNegativeReply: number;

declare const kBluetoothHCICommandLERemoteConnectionParameterRequestReply: number;

declare const kBluetoothHCICommandLERemoveAdvertisingSet: number;

declare const kBluetoothHCICommandLERemoveDeviceFromPeriodicAdvertiserList: number;

declare const kBluetoothHCICommandLERemoveDeviceFromResolvingList: number;

declare const kBluetoothHCICommandLERemoveDeviceFromWhiteList: number;

declare const kBluetoothHCICommandLESetAddressResolutionEnable: number;

declare const kBluetoothHCICommandLESetAdvertiseEnable: number;

declare const kBluetoothHCICommandLESetAdvertisingData: number;

declare const kBluetoothHCICommandLESetAdvertisingParameters: number;

declare const kBluetoothHCICommandLESetAdvertisingSetRandomAddress: number;

declare const kBluetoothHCICommandLESetDataLength: number;

declare const kBluetoothHCICommandLESetDefaultPhy: number;

declare const kBluetoothHCICommandLESetEventMask: number;

declare const kBluetoothHCICommandLESetExtendedAdvertisingData: number;

declare const kBluetoothHCICommandLESetExtendedAdvertisingEnableCommand: number;

declare const kBluetoothHCICommandLESetExtendedAdvertisingParameters: number;

declare const kBluetoothHCICommandLESetExtendedScanEnable: number;

declare const kBluetoothHCICommandLESetExtendedScanParameters: number;

declare const kBluetoothHCICommandLESetExtendedScanResponseData: number;

declare const kBluetoothHCICommandLESetHostChannelClassification: number;

declare const kBluetoothHCICommandLESetPeriodicAdvertisingData: number;

declare const kBluetoothHCICommandLESetPeriodicAdvertisingEnable: number;

declare const kBluetoothHCICommandLESetPeriodicAdvertisingParameters: number;

declare const kBluetoothHCICommandLESetPhy: number;

declare const kBluetoothHCICommandLESetPrivacyMode: number;

declare const kBluetoothHCICommandLESetRandomAddress: number;

declare const kBluetoothHCICommandLESetResolvablePrivateAddressTimeout: number;

declare const kBluetoothHCICommandLESetScanEnable: number;

declare const kBluetoothHCICommandLESetScanParameters: number;

declare const kBluetoothHCICommandLESetScanResponseData: number;

declare const kBluetoothHCICommandLEStartEncryption: number;

declare const kBluetoothHCICommandLETestEnd: number;

declare const kBluetoothHCICommandLETransmitterTest: number;

declare const kBluetoothHCICommandLEWriteRFPathCompensation: number;

declare const kBluetoothHCICommandLEWriteSuggestedDefaultDataLength: number;

declare const kBluetoothHCICommandLinkKeyRequestNegativeReply: number;

declare const kBluetoothHCICommandLinkKeyRequestReply: number;

declare const kBluetoothHCICommandMasterLinkKey: number;

declare const kBluetoothHCICommandMax: number;

declare const kBluetoothHCICommandNoOp: number;

declare const kBluetoothHCICommandPINCodeRequestNegativeReply: number;

declare const kBluetoothHCICommandPINCodeRequestReply: number;

declare const kBluetoothHCICommandPacketHeaderSize: number;

declare const kBluetoothHCICommandPacketMaxDataSize: number;

declare const kBluetoothHCICommandParkMode: number;

declare const kBluetoothHCICommandPeriodicInquiryMode: number;

declare const kBluetoothHCICommandQoSSetup: number;

declare const kBluetoothHCICommandReadAFHChannelAssessmentMode: number;

declare const kBluetoothHCICommandReadAFHMappings: number;

declare const kBluetoothHCICommandReadAuthenticatedPayloadTimeout: number;

declare const kBluetoothHCICommandReadAuthenticationEnable: number;

declare const kBluetoothHCICommandReadAutomaticFlushTimeout: number;

declare const kBluetoothHCICommandReadBestEffortFlushTimeout: number;

declare const kBluetoothHCICommandReadBufferSize: number;

declare const kBluetoothHCICommandReadClassOfDevice: number;

declare const kBluetoothHCICommandReadClock: number;

declare const kBluetoothHCICommandReadClockOffset: number;

declare const kBluetoothHCICommandReadConnectionAcceptTimeout: number;

declare const kBluetoothHCICommandReadCountryCode: number;

declare const kBluetoothHCICommandReadCurrentIACLAP: number;

declare const kBluetoothHCICommandReadDataBlockSize: number;

declare const kBluetoothHCICommandReadDefaultErroneousDataReporting: number;

declare const kBluetoothHCICommandReadDefaultLinkPolicySettings: number;

declare const kBluetoothHCICommandReadDeviceAddress: number;

declare const kBluetoothHCICommandReadEncryptionKeySize: number;

declare const kBluetoothHCICommandReadEncryptionMode: number;

declare const kBluetoothHCICommandReadEnhancedTransmitPowerLevel: number;

declare const kBluetoothHCICommandReadExtendedInquiryLength: number;

declare const kBluetoothHCICommandReadExtendedInquiryResponse: number;

declare const kBluetoothHCICommandReadExtendedPageTimeout: number;

declare const kBluetoothHCICommandReadFailedContactCounter: number;

declare const kBluetoothHCICommandReadFlowControlMode: number;

declare const kBluetoothHCICommandReadHoldModeActivity: number;

declare const kBluetoothHCICommandReadInquiryMode: number;

declare const kBluetoothHCICommandReadInquiryResponseTransmitPower: number;

declare const kBluetoothHCICommandReadInquiryScanActivity: number;

declare const kBluetoothHCICommandReadInquiryScanType: number;

declare const kBluetoothHCICommandReadLEHostSupported: number;

declare const kBluetoothHCICommandReadLMPHandle: number;

declare const kBluetoothHCICommandReadLinkPolicySettings: number;

declare const kBluetoothHCICommandReadLinkSupervisionTimeout: number;

declare const kBluetoothHCICommandReadLocalAMPASSOC: number;

declare const kBluetoothHCICommandReadLocalAMPInfo: number;

declare const kBluetoothHCICommandReadLocalExtendedFeatures: number;

declare const kBluetoothHCICommandReadLocalName: number;

declare const kBluetoothHCICommandReadLocalOOBData: number;

declare const kBluetoothHCICommandReadLocalOOBExtendedData: number;

declare const kBluetoothHCICommandReadLocalSupportedCodecs: number;

declare const kBluetoothHCICommandReadLocalSupportedCommands: number;

declare const kBluetoothHCICommandReadLocalSupportedFeatures: number;

declare const kBluetoothHCICommandReadLocalVersionInformation: number;

declare const kBluetoothHCICommandReadLocationData: number;

declare const kBluetoothHCICommandReadLogicalLinkAcceptTimeout: number;

declare const kBluetoothHCICommandReadLoopbackMode: number;

declare const kBluetoothHCICommandReadNumberOfBroadcastRetransmissions: number;

declare const kBluetoothHCICommandReadNumberOfSupportedIAC: number;

declare const kBluetoothHCICommandReadPINType: number;

declare const kBluetoothHCICommandReadPageScanActivity: number;

declare const kBluetoothHCICommandReadPageScanMode: number;

declare const kBluetoothHCICommandReadPageScanPeriodMode: number;

declare const kBluetoothHCICommandReadPageScanType: number;

declare const kBluetoothHCICommandReadPageTimeout: number;

declare const kBluetoothHCICommandReadRSSI: number;

declare const kBluetoothHCICommandReadRemoteExtendedFeatures: number;

declare const kBluetoothHCICommandReadRemoteSupportedFeatures: number;

declare const kBluetoothHCICommandReadRemoteVersionInformation: number;

declare const kBluetoothHCICommandReadSCOFlowControlEnable: number;

declare const kBluetoothHCICommandReadScanEnable: number;

declare const kBluetoothHCICommandReadSecureConnectionsHostSupport: number;

declare const kBluetoothHCICommandReadSimplePairingMode: number;

declare const kBluetoothHCICommandReadStoredLinkKey: number;

declare const kBluetoothHCICommandReadSynchronizationTrainParameters: number;

declare const kBluetoothHCICommandReadTransmitPowerLevel: number;

declare const kBluetoothHCICommandReadVoiceSetting: number;

declare const kBluetoothHCICommandReceiveSynchronizationTrain: number;

declare const kBluetoothHCICommandRefreshEncryptionKey: number;

declare const kBluetoothHCICommandRejectConnectionRequest: number;

declare const kBluetoothHCICommandRejectSniffRequest: number;

declare const kBluetoothHCICommandRejectSynchronousConnectionRequest: number;

declare const kBluetoothHCICommandRemoteNameRequest: number;

declare const kBluetoothHCICommandRemoteNameRequestCancel: number;

declare const kBluetoothHCICommandRemoteOOBDataRequestNegativeReply: number;

declare const kBluetoothHCICommandRemoteOOBDataRequestReply: number;

declare const kBluetoothHCICommandRemoteOOBExtendedDataRequestReply: number;

declare const kBluetoothHCICommandReset: number;

declare const kBluetoothHCICommandResetFailedContactCounter: number;

declare const kBluetoothHCICommandRoleDiscovery: number;

declare const kBluetoothHCICommandSendKeypressNotification: number;

declare const kBluetoothHCICommandSetAFHClassification: number;

declare const kBluetoothHCICommandSetConnectionEncryption: number;

declare const kBluetoothHCICommandSetConnectionlessSlaveBroadcast: number;

declare const kBluetoothHCICommandSetConnectionlessSlaveBroadcastData: number;

declare const kBluetoothHCICommandSetConnectionlessSlaveBroadcastReceive: number;

declare const kBluetoothHCICommandSetEventFilter: number;

declare const kBluetoothHCICommandSetEventMask: number;

declare const kBluetoothHCICommandSetEventMaskPageTwo: number;

declare const kBluetoothHCICommandSetExternalFrameConfiguration: number;

declare const kBluetoothHCICommandSetHostControllerToHostFlowControl: number;

declare const kBluetoothHCICommandSetMWSChannelParameters: number;

declare const kBluetoothHCICommandSetMWSPATTERNConfiguration: number;

declare const kBluetoothHCICommandSetMWSScanFrequencyTable: number;

declare const kBluetoothHCICommandSetMWSSignaling: number;

declare const kBluetoothHCICommandSetMWSTransportLayer: number;

declare const kBluetoothHCICommandSetReservedLTADDR: number;

declare const kBluetoothHCICommandSetTriggeredClockCapture: number;

declare const kBluetoothHCICommandSetupSynchronousConnection: number;

declare const kBluetoothHCICommandShortRangeMode: number;

declare const kBluetoothHCICommandSniffMode: number;

declare const kBluetoothHCICommandSniffSubrating: number;

declare const kBluetoothHCICommandStartSynchronizationTrain: number;

declare const kBluetoothHCICommandSwitchRole: number;

declare const kBluetoothHCICommandTruncatedPage: number;

declare const kBluetoothHCICommandTruncatedPageCancel: number;

declare const kBluetoothHCICommandUserConfirmationRequestNegativeReply: number;

declare const kBluetoothHCICommandUserConfirmationRequestReply: number;

declare const kBluetoothHCICommandUserPasskeyRequestNegativeReply: number;

declare const kBluetoothHCICommandUserPasskeyRequestReply: number;

declare const kBluetoothHCICommandWriteAFHChannelAssessmentMode: number;

declare const kBluetoothHCICommandWriteAuthenticatedPayloadTimeout: number;

declare const kBluetoothHCICommandWriteAuthenticationEnable: number;

declare const kBluetoothHCICommandWriteAutomaticFlushTimeout: number;

declare const kBluetoothHCICommandWriteBestEffortFlushTimeout: number;

declare const kBluetoothHCICommandWriteClassOfDevice: number;

declare const kBluetoothHCICommandWriteConnectionAcceptTimeout: number;

declare const kBluetoothHCICommandWriteCurrentIACLAP: number;

declare const kBluetoothHCICommandWriteDefaultErroneousDataReporting: number;

declare const kBluetoothHCICommandWriteDefaultLinkPolicySettings: number;

declare const kBluetoothHCICommandWriteEncryptionMode: number;

declare const kBluetoothHCICommandWriteExtendedInquiryLength: number;

declare const kBluetoothHCICommandWriteExtendedInquiryResponse: number;

declare const kBluetoothHCICommandWriteExtendedPageTimeout: number;

declare const kBluetoothHCICommandWriteFlowControlMode: number;

declare const kBluetoothHCICommandWriteHoldModeActivity: number;

declare const kBluetoothHCICommandWriteInquiryMode: number;

declare const kBluetoothHCICommandWriteInquiryResponseTransmitPower: number;

declare const kBluetoothHCICommandWriteInquiryScanActivity: number;

declare const kBluetoothHCICommandWriteInquiryScanType: number;

declare const kBluetoothHCICommandWriteLEHostSupported: number;

declare const kBluetoothHCICommandWriteLinkPolicySettings: number;

declare const kBluetoothHCICommandWriteLinkSupervisionTimeout: number;

declare const kBluetoothHCICommandWriteLocationData: number;

declare const kBluetoothHCICommandWriteLogicalLinkAcceptTimeout: number;

declare const kBluetoothHCICommandWriteLoopbackMode: number;

declare const kBluetoothHCICommandWriteNumberOfBroadcastRetransmissions: number;

declare const kBluetoothHCICommandWritePINType: number;

declare const kBluetoothHCICommandWritePageScanActivity: number;

declare const kBluetoothHCICommandWritePageScanMode: number;

declare const kBluetoothHCICommandWritePageScanPeriodMode: number;

declare const kBluetoothHCICommandWritePageScanType: number;

declare const kBluetoothHCICommandWritePageTimeout: number;

declare const kBluetoothHCICommandWriteRemoteAMPASSOC: number;

declare const kBluetoothHCICommandWriteSCOFlowControlEnable: number;

declare const kBluetoothHCICommandWriteScanEnable: number;

declare const kBluetoothHCICommandWriteSecureConnectionsHostSupport: number;

declare const kBluetoothHCICommandWriteSimplePairingDebugMode: number;

declare const kBluetoothHCICommandWriteSimplePairingMode: number;

declare const kBluetoothHCICommandWriteStoredLinkKey: number;

declare const kBluetoothHCICommandWriteSynchronizationTrainParameters: number;

declare const kBluetoothHCICommandWriteVoiceSetting: number;

declare const kBluetoothHCIDataPacketHeaderSize: number;

declare const kBluetoothHCIDataPacketMaxDataSize: number;

declare const kBluetoothHCIErroneousDataReportingDisabled: number;

declare const kBluetoothHCIErroneousDataReportingEnabled: number;

declare const kBluetoothHCIErroneousDataReportingReservedEnd: number;

declare const kBluetoothHCIErroneousDataReportingReservedStart: number;

declare const kBluetoothHCIErrorACLConnectionAlreadyExists: number;

declare const kBluetoothHCIErrorAuthenticationFailure: number;

declare const kBluetoothHCIErrorChannelClassificationNotSupported: number;

declare const kBluetoothHCIErrorCoarseClockAdjustmentRejected: number;

declare const kBluetoothHCIErrorCommandDisallowed: number;

declare const kBluetoothHCIErrorConnectionFailedToBeEstablished: number;

declare const kBluetoothHCIErrorConnectionRejectedDueToNoSuitableChannelFound: number;

declare const kBluetoothHCIErrorConnectionTerminatedByLocalHost: number;

declare const kBluetoothHCIErrorConnectionTerminatedDueToMICFailure: number;

declare const kBluetoothHCIErrorConnectionTimeout: number;

declare const kBluetoothHCIErrorControllerBusy: number;

declare const kBluetoothHCIErrorDifferentTransactionCollision: number;

declare const kBluetoothHCIErrorDirectedAdvertisingTimeout: number;

declare const kBluetoothHCIErrorEncryptionModeNotAcceptable: number;

declare const kBluetoothHCIErrorExtendedInquiryResponseTooLarge: number;

declare const kBluetoothHCIErrorHardwareFailure: number;

declare const kBluetoothHCIErrorHostBusyPairing: number;

declare const kBluetoothHCIErrorHostRejectedLimitedResources: number;

declare const kBluetoothHCIErrorHostRejectedRemoteDeviceIsPersonal: number;

declare const kBluetoothHCIErrorHostRejectedSecurityReasons: number;

declare const kBluetoothHCIErrorHostRejectedUnacceptableDeviceAddress: number;

declare const kBluetoothHCIErrorHostTimeout: number;

declare const kBluetoothHCIErrorInstantPassed: number;

declare const kBluetoothHCIErrorInsufficientSecurity: number;

declare const kBluetoothHCIErrorInvalidHCICommandParameters: number;

declare const kBluetoothHCIErrorInvalidLMPParameters: number;

declare const kBluetoothHCIErrorKeyMissing: number;

declare const kBluetoothHCIErrorLMPErrorTransactionCollision: number;

declare const kBluetoothHCIErrorLMPPDUNotAllowed: number;

declare const kBluetoothHCIErrorLMPResponseTimeout: number;

declare const kBluetoothHCIErrorMACConnectionFailed: number;

declare const kBluetoothHCIErrorMax: number;

declare const kBluetoothHCIErrorMaxNumberOfConnections: number;

declare const kBluetoothHCIErrorMaxNumberOfSCOConnectionsToADevice: number;

declare const kBluetoothHCIErrorMemoryFull: number;

declare const kBluetoothHCIErrorNoConnection: number;

declare const kBluetoothHCIErrorOtherEndTerminatedConnectionAboutToPowerOff: number;

declare const kBluetoothHCIErrorOtherEndTerminatedConnectionLowResources: number;

declare const kBluetoothHCIErrorOtherEndTerminatedConnectionUserEnded: number;

declare const kBluetoothHCIErrorPageTimeout: number;

declare const kBluetoothHCIErrorPairingNotAllowed: number;

declare const kBluetoothHCIErrorPairingWithUnitKeyNotSupported: number;

declare const kBluetoothHCIErrorParameterOutOfMandatoryRange: number;

declare const kBluetoothHCIErrorPowerIsOFF: number;

declare const kBluetoothHCIErrorQoSNotSupported: number;

declare const kBluetoothHCIErrorQoSRejected: number;

declare const kBluetoothHCIErrorQoSUnacceptableParameter: number;

declare const kBluetoothHCIErrorRepeatedAttempts: number;

declare const kBluetoothHCIErrorReservedSlotViolation: number;

declare const kBluetoothHCIErrorRoleChangeNotAllowed: number;

declare const kBluetoothHCIErrorRoleSwitchFailed: number;

declare const kBluetoothHCIErrorRoleSwitchPending: number;

declare const kBluetoothHCIErrorSCOAirModeRejected: number;

declare const kBluetoothHCIErrorSCOIntervalRejected: number;

declare const kBluetoothHCIErrorSCOOffsetRejected: number;

declare const kBluetoothHCIErrorSecureSimplePairingNotSupportedByHost: number;

declare const kBluetoothHCIErrorSuccess: number;

declare const kBluetoothHCIErrorUnacceptableConnectionInterval: number;

declare const kBluetoothHCIErrorUnitKeyUsed: number;

declare const kBluetoothHCIErrorUnknownHCICommand: number;

declare const kBluetoothHCIErrorUnknownLMPPDU: number;

declare const kBluetoothHCIErrorUnspecifiedError: number;

declare const kBluetoothHCIErrorUnsupportedFeatureOrParameterValue: number;

declare const kBluetoothHCIErrorUnsupportedLMPParameterValue: number;

declare const kBluetoothHCIErrorUnsupportedRemoteFeature: number;

declare const kBluetoothHCIEventAMPReceiverReport: number;

declare const kBluetoothHCIEventAMPStartTest: number;

declare const kBluetoothHCIEventAMPStatusChange: number;

declare const kBluetoothHCIEventAMPTestEnd: number;

declare const kBluetoothHCIEventAuthenticationComplete: number;

declare const kBluetoothHCIEventChangeConnectionLinkKeyComplete: number;

declare const kBluetoothHCIEventChannelSelected: number;

declare const kBluetoothHCIEventCommandComplete: number;

declare const kBluetoothHCIEventCommandStatus: number;

declare const kBluetoothHCIEventConnectionComplete: number;

declare const kBluetoothHCIEventConnectionPacketType: number;

declare const kBluetoothHCIEventConnectionRequest: number;

declare const kBluetoothHCIEventDataBufferOverflow: number;

declare const kBluetoothHCIEventDisconnectionComplete: number;

declare const kBluetoothHCIEventDisconnectionLogicalLinkComplete: number;

declare const kBluetoothHCIEventDisconnectionPhysicalLinkComplete: number;

declare const kBluetoothHCIEventEncryptionChange: number;

declare const kBluetoothHCIEventEncryptionKeyRefreshComplete: number;

declare const kBluetoothHCIEventEnhancedFlushComplete: number;

declare const kBluetoothHCIEventExtendedInquiryResult: number;

declare const kBluetoothHCIEventFlowSpecModifyComplete: number;

declare const kBluetoothHCIEventFlowSpecificationComplete: number;

declare const kBluetoothHCIEventFlushOccurred: number;

declare const kBluetoothHCIEventHardwareError: number;

declare const kBluetoothHCIEventIOCapabilityRequest: number;

declare const kBluetoothHCIEventIOCapabilityResponse: number;

declare const kBluetoothHCIEventInquiryComplete: number;

declare const kBluetoothHCIEventInquiryResult: number;

declare const kBluetoothHCIEventInquiryResultWithRSSI: number;

declare const kBluetoothHCIEventKeypressNotification: number;

declare const kBluetoothHCIEventLEMetaEvent: number;

declare const kBluetoothHCIEventLinkKeyNotification: number;

declare const kBluetoothHCIEventLinkKeyRequest: number;

declare const kBluetoothHCIEventLinkSupervisionTimeoutChanged: number;

declare const kBluetoothHCIEventLogicalLinkComplete: number;

declare const kBluetoothHCIEventLogoTesting: number;

declare const kBluetoothHCIEventLoopbackCommand: number;

declare const kBluetoothHCIEventMaskAll: number;

declare const kBluetoothHCIEventMaskAuthenticationComplete: number;

declare const kBluetoothHCIEventMaskChangeConnectionLinkKeyComplete: number;

declare const kBluetoothHCIEventMaskCommandComplete: number;

declare const kBluetoothHCIEventMaskCommandStatus: number;

declare const kBluetoothHCIEventMaskConnectionComplete: number;

declare const kBluetoothHCIEventMaskConnectionPacketTypeChanged: number;

declare const kBluetoothHCIEventMaskConnectionRequest: number;

declare const kBluetoothHCIEventMaskDataBufferOverflow: number;

declare const kBluetoothHCIEventMaskDefault: number;

declare const kBluetoothHCIEventMaskDisconnectionComplete: number;

declare const kBluetoothHCIEventMaskEncryptionChange: number;

declare const kBluetoothHCIEventMaskFlushOccurred: number;

declare const kBluetoothHCIEventMaskHardwareError: number;

declare const kBluetoothHCIEventMaskInquiryComplete: number;

declare const kBluetoothHCIEventMaskInquiryResult: number;

declare const kBluetoothHCIEventMaskLinkKeyNotification: number;

declare const kBluetoothHCIEventMaskLinkKeyRequest: number;

declare const kBluetoothHCIEventMaskLoopbackCommand: number;

declare const kBluetoothHCIEventMaskMasterLinkKeyComplete: number;

declare const kBluetoothHCIEventMaskMaxSlotsChange: number;

declare const kBluetoothHCIEventMaskModeChange: number;

declare const kBluetoothHCIEventMaskNone: number;

declare const kBluetoothHCIEventMaskNumberOfCompletedPackets: number;

declare const kBluetoothHCIEventMaskPINCodeRequest: number;

declare const kBluetoothHCIEventMaskPageScanModeChange: number;

declare const kBluetoothHCIEventMaskPageScanRepetitionModeChange: number;

declare const kBluetoothHCIEventMaskQoSSetupComplete: number;

declare const kBluetoothHCIEventMaskQoSViolation: number;

declare const kBluetoothHCIEventMaskReadClockOffsetComplete: number;

declare const kBluetoothHCIEventMaskReadRemoteSupportedFeaturesComplete: number;

declare const kBluetoothHCIEventMaskReadRemoteVersionInformationComplete: number;

declare const kBluetoothHCIEventMaskRemoteNameRequestComplete: number;

declare const kBluetoothHCIEventMaskReturnLinkKeys: number;

declare const kBluetoothHCIEventMaskRoleChange: number;

declare const kBluetoothHCIEventMasterLinkKeyComplete: number;

declare const kBluetoothHCIEventMaxSlotsChange: number;

declare const kBluetoothHCIEventModeChange: number;

declare const kBluetoothHCIEventNumberOfCompletedDataBlocks: number;

declare const kBluetoothHCIEventNumberOfCompletedPackets: number;

declare const kBluetoothHCIEventPINCodeRequest: number;

declare const kBluetoothHCIEventPacketHeaderSize: number;

declare const kBluetoothHCIEventPacketMaxDataSize: number;

declare const kBluetoothHCIEventPageScanModeChange: number;

declare const kBluetoothHCIEventPageScanRepetitionModeChange: number;

declare const kBluetoothHCIEventPhysicalLinkComplete: number;

declare const kBluetoothHCIEventPhysicalLinkLossEarlyWarning: number;

declare const kBluetoothHCIEventPhysicalLinkRecovery: number;

declare const kBluetoothHCIEventQoSSetupComplete: number;

declare const kBluetoothHCIEventQoSViolation: number;

declare const kBluetoothHCIEventReadClockOffsetComplete: number;

declare const kBluetoothHCIEventReadRemoteExtendedFeaturesComplete: number;

declare const kBluetoothHCIEventReadRemoteSupportedFeaturesComplete: number;

declare const kBluetoothHCIEventReadRemoteVersionInformationComplete: number;

declare const kBluetoothHCIEventRemoteHostSupportedFeaturesNotification: number;

declare const kBluetoothHCIEventRemoteNameRequestComplete: number;

declare const kBluetoothHCIEventRemoteOOBDataRequest: number;

declare const kBluetoothHCIEventReturnLinkKeys: number;

declare const kBluetoothHCIEventRoleChange: number;

declare const kBluetoothHCIEventShortRangeModeChangeComplete: number;

declare const kBluetoothHCIEventSimplePairingComplete: number;

declare const kBluetoothHCIEventSniffSubrating: number;

declare const kBluetoothHCIEventSynchronousConnectionChanged: number;

declare const kBluetoothHCIEventSynchronousConnectionComplete: number;

declare const kBluetoothHCIEventUserConfirmationRequest: number;

declare const kBluetoothHCIEventUserPasskeyNotification: number;

declare const kBluetoothHCIEventUserPasskeyRequest: number;

declare const kBluetoothHCIEventVendorSpecific: number;

declare const kBluetoothHCILoopbackModeLocal: number;

declare const kBluetoothHCILoopbackModeOff: number;

declare const kBluetoothHCILoopbackModeRemote: number;

declare const kBluetoothHCIMaxCommandPacketSize: number;

declare const kBluetoothHCIMaxDataPacketSize: number;

declare const kBluetoothHCIMaxEventPacketSize: number;

declare const kBluetoothHCIOpCodeNoOp: number;

declare const kBluetoothHCISubEventLEAdvertisingReport: number;

declare const kBluetoothHCISubEventLEAdvertisingSetTerminated: number;

declare const kBluetoothHCISubEventLEChannelSelectionAlgorithm: number;

declare const kBluetoothHCISubEventLEConnectionComplete: number;

declare const kBluetoothHCISubEventLEConnectionUpdateComplete: number;

declare const kBluetoothHCISubEventLEDataLengthChange: number;

declare const kBluetoothHCISubEventLEDirectAdvertisingReport: number;

declare const kBluetoothHCISubEventLEEnhancedConnectionComplete: number;

declare const kBluetoothHCISubEventLEExtendedAdvertising: number;

declare const kBluetoothHCISubEventLEGenerateDHKeyComplete: number;

declare const kBluetoothHCISubEventLELongTermKeyRequest: number;

declare const kBluetoothHCISubEventLEPeriodicAdvertisingReport: number;

declare const kBluetoothHCISubEventLEPeriodicAdvertisingSyncEstablished: number;

declare const kBluetoothHCISubEventLEPeriodicAdvertisingSyncLost: number;

declare const kBluetoothHCISubEventLEPhyUpdateComplete: number;

declare const kBluetoothHCISubEventLEReadLocalP256PublicKeyComplete: number;

declare const kBluetoothHCISubEventLEReadRemoteUsedFeaturesComplete: number;

declare const kBluetoothHCISubEventLERemoteConnectionParameterRequest: number;

declare const kBluetoothHCISubEventLEScanRequestReceived: number;

declare const kBluetoothHCISubEventLEScanTimeout: number;

declare const kBluetoothHCITransportUSBClassCode: number;

declare const kBluetoothHCITransportUSBProtocolCode: number;

declare const kBluetoothHCITransportUSBSubClassCode: number;

declare const kBluetoothKeyFlagSemiPermanent: number;

declare const kBluetoothKeyFlagTemporary: number;

declare const kBluetoothKeyTypeAuthenticatedCombination: number;

declare const kBluetoothKeyTypeAuthenticatedCombinationP256: number;

declare const kBluetoothKeyTypeChangedCombination: number;

declare const kBluetoothKeyTypeCombination: number;

declare const kBluetoothKeyTypeDebugCombination: number;

declare const kBluetoothKeyTypeLocalUnit: number;

declare const kBluetoothKeyTypeRemoteUnit: number;

declare const kBluetoothKeyTypeUnauthenticatedCombination: number;

declare const kBluetoothKeyTypeUnauthenticatedCombinationP256: number;

declare const kBluetoothL2CAPChannelAMPManagerProtocol: number;

declare const kBluetoothL2CAPChannelAMPTestManager: number;

declare const kBluetoothL2CAPChannelAttributeProtocol: number;

declare const kBluetoothL2CAPChannelBREDRSecurityManager: number;

declare const kBluetoothL2CAPChannelConnectionLessData: number;

declare const kBluetoothL2CAPChannelDynamicEnd: number;

declare const kBluetoothL2CAPChannelDynamicStart: number;

declare const kBluetoothL2CAPChannelEnd: number;

declare const kBluetoothL2CAPChannelLEAP: number;

declare const kBluetoothL2CAPChannelLEAS: number;

declare const kBluetoothL2CAPChannelLESignalling: number;

declare const kBluetoothL2CAPChannelMagicPairing: number;

declare const kBluetoothL2CAPChannelMagnet: number;

declare const kBluetoothL2CAPChannelNull: number;

declare const kBluetoothL2CAPChannelReservedEnd: number;

declare const kBluetoothL2CAPChannelReservedStart: number;

declare const kBluetoothL2CAPChannelSecurityManager: number;

declare const kBluetoothL2CAPChannelSignalling: number;

declare const kBluetoothL2CAPConfigurationOptionFlushTimeoutLength: number;

declare const kBluetoothL2CAPConfigurationOptionMTULength: number;

declare const kBluetoothL2CAPConfigurationOptionQoSLength: number;

declare const kBluetoothL2CAPConfigurationOptionRetransmissionAndFlowControlLength: number;

declare const kBluetoothL2CAPFlushTimeoutDefault: number;

declare const kBluetoothL2CAPFlushTimeoutEnd: number;

declare const kBluetoothL2CAPFlushTimeoutForever: number;

declare const kBluetoothL2CAPFlushTimeoutImmediate: number;

declare const kBluetoothL2CAPFlushTimeoutUseExisting: number;

declare const kBluetoothL2CAPInfoTypeMaxConnectionlessMTUSize: number;

declare const kBluetoothL2CAPMTUDefault: number;

declare const kBluetoothL2CAPMTULowEnergyDefault: number;

declare const kBluetoothL2CAPMTULowEnergyMax: number;

declare const kBluetoothL2CAPMTUMaximum: number;

declare const kBluetoothL2CAPMTUMinimum: number;

declare const kBluetoothL2CAPMTUSIG: number;

declare const kBluetoothL2CAPMTUStart: number;

declare const kBluetoothL2CAPMaxPacketSize: number;

declare const kBluetoothL2CAPPSMAACP: number;

declare const kBluetoothL2CAPPSMATT: number;

declare const kBluetoothL2CAPPSMAVCTP: number;

declare const kBluetoothL2CAPPSMAVCTP_Browsing: number;

declare const kBluetoothL2CAPPSMAVDTP: number;

declare const kBluetoothL2CAPPSMBNEP: number;

declare const kBluetoothL2CAPPSMD2D: number;

declare const kBluetoothL2CAPPSMDynamicEnd: number;

declare const kBluetoothL2CAPPSMDynamicStart: number;

declare const kBluetoothL2CAPPSMHIDControl: number;

declare const kBluetoothL2CAPPSMHIDInterrupt: number;

declare const kBluetoothL2CAPPSMNone: number;

declare const kBluetoothL2CAPPSMRFCOMM: number;

declare const kBluetoothL2CAPPSMReservedEnd: number;

declare const kBluetoothL2CAPPSMReservedStart: number;

declare const kBluetoothL2CAPPSMSDP: number;

declare const kBluetoothL2CAPPSMTCS_BIN: number;

declare const kBluetoothL2CAPPSMTCS_BIN_Cordless: number;

declare const kBluetoothL2CAPPSMUID_C_Plane: number;

declare const kBluetoothL2CAPPacketHeaderSize: number;

declare const kBluetoothL2CAPQoSDelayVariationDefault: number;

declare const kBluetoothL2CAPQoSFlagsDefault: number;

declare const kBluetoothL2CAPQoSLatencyDefault: number;

declare const kBluetoothL2CAPQoSPeakBandwidthDefault: number;

declare const kBluetoothL2CAPQoSTokenBucketSizeDefault: number;

declare const kBluetoothL2CAPQoSTokenRateDefault: number;

declare const kBluetoothL2CAPQoSTypeDefault: number;

declare const kBluetoothL2CAPTCICommandL2CA_ConfigReq: number;

declare const kBluetoothL2CAPTCICommandL2CA_ConfigResp: number;

declare const kBluetoothL2CAPTCICommandL2CA_ConnectReq: number;

declare const kBluetoothL2CAPTCICommandL2CA_ConnectResp: number;

declare const kBluetoothL2CAPTCICommandL2CA_DisableCLT: number;

declare const kBluetoothL2CAPTCICommandL2CA_DisconnectReq: number;

declare const kBluetoothL2CAPTCICommandL2CA_DisconnectResp: number;

declare const kBluetoothL2CAPTCICommandL2CA_EnableCLT: number;

declare const kBluetoothL2CAPTCICommandL2CA_GetInfo: number;

declare const kBluetoothL2CAPTCICommandL2CA_GroupAddMember: number;

declare const kBluetoothL2CAPTCICommandL2CA_GroupClose: number;

declare const kBluetoothL2CAPTCICommandL2CA_GroupCreate: number;

declare const kBluetoothL2CAPTCICommandL2CA_GroupMembership: number;

declare const kBluetoothL2CAPTCICommandL2CA_GroupRemoveMember: number;

declare const kBluetoothL2CAPTCICommandL2CA_Ping: number;

declare const kBluetoothL2CAPTCICommandL2CA_ReadData: number;

declare const kBluetoothL2CAPTCICommandL2CA_Reserved1: number;

declare const kBluetoothL2CAPTCICommandL2CA_Reserved2: number;

declare const kBluetoothL2CAPTCICommandL2CA_WriteData: number;

declare const kBluetoothL2CAPTCICommandReserved: number;

declare const kBluetoothL2CAPTCIEventIDL2CA_ConfigInd: number;

declare const kBluetoothL2CAPTCIEventIDL2CA_ConnectInd: number;

declare const kBluetoothL2CAPTCIEventIDL2CA_DisconnectInd: number;

declare const kBluetoothL2CAPTCIEventIDL2CA_QoSViolationInd: number;

declare const kBluetoothL2CAPTCIEventIDL2CA_TimeOutInd: number;

declare const kBluetoothL2CAPTCIEventIDReserved: number;

declare const kBluetoothLEMaxTXOctetsDefault: number;

declare const kBluetoothLEMaxTXOctetsMax: number;

declare const kBluetoothLEMaxTXOctetsMin: number;

declare const kBluetoothLEMaxTXTimeDefault: number;

declare const kBluetoothLEMaxTXTimeMax: number;

declare const kBluetoothLEMaxTXTimeMin: number;

declare const kBluetoothLESecurityManagerBonding: number;

declare const kBluetoothLESecurityManagerNoBonding: number;

declare const kBluetoothLESecurityManagerReservedEnd: number;

declare const kBluetoothLESecurityManagerReservedStart: number;

declare const kBluetoothLETXOctetsDefault: number;

declare const kBluetoothLETXOctetsMax: number;

declare const kBluetoothLETXOctetsMin: number;

declare const kBluetoothLETXTimeDefault: number;

declare const kBluetoothLETXTimeMax: number;

declare const kBluetoothLETXTimeMin: number;

declare const kBluetoothLimitedInquiryAccessCodeEnd: number;

declare const kBluetoothLimitedInquiryAccessCodeIndex: number;

declare const kBluetoothLimitedInquiryAccessCodeLAPValue: number;

declare const kBluetoothPacketType2DH1Omit: number;

declare const kBluetoothPacketType2DH3Omit: number;

declare const kBluetoothPacketType2DH5Omit: number;

declare const kBluetoothPacketType3DH1Omit: number;

declare const kBluetoothPacketType3DH3Omit: number;

declare const kBluetoothPacketType3DM5Omit: number;

declare const kBluetoothPacketTypeAUX: number;

declare const kBluetoothPacketTypeDH1: number;

declare const kBluetoothPacketTypeDH3: number;

declare const kBluetoothPacketTypeDH5: number;

declare const kBluetoothPacketTypeDM1: number;

declare const kBluetoothPacketTypeDM3: number;

declare const kBluetoothPacketTypeDM5: number;

declare const kBluetoothPacketTypeDV: number;

declare const kBluetoothPacketTypeEnd: number;

declare const kBluetoothPacketTypeHV1: number;

declare const kBluetoothPacketTypeHV2: number;

declare const kBluetoothPacketTypeHV3: number;

declare const kBluetoothPacketTypeReserved1: number;

declare const kBluetoothPageScanModeMandatory: number;

declare const kBluetoothPageScanModeOptional1: number;

declare const kBluetoothPageScanModeOptional2: number;

declare const kBluetoothPageScanModeOptional3: number;

declare const kBluetoothPageScanPeriodModeP0: number;

declare const kBluetoothPageScanPeriodModeP1: number;

declare const kBluetoothPageScanPeriodModeP2: number;

declare const kBluetoothPageScanRepetitionModeR0: number;

declare const kBluetoothPageScanRepetitionModeR1: number;

declare const kBluetoothPageScanRepetitionModeR2: number;

declare const kBluetoothRoleBecomeMaster: number;

declare const kBluetoothRoleRemainSlave: number;

declare const kBluetoothSDPDataElementTypeBoolean: number;

declare const kBluetoothSDPDataElementTypeDataElementAlternative: number;

declare const kBluetoothSDPDataElementTypeDataElementSequence: number;

declare const kBluetoothSDPDataElementTypeNil: number;

declare const kBluetoothSDPDataElementTypeReservedEnd: number;

declare const kBluetoothSDPDataElementTypeReservedStart: number;

declare const kBluetoothSDPDataElementTypeSignedInt: number;

declare const kBluetoothSDPDataElementTypeString: number;

declare const kBluetoothSDPDataElementTypeURL: number;

declare const kBluetoothSDPDataElementTypeUUID: number;

declare const kBluetoothSDPDataElementTypeUnsignedInt: number;

declare const kBluetoothSDPErrorCodeInsufficientResources: number;

declare const kBluetoothSDPErrorCodeInvalidContinuationState: number;

declare const kBluetoothSDPErrorCodeInvalidPDUSize: number;

declare const kBluetoothSDPErrorCodeInvalidRequestSyntax: number;

declare const kBluetoothSDPErrorCodeInvalidSDPVersion: number;

declare const kBluetoothSDPErrorCodeInvalidServiceRecordHandle: number;

declare const kBluetoothSDPErrorCodeReserved: number;

declare const kBluetoothSDPErrorCodeReservedEnd: number;

declare const kBluetoothSDPErrorCodeReservedStart: number;

declare const kBluetoothSDPErrorCodeSuccess: number;

declare const kBluetoothSDPPDUIDErrorResponse: number;

declare const kBluetoothSDPPDUIDReserved: number;

declare const kBluetoothSDPPDUIDServiceAttributeRequest: number;

declare const kBluetoothSDPPDUIDServiceAttributeResponse: number;

declare const kBluetoothSDPPDUIDServiceSearchAttributeRequest: number;

declare const kBluetoothSDPPDUIDServiceSearchAttributeResponse: number;

declare const kBluetoothSDPPDUIDServiceSearchRequest: number;

declare const kBluetoothSDPPDUIDServiceSearchResponse: number;

declare const kBluetoothSDPUUID16ATT: number;

declare const kBluetoothSDPUUID16AVCTP: number;

declare const kBluetoothSDPUUID16AVDTP: number;

declare const kBluetoothSDPUUID16BNEP: number;

declare const kBluetoothSDPUUID16Base: number;

declare const kBluetoothSDPUUID16CMPT: number;

declare const kBluetoothSDPUUID16FTP: number;

declare const kBluetoothSDPUUID16HIDP: number;

declare const kBluetoothSDPUUID16HTTP: number;

declare const kBluetoothSDPUUID16HardcopyControlChannel: number;

declare const kBluetoothSDPUUID16HardcopyDataChannel: number;

declare const kBluetoothSDPUUID16HardcopyNotification: number;

declare const kBluetoothSDPUUID16IP: number;

declare const kBluetoothSDPUUID16L2CAP: number;

declare const kBluetoothSDPUUID16MCAPControlChannel: number;

declare const kBluetoothSDPUUID16MCAPDataChannel: number;

declare const kBluetoothSDPUUID16OBEX: number;

declare const kBluetoothSDPUUID16RFCOMM: number;

declare const kBluetoothSDPUUID16SDP: number;

declare const kBluetoothSDPUUID16TCP: number;

declare const kBluetoothSDPUUID16TCSAT: number;

declare const kBluetoothSDPUUID16TCSBIN: number;

declare const kBluetoothSDPUUID16UDI_C_Plane: number;

declare const kBluetoothSDPUUID16UDP: number;

declare const kBluetoothSDPUUID16UPNP: number;

declare const kBluetoothSDPUUID16WSP: number;

declare const kBluetoothServiceClassMajorAny: number;

declare const kBluetoothServiceClassMajorAudio: number;

declare const kBluetoothServiceClassMajorCapturing: number;

declare const kBluetoothServiceClassMajorEnd: number;

declare const kBluetoothServiceClassMajorInformation: number;

declare const kBluetoothServiceClassMajorLimitedDiscoverableMode: number;

declare const kBluetoothServiceClassMajorNetworking: number;

declare const kBluetoothServiceClassMajorNone: number;

declare const kBluetoothServiceClassMajorObjectTransfer: number;

declare const kBluetoothServiceClassMajorPositioning: number;

declare const kBluetoothServiceClassMajorRendering: number;

declare const kBluetoothServiceClassMajorReserved1: number;

declare const kBluetoothServiceClassMajorReserved2: number;

declare const kBluetoothServiceClassMajorTelephony: number;

declare const kBluetoothSynchronousConnectionPacketType2EV3Omit: number;

declare const kBluetoothSynchronousConnectionPacketType2EV5Omit: number;

declare const kBluetoothSynchronousConnectionPacketType3EV3Omit: number;

declare const kBluetoothSynchronousConnectionPacketType3EV5Omit: number;

declare const kBluetoothSynchronousConnectionPacketTypeAll: number;

declare const kBluetoothSynchronousConnectionPacketTypeEV3: number;

declare const kBluetoothSynchronousConnectionPacketTypeEV4: number;

declare const kBluetoothSynchronousConnectionPacketTypeEV5: number;

declare const kBluetoothSynchronousConnectionPacketTypeEnd: number;

declare const kBluetoothSynchronousConnectionPacketTypeFutureUse: number;

declare const kBluetoothSynchronousConnectionPacketTypeHV1: number;

declare const kBluetoothSynchronousConnectionPacketTypeHV2: number;

declare const kBluetoothSynchronousConnectionPacketTypeHV3: number;

declare const kBluetoothSynchronousConnectionPacketTypeNone: number;

declare const kBluetoothVoiceSettingAirCodingFormatALaw: number;

declare const kBluetoothVoiceSettingAirCodingFormatCVSD: number;

declare const kBluetoothVoiceSettingAirCodingFormatMask: number;

declare const kBluetoothVoiceSettingAirCodingFormatTransparentData: number;

declare const kBluetoothVoiceSettingAirCodingFormatULaw: number;

declare const kBluetoothVoiceSettingInputCodingALawInputCoding: number;

declare const kBluetoothVoiceSettingInputCodingLinearInputCoding: number;

declare const kBluetoothVoiceSettingInputCodingMask: number;

declare const kBluetoothVoiceSettingInputCodingULawInputCoding: number;

declare const kBluetoothVoiceSettingInputDataFormat1sComplement: number;

declare const kBluetoothVoiceSettingInputDataFormat2sComplement: number;

declare const kBluetoothVoiceSettingInputDataFormatMask: number;

declare const kBluetoothVoiceSettingInputDataFormatSignMagnitude: number;

declare const kBluetoothVoiceSettingInputDataFormatUnsigned: number;

declare const kBluetoothVoiceSettingInputSampleSize16Bit: number;

declare const kBluetoothVoiceSettingInputSampleSize8Bit: number;

declare const kBluetoothVoiceSettingInputSampleSizeMask: number;

declare const kBluetoothVoiceSettingPCMBitPositionMask: number;

declare var kFTSListingNameKey: string;

declare var kFTSListingSizeKey: string;

declare var kFTSListingTypeKey: string;

declare var kFTSProgressBytesTotalKey: string;

declare var kFTSProgressBytesTransferredKey: string;

declare var kFTSProgressEstimatedTimeKey: string;

declare var kFTSProgressPercentageKey: string;

declare var kFTSProgressPrecentageKey: string;

declare var kFTSProgressTimeElapsedKey: string;

declare var kFTSProgressTransferRateKey: string;

declare const kMaximumNumberOfInquiryAccessCodes: number;

declare var kOBEXHeaderIDKeyAppParameters: string;

declare var kOBEXHeaderIDKeyAuthorizationChallenge: string;

declare var kOBEXHeaderIDKeyAuthorizationResponse: string;

declare var kOBEXHeaderIDKeyBody: string;

declare var kOBEXHeaderIDKeyByteSequence: string;

declare var kOBEXHeaderIDKeyConnectionID: string;

declare var kOBEXHeaderIDKeyCount: string;

declare var kOBEXHeaderIDKeyDescription: string;

declare var kOBEXHeaderIDKeyEndOfBody: string;

declare var kOBEXHeaderIDKeyHTTP: string;

declare var kOBEXHeaderIDKeyLength: string;

declare var kOBEXHeaderIDKeyName: string;

declare var kOBEXHeaderIDKeyObjectClass: string;

declare var kOBEXHeaderIDKeyTarget: string;

declare var kOBEXHeaderIDKeyTime4Byte: string;

declare var kOBEXHeaderIDKeyTimeISO: string;

declare var kOBEXHeaderIDKeyType: string;

declare var kOBEXHeaderIDKeyUnknown1ByteQuantity: string;

declare var kOBEXHeaderIDKeyUnknown4ByteQuantity: string;

declare var kOBEXHeaderIDKeyUnknownByteSequence: string;

declare var kOBEXHeaderIDKeyUnknownUnicodeText: string;

declare var kOBEXHeaderIDKeyUserDefined: string;

declare var kOBEXHeaderIDKeyWho: string;
