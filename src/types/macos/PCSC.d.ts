
interface SCARD_IO_REQUEST {
	dwProtocol: number;
	cbPciLength: number;
}
declare var SCARD_IO_REQUEST: SCARD_IO_REQUEST;

interface SCARD_READERSTATE_A {
	szReader: string;
	pvUserData: any;
	dwCurrentState: number;
	dwEventState: number;
	cbAtr: number;
	rgbAtr: number;
}
declare var SCARD_READERSTATE_A: SCARD_READERSTATE_A;

declare function SCardBeginTransaction(hCard: number): number;

declare function SCardCancel(hContext: number): number;

declare function SCardCancelTransaction(hCard: number): number;

declare function SCardConnect(hContext: number, szReader: string | any, dwShareMode: number, dwPreferredProtocols: number, phCard: number, pdwActiveProtocol: number): number;

declare function SCardControl(hCard: number, pbSendBuffer: any, cbSendLength: number, pbRecvBuffer: any, pcbRecvLength: number): number;

declare function SCardControl132(hCard: number, dwControlCode: number, pbSendBuffer: any, cbSendLength: number, pbRecvBuffer: any, cbRecvLength: number, lpBytesReturned: number): number;

declare function SCardDisconnect(hCard: number, dwDisposition: number): number;

declare function SCardEndTransaction(hCard: number, dwDisposition: number): number;

declare function SCardEstablishContext(dwScope: number, pvReserved1: any, pvReserved2: any, phContext: number): number;

declare function SCardGetAttrib(hCard: number, dwAttrId: number, pbAttr: string | any, pcbAttrLen: number): number;

declare function SCardGetStatusChange(hContext: number, dwTimeout: number, rgReaderStates: SCARD_READERSTATE_A, cReaders: number): number;

declare function SCardIsValidContext(hContext: number): number;

declare function SCardListReaderGroups(hContext: number, mszGroups: string | any, pcchGroups: number): number;

declare function SCardListReaders(hContext: number, mszGroups: string | any, mszReaders: string | any, pcchReaders: number): number;

declare function SCardReconnect(hCard: number, dwShareMode: number, dwPreferredProtocols: number, dwInitialization: number, pdwActiveProtocol: number): number;

declare function SCardReleaseContext(hContext: number): number;

declare function SCardSetAttrib(hCard: number, dwAttrId: number, pbAttr: string | any, cbAttrLen: number): number;

declare function SCardSetTimeout(hContext: number, dwTimeout: number): number;

declare function SCardStatus(hCard: number, mszReaderNames: string | any, pcchReaderLen: number, pdwState: number, pdwProtocol: number, pbAtr: string | any, pcbAtrLen: number): number;

declare function SCardTransmit(hCard: number, pioSendPci: SCARD_IO_REQUEST, pbSendBuffer: string | any, cbSendLength: number, pioRecvPci: SCARD_IO_REQUEST, pbRecvBuffer: string | any, pcbRecvLength: number): number;

declare function SCardUnload(): void;

declare var g_rgSCardRawPci: SCARD_IO_REQUEST;

declare var g_rgSCardT0Pci: SCARD_IO_REQUEST;

declare var g_rgSCardT1Pci: SCARD_IO_REQUEST;

declare function pcsc_stringify_error(err: number): string;
