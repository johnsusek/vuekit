
declare class SLComposeServiceViewController extends NSViewController implements NSTextViewDelegate {

	setCharactersRemaining(_: number)

	charactersRemaining: number;

	readonly contentText: string;

	setPlaceholder(_: string)

	placeholder: string;

	readonly textView: NSTextView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	cancel(): void;

	conformsToProtocol(_: any /* Protocol */): boolean;

	didSelectCancel(): void;

	didSelectPost(): void;

	isContentValid(): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	presentationAnimationDidFinish(): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	textDidBeginEditing(_: NSNotification): void;

	textDidChange(_: NSNotification): void;

	textDidEndEditing(_: NSNotification): void;

	textShouldBeginEditing(_: NSText): boolean;

	textShouldEndEditing(_: NSText): boolean;

	textViewURLForContentsOfTextAttachmentAtIndex(_: NSTextView, urlForContentsOf: NSTextAttachment, at: number): NSURL;

	textViewCandidatesForSelectedRange(_: NSTextView, candidates: NSArray<NSTextCheckingResult>, forSelectedRange: NSRange): NSArray<NSTextCheckingResult>;

	textViewCandidatesForSelectedRange(_: NSTextView, candidatesForSelectedRange: NSRange): NSArray<any>;

	textViewClickedOnCellInRectAtIndex(_: NSTextView, clickedOn: NSTextAttachmentCellProtocol, in_: CGRect, at: number): void;

	textViewClickedOnLinkAtIndex(_: NSTextView, clickedOnLink: any, at: number): boolean;

	textViewCompletionsForPartialWordRangeIndexOfSelectedItem(_: NSTextView, completions: NSArray<string>, forPartialWordRange: NSRange, indexOfSelectedItem?: number): NSArray<string>;

	textViewDidCheckTextInRangeTypesOptionsResultsOrthographyWordCount(_: NSTextView, didCheckTextIn: NSRange, types: number, options: NSDictionary<string, any>, results: NSArray<NSTextCheckingResult>, orthography: NSOrthography, wordCount: number): NSArray<NSTextCheckingResult>;

	textViewDoCommandBySelector(_: NSTextView, doCommandBy: string): boolean;

	textViewDoubleClickedOnCellInRectAtIndex(_: NSTextView, doubleClickedOn: NSTextAttachmentCellProtocol, in_: CGRect, at: number): void;

	textViewDraggedCellInRectEventAtIndex(_: NSTextView, draggedCell: NSTextAttachmentCellProtocol, in_: CGRect, event: NSEvent, at: number): void;

	textViewMenuForEventAtIndex(_: NSTextView, menu: NSMenu, for_: NSEvent, at: number): NSMenu;

	textViewShouldChangeTextInRangeReplacementString(_: NSTextView, shouldChangeTextIn: NSRange, replacementString?: string): boolean;

	textViewShouldChangeTextInRangesReplacementStrings(_: NSTextView, shouldChangeTextInRanges: NSArray<NSValue>, replacementStrings?: NSArray<string>): boolean;

	textViewShouldChangeTypingAttributesToAttributes(_: NSTextView, shouldChangeTypingAttributes: NSDictionary<string, any>, toAttributes: NSDictionary<string, any>): NSDictionary<string, any>;

	textViewShouldSelectCandidateAtIndex(_: NSTextView, shouldSelectCandidateAt: number): boolean;

	textViewShouldSetSpellingStateRange(_: NSTextView, shouldSetSpellingState: number, range: NSRange): number;

	textViewShouldUpdateTouchBarItemIdentifiers(_: NSTextView, shouldUpdateTouchBarItemIdentifiers: NSArray<string>): NSArray<string>;

	textViewWillChangeSelectionFromCharacterRangeToCharacterRange(_: NSTextView, willChangeSelectionFromCharacterRange: NSRange, toCharacterRange: NSRange): NSRange;

	textViewWillChangeSelectionFromCharacterRangesToCharacterRanges(_: NSTextView, willChangeSelectionFromCharacterRanges: NSArray<NSValue>, toCharacterRanges: NSArray<NSValue>): NSArray<NSValue>;

	textViewWillCheckTextInRangeOptionsTypes(_: NSTextView, willCheckTextIn: NSRange, options: NSDictionary<string, any>, types: number): NSDictionary<string, any>;

	textViewWillDisplayToolTipForCharacterAtIndex(_: NSTextView, willDisplayToolTip: string, forCharacterAt: number): string;

	textViewWillShowSharingServicePickerForItems(_: NSTextView, willShow: NSSharingServicePicker, forItems: NSArray<any>): NSSharingServicePicker;

	textViewWritablePasteboardTypesForCellAtIndex(_: NSTextView, writablePasteboardTypesFor: NSTextAttachmentCellProtocol, at: number): NSArray<string>;

	textViewWriteCellAtIndexToPasteboardType(_: NSTextView, write: NSTextAttachmentCellProtocol, at: number, to: NSPasteboard, type: string): boolean;

	textViewDidChangeSelection(_: NSNotification): void;

	textViewDidChangeTypingAttributes(_: NSNotification): void;

	undoManagerForTextView(for_: NSTextView): NSUndoManager;

	validateContent(): void;
}

declare class SLRequest extends NSObject {

	static requestForServiceTypeRequestMethodURL(_: string, requestMethod: SLRequestMethod, URL: NSURL): SLRequest;

	readonly URL: NSURL;

	setAccount(_: ACAccount)

	account: ACAccount;

	readonly requestMethod: SLRequestMethod;

	addMultipartDataWithNameType(_: NSData, withName: string, type: string): void;

	addMultipartDataWithNameTypeFilename(_: NSData, withName: string, type: string, filename: string): void;

	performRequestWithHandler(_: (p1: NSData, p2: NSHTTPURLResponse, p3: NSError) => void): void;

	preparedURLRequest(): NSURLRequest;
}

enum SLRequestMethod {

	GET = 0,

	POST = 1,

	DELETE = 2,

	PUT = 3
}

