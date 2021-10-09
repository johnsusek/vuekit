declare global {
  export class K { }
  export class NSObject { }
  export class SSLProtocol { }
  export class tls_protocol_version_t { }

  export class CKContainer { }
  export class CKShare { }
  export class IndexPath { }
  export class Metadata { }

  export enum NSURLSessionDelayedRequestDisposition { }

  export type OpaquePointer = any;
  export type NSFastEnumerationIterator = any;
  export type NSIndexSetIterator = any;
  export type IndexingIterator = any;
  export type Slice = any;

  export class AUAudioUnit { }
  export class AudioBufferList { }
  export class AudioChannelLayout { }
  export class AudioComponentDescription { }
  export class AudioComponentInstantiationOptions { }
  export class AudioStreamBasicDescription { }
  export class AudioStreamPacketDescription { }
  export class AudioTimeStamp { }
  export class AVCaptureDeviceFormat { }
  export class AVCaptureSystemPressureState { }
  export class AVFAudio { }
  export class CGImagePropertyOrientation { }
  export class CVTimeStamp { }
  export class simd_float3x3 { }
  export class simd_float4x3 { }

  class NSEvent extends NSObject {
    timestamp: number;
    type: NSEvent.EventType;
    window: NSWindow;
  }
}

export { }