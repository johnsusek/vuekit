
declare const KRB5_C_RANDSOURCE_EXTERNAL_PROTOCOL: number;

declare const KRB5_C_RANDSOURCE_MAX: number;

declare const KRB5_C_RANDSOURCE_OLDAPI: number;

declare const KRB5_C_RANDSOURCE_OSRAND: number;

declare const KRB5_C_RANDSOURCE_TIMING: number;

declare const KRB5_C_RANDSOURCE_TRUSTEDPARTY: number;

declare function add_error_table(et: error_table): number;

declare function error_message(code: number): string;

interface error_table {
	messages: string;
	base: number;
	count: number;
}
declare var error_table: error_table;

declare function initialize_asn1_error_table(): void;

declare function initialize_k524_error_table(): void;

declare function initialize_krb5_error_table(): void;

declare function initialize_prof_error_table(): void;

interface krb5_address {
	magic: number;
	addrtype: number;
	length: number;
	contents: string;
}
declare var krb5_address: krb5_address;

interface krb5_ap_rep {
	magic: number;
	enc_part: krb5_enc_data;
}
declare var krb5_ap_rep: krb5_ap_rep;

interface krb5_ap_rep_enc_part {
	magic: number;
	ctime: number;
	cusec: number;
	subkey: krb5_keyblock;
	seq_number: number;
}
declare var krb5_ap_rep_enc_part: krb5_ap_rep_enc_part;

interface krb5_ap_req {
	magic: number;
	ap_options: number;
	ticket: krb5_ticket;
	authenticator: krb5_enc_data;
}
declare var krb5_ap_req: krb5_ap_req;

interface krb5_authdata {
	magic: number;
	ad_type: number;
	length: number;
	contents: string;
}
declare var krb5_authdata: krb5_authdata;

interface krb5_authenticator {
	magic: number;
	client: krb5_principal_data;
	checksum: krb5_checksum;
	cusec: number;
	ctime: number;
	subkey: krb5_keyblock;
	seq_number: number;
	authorization_data: krb5_authdata;
}
declare var krb5_authenticator: krb5_authenticator;

interface krb5_checksum {
	magic: number;
	checksum_type: number;
	length: number;
	contents: string;
}
declare var krb5_checksum: krb5_checksum;

interface krb5_cred {
	magic: number;
	tickets: krb5_ticket;
	enc_part: krb5_enc_data;
	enc_part2: krb5_cred_enc_part;
}
declare var krb5_cred: krb5_cred;

interface krb5_cred_enc_part {
	magic: number;
	nonce: number;
	timestamp: number;
	usec: number;
	s_address: krb5_address;
	r_address: krb5_address;
	ticket_info: krb5_cred_info;
}
declare var krb5_cred_enc_part: krb5_cred_enc_part;

interface krb5_cred_info {
	magic: number;
	session: krb5_keyblock;
	client: krb5_principal_data;
	server: krb5_principal_data;
	flags: number;
	times: krb5_ticket_times;
	caddrs: krb5_address;
}
declare var krb5_cred_info: krb5_cred_info;

interface krb5_creds {
	magic: number;
	client: krb5_principal_data;
	server: krb5_principal_data;
	keyblock: krb5_keyblock;
	times: krb5_ticket_times;
	is_skey: number;
	ticket_flags: number;
	addresses: krb5_address;
	ticket: krb5_data;
	second_ticket: krb5_data;
	authdata: krb5_authdata;
}
declare var krb5_creds: krb5_creds;

interface krb5_data {
	magic: number;
	length: number;
	data: string;
}
declare var krb5_data: krb5_data;

interface krb5_enc_data {
	magic: number;
	enctype: number;
	kvno: number;
	ciphertext: krb5_data;
}
declare var krb5_enc_data: krb5_enc_data;

interface krb5_enc_kdc_rep_part {
	magic: number;
	msg_type: number;
	session: krb5_keyblock;
	last_req: krb5_last_req_entry;
	nonce: number;
	key_exp: number;
	flags: number;
	times: krb5_ticket_times;
	server: krb5_principal_data;
	caddrs: krb5_address;
}
declare var krb5_enc_kdc_rep_part: krb5_enc_kdc_rep_part;

interface krb5_enc_tkt_part {
	magic: number;
	flags: number;
	session: krb5_keyblock;
	client: krb5_principal_data;
	transited: krb5_transited;
	times: krb5_ticket_times;
	caddrs: krb5_address;
	authorization_data: krb5_authdata;
}
declare var krb5_enc_tkt_part: krb5_enc_tkt_part;

interface krb5_encrypt_block {
	magic: number;
	crypto_entry: number;
	key: krb5_keyblock;
}
declare var krb5_encrypt_block: krb5_encrypt_block;

interface krb5_error {
	magic: number;
	ctime: number;
	cusec: number;
	susec: number;
	stime: number;
	error: number;
	client: krb5_principal_data;
	server: krb5_principal_data;
	text: krb5_data;
	e_data: krb5_data;
}
declare var krb5_error: krb5_error;

interface krb5_get_init_creds_opt {
	flags: number;
	tkt_life: number;
	renew_life: number;
	forwardable: number;
	proxiable: number;
	etype_list: number;
	etype_list_length: number;
	address_list: krb5_address;
	preauth_list: number;
	preauth_list_length: number;
	salt: krb5_data;
}
declare var krb5_get_init_creds_opt: krb5_get_init_creds_opt;

interface krb5_gic_opt_pa_data {
	attr: string;
	value: string;
}
declare var krb5_gic_opt_pa_data: krb5_gic_opt_pa_data;

interface krb5_kdc_rep {
	magic: number;
	msg_type: number;
	padata: krb5_pa_data;
	client: krb5_principal_data;
	ticket: krb5_ticket;
	enc_part: krb5_enc_data;
	enc_part2: krb5_enc_kdc_rep_part;
}
declare var krb5_kdc_rep: krb5_kdc_rep;

interface krb5_kdc_req {
	magic: number;
	msg_type: number;
	padata: krb5_pa_data;
	kdc_options: number;
	client: krb5_principal_data;
	server: krb5_principal_data;
	from: number;
	till: number;
	rtime: number;
	nonce: number;
	nktypes: number;
	ktype: number;
	addresses: krb5_address;
	authorization_data: krb5_enc_data;
	unenc_authdata: krb5_authdata;
	second_ticket: krb5_ticket;
}
declare var krb5_kdc_req: krb5_kdc_req;

interface krb5_keyblock {
	magic: number;
	enctype: number;
	length: number;
	contents: string;
}
declare var krb5_keyblock: krb5_keyblock;

interface krb5_keytab_entry {
	magic: number;
	principal: krb5_principal_data;
	timestamp: number;
	vno: number;
	key: krb5_keyblock;
}
declare var krb5_keytab_entry: krb5_keytab_entry;

interface krb5_last_req_entry {
	magic: number;
	lr_type: number;
	value: number;
}
declare var krb5_last_req_entry: krb5_last_req_entry;

interface krb5_octet_data {
	magic: number;
	length: number;
	data: string;
}
declare var krb5_octet_data: krb5_octet_data;

interface krb5_pa_data {
	magic: number;
	pa_type: number;
	length: number;
	contents: string;
}
declare var krb5_pa_data: krb5_pa_data;

interface krb5_principal_data {
	magic: number;
	realm: krb5_data;
	data: krb5_data;
	length: number;
	type: number;
}
declare var krb5_principal_data: krb5_principal_data;

interface krb5_prompt {
	prompt: string;
	hidden: number;
	reply: krb5_data;
}
declare var krb5_prompt: krb5_prompt;

interface krb5_pwd_data {
	magic: number;
	sequence_count: number;
	element: passwd_phrase_element;
}
declare var krb5_pwd_data: krb5_pwd_data;

interface krb5_replay_data {
	timestamp: number;
	usec: number;
	seq: number;
}
declare var krb5_replay_data: krb5_replay_data;

interface krb5_response {
	magic: number;
	message_type: number;
	response: krb5_data;
	expected_nonce: number;
	request_time: number;
}
declare var krb5_response: krb5_response;

interface krb5_ticket {
	magic: number;
	server: krb5_principal_data;
	enc_part: krb5_enc_data;
	enc_part2: krb5_enc_tkt_part;
}
declare var krb5_ticket: krb5_ticket;

interface krb5_ticket_times {
	authtime: number;
	starttime: number;
	endtime: number;
	renew_till: number;
}
declare var krb5_ticket_times: krb5_ticket_times;

interface krb5_tkt_authent {
	magic: number;
	ticket: krb5_ticket;
	authenticator: krb5_authenticator;
	ap_options: number;
}
declare var krb5_tkt_authent: krb5_tkt_authent;

interface krb5_transited {
	magic: number;
	tr_type: number;
	tr_contents: krb5_data;
}
declare var krb5_transited: krb5_transited;

interface krb5_verify_init_creds_opt {
	flags: number;
	ap_req_nofail: number;
}
declare var krb5_verify_init_creds_opt: krb5_verify_init_creds_opt;

interface passwd_phrase_element {
	magic: number;
	passwd: krb5_data;
	phrase: krb5_data;
}
declare var passwd_phrase_element: passwd_phrase_element;

declare function profile_abandon(profile: any): void;

declare function profile_add_relation(profile: any, names: string, new_value: string | any): number;

declare function profile_clear_relation(profile: any, names: string): number;

declare function profile_configuration_updated(): void;

declare function profile_flush(profile: any): number;

declare function profile_flush_to_buffer(profile: any, bufp: string): number;

declare function profile_flush_to_file(profile: any, outfile: string | any): number;

declare function profile_free_buffer(profile: any, buf: string | any): void;

declare function profile_free_list(list: string): void;

declare function profile_get_boolean(profile: any, name: string | any, subname: string | any, subsubname: string | any, def_val: number, ret_default: number): number;

declare function profile_get_integer(profile: any, name: string | any, subname: string | any, subsubname: string | any, def_val: number, ret_default: number): number;

declare function profile_get_relation_names(profile: any, names: string, ret_names: string): number;

declare function profile_get_string(profile: any, name: string | any, subname: string | any, subsubname: string | any, def_val: string | any, ret_string: string): number;

declare function profile_get_subsection_names(profile: any, names: string, ret_names: string): number;

declare function profile_get_values(profile: any, names: string, ret_values: string): number;

declare function profile_init(files: string, ret_profile: any): number;

declare function profile_init_path(filelist: string | any, ret_profile: any): number;

declare function profile_is_modified(profile: any, modified: number): number;

declare function profile_is_writable(profile: any, writable: number): number;

declare function profile_iterator(iter_p: any, ret_name: string, ret_value: string): number;

declare function profile_iterator_create(profile: any, names: string, flags: number, ret_iter: any): number;

declare function profile_iterator_free(iter_p: any): void;

declare function profile_release(profile: any): void;

declare function profile_release_string(str: string | any): void;

declare function profile_rename_section(profile: any, names: string, new_name: string | any): number;

declare function profile_update_relation(profile: any, names: string, old_value: string | any, new_value: string | any): number;

declare function remove_error_table(et: error_table): number;
