
interface ABActionCallbacks {
	version: number;
	property: () => string;
	title: (p1: any, p2: string) => string;
	enabled: (p1: any, p2: string) => boolean;
	selected: (p1: any, p2: string) => void;
}
declare var ABActionCallbacks: ABActionCallbacks;

declare function ABAddPropertiesAndTypes(addressBook: any, recordType: string, propertiesAndTypes: NSDictionary<any, any>): number;

declare function ABAddRecord(addressBook: any, record: any): boolean;

declare const ABAddRecordsError: number;

declare class ABAddressBook extends NSObject {

	static addressBook(): ABAddressBook;

	static sharedAddressBook(): ABAddressBook;

	addRecord(_: ABRecord): boolean;

	addRecordError(error: ABRecord): boolean;

	defaultCountryCode(): string;

	defaultNameOrdering(): number;

	formattedAddressFromDictionary(_: NSDictionary<any, any>): NSAttributedString;

	groups(): NSArray<any>;

	hasUnsavedChanges(): boolean;

	me(): ABPerson;

	people(): NSArray<any>;

	recordClassFromUniqueId(_: string): string;

	recordForUniqueId(_: string): ABRecord;

	recordsMatchingSearchElement(_: ABSearchElement): NSArray<any>;

	removeRecord(_: ABRecord): boolean;

	removeRecordError(error: ABRecord): boolean;

	save(): boolean;

	saveAndReturnError(): boolean;

	setMe(_: ABPerson): void;
}

declare var ABAddressBookErrorDomain: string;

declare function ABBeginLoadingImageDataForClient(person: any, callback: (p1: NSData, p2: number, p3: any) => void, refcon: any): number;

declare function ABCancelLoadingImageDataForTag(tag: number): void;

declare function ABCopyArrayOfAllGroups(addressBook: any): NSArray<any>;

declare function ABCopyArrayOfAllPeople(addressBook: any): NSArray<any>;

declare function ABCopyArrayOfMatchingRecords(addressBook: any, search: any): NSArray<any>;

declare function ABCopyArrayOfPropertiesForRecordType(addressBook: any, recordType: string): NSArray<any>;

declare function ABCopyDefaultCountryCode(addressBook: any): string;

declare function ABCopyLocalizedPropertyOrLabel(labelOrProperty: string): string;

declare function ABCopyRecordForUniqueId(addressBook: any, uniqueId: string): any;

declare function ABCopyRecordTypeFromUniqueId(addressBook: any, uniqueId: string): string;

declare function ABCreateFormattedAddressFromDictionary(addressBook: any, address: NSDictionary<any, any>): string;

declare function ABGetMe(addressBook: any): any;

declare function ABGetSharedAddressBook(): any;

declare class ABGroup extends ABRecord {

	static addPropertiesAndTypes(_: NSDictionary<any, any>): number;

	static properties(): NSArray<any>;

	static removeProperties(_: NSArray<any>): number;

	static searchElementForPropertyLabelKeyValue(_: string, label: string, key: string, value: any): ABSearchElement;

	static typeOfProperty(_: string): number;

	addMember(_: ABPerson): boolean;

	addSubgroup(_: ABGroup): boolean;

	distributionIdentifierForPropertyPerson(_: string, person: ABPerson): string;

	members(): NSArray<any>;

	parentGroups(): NSArray<any>;

	removeMember(_: ABPerson): boolean;

	removeSubgroup(_: ABGroup): boolean;

	setDistributionIdentifierForPropertyPerson(_: string, forProperty: string, person: ABPerson): boolean;

	subgroups(): NSArray<any>;
}

declare function ABGroupAddGroup(group: any, groupToAdd: any): boolean;

declare function ABGroupAddMember(group: any, personToAdd: any): boolean;

declare function ABGroupCopyArrayOfAllMembers(group: any): NSArray<any>;

declare function ABGroupCopyArrayOfAllSubgroups(group: any): NSArray<any>;

declare function ABGroupCopyDistributionIdentifier(group: any, person: any, property: string): string;

declare function ABGroupCopyParentGroups(group: any): NSArray<any>;

declare function ABGroupCreate(): any;

declare function ABGroupCreateSearchElement(property: string, label: string, key: string, value: any, p5: number): any;

declare function ABGroupRemoveGroup(group: any, groupToRemove: any): boolean;

declare function ABGroupRemoveMember(group: any, personToRemove: any): boolean;

declare function ABGroupSetDistributionIdentifier(group: any, person: any, property: string, identifier: string): boolean;

declare function ABHasUnsavedChanges(addressBook: any): boolean;

interface ABImageClient extends NSObjectProtocol {

	consumeImageDataForTag(_: NSData, forTag: number): void;
}
declare var ABImageClient: {

	prototype: ABImageClient;
};

declare function ABLocalizedPropertyOrLabel(propertyOrLabel: string): string;

declare class ABMultiValue extends NSObject implements NSCopying, NSFastEnumeration, NSMutableCopying {

	copyWithZone(_?: any): any;

	count(): number;

	countByEnumeratingWithStateObjectsCount(_: NSFastEnumerationState, objects?: any, count: number): number;

	identifierAtIndex(_: number): string;

	indexForIdentifier(_: string): number;

	labelAtIndex(_: number): string;

	labelForIdentifier(_: string): any;

	mutableCopyWithZone(_?: any): any;

	primaryIdentifier(): string;

	propertyType(): number;

	valueAtIndex(_: number): any;

	valueForIdentifier(_: string): any;
}

declare function ABMultiValueAdd(multiValue: any, value: any, label: string, outIdentifier: string): boolean;

declare function ABMultiValueCopyIdentifierAtIndex(multiValue: any, index: number): string;

declare function ABMultiValueCopyLabelAtIndex(multiValue: any, index: number): string;

declare function ABMultiValueCopyPrimaryIdentifier(multiValue: any): string;

declare function ABMultiValueCopyValueAtIndex(multiValue: any, index: number): any;

declare function ABMultiValueCount(multiValue: any): number;

declare function ABMultiValueCreate(): any;

declare function ABMultiValueCreateCopy(multiValue: any): any;

declare function ABMultiValueCreateMutable(): any;

declare function ABMultiValueCreateMutableCopy(multiValue: any): any;

declare var ABMultiValueIdentifiersErrorKey: string;

declare function ABMultiValueIndexForIdentifier(multiValue: any, identifier: string): number;

declare function ABMultiValueInsert(multiValue: any, value: any, label: string, index: number, outIdentifier: string): boolean;

declare function ABMultiValuePropertyType(multiValue: any): number;

declare function ABMultiValueRemove(multiValue: any, index: number): boolean;

declare function ABMultiValueReplaceLabel(multiValue: any, label: string, index: number): boolean;

declare function ABMultiValueReplaceValue(multiValue: any, value: any, index: number): boolean;

declare function ABMultiValueSetPrimaryIdentifier(multiValue: any, identifier: string): boolean;

declare class ABMutableMultiValue extends ABMultiValue {

	addValueWithLabel(_: any, withLabel: string): string;

	insertValueWithLabelAtIndex(_: any, withLabel: string, atIndex: number): string;

	removeValueAndLabelAtIndex(_: number): boolean;

	replaceLabelAtIndexWithLabel(_: number, withLabel: string): boolean;

	replaceValueAtIndexWithValue(_: number, withValue: any): boolean;

	setPrimaryIdentifier(_: string): boolean;
}

declare var ABPeoplePickerDisplayedPropertyDidChangeNotification: string;

declare var ABPeoplePickerGroupSelectionDidChangeNotification: string;

declare var ABPeoplePickerNameSelectionDidChangeNotification: string;

enum ABPeoplePickerSelectionBehavior {

	NoValueSelection = 0,

	SingleValueSelection = 1,

	MultipleValueSelection = 2
}


declare var ABPeoplePickerValueSelectionDidChangeNotification: string;

declare class ABPeoplePickerView extends NSView {

	setAccessoryView(_: NSView)

	accessoryView: NSView;

	setAllowsGroupSelection(_: boolean)

	allowsGroupSelection: boolean;

	setAllowsMultipleSelection(_: boolean)

	allowsMultipleSelection: boolean;

	setAutosaveName(_: string)

	autosaveName: string;

	setDisplayedProperty(_: string)

	displayedProperty: string;

	setGroupDoubleAction(_: string)

	groupDoubleAction: string;

	setNameDoubleAction(_: string)

	nameDoubleAction: string;

	readonly selectedGroups: NSArray<any>;

	readonly selectedRecords: NSArray<any>;

	setTarget(_: any)

	target: any;

	setValueSelectionBehavior(_: ABPeoplePickerSelectionBehavior)

	valueSelectionBehavior: ABPeoplePickerSelectionBehavior;

	addProperty(_: string): void;

	clearSearchField(_: any): void;

	columnTitleForProperty(_: string): string;

	deselectAll(_: any): void;

	deselectGroup(_: ABGroup): void;

	deselectIdentifierForPerson(_: string, forPerson: ABPerson): void;

	deselectRecord(_: ABRecord): void;

	editInAddressBook(_: any): void;

	properties(): NSArray<any>;

	removeProperty(_: string): void;

	selectGroupByExtendingSelection(_: ABGroup, byExtendingSelection: boolean): void;

	selectIdentifierForPersonByExtendingSelection(_: string, forPerson: ABPerson, byExtendingSelection: boolean): void;

	selectInAddressBook(_: any): void;

	selectRecordByExtendingSelection(_: ABRecord, byExtendingSelection: boolean): void;

	selectedIdentifiersForPerson(_: ABPerson): NSArray<any>;

	selectedValues(): NSArray<any>;

	setColumnTitleForProperty(_: string, forProperty: string): void;
}

declare class ABPerson extends ABRecord {

	static addPropertiesAndTypes(_: NSDictionary<any, any>): number;

	static cancelLoadingImageDataForTag(_: number): void;

	static properties(): NSArray<any>;

	static removeProperties(_: NSArray<any>): number;

	static searchElementForPropertyLabelKeyValue(_: string, label: string, key: string, value: any): ABSearchElement;

	static typeOfProperty(_: string): number;

	static create(VCardRepresentation: NSData);

	beginLoadingImageDataForClient(_: ABImageClient): number;

	imageData(): NSData;

	linkedPeople(): NSArray<any>;

	parentGroups(): NSArray<any>;

	setImageData(_: NSData): boolean;

	vCardRepresentation(): NSData;
}

declare function ABPersonCopyImageData(person: any): NSData;

declare function ABPersonCopyParentGroups(person: any): NSArray<any>;

declare function ABPersonCopyVCardRepresentation(person: any): NSData;

declare function ABPersonCreate(): any;

declare function ABPersonCreateSearchElement(property: string, label: string, key: string, value: any, p5: number): any;

declare function ABPersonCreateWithVCardRepresentation(vCard: NSData): any;

declare class ABPersonPicker extends NSObject {

	setDelegate(_: ABPersonPickerDelegate)

	delegate: ABPersonPickerDelegate;

	setProperties(_: NSArray<any>)

	properties: NSArray<any>;

	close(): void;

	showRelativeToRectOfViewPreferredEdge(_: CGRect, ofView: NSView, preferredEdge: NSRectEdge): void;
}

interface ABPersonPickerDelegate extends NSObjectProtocol {

	personPickerDidChoosePersonPropertyIdentifier(_: ABPersonPicker, didChoosePerson: ABPerson, property: string, identifier: string): void;

	personPickerDidClose?(_: ABPersonPicker): void;
}
declare var ABPersonPickerDelegate: {

	prototype: ABPersonPickerDelegate;
};

declare function ABPersonSetImageData(person: any, imageData: NSData): boolean;

declare class ABPersonView extends NSView {

	setEditing(_: boolean)

	editing: boolean;

	setPerson(_: ABPerson)

	person: ABPerson;

	setShouldShowLinkedPeople(_: boolean)

	shouldShowLinkedPeople: boolean;
}

declare function ABPickerAddProperty(inPicker: any, inProperty: string): void;

declare function ABPickerChangeAttributes(inPicker: any, inAttributesToSet: number, inAttributesToClear: number): void;

declare function ABPickerClearSearchField(inPicker: any): void;

declare function ABPickerCopyColumnTitle(inPicker: any, inProperty: string): string;

declare function ABPickerCopyDisplayedProperty(inPicker: any): string;

declare function ABPickerCopyProperties(inPicker: any): NSArray<any>;

declare function ABPickerCopySelectedGroups(inPicker: any): NSArray<any>;

declare function ABPickerCopySelectedIdentifiers(inPicker: any, inPerson: any): NSArray<any>;

declare function ABPickerCopySelectedRecords(inPicker: any): NSArray<any>;

declare function ABPickerCopySelectedValues(inPicker: any): NSArray<any>;

declare function ABPickerCreate(): any;

declare function ABPickerDeselectAll(inPicker: any): void;

declare function ABPickerDeselectGroup(inPicker: any, inGroup: any): void;

declare function ABPickerDeselectIdentifier(inPicker: any, inPerson: any, inIdentifier: string): void;

declare function ABPickerDeselectRecord(inPicker: any, inRecord: any): void;

declare function ABPickerEditInAddressBook(inPicker: any): void;

declare function ABPickerGetAttributes(inPicker: any): number;

declare function ABPickerGetDelegate(inPicker: any): any;

declare function ABPickerGetFrame(inPicker: any, outFrame: CGRect): void;

declare function ABPickerIsVisible(inPicker: any): boolean;

declare function ABPickerRemoveProperty(inPicker: any, inProperty: string): void;

declare function ABPickerSelectGroup(inPicker: any, inGroup: any, inExtendSelection: boolean): void;

declare function ABPickerSelectIdentifier(inPicker: any, inPerson: any, inIdentifier: string, inExtendSelection: boolean): void;

declare function ABPickerSelectInAddressBook(inPicker: any): void;

declare function ABPickerSelectRecord(inPicker: any, inRecord: any, inExtendSelection: boolean): void;

declare function ABPickerSetColumnTitle(inPicker: any, inTitle: string, inProperty: string): void;

declare function ABPickerSetDelegate(inPicker: any, inDelegate: any): void;

declare function ABPickerSetDisplayedProperty(inPicker: any, inProperty: string): void;

declare function ABPickerSetFrame(inPicker: any, inFrame: CGRect): void;

declare function ABPickerSetVisibility(inPicker: any, visible: boolean): void;

declare const ABPropertyReadOnlyError: number;

declare const ABPropertyUnsupportedBySourceError: number;

declare const ABPropertyValueValidationError: number;

declare class ABRecord extends NSObject {

	readonly displayName: string;

	readonly uniqueId: string;

	static create(addressBook: ABAddressBook);

	isReadOnly(): boolean;

	removeValueForProperty(_: string): boolean;

	setValueForProperty(_: any, forProperty: string): boolean;

	setValueForPropertyError(forProperty: any, error: string): boolean;

	valueForProperty(_: string): any;
}

declare function ABRecordCopyRecordType(record: any): string;

declare function ABRecordCopyUniqueId(record: any): string;

declare function ABRecordCopyValue(record: any, property: string): any;

declare function ABRecordCreateCopy(record: any): any;

declare function ABRecordIsReadOnly(record: any): boolean;

declare function ABRecordRemoveValue(record: any, property: string): boolean;

declare function ABRecordSetValue(record: any, property: string, value: any): boolean;

declare function ABRemoveProperties(addressBook: any, recordType: string, properties: NSArray<any> | any[]): number;

declare function ABRemoveRecord(addressBook: any, record: any): boolean;

declare const ABRemoveRecordsError: number;

declare function ABSave(addressBook: any): boolean;

declare class ABSearchElement extends NSObject {

	static searchElementForConjunctionChildren(_: number, children: NSArray<any>): ABSearchElement;

	matchesRecord(_: ABRecord): boolean;
}

declare function ABSearchElementCreateWithConjunction(conjunction: number, childrenSearchElement: NSArray<any> | any[]): any;

declare function ABSearchElementMatchesRecord(searchElement: any, record: any): boolean;

declare function ABSetMe(addressBook: any, moi: any): void;

declare function ABTypeOfProperty(addressBook: any, recordType: string, property: string): number;

enum _ABPropertyType {

	kABErrorInProperty = 0,

	kABStringProperty = 1,

	kABIntegerProperty = 2,

	kABRealProperty = 3,

	kABDateProperty = 4,

	kABArrayProperty = 5,

	kABDictionaryProperty = 6,

	kABDataProperty = 7,

	kABDateComponentsProperty = 8,

	kABMultiStringProperty = 257,

	kABMultiIntegerProperty = 258,

	kABMultiRealProperty = 259,

	kABMultiDateProperty = 260,

	kABMultiArrayProperty = 261,

	kABMultiDictionaryProperty = 262,

	kABMultiDataProperty = 263,

	kABMultiDateComponentsProperty = 264
}


enum _ABSearchComparison {

	kABEqual = 0,

	kABNotEqual = 1,

	kABLessThan = 2,

	kABLessThanOrEqual = 3,

	kABGreaterThan = 4,

	kABGreaterThanOrEqual = 5,

	kABEqualCaseInsensitive = 6,

	kABContainsSubString = 7,

	kABContainsSubStringCaseInsensitive = 8,

	kABPrefixMatch = 9,

	kABPrefixMatchCaseInsensitive = 10,

	kABBitsInBitFieldMatch = 11,

	kABDoesNotContainSubString = 12,

	kABDoesNotContainSubStringCaseInsensitive = 13,

	kABNotEqualCaseInsensitive = 14,

	kABSuffixMatch = 15,

	kABSuffixMatchCaseInsensitive = 16,

	kABWithinIntervalAroundToday = 17,

	kABWithinIntervalAroundTodayYearless = 18,

	kABNotWithinIntervalAroundToday = 19,

	kABNotWithinIntervalAroundTodayYearless = 20,

	kABWithinIntervalFromToday = 21,

	kABWithinIntervalFromTodayYearless = 22,

	kABNotWithinIntervalFromToday = 23,

	kABNotWithinIntervalFromTodayYearless = 24
}


enum _ABSearchConjunction {

	kABSearchAnd = 0,

	kABSearchOr = 1
}


interface __ABBookflags {
	hasUnsavedChanges: number;
	readOnly: number;
	importMe: number;
	needConversion: number;
	cleanedUp: number;
	importTips: number;
	restoreFromMetaData: number;
	prefsNeedSync: number;
	waitingForReset: number;
	enforcesConstraints: number;
	tracksAllSources: number;
	_reserved: number;
}
declare var __ABBookflags: __ABBookflags;

declare var kABAddressCityKey: string;

declare var kABAddressCountryCodeKey: string;

declare var kABAddressCountryKey: string;

declare var kABAddressHomeLabel: string;

declare var kABAddressProperty: string;

declare var kABAddressStateKey: string;

declare var kABAddressStreetKey: string;

declare var kABAddressWorkLabel: string;

declare var kABAddressZIPKey: string;

declare var kABAlternateBirthdayComponentsProperty: string;

declare var kABAnniversaryLabel: string;

declare var kABAssistantLabel: string;

declare var kABBirthdayComponentsProperty: string;

declare var kABBirthdayProperty: string;

declare var kABBrotherLabel: string;

declare var kABCalendarURIsProperty: string;

declare var kABChildLabel: string;

declare var kABCreationDateProperty: string;

declare var kABDatabaseChangedExternallyNotification: string;

declare var kABDatabaseChangedNotification: string;

declare var kABDeletedRecords: string;

declare var kABDepartmentProperty: string;

declare var kABEmailHomeLabel: string;

declare var kABEmailMobileMeLabel: string;

declare var kABEmailProperty: string;

declare var kABEmailWorkLabel: string;

declare var kABFatherLabel: string;

declare var kABFirstNamePhoneticProperty: string;

declare var kABFirstNameProperty: string;

declare var kABFriendLabel: string;

declare var kABGroupNameProperty: string;

declare var kABHomeLabel: string;

declare var kABHomePageLabel: string;

declare var kABHomePageProperty: string;

declare var kABInsertedRecords: string;

declare var kABInstantMessageProperty: string;

declare var kABInstantMessageServiceAIM: string;

declare var kABInstantMessageServiceFacebook: string;

declare var kABInstantMessageServiceGaduGadu: string;

declare var kABInstantMessageServiceGoogleTalk: string;

declare var kABInstantMessageServiceICQ: string;

declare var kABInstantMessageServiceJabber: string;

declare var kABInstantMessageServiceKey: string;

declare var kABInstantMessageServiceMSN: string;

declare var kABInstantMessageServiceQQ: string;

declare var kABInstantMessageServiceSkype: string;

declare var kABInstantMessageServiceYahoo: string;

declare var kABInstantMessageUsernameKey: string;

declare var kABJobTitleProperty: string;

declare var kABLastNamePhoneticProperty: string;

declare var kABLastNameProperty: string;

declare var kABMaidenNameProperty: string;

declare var kABManagerLabel: string;

declare var kABMiddleNamePhoneticProperty: string;

declare var kABMiddleNameProperty: string;

declare var kABMobileMeLabel: string;

declare var kABModificationDateProperty: string;

declare var kABMotherLabel: string;

declare var kABNicknameProperty: string;

declare var kABNoteProperty: string;

declare var kABOrganizationPhoneticProperty: string;

declare var kABOrganizationProperty: string;

declare var kABOtherDateComponentsProperty: string;

declare var kABOtherDatesProperty: string;

declare var kABOtherLabel: string;

declare var kABParentLabel: string;

declare var kABPartnerLabel: string;

declare var kABPersonFlags: string;

declare var kABPhoneHomeFAXLabel: string;

declare var kABPhoneHomeLabel: string;

declare var kABPhoneMainLabel: string;

declare var kABPhoneMobileLabel: string;

declare var kABPhonePagerLabel: string;

declare var kABPhoneProperty: string;

declare var kABPhoneWorkFAXLabel: string;

declare var kABPhoneWorkLabel: string;

declare var kABPhoneiPhoneLabel: string;

declare const kABPickerAllowGroupSelection: number;

declare const kABPickerAllowMultipleSelection: number;

declare const kABPickerMultipleValueSelection: number;

declare const kABPickerSingleValueSelection: number;

declare var kABRelatedNamesProperty: string;

declare var kABSisterLabel: string;

declare var kABSocialProfileProperty: string;

declare var kABSocialProfileServiceFacebook: string;

declare var kABSocialProfileServiceFlickr: string;

declare var kABSocialProfileServiceKey: string;

declare var kABSocialProfileServiceLinkedIn: string;

declare var kABSocialProfileServiceMySpace: string;

declare var kABSocialProfileServiceSinaWeibo: string;

declare var kABSocialProfileServiceTencentWeibo: string;

declare var kABSocialProfileServiceTwitter: string;

declare var kABSocialProfileServiceYelp: string;

declare var kABSocialProfileURLKey: string;

declare var kABSocialProfileUserIdentifierKey: string;

declare var kABSocialProfileUsernameKey: string;

declare var kABSpouseLabel: string;

declare var kABSuffixProperty: string;

declare var kABTitleProperty: string;

declare var kABUIDProperty: string;

declare var kABURLsProperty: string;

declare var kABUpdatedRecords: string;

declare var kABWorkLabel: string;

declare const kEventABPeoplePickerDisplayedPropertyChanged: number;

declare const kEventABPeoplePickerGroupDoubleClicked: number;

declare const kEventABPeoplePickerGroupSelectionChanged: number;

declare const kEventABPeoplePickerNameDoubleClicked: number;

declare const kEventABPeoplePickerNameSelectionChanged: number;

declare const kEventABPeoplePickerValueSelectionChanged: number;

declare const kEventClassABPeoplePicker: number;

declare const kEventParamABPickerRef: number;
