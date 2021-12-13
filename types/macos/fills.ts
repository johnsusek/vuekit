/* eslint-disable */

declare global {
  export namespace AudioComponent {
    export class AudioComponentInstantiationOptions { }
  }

  export namespace CGImageProperties {
    export class CGImagePropertyOrientation { }
  }

  export namespace CHHapticParameterCurve {
    export class ControlPoint { }
  }

  export namespace CKShare {
    export enum Metadata { }
    export namespace Participant {
      export enum CKShare_Participant_Permission { }
      export enum CKShare_Participant_Role { }
      export enum CKShare_Participant_AcceptanceStatus { }
    }
  }

  export namespace CKRecord {
    export enum ID { }

    export namespace Reference {
      export enum CKRecord_Reference_Action { }
    }
  }

  export class CKContainer { }
  export class CKShare { }
  export class CKRecord { }

  export namespace MTLPixelFormat {
    export enum MTLPixelFormat { }
  }

  export namespace SecProtocolTypes {
    export class SSLProtocol { }
    export enum tls_protocol_version_t { }
  }

  export class AEDesc { }
  export class AUAudioUnit { }
  export class AudioBufferList { }
  export class AudioChannelLayout { }
  export class AudioComponentDescription { }
  export class AudioStreamBasicDescription { }
  export class AudioStreamPacketDescription { }
  export class AudioTimeStamp { }
  export class AVAudio3DAngularOrientation { }
  export class AVAudio3DPoint { }
  export class AVAudio3DVectorOrientation { }
  export class AVAudioConverterPrimeInfo { }
  export class AVBeatRange { }
  export class AVEdgeWidths { }
  export class AVPixelAspectRatio { }
  export class AVSampleCursorAudioDependencyInfo { }
  export class AVSampleCursorChunkInfo { }
  export class AVSampleCursorDependencyInfo { }
  export class AVSampleCursorStorageRange { }
  export class AVSampleCursorSyncInfo { }
  export class CATransform3D { }
  export class CGAffineTransform { }
  export class CLLocationCoordinate2D { }
  export class CMAcceleration { }
  export class CMCalibratedMagneticField { }
  export class CMMagneticField { }
  export class CMQuaternion { }
  export class CMRotationMatrix { }
  export class CMRotationRate { }
  export class CNPostalAddress { }
  export class SFAuthorization { }
  export class CMTime { }
  export class CMTimeMapping { }
  export class CMTimeRange { }
  export class CMVideoDimensions { }
  export class ComponentInstanceRecord { }
  export class CVTimeStamp { }
  export class DecimalStruct { }
  export class ICCameraDevice { }
  export class ICCameraFile { }
  export class ICDevice { }
  export class ICScannerBandData { }
  export class ICScannerDevice { }
  export class K { }
  export class NSAffineTransformStruct { }
  export class NSData { }
  export class NSDirectionalEdgeInsets { }
  export class NSMutableString { }
  export class NSSimpleCString { }
  export class NSString { }
  export class NSObject {
    static create(): NSObject
  }
  export class NSDecimal { }

  export type NSError = Error;
  export function NSError(args: any): NSError;
  export function NSString(args: any): NSString;

  // These fix a lot of errors, why not bridged?
  export class NSRange { }
  export class NSEdgeInsets {
    top: number
    left: number
    bottom: number
    right: number
  }

  export class NSFastEnumerationState { }
  export class OperatingSystemVersion { }

  export class simd_float3x3 { }
  export class simd_float4x3 { }

  export class DispatchQueue {
    static main(): DispatchQueue
    static globalWithQos(qos: NSObjCRuntime.QualityOfService): DispatchQueue
    async(completionHandler: () => void): void;
  }

  export type CGPoint = NSPoint;
  export type CGRect = NSRect;
  export type CGSize = NSSize;
  export type IOSurface = any;

  export type MKCoordinateRegion = any;
  export type MKCoordinateSpan = any;
  export type MKMapRect = any;
  export type MKMapPoint = any;
  export namespace MKTileOverlay {
    export type Path = any;
  }
  export namespace MKRoute {
    export type Step = any;
  }
  export namespace MKLocalSearch {
    export namespace Request {
      export namespace MKLocalSearch {
        export type ResultType = any;
      }
    }
  }

  export namespace NSTableView {
    export type AutosaveName = string;
  }
}

export { };
