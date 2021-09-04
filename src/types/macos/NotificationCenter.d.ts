
enum NCUpdateResult {

	NewData = 0,

	NoData = 1,

	Failed = 2
}


declare class NCWidgetController extends NSObject {

	static defaultWidgetController(): NCWidgetController;

	static widgetController(): NCWidgetController;

	setHasContentForWidgetWithBundleIdentifier(_: boolean, forWidgetWithBundleIdentifier: string): void;
}

declare class NCWidgetListViewController extends NSViewController {

	setContents(_: NSArray<any>)

	contents: NSArray<any>;

	setDelegate(_: NCWidgetListViewDelegate)

	delegate: NCWidgetListViewDelegate;

	setEditing(_: boolean)

	editing: boolean;

	setHasDividerLines(_: boolean)

	hasDividerLines: boolean;

	setMinimumVisibleRowCount(_: number)

	minimumVisibleRowCount: number;

	setShowsAddButtonWhenEditing(_: boolean)

	showsAddButtonWhenEditing: boolean;

	rowForViewController(_: NSViewController): number;

	viewControllerAtRowMakeIfNecessary(_: number, makeIfNecessary: boolean): NSViewController;
}

interface NCWidgetListViewDelegate extends NSObjectProtocol {

	widgetListDidRemoveRow?(_: NCWidgetListViewController, didRemoveRow: number): void;

	widgetListDidReorderRowToRow?(_: NCWidgetListViewController, didReorderRow: number, toRow: number): void;

	widgetListShouldRemoveRow?(_: NCWidgetListViewController, shouldRemoveRow: number): boolean;

	widgetListShouldReorderRow?(_: NCWidgetListViewController, shouldReorderRow: number): boolean;

	widgetListViewControllerForRow(_: NCWidgetListViewController, viewControllerForRow: number): NSViewController;

	widgetListPerformAddAction?(_: NCWidgetListViewController): void;
}
declare var NCWidgetListViewDelegate: {

	prototype: NCWidgetListViewDelegate;
};

interface NCWidgetProviding extends NSExtensionRequestHandling {

	widgetAllowsEditing?: boolean;

	widgetDidBeginEditing?(): void;

	widgetDidEndEditing?(): void;

	widgetMarginInsetsForProposedMarginInsets?(_: NSEdgeInsets): NSEdgeInsets;

	widgetPerformUpdateWithCompletionHandler?(_: (p1: NCUpdateResult) => void): void;
}
declare var NCWidgetProviding: {

	prototype: NCWidgetProviding;
};

declare class NCWidgetSearchViewController extends NSViewController {

	setDelegate(_: NCWidgetSearchViewDelegate)

	delegate: NCWidgetSearchViewDelegate;

	setSearchDescription(_: string)

	searchDescription: string;

	setSearchResultKeyPath(_: string)

	searchResultKeyPath: string;

	setSearchResults(_: NSArray<any>)

	searchResults: NSArray<any>;

	setSearchResultsPlaceholderString(_: string)

	searchResultsPlaceholderString: string;
}

interface NCWidgetSearchViewDelegate extends NSObjectProtocol {

	widgetSearchResultSelected(_: NCWidgetSearchViewController, resultSelected: any): void;

	widgetSearchSearchForTermMaxResults(_: NCWidgetSearchViewController, searchForTerm: string, maxResults: number): void;

	widgetSearchTermCleared(_: NCWidgetSearchViewController): void;
}
declare var NCWidgetSearchViewDelegate: {

	prototype: NCWidgetSearchViewDelegate;
};
