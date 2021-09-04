
interface MTAudioProcessingTapCallbacks {
	version: number;
	clientInfo: any;
	init: (p1: any, p2: any, p3: any) => void;
	finalize: (p1: any) => void;
	prepare: (p1: any, p2: number, p3: AudioStreamBasicDescription) => void;
	unprepare: (p1: any) => void;
	process: (p1: any, p2: number, p3: number, p4: AudioBufferList, p5: number, p6: number) => void;
}
declare var MTAudioProcessingTapCallbacks: MTAudioProcessingTapCallbacks;

declare function MTAudioProcessingTapCreate(allocator: any, callbacks: MTAudioProcessingTapCallbacks, flags: number, tapOut: any): number;

declare function MTAudioProcessingTapGetSourceAudio(tap: any, numberFrames: number, bufferListInOut: AudioBufferList, flagsOut: number, timeRangeOut: CMTimeRange, numberFramesOut: number): number;

declare function MTAudioProcessingTapGetStorage(tap: any): any;

declare function MTAudioProcessingTapGetTypeID(): number;

declare function MTCopyLocalizedNameForMediaSubType(mediaType: number, mediaSubType: number): string;

declare function MTCopyLocalizedNameForMediaType(mediaType: number): string;

declare function MTRegisterProfessionalVideoWorkflowFormatReaders(): void;

declare const kMTAudioProcessingTapCallbacksVersion_0: number;

declare const kMTAudioProcessingTapCreationFlag_PostEffects: number;

declare const kMTAudioProcessingTapCreationFlag_PreEffects: number;

declare const kMTAudioProcessingTapFlag_EndOfStream: number;

declare const kMTAudioProcessingTapFlag_StartOfStream: number;
