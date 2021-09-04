
declare function DSM_Entry(pOrigin: TW_IDENTITY, pDest: TW_IDENTITY, DG: number, DAT: number, MSG: number, pData: string | any): number;

declare function DS_Entry(pOrigin: TW_IDENTITY, DG: number, DAT: number, MSG: number, pData: string | any): number;

interface TW_ARRAY {
	ItemType: number;
	NumItems: number;
	ItemList: number;
}
declare var TW_ARRAY: TW_ARRAY;

interface TW_AUDIOINFO {
	Name: number;
	Reserved: number;
}
declare var TW_AUDIOINFO: TW_AUDIOINFO;

interface TW_CALLBACK {
	CallBackProc: string;
	RefCon: string;
	Message: number;
}
declare var TW_CALLBACK: TW_CALLBACK;

interface TW_CAPABILITY {
	Cap: number;
	ConType: number;
	hContainer: string;
}
declare var TW_CAPABILITY: TW_CAPABILITY;

interface TW_CAPEXT {
	Cap: number;
	Properties: number;
}
declare var TW_CAPEXT: TW_CAPEXT;

interface TW_CIECOLOR {
	ColorSpace: number;
	LowEndian: number;
	DeviceDependent: number;
	VersionNumber: number;
	StageABC: TW_TRANSFORMSTAGE;
	StageLMN: TW_TRANSFORMSTAGE;
	WhitePoint: TW_CIEPOINT;
	BlackPoint: TW_CIEPOINT;
	WhitePaper: TW_CIEPOINT;
	BlackInk: TW_CIEPOINT;
	Samples: TW_FIX32;
}
declare var TW_CIECOLOR: TW_CIECOLOR;

interface TW_CIEPOINT {
	X: TW_FIX32;
	Y: TW_FIX32;
	Z: TW_FIX32;
}
declare var TW_CIEPOINT: TW_CIEPOINT;

interface TW_CUSTOMDSDATA {
	InfoLength: number;
	hData: string;
}
declare var TW_CUSTOMDSDATA: TW_CUSTOMDSDATA;

interface TW_DECODEFUNCTION {
	StartIn: TW_FIX32;
	BreakIn: TW_FIX32;
	EndIn: TW_FIX32;
	StartOut: TW_FIX32;
	BreakOut: TW_FIX32;
	EndOut: TW_FIX32;
	Gamma: TW_FIX32;
	SampleCount: TW_FIX32;
}
declare var TW_DECODEFUNCTION: TW_DECODEFUNCTION;

interface TW_DEVICEEVENT {
	Event: number;
	DeviceName: number;
	BatteryMinutes: number;
	BatteryPercentage: number;
	PowerSupply: number;
	XResolution: TW_FIX32;
	YResolution: TW_FIX32;
	FlashUsed2: number;
	AutomaticCapture: number;
	TimeBeforeFirstCapture: number;
	TimeBetweenCaptures: number;
}
declare var TW_DEVICEEVENT: TW_DEVICEEVENT;

interface TW_ELEMENT8 {
	Index: number;
	Channel1: number;
	Channel2: number;
	Channel3: number;
}
declare var TW_ELEMENT8: TW_ELEMENT8;

interface TW_ENUMERATION {
	ItemType: number;
	NumItems: number;
	CurrentIndex: number;
	DefaultIndex: number;
	ItemList: number;
}
declare var TW_ENUMERATION: TW_ENUMERATION;

interface TW_EVENT {
	pEvent: string;
	TWMessage: number;
}
declare var TW_EVENT: TW_EVENT;

interface TW_EXTIMAGEINFO {
	NumInfos: number;
	Info: TW_INFO;
}
declare var TW_EXTIMAGEINFO: TW_EXTIMAGEINFO;

interface TW_FILESYSTEM {
	InputName: number;
	OutputName: number;
	Context: string;
	Recursive: number;
	FileType: number;
	Size: number;
	CreateTimeDate: number;
	ModifiedTimeDate: number;
	FreeSpace: number;
	NewImageSize: number;
	NumberOfFiles: number;
	NumberOfSnippets: number;
	DeviceGroupMask: number;
	Reserved: number;
}
declare var TW_FILESYSTEM: TW_FILESYSTEM;

interface TW_FIX32 {
	Whole: number;
	Frac: number;
}
declare var TW_FIX32: TW_FIX32;

interface TW_FRAME {
	Left: TW_FIX32;
	Top: TW_FIX32;
	Right: TW_FIX32;
	Bottom: TW_FIX32;
}
declare var TW_FRAME: TW_FRAME;

interface TW_GRAYRESPONSE {
	Response: TW_ELEMENT8;
}
declare var TW_GRAYRESPONSE: TW_GRAYRESPONSE;

interface TW_IDENTITY {
	Id: string;
	Version: TW_VERSION;
	ProtocolMajor: number;
	ProtocolMinor: number;
	SupportedGroups: number;
	Manufacturer: number;
	ProductFamily: number;
	ProductName: number;
}
declare var TW_IDENTITY: TW_IDENTITY;

interface TW_IMAGEINFO {
	XResolution: TW_FIX32;
	YResolution: TW_FIX32;
	ImageWidth: number;
	ImageLength: number;
	SamplesPerPixel: number;
	BitsPerSample: number;
	BitsPerPixel: number;
	Planar: number;
	PixelType: number;
	Compression: number;
}
declare var TW_IMAGEINFO: TW_IMAGEINFO;

interface TW_IMAGELAYOUT {
	Frame: TW_FRAME;
	DocumentNumber: number;
	PageNumber: number;
	FrameNumber: number;
}
declare var TW_IMAGELAYOUT: TW_IMAGELAYOUT;

interface TW_IMAGEMEMXFER {
	Compression: number;
	BytesPerRow: number;
	Columns: number;
	Rows: number;
	XOffset: number;
	YOffset: number;
	BytesWritten: number;
	Memory: TW_MEMORY;
}
declare var TW_IMAGEMEMXFER: TW_IMAGEMEMXFER;

interface TW_INFO {
	InfoID: number;
	ItemType: number;
	NumItems: number;
	CondCode: number;
	Item: number;
}
declare var TW_INFO: TW_INFO;

interface TW_JPEGCOMPRESSION {
	ColorSpace: number;
	SubSampling: number;
	NumComponents: number;
	RestartFrequency: number;
	QuantMap: number;
	QuantTable: TW_MEMORY;
	HuffmanMap: number;
	HuffmanDC: TW_MEMORY;
	HuffmanAC: TW_MEMORY;
}
declare var TW_JPEGCOMPRESSION: TW_JPEGCOMPRESSION;

interface TW_MEMORY {
	Flags: number;
	Length: number;
	TheMem: string;
}
declare var TW_MEMORY: TW_MEMORY;

interface TW_ONEVALUE {
	ItemType: number;
	Item: number;
}
declare var TW_ONEVALUE: TW_ONEVALUE;

interface TW_PALETTE8 {
	NumColors: number;
	PaletteType: number;
	Colors: TW_ELEMENT8;
}
declare var TW_PALETTE8: TW_PALETTE8;

interface TW_PASSTHRU {
	pCommand: string;
	CommandBytes: number;
	Direction: number;
	pData: string;
	DataBytes: number;
	DataBytesXfered: number;
}
declare var TW_PASSTHRU: TW_PASSTHRU;

interface TW_RANGE {
	ItemType: number;
	MinValue: number;
	MaxValue: number;
	StepSize: number;
	DefaultValue: number;
	CurrentValue: number;
}
declare var TW_RANGE: TW_RANGE;

interface TW_RGBRESPONSE {
	Response: TW_ELEMENT8;
}
declare var TW_RGBRESPONSE: TW_RGBRESPONSE;

interface TW_SETUPAUDIOFILEXFER {
	FileName: number;
	Format: number;
	VRefNum: number;
}
declare var TW_SETUPAUDIOFILEXFER: TW_SETUPAUDIOFILEXFER;

interface TW_SETUPFILEXFER {
	FileName: number;
	Format: number;
	VRefNum: number;
}
declare var TW_SETUPFILEXFER: TW_SETUPFILEXFER;

interface TW_SETUPFILEXFER2 {
	FileName: string;
	FileNameType: number;
	Format: number;
	VRefNum: number;
	ParID: number;
}
declare var TW_SETUPFILEXFER2: TW_SETUPFILEXFER2;

interface TW_SETUPMEMXFER {
	MinBufSize: number;
	MaxBufSize: number;
	Preferred: number;
}
declare var TW_SETUPMEMXFER: TW_SETUPMEMXFER;

interface TW_STATUS {
	ConditionCode: number;
	Reserved: number;
}
declare var TW_STATUS: TW_STATUS;

interface TW_TRANSFORMSTAGE {
	Decode: TW_DECODEFUNCTION;
	Mix: TW_FIX32;
}
declare var TW_TRANSFORMSTAGE: TW_TRANSFORMSTAGE;

interface TW_TWUNKDSENTRYPARAMS {
	destFlag: number;
	dest: TW_IDENTITY;
	dataGroup: number;
	dataArgType: number;
	message: number;
	pDataSize: number;
}
declare var TW_TWUNKDSENTRYPARAMS: TW_TWUNKDSENTRYPARAMS;

interface TW_TWUNKDSENTRYRETURN {
	returnCode: number;
	conditionCode: number;
	pDataSize: number;
}
declare var TW_TWUNKDSENTRYRETURN: TW_TWUNKDSENTRYRETURN;

interface TW_TWUNKIDENTITY {
	identity: TW_IDENTITY;
	dsPath: number;
}
declare var TW_TWUNKIDENTITY: TW_TWUNKIDENTITY;

interface TW_USERINTERFACE {
	ShowUI: number;
	ModalUI: number;
	hParent: string;
}
declare var TW_USERINTERFACE: TW_USERINTERFACE;

interface TW_VERSION {
	MajorNum: number;
	MinorNum: number;
	Language: number;
	Country: number;
	Info: number;
}
declare var TW_VERSION: TW_VERSION;
