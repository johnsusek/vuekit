
declare var HIDDriverKitVersionNumber: number;

declare var HIDDriverKitVersionString: number;

enum HIDReportCommandType {

	kIOHIDReportCommandSetReport = 0,

	kIOHIDReportCommandGetReport = 1
}


interface IOHIDCompletion {
	target: any;
	action: (p1: any, p2: any, p3: number, p4: number) => void;
	parameter: any;
}
declare var IOHIDCompletion: IOHIDCompletion;

enum IOHIDDigitizerCollectionType {

	kIOHIDDigitizerCollectionTypeStylus = 0,

	kIOHIDDigitizerCollectionTypePuck = 1,

	kIOHIDDigitizerCollectionTypeFinger = 2,

	kIOHIDDigitizerCollectionTypeHand = 3
}


interface IOHIDDigitizerStylusData {
	identifier: number;
	x: number;
	y: number;
	tipPressure: number;
	barrelPressure: number;
	tiltX: number;
	tiltY: number;
	twist: number;
	pointerType: number;
	effect: number;
	uniqueID: number;
	inRange: number;
	tip: number;
	barrelSwitch: number;
	invert: number;
	eraser: number;
	tipChanged: number;
	positionChanged: number;
	rangeChanged: number;
}
declare var IOHIDDigitizerStylusData: IOHIDDigitizerStylusData;

interface IOHIDDigitizerTouchData {
	identifier: number;
	x: number;
	y: number;
	inRange: number;
	touch: number;
	touchValid: number;
	touchChanged: number;
	positionChanged: number;
	rangeChanged: number;
}
declare var IOHIDDigitizerTouchData: IOHIDDigitizerTouchData;

enum IOHIDElementCollectionType {

	kIOHIDElementCollectionTypePhysical = 0,

	kIOHIDElementCollectionTypeApplication = 1,

	kIOHIDElementCollectionTypeLogical = 2,

	kIOHIDElementCollectionTypeReport = 3,

	kIOHIDElementCollectionTypeNamedArray = 4,

	kIOHIDElementCollectionTypeUsageSwitch = 5,

	kIOHIDElementCollectionTypeUsageModifier = 6
}


enum IOHIDElementCommitDirection {

	kIOHIDElementCommitDirectionIn = 0,

	kIOHIDElementCommitDirectionOut = 1
}


enum IOHIDElementType {

	kIOHIDElementTypeInput_Misc = 1,

	kIOHIDElementTypeInput_Button = 2,

	kIOHIDElementTypeInput_Axis = 3,

	kIOHIDElementTypeInput_ScanCodes = 4,

	kIOHIDElementTypeInput_NULL = 5,

	kIOHIDElementTypeOutput = 129,

	kIOHIDElementTypeFeature = 257,

	kIOHIDElementTypeCollection = 513
}


interface IOHIDElementValueHeader {
	cookie: number;
	value: number;
}
declare var IOHIDElementValueHeader: IOHIDElementValueHeader;

enum IOHIDKeyboardEventOptions {

	kIOHIDKeyboardEventOptionsNoKeyRepeat = 256
}


enum IOHIDPointerEventOptions {

	kIOHIDPointerEventOptionsNoAcceleration = 256
}


enum IOHIDReportType {

	kIOHIDReportTypeInput = 0,

	kIOHIDReportTypeOutput = 1,

	kIOHIDReportTypeFeature = 2,

	kIOHIDReportTypeCount = 3
}


enum IOHIDScrollEventOptions {

	kIOHIDScrollEventOptionsNoAcceleration = 256
}


enum USBIdlePolicyType {

	Interface = 0,

	Pipe = 1
}


declare const kHIDPage_AlphanumericDisplay: number;

declare const kHIDPage_Arcade: number;

declare const kHIDPage_BarCodeScanner: number;

declare const kHIDPage_BatterySystem: number;

declare const kHIDPage_Button: number;

declare const kHIDPage_CameraControl: number;

declare const kHIDPage_Consumer: number;

declare const kHIDPage_Digitizer: number;

declare const kHIDPage_Game: number;

declare const kHIDPage_GenericDesktop: number;

declare const kHIDPage_GenericDeviceControls: number;

declare const kHIDPage_KeyboardOrKeypad: number;

declare const kHIDPage_LEDs: number;

declare const kHIDPage_MagneticStripeReader: number;

declare const kHIDPage_Monitor: number;

declare const kHIDPage_MonitorEnumerated: number;

declare const kHIDPage_MonitorReserved: number;

declare const kHIDPage_MonitorVirtual: number;

declare const kHIDPage_Ordinal: number;

declare const kHIDPage_PID: number;

declare const kHIDPage_PowerDevice: number;

declare const kHIDPage_PowerReserved: number;

declare const kHIDPage_PowerReserved2: number;

declare const kHIDPage_Scale: number;

declare const kHIDPage_Sensor: number;

declare const kHIDPage_Simulation: number;

declare const kHIDPage_Sport: number;

declare const kHIDPage_Telephony: number;

declare const kHIDPage_Undefined: number;

declare const kHIDPage_Unicode: number;

declare const kHIDPage_VR: number;

declare const kHIDPage_VendorDefinedStart: number;

declare const kHIDPage_WeighingDevice: number;

declare const kHIDUsage_AD_ASCIICharacterSet: number;

declare const kHIDUsage_AD_AlphanumericDisplay: number;

declare const kHIDUsage_AD_CharacterHeight: number;

declare const kHIDUsage_AD_CharacterReport: number;

declare const kHIDUsage_AD_CharacterSpacingHorizontal: number;

declare const kHIDUsage_AD_CharacterSpacingVertical: number;

declare const kHIDUsage_AD_CharacterWidth: number;

declare const kHIDUsage_AD_ClearDisplay: number;

declare const kHIDUsage_AD_Column: number;

declare const kHIDUsage_AD_Columns: number;

declare const kHIDUsage_AD_CursorBlink: number;

declare const kHIDUsage_AD_CursorEnable: number;

declare const kHIDUsage_AD_CursorMode: number;

declare const kHIDUsage_AD_CursorPixelPositioning: number;

declare const kHIDUsage_AD_CursorPositionReport: number;

declare const kHIDUsage_AD_DataReadBack: number;

declare const kHIDUsage_AD_DisplayAttributesReport: number;

declare const kHIDUsage_AD_DisplayControlReport: number;

declare const kHIDUsage_AD_DisplayData: number;

declare const kHIDUsage_AD_DisplayEnable: number;

declare const kHIDUsage_AD_DisplayStatus: number;

declare const kHIDUsage_AD_ErrFontdatacannotberead: number;

declare const kHIDUsage_AD_ErrNotaloadablecharacter: number;

declare const kHIDUsage_AD_FontData: number;

declare const kHIDUsage_AD_FontReadBack: number;

declare const kHIDUsage_AD_FontReport: number;

declare const kHIDUsage_AD_HorizontalScroll: number;

declare const kHIDUsage_AD_Reserved: number;

declare const kHIDUsage_AD_Row: number;

declare const kHIDUsage_AD_Rows: number;

declare const kHIDUsage_AD_ScreenSaverDelay: number;

declare const kHIDUsage_AD_ScreenSaverEnable: number;

declare const kHIDUsage_AD_StatNotReady: number;

declare const kHIDUsage_AD_StatReady: number;

declare const kHIDUsage_AD_UnicodeCharacterSet: number;

declare const kHIDUsage_AD_VerticalScroll: number;

declare const kHIDUsage_BCS_2DControlReport: number;

declare const kHIDUsage_BCS_ActiveTime: number;

declare const kHIDUsage_BCS_AddEAN2_3LabelDefinition: number;

declare const kHIDUsage_BCS_AimDuration: number;

declare const kHIDUsage_BCS_AimingLaserPattern: number;

declare const kHIDUsage_BCS_Aiming_PointerMide: number;

declare const kHIDUsage_BCS_AttributeReport: number;

declare const kHIDUsage_BCS_AztecCode: number;

declare const kHIDUsage_BCS_BC412: number;

declare const kHIDUsage_BCS_BadgeReader: number;

declare const kHIDUsage_BCS_BarCodePresent: number;

declare const kHIDUsage_BCS_BarCodePresentSensor: number;

declare const kHIDUsage_BCS_BarCodeScanner: number;

declare const kHIDUsage_BCS_BarCodeScannerCradle: number;

declare const kHIDUsage_BCS_BarSpaceData: number;

declare const kHIDUsage_BCS_BeeperState: number;

declare const kHIDUsage_BCS_BooklandEAN: number;

declare const kHIDUsage_BCS_ChannelCode: number;

declare const kHIDUsage_BCS_Check: number;

declare const kHIDUsage_BCS_CheckDigit: number;

declare const kHIDUsage_BCS_CheckDigitCodabarEnable: number;

declare const kHIDUsage_BCS_CheckDigitCode99Enable: number;

declare const kHIDUsage_BCS_CheckDigitDisable: number;

declare const kHIDUsage_BCS_CheckDigitEnableInterleaved2of5OPCC: number;

declare const kHIDUsage_BCS_CheckDigitEnableInterleaved2of5USS: number;

declare const kHIDUsage_BCS_CheckDigitEnableOneMSIPlessey: number;

declare const kHIDUsage_BCS_CheckDigitEnableStandard2of5OPCC: number;

declare const kHIDUsage_BCS_CheckDigitEnableStandard2of5USS: number;

declare const kHIDUsage_BCS_CheckDigitEnableTwoMSIPlessey: number;

declare const kHIDUsage_BCS_CheckDisablePrice: number;

declare const kHIDUsage_BCS_CheckEnable4DigitPrice: number;

declare const kHIDUsage_BCS_CheckEnable5DigitPrice: number;

declare const kHIDUsage_BCS_CheckEnableEuropean4DigitPrice: number;

declare const kHIDUsage_BCS_CheckEnableEuropean5DigitPrice: number;

declare const kHIDUsage_BCS_Class1ALaser: number;

declare const kHIDUsage_BCS_Class2Laser: number;

declare const kHIDUsage_BCS_ClearAllEAN2_3LabelDefinitions: number;

declare const kHIDUsage_BCS_Codabar: number;

declare const kHIDUsage_BCS_CodabarControlReport: number;

declare const kHIDUsage_BCS_Code128: number;

declare const kHIDUsage_BCS_Code128ControlReport: number;

declare const kHIDUsage_BCS_Code16: number;

declare const kHIDUsage_BCS_Code32: number;

declare const kHIDUsage_BCS_Code39: number;

declare const kHIDUsage_BCS_Code39ControlReport: number;

declare const kHIDUsage_BCS_Code49: number;

declare const kHIDUsage_BCS_Code93: number;

declare const kHIDUsage_BCS_CodeOne: number;

declare const kHIDUsage_BCS_Colorcode: number;

declare const kHIDUsage_BCS_CommitParametersToNVM: number;

declare const kHIDUsage_BCS_ConstantElectronicArticleSurveillance: number;

declare const kHIDUsage_BCS_ContactScanner: number;

declare const kHIDUsage_BCS_ConvertEAN8To13Type: number;

declare const kHIDUsage_BCS_ConvertUPCAToEAN_13: number;

declare const kHIDUsage_BCS_ConvertUPC_EToA: number;

declare const kHIDUsage_BCS_CordlessScannerBase: number;

declare const kHIDUsage_BCS_DLMethodCheckForDiscrete: number;

declare const kHIDUsage_BCS_DLMethodCheckInRange: number;

declare const kHIDUsage_BCS_DLMethodReadAny: number;

declare const kHIDUsage_BCS_DataLengthMethod: number;

declare const kHIDUsage_BCS_DataMatrix: number;

declare const kHIDUsage_BCS_DataPrefix: number;

declare const kHIDUsage_BCS_DecodeDataContinued: number;

declare const kHIDUsage_BCS_DecodedData: number;

declare const kHIDUsage_BCS_DisableCheckDigitTransmit: number;

declare const kHIDUsage_BCS_DumbBarCodeScanner: number;

declare const kHIDUsage_BCS_EAN13FlagDigit1: number;

declare const kHIDUsage_BCS_EAN13FlagDigit2: number;

declare const kHIDUsage_BCS_EAN13FlagDigit3: number;

declare const kHIDUsage_BCS_EAN2_3LabelControlReport: number;

declare const kHIDUsage_BCS_EAN8FlagDigit1: number;

declare const kHIDUsage_BCS_EAN8FlagDigit2: number;

declare const kHIDUsage_BCS_EAN8FlagDigit3: number;

declare const kHIDUsage_BCS_EANThreeLabel: number;

declare const kHIDUsage_BCS_EANTwoLabel: number;

declare const kHIDUsage_BCS_EAN_13: number;

declare const kHIDUsage_BCS_EAN_8: number;

declare const kHIDUsage_BCS_EAN_99_128_Mandatory: number;

declare const kHIDUsage_BCS_EAN_99_P5_128_Optional: number;

declare const kHIDUsage_BCS_ElectronicArticleSurveillanceNotification: number;

declare const kHIDUsage_BCS_EnableCheckDigitTransmit: number;

declare const kHIDUsage_BCS_ErrorIndication: number;

declare const kHIDUsage_BCS_FirstDiscreteLengthToDecode: number;

declare const kHIDUsage_BCS_FixedBeeper: number;

declare const kHIDUsage_BCS_FragmentDecoding: number;

declare const kHIDUsage_BCS_FullASCIIConversion: number;

declare const kHIDUsage_BCS_GRWTIAfterDecode: number;

declare const kHIDUsage_BCS_GRWTIBeep_LampAfterTransmit: number;

declare const kHIDUsage_BCS_GRWTINoBeep_LampUseAtAll: number;

declare const kHIDUsage_BCS_GoodDecodeIndication: number;

declare const kHIDUsage_BCS_GoodReadLED: number;

declare const kHIDUsage_BCS_GoodReadLampDuration: number;

declare const kHIDUsage_BCS_GoodReadLampIntensity: number;

declare const kHIDUsage_BCS_GoodReadToneFrequency: number;

declare const kHIDUsage_BCS_GoodReadToneLength: number;

declare const kHIDUsage_BCS_GoodReadToneVolume: number;

declare const kHIDUsage_BCS_GoodReadWhenToWrite: number;

declare const kHIDUsage_BCS_HandsFreeScanning: number;

declare const kHIDUsage_BCS_HeaterPresent: number;

declare const kHIDUsage_BCS_InitiateBarcodeRead: number;

declare const kHIDUsage_BCS_Interleaved2of5: number;

declare const kHIDUsage_BCS_Interleaved2of5ControlReport: number;

declare const kHIDUsage_BCS_IntrinsicallySafe: number;

declare const kHIDUsage_BCS_ItalianPharmacyCode: number;

declare const kHIDUsage_BCS_KlasseEinsLaser: number;

declare const kHIDUsage_BCS_LaserOnTime: number;

declare const kHIDUsage_BCS_LaserState: number;

declare const kHIDUsage_BCS_LockoutTime: number;

declare const kHIDUsage_BCS_LongRangeScanner: number;

declare const kHIDUsage_BCS_MSIPlesseyControlReport: number;

declare const kHIDUsage_BCS_MSI_Plessey: number;

declare const kHIDUsage_BCS_MaxiCode: number;

declare const kHIDUsage_BCS_MaximumLengthToDecode: number;

declare const kHIDUsage_BCS_MicroPDF: number;

declare const kHIDUsage_BCS_MinimumLengthToDecode: number;

declare const kHIDUsage_BCS_MirrorSpeedControl: number;

declare const kHIDUsage_BCS_Misc1DControlReport: number;

declare const kHIDUsage_BCS_MotorState: number;

declare const kHIDUsage_BCS_MotorTimeout: number;

declare const kHIDUsage_BCS_MultiRangeScanner: number;

declare const kHIDUsage_BCS_NoReadMessage: number;

declare const kHIDUsage_BCS_NotOnFileIndication: number;

declare const kHIDUsage_BCS_NotOnFileVolume: number;

declare const kHIDUsage_BCS_PDF_417: number;

declare const kHIDUsage_BCS_ParameterScanning: number;

declare const kHIDUsage_BCS_ParametersChanged: number;

declare const kHIDUsage_BCS_Periodical: number;

declare const kHIDUsage_BCS_PeriodicalAutoDiscriminatePlus2: number;

declare const kHIDUsage_BCS_PeriodicalAutoDiscriminatePlus5: number;

declare const kHIDUsage_BCS_PeriodicalIgnorePlus2: number;

declare const kHIDUsage_BCS_PeriodicalIgnorePlus5: number;

declare const kHIDUsage_BCS_PeriodicalOnlyDecodeWithPlus2: number;

declare const kHIDUsage_BCS_PeriodicalOnlyDecodeWithPlus5: number;

declare const kHIDUsage_BCS_PolarityInvertedBarCode: number;

declare const kHIDUsage_BCS_PolarityNormalBarCode: number;

declare const kHIDUsage_BCS_PosiCode: number;

declare const kHIDUsage_BCS_PowerOnResetScanner: number;

declare const kHIDUsage_BCS_PowerupBeep: number;

declare const kHIDUsage_BCS_PrefixAIMI: number;

declare const kHIDUsage_BCS_PrefixNone: number;

declare const kHIDUsage_BCS_PrefixProprietary: number;

declare const kHIDUsage_BCS_PreventReadOfBarcodes: number;

declare const kHIDUsage_BCS_ProgrammableBeeper: number;

declare const kHIDUsage_BCS_ProximitySensor: number;

declare const kHIDUsage_BCS_QRCode: number;

declare const kHIDUsage_BCS_RawDataPolarity: number;

declare const kHIDUsage_BCS_RawScannedDataReport: number;

declare const kHIDUsage_BCS_ScannedDataReport: number;

declare const kHIDUsage_BCS_ScannerDataAccuracy: number;

declare const kHIDUsage_BCS_ScannerInCradle: number;

declare const kHIDUsage_BCS_ScannerInRange: number;

declare const kHIDUsage_BCS_ScannerReadConfidence: number;

declare const kHIDUsage_BCS_SecondDiscreteLengthToDecode: number;

declare const kHIDUsage_BCS_SetParameterDefaultValues: number;

declare const kHIDUsage_BCS_SettingsReport: number;

declare const kHIDUsage_BCS_SoundErrorBeep: number;

declare const kHIDUsage_BCS_SoundGoodReadBeep: number;

declare const kHIDUsage_BCS_SoundNotOnFileBeep: number;

declare const kHIDUsage_BCS_Standard2of5: number;

declare const kHIDUsage_BCS_Standard2of5ControlReport: number;

declare const kHIDUsage_BCS_Standard2of5IATA: number;

declare const kHIDUsage_BCS_StatusReport: number;

declare const kHIDUsage_BCS_SuperCode: number;

declare const kHIDUsage_BCS_SymbologyIdentifier1: number;

declare const kHIDUsage_BCS_SymbologyIdentifier2: number;

declare const kHIDUsage_BCS_SymbologyIdentifier3: number;

declare const kHIDUsage_BCS_TransmitCheckDigit: number;

declare const kHIDUsage_BCS_TransmitStart_Stop: number;

declare const kHIDUsage_BCS_TriOptic: number;

declare const kHIDUsage_BCS_TriggerMode: number;

declare const kHIDUsage_BCS_TriggerModeBlinkingLaserOn: number;

declare const kHIDUsage_BCS_TriggerModeContinuousLaserOn: number;

declare const kHIDUsage_BCS_TriggerModeLaserOnWhilePulled: number;

declare const kHIDUsage_BCS_TriggerModeLaserStaysOnAfterTriggerRelease: number;

declare const kHIDUsage_BCS_TriggerReport: number;

declare const kHIDUsage_BCS_TriggerState: number;

declare const kHIDUsage_BCS_Triggerless: number;

declare const kHIDUsage_BCS_UCC_EAN_128: number;

declare const kHIDUsage_BCS_UPC_A: number;

declare const kHIDUsage_BCS_UPC_AWith128Mandatory: number;

declare const kHIDUsage_BCS_UPC_AWith128Optical: number;

declare const kHIDUsage_BCS_UPC_AWithP5Optional: number;

declare const kHIDUsage_BCS_UPC_E: number;

declare const kHIDUsage_BCS_UPC_E1: number;

declare const kHIDUsage_BCS_UPC_EAN: number;

declare const kHIDUsage_BCS_UPC_EANControlReport: number;

declare const kHIDUsage_BCS_UPC_EANCouponCode: number;

declare const kHIDUsage_BCS_UPC_EANPeriodicals: number;

declare const kHIDUsage_BCS_USB_5_SlugCode: number;

declare const kHIDUsage_BCS_UltraCode: number;

declare const kHIDUsage_BCS_Undefined: number;

declare const kHIDUsage_BCS_VeriCode: number;

declare const kHIDUsage_BCS_Wand: number;

declare const kHIDUsage_BCS_WaterResistant: number;

declare const kHIDUsage_BS_ACPresent: number;

declare const kHIDUsage_BS_AbsoluteStateOfCharge: number;

declare const kHIDUsage_BS_AlarmInhibited: number;

declare const kHIDUsage_BS_AtRate: number;

declare const kHIDUsage_BS_AtRateOK: number;

declare const kHIDUsage_BS_AtRateTimeToEmpty: number;

declare const kHIDUsage_BS_AtRateTimeToFull: number;

declare const kHIDUsage_BS_AverageCurrent: number;

declare const kHIDUsage_BS_AverageTimeToEmpty: number;

declare const kHIDUsage_BS_AverageTimeToFull: number;

declare const kHIDUsage_BS_BattPackModelLevel: number;

declare const kHIDUsage_BS_BatteryInsertion: number;

declare const kHIDUsage_BS_BatteryPresent: number;

declare const kHIDUsage_BS_BatterySupported: number;

declare const kHIDUsage_BS_BelowRemainingCapacityLimit: number;

declare const kHIDUsage_BS_BroadcastToCharger: number;

declare const kHIDUsage_BS_CapacityGranularity1: number;

declare const kHIDUsage_BS_CapacityGranularity2: number;

declare const kHIDUsage_BS_CapacityMode: number;

declare const kHIDUsage_BS_ChargeController: number;

declare const kHIDUsage_BS_ChargerConnection: number;

declare const kHIDUsage_BS_ChargerSelectorSupport: number;

declare const kHIDUsage_BS_ChargerSpec: number;

declare const kHIDUsage_BS_Charging: number;

declare const kHIDUsage_BS_ChargingIndicator: number;

declare const kHIDUsage_BS_ConditioningFlag: number;

declare const kHIDUsage_BS_ConnectionToSMBus: number;

declare const kHIDUsage_BS_CurrentNotRegulated: number;

declare const kHIDUsage_BS_CurrentOutOfRange: number;

declare const kHIDUsage_BS_CycleCount: number;

declare const kHIDUsage_BS_DesignCapacity: number;

declare const kHIDUsage_BS_Discharging: number;

declare const kHIDUsage_BS_EnablePolling: number;

declare const kHIDUsage_BS_FullChargeCapacity: number;

declare const kHIDUsage_BS_FullyCharged: number;

declare const kHIDUsage_BS_FullyDischarged: number;

declare const kHIDUsage_BS_InhibitCharge: number;

declare const kHIDUsage_BS_InternalChargeController: number;

declare const kHIDUsage_BS_Level2: number;

declare const kHIDUsage_BS_Level3: number;

declare const kHIDUsage_BS_ManufacturerAccess: number;

declare const kHIDUsage_BS_ManufacturerData: number;

declare const kHIDUsage_BS_ManufacturerDate: number;

declare const kHIDUsage_BS_MasterMode: number;

declare const kHIDUsage_BS_Maxerror: number;

declare const kHIDUsage_BS_NeedReplacement: number;

declare const kHIDUsage_BS_OKToUse: number;

declare const kHIDUsage_BS_OptionalMfgFunction1: number;

declare const kHIDUsage_BS_OptionalMfgFunction2: number;

declare const kHIDUsage_BS_OptionalMfgFunction3: number;

declare const kHIDUsage_BS_OptionalMfgFunction4: number;

declare const kHIDUsage_BS_OptionalMfgFunction5: number;

declare const kHIDUsage_BS_OutputConnection: number;

declare const kHIDUsage_BS_PowerFail: number;

declare const kHIDUsage_BS_PrimaryBattery: number;

declare const kHIDUsage_BS_PrimaryBatterySupport: number;

declare const kHIDUsage_BS_Rechargable: number;

declare const kHIDUsage_BS_RelativeStateOfCharge: number;

declare const kHIDUsage_BS_RemainingCapacity: number;

declare const kHIDUsage_BS_RemainingCapacityLimit: number;

declare const kHIDUsage_BS_RemainingTimeLimit: number;

declare const kHIDUsage_BS_RemainingTimeLimitExpired: number;

declare const kHIDUsage_BS_ResetToZero: number;

declare const kHIDUsage_BS_RunTimeToEmpty: number;

declare const kHIDUsage_BS_SMBAlarmWarning: number;

declare const kHIDUsage_BS_SMBBatteryMode: number;

declare const kHIDUsage_BS_SMBBatteryStatus: number;

declare const kHIDUsage_BS_SMBChargerMode: number;

declare const kHIDUsage_BS_SMBChargerSpecInfo: number;

declare const kHIDUsage_BS_SMBChargerStatus: number;

declare const kHIDUsage_BS_SMBErrorCode: number;

declare const kHIDUsage_BS_SMBSelectorInfo: number;

declare const kHIDUsage_BS_SMBSelectorPresets: number;

declare const kHIDUsage_BS_SMBSelectorState: number;

declare const kHIDUsage_BS_SelectorRevision: number;

declare const kHIDUsage_BS_SerialNumber: number;

declare const kHIDUsage_BS_SpecificationInfo: number;

declare const kHIDUsage_BS_TerminateCharge: number;

declare const kHIDUsage_BS_TerminateDischarge: number;

declare const kHIDUsage_BS_ThermistorCold: number;

declare const kHIDUsage_BS_ThermistorHot: number;

declare const kHIDUsage_BS_ThermistorOverRange: number;

declare const kHIDUsage_BS_ThermistorUnderRange: number;

declare const kHIDUsage_BS_Undefined: number;

declare const kHIDUsage_BS_Usenext: number;

declare const kHIDUsage_BS_VoltageNotRegulated: number;

declare const kHIDUsage_BS_VoltageOutOfRange: number;

declare const kHIDUsage_BS_WarningCapacityLimit: number;

declare const kHIDUsage_BS_iDeviceChemistry: number;

declare const kHIDUsage_BS_iDevicename: number;

declare const kHIDUsage_BS_iManufacturerName: number;

declare const kHIDUsage_BS_iOEMInformation: number;

declare const kHIDUsage_Button_1: number;

declare const kHIDUsage_Button_10: number;

declare const kHIDUsage_Button_100: number;

declare const kHIDUsage_Button_101: number;

declare const kHIDUsage_Button_102: number;

declare const kHIDUsage_Button_103: number;

declare const kHIDUsage_Button_104: number;

declare const kHIDUsage_Button_105: number;

declare const kHIDUsage_Button_106: number;

declare const kHIDUsage_Button_107: number;

declare const kHIDUsage_Button_108: number;

declare const kHIDUsage_Button_109: number;

declare const kHIDUsage_Button_11: number;

declare const kHIDUsage_Button_110: number;

declare const kHIDUsage_Button_111: number;

declare const kHIDUsage_Button_112: number;

declare const kHIDUsage_Button_113: number;

declare const kHIDUsage_Button_114: number;

declare const kHIDUsage_Button_115: number;

declare const kHIDUsage_Button_116: number;

declare const kHIDUsage_Button_117: number;

declare const kHIDUsage_Button_118: number;

declare const kHIDUsage_Button_119: number;

declare const kHIDUsage_Button_12: number;

declare const kHIDUsage_Button_120: number;

declare const kHIDUsage_Button_121: number;

declare const kHIDUsage_Button_122: number;

declare const kHIDUsage_Button_123: number;

declare const kHIDUsage_Button_124: number;

declare const kHIDUsage_Button_125: number;

declare const kHIDUsage_Button_126: number;

declare const kHIDUsage_Button_127: number;

declare const kHIDUsage_Button_128: number;

declare const kHIDUsage_Button_129: number;

declare const kHIDUsage_Button_13: number;

declare const kHIDUsage_Button_130: number;

declare const kHIDUsage_Button_131: number;

declare const kHIDUsage_Button_132: number;

declare const kHIDUsage_Button_133: number;

declare const kHIDUsage_Button_134: number;

declare const kHIDUsage_Button_135: number;

declare const kHIDUsage_Button_136: number;

declare const kHIDUsage_Button_137: number;

declare const kHIDUsage_Button_138: number;

declare const kHIDUsage_Button_139: number;

declare const kHIDUsage_Button_14: number;

declare const kHIDUsage_Button_140: number;

declare const kHIDUsage_Button_141: number;

declare const kHIDUsage_Button_142: number;

declare const kHIDUsage_Button_143: number;

declare const kHIDUsage_Button_144: number;

declare const kHIDUsage_Button_145: number;

declare const kHIDUsage_Button_146: number;

declare const kHIDUsage_Button_147: number;

declare const kHIDUsage_Button_148: number;

declare const kHIDUsage_Button_149: number;

declare const kHIDUsage_Button_15: number;

declare const kHIDUsage_Button_150: number;

declare const kHIDUsage_Button_151: number;

declare const kHIDUsage_Button_152: number;

declare const kHIDUsage_Button_153: number;

declare const kHIDUsage_Button_154: number;

declare const kHIDUsage_Button_155: number;

declare const kHIDUsage_Button_156: number;

declare const kHIDUsage_Button_157: number;

declare const kHIDUsage_Button_158: number;

declare const kHIDUsage_Button_159: number;

declare const kHIDUsage_Button_16: number;

declare const kHIDUsage_Button_160: number;

declare const kHIDUsage_Button_161: number;

declare const kHIDUsage_Button_162: number;

declare const kHIDUsage_Button_163: number;

declare const kHIDUsage_Button_164: number;

declare const kHIDUsage_Button_165: number;

declare const kHIDUsage_Button_166: number;

declare const kHIDUsage_Button_167: number;

declare const kHIDUsage_Button_168: number;

declare const kHIDUsage_Button_169: number;

declare const kHIDUsage_Button_17: number;

declare const kHIDUsage_Button_170: number;

declare const kHIDUsage_Button_171: number;

declare const kHIDUsage_Button_172: number;

declare const kHIDUsage_Button_173: number;

declare const kHIDUsage_Button_174: number;

declare const kHIDUsage_Button_175: number;

declare const kHIDUsage_Button_176: number;

declare const kHIDUsage_Button_177: number;

declare const kHIDUsage_Button_178: number;

declare const kHIDUsage_Button_179: number;

declare const kHIDUsage_Button_18: number;

declare const kHIDUsage_Button_180: number;

declare const kHIDUsage_Button_181: number;

declare const kHIDUsage_Button_182: number;

declare const kHIDUsage_Button_183: number;

declare const kHIDUsage_Button_184: number;

declare const kHIDUsage_Button_185: number;

declare const kHIDUsage_Button_186: number;

declare const kHIDUsage_Button_187: number;

declare const kHIDUsage_Button_188: number;

declare const kHIDUsage_Button_189: number;

declare const kHIDUsage_Button_19: number;

declare const kHIDUsage_Button_190: number;

declare const kHIDUsage_Button_191: number;

declare const kHIDUsage_Button_192: number;

declare const kHIDUsage_Button_193: number;

declare const kHIDUsage_Button_194: number;

declare const kHIDUsage_Button_195: number;

declare const kHIDUsage_Button_196: number;

declare const kHIDUsage_Button_197: number;

declare const kHIDUsage_Button_198: number;

declare const kHIDUsage_Button_199: number;

declare const kHIDUsage_Button_2: number;

declare const kHIDUsage_Button_20: number;

declare const kHIDUsage_Button_200: number;

declare const kHIDUsage_Button_201: number;

declare const kHIDUsage_Button_202: number;

declare const kHIDUsage_Button_203: number;

declare const kHIDUsage_Button_204: number;

declare const kHIDUsage_Button_205: number;

declare const kHIDUsage_Button_206: number;

declare const kHIDUsage_Button_207: number;

declare const kHIDUsage_Button_208: number;

declare const kHIDUsage_Button_209: number;

declare const kHIDUsage_Button_21: number;

declare const kHIDUsage_Button_210: number;

declare const kHIDUsage_Button_211: number;

declare const kHIDUsage_Button_212: number;

declare const kHIDUsage_Button_213: number;

declare const kHIDUsage_Button_214: number;

declare const kHIDUsage_Button_215: number;

declare const kHIDUsage_Button_216: number;

declare const kHIDUsage_Button_217: number;

declare const kHIDUsage_Button_218: number;

declare const kHIDUsage_Button_219: number;

declare const kHIDUsage_Button_22: number;

declare const kHIDUsage_Button_220: number;

declare const kHIDUsage_Button_221: number;

declare const kHIDUsage_Button_222: number;

declare const kHIDUsage_Button_223: number;

declare const kHIDUsage_Button_224: number;

declare const kHIDUsage_Button_225: number;

declare const kHIDUsage_Button_226: number;

declare const kHIDUsage_Button_227: number;

declare const kHIDUsage_Button_228: number;

declare const kHIDUsage_Button_229: number;

declare const kHIDUsage_Button_23: number;

declare const kHIDUsage_Button_230: number;

declare const kHIDUsage_Button_231: number;

declare const kHIDUsage_Button_232: number;

declare const kHIDUsage_Button_233: number;

declare const kHIDUsage_Button_234: number;

declare const kHIDUsage_Button_235: number;

declare const kHIDUsage_Button_236: number;

declare const kHIDUsage_Button_237: number;

declare const kHIDUsage_Button_238: number;

declare const kHIDUsage_Button_239: number;

declare const kHIDUsage_Button_24: number;

declare const kHIDUsage_Button_240: number;

declare const kHIDUsage_Button_241: number;

declare const kHIDUsage_Button_242: number;

declare const kHIDUsage_Button_243: number;

declare const kHIDUsage_Button_244: number;

declare const kHIDUsage_Button_245: number;

declare const kHIDUsage_Button_246: number;

declare const kHIDUsage_Button_247: number;

declare const kHIDUsage_Button_248: number;

declare const kHIDUsage_Button_249: number;

declare const kHIDUsage_Button_25: number;

declare const kHIDUsage_Button_250: number;

declare const kHIDUsage_Button_251: number;

declare const kHIDUsage_Button_252: number;

declare const kHIDUsage_Button_253: number;

declare const kHIDUsage_Button_254: number;

declare const kHIDUsage_Button_255: number;

declare const kHIDUsage_Button_26: number;

declare const kHIDUsage_Button_27: number;

declare const kHIDUsage_Button_28: number;

declare const kHIDUsage_Button_29: number;

declare const kHIDUsage_Button_3: number;

declare const kHIDUsage_Button_30: number;

declare const kHIDUsage_Button_31: number;

declare const kHIDUsage_Button_32: number;

declare const kHIDUsage_Button_33: number;

declare const kHIDUsage_Button_34: number;

declare const kHIDUsage_Button_35: number;

declare const kHIDUsage_Button_36: number;

declare const kHIDUsage_Button_37: number;

declare const kHIDUsage_Button_38: number;

declare const kHIDUsage_Button_39: number;

declare const kHIDUsage_Button_4: number;

declare const kHIDUsage_Button_40: number;

declare const kHIDUsage_Button_41: number;

declare const kHIDUsage_Button_42: number;

declare const kHIDUsage_Button_43: number;

declare const kHIDUsage_Button_44: number;

declare const kHIDUsage_Button_45: number;

declare const kHIDUsage_Button_46: number;

declare const kHIDUsage_Button_47: number;

declare const kHIDUsage_Button_48: number;

declare const kHIDUsage_Button_49: number;

declare const kHIDUsage_Button_5: number;

declare const kHIDUsage_Button_50: number;

declare const kHIDUsage_Button_51: number;

declare const kHIDUsage_Button_52: number;

declare const kHIDUsage_Button_53: number;

declare const kHIDUsage_Button_54: number;

declare const kHIDUsage_Button_55: number;

declare const kHIDUsage_Button_56: number;

declare const kHIDUsage_Button_57: number;

declare const kHIDUsage_Button_58: number;

declare const kHIDUsage_Button_59: number;

declare const kHIDUsage_Button_6: number;

declare const kHIDUsage_Button_60: number;

declare const kHIDUsage_Button_61: number;

declare const kHIDUsage_Button_62: number;

declare const kHIDUsage_Button_63: number;

declare const kHIDUsage_Button_64: number;

declare const kHIDUsage_Button_65: number;

declare const kHIDUsage_Button_65535: number;

declare const kHIDUsage_Button_66: number;

declare const kHIDUsage_Button_67: number;

declare const kHIDUsage_Button_68: number;

declare const kHIDUsage_Button_69: number;

declare const kHIDUsage_Button_7: number;

declare const kHIDUsage_Button_70: number;

declare const kHIDUsage_Button_71: number;

declare const kHIDUsage_Button_72: number;

declare const kHIDUsage_Button_73: number;

declare const kHIDUsage_Button_74: number;

declare const kHIDUsage_Button_75: number;

declare const kHIDUsage_Button_76: number;

declare const kHIDUsage_Button_77: number;

declare const kHIDUsage_Button_78: number;

declare const kHIDUsage_Button_79: number;

declare const kHIDUsage_Button_8: number;

declare const kHIDUsage_Button_80: number;

declare const kHIDUsage_Button_81: number;

declare const kHIDUsage_Button_82: number;

declare const kHIDUsage_Button_83: number;

declare const kHIDUsage_Button_84: number;

declare const kHIDUsage_Button_85: number;

declare const kHIDUsage_Button_86: number;

declare const kHIDUsage_Button_87: number;

declare const kHIDUsage_Button_88: number;

declare const kHIDUsage_Button_89: number;

declare const kHIDUsage_Button_9: number;

declare const kHIDUsage_Button_90: number;

declare const kHIDUsage_Button_91: number;

declare const kHIDUsage_Button_92: number;

declare const kHIDUsage_Button_93: number;

declare const kHIDUsage_Button_94: number;

declare const kHIDUsage_Button_95: number;

declare const kHIDUsage_Button_96: number;

declare const kHIDUsage_Button_97: number;

declare const kHIDUsage_Button_98: number;

declare const kHIDUsage_Button_99: number;

declare const kHIDUsage_CC_Autofocus: number;

declare const kHIDUsage_CC_Shutter: number;

declare const kHIDUsage_CC_Undefined: number;

declare const kHIDUsage_Csmr_3DModeSelect: number;

declare const kHIDUsage_Csmr_AC: number;

declare const kHIDUsage_Csmr_ACAddToCart: number;

declare const kHIDUsage_Csmr_ACAllCaps: number;

declare const kHIDUsage_Csmr_ACAttachComment: number;

declare const kHIDUsage_Csmr_ACAttachFile: number;

declare const kHIDUsage_Csmr_ACBack: number;

declare const kHIDUsage_Csmr_ACBold: number;

declare const kHIDUsage_Csmr_ACBookmarks: number;

declare const kHIDUsage_Csmr_ACBulletedList: number;

declare const kHIDUsage_Csmr_ACBuyOrCheckout: number;

declare const kHIDUsage_Csmr_ACCancel: number;

declare const kHIDUsage_Csmr_ACCatalog: number;

declare const kHIDUsage_Csmr_ACClearAlarm: number;

declare const kHIDUsage_Csmr_ACClose: number;

declare const kHIDUsage_Csmr_ACCollapse: number;

declare const kHIDUsage_Csmr_ACCollapseAll: number;

declare const kHIDUsage_Csmr_ACCopy: number;

declare const kHIDUsage_Csmr_ACCut: number;

declare const kHIDUsage_Csmr_ACDelete: number;

declare const kHIDUsage_Csmr_ACDemote: number;

declare const kHIDUsage_Csmr_ACDesktopShowAllApplications: number;

declare const kHIDUsage_Csmr_ACDesktopShowAllWindows: number;

declare const kHIDUsage_Csmr_ACDetachComment: number;

declare const kHIDUsage_Csmr_ACDistributeH: number;

declare const kHIDUsage_Csmr_ACDistributeV: number;

declare const kHIDUsage_Csmr_ACDownload: number;

declare const kHIDUsage_Csmr_ACEdit: number;

declare const kHIDUsage_Csmr_ACEditTimeZones: number;

declare const kHIDUsage_Csmr_ACExit: number;

declare const kHIDUsage_Csmr_ACExpand: number;

declare const kHIDUsage_Csmr_ACExpandAll: number;

declare const kHIDUsage_Csmr_ACFilter: number;

declare const kHIDUsage_Csmr_ACFind: number;

declare const kHIDUsage_Csmr_ACFindandReplace: number;

declare const kHIDUsage_Csmr_ACFlipHorizontal: number;

declare const kHIDUsage_Csmr_ACFlipVertical: number;

declare const kHIDUsage_Csmr_ACFontColor: number;

declare const kHIDUsage_Csmr_ACFontSelect: number;

declare const kHIDUsage_Csmr_ACFontSize: number;

declare const kHIDUsage_Csmr_ACFormat: number;

declare const kHIDUsage_Csmr_ACForward: number;

declare const kHIDUsage_Csmr_ACForwardMessage: number;

declare const kHIDUsage_Csmr_ACFullScreenView: number;

declare const kHIDUsage_Csmr_ACGoTo: number;

declare const kHIDUsage_Csmr_ACHistory: number;

declare const kHIDUsage_Csmr_ACHome: number;

declare const kHIDUsage_Csmr_ACIndentyDecrease: number;

declare const kHIDUsage_Csmr_ACIndentyIncrease: number;

declare const kHIDUsage_Csmr_ACInsertColumn: number;

declare const kHIDUsage_Csmr_ACInsertFile: number;

declare const kHIDUsage_Csmr_ACInsertMode: number;

declare const kHIDUsage_Csmr_ACInsertObject: number;

declare const kHIDUsage_Csmr_ACInsertPicture: number;

declare const kHIDUsage_Csmr_ACInsertRow: number;

declare const kHIDUsage_Csmr_ACInsertSymbol: number;

declare const kHIDUsage_Csmr_ACItalics: number;

declare const kHIDUsage_Csmr_ACJustifyBlockH: number;

declare const kHIDUsage_Csmr_ACJustifyBlockV: number;

declare const kHIDUsage_Csmr_ACJustifyBottom: number;

declare const kHIDUsage_Csmr_ACJustifyCenterH: number;

declare const kHIDUsage_Csmr_ACJustifyCenterV: number;

declare const kHIDUsage_Csmr_ACJustifyLeft: number;

declare const kHIDUsage_Csmr_ACJustifyRight: number;

declare const kHIDUsage_Csmr_ACJustifyTop: number;

declare const kHIDUsage_Csmr_ACKeyboardLayoutSelect: number;

declare const kHIDUsage_Csmr_ACLock: number;

declare const kHIDUsage_Csmr_ACMaximize: number;

declare const kHIDUsage_Csmr_ACMerge: number;

declare const kHIDUsage_Csmr_ACMinimize: number;

declare const kHIDUsage_Csmr_ACMirrorHorizontal: number;

declare const kHIDUsage_Csmr_ACMirrorVertical: number;

declare const kHIDUsage_Csmr_ACNavigationGuidance: number;

declare const kHIDUsage_Csmr_ACNew: number;

declare const kHIDUsage_Csmr_ACNewWindow: number;

declare const kHIDUsage_Csmr_ACNextLink: number;

declare const kHIDUsage_Csmr_ACNo: number;

declare const kHIDUsage_Csmr_ACNormalView: number;

declare const kHIDUsage_Csmr_ACNumberedList: number;

declare const kHIDUsage_Csmr_ACOpen: number;

declare const kHIDUsage_Csmr_ACPan: number;

declare const kHIDUsage_Csmr_ACPanLeft: number;

declare const kHIDUsage_Csmr_ACPanRight: number;

declare const kHIDUsage_Csmr_ACPaste: number;

declare const kHIDUsage_Csmr_ACPasteSpecial: number;

declare const kHIDUsage_Csmr_ACPreviousLink: number;

declare const kHIDUsage_Csmr_ACPrint: number;

declare const kHIDUsage_Csmr_ACPrintPreview: number;

declare const kHIDUsage_Csmr_ACPromote: number;

declare const kHIDUsage_Csmr_ACProperties: number;

declare const kHIDUsage_Csmr_ACProtect: number;

declare const kHIDUsage_Csmr_ACRedoOrRepeat: number;

declare const kHIDUsage_Csmr_ACRefresh: number;

declare const kHIDUsage_Csmr_ACRename: number;

declare const kHIDUsage_Csmr_ACReply: number;

declare const kHIDUsage_Csmr_ACReplyAll: number;

declare const kHIDUsage_Csmr_ACResetAlarm: number;

declare const kHIDUsage_Csmr_ACResize: number;

declare const kHIDUsage_Csmr_ACRestartNumbering: number;

declare const kHIDUsage_Csmr_ACRotate: number;

declare const kHIDUsage_Csmr_ACSave: number;

declare const kHIDUsage_Csmr_ACSaveAndClose: number;

declare const kHIDUsage_Csmr_ACScroll: number;

declare const kHIDUsage_Csmr_ACScrollDown: number;

declare const kHIDUsage_Csmr_ACScrollUp: number;

declare const kHIDUsage_Csmr_ACSearch: number;

declare const kHIDUsage_Csmr_ACSelectColumn: number;

declare const kHIDUsage_Csmr_ACSelectObject: number;

declare const kHIDUsage_Csmr_ACSelectParagraph: number;

declare const kHIDUsage_Csmr_ACSelectRow: number;

declare const kHIDUsage_Csmr_ACSelectSentence: number;

declare const kHIDUsage_Csmr_ACSelectTable: number;

declare const kHIDUsage_Csmr_ACSelectTimeZone: number;

declare const kHIDUsage_Csmr_ACSelectWord: number;

declare const kHIDUsage_Csmr_ACSend: number;

declare const kHIDUsage_Csmr_ACSendOrReceive: number;

declare const kHIDUsage_Csmr_ACSendTo: number;

declare const kHIDUsage_Csmr_ACSetAlarm: number;

declare const kHIDUsage_Csmr_ACSetBorders: number;

declare const kHIDUsage_Csmr_ACSetClock: number;

declare const kHIDUsage_Csmr_ACSnoozeAlarm: number;

declare const kHIDUsage_Csmr_ACSort: number;

declare const kHIDUsage_Csmr_ACSortAscending: number;

declare const kHIDUsage_Csmr_ACSortDescending: number;

declare const kHIDUsage_Csmr_ACSplit: number;

declare const kHIDUsage_Csmr_ACStop: number;

declare const kHIDUsage_Csmr_ACStrikethrough: number;

declare const kHIDUsage_Csmr_ACSubscript: number;

declare const kHIDUsage_Csmr_ACSubscriptions: number;

declare const kHIDUsage_Csmr_ACSuperscript: number;

declare const kHIDUsage_Csmr_ACSynchronize: number;

declare const kHIDUsage_Csmr_ACTileHorizontally: number;

declare const kHIDUsage_Csmr_ACTileVertically: number;

declare const kHIDUsage_Csmr_ACUnderline: number;

declare const kHIDUsage_Csmr_ACUndo: number;

declare const kHIDUsage_Csmr_ACUnlock: number;

declare const kHIDUsage_Csmr_ACUnprotect: number;

declare const kHIDUsage_Csmr_ACUpload: number;

declare const kHIDUsage_Csmr_ACViewClock: number;

declare const kHIDUsage_Csmr_ACViewComment: number;

declare const kHIDUsage_Csmr_ACViewToggle: number;

declare const kHIDUsage_Csmr_ACYes: number;

declare const kHIDUsage_Csmr_ACZoom: number;

declare const kHIDUsage_Csmr_ACZoomIn: number;

declare const kHIDUsage_Csmr_ACZoomOut: number;

declare const kHIDUsage_Csmr_AL: number;

declare const kHIDUsage_Csmr_ALAOrVCaptureOrPlayback: number;

declare const kHIDUsage_Csmr_ALAlarms: number;

declare const kHIDUsage_Csmr_ALAudioBrowser: number;

declare const kHIDUsage_Csmr_ALAudioPlayer: number;

declare const kHIDUsage_Csmr_ALCalculator: number;

declare const kHIDUsage_Csmr_ALCalendarOrSchedule: number;

declare const kHIDUsage_Csmr_ALCheckbookOrFinance: number;

declare const kHIDUsage_Csmr_ALClock: number;

declare const kHIDUsage_Csmr_ALCommandLineProcessorOrRun: number;

declare const kHIDUsage_Csmr_ALConsumerControlConfiguration: number;

declare const kHIDUsage_Csmr_ALContactsOrAddressBook: number;

declare const kHIDUsage_Csmr_ALControlPanel: number;

declare const kHIDUsage_Csmr_ALCustomizedCorporateNewsBrowser: number;

declare const kHIDUsage_Csmr_ALDatabaseApp: number;

declare const kHIDUsage_Csmr_ALDesktop: number;

declare const kHIDUsage_Csmr_ALDictionary: number;

declare const kHIDUsage_Csmr_ALDigitalRightsManager: number;

declare const kHIDUsage_Csmr_ALDigitalWallet: number;

declare const kHIDUsage_Csmr_ALDocuments: number;

declare const kHIDUsage_Csmr_ALEmailReader: number;

declare const kHIDUsage_Csmr_ALEncryption: number;

declare const kHIDUsage_Csmr_ALEntertainmentContentBrowser: number;

declare const kHIDUsage_Csmr_ALFileBrowser: number;

declare const kHIDUsage_Csmr_ALGrammerCheck: number;

declare const kHIDUsage_Csmr_ALGraphicsEditor: number;

declare const kHIDUsage_Csmr_ALImageBrowser: number;

declare const kHIDUsage_Csmr_ALInstantMessaging: number;

declare const kHIDUsage_Csmr_ALIntegratedHelpCenter: number;

declare const kHIDUsage_Csmr_ALInternetBrowser: number;

declare const kHIDUsage_Csmr_ALKeyboardLayout: number;

declare const kHIDUsage_Csmr_ALLANOrWANBrowser: number;

declare const kHIDUsage_Csmr_ALLaunchButtonConfigurationTool: number;

declare const kHIDUsage_Csmr_ALLocalMachineBrowser: number;

declare const kHIDUsage_Csmr_ALLogOrJournalOrTimecard: number;

declare const kHIDUsage_Csmr_ALLogoff: number;

declare const kHIDUsage_Csmr_ALLogon: number;

declare const kHIDUsage_Csmr_ALLogonOrLogoff: number;

declare const kHIDUsage_Csmr_ALMarketMonitorOrFinanceBrowser: number;

declare const kHIDUsage_Csmr_ALMovieBrowser: number;

declare const kHIDUsage_Csmr_ALNavigation: number;

declare const kHIDUsage_Csmr_ALNetworkChat: number;

declare const kHIDUsage_Csmr_ALNetworkConference: number;

declare const kHIDUsage_Csmr_ALNewsreader: number;

declare const kHIDUsage_Csmr_ALNextTaskOrApplication: number;

declare const kHIDUsage_Csmr_ALOEMFeatureBrowser: number;

declare const kHIDUsage_Csmr_ALOEMHelp: number;

declare const kHIDUsage_Csmr_ALOnlineActivityBrowswer: number;

declare const kHIDUsage_Csmr_ALOnlineCommunity: number;

declare const kHIDUsage_Csmr_ALOnlineShoppingBrowswer: number;

declare const kHIDUsage_Csmr_ALPowerStatus: number;

declare const kHIDUsage_Csmr_ALPreemptiveHaltTaskOrApplication: number;

declare const kHIDUsage_Csmr_ALPresentationApp: number;

declare const kHIDUsage_Csmr_ALPreviousTaskOrApplication: number;

declare const kHIDUsage_Csmr_ALProcessOrTaskManager: number;

declare const kHIDUsage_Csmr_ALProgrammableButtonConfiguration: number;

declare const kHIDUsage_Csmr_ALRemoteNetworkingOrISPConnect: number;

declare const kHIDUsage_Csmr_ALResearchOrSearchBrowswer: number;

declare const kHIDUsage_Csmr_ALScreenSaver: number;

declare const kHIDUsage_Csmr_ALSmartCardInformationOrHelp: number;

declare const kHIDUsage_Csmr_ALSpellCheck: number;

declare const kHIDUsage_Csmr_ALSpreadsheet: number;

declare const kHIDUsage_Csmr_ALTaskOrProjectManager: number;

declare const kHIDUsage_Csmr_ALTelephonyOrDialer: number;

declare const kHIDUsage_Csmr_ALTerminalLockOrScreensaver: number;

declare const kHIDUsage_Csmr_ALTextEditor: number;

declare const kHIDUsage_Csmr_ALThesaurus: number;

declare const kHIDUsage_Csmr_ALVirusProtection: number;

declare const kHIDUsage_Csmr_ALVoicemail: number;

declare const kHIDUsage_Csmr_ALWirelessStatus: number;

declare const kHIDUsage_Csmr_ALWordProcessor: number;

declare const kHIDUsage_Csmr_AMOrPM: number;

declare const kHIDUsage_Csmr_AlternateAudioDecrement: number;

declare const kHIDUsage_Csmr_AlternateAudioIncrement: number;

declare const kHIDUsage_Csmr_ApplicationLaunchButtons: number;

declare const kHIDUsage_Csmr_Aspect: number;

declare const kHIDUsage_Csmr_Assign: number;

declare const kHIDUsage_Csmr_Balance: number;

declare const kHIDUsage_Csmr_BalanceLeft: number;

declare const kHIDUsage_Csmr_BalanceRight: number;

declare const kHIDUsage_Csmr_Bass: number;

declare const kHIDUsage_Csmr_BassBoost: number;

declare const kHIDUsage_Csmr_BassDecrement: number;

declare const kHIDUsage_Csmr_BassIncrement: number;

declare const kHIDUsage_Csmr_BlueMenuButton: number;

declare const kHIDUsage_Csmr_BroadcastMode: number;

declare const kHIDUsage_Csmr_Channel: number;

declare const kHIDUsage_Csmr_ChannelCenter: number;

declare const kHIDUsage_Csmr_ChannelCenterFront: number;

declare const kHIDUsage_Csmr_ChannelDecrement: number;

declare const kHIDUsage_Csmr_ChannelFront: number;

declare const kHIDUsage_Csmr_ChannelIncrement: number;

declare const kHIDUsage_Csmr_ChannelLeft: number;

declare const kHIDUsage_Csmr_ChannelLowFrequencyEnhancement: number;

declare const kHIDUsage_Csmr_ChannelRight: number;

declare const kHIDUsage_Csmr_ChannelSide: number;

declare const kHIDUsage_Csmr_ChannelSurround: number;

declare const kHIDUsage_Csmr_ChannelTop: number;

declare const kHIDUsage_Csmr_ChannelUnknown: number;

declare const kHIDUsage_Csmr_ClearMark: number;

declare const kHIDUsage_Csmr_ClimateControlEnable: number;

declare const kHIDUsage_Csmr_ClosedCaption: number;

declare const kHIDUsage_Csmr_ClosedCaptionSelect: number;

declare const kHIDUsage_Csmr_ConsumerControl: number;

declare const kHIDUsage_Csmr_CounterReset: number;

declare const kHIDUsage_Csmr_Daily: number;

declare const kHIDUsage_Csmr_DataOnScreen: number;

declare const kHIDUsage_Csmr_DisplayBacklightToggle: number;

declare const kHIDUsage_Csmr_DisplayBrightness: number;

declare const kHIDUsage_Csmr_DisplayBrightnessDecrement: number;

declare const kHIDUsage_Csmr_DisplayBrightnessIncrement: number;

declare const kHIDUsage_Csmr_DisplayBrightnessMaximum: number;

declare const kHIDUsage_Csmr_DisplayBrightnessMinimum: number;

declare const kHIDUsage_Csmr_DisplayBrightnessSetAutoBrightness: number;

declare const kHIDUsage_Csmr_DuressAlarm: number;

declare const kHIDUsage_Csmr_Eject: number;

declare const kHIDUsage_Csmr_EnterChannel: number;

declare const kHIDUsage_Csmr_EnterDisc: number;

declare const kHIDUsage_Csmr_ExtendedPlay: number;

declare const kHIDUsage_Csmr_FanEnable: number;

declare const kHIDUsage_Csmr_FanSpeed: number;

declare const kHIDUsage_Csmr_FastForward: number;

declare const kHIDUsage_Csmr_FireAlarm: number;

declare const kHIDUsage_Csmr_FrameBack: number;

declare const kHIDUsage_Csmr_FrameForward: number;

declare const kHIDUsage_Csmr_FunctionButtons: number;

declare const kHIDUsage_Csmr_GenericGUIApplicationControls: number;

declare const kHIDUsage_Csmr_GraphicEqualizer: number;

declare const kHIDUsage_Csmr_GreenMenuButton: number;

declare const kHIDUsage_Csmr_Headphone: number;

declare const kHIDUsage_Csmr_Help: number;

declare const kHIDUsage_Csmr_HoldupAlarm: number;

declare const kHIDUsage_Csmr_Illumination: number;

declare const kHIDUsage_Csmr_KeyboardBrightnessDecrement: number;

declare const kHIDUsage_Csmr_KeyboardBrightnessIncrement: number;

declare const kHIDUsage_Csmr_LightEnable: number;

declare const kHIDUsage_Csmr_LightIlluminationLevel: number;

declare const kHIDUsage_Csmr_LongPlay: number;

declare const kHIDUsage_Csmr_Loudness: number;

declare const kHIDUsage_Csmr_MPX: number;

declare const kHIDUsage_Csmr_Mark: number;

declare const kHIDUsage_Csmr_Media: number;

declare const kHIDUsage_Csmr_MediaSelectCD: number;

declare const kHIDUsage_Csmr_MediaSelectCable: number;

declare const kHIDUsage_Csmr_MediaSelectCall: number;

declare const kHIDUsage_Csmr_MediaSelectComputer: number;

declare const kHIDUsage_Csmr_MediaSelectDVD: number;

declare const kHIDUsage_Csmr_MediaSelectGames: number;

declare const kHIDUsage_Csmr_MediaSelectHome: number;

declare const kHIDUsage_Csmr_MediaSelectMessages: number;

declare const kHIDUsage_Csmr_MediaSelectProgramGuide: number;

declare const kHIDUsage_Csmr_MediaSelectSatellite: number;

declare const kHIDUsage_Csmr_MediaSelectSecurity: number;

declare const kHIDUsage_Csmr_MediaSelectTV: number;

declare const kHIDUsage_Csmr_MediaSelectTape: number;

declare const kHIDUsage_Csmr_MediaSelectTelephone: number;

declare const kHIDUsage_Csmr_MediaSelectTuner: number;

declare const kHIDUsage_Csmr_MediaSelectVCR: number;

declare const kHIDUsage_Csmr_MediaSelectVideoPhone: number;

declare const kHIDUsage_Csmr_MediaSelectWWW: number;

declare const kHIDUsage_Csmr_MediaSelection: number;

declare const kHIDUsage_Csmr_MedicalAlarm: number;

declare const kHIDUsage_Csmr_Menu: number;

declare const kHIDUsage_Csmr_MenuDown: number;

declare const kHIDUsage_Csmr_MenuEscape: number;

declare const kHIDUsage_Csmr_MenuLeft: number;

declare const kHIDUsage_Csmr_MenuPick: number;

declare const kHIDUsage_Csmr_MenuRight: number;

declare const kHIDUsage_Csmr_MenuUp: number;

declare const kHIDUsage_Csmr_MenuValueDecrease: number;

declare const kHIDUsage_Csmr_MenuValueIncrease: number;

declare const kHIDUsage_Csmr_Microphone: number;

declare const kHIDUsage_Csmr_ModeStep: number;

declare const kHIDUsage_Csmr_Monthly: number;

declare const kHIDUsage_Csmr_Motion: number;

declare const kHIDUsage_Csmr_Mute: number;

declare const kHIDUsage_Csmr_NumericKeyPad: number;

declare const kHIDUsage_Csmr_Once: number;

declare const kHIDUsage_Csmr_OrderMovie: number;

declare const kHIDUsage_Csmr_Pause: number;

declare const kHIDUsage_Csmr_PictureInPictureSwap: number;

declare const kHIDUsage_Csmr_PictureInPictureToggle: number;

declare const kHIDUsage_Csmr_Play: number;

declare const kHIDUsage_Csmr_PlayOrPause: number;

declare const kHIDUsage_Csmr_PlayOrSkip: number;

declare const kHIDUsage_Csmr_PlaybackSpeed: number;

declare const kHIDUsage_Csmr_Plus10: number;

declare const kHIDUsage_Csmr_Plus100: number;

declare const kHIDUsage_Csmr_PoliceAlarm: number;

declare const kHIDUsage_Csmr_Power: number;

declare const kHIDUsage_Csmr_ProgrammableButtons: number;

declare const kHIDUsage_Csmr_Proximity: number;

declare const kHIDUsage_Csmr_Quit: number;

declare const kHIDUsage_Csmr_RandomPlay: number;

declare const kHIDUsage_Csmr_RecallLast: number;

declare const kHIDUsage_Csmr_Record: number;

declare const kHIDUsage_Csmr_RedMenuButton: number;

declare const kHIDUsage_Csmr_Repeat: number;

declare const kHIDUsage_Csmr_RepeatFromMark: number;

declare const kHIDUsage_Csmr_Reserved: number;

declare const kHIDUsage_Csmr_Reset: number;

declare const kHIDUsage_Csmr_ReturnToMark: number;

declare const kHIDUsage_Csmr_Rewind: number;

declare const kHIDUsage_Csmr_RoomTemperature: number;

declare const kHIDUsage_Csmr_ScanNextTrack: number;

declare const kHIDUsage_Csmr_ScanPreviousTrack: number;

declare const kHIDUsage_Csmr_SearchMarkBackwards: number;

declare const kHIDUsage_Csmr_SearchMarkForward: number;

declare const kHIDUsage_Csmr_SecurityEnable: number;

declare const kHIDUsage_Csmr_SelectDisc: number;

declare const kHIDUsage_Csmr_Selection: number;

declare const kHIDUsage_Csmr_ShowCounter: number;

declare const kHIDUsage_Csmr_Sleep: number;

declare const kHIDUsage_Csmr_SleepAfter: number;

declare const kHIDUsage_Csmr_SleepMode: number;

declare const kHIDUsage_Csmr_Slow: number;

declare const kHIDUsage_Csmr_SlowTracking: number;

declare const kHIDUsage_Csmr_Snapshot: number;

declare const kHIDUsage_Csmr_SpeakerSystem: number;

declare const kHIDUsage_Csmr_Speed: number;

declare const kHIDUsage_Csmr_StandardPlay: number;

declare const kHIDUsage_Csmr_Still: number;

declare const kHIDUsage_Csmr_Stop: number;

declare const kHIDUsage_Csmr_StopOrEject: number;

declare const kHIDUsage_Csmr_SubChannel: number;

declare const kHIDUsage_Csmr_SubChannelDecrement: number;

declare const kHIDUsage_Csmr_SubChannelIncrement: number;

declare const kHIDUsage_Csmr_SurroundMode: number;

declare const kHIDUsage_Csmr_TrackNormal: number;

declare const kHIDUsage_Csmr_Tracking: number;

declare const kHIDUsage_Csmr_TrackingDecrement: number;

declare const kHIDUsage_Csmr_TrackingIncrement: number;

declare const kHIDUsage_Csmr_Treble: number;

declare const kHIDUsage_Csmr_TrebleDecrement: number;

declare const kHIDUsage_Csmr_TrebleIncrement: number;

declare const kHIDUsage_Csmr_VCROrTV: number;

declare const kHIDUsage_Csmr_VCRPlus: number;

declare const kHIDUsage_Csmr_VoiceCommand: number;

declare const kHIDUsage_Csmr_Volume: number;

declare const kHIDUsage_Csmr_VolumeDecrement: number;

declare const kHIDUsage_Csmr_VolumeIncrement: number;

declare const kHIDUsage_Csmr_Weekly: number;

declare const kHIDUsage_Csmr_YellowMenuButton: number;

declare const kHIDUsage_Dig_3DDigitizer: number;

declare const kHIDUsage_Dig_Altitude: number;

declare const kHIDUsage_Dig_Armature: number;

declare const kHIDUsage_Dig_ArticulatedArm: number;

declare const kHIDUsage_Dig_Azimuth: number;

declare const kHIDUsage_Dig_BarrelPressure: number;

declare const kHIDUsage_Dig_BarrelSwitch: number;

declare const kHIDUsage_Dig_BatteryStrength: number;

declare const kHIDUsage_Dig_ContactCount: number;

declare const kHIDUsage_Dig_ContactCountMaximum: number;

declare const kHIDUsage_Dig_ContactIdentifier: number;

declare const kHIDUsage_Dig_CoordinateMeasuringMachine: number;

declare const kHIDUsage_Dig_DataValid: number;

declare const kHIDUsage_Dig_DeviceConfiguration: number;

declare const kHIDUsage_Dig_DeviceIdentifier: number;

declare const kHIDUsage_Dig_DeviceMode: number;

declare const kHIDUsage_Dig_DeviceSettings: number;

declare const kHIDUsage_Dig_Digitizer: number;

declare const kHIDUsage_Dig_Eraser: number;

declare const kHIDUsage_Dig_Finger: number;

declare const kHIDUsage_Dig_FreeSpaceWand: number;

declare const kHIDUsage_Dig_GestureCharacter: number;

declare const kHIDUsage_Dig_GestureCharacterData: number;

declare const kHIDUsage_Dig_GestureCharacterDataLength: number;

declare const kHIDUsage_Dig_GestureCharacterEnable: number;

declare const kHIDUsage_Dig_GestureCharacterEncoding: number;

declare const kHIDUsage_Dig_GestureCharacterEncodingUTF16BE: number;

declare const kHIDUsage_Dig_GestureCharacterEncodingUTF16LE: number;

declare const kHIDUsage_Dig_GestureCharacterEncodingUTF32BE: number;

declare const kHIDUsage_Dig_GestureCharacterEncodingUTF32LE: number;

declare const kHIDUsage_Dig_GestureCharacterEncodingUTF8: number;

declare const kHIDUsage_Dig_GestureCharacterQuality: number;

declare const kHIDUsage_Dig_Height: number;

declare const kHIDUsage_Dig_InRange: number;

declare const kHIDUsage_Dig_Invert: number;

declare const kHIDUsage_Dig_LightPen: number;

declare const kHIDUsage_Dig_MultiplePointDigitizer: number;

declare const kHIDUsage_Dig_Pen: number;

declare const kHIDUsage_Dig_ProgramChangeKeys: number;

declare const kHIDUsage_Dig_Puck: number;

declare const kHIDUsage_Dig_Quality: number;

declare const kHIDUsage_Dig_RelativeScanTime: number;

declare const kHIDUsage_Dig_ReportRate: number;

declare const kHIDUsage_Dig_Reserved: number;

declare const kHIDUsage_Dig_SecondaryTipSwitch: number;

declare const kHIDUsage_Dig_StereoPlotter: number;

declare const kHIDUsage_Dig_Stylus: number;

declare const kHIDUsage_Dig_SurfaceSwitch: number;

declare const kHIDUsage_Dig_TabletFunctionKeys: number;

declare const kHIDUsage_Dig_TabletPick: number;

declare const kHIDUsage_Dig_Tap: number;

declare const kHIDUsage_Dig_TipPressure: number;

declare const kHIDUsage_Dig_TipSwitch: number;

declare const kHIDUsage_Dig_Touch: number;

declare const kHIDUsage_Dig_TouchPad: number;

declare const kHIDUsage_Dig_TouchScreen: number;

declare const kHIDUsage_Dig_TouchValid: number;

declare const kHIDUsage_Dig_TransducerIndex: number;

declare const kHIDUsage_Dig_Twist: number;

declare const kHIDUsage_Dig_Untouch: number;

declare const kHIDUsage_Dig_WhiteBoard: number;

declare const kHIDUsage_Dig_Width: number;

declare const kHIDUsage_Dig_XTilt: number;

declare const kHIDUsage_Dig_YTilt: number;

declare const kHIDUsage_GD_AssistiveControl: number;

declare const kHIDUsage_GD_AssistiveControlCompatible: number;

declare const kHIDUsage_GD_ByteCount: number;

declare const kHIDUsage_GD_CountedBuffer: number;

declare const kHIDUsage_GD_DPadDown: number;

declare const kHIDUsage_GD_DPadLeft: number;

declare const kHIDUsage_GD_DPadRight: number;

declare const kHIDUsage_GD_DPadUp: number;

declare const kHIDUsage_GD_Dial: number;

declare const kHIDUsage_GD_GamePad: number;

declare const kHIDUsage_GD_Hatswitch: number;

declare const kHIDUsage_GD_IndexTrigger: number;

declare const kHIDUsage_GD_Joystick: number;

declare const kHIDUsage_GD_Keyboard: number;

declare const kHIDUsage_GD_Keypad: number;

declare const kHIDUsage_GD_MotionWakeup: number;

declare const kHIDUsage_GD_Mouse: number;

declare const kHIDUsage_GD_MultiAxisController: number;

declare const kHIDUsage_GD_PalmTrigger: number;

declare const kHIDUsage_GD_Pointer: number;

declare const kHIDUsage_GD_Reserved: number;

declare const kHIDUsage_GD_Rx: number;

declare const kHIDUsage_GD_Ry: number;

declare const kHIDUsage_GD_Rz: number;

declare const kHIDUsage_GD_Select: number;

declare const kHIDUsage_GD_Slider: number;

declare const kHIDUsage_GD_SpatialController: number;

declare const kHIDUsage_GD_Start: number;

declare const kHIDUsage_GD_SystemAppMenu: number;

declare const kHIDUsage_GD_SystemContextMenu: number;

declare const kHIDUsage_GD_SystemControl: number;

declare const kHIDUsage_GD_SystemMainMenu: number;

declare const kHIDUsage_GD_SystemMenu: number;

declare const kHIDUsage_GD_SystemMenuDown: number;

declare const kHIDUsage_GD_SystemMenuExit: number;

declare const kHIDUsage_GD_SystemMenuHelp: number;

declare const kHIDUsage_GD_SystemMenuLeft: number;

declare const kHIDUsage_GD_SystemMenuRight: number;

declare const kHIDUsage_GD_SystemMenuSelect: number;

declare const kHIDUsage_GD_SystemMenuUp: number;

declare const kHIDUsage_GD_SystemPowerDown: number;

declare const kHIDUsage_GD_SystemSleep: number;

declare const kHIDUsage_GD_SystemWakeUp: number;

declare const kHIDUsage_GD_TabletPCSystemControls: number;

declare const kHIDUsage_GD_Thumbstick: number;

declare const kHIDUsage_GD_Vbrx: number;

declare const kHIDUsage_GD_Vbry: number;

declare const kHIDUsage_GD_Vbrz: number;

declare const kHIDUsage_GD_Vno: number;

declare const kHIDUsage_GD_Vx: number;

declare const kHIDUsage_GD_Vy: number;

declare const kHIDUsage_GD_Vz: number;

declare const kHIDUsage_GD_Wheel: number;

declare const kHIDUsage_GD_X: number;

declare const kHIDUsage_GD_Y: number;

declare const kHIDUsage_GD_Z: number;

declare const kHIDUsage_Game_3DGameController: number;

declare const kHIDUsage_Game_Bump: number;

declare const kHIDUsage_Game_Flipper: number;

declare const kHIDUsage_Game_GamepadFireOrJump: number;

declare const kHIDUsage_Game_GamepadFormFitting: number;

declare const kHIDUsage_Game_GamepadFormFitting_Compatibility: number;

declare const kHIDUsage_Game_GamepadTrigger: number;

declare const kHIDUsage_Game_Gun: number;

declare const kHIDUsage_Game_GunAutomatic: number;

declare const kHIDUsage_Game_GunBolt: number;

declare const kHIDUsage_Game_GunBurst: number;

declare const kHIDUsage_Game_GunClip: number;

declare const kHIDUsage_Game_GunDevice: number;

declare const kHIDUsage_Game_GunSafety: number;

declare const kHIDUsage_Game_GunSingleShot: number;

declare const kHIDUsage_Game_HeightOfPOV: number;

declare const kHIDUsage_Game_LeanForwardOrBackward: number;

declare const kHIDUsage_Game_LeanRightOrLeft: number;

declare const kHIDUsage_Game_MoveForwardOrBackward: number;

declare const kHIDUsage_Game_MoveRightOrLeft: number;

declare const kHIDUsage_Game_MoveUpOrDown: number;

declare const kHIDUsage_Game_NewGame: number;

declare const kHIDUsage_Game_PinballDevice: number;

declare const kHIDUsage_Game_PitchUpOrDown: number;

declare const kHIDUsage_Game_Player: number;

declare const kHIDUsage_Game_PointofView: number;

declare const kHIDUsage_Game_Reserved: number;

declare const kHIDUsage_Game_RollRightOrLeft: number;

declare const kHIDUsage_Game_SecondaryFlipper: number;

declare const kHIDUsage_Game_ShootBall: number;

declare const kHIDUsage_Game_TurnRightOrLeft: number;

declare const kHIDUsage_GenDevControls_BackgroundControls: number;

declare const kHIDUsage_Keyboard0: number;

declare const kHIDUsage_Keyboard1: number;

declare const kHIDUsage_Keyboard2: number;

declare const kHIDUsage_Keyboard3: number;

declare const kHIDUsage_Keyboard4: number;

declare const kHIDUsage_Keyboard5: number;

declare const kHIDUsage_Keyboard6: number;

declare const kHIDUsage_Keyboard7: number;

declare const kHIDUsage_Keyboard8: number;

declare const kHIDUsage_Keyboard9: number;

declare const kHIDUsage_KeyboardA: number;

declare const kHIDUsage_KeyboardAgain: number;

declare const kHIDUsage_KeyboardAlternateErase: number;

declare const kHIDUsage_KeyboardApplication: number;

declare const kHIDUsage_KeyboardB: number;

declare const kHIDUsage_KeyboardBackslash: number;

declare const kHIDUsage_KeyboardC: number;

declare const kHIDUsage_KeyboardCancel: number;

declare const kHIDUsage_KeyboardCapsLock: number;

declare const kHIDUsage_KeyboardClear: number;

declare const kHIDUsage_KeyboardClearOrAgain: number;

declare const kHIDUsage_KeyboardCloseBracket: number;

declare const kHIDUsage_KeyboardComma: number;

declare const kHIDUsage_KeyboardCopy: number;

declare const kHIDUsage_KeyboardCrSelOrProps: number;

declare const kHIDUsage_KeyboardCut: number;

declare const kHIDUsage_KeyboardD: number;

declare const kHIDUsage_KeyboardDeleteForward: number;

declare const kHIDUsage_KeyboardDeleteOrBackspace: number;

declare const kHIDUsage_KeyboardDownArrow: number;

declare const kHIDUsage_KeyboardE: number;

declare const kHIDUsage_KeyboardEnd: number;

declare const kHIDUsage_KeyboardEqualSign: number;

declare const kHIDUsage_KeyboardErrorRollOver: number;

declare const kHIDUsage_KeyboardErrorUndefined: number;

declare const kHIDUsage_KeyboardEscape: number;

declare const kHIDUsage_KeyboardExSel: number;

declare const kHIDUsage_KeyboardExecute: number;

declare const kHIDUsage_KeyboardF: number;

declare const kHIDUsage_KeyboardF1: number;

declare const kHIDUsage_KeyboardF10: number;

declare const kHIDUsage_KeyboardF11: number;

declare const kHIDUsage_KeyboardF12: number;

declare const kHIDUsage_KeyboardF13: number;

declare const kHIDUsage_KeyboardF14: number;

declare const kHIDUsage_KeyboardF15: number;

declare const kHIDUsage_KeyboardF16: number;

declare const kHIDUsage_KeyboardF17: number;

declare const kHIDUsage_KeyboardF18: number;

declare const kHIDUsage_KeyboardF19: number;

declare const kHIDUsage_KeyboardF2: number;

declare const kHIDUsage_KeyboardF20: number;

declare const kHIDUsage_KeyboardF21: number;

declare const kHIDUsage_KeyboardF22: number;

declare const kHIDUsage_KeyboardF23: number;

declare const kHIDUsage_KeyboardF24: number;

declare const kHIDUsage_KeyboardF3: number;

declare const kHIDUsage_KeyboardF4: number;

declare const kHIDUsage_KeyboardF5: number;

declare const kHIDUsage_KeyboardF6: number;

declare const kHIDUsage_KeyboardF7: number;

declare const kHIDUsage_KeyboardF8: number;

declare const kHIDUsage_KeyboardF9: number;

declare const kHIDUsage_KeyboardFind: number;

declare const kHIDUsage_KeyboardG: number;

declare const kHIDUsage_KeyboardGraveAccentAndTilde: number;

declare const kHIDUsage_KeyboardH: number;

declare const kHIDUsage_KeyboardHelp: number;

declare const kHIDUsage_KeyboardHome: number;

declare const kHIDUsage_KeyboardHyphen: number;

declare const kHIDUsage_KeyboardI: number;

declare const kHIDUsage_KeyboardInsert: number;

declare const kHIDUsage_KeyboardInternational1: number;

declare const kHIDUsage_KeyboardInternational2: number;

declare const kHIDUsage_KeyboardInternational3: number;

declare const kHIDUsage_KeyboardInternational4: number;

declare const kHIDUsage_KeyboardInternational5: number;

declare const kHIDUsage_KeyboardInternational6: number;

declare const kHIDUsage_KeyboardInternational7: number;

declare const kHIDUsage_KeyboardInternational8: number;

declare const kHIDUsage_KeyboardInternational9: number;

declare const kHIDUsage_KeyboardJ: number;

declare const kHIDUsage_KeyboardK: number;

declare const kHIDUsage_KeyboardL: number;

declare const kHIDUsage_KeyboardLANG1: number;

declare const kHIDUsage_KeyboardLANG2: number;

declare const kHIDUsage_KeyboardLANG3: number;

declare const kHIDUsage_KeyboardLANG4: number;

declare const kHIDUsage_KeyboardLANG5: number;

declare const kHIDUsage_KeyboardLANG6: number;

declare const kHIDUsage_KeyboardLANG7: number;

declare const kHIDUsage_KeyboardLANG8: number;

declare const kHIDUsage_KeyboardLANG9: number;

declare const kHIDUsage_KeyboardLeftAlt: number;

declare const kHIDUsage_KeyboardLeftArrow: number;

declare const kHIDUsage_KeyboardLeftControl: number;

declare const kHIDUsage_KeyboardLeftGUI: number;

declare const kHIDUsage_KeyboardLeftShift: number;

declare const kHIDUsage_KeyboardLockingCapsLock: number;

declare const kHIDUsage_KeyboardLockingNumLock: number;

declare const kHIDUsage_KeyboardLockingScrollLock: number;

declare const kHIDUsage_KeyboardM: number;

declare const kHIDUsage_KeyboardMenu: number;

declare const kHIDUsage_KeyboardMute: number;

declare const kHIDUsage_KeyboardN: number;

declare const kHIDUsage_KeyboardNonUSBackslash: number;

declare const kHIDUsage_KeyboardNonUSPound: number;

declare const kHIDUsage_KeyboardO: number;

declare const kHIDUsage_KeyboardOpenBracket: number;

declare const kHIDUsage_KeyboardOper: number;

declare const kHIDUsage_KeyboardOut: number;

declare const kHIDUsage_KeyboardP: number;

declare const kHIDUsage_KeyboardPOSTFail: number;

declare const kHIDUsage_KeyboardPageDown: number;

declare const kHIDUsage_KeyboardPageUp: number;

declare const kHIDUsage_KeyboardPaste: number;

declare const kHIDUsage_KeyboardPause: number;

declare const kHIDUsage_KeyboardPeriod: number;

declare const kHIDUsage_KeyboardPower: number;

declare const kHIDUsage_KeyboardPrintScreen: number;

declare const kHIDUsage_KeyboardPrior: number;

declare const kHIDUsage_KeyboardQ: number;

declare const kHIDUsage_KeyboardQuote: number;

declare const kHIDUsage_KeyboardR: number;

declare const kHIDUsage_KeyboardReturn: number;

declare const kHIDUsage_KeyboardReturnOrEnter: number;

declare const kHIDUsage_KeyboardRightAlt: number;

declare const kHIDUsage_KeyboardRightArrow: number;

declare const kHIDUsage_KeyboardRightControl: number;

declare const kHIDUsage_KeyboardRightGUI: number;

declare const kHIDUsage_KeyboardRightShift: number;

declare const kHIDUsage_KeyboardS: number;

declare const kHIDUsage_KeyboardScrollLock: number;

declare const kHIDUsage_KeyboardSelect: number;

declare const kHIDUsage_KeyboardSemicolon: number;

declare const kHIDUsage_KeyboardSeparator: number;

declare const kHIDUsage_KeyboardSlash: number;

declare const kHIDUsage_KeyboardSpacebar: number;

declare const kHIDUsage_KeyboardStop: number;

declare const kHIDUsage_KeyboardSysReqOrAttention: number;

declare const kHIDUsage_KeyboardT: number;

declare const kHIDUsage_KeyboardTab: number;

declare const kHIDUsage_KeyboardU: number;

declare const kHIDUsage_KeyboardUndo: number;

declare const kHIDUsage_KeyboardUpArrow: number;

declare const kHIDUsage_KeyboardV: number;

declare const kHIDUsage_KeyboardVolumeDown: number;

declare const kHIDUsage_KeyboardVolumeUp: number;

declare const kHIDUsage_KeyboardW: number;

declare const kHIDUsage_KeyboardX: number;

declare const kHIDUsage_KeyboardY: number;

declare const kHIDUsage_KeyboardZ: number;

declare const kHIDUsage_Keyboard_Reserved: number;

declare const kHIDUsage_Keypad0: number;

declare const kHIDUsage_Keypad1: number;

declare const kHIDUsage_Keypad2: number;

declare const kHIDUsage_Keypad3: number;

declare const kHIDUsage_Keypad4: number;

declare const kHIDUsage_Keypad5: number;

declare const kHIDUsage_Keypad6: number;

declare const kHIDUsage_Keypad7: number;

declare const kHIDUsage_Keypad8: number;

declare const kHIDUsage_Keypad9: number;

declare const kHIDUsage_KeypadAsterisk: number;

declare const kHIDUsage_KeypadComma: number;

declare const kHIDUsage_KeypadEnter: number;

declare const kHIDUsage_KeypadEqualSign: number;

declare const kHIDUsage_KeypadEqualSignAS400: number;

declare const kHIDUsage_KeypadHyphen: number;

declare const kHIDUsage_KeypadNumLock: number;

declare const kHIDUsage_KeypadPeriod: number;

declare const kHIDUsage_KeypadPlus: number;

declare const kHIDUsage_KeypadSlash: number;

declare const kHIDUsage_LED_BatteryLow: number;

declare const kHIDUsage_LED_BatteryOK: number;

declare const kHIDUsage_LED_BatteryOperation: number;

declare const kHIDUsage_LED_Busy: number;

declare const kHIDUsage_LED_CAV: number;

declare const kHIDUsage_LED_CLV: number;

declare const kHIDUsage_LED_CallPickup: number;

declare const kHIDUsage_LED_CameraOff: number;

declare const kHIDUsage_LED_CameraOn: number;

declare const kHIDUsage_LED_CapsLock: number;

declare const kHIDUsage_LED_Compose: number;

declare const kHIDUsage_LED_Conference: number;

declare const kHIDUsage_LED_Coverage: number;

declare const kHIDUsage_LED_DataMode: number;

declare const kHIDUsage_LED_DoNotDisturb: number;

declare const kHIDUsage_LED_EqualizerEnable: number;

declare const kHIDUsage_LED_Error: number;

declare const kHIDUsage_LED_ExternalPowerConnected: number;

declare const kHIDUsage_LED_FastBlinkOffTime: number;

declare const kHIDUsage_LED_FastBlinkOnTime: number;

declare const kHIDUsage_LED_FastForward: number;

declare const kHIDUsage_LED_FlashOnTime: number;

declare const kHIDUsage_LED_Forward: number;

declare const kHIDUsage_LED_GenericIndicator: number;

declare const kHIDUsage_LED_HeadSet: number;

declare const kHIDUsage_LED_HighCutFilter: number;

declare const kHIDUsage_LED_Hold: number;

declare const kHIDUsage_LED_IndicatorAmber: number;

declare const kHIDUsage_LED_IndicatorFastBlink: number;

declare const kHIDUsage_LED_IndicatorFlash: number;

declare const kHIDUsage_LED_IndicatorGreen: number;

declare const kHIDUsage_LED_IndicatorOff: number;

declare const kHIDUsage_LED_IndicatorOn: number;

declare const kHIDUsage_LED_IndicatorRed: number;

declare const kHIDUsage_LED_IndicatorSlowBlink: number;

declare const kHIDUsage_LED_Kana: number;

declare const kHIDUsage_LED_LowCutFilter: number;

declare const kHIDUsage_LED_MessageWaiting: number;

declare const kHIDUsage_LED_Microphone: number;

declare const kHIDUsage_LED_Mute: number;

declare const kHIDUsage_LED_NightMode: number;

declare const kHIDUsage_LED_NumLock: number;

declare const kHIDUsage_LED_OffHook: number;

declare const kHIDUsage_LED_OffLine: number;

declare const kHIDUsage_LED_OnLine: number;

declare const kHIDUsage_LED_PaperJam: number;

declare const kHIDUsage_LED_PaperOut: number;

declare const kHIDUsage_LED_Pause: number;

declare const kHIDUsage_LED_Play: number;

declare const kHIDUsage_LED_Player1: number;

declare const kHIDUsage_LED_Player2: number;

declare const kHIDUsage_LED_Player3: number;

declare const kHIDUsage_LED_Player4: number;

declare const kHIDUsage_LED_Player5: number;

declare const kHIDUsage_LED_Player6: number;

declare const kHIDUsage_LED_Player7: number;

declare const kHIDUsage_LED_Player8: number;

declare const kHIDUsage_LED_PlayerIndicator: number;

declare const kHIDUsage_LED_Power: number;

declare const kHIDUsage_LED_Ready: number;

declare const kHIDUsage_LED_Record: number;

declare const kHIDUsage_LED_RecordingFormatDetect: number;

declare const kHIDUsage_LED_Remote: number;

declare const kHIDUsage_LED_Repeat: number;

declare const kHIDUsage_LED_Reserved: number;

declare const kHIDUsage_LED_Reverse: number;

declare const kHIDUsage_LED_Rewind: number;

declare const kHIDUsage_LED_Ring: number;

declare const kHIDUsage_LED_SamplingRateDetect: number;

declare const kHIDUsage_LED_ScrollLock: number;

declare const kHIDUsage_LED_SendCalls: number;

declare const kHIDUsage_LED_Shift: number;

declare const kHIDUsage_LED_SlowBlinkOffTime: number;

declare const kHIDUsage_LED_SlowBlinkOnTime: number;

declare const kHIDUsage_LED_SoundFieldOn: number;

declare const kHIDUsage_LED_Speaker: number;

declare const kHIDUsage_LED_Spinning: number;

declare const kHIDUsage_LED_StandBy: number;

declare const kHIDUsage_LED_Stereo: number;

declare const kHIDUsage_LED_Stop: number;

declare const kHIDUsage_LED_SurroundOn: number;

declare const kHIDUsage_LED_SystemSuspend: number;

declare const kHIDUsage_LED_ToneEnable: number;

declare const kHIDUsage_LED_Usage: number;

declare const kHIDUsage_LED_UsageInUseIndicator: number;

declare const kHIDUsage_LED_UsageIndicatorColor: number;

declare const kHIDUsage_LED_UsageMultiModeIndicator: number;

declare const kHIDUsage_MSR_DeviceReadOnly: number;

declare const kHIDUsage_MSR_Track1Data: number;

declare const kHIDUsage_MSR_Track1Length: number;

declare const kHIDUsage_MSR_Track2Data: number;

declare const kHIDUsage_MSR_Track2Length: number;

declare const kHIDUsage_MSR_Track3Data: number;

declare const kHIDUsage_MSR_Track3Length: number;

declare const kHIDUsage_MSR_TrackData: number;

declare const kHIDUsage_MSR_TrackJISData: number;

declare const kHIDUsage_MSR_TrackJISLength: number;

declare const kHIDUsage_MSR_Undefined: number;

declare const kHIDUsage_Ord_Instance1: number;

declare const kHIDUsage_Ord_Instance2: number;

declare const kHIDUsage_Ord_Instance3: number;

declare const kHIDUsage_Ord_Instance4: number;

declare const kHIDUsage_Ord_Instance65535: number;

declare const kHIDUsage_PD_ActivePower: number;

declare const kHIDUsage_PD_ApparentPower: number;

declare const kHIDUsage_PD_AudibleAlarmControl: number;

declare const kHIDUsage_PD_AwaitingPower: number;

declare const kHIDUsage_PD_BadCount: number;

declare const kHIDUsage_PD_Battery: number;

declare const kHIDUsage_PD_BatteryID: number;

declare const kHIDUsage_PD_BatterySystem: number;

declare const kHIDUsage_PD_BatterySystemID: number;

declare const kHIDUsage_PD_Boost: number;

declare const kHIDUsage_PD_Buck: number;

declare const kHIDUsage_PD_ChangedStatus: number;

declare const kHIDUsage_PD_Charger: number;

declare const kHIDUsage_PD_ChargerID: number;

declare const kHIDUsage_PD_CommunicationLost: number;

declare const kHIDUsage_PD_ConfigActivePower: number;

declare const kHIDUsage_PD_ConfigApparentPower: number;

declare const kHIDUsage_PD_ConfigCurrent: number;

declare const kHIDUsage_PD_ConfigFrequency: number;

declare const kHIDUsage_PD_ConfigHumidity: number;

declare const kHIDUsage_PD_ConfigPercentLoad: number;

declare const kHIDUsage_PD_ConfigTemperature: number;

declare const kHIDUsage_PD_ConfigVoltage: number;

declare const kHIDUsage_PD_Current: number;

declare const kHIDUsage_PD_DelayBeforeReboot: number;

declare const kHIDUsage_PD_DelayBeforeShutdown: number;

declare const kHIDUsage_PD_DelayBeforeStartup: number;

declare const kHIDUsage_PD_Flow: number;

declare const kHIDUsage_PD_FlowID: number;

declare const kHIDUsage_PD_Frequency: number;

declare const kHIDUsage_PD_FrequencyOutOfRange: number;

declare const kHIDUsage_PD_Gang: number;

declare const kHIDUsage_PD_GangID: number;

declare const kHIDUsage_PD_Good: number;

declare const kHIDUsage_PD_HighVoltageTransfer: number;

declare const kHIDUsage_PD_Humidity: number;

declare const kHIDUsage_PD_Initialized: number;

declare const kHIDUsage_PD_Input: number;

declare const kHIDUsage_PD_InputID: number;

declare const kHIDUsage_PD_InternalFailure: number;

declare const kHIDUsage_PD_LowVoltageTransfer: number;

declare const kHIDUsage_PD_ModuleReset: number;

declare const kHIDUsage_PD_Outlet: number;

declare const kHIDUsage_PD_OutletID: number;

declare const kHIDUsage_PD_OutletSystem: number;

declare const kHIDUsage_PD_OutletSystemID: number;

declare const kHIDUsage_PD_Output: number;

declare const kHIDUsage_PD_OutputID: number;

declare const kHIDUsage_PD_OverCharged: number;

declare const kHIDUsage_PD_OverTemperature: number;

declare const kHIDUsage_PD_Overload: number;

declare const kHIDUsage_PD_PercentLoad: number;

declare const kHIDUsage_PD_PeripheralDevice: number;

declare const kHIDUsage_PD_PowerConverter: number;

declare const kHIDUsage_PD_PowerConverterID: number;

declare const kHIDUsage_PD_PowerSummary: number;

declare const kHIDUsage_PD_PowerSummaryID: number;

declare const kHIDUsage_PD_PowerSupply: number;

declare const kHIDUsage_PD_Present: number;

declare const kHIDUsage_PD_PresentStatus: number;

declare const kHIDUsage_PD_ShutdownImminent: number;

declare const kHIDUsage_PD_ShutdownRequested: number;

declare const kHIDUsage_PD_SwitchOffControl: number;

declare const kHIDUsage_PD_SwitchOnControl: number;

declare const kHIDUsage_PD_SwitchOnOff: number;

declare const kHIDUsage_PD_Switchable: number;

declare const kHIDUsage_PD_Temperature: number;

declare const kHIDUsage_PD_Test: number;

declare const kHIDUsage_PD_Tested: number;

declare const kHIDUsage_PD_ToggleControl: number;

declare const kHIDUsage_PD_UPS: number;

declare const kHIDUsage_PD_Undefined: number;

declare const kHIDUsage_PD_Used: number;

declare const kHIDUsage_PD_Voltage: number;

declare const kHIDUsage_PD_VoltageOutOfRange: number;

declare const kHIDUsage_PD_iManufacturer: number;

declare const kHIDUsage_PD_iName: number;

declare const kHIDUsage_PD_iProduct: number;

declare const kHIDUsage_PD_iserialNumber: number;

declare const kHIDUsage_PID_ActuatorOverrideSwitch: number;

declare const kHIDUsage_PID_ActuatorPower: number;

declare const kHIDUsage_PID_ActuatorsEnabled: number;

declare const kHIDUsage_PID_AttackLevel: number;

declare const kHIDUsage_PID_AttackTime: number;

declare const kHIDUsage_PID_AxesEnable: number;

declare const kHIDUsage_PID_BlockFreeReport: number;

declare const kHIDUsage_PID_BlockHandle: number;

declare const kHIDUsage_PID_BlockLoadError: number;

declare const kHIDUsage_PID_BlockLoadFull: number;

declare const kHIDUsage_PID_BlockLoadReport: number;

declare const kHIDUsage_PID_BlockLoadStatus: number;

declare const kHIDUsage_PID_BlockLoadSuccess: number;

declare const kHIDUsage_PID_BlockType: number;

declare const kHIDUsage_PID_CP_Offset: number;

declare const kHIDUsage_PID_CreateNewEffectReport: number;

declare const kHIDUsage_PID_CustomForceData: number;

declare const kHIDUsage_PID_CustomForceDataOffset: number;

declare const kHIDUsage_PID_CustomForceDataReport: number;

declare const kHIDUsage_PID_CustomForceVendorDefinedData: number;

declare const kHIDUsage_PID_DC_DeviceContinue: number;

declare const kHIDUsage_PID_DC_DevicePause: number;

declare const kHIDUsage_PID_DC_DeviceReset: number;

declare const kHIDUsage_PID_DC_DisableActuators: number;

declare const kHIDUsage_PID_DC_EnableActuators: number;

declare const kHIDUsage_PID_DC_StopAllEffects: number;

declare const kHIDUsage_PID_DeadBand: number;

declare const kHIDUsage_PID_DeviceControl: number;

declare const kHIDUsage_PID_DeviceControlReport: number;

declare const kHIDUsage_PID_DeviceGain: number;

declare const kHIDUsage_PID_DeviceGainReport: number;

declare const kHIDUsage_PID_DeviceManagedPool: number;

declare const kHIDUsage_PID_DevicePaused: number;

declare const kHIDUsage_PID_Direction: number;

declare const kHIDUsage_PID_DirectionEnable: number;

declare const kHIDUsage_PID_DownloadForceSample: number;

declare const kHIDUsage_PID_Duration: number;

declare const kHIDUsage_PID_ET_ConstantForce: number;

declare const kHIDUsage_PID_ET_CustomForceData: number;

declare const kHIDUsage_PID_ET_Damper: number;

declare const kHIDUsage_PID_ET_Friction: number;

declare const kHIDUsage_PID_ET_Inertia: number;

declare const kHIDUsage_PID_ET_Ramp: number;

declare const kHIDUsage_PID_ET_SawtoothDown: number;

declare const kHIDUsage_PID_ET_SawtoothUp: number;

declare const kHIDUsage_PID_ET_Sine: number;

declare const kHIDUsage_PID_ET_Spring: number;

declare const kHIDUsage_PID_ET_Square: number;

declare const kHIDUsage_PID_ET_Triangle: number;

declare const kHIDUsage_PID_EffectBlockIndex: number;

declare const kHIDUsage_PID_EffectOperation: number;

declare const kHIDUsage_PID_EffectOperationReport: number;

declare const kHIDUsage_PID_EffectPlaying: number;

declare const kHIDUsage_PID_EffectType: number;

declare const kHIDUsage_PID_FadeLevel: number;

declare const kHIDUsage_PID_FadeTime: number;

declare const kHIDUsage_PID_Gain: number;

declare const kHIDUsage_PID_IsochCustomForceEnable: number;

declare const kHIDUsage_PID_LoopCount: number;

declare const kHIDUsage_PID_Magnitude: number;

declare const kHIDUsage_PID_MoveDestination: number;

declare const kHIDUsage_PID_MoveLength: number;

declare const kHIDUsage_PID_MoveSource: number;

declare const kHIDUsage_PID_NegativeCoefficient: number;

declare const kHIDUsage_PID_NegativeSaturation: number;

declare const kHIDUsage_PID_Normal: number;

declare const kHIDUsage_PID_Offset: number;

declare const kHIDUsage_PID_OpEffectStart: number;

declare const kHIDUsage_PID_OpEffectStartSolo: number;

declare const kHIDUsage_PID_OpEffectStop: number;

declare const kHIDUsage_PID_ParamBlockOffset: number;

declare const kHIDUsage_PID_ParameterBlockSize: number;

declare const kHIDUsage_PID_Period: number;

declare const kHIDUsage_PID_Phase: number;

declare const kHIDUsage_PID_PhysicalInterfaceDevice: number;

declare const kHIDUsage_PID_PoolAlignment: number;

declare const kHIDUsage_PID_PoolMoveReport: number;

declare const kHIDUsage_PID_PoolReport: number;

declare const kHIDUsage_PID_PositiveCoefficient: number;

declare const kHIDUsage_PID_PositiveSaturation: number;

declare const kHIDUsage_PID_RAM_PoolAvailable: number;

declare const kHIDUsage_PID_RAM_PoolSize: number;

declare const kHIDUsage_PID_ROM_EffectBlockCount: number;

declare const kHIDUsage_PID_ROM_Flag: number;

declare const kHIDUsage_PID_ROM_PoolSize: number;

declare const kHIDUsage_PID_RampEnd: number;

declare const kHIDUsage_PID_RampStart: number;

declare const kHIDUsage_PID_Reserved: number;

declare const kHIDUsage_PID_SafetySwitch: number;

declare const kHIDUsage_PID_SampleCount: number;

declare const kHIDUsage_PID_SamplePeriod: number;

declare const kHIDUsage_PID_SetConditionReport: number;

declare const kHIDUsage_PID_SetConstantForceReport: number;

declare const kHIDUsage_PID_SetCustomForceReport: number;

declare const kHIDUsage_PID_SetEffectReport: number;

declare const kHIDUsage_PID_SetEnvelopeReport: number;

declare const kHIDUsage_PID_SetPeriodicReport: number;

declare const kHIDUsage_PID_SetRampForceReport: number;

declare const kHIDUsage_PID_SharedParameterBlocks: number;

declare const kHIDUsage_PID_SimultaneousEffectsMax: number;

declare const kHIDUsage_PID_StartDelay: number;

declare const kHIDUsage_PID_StateReport: number;

declare const kHIDUsage_PID_TriggerButton: number;

declare const kHIDUsage_PID_TriggerRepeatInterval: number;

declare const kHIDUsage_PID_TypeSpecificBlockHandle: number;

declare const kHIDUsage_PID_TypeSpecificBlockOffset: number;

declare const kHIDUsage_Sim_Accelerator: number;

declare const kHIDUsage_Sim_Aileron: number;

declare const kHIDUsage_Sim_AileronTrim: number;

declare const kHIDUsage_Sim_AirplaneSimulationDevice: number;

declare const kHIDUsage_Sim_AntiTorqueControl: number;

declare const kHIDUsage_Sim_AutomobileSimulationDevice: number;

declare const kHIDUsage_Sim_AutopilotEnable: number;

declare const kHIDUsage_Sim_Ballast: number;

declare const kHIDUsage_Sim_BarrelElevation: number;

declare const kHIDUsage_Sim_BicycleCrank: number;

declare const kHIDUsage_Sim_BicycleSimulationDevice: number;

declare const kHIDUsage_Sim_Brake: number;

declare const kHIDUsage_Sim_ChaffRelease: number;

declare const kHIDUsage_Sim_Clutch: number;

declare const kHIDUsage_Sim_CollectiveControl: number;

declare const kHIDUsage_Sim_CyclicControl: number;

declare const kHIDUsage_Sim_CyclicTrim: number;

declare const kHIDUsage_Sim_DiveBrake: number;

declare const kHIDUsage_Sim_DivePlane: number;

declare const kHIDUsage_Sim_ElectronicCountermeasures: number;

declare const kHIDUsage_Sim_Elevator: number;

declare const kHIDUsage_Sim_ElevatorTrim: number;

declare const kHIDUsage_Sim_FlareRelease: number;

declare const kHIDUsage_Sim_FlightCommunications: number;

declare const kHIDUsage_Sim_FlightControlStick: number;

declare const kHIDUsage_Sim_FlightSimulationDevice: number;

declare const kHIDUsage_Sim_FlightStick: number;

declare const kHIDUsage_Sim_FlightYoke: number;

declare const kHIDUsage_Sim_FrontBrake: number;

declare const kHIDUsage_Sim_HandleBars: number;

declare const kHIDUsage_Sim_HelicopterSimulationDevice: number;

declare const kHIDUsage_Sim_LandingGear: number;

declare const kHIDUsage_Sim_MagicCarpetSimulationDevice: number;

declare const kHIDUsage_Sim_MotorcycleSimulationDevice: number;

declare const kHIDUsage_Sim_RearBrake: number;

declare const kHIDUsage_Sim_Reserved: number;

declare const kHIDUsage_Sim_Rudder: number;

declare const kHIDUsage_Sim_SailingSimulationDevice: number;

declare const kHIDUsage_Sim_Shifter: number;

declare const kHIDUsage_Sim_SpaceshipSimulationDevice: number;

declare const kHIDUsage_Sim_SportsSimulationDevice: number;

declare const kHIDUsage_Sim_Steering: number;

declare const kHIDUsage_Sim_SubmarineSimulationDevice: number;

declare const kHIDUsage_Sim_TankSimulationDevice: number;

declare const kHIDUsage_Sim_Throttle: number;

declare const kHIDUsage_Sim_ToeBrake: number;

declare const kHIDUsage_Sim_TrackControl: number;

declare const kHIDUsage_Sim_Trigger: number;

declare const kHIDUsage_Sim_TurretDirection: number;

declare const kHIDUsage_Sim_Weapons: number;

declare const kHIDUsage_Sim_WeaponsArm: number;

declare const kHIDUsage_Sim_WingFlaps: number;

declare const kHIDUsage_Snsr_Biometric: number;

declare const kHIDUsage_Snsr_Biometric_HumanPresence: number;

declare const kHIDUsage_Snsr_Biometric_HumanProximity: number;

declare const kHIDUsage_Snsr_Biometric_HumanTouch: number;

declare const kHIDUsage_Snsr_Data_Biometric: number;

declare const kHIDUsage_Snsr_Data_Biometric_HumanPresence: number;

declare const kHIDUsage_Snsr_Data_Biometric_HumanProximityOutOfRange: number;

declare const kHIDUsage_Snsr_Data_Biometric_HumanProximityRange: number;

declare const kHIDUsage_Snsr_Data_Biometric_HumanTouchState: number;

declare const kHIDUsage_Snsr_Data_Custom: number;

declare const kHIDUsage_Snsr_Data_Custom_BooleanArray: number;

declare const kHIDUsage_Snsr_Data_Custom_Usage: number;

declare const kHIDUsage_Snsr_Data_Custom_Value: number;

declare const kHIDUsage_Snsr_Data_Custom_Value1: number;

declare const kHIDUsage_Snsr_Data_Custom_Value2: number;

declare const kHIDUsage_Snsr_Data_Custom_Value3: number;

declare const kHIDUsage_Snsr_Data_Custom_Value4: number;

declare const kHIDUsage_Snsr_Data_Custom_Value5: number;

declare const kHIDUsage_Snsr_Data_Custom_Value6: number;

declare const kHIDUsage_Snsr_Data_Electrical: number;

declare const kHIDUsage_Snsr_Data_Electrical_Capacitance: number;

declare const kHIDUsage_Snsr_Data_Electrical_Current: number;

declare const kHIDUsage_Snsr_Data_Electrical_ElectricalPower: number;

declare const kHIDUsage_Snsr_Data_Electrical_Frequency: number;

declare const kHIDUsage_Snsr_Data_Electrical_Inductance: number;

declare const kHIDUsage_Snsr_Data_Electrical_PercentOfRange: number;

declare const kHIDUsage_Snsr_Data_Electrical_Period: number;

declare const kHIDUsage_Snsr_Data_Electrical_Resistance: number;

declare const kHIDUsage_Snsr_Data_Electrical_Voltage: number;

declare const kHIDUsage_Snsr_Data_Environmental: number;

declare const kHIDUsage_Snsr_Data_Environmental_AtmosphericPressure: number;

declare const kHIDUsage_Snsr_Data_Environmental_RelativeHumidity: number;

declare const kHIDUsage_Snsr_Data_Environmental_Reserved: number;

declare const kHIDUsage_Snsr_Data_Environmental_Temperature: number;

declare const kHIDUsage_Snsr_Data_Environmental_WindDirection: number;

declare const kHIDUsage_Snsr_Data_Environmental_WindSpeed: number;

declare const kHIDUsage_Snsr_Data_Light: number;

declare const kHIDUsage_Snsr_Data_Light_Chromaticity: number;

declare const kHIDUsage_Snsr_Data_Light_ChromaticityX: number;

declare const kHIDUsage_Snsr_Data_Light_ChromaticityY: number;

declare const kHIDUsage_Snsr_Data_Light_ColorTemperature: number;

declare const kHIDUsage_Snsr_Data_Light_ConsumerIRSentenceReceive: number;

declare const kHIDUsage_Snsr_Data_Light_Illuminance: number;

declare const kHIDUsage_Snsr_Data_Location: number;

declare const kHIDUsage_Snsr_Data_Location_AddressLine1: number;

declare const kHIDUsage_Snsr_Data_Location_AddressLine2: number;

declare const kHIDUsage_Snsr_Data_Location_AltitudeAntennaSeaLevel: number;

declare const kHIDUsage_Snsr_Data_Location_AltitudeEllipsoid: number;

declare const kHIDUsage_Snsr_Data_Location_AltitudeEllipsoidError: number;

declare const kHIDUsage_Snsr_Data_Location_AltitudeSeaLevel: number;

declare const kHIDUsage_Snsr_Data_Location_AltitudeSeaLevelError: number;

declare const kHIDUsage_Snsr_Data_Location_City: number;

declare const kHIDUsage_Snsr_Data_Location_CountryOrRegion: number;

declare const kHIDUsage_Snsr_Data_Location_DifferentialGPSDataAge: number;

declare const kHIDUsage_Snsr_Data_Location_DifferentialReferenceStationID: number;

declare const kHIDUsage_Snsr_Data_Location_ErrorRadius: number;

declare const kHIDUsage_Snsr_Data_Location_FixQuality: number;

declare const kHIDUsage_Snsr_Data_Location_FixQualityDGPS: number;

declare const kHIDUsage_Snsr_Data_Location_FixQualityGPS: number;

declare const kHIDUsage_Snsr_Data_Location_FixQualityNoFix: number;

declare const kHIDUsage_Snsr_Data_Location_FixType: number;

declare const kHIDUsage_Snsr_Data_Location_FixTypeDGPSSPSMode: number;

declare const kHIDUsage_Snsr_Data_Location_FixTypeEstimated: number;

declare const kHIDUsage_Snsr_Data_Location_FixTypeFloatRTK: number;

declare const kHIDUsage_Snsr_Data_Location_FixTypeGPSPPSMode: number;

declare const kHIDUsage_Snsr_Data_Location_FixTypeGPSSPSMode: number;

declare const kHIDUsage_Snsr_Data_Location_FixTypeManualInputMode: number;

declare const kHIDUsage_Snsr_Data_Location_FixTypeNoFix: number;

declare const kHIDUsage_Snsr_Data_Location_FixTypeRealTimeKinematic: number;

declare const kHIDUsage_Snsr_Data_Location_FixTypeSimulatorMode: number;

declare const kHIDUsage_Snsr_Data_Location_GPSOperationMode: number;

declare const kHIDUsage_Snsr_Data_Location_GPSOperationModeAutomatic: number;

declare const kHIDUsage_Snsr_Data_Location_GPSOperationModeManual: number;

declare const kHIDUsage_Snsr_Data_Location_GPSSelectionMode: number;

declare const kHIDUsage_Snsr_Data_Location_GPSSelectionModeAutonomous: number;

declare const kHIDUsage_Snsr_Data_Location_GPSSelectionModeDGPS: number;

declare const kHIDUsage_Snsr_Data_Location_GPSSelectionModeDataNotValid: number;

declare const kHIDUsage_Snsr_Data_Location_GPSSelectionModeEstimated: number;

declare const kHIDUsage_Snsr_Data_Location_GPSSelectionModeManualInput: number;

declare const kHIDUsage_Snsr_Data_Location_GPSSelectionModeSimulator: number;

declare const kHIDUsage_Snsr_Data_Location_GPSStatus: number;

declare const kHIDUsage_Snsr_Data_Location_GPSStatusDataNotValid: number;

declare const kHIDUsage_Snsr_Data_Location_GPSStatusDataValid: number;

declare const kHIDUsage_Snsr_Data_Location_GeoidalSeparation: number;

declare const kHIDUsage_Snsr_Data_Location_HorizontalDilutionOfPrecision: number;

declare const kHIDUsage_Snsr_Data_Location_Latitude: number;

declare const kHIDUsage_Snsr_Data_Location_Longitude: number;

declare const kHIDUsage_Snsr_Data_Location_MagneticHeading: number;

declare const kHIDUsage_Snsr_Data_Location_MagneticVariation: number;

declare const kHIDUsage_Snsr_Data_Location_NMEASentence: number;

declare const kHIDUsage_Snsr_Data_Location_PositionDilutionOfPrecision: number;

declare const kHIDUsage_Snsr_Data_Location_PostalCode: number;

declare const kHIDUsage_Snsr_Data_Location_Reserved: number;

declare const kHIDUsage_Snsr_Data_Location_SatellitesInView: number;

declare const kHIDUsage_Snsr_Data_Location_SatellitesInViewAzimuth: number;

declare const kHIDUsage_Snsr_Data_Location_SatellitesInViewElevation: number;

declare const kHIDUsage_Snsr_Data_Location_SatellitesInViewIDs: number;

declare const kHIDUsage_Snsr_Data_Location_SatellitesInViewPRNs: number;

declare const kHIDUsage_Snsr_Data_Location_SatellitesInViewSNRatios: number;

declare const kHIDUsage_Snsr_Data_Location_SatellitesUsedCount: number;

declare const kHIDUsage_Snsr_Data_Location_SatellitesUsedPRNs: number;

declare const kHIDUsage_Snsr_Data_Location_Speed: number;

declare const kHIDUsage_Snsr_Data_Location_StateOrProvince: number;

declare const kHIDUsage_Snsr_Data_Location_TrueHeading: number;

declare const kHIDUsage_Snsr_Data_Location_VerticalDilutionOfPrecision: number;

declare const kHIDUsage_Snsr_Data_Mechanical: number;

declare const kHIDUsage_Snsr_Data_Mechanical_AbsolutePressure: number;

declare const kHIDUsage_Snsr_Data_Mechanical_BooleanSwitchArrayStates: number;

declare const kHIDUsage_Snsr_Data_Mechanical_BooleanSwitchState: number;

declare const kHIDUsage_Snsr_Data_Mechanical_Force: number;

declare const kHIDUsage_Snsr_Data_Mechanical_GaugePressure: number;

declare const kHIDUsage_Snsr_Data_Mechanical_MultivalueSwitchValue: number;

declare const kHIDUsage_Snsr_Data_Mechanical_Strain: number;

declare const kHIDUsage_Snsr_Data_Mechanical_Weight: number;

declare const kHIDUsage_Snsr_Data_Motion: number;

declare const kHIDUsage_Snsr_Data_Motion_Acceleration: number;

declare const kHIDUsage_Snsr_Data_Motion_AccelerationAxisX: number;

declare const kHIDUsage_Snsr_Data_Motion_AccelerationAxisY: number;

declare const kHIDUsage_Snsr_Data_Motion_AccelerationAxisZ: number;

declare const kHIDUsage_Snsr_Data_Motion_AngularPosition: number;

declare const kHIDUsage_Snsr_Data_Motion_AngularPositionXAxis: number;

declare const kHIDUsage_Snsr_Data_Motion_AngularPositionYAxis: number;

declare const kHIDUsage_Snsr_Data_Motion_AngularPositionZAxis: number;

declare const kHIDUsage_Snsr_Data_Motion_AngularVelocity: number;

declare const kHIDUsage_Snsr_Data_Motion_AngularVelocityXAxis: number;

declare const kHIDUsage_Snsr_Data_Motion_AngularVelocityYAxis: number;

declare const kHIDUsage_Snsr_Data_Motion_AngularVelocityZAxis: number;

declare const kHIDUsage_Snsr_Data_Motion_Intensity: number;

declare const kHIDUsage_Snsr_Data_Motion_Speed: number;

declare const kHIDUsage_Snsr_Data_Motion_State: number;

declare const kHIDUsage_Snsr_Data_Orientation: number;

declare const kHIDUsage_Snsr_Data_Orientation_Distance: number;

declare const kHIDUsage_Snsr_Data_Orientation_DistanceOutOfRange: number;

declare const kHIDUsage_Snsr_Data_Orientation_DistanceXAxis: number;

declare const kHIDUsage_Snsr_Data_Orientation_DistanceYAxis: number;

declare const kHIDUsage_Snsr_Data_Orientation_DistanceZAxis: number;

declare const kHIDUsage_Snsr_Data_Orientation_Heading: number;

declare const kHIDUsage_Snsr_Data_Orientation_HeadingCompensatedMagneticNorth: number;

declare const kHIDUsage_Snsr_Data_Orientation_HeadingCompensatedTrueNorth: number;

declare const kHIDUsage_Snsr_Data_Orientation_HeadingMagneticNorth: number;

declare const kHIDUsage_Snsr_Data_Orientation_HeadingTrueNorth: number;

declare const kHIDUsage_Snsr_Data_Orientation_HeadingXAxis: number;

declare const kHIDUsage_Snsr_Data_Orientation_HeadingYAxis: number;

declare const kHIDUsage_Snsr_Data_Orientation_HeadingZAxis: number;

declare const kHIDUsage_Snsr_Data_Orientation_MagneticFlux: number;

declare const kHIDUsage_Snsr_Data_Orientation_MagneticFluxXAxis: number;

declare const kHIDUsage_Snsr_Data_Orientation_MagneticFluxYAxis: number;

declare const kHIDUsage_Snsr_Data_Orientation_MagneticFluxZAxis: number;

declare const kHIDUsage_Snsr_Data_Orientation_Quaternion: number;

declare const kHIDUsage_Snsr_Data_Orientation_RotationMatrix: number;

declare const kHIDUsage_Snsr_Data_Orientation_Tilt: number;

declare const kHIDUsage_Snsr_Data_Orientation_TiltXAxis: number;

declare const kHIDUsage_Snsr_Data_Orientation_TiltYAxis: number;

declare const kHIDUsage_Snsr_Data_Orientation_TiltZAxis: number;

declare const kHIDUsage_Snsr_Data_Scanner: number;

declare const kHIDUsage_Snsr_Data_Scanner_NFCSentenceReceive: number;

declare const kHIDUsage_Snsr_Data_Scanner_RFIDTag40Bit: number;

declare const kHIDUsage_Snsr_Data_Time: number;

declare const kHIDUsage_Snsr_Data_Time_Day: number;

declare const kHIDUsage_Snsr_Data_Time_DayOfWeek: number;

declare const kHIDUsage_Snsr_Data_Time_DayOfWeekFriday: number;

declare const kHIDUsage_Snsr_Data_Time_DayOfWeekMonday: number;

declare const kHIDUsage_Snsr_Data_Time_DayOfWeekSaturday: number;

declare const kHIDUsage_Snsr_Data_Time_DayOfWeekSunday: number;

declare const kHIDUsage_Snsr_Data_Time_DayOfWeekThursday: number;

declare const kHIDUsage_Snsr_Data_Time_DayOfWeekTuesday: number;

declare const kHIDUsage_Snsr_Data_Time_DayOfWeekWednesday: number;

declare const kHIDUsage_Snsr_Data_Time_Hour: number;

declare const kHIDUsage_Snsr_Data_Time_JulianDayOfYear: number;

declare const kHIDUsage_Snsr_Data_Time_Millisecond: number;

declare const kHIDUsage_Snsr_Data_Time_Minute: number;

declare const kHIDUsage_Snsr_Data_Time_Month: number;

declare const kHIDUsage_Snsr_Data_Time_Second: number;

declare const kHIDUsage_Snsr_Data_Time_Timestamp: number;

declare const kHIDUsage_Snsr_Data_Time_Year: number;

declare const kHIDUsage_Snsr_Electrical: number;

declare const kHIDUsage_Snsr_Electrical_Capacitance: number;

declare const kHIDUsage_Snsr_Electrical_Current: number;

declare const kHIDUsage_Snsr_Electrical_Frequency: number;

declare const kHIDUsage_Snsr_Electrical_Inductance: number;

declare const kHIDUsage_Snsr_Electrical_Period: number;

declare const kHIDUsage_Snsr_Electrical_Potentiometer: number;

declare const kHIDUsage_Snsr_Electrical_Power: number;

declare const kHIDUsage_Snsr_Electrical_Resistance: number;

declare const kHIDUsage_Snsr_Electrical_Voltage: number;

declare const kHIDUsage_Snsr_Environmental: number;

declare const kHIDUsage_Snsr_Environmental_AtmosphericPressure: number;

declare const kHIDUsage_Snsr_Environmental_Humidity: number;

declare const kHIDUsage_Snsr_Environmental_Temperature: number;

declare const kHIDUsage_Snsr_Environmental_WindDirection: number;

declare const kHIDUsage_Snsr_Environmental_WindSpeed: number;

declare const kHIDUsage_Snsr_Event: number;

declare const kHIDUsage_Snsr_Event_SensorEvent: number;

declare const kHIDUsage_Snsr_Event_SensorEvent_ChangeSensitivity: number;

declare const kHIDUsage_Snsr_Event_SensorEvent_ComplexTrigger: number;

declare const kHIDUsage_Snsr_Event_SensorEvent_DataUpdated: number;

declare const kHIDUsage_Snsr_Event_SensorEvent_FrequencyExceeded: number;

declare const kHIDUsage_Snsr_Event_SensorEvent_HighThresholdCrossDown: number;

declare const kHIDUsage_Snsr_Event_SensorEvent_HighThresholdCrossUp: number;

declare const kHIDUsage_Snsr_Event_SensorEvent_LowThresholdCrossDown: number;

declare const kHIDUsage_Snsr_Event_SensorEvent_LowThresholdCrossUp: number;

declare const kHIDUsage_Snsr_Event_SensorEvent_PeriodExceeded: number;

declare const kHIDUsage_Snsr_Event_SensorEvent_PollResponse: number;

declare const kHIDUsage_Snsr_Event_SensorEvent_PropertyChanged: number;

declare const kHIDUsage_Snsr_Event_SensorEvent_RangeMaxReached: number;

declare const kHIDUsage_Snsr_Event_SensorEvent_RangeMinReached: number;

declare const kHIDUsage_Snsr_Event_SensorEvent_StateChanged: number;

declare const kHIDUsage_Snsr_Event_SensorEvent_Unknown: number;

declare const kHIDUsage_Snsr_Event_SensorEvent_ZeroThresholdCrossDown: number;

declare const kHIDUsage_Snsr_Event_SensorEvent_ZeroThresholdCrossUp: number;

declare const kHIDUsage_Snsr_Event_SensorState: number;

declare const kHIDUsage_Snsr_Event_SensorState_AccessDenied: number;

declare const kHIDUsage_Snsr_Event_SensorState_Error: number;

declare const kHIDUsage_Snsr_Event_SensorState_Initializing: number;

declare const kHIDUsage_Snsr_Event_SensorState_NoData: number;

declare const kHIDUsage_Snsr_Event_SensorState_NotAvailable: number;

declare const kHIDUsage_Snsr_Event_SensorState_Ready: number;

declare const kHIDUsage_Snsr_Event_SensorState_Undefined: number;

declare const kHIDUsage_Snsr_Light: number;

declare const kHIDUsage_Snsr_Light_AmbientLight: number;

declare const kHIDUsage_Snsr_Light_ConsumerInfrared: number;

declare const kHIDUsage_Snsr_Light_Illuminance: number;

declare const kHIDUsage_Snsr_Location: number;

declare const kHIDUsage_Snsr_Location_Broadcast: number;

declare const kHIDUsage_Snsr_Location_DeadReckoning: number;

declare const kHIDUsage_Snsr_Location_GPS: number;

declare const kHIDUsage_Snsr_Location_Lookup: number;

declare const kHIDUsage_Snsr_Location_Other: number;

declare const kHIDUsage_Snsr_Location_Static: number;

declare const kHIDUsage_Snsr_Location_Triangulation: number;

declare const kHIDUsage_Snsr_Mechanical: number;

declare const kHIDUsage_Snsr_Mechanical_BooleanSwitch: number;

declare const kHIDUsage_Snsr_Mechanical_BooleanSwitchArray: number;

declare const kHIDUsage_Snsr_Mechanical_Force: number;

declare const kHIDUsage_Snsr_Mechanical_HallEffectSwitch: number;

declare const kHIDUsage_Snsr_Mechanical_HapticVibrator: number;

declare const kHIDUsage_Snsr_Mechanical_MultivalueSwitch: number;

declare const kHIDUsage_Snsr_Mechanical_Pressure: number;

declare const kHIDUsage_Snsr_Mechanical_Strain: number;

declare const kHIDUsage_Snsr_Mechanical_Weight: number;

declare const kHIDUsage_Snsr_Modifier_Accuracy: number;

declare const kHIDUsage_Snsr_Modifier_CalibrationMultiplier: number;

declare const kHIDUsage_Snsr_Modifier_CalibrationOffset: number;

declare const kHIDUsage_Snsr_Modifier_ChangeSensitivityAbsolute: number;

declare const kHIDUsage_Snsr_Modifier_ChangeSensitivityPercentRange: number;

declare const kHIDUsage_Snsr_Modifier_ChangeSensitivityPercentRelative: number;

declare const kHIDUsage_Snsr_Modifier_FrequencyMax: number;

declare const kHIDUsage_Snsr_Modifier_Max: number;

declare const kHIDUsage_Snsr_Modifier_Min: number;

declare const kHIDUsage_Snsr_Modifier_None: number;

declare const kHIDUsage_Snsr_Modifier_PeriodMax: number;

declare const kHIDUsage_Snsr_Modifier_ReportInterval: number;

declare const kHIDUsage_Snsr_Modifier_Resolution: number;

declare const kHIDUsage_Snsr_Modifier_ThresholdHigh: number;

declare const kHIDUsage_Snsr_Modifier_ThresholdLow: number;

declare const kHIDUsage_Snsr_Modifier_VendorDefined: number;

declare const kHIDUsage_Snsr_Motion: number;

declare const kHIDUsage_Snsr_Motion_Accelerometer: number;

declare const kHIDUsage_Snsr_Motion_Accelerometer1D: number;

declare const kHIDUsage_Snsr_Motion_Accelerometer2D: number;

declare const kHIDUsage_Snsr_Motion_Accelerometer3D: number;

declare const kHIDUsage_Snsr_Motion_Gyrometer: number;

declare const kHIDUsage_Snsr_Motion_Gyrometer1D: number;

declare const kHIDUsage_Snsr_Motion_Gyrometer2D: number;

declare const kHIDUsage_Snsr_Motion_Gyrometer3D: number;

declare const kHIDUsage_Snsr_Motion_MotionDetector: number;

declare const kHIDUsage_Snsr_Motion_Speedometer: number;

declare const kHIDUsage_Snsr_Orientation: number;

declare const kHIDUsage_Snsr_Orientation_Compass1D: number;

declare const kHIDUsage_Snsr_Orientation_Compass2D: number;

declare const kHIDUsage_Snsr_Orientation_Compass3D: number;

declare const kHIDUsage_Snsr_Orientation_CompassD: number;

declare const kHIDUsage_Snsr_Orientation_DeviceOrientation: number;

declare const kHIDUsage_Snsr_Orientation_Distance1D: number;

declare const kHIDUsage_Snsr_Orientation_Distance2D: number;

declare const kHIDUsage_Snsr_Orientation_Distance3D: number;

declare const kHIDUsage_Snsr_Orientation_DistanceD: number;

declare const kHIDUsage_Snsr_Orientation_Inclinometer1D: number;

declare const kHIDUsage_Snsr_Orientation_Inclinometer2D: number;

declare const kHIDUsage_Snsr_Orientation_Inclinometer3D: number;

declare const kHIDUsage_Snsr_Orientation_InclinometerD: number;

declare const kHIDUsage_Snsr_Other: number;

declare const kHIDUsage_Snsr_Other_Custom: number;

declare const kHIDUsage_Snsr_Other_Generic: number;

declare const kHIDUsage_Snsr_Other_GenericEnumerator: number;

declare const kHIDUsage_Snsr_Property: number;

declare const kHIDUsage_Snsr_Property_Accuracy: number;

declare const kHIDUsage_Snsr_Property_ChangeSensitivityAbsolute: number;

declare const kHIDUsage_Snsr_Property_ChangeSensitivityPercentRange: number;

declare const kHIDUsage_Snsr_Property_ChangeSensitivityPercentRelative: number;

declare const kHIDUsage_Snsr_Property_ConnectionType: number;

declare const kHIDUsage_Snsr_Property_ConnectionType_Attached: number;

declare const kHIDUsage_Snsr_Property_ConnectionType_External: number;

declare const kHIDUsage_Snsr_Property_ConnectionType_Integrated: number;

declare const kHIDUsage_Snsr_Property_Description: number;

declare const kHIDUsage_Snsr_Property_DevicePath: number;

declare const kHIDUsage_Snsr_Property_Environmental: number;

declare const kHIDUsage_Snsr_Property_Environmental_ReferencePressure: number;

declare const kHIDUsage_Snsr_Property_FirmwareVersion: number;

declare const kHIDUsage_Snsr_Property_FriendlyName: number;

declare const kHIDUsage_Snsr_Property_HardwareRevision: number;

declare const kHIDUsage_Snsr_Property_Light: number;

declare const kHIDUsage_Snsr_Property_Light_ConsumerIRSentenceSend: number;

declare const kHIDUsage_Snsr_Property_Location: number;

declare const kHIDUsage_Snsr_Property_Location_AccuracyDefault: number;

declare const kHIDUsage_Snsr_Property_Location_AccuracyHigh: number;

declare const kHIDUsage_Snsr_Property_Location_AccuracyLow: number;

declare const kHIDUsage_Snsr_Property_Location_AccuracyMedium: number;

declare const kHIDUsage_Snsr_Property_Location_DesiredAccuracy: number;

declare const kHIDUsage_Snsr_Property_Manufacturer: number;

declare const kHIDUsage_Snsr_Property_MaxFIFOEvents: number;

declare const kHIDUsage_Snsr_Property_Maximum: number;

declare const kHIDUsage_Snsr_Property_Mechanical: number;

declare const kHIDUsage_Snsr_Property_Mechanical_BackwardVibrationSpeed: number;

declare const kHIDUsage_Snsr_Property_Mechanical_ForwardVibrationSpeed: number;

declare const kHIDUsage_Snsr_Property_Mechanical_VibrationState: number;

declare const kHIDUsage_Snsr_Property_Minimum: number;

declare const kHIDUsage_Snsr_Property_MinimumReportInterval: number;

declare const kHIDUsage_Snsr_Property_Model: number;

declare const kHIDUsage_Snsr_Property_PersistentUniqueID: number;

declare const kHIDUsage_Snsr_Property_PowerState: number;

declare const kHIDUsage_Snsr_Property_PowerState_D0_FullPower: number;

declare const kHIDUsage_Snsr_Property_PowerState_D1_LowPower: number;

declare const kHIDUsage_Snsr_Property_PowerState_D2_Standby: number;

declare const kHIDUsage_Snsr_Property_PowerState_D3_Sleep: number;

declare const kHIDUsage_Snsr_Property_PowerState_D4_PowerOff: number;

declare const kHIDUsage_Snsr_Property_PowerState_Undefined: number;

declare const kHIDUsage_Snsr_Property_ReleaseData: number;

declare const kHIDUsage_Snsr_Property_ReportInterval: number;

declare const kHIDUsage_Snsr_Property_ReportLatency: number;

declare const kHIDUsage_Snsr_Property_ReportingState: number;

declare const kHIDUsage_Snsr_Property_ReportingState_AllEvents: number;

declare const kHIDUsage_Snsr_Property_ReportingState_NoEvents: number;

declare const kHIDUsage_Snsr_Property_ReportingState_ThresholdEvents: number;

declare const kHIDUsage_Snsr_Property_ReportingState_WakeAllEvents: number;

declare const kHIDUsage_Snsr_Property_ReportingState_WakeNoEvents: number;

declare const kHIDUsage_Snsr_Property_ReportingState_WakeThresholdEvents: number;

declare const kHIDUsage_Snsr_Property_Resolution: number;

declare const kHIDUsage_Snsr_Property_ResponseCurve: number;

declare const kHIDUsage_Snsr_Property_SamplingRate: number;

declare const kHIDUsage_Snsr_Property_Scanner: number;

declare const kHIDUsage_Snsr_Property_Scanner_NFCSentenceSend: number;

declare const kHIDUsage_Snsr_Property_SensorStatus: number;

declare const kHIDUsage_Snsr_Property_SerialNumber: number;

declare const kHIDUsage_Snsr_Property_Time: number;

declare const kHIDUsage_Snsr_Property_Time_ArmAlarm: number;

declare const kHIDUsage_Snsr_Property_Time_DaylightSavingsTimeObserved: number;

declare const kHIDUsage_Snsr_Property_Time_TimeTrimAdjustment: number;

declare const kHIDUsage_Snsr_Property_Time_TimeZoneName: number;

declare const kHIDUsage_Snsr_Property_Time_TimeZoneOffsetFromUTC: number;

declare const kHIDUsage_Snsr_Scanner: number;

declare const kHIDUsage_Snsr_Scanner_Barcode: number;

declare const kHIDUsage_Snsr_Scanner_NFC: number;

declare const kHIDUsage_Snsr_Scanner_RFID: number;

declare const kHIDUsage_Snsr_Sensor: number;

declare const kHIDUsage_Snsr_Time: number;

declare const kHIDUsage_Snsr_Time_AlarmTimer: number;

declare const kHIDUsage_Snsr_Time_RealTimeClock: number;

declare const kHIDUsage_Snsr_Undefined: number;

declare const kHIDUsage_Sprt_10Iron: number;

declare const kHIDUsage_Sprt_11Iron: number;

declare const kHIDUsage_Sprt_1Iron: number;

declare const kHIDUsage_Sprt_1Wood: number;

declare const kHIDUsage_Sprt_2Iron: number;

declare const kHIDUsage_Sprt_3Iron: number;

declare const kHIDUsage_Sprt_3Wood: number;

declare const kHIDUsage_Sprt_4Iron: number;

declare const kHIDUsage_Sprt_5Iron: number;

declare const kHIDUsage_Sprt_5Wood: number;

declare const kHIDUsage_Sprt_6Iron: number;

declare const kHIDUsage_Sprt_7Iron: number;

declare const kHIDUsage_Sprt_7Wood: number;

declare const kHIDUsage_Sprt_8Iron: number;

declare const kHIDUsage_Sprt_9Iron: number;

declare const kHIDUsage_Sprt_9Wood: number;

declare const kHIDUsage_Sprt_BaseballBat: number;

declare const kHIDUsage_Sprt_GolfClub: number;

declare const kHIDUsage_Sprt_LoftWedge: number;

declare const kHIDUsage_Sprt_Oar: number;

declare const kHIDUsage_Sprt_PowerWedge: number;

declare const kHIDUsage_Sprt_Putter: number;

declare const kHIDUsage_Sprt_Rate: number;

declare const kHIDUsage_Sprt_Reserved: number;

declare const kHIDUsage_Sprt_RowingMachine: number;

declare const kHIDUsage_Sprt_SandWedge: number;

declare const kHIDUsage_Sprt_Slope: number;

declare const kHIDUsage_Sprt_StickFaceAngle: number;

declare const kHIDUsage_Sprt_StickFollowThrough: number;

declare const kHIDUsage_Sprt_StickHeelOrToe: number;

declare const kHIDUsage_Sprt_StickHeight: number;

declare const kHIDUsage_Sprt_StickSpeed: number;

declare const kHIDUsage_Sprt_StickTempo: number;

declare const kHIDUsage_Sprt_StickType: number;

declare const kHIDUsage_Sprt_Treadmill: number;

declare const kHIDUsage_TFon_Reserved: number;

declare const kHIDUsage_Tfon_AlternateFunction: number;

declare const kHIDUsage_Tfon_AnswerOnOrOff: number;

declare const kHIDUsage_Tfon_AnsweringMachine: number;

declare const kHIDUsage_Tfon_CallWaitingTone: number;

declare const kHIDUsage_Tfon_CallerID: number;

declare const kHIDUsage_Tfon_Conference: number;

declare const kHIDUsage_Tfon_ConfirmationTone1: number;

declare const kHIDUsage_Tfon_ConfirmationTone2: number;

declare const kHIDUsage_Tfon_DoNotDisturb: number;

declare const kHIDUsage_Tfon_Drop: number;

declare const kHIDUsage_Tfon_Feature: number;

declare const kHIDUsage_Tfon_Flash: number;

declare const kHIDUsage_Tfon_ForwardCalls: number;

declare const kHIDUsage_Tfon_Handset: number;

declare const kHIDUsage_Tfon_Headset: number;

declare const kHIDUsage_Tfon_Hold: number;

declare const kHIDUsage_Tfon_HookSwitch: number;

declare const kHIDUsage_Tfon_InsideDialTone: number;

declare const kHIDUsage_Tfon_InsideRingTone: number;

declare const kHIDUsage_Tfon_InsideRingback: number;

declare const kHIDUsage_Tfon_Line: number;

declare const kHIDUsage_Tfon_LineBusyTone: number;

declare const kHIDUsage_Tfon_Message: number;

declare const kHIDUsage_Tfon_MessageControls: number;

declare const kHIDUsage_Tfon_OutsideDialTone: number;

declare const kHIDUsage_Tfon_OutsideRingTone: number;

declare const kHIDUsage_Tfon_OutsideRingback: number;

declare const kHIDUsage_Tfon_Park: number;

declare const kHIDUsage_Tfon_Phone: number;

declare const kHIDUsage_Tfon_PhoneDirectory: number;

declare const kHIDUsage_Tfon_PhoneKey0: number;

declare const kHIDUsage_Tfon_PhoneKey1: number;

declare const kHIDUsage_Tfon_PhoneKey2: number;

declare const kHIDUsage_Tfon_PhoneKey3: number;

declare const kHIDUsage_Tfon_PhoneKey4: number;

declare const kHIDUsage_Tfon_PhoneKey5: number;

declare const kHIDUsage_Tfon_PhoneKey6: number;

declare const kHIDUsage_Tfon_PhoneKey7: number;

declare const kHIDUsage_Tfon_PhoneKey8: number;

declare const kHIDUsage_Tfon_PhoneKey9: number;

declare const kHIDUsage_Tfon_PhoneKeyA: number;

declare const kHIDUsage_Tfon_PhoneKeyB: number;

declare const kHIDUsage_Tfon_PhoneKeyC: number;

declare const kHIDUsage_Tfon_PhoneKeyD: number;

declare const kHIDUsage_Tfon_PhoneKeyPound: number;

declare const kHIDUsage_Tfon_PhoneKeyStar: number;

declare const kHIDUsage_Tfon_PhoneMute: number;

declare const kHIDUsage_Tfon_PriorityRingTone: number;

declare const kHIDUsage_Tfon_PriorityRingback: number;

declare const kHIDUsage_Tfon_ProgrammableButton: number;

declare const kHIDUsage_Tfon_RecallNumber: number;

declare const kHIDUsage_Tfon_Redial: number;

declare const kHIDUsage_Tfon_ReorderTone: number;

declare const kHIDUsage_Tfon_Ring: number;

declare const kHIDUsage_Tfon_RingEnable: number;

declare const kHIDUsage_Tfon_ScreenCalls: number;

declare const kHIDUsage_Tfon_SpeakerPhone: number;

declare const kHIDUsage_Tfon_SpeedDial: number;

declare const kHIDUsage_Tfon_StoreNumber: number;

declare const kHIDUsage_Tfon_TelephonyKeyPad: number;

declare const kHIDUsage_Tfon_TonesOff: number;

declare const kHIDUsage_Tfon_Transfer: number;

declare const kHIDUsage_Tfon_VoiceMail: number;

declare const kHIDUsage_Undefined: number;

declare const kHIDUsage_VR_AnimatronicDevice: number;

declare const kHIDUsage_VR_Belt: number;

declare const kHIDUsage_VR_BodySuit: number;

declare const kHIDUsage_VR_DisplayEnable: number;

declare const kHIDUsage_VR_Flexor: number;

declare const kHIDUsage_VR_Glove: number;

declare const kHIDUsage_VR_HandTracker: number;

declare const kHIDUsage_VR_HeadMountedDisplay: number;

declare const kHIDUsage_VR_HeadTracker: number;

declare const kHIDUsage_VR_Oculometer: number;

declare const kHIDUsage_VR_Reserved: number;

declare const kHIDUsage_VR_StereoEnable: number;

declare const kHIDUsage_VR_Vest: number;

declare const kHIDUsage_WD_CalibrationCount: number;

declare const kHIDUsage_WD_DataScaling: number;

declare const kHIDUsage_WD_DataWeight: number;

declare const kHIDUsage_WD_EnforcedZeroReturn: number;

declare const kHIDUsage_WD_RezeroCount: number;

declare const kHIDUsage_WD_ScaleAtrributeReport: number;

declare const kHIDUsage_WD_ScaleControlReport: number;

declare const kHIDUsage_WD_ScaleDataReport: number;

declare const kHIDUsage_WD_ScaleScaleClassGeneric: number;

declare const kHIDUsage_WD_ScaleScaleClassIIIEnglish: number;

declare const kHIDUsage_WD_ScaleScaleClassIIILEnglish: number;

declare const kHIDUsage_WD_ScaleScaleClassIIILMetric: number;

declare const kHIDUsage_WD_ScaleScaleClassIIIMetric: number;

declare const kHIDUsage_WD_ScaleScaleClassIIMetric: number;

declare const kHIDUsage_WD_ScaleScaleClassIMetric: number;

declare const kHIDUsage_WD_ScaleScaleClassIMetricCL: number;

declare const kHIDUsage_WD_ScaleScaleClassIVEnglish: number;

declare const kHIDUsage_WD_ScaleScaleClassIVMetric: number;

declare const kHIDUsage_WD_ScaleScaleDevice: number;

declare const kHIDUsage_WD_ScaleStatisticsReport: number;

declare const kHIDUsage_WD_ScaleStatus: number;

declare const kHIDUsage_WD_ScaleStatusFault: number;

declare const kHIDUsage_WD_ScaleStatusInMotion: number;

declare const kHIDUsage_WD_ScaleStatusOverWeightLimit: number;

declare const kHIDUsage_WD_ScaleStatusReport: number;

declare const kHIDUsage_WD_ScaleStatusRequiresCalibration: number;

declare const kHIDUsage_WD_ScaleStatusRequiresRezeroing: number;

declare const kHIDUsage_WD_ScaleStatusStableAtZero: number;

declare const kHIDUsage_WD_ScaleStatusUnderZero: number;

declare const kHIDUsage_WD_ScaleStatusWeightStable: number;

declare const kHIDUsage_WD_ScaleWeightLimitReport: number;

declare const kHIDUsage_WD_Undefined: number;

declare const kHIDUsage_WD_WeighingDevice: number;

declare const kHIDUsage_WD_WeightUnit: number;

declare const kHIDUsage_WD_WeightUnitAvoirTon: number;

declare const kHIDUsage_WD_WeightUnitCarats: number;

declare const kHIDUsage_WD_WeightUnitGrains: number;

declare const kHIDUsage_WD_WeightUnitGram: number;

declare const kHIDUsage_WD_WeightUnitKilogram: number;

declare const kHIDUsage_WD_WeightUnitMetricTon: number;

declare const kHIDUsage_WD_WeightUnitMilligram: number;

declare const kHIDUsage_WD_WeightUnitOunce: number;

declare const kHIDUsage_WD_WeightUnitPennyweights: number;

declare const kHIDUsage_WD_WeightUnitPound: number;

declare const kHIDUsage_WD_WeightUnitTaels: number;

declare const kHIDUsage_WD_WeightUnitTroyOunce: number;

declare const kHIDUsage_WD_ZeroScale: number;

declare const kIOHIDElementFlagsBufferedByteMask: number;

declare const kIOHIDElementFlagsConstantMask: number;

declare const kIOHIDElementFlagsNoPreferredMask: number;

declare const kIOHIDElementFlagsNonLinearMask: number;

declare const kIOHIDElementFlagsNullStateMask: number;

declare const kIOHIDElementFlagsRelativeMask: number;

declare const kIOHIDElementFlagsVariableMask: number;

declare const kIOHIDElementFlagsVolativeMask: number;

declare const kIOHIDElementFlagsWrapMask: number;

declare const kIOHIDReportOptionNotInterrupt: number;

declare const kIOHIDReportOptionVariableSize: number;

declare const kIOHIDValueOptionsFlagPrevious: number;

declare const kIOHIDValueOptionsFlagRelativeSimple: number;

declare const kIOHIDValueOptionsUpdateElementValues: number;

declare const kIOHIDValueScaleTypeCalibrated: number;

declare const kIOHIDValueScaleTypeExponent: number;

declare const kIOHIDValueScaleTypePhysical: number;
