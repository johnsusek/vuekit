
interface IOUserNetworkMACAddress {
	octet: number;
}
declare var IOUserNetworkMACAddress: IOUserNetworkMACAddress;

declare var IOUserNetworkPacket: typeof NSObject;

declare var IOUserNetworkPacketBufferPool: typeof NSObject;

declare var IOUserNetworkPacketInterface: typeof NSObject;

declare var IOUserNetworkPacketMetaClass: typeof NSObject;

declare var IOUserNetworkPacketQueue: typeof NSObject;

interface IOUserNetworkPacketState {
	packetIndex: number;
	direction: number;
	__reserved: number;
	memoryOffset: number;
	dataLength: number;
	dataOffset: number;
	headroom: number;
	linkHeaderLength: number;
}
declare var IOUserNetworkPacketState: IOUserNetworkPacketState;

interface _IOUserNetworkEthernetInterfaceDescriptor {
	macAddress: IOUserNetworkMACAddress;
	featureFlags: number;
	_reserved: number;
	txPacketHeadroomBytes: number;
	txPacketTailroomBytes: number;
}
declare var _IOUserNetworkEthernetInterfaceDescriptor: _IOUserNetworkEthernetInterfaceDescriptor;

declare const kIOUserNetworkFeatureFlagSoftwareVlan: number;

declare const kIOUserNetworkFeatureFlagWOMP: number;

declare const kIOUserNetworkLinkQualityBad: number;

declare const kIOUserNetworkLinkQualityGood: number;

declare const kIOUserNetworkLinkQualityOff: number;

declare const kIOUserNetworkLinkQualityPoor: number;

declare const kIOUserNetworkLinkQualityUnknown: number;

declare const kIOUserNetworkLinkStatusActive: number;

declare const kIOUserNetworkLinkStatusInactive: number;

declare const kIOUserNetworkLinkStatusInvalid: number;

declare const kIOUserNetworkLinkStatusWakeSameNet: number;

declare const kIOUserNetworkMediaEthernet1000BaseCX: number;

declare const kIOUserNetworkMediaEthernet1000BaseCX_SGMII: number;

declare const kIOUserNetworkMediaEthernet1000BaseKX: number;

declare const kIOUserNetworkMediaEthernet1000BaseLX: number;

declare const kIOUserNetworkMediaEthernet1000BaseSX: number;

declare const kIOUserNetworkMediaEthernet1000BaseT: number;

declare const kIOUserNetworkMediaEthernet100BaseFX: number;

declare const kIOUserNetworkMediaEthernet100BaseT2: number;

declare const kIOUserNetworkMediaEthernet100BaseT4: number;

declare const kIOUserNetworkMediaEthernet100BaseTX: number;

declare const kIOUserNetworkMediaEthernet100BaseVG: number;

declare const kIOUserNetworkMediaEthernet100GBaseCR4: number;

declare const kIOUserNetworkMediaEthernet100GBaseKR4: number;

declare const kIOUserNetworkMediaEthernet100GBaseLR4: number;

declare const kIOUserNetworkMediaEthernet100GBaseSR4: number;

declare const kIOUserNetworkMediaEthernet10Base2: number;

declare const kIOUserNetworkMediaEthernet10Base5: number;

declare const kIOUserNetworkMediaEthernet10BaseFL: number;

declare const kIOUserNetworkMediaEthernet10BaseSTP: number;

declare const kIOUserNetworkMediaEthernet10BaseT: number;

declare const kIOUserNetworkMediaEthernet10GBaseCR1: number;

declare const kIOUserNetworkMediaEthernet10GBaseCX4: number;

declare const kIOUserNetworkMediaEthernet10GBaseER: number;

declare const kIOUserNetworkMediaEthernet10GBaseKR: number;

declare const kIOUserNetworkMediaEthernet10GBaseKX4: number;

declare const kIOUserNetworkMediaEthernet10GBaseLR: number;

declare const kIOUserNetworkMediaEthernet10GBaseSR: number;

declare const kIOUserNetworkMediaEthernet10GBaseT: number;

declare const kIOUserNetworkMediaEthernet20GBaseKR2: number;

declare const kIOUserNetworkMediaEthernet2500BaseT: number;

declare const kIOUserNetworkMediaEthernet25GBaseCR: number;

declare const kIOUserNetworkMediaEthernet25GBaseKR: number;

declare const kIOUserNetworkMediaEthernet25GBaseLR: number;

declare const kIOUserNetworkMediaEthernet25GBaseSR: number;

declare const kIOUserNetworkMediaEthernet40GBaseCR4: number;

declare const kIOUserNetworkMediaEthernet40GBaseKR4: number;

declare const kIOUserNetworkMediaEthernet40GBaseLR4: number;

declare const kIOUserNetworkMediaEthernet40GBaseSR4: number;

declare const kIOUserNetworkMediaEthernet5000BaseT: number;

declare const kIOUserNetworkMediaEthernet50GBaseCR2: number;

declare const kIOUserNetworkMediaEthernet50GBaseKR2: number;

declare const kIOUserNetworkMediaEthernet50GBaseLR2: number;

declare const kIOUserNetworkMediaEthernet50GBaseSR2: number;

declare const kIOUserNetworkMediaEthernet56GBaseR4: number;

declare const kIOUserNetworkMediaEthernetAuto: number;

declare const kIOUserNetworkMediaEthernetHomePNA1: number;

declare const kIOUserNetworkMediaEthernetManual: number;

declare const kIOUserNetworkMediaEthernetMask: number;

declare const kIOUserNetworkMediaEthernetNone: number;

declare const kIOUserNetworkMediaOptionEEE: number;

declare const kIOUserNetworkMediaOptionFlowControl: number;

declare const kIOUserNetworkMediaOptionFullDuplex: number;

declare const kIOUserNetworkMediaOptionHalfDuplex: number;

declare const kIOUserNetworkMediaOptionLoopback: number;

declare const kIOUserNetworkPacketDirectionNone: number;

declare const kIOUserNetworkPacketDirectionRx: number;

declare const kIOUserNetworkPacketDirectionTx: number;
