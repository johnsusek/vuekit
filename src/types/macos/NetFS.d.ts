
declare function NetFSCFStringtoCString(p1: string): string;

declare function NetFSCopyURLForRemountingVolume(localPathURL: NSURL): NSURL;

interface NetFSInterface {
	_interface: any;
	_factoryID: any;
	_refCount: number;
}
declare var NetFSInterface: NetFSInterface;

declare function NetFSInterface_AddRef(p1: any): number;

declare function NetFSInterface_Release(p1: any): number;

interface NetFSMountInterface_V1 {
	_reserved: any;
	QueryInterface: (p1: any, p2: CFUUIDBytes, p3: any) => number;
	AddRef: (p1: any) => number;
	Release: (p1: any) => number;
	CreateSessionRef: (p1: any) => number;
	GetServerInfo: (p1: NSURL, p2: any, p3: NSDictionary<any, any>, p4: NSDictionary<any, any>) => number;
	ParseURL: (p1: NSURL, p2: NSDictionary<any, any>) => number;
	CreateURL: (p1: NSDictionary<any, any>, p2: NSURL) => number;
	OpenSession: (p1: NSURL, p2: any, p3: NSDictionary<any, any>, p4: NSDictionary<any, any>) => number;
	EnumerateShares: (p1: any, p2: NSDictionary<any, any>, p3: NSDictionary<any, any>) => number;
	Mount: (p1: any, p2: NSURL, p3: string, p4: NSDictionary<any, any>, p5: NSDictionary<any, any>) => number;
	Cancel: (p1: any) => number;
	CloseSession: (p1: any) => number;
	GetMountInfo: (p1: string, p2: NSDictionary<any, any>) => number;
}
declare var NetFSMountInterface_V1: NetFSMountInterface_V1;

declare function NetFSMountURLAsync(url: NSURL, mountpath: NSURL, user: string, passwd: string, open_options: NSDictionary<any, any>, mount_options: NSDictionary<any, any>, requestID: any, dispatchq: NSObject, mount_report: (p1: number, p2: any, p3: NSArray<any>) => void): number;

declare function NetFSMountURLCancel(requestID: any): number;

declare function NetFSMountURLProbe(hostname: string): string;

declare function NetFSMountURLSync(url: NSURL, mountpath: NSURL, user: string, passwd: string, open_options: NSDictionary<any, any>, mount_options: NSDictionary<any, any>, mountpoints: NSArray<any>): number;

declare function NetFSQueryInterface(p1: any, iid: CFUUIDBytes, ppv: any): number;

declare function NetFS_CreateInterface(factoryID: any, interfaceFTbl: any): NetFSInterface;
