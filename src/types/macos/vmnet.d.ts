
enum interface_event_t {

	VMNET_INTERFACE_PACKETS_AVAILABLE = 1
}


enum operating_modes_t {

	VMNET_HOST_MODE = 1000,

	VMNET_SHARED_MODE = 1001,

	VMNET_BRIDGED_MODE = 1002
}


declare var vmnet_allocate_mac_address_key: string;

declare function vmnet_copy_shared_interface_list(): NSObject;

declare var vmnet_end_address_key: string;

declare var vmnet_estimated_packets_available_key: string;

declare function vmnet_interface_add_port_forwarding_rule(interface: any, protocol: number, external_port: number, internal_address: void, internal_port: number, handler: (p1: vmnet_return_t) => void): vmnet_return_t;

declare function vmnet_interface_get_port_forwarding_rules(interface: any, handler: (p1: NSObject) => void): vmnet_return_t;

declare var vmnet_interface_id_key: string;

declare function vmnet_interface_remove_port_forwarding_rule(interface: any, protocol: number, external_port: number, handler: (p1: vmnet_return_t) => void): vmnet_return_t;

declare function vmnet_interface_set_event_callback(interface: any, event_mask: interface_event_t, queue: NSObject, callback: (p1: interface_event_t, p2: NSObject) => void): vmnet_return_t;

declare var vmnet_mac_address_key: string;

declare var vmnet_max_packet_size_key: string;

declare var vmnet_mtu_key: string;

declare var vmnet_nat66_prefix_key: string;

declare var vmnet_nat66_prefix_length_key: string;

declare var vmnet_operation_mode_key: string;

declare function vmnet_port_forwarding_rule_get_details(rule: NSObject, protocol: string | any, external_port: number, internal_address: any, internal_port: number): vmnet_return_t;

declare function vmnet_read(interface: any, packets: vmpktdesc, pktcnt: number): vmnet_return_t;

enum vmnet_return_t {

	VMNET_SUCCESS = 1000,

	VMNET_FAILURE = 1001,

	VMNET_MEM_FAILURE = 1002,

	VMNET_INVALID_ARGUMENT = 1003,

	VMNET_SETUP_INCOMPLETE = 1004,

	VMNET_INVALID_ACCESS = 1005,

	VMNET_PACKET_TOO_BIG = 1006,

	VMNET_BUFFER_EXHAUSTED = 1007,

	VMNET_TOO_MANY_PACKETS = 1008
}


declare var vmnet_shared_interface_name_key: string;

declare var vmnet_start_address_key: string;

declare function vmnet_start_interface(interface_desc: NSObject, queue: NSObject, handler: (p1: vmnet_return_t, p2: NSObject) => void): any;

declare function vmnet_stop_interface(interface: any, queue: NSObject, handler: (p1: vmnet_return_t) => void): vmnet_return_t;

declare var vmnet_subnet_mask_key: string;

declare function vmnet_write(interface: any, packets: vmpktdesc, pktcnt: number): vmnet_return_t;

interface vmpktdesc {
	vm_pkt_size: number;
	vm_pkt_iov: iovec;
	vm_pkt_iovcnt: number;
	vm_flags: number;
}
declare var vmpktdesc: vmpktdesc;
