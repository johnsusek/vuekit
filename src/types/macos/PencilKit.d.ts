
declare var PKAppleDrawingTypeIdentifier: string;

declare class PKDrawing extends NSObject implements NSCopying, NSSecureCoding {

	readonly bounds: CGRect;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(data: NSData);

	copyWithZone(_?: any): any;

	dataRepresentation(): NSData;

	drawingByAppendingDrawing(_: PKDrawing): PKDrawing;

	drawingByApplyingTransform(_: CGAffineTransform): PKDrawing;

	encodeWithCoder(_: NSCoder): void;

	imageFromRectScale(_: CGRect, scale: number): NSImage;
}
