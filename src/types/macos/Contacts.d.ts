
enum CNAuthorizationStatus {

	NotDetermined = 0,

	Restricted = 1,

	Denied = 2,

	Authorized = 3
}


declare class CNChangeHistoryAddContactEvent extends CNChangeHistoryEvent {

	readonly contact: CNContact;

	readonly containerIdentifier: string;
}

declare class CNChangeHistoryAddGroupEvent extends CNChangeHistoryEvent {

	readonly containerIdentifier: string;

	readonly group: CNGroup;
}

declare class CNChangeHistoryAddMemberToGroupEvent extends CNChangeHistoryEvent {

	readonly group: CNGroup;

	readonly member: CNContact;
}

declare class CNChangeHistoryAddSubgroupToGroupEvent extends CNChangeHistoryEvent {

	readonly group: CNGroup;

	readonly subgroup: CNGroup;
}

declare class CNChangeHistoryDeleteContactEvent extends CNChangeHistoryEvent {

	readonly contactIdentifier: string;
}

declare class CNChangeHistoryDeleteGroupEvent extends CNChangeHistoryEvent {

	readonly groupIdentifier: string;
}

declare class CNChangeHistoryDropEverythingEvent extends CNChangeHistoryEvent {
}

declare class CNChangeHistoryEvent extends NSObject implements NSCopying, NSSecureCoding {

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	acceptEventVisitor(_: CNChangeHistoryEventVisitor): void;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

interface CNChangeHistoryEventVisitor extends NSObjectProtocol {

	visitAddContactEvent(_: CNChangeHistoryAddContactEvent): void;

	visitAddGroupEvent?(_: CNChangeHistoryAddGroupEvent): void;

	visitAddMemberToGroupEvent?(_: CNChangeHistoryAddMemberToGroupEvent): void;

	visitAddSubgroupToGroupEvent?(_: CNChangeHistoryAddSubgroupToGroupEvent): void;

	visitDeleteContactEvent(_: CNChangeHistoryDeleteContactEvent): void;

	visitDeleteGroupEvent?(_: CNChangeHistoryDeleteGroupEvent): void;

	visitDropEverythingEvent(_: CNChangeHistoryDropEverythingEvent): void;

	visitRemoveMemberFromGroupEvent?(_: CNChangeHistoryRemoveMemberFromGroupEvent): void;

	visitRemoveSubgroupFromGroupEvent?(_: CNChangeHistoryRemoveSubgroupFromGroupEvent): void;

	visitUpdateContactEvent(_: CNChangeHistoryUpdateContactEvent): void;

	visitUpdateGroupEvent?(_: CNChangeHistoryUpdateGroupEvent): void;
}
declare var CNChangeHistoryEventVisitor: {

	prototype: CNChangeHistoryEventVisitor;
};

declare class CNChangeHistoryFetchRequest extends CNFetchRequest implements NSSecureCoding {

	setAdditionalContactKeyDescriptors(_: NSArray<CNKeyDescriptor>)

	additionalContactKeyDescriptors: NSArray<CNKeyDescriptor>;

	setExcludedTransactionAuthors(_: NSArray<string>)

	excludedTransactionAuthors: NSArray<string>;

	setIncludeGroupChanges(_: boolean)

	includeGroupChanges: boolean;

	setMutableObjects(_: boolean)

	mutableObjects: boolean;

	setShouldUnifyResults(_: boolean)

	shouldUnifyResults: boolean;

	setStartingToken(_: NSData)

	startingToken: NSData;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class CNChangeHistoryRemoveMemberFromGroupEvent extends CNChangeHistoryEvent {

	readonly group: CNGroup;

	readonly member: CNContact;
}

declare class CNChangeHistoryRemoveSubgroupFromGroupEvent extends CNChangeHistoryEvent {

	readonly group: CNGroup;

	readonly subgroup: CNGroup;
}

declare class CNChangeHistoryUpdateContactEvent extends CNChangeHistoryEvent {

	readonly contact: CNContact;
}

declare class CNChangeHistoryUpdateGroupEvent extends CNChangeHistoryEvent {

	readonly group: CNGroup;
}

declare class CNContact extends NSObject implements NSCopying, NSMutableCopying, NSSecureCoding, NSItemProviderReading, NSItemProviderWriting {

	static comparatorForNameSortOrder(_: CNContactSortOrder): (p1: any, p2: any) => NSComparisonResult;

	static descriptorForAllComparatorKeys(): CNKeyDescriptor;

	static itemProviderVisibilityForRepresentationWithTypeIdentifier(_: string): NSItemProviderRepresentationVisibility;

	static localizedStringForKey(_: string): string;

	static objectWithItemProviderDataTypeIdentifierError(typeIdentifier: NSData, error: string): CNContact;

	static predicateForContactsInContainerWithIdentifier(_: string): NSPredicate;

	static predicateForContactsInGroupWithIdentifier(_: string): NSPredicate;

	static predicateForContactsMatchingEmailAddress(_: string): NSPredicate;

	static predicateForContactsMatchingName(_: string): NSPredicate;

	static predicateForContactsMatchingPhoneNumber(_: CNPhoneNumber): NSPredicate;

	static predicateForContactsWithIdentifiers(_: NSArray<string>): NSPredicate;

	readonly birthday: NSDateComponents;

	readonly contactRelations: NSArray<CNLabeledValue<CNContactRelation>>;

	readonly contactType: CNContactType;

	readonly dates: NSArray<CNLabeledValue<NSDateComponents>>;

	readonly departmentName: string;

	readonly emailAddresses: NSArray<CNLabeledValue<string>>;

	readonly familyName: string;

	readonly givenName: string;

	readonly identifier: string;

	readonly imageData: NSData;

	readonly imageDataAvailable: boolean;

	readonly instantMessageAddresses: NSArray<CNLabeledValue<CNInstantMessageAddress>>;

	readonly jobTitle: string;

	readonly middleName: string;

	readonly namePrefix: string;

	readonly nameSuffix: string;

	readonly nickname: string;

	readonly nonGregorianBirthday: NSDateComponents;

	readonly note: string;

	readonly organizationName: string;

	readonly phoneNumbers: NSArray<CNLabeledValue<CNPhoneNumber>>;

	readonly phoneticFamilyName: string;

	readonly phoneticGivenName: string;

	readonly phoneticMiddleName: string;

	readonly phoneticOrganizationName: string;

	readonly postalAddresses: NSArray<CNLabeledValue<CNPostalAddress>>;

	readonly previousFamilyName: string;

	readonly socialProfiles: NSArray<CNLabeledValue<CNSocialProfile>>;

	readonly thumbnailImageData: NSData;

	readonly urlAddresses: NSArray<CNLabeledValue<string>>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly writableTypeIdentifiersForItemProvider: NSArray<string>; // inherited from NSItemProviderWriting

	readonly  // inherited from NSObjectProtocol

	static readableTypeIdentifiersForItemProvider(): NSArray<string>; // inherited from NSItemProviderReading

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static writableTypeIdentifiersForItemProvider(): NSArray<string>; // inherited from NSItemProviderWriting

	static create(coder: NSCoder); // inherited from NSCoding

	areKeysAvailable(_: NSArray<CNKeyDescriptor>): boolean;

	conformsToProtocol(_: any /* Protocol */): boolean;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	isEqual(_: any): boolean;

	isKeyAvailable(_: string): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	isUnifiedWithContactWithIdentifier(_: string): boolean;

	itemProviderVisibilityForRepresentationWithTypeIdentifier(_: string): NSItemProviderRepresentationVisibility;

	loadDataWithTypeIdentifierForItemProviderCompletionHandler(_: string, forItemProviderCompletionHandler?: (p1: NSData, p2: NSError) => void): NSProgress;

	mutableCopyWithZone(_?: any): any;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var CNContactBirthdayKey: string;

declare var CNContactDatesKey: string;

declare var CNContactDepartmentNameKey: string;

enum CNContactDisplayNameOrder {

	UserDefault = 0,

	GivenNameFirst = 1,

	FamilyNameFirst = 2
}


declare var CNContactEmailAddressesKey: string;

declare var CNContactFamilyNameKey: string;

declare class CNContactFetchRequest extends CNFetchRequest implements NSSecureCoding {

	setKeysToFetch(_: NSArray<CNKeyDescriptor>)

	keysToFetch: NSArray<CNKeyDescriptor>;

	setMutableObjects(_: boolean)

	mutableObjects: boolean;

	setPredicate(_: NSPredicate)

	predicate: NSPredicate;

	setSortOrder(_: CNContactSortOrder)

	sortOrder: CNContactSortOrder;

	setUnifyResults(_: boolean)

	unifyResults: boolean;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(keysToFetch: NSArray<CNKeyDescriptor> | CNKeyDescriptor[]);

	encodeWithCoder(_: NSCoder): void;
}

declare class CNContactFormatter extends NSFormatter implements NSSecureCoding {

	static attributedStringFromContactStyleDefaultAttributes(_: CNContact, style: CNContactFormatterStyle, defaultAttributes?: NSDictionary<any, any>): NSAttributedString;

	static delimiterForContact(_: CNContact): string;

	static descriptorForRequiredKeysForStyle(_: CNContactFormatterStyle): CNKeyDescriptor;

	static nameOrderForContact(_: CNContact): CNContactDisplayNameOrder;

	static stringFromContactStyle(_: CNContact, style: CNContactFormatterStyle): string;

	setStyle(_: CNContactFormatterStyle)

	style: CNContactFormatterStyle;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	attributedStringFromContactDefaultAttributes(_: CNContact, defaultAttributes?: NSDictionary<any, any>): NSAttributedString;

	encodeWithCoder(_: NSCoder): void;

	stringFromContact(_: CNContact): string;
}

enum CNContactFormatterStyle {

	FullName = 0,

	PhoneticFullName = 1
}


declare var CNContactGivenNameKey: string;

declare var CNContactIdentifierKey: string;

declare var CNContactImageDataAvailableKey: string;

declare var CNContactImageDataKey: string;

declare var CNContactInstantMessageAddressesKey: string;

declare var CNContactJobTitleKey: string;

declare var CNContactMiddleNameKey: string;

declare var CNContactNamePrefixKey: string;

declare var CNContactNameSuffixKey: string;

declare var CNContactNicknameKey: string;

declare var CNContactNonGregorianBirthdayKey: string;

declare var CNContactNoteKey: string;

declare var CNContactOrganizationNameKey: string;

declare var CNContactPhoneNumbersKey: string;

declare var CNContactPhoneticFamilyNameKey: string;

declare var CNContactPhoneticGivenNameKey: string;

declare var CNContactPhoneticMiddleNameKey: string;

declare var CNContactPhoneticOrganizationNameKey: string;

declare var CNContactPostalAddressesKey: string;

declare var CNContactPreviousFamilyNameKey: string;

declare class CNContactProperty extends NSObject implements NSCopying, NSSecureCoding {

	readonly contact: CNContact;

	readonly identifier: string;

	readonly key: string;

	readonly label: string;

	readonly value: any;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare var CNContactPropertyAttribute: string;

declare var CNContactPropertyNotFetchedExceptionName: string;

declare class CNContactRelation extends NSObject implements NSCopying, NSSecureCoding {

	static contactRelationWithName(_: string): CNContactRelation;

	readonly name: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(name: string);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare var CNContactRelationsKey: string;

declare var CNContactSocialProfilesKey: string;

enum CNContactSortOrder {

	None = 0,

	UserDefault = 1,

	GivenName = 2,

	FamilyName = 3
}


declare class CNContactStore extends NSObject {

	static authorizationStatusForEntityType(_: CNEntityType): CNAuthorizationStatus;

	readonly currentHistoryToken: NSData;

	containersMatchingPredicateError(error?: NSPredicate): NSArray<CNContainer>;

	defaultContainerIdentifier(): string;

	enumerateContactsWithFetchRequestErrorUsingBlock(_: CNContactFetchRequest, error?: NSError, usingBlock: (p1: CNContact, p2: boolean) => void): boolean;

	executeSaveRequestError(error: CNSaveRequest): boolean;

	groupsMatchingPredicateError(error?: NSPredicate): NSArray<CNGroup>;

	requestAccessForEntityTypeCompletionHandler(_: CNEntityType, completionHandler?: (p1: boolean, p2: NSError) => void): void;

	unifiedContactWithIdentifierKeysToFetchError(keysToFetch: string, error: NSArray<CNKeyDescriptor>): CNContact;

	unifiedContactsMatchingPredicateKeysToFetchError(keysToFetch: NSPredicate, error: NSArray<CNKeyDescriptor>): NSArray<CNContact>;

	unifiedMeContactWithKeysToFetchError(error: NSArray<CNKeyDescriptor>): CNContact;
}

declare var CNContactStoreDidChangeNotification: string;

declare var CNContactThumbnailImageDataKey: string;

enum CNContactType {

	Person = 0,

	Organization = 1
}


declare var CNContactTypeKey: string;

declare var CNContactUrlAddressesKey: string;

declare class CNContactVCardSerialization extends NSObject {

	static contactsWithDataError(error: NSData): NSArray<CNContact>;

	static dataWithContactsError(error: NSArray<CNContact>): NSData;

	static descriptorForRequiredKeys(): CNKeyDescriptor;
}

declare class CNContactsUserDefaults extends NSObject {

	static sharedDefaults(): CNContactsUserDefaults;

	readonly countryCode: string;

	readonly sortOrder: CNContactSortOrder;
}

declare class CNContainer extends NSObject implements NSCopying, NSSecureCoding {

	static predicateForContainerOfContactWithIdentifier(_: string): NSPredicate;

	static predicateForContainerOfGroupWithIdentifier(_: string): NSPredicate;

	static predicateForContainersWithIdentifiers(_: NSArray<string>): NSPredicate;

	readonly identifier: string;

	readonly name: string;

	readonly type: CNContainerType;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare var CNContainerIdentifierKey: string;

declare var CNContainerNameKey: string;

enum CNContainerType {

	Unassigned = 0,

	Local = 1,

	Exchange = 2,

	CardDAV = 3
}


declare var CNContainerTypeKey: string;

enum CNEntityType {

	Contacts = 0
}


enum CNErrorCode {

	CommunicationError = 1,

	DataAccessError = 2,

	AuthorizationDenied = 100,

	NoAccessableWritableContainers = 101,

	UnauthorizedKeys = 102,

	FeatureDisabledByUser = 103,

	RecordDoesNotExist = 200,

	InsertedRecordAlreadyExists = 201,

	ContainmentCycle = 202,

	ContainmentScope = 203,

	ParentRecordDoesNotExist = 204,

	RecordIdentifierInvalid = 205,

	RecordNotWritable = 206,

	ParentContainerNotWritable = 207,

	ValidationMultipleErrors = 300,

	ValidationTypeMismatch = 301,

	ValidationConfigurationError = 302,

	PredicateInvalid = 400,

	PolicyViolation = 500,

	ClientIdentifierInvalid = 600,

	ClientIdentifierDoesNotExist = 601,

	ClientIdentifierCollision = 602,

	ChangeHistoryExpired = 603,

	ChangeHistoryInvalidAnchor = 604,

	VCardMalformed = 700,

	VCardSummarizationError = 701
}


declare var CNErrorDomain: string;

declare var CNErrorUserInfoAffectedRecordIdentifiersKey: string;

declare var CNErrorUserInfoAffectedRecordsKey: string;

declare var CNErrorUserInfoKeyPathsKey: string;

declare var CNErrorUserInfoValidationErrorsKey: string;

declare class CNFetchRequest extends NSObject {
}

declare class CNFetchResult<ValueType> extends NSObject {

	readonly currentHistoryToken: NSData;

	readonly value: ValueType;
}

declare class CNGroup extends NSObject implements NSCopying, NSMutableCopying, NSSecureCoding {

	static predicateForGroupsInContainerWithIdentifier(_: string): NSPredicate;

	static predicateForGroupsWithIdentifiers(_: NSArray<string>): NSPredicate;

	static predicateForSubgroupsInGroupWithIdentifier(_: string): NSPredicate;

	readonly identifier: string;

	readonly name: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	mutableCopyWithZone(_?: any): any;
}

declare var CNGroupIdentifierKey: string;

declare var CNGroupNameKey: string;

declare class CNInstantMessageAddress extends NSObject implements NSCopying, NSSecureCoding {

	static localizedStringForKey(_: string): string;

	static localizedStringForService(_: string): string;

	readonly service: string;

	readonly username: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(username: string, service: string);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare var CNInstantMessageAddressServiceKey: string;

declare var CNInstantMessageAddressUsernameKey: string;

declare var CNInstantMessageServiceAIM: string;

declare var CNInstantMessageServiceFacebook: string;

declare var CNInstantMessageServiceGaduGadu: string;

declare var CNInstantMessageServiceGoogleTalk: string;

declare var CNInstantMessageServiceICQ: string;

declare var CNInstantMessageServiceJabber: string;

declare var CNInstantMessageServiceMSN: string;

declare var CNInstantMessageServiceQQ: string;

declare var CNInstantMessageServiceSkype: string;

declare var CNInstantMessageServiceYahoo: string;

interface CNKeyDescriptor extends NSCopying, NSObjectProtocol, NSSecureCoding {
}
declare var CNKeyDescriptor: {

	prototype: CNKeyDescriptor;
};

declare var CNLabelContactRelationAssistant: string;

declare var CNLabelContactRelationAunt: string;

declare var CNLabelContactRelationAuntFathersBrothersWife: string;

declare var CNLabelContactRelationAuntFathersElderBrothersWife: string;

declare var CNLabelContactRelationAuntFathersElderSister: string;

declare var CNLabelContactRelationAuntFathersSister: string;

declare var CNLabelContactRelationAuntFathersYoungerBrothersWife: string;

declare var CNLabelContactRelationAuntFathersYoungerSister: string;

declare var CNLabelContactRelationAuntMothersBrothersWife: string;

declare var CNLabelContactRelationAuntMothersElderSister: string;

declare var CNLabelContactRelationAuntMothersSister: string;

declare var CNLabelContactRelationAuntMothersYoungerSister: string;

declare var CNLabelContactRelationAuntParentsElderSister: string;

declare var CNLabelContactRelationAuntParentsSister: string;

declare var CNLabelContactRelationAuntParentsYoungerSister: string;

declare var CNLabelContactRelationBoyfriend: string;

declare var CNLabelContactRelationBrother: string;

declare var CNLabelContactRelationBrotherInLaw: string;

declare var CNLabelContactRelationBrotherInLawElderSistersHusband: string;

declare var CNLabelContactRelationBrotherInLawHusbandsBrother: string;

declare var CNLabelContactRelationBrotherInLawHusbandsSistersHusband: string;

declare var CNLabelContactRelationBrotherInLawSistersHusband: string;

declare var CNLabelContactRelationBrotherInLawSpousesBrother: string;

declare var CNLabelContactRelationBrotherInLawWifesBrother: string;

declare var CNLabelContactRelationBrotherInLawWifesSistersHusband: string;

declare var CNLabelContactRelationBrotherInLawYoungerSistersHusband: string;

declare var CNLabelContactRelationChild: string;

declare var CNLabelContactRelationChildInLaw: string;

declare var CNLabelContactRelationCoBrotherInLaw: string;

declare var CNLabelContactRelationCoFatherInLaw: string;

declare var CNLabelContactRelationCoMotherInLaw: string;

declare var CNLabelContactRelationCoParentInLaw: string;

declare var CNLabelContactRelationCoSiblingInLaw: string;

declare var CNLabelContactRelationCoSisterInLaw: string;

declare var CNLabelContactRelationColleague: string;

declare var CNLabelContactRelationCousin: string;

declare var CNLabelContactRelationCousinFathersBrothersDaughter: string;

declare var CNLabelContactRelationCousinFathersBrothersSon: string;

declare var CNLabelContactRelationCousinFathersSistersDaughter: string;

declare var CNLabelContactRelationCousinFathersSistersSon: string;

declare var CNLabelContactRelationCousinGrandparentsSiblingsChild: string;

declare var CNLabelContactRelationCousinGrandparentsSiblingsDaughter: string;

declare var CNLabelContactRelationCousinGrandparentsSiblingsSon: string;

declare var CNLabelContactRelationCousinMothersBrothersDaughter: string;

declare var CNLabelContactRelationCousinMothersBrothersSon: string;

declare var CNLabelContactRelationCousinMothersSistersDaughter: string;

declare var CNLabelContactRelationCousinMothersSistersSon: string;

declare var CNLabelContactRelationCousinOrSiblingsChild: string;

declare var CNLabelContactRelationCousinParentsSiblingsChild: string;

declare var CNLabelContactRelationCousinParentsSiblingsDaughter: string;

declare var CNLabelContactRelationCousinParentsSiblingsSon: string;

declare var CNLabelContactRelationDaughter: string;

declare var CNLabelContactRelationDaughterInLaw: string;

declare var CNLabelContactRelationDaughterInLawOrSisterInLaw: string;

declare var CNLabelContactRelationDaughterInLawOrStepdaughter: string;

declare var CNLabelContactRelationElderBrother: string;

declare var CNLabelContactRelationElderBrotherInLaw: string;

declare var CNLabelContactRelationElderCousin: string;

declare var CNLabelContactRelationElderCousinFathersBrothersDaughter: string;

declare var CNLabelContactRelationElderCousinFathersBrothersSon: string;

declare var CNLabelContactRelationElderCousinFathersSistersDaughter: string;

declare var CNLabelContactRelationElderCousinFathersSistersSon: string;

declare var CNLabelContactRelationElderCousinMothersBrothersDaughter: string;

declare var CNLabelContactRelationElderCousinMothersBrothersSon: string;

declare var CNLabelContactRelationElderCousinMothersSiblingsDaughterOrFathersSistersDaughter: string;

declare var CNLabelContactRelationElderCousinMothersSiblingsSonOrFathersSistersSon: string;

declare var CNLabelContactRelationElderCousinMothersSistersDaughter: string;

declare var CNLabelContactRelationElderCousinMothersSistersSon: string;

declare var CNLabelContactRelationElderCousinParentsSiblingsDaughter: string;

declare var CNLabelContactRelationElderCousinParentsSiblingsSon: string;

declare var CNLabelContactRelationElderSibling: string;

declare var CNLabelContactRelationElderSiblingInLaw: string;

declare var CNLabelContactRelationElderSister: string;

declare var CNLabelContactRelationElderSisterInLaw: string;

declare var CNLabelContactRelationEldestBrother: string;

declare var CNLabelContactRelationEldestSister: string;

declare var CNLabelContactRelationFather: string;

declare var CNLabelContactRelationFatherInLaw: string;

declare var CNLabelContactRelationFatherInLawHusbandsFather: string;

declare var CNLabelContactRelationFatherInLawOrStepfather: string;

declare var CNLabelContactRelationFatherInLawWifesFather: string;

declare var CNLabelContactRelationFemaleCousin: string;

declare var CNLabelContactRelationFemaleFriend: string;

declare var CNLabelContactRelationFemalePartner: string;

declare var CNLabelContactRelationFriend: string;

declare var CNLabelContactRelationGirlfriend: string;

declare var CNLabelContactRelationGirlfriendOrBoyfriend: string;

declare var CNLabelContactRelationGrandaunt: string;

declare var CNLabelContactRelationGrandchild: string;

declare var CNLabelContactRelationGrandchildOrSiblingsChild: string;

declare var CNLabelContactRelationGranddaughter: string;

declare var CNLabelContactRelationGranddaughterDaughtersDaughter: string;

declare var CNLabelContactRelationGranddaughterSonsDaughter: string;

declare var CNLabelContactRelationGrandfather: string;

declare var CNLabelContactRelationGrandfatherFathersFather: string;

declare var CNLabelContactRelationGrandfatherMothersFather: string;

declare var CNLabelContactRelationGrandmother: string;

declare var CNLabelContactRelationGrandmotherFathersMother: string;

declare var CNLabelContactRelationGrandmotherMothersMother: string;

declare var CNLabelContactRelationGrandnephew: string;

declare var CNLabelContactRelationGrandnephewBrothersGrandson: string;

declare var CNLabelContactRelationGrandnephewSistersGrandson: string;

declare var CNLabelContactRelationGrandniece: string;

declare var CNLabelContactRelationGrandnieceBrothersGranddaughter: string;

declare var CNLabelContactRelationGrandnieceSistersGranddaughter: string;

declare var CNLabelContactRelationGrandparent: string;

declare var CNLabelContactRelationGrandson: string;

declare var CNLabelContactRelationGrandsonDaughtersSon: string;

declare var CNLabelContactRelationGrandsonSonsSon: string;

declare var CNLabelContactRelationGranduncle: string;

declare var CNLabelContactRelationGreatGrandchild: string;

declare var CNLabelContactRelationGreatGrandchildOrSiblingsGrandchild: string;

declare var CNLabelContactRelationGreatGranddaughter: string;

declare var CNLabelContactRelationGreatGrandfather: string;

declare var CNLabelContactRelationGreatGrandmother: string;

declare var CNLabelContactRelationGreatGrandparent: string;

declare var CNLabelContactRelationGreatGrandson: string;

declare var CNLabelContactRelationHusband: string;

declare var CNLabelContactRelationMaleCousin: string;

declare var CNLabelContactRelationMaleFriend: string;

declare var CNLabelContactRelationMalePartner: string;

declare var CNLabelContactRelationManager: string;

declare var CNLabelContactRelationMother: string;

declare var CNLabelContactRelationMotherInLaw: string;

declare var CNLabelContactRelationMotherInLawHusbandsMother: string;

declare var CNLabelContactRelationMotherInLawOrStepmother: string;

declare var CNLabelContactRelationMotherInLawWifesMother: string;

declare var CNLabelContactRelationNephew: string;

declare var CNLabelContactRelationNephewBrothersSon: string;

declare var CNLabelContactRelationNephewBrothersSonOrHusbandsSiblingsSon: string;

declare var CNLabelContactRelationNephewOrCousin: string;

declare var CNLabelContactRelationNephewSistersSon: string;

declare var CNLabelContactRelationNephewSistersSonOrWifesSiblingsSon: string;

declare var CNLabelContactRelationNiece: string;

declare var CNLabelContactRelationNieceBrothersDaughter: string;

declare var CNLabelContactRelationNieceBrothersDaughterOrHusbandsSiblingsDaughter: string;

declare var CNLabelContactRelationNieceOrCousin: string;

declare var CNLabelContactRelationNieceSistersDaughter: string;

declare var CNLabelContactRelationNieceSistersDaughterOrWifesSiblingsDaughter: string;

declare var CNLabelContactRelationParent: string;

declare var CNLabelContactRelationParentInLaw: string;

declare var CNLabelContactRelationParentsElderSibling: string;

declare var CNLabelContactRelationParentsSibling: string;

declare var CNLabelContactRelationParentsSiblingFathersElderSibling: string;

declare var CNLabelContactRelationParentsSiblingFathersSibling: string;

declare var CNLabelContactRelationParentsSiblingFathersYoungerSibling: string;

declare var CNLabelContactRelationParentsSiblingMothersElderSibling: string;

declare var CNLabelContactRelationParentsSiblingMothersSibling: string;

declare var CNLabelContactRelationParentsSiblingMothersYoungerSibling: string;

declare var CNLabelContactRelationParentsYoungerSibling: string;

declare var CNLabelContactRelationPartner: string;

declare var CNLabelContactRelationSibling: string;

declare var CNLabelContactRelationSiblingInLaw: string;

declare var CNLabelContactRelationSiblingsChild: string;

declare var CNLabelContactRelationSister: string;

declare var CNLabelContactRelationSisterInLaw: string;

declare var CNLabelContactRelationSisterInLawBrothersWife: string;

declare var CNLabelContactRelationSisterInLawElderBrothersWife: string;

declare var CNLabelContactRelationSisterInLawHusbandsBrothersWife: string;

declare var CNLabelContactRelationSisterInLawHusbandsSister: string;

declare var CNLabelContactRelationSisterInLawSpousesSister: string;

declare var CNLabelContactRelationSisterInLawWifesBrothersWife: string;

declare var CNLabelContactRelationSisterInLawWifesSister: string;

declare var CNLabelContactRelationSisterInLawYoungerBrothersWife: string;

declare var CNLabelContactRelationSon: string;

declare var CNLabelContactRelationSonInLaw: string;

declare var CNLabelContactRelationSonInLawOrBrotherInLaw: string;

declare var CNLabelContactRelationSonInLawOrStepson: string;

declare var CNLabelContactRelationSpouse: string;

declare var CNLabelContactRelationStepbrother: string;

declare var CNLabelContactRelationStepchild: string;

declare var CNLabelContactRelationStepdaughter: string;

declare var CNLabelContactRelationStepfather: string;

declare var CNLabelContactRelationStepmother: string;

declare var CNLabelContactRelationStepparent: string;

declare var CNLabelContactRelationStepsister: string;

declare var CNLabelContactRelationStepson: string;

declare var CNLabelContactRelationTeacher: string;

declare var CNLabelContactRelationUncle: string;

declare var CNLabelContactRelationUncleFathersBrother: string;

declare var CNLabelContactRelationUncleFathersElderBrother: string;

declare var CNLabelContactRelationUncleFathersElderSistersHusband: string;

declare var CNLabelContactRelationUncleFathersSistersHusband: string;

declare var CNLabelContactRelationUncleFathersYoungerBrother: string;

declare var CNLabelContactRelationUncleFathersYoungerSistersHusband: string;

declare var CNLabelContactRelationUncleMothersBrother: string;

declare var CNLabelContactRelationUncleMothersElderBrother: string;

declare var CNLabelContactRelationUncleMothersSistersHusband: string;

declare var CNLabelContactRelationUncleMothersYoungerBrother: string;

declare var CNLabelContactRelationUncleParentsBrother: string;

declare var CNLabelContactRelationUncleParentsElderBrother: string;

declare var CNLabelContactRelationUncleParentsYoungerBrother: string;

declare var CNLabelContactRelationWife: string;

declare var CNLabelContactRelationYoungerBrother: string;

declare var CNLabelContactRelationYoungerBrotherInLaw: string;

declare var CNLabelContactRelationYoungerCousin: string;

declare var CNLabelContactRelationYoungerCousinFathersBrothersDaughter: string;

declare var CNLabelContactRelationYoungerCousinFathersBrothersSon: string;

declare var CNLabelContactRelationYoungerCousinFathersSistersDaughter: string;

declare var CNLabelContactRelationYoungerCousinFathersSistersSon: string;

declare var CNLabelContactRelationYoungerCousinMothersBrothersDaughter: string;

declare var CNLabelContactRelationYoungerCousinMothersBrothersSon: string;

declare var CNLabelContactRelationYoungerCousinMothersSiblingsDaughterOrFathersSistersDaughter: string;

declare var CNLabelContactRelationYoungerCousinMothersSiblingsSonOrFathersSistersSon: string;

declare var CNLabelContactRelationYoungerCousinMothersSistersDaughter: string;

declare var CNLabelContactRelationYoungerCousinMothersSistersSon: string;

declare var CNLabelContactRelationYoungerCousinParentsSiblingsDaughter: string;

declare var CNLabelContactRelationYoungerCousinParentsSiblingsSon: string;

declare var CNLabelContactRelationYoungerSibling: string;

declare var CNLabelContactRelationYoungerSiblingInLaw: string;

declare var CNLabelContactRelationYoungerSister: string;

declare var CNLabelContactRelationYoungerSisterInLaw: string;

declare var CNLabelContactRelationYoungestBrother: string;

declare var CNLabelContactRelationYoungestSister: string;

declare var CNLabelDateAnniversary: string;

declare var CNLabelEmailiCloud: string;

declare var CNLabelHome: string;

declare var CNLabelOther: string;

declare var CNLabelPhoneNumberHomeFax: string;

declare var CNLabelPhoneNumberMain: string;

declare var CNLabelPhoneNumberMobile: string;

declare var CNLabelPhoneNumberOtherFax: string;

declare var CNLabelPhoneNumberPager: string;

declare var CNLabelPhoneNumberWorkFax: string;

declare var CNLabelPhoneNumberiPhone: string;

declare var CNLabelSchool: string;

declare var CNLabelURLAddressHomePage: string;

declare var CNLabelWork: string;

declare class CNLabeledValue<ValueType> extends NSObject implements NSCopying, NSSecureCoding {

	static labeledValueWithLabelValue<ValueType>(_?: string, value: ValueType): CNLabeledValue<ValueType>;

	static localizedStringForLabel(_: string): string;

	readonly identifier: string;

	readonly label: string;

	readonly value: ValueType;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(label: string, value: ValueType);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	labeledValueBySettingLabel(_?: string): this;

	labeledValueBySettingLabelValue(_?: string, value: ValueType): this;

	labeledValueBySettingValue(_: ValueType): this;
}

declare class CNMutableContact extends CNContact {

	static objectWithItemProviderDataTypeIdentifierError(typeIdentifier: NSData, error: string): CNMutableContact; // inherited from NSItemProviderReading

	setBirthday(_: NSDateComponents)

	birthday: NSDateComponents;

	setContactRelations(_: NSArray<CNLabeledValue<CNContactRelation>>)

	contactRelations: NSArray<CNLabeledValue<CNContactRelation>>;

	setContactType(_: CNContactType)

	contactType: CNContactType;

	setDates(_: NSArray<CNLabeledValue<NSDateComponents>>)

	dates: NSArray<CNLabeledValue<NSDateComponents>>;

	setDepartmentName(_: string)

	departmentName: string;

	setEmailAddresses(_: NSArray<CNLabeledValue<string>>)

	emailAddresses: NSArray<CNLabeledValue<string>>;

	setFamilyName(_: string)

	familyName: string;

	setGivenName(_: string)

	givenName: string;

	setImageData(_: NSData)

	imageData: NSData;

	setInstantMessageAddresses(_: NSArray<CNLabeledValue<CNInstantMessageAddress>>)

	instantMessageAddresses: NSArray<CNLabeledValue<CNInstantMessageAddress>>;

	setJobTitle(_: string)

	jobTitle: string;

	setMiddleName(_: string)

	middleName: string;

	setNamePrefix(_: string)

	namePrefix: string;

	setNameSuffix(_: string)

	nameSuffix: string;

	setNickname(_: string)

	nickname: string;

	setNonGregorianBirthday(_: NSDateComponents)

	nonGregorianBirthday: NSDateComponents;

	setNote(_: string)

	note: string;

	setOrganizationName(_: string)

	organizationName: string;

	setPhoneNumbers(_: NSArray<CNLabeledValue<CNPhoneNumber>>)

	phoneNumbers: NSArray<CNLabeledValue<CNPhoneNumber>>;

	setPhoneticFamilyName(_: string)

	phoneticFamilyName: string;

	setPhoneticGivenName(_: string)

	phoneticGivenName: string;

	setPhoneticMiddleName(_: string)

	phoneticMiddleName: string;

	setPhoneticOrganizationName(_: string)

	phoneticOrganizationName: string;

	setPostalAddresses(_: NSArray<CNLabeledValue<CNPostalAddress>>)

	postalAddresses: NSArray<CNLabeledValue<CNPostalAddress>>;

	setPreviousFamilyName(_: string)

	previousFamilyName: string;

	setSocialProfiles(_: NSArray<CNLabeledValue<CNSocialProfile>>)

	socialProfiles: NSArray<CNLabeledValue<CNSocialProfile>>;

	setUrlAddresses(_: NSArray<CNLabeledValue<string>>)

	urlAddresses: NSArray<CNLabeledValue<string>>;
}

declare class CNMutableGroup extends CNGroup {

	setName(_: string)

	name: string;
}

declare class CNMutablePostalAddress extends CNPostalAddress {

	setISOCountryCode(_: string)

	ISOCountryCode: string;

	setCity(_: string)

	city: string;

	setCountry(_: string)

	country: string;

	setPostalCode(_: string)

	postalCode: string;

	setState(_: string)

	state: string;

	setStreet(_: string)

	street: string;

	setSubAdministrativeArea(_: string)

	subAdministrativeArea: string;

	setSubLocality(_: string)

	subLocality: string;
}

declare class CNPhoneNumber extends NSObject implements NSCopying, NSSecureCoding {

	static phoneNumberWithStringValue(_: string): CNPhoneNumber;

	readonly stringValue: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(stringValue: string);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare class CNPostalAddress extends NSObject implements NSCopying, NSMutableCopying, NSSecureCoding {

	static localizedStringForKey(_: string): string;

	readonly ISOCountryCode: string;

	readonly city: string;

	readonly country: string;

	readonly postalCode: string;

	readonly state: string;

	readonly street: string;

	readonly subAdministrativeArea: string;

	readonly subLocality: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	mutableCopyWithZone(_?: any): any;
}

declare var CNPostalAddressCityKey: string;

declare var CNPostalAddressCountryKey: string;

declare class CNPostalAddressFormatter extends NSFormatter {

	static attributedStringFromPostalAddressStyleWithDefaultAttributes(_: CNPostalAddress, style: CNPostalAddressFormatterStyle, withDefaultAttributes: NSDictionary<any, any>): NSAttributedString;

	static stringFromPostalAddressStyle(_: CNPostalAddress, style: CNPostalAddressFormatterStyle): string;

	setStyle(_: CNPostalAddressFormatterStyle)

	style: CNPostalAddressFormatterStyle;

	attributedStringFromPostalAddressWithDefaultAttributes(_: CNPostalAddress, withDefaultAttributes: NSDictionary<any, any>): NSAttributedString;

	stringFromPostalAddress(_: CNPostalAddress): string;
}

enum CNPostalAddressFormatterStyle {

	MailingAddress = 0
}


declare var CNPostalAddressISOCountryCodeKey: string;

declare var CNPostalAddressLocalizedPropertyNameAttribute: string;

declare var CNPostalAddressPostalCodeKey: string;

declare var CNPostalAddressPropertyAttribute: string;

declare var CNPostalAddressStateKey: string;

declare var CNPostalAddressStreetKey: string;

declare var CNPostalAddressSubAdministrativeAreaKey: string;

declare var CNPostalAddressSubLocalityKey: string;

declare class CNSaveRequest extends NSObject {

	addContactToContainerWithIdentifier(_: CNMutableContact, toContainerWithIdentifier?: string): void;

	addGroupToContainerWithIdentifier(_: CNMutableGroup, toContainerWithIdentifier?: string): void;

	addMemberToGroup(_: CNContact, toGroup: CNGroup): void;

	addSubgroupToGroup(_: CNGroup, toGroup: CNGroup): void;

	deleteContact(_: CNMutableContact): void;

	deleteGroup(_: CNMutableGroup): void;

	removeMemberFromGroup(_: CNContact, fromGroup: CNGroup): void;

	removeSubgroupFromGroup(_: CNGroup, fromGroup: CNGroup): void;

	updateContact(_: CNMutableContact): void;

	updateGroup(_: CNMutableGroup): void;
}

declare class CNSocialProfile extends NSObject implements NSCopying, NSSecureCoding {

	static localizedStringForKey(_: string): string;

	static localizedStringForService(_: string): string;

	readonly service: string;

	readonly urlString: string;

	readonly userIdentifier: string;

	readonly username: string;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(urlString: string, username: string, userIdentifier: string, service: string);

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare var CNSocialProfileServiceFacebook: string;

declare var CNSocialProfileServiceFlickr: string;

declare var CNSocialProfileServiceGameCenter: string;

declare var CNSocialProfileServiceKey: string;

declare var CNSocialProfileServiceLinkedIn: string;

declare var CNSocialProfileServiceMySpace: string;

declare var CNSocialProfileServiceSinaWeibo: string;

declare var CNSocialProfileServiceTencentWeibo: string;

declare var CNSocialProfileServiceTwitter: string;

declare var CNSocialProfileServiceYelp: string;

declare var CNSocialProfileURLStringKey: string;

declare var CNSocialProfileUserIdentifierKey: string;

declare var CNSocialProfileUsernameKey: string;
