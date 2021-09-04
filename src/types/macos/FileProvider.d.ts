
interface NSFileProviderChangeObserver extends NSObjectProtocol {

	didDeleteItemsWithIdentifiers(_: NSArray<string>): void;

	didUpdateItems(_: NSArray<NSFileProviderItem>): void;

	finishEnumeratingChangesUpToSyncAnchorMoreComing(_: NSData, moreComing: boolean): void;

	finishEnumeratingWithError(_: NSError): void;
}
declare var NSFileProviderChangeObserver: {

	prototype: NSFileProviderChangeObserver;
};

interface NSFileProviderEnumerationObserver extends NSObjectProtocol {

	didEnumerateItems(_: NSArray<NSFileProviderItem>): void;

	finishEnumeratingUpToPage(_?: NSData): void;

	finishEnumeratingWithError(_: NSError): void;
}
declare var NSFileProviderEnumerationObserver: {

	prototype: NSFileProviderEnumerationObserver;
};

interface NSFileProviderEnumerator extends NSObjectProtocol {

	currentSyncAnchorWithCompletionHandler?(_?: (p1: NSData) => void): void;

	enumerateChangesForObserverFromSyncAnchor?(_: NSFileProviderChangeObserver, fromSyncAnchor: NSData): void;

	enumerateItemsForObserverStartingAtPage(_: NSFileProviderEnumerationObserver, startingAtPage: NSData): void;

	invalidate(): void;
}
declare var NSFileProviderEnumerator: {

	prototype: NSFileProviderEnumerator;
};

interface NSFileProviderItem extends NSObjectProtocol {

	capabilities?: NSFileProviderItemCapabilities;

	childItemCount?: number;

	contentModificationDate?: Date;

	creationDate?: Date;

	documentSize?: number;

	isDownloaded?: boolean;

	isDownloading?: boolean;

	downloadingError?: NSError;

	favoriteRank?: number;

	filename: string;

	itemIdentifier: string;

	lastUsedDate?: Date;

	mostRecentEditorNameComponents?: NSPersonNameComponents;

	isMostRecentVersionDownloaded?: boolean;

	ownerNameComponents?: NSPersonNameComponents;

	parentItemIdentifier: string;

	isShared?: boolean;

	isSharedByCurrentUser?: boolean;

	tagData?: NSData;

	typeIdentifier: string;

	isUploaded?: boolean;

	isUploading?: boolean;

	uploadingError?: NSError;

	userInfo?: NSDictionary<any, any>;
}
declare var NSFileProviderItem: {

	prototype: NSFileProviderItem;
};

enum NSFileProviderItemCapabilities {

	AllowsReading = 1,

	AllowsWriting = 2,

	AllowsReparenting = 4,

	AllowsRenaming = 8,

	AllowsTrashing = 16,

	AllowsDeleting = 32,

	AllowsAddingSubItems = 2,

	AllowsContentEnumerating = 1,

	AllowsAll = 63
}


interface NSFileProviderItemDecorating extends NSFileProviderItem {
}
declare var NSFileProviderItemDecorating: {

	prototype: NSFileProviderItemDecorating;
};

interface NSFileProviderItemFlags extends NSObjectProtocol {

	isHidden: boolean;

	isPathExtensionHidden: boolean;

	isUserExecutable: boolean;

	isUserReadable: boolean;

	isUserWritable: boolean;
}
declare var NSFileProviderItemFlags: {

	prototype: NSFileProviderItemFlags;
};
