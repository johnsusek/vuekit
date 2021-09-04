
interface PHContentEditingController extends NSObjectProtocol {

	shouldShowCancelConfirmation: boolean;

	cancelContentEditing(): void;

	canHandleAdjustmentData(_: PHAdjustmentData): boolean;

	finishContentEditingWithCompletionHandler(_?: (p1: PHContentEditingOutput) => void): void;

	startContentEditingWithInputPlaceholderImage(_: PHContentEditingInput, placeholderImage: NSImage): void;
}
declare var PHContentEditingController: {

	prototype: PHContentEditingController;
};

declare class PHLivePhotoView extends NSView {

	setAudioVolume(_: number)

	audioVolume: number;

	setContentMode(_: PHLivePhotoViewContentMode)

	contentMode: PHLivePhotoViewContentMode;

	setDelegate(_: PHLivePhotoViewDelegate)

	delegate: PHLivePhotoViewDelegate;

	setLivePhoto(_: PHLivePhoto)

	livePhoto: PHLivePhoto;

	readonly livePhotoBadgeView: NSView;

	setMuted(_: boolean)

	isMuted: boolean;

	startPlaybackWithStyle(_: PHLivePhotoViewPlaybackStyle): void;

	stopPlayback(): void;

	stopPlaybackAnimated(_: boolean): void;
}

enum PHLivePhotoViewContentMode {

	AspectFit = 0,

	AspectFill = 1
}


interface PHLivePhotoViewDelegate extends NSObjectProtocol {

	livePhotoViewDidEndPlaybackWithStyle?(_: PHLivePhotoView, didEndPlaybackWithStyle: PHLivePhotoViewPlaybackStyle): void;

	livePhotoViewWillBeginPlaybackWithStyle?(_: PHLivePhotoView, willBeginPlaybackWithStyle: PHLivePhotoViewPlaybackStyle): void;
}
declare var PHLivePhotoViewDelegate: {

	prototype: PHLivePhotoViewDelegate;
};

enum PHLivePhotoViewPlaybackStyle {

	Undefined = 0,

	Full = 1,

	Hint = 2
}


declare class PHProjectAssetElement extends PHProjectElement implements NSSecureCoding {

	readonly annotation: string;

	readonly cloudAssetIdentifier: PHCloudIdentifier;

	readonly cropRect: CGRect;

	readonly horizontallyFlipped: boolean;

	readonly regionsOfInterest: NSArray<PHProjectRegionOfInterest>;

	readonly verticallyFlipped: boolean;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare var PHProjectCategoryBook: string;

declare var PHProjectCategoryCalendar: string;

declare var PHProjectCategoryCard: string;

declare var PHProjectCategoryOther: string;

declare var PHProjectCategoryPrints: string;

declare var PHProjectCategorySlideshow: string;

declare var PHProjectCategoryUndefined: string;

declare var PHProjectCategoryWallDecor: string;

enum PHProjectCreationSource {

	Undefined = 0,

	UserSelection = 1,

	Album = 2,

	Memory = 3,

	Moment = 4,

	Project = 20,

	ProjectBook = 21,

	ProjectCalendar = 22,

	ProjectCard = 23,

	ProjectPrintOrder = 24,

	ProjectSlideshow = 25,

	ProjectExtension = 26
}


declare class PHProjectElement extends NSObject implements NSSecureCoding {

	readonly placement: CGRect;

	readonly weight: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class PHProjectExtensionContext extends NSExtensionContext {

	readonly photoLibrary: PHPhotoLibrary;

	readonly project: PHProject;

	showEditorForAsset(_: PHAsset): void;

	updatedProjectInfoFromProjectInfoCompletion(_?: PHProjectInfo, completion?: (p1: PHProjectInfo) => void): NSProgress;
}

interface PHProjectExtensionController extends NSObjectProtocol {

	beginProjectWithExtensionContextProjectInfoCompletion(_: PHProjectExtensionContext, projectInfo: PHProjectInfo, completion?: (p1: NSError) => void): void;

	finishProjectWithCompletionHandler(_: () => void): void;

	resumeProjectWithExtensionContextCompletion(_: PHProjectExtensionContext, completion?: (p1: NSError) => void): void;

	typeDescriptionDataSourceForCategoryInvalidator?(_: string, invalidator: PHProjectTypeDescriptionInvalidator): PHProjectTypeDescriptionDataSource;
}
declare var PHProjectExtensionController: {

	prototype: PHProjectExtensionController;
};

declare class PHProjectInfo extends NSObject implements NSSecureCoding {

	readonly brandingEnabled: boolean;

	readonly creationSource: PHProjectCreationSource;

	readonly pageNumbersEnabled: boolean;

	readonly productIdentifier: string;

	readonly projectType: string;

	readonly sections: NSArray<PHProjectSection>;

	readonly themeIdentifier: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class PHProjectJournalEntryElement extends PHProjectElement implements NSSecureCoding {

	readonly assetElement: PHProjectAssetElement;

	readonly date: Date;

	readonly textElement: PHProjectTextElement;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class PHProjectMapElement extends PHProjectElement implements NSSecureCoding {

	readonly altitude: number;

	readonly annotations: NSArray<MKAnnotation>;

	readonly centerCoordinate: CLLocationCoordinate2D;

	readonly heading: number;

	readonly mapType: MKMapType;

	readonly pitch: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class PHProjectRegionOfInterest extends NSObject implements NSSecureCoding {

	readonly identifier: string;

	readonly quality: number;

	readonly rect: CGRect;

	readonly weight: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class PHProjectSection extends NSObject implements NSSecureCoding {

	readonly sectionContents: NSArray<PHProjectSectionContent>;

	readonly sectionType: PHProjectSectionType;

	readonly title: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class PHProjectSectionContent extends NSObject implements NSSecureCoding {

	readonly aspectRatio: number;

	readonly backgroundColor: NSColor;

	readonly cloudAssetIdentifiers: NSArray<PHCloudIdentifier>;

	readonly elements: NSArray<PHProjectElement>;

	readonly numberOfColumns: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

enum PHProjectSectionType {

	Undefined = 0,

	Cover = 1,

	Content = 2,

	Auxiliary = 3
}


declare class PHProjectTextElement extends PHProjectElement implements NSSecureCoding {

	readonly attributedText: NSAttributedString;

	readonly text: string;

	readonly textElementType: PHProjectTextElementType;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

enum PHProjectTextElementType {

	Body = 0,

	Title = 1,

	Subtitle = 2
}


declare class PHProjectTypeDescription extends NSObject implements NSSecureCoding {

	readonly canProvideSubtypes: boolean;

	readonly image: NSImage;

	readonly localizedAttributedDescription: NSAttributedString;

	readonly localizedDescription: string;

	readonly localizedTitle: string;

	readonly projectType: string;

	readonly subtypeDescriptions: NSArray<PHProjectTypeDescription>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(projectType: string, title: string, attributedDescription: NSAttributedString, image: NSImage, canProvideSubtypes: boolean);

	static create(projectType: string, title: string, attributedDescription: NSAttributedString, image: NSImage, subtypeDescriptions: NSArray<PHProjectTypeDescription> | PHProjectTypeDescription[]);

	static create(projectType: string, title: string, description: string, image: NSImage);

	static create(projectType: string, title: string, description: string, image: NSImage, canProvideSubtypes: boolean);

	static create(projectType: string, title: string, description: string, image: NSImage, subtypeDescriptions: NSArray<PHProjectTypeDescription> | PHProjectTypeDescription[]);

	encodeWithCoder(_: NSCoder): void;
}

interface PHProjectTypeDescriptionDataSource extends NSObjectProtocol {

	extensionWillDiscardDataSource?(): void;

	footerTextForSubtypesOfProjectType(_: string): NSAttributedString;

	subtypesForProjectType(_: string): NSArray<PHProjectTypeDescription>;

	typeDescriptionForProjectType(_: string): PHProjectTypeDescription;
}
declare var PHProjectTypeDescriptionDataSource: {

	prototype: PHProjectTypeDescriptionDataSource;
};

interface PHProjectTypeDescriptionInvalidator extends NSObjectProtocol {

	invalidateFooterTextForSubtypesOfProjectType(_: string): void;

	invalidateTypeDescriptionForProjectType(_: string): void;
}
declare var PHProjectTypeDescriptionInvalidator: {

	prototype: PHProjectTypeDescriptionInvalidator;
};

declare var PHProjectTypeUndefined: string;
