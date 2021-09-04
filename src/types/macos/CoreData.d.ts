
declare var NSAddedPersistentStoresKey: string;

declare var NSAffectedObjectsErrorKey: string;

declare var NSAffectedStoresErrorKey: string;

declare class NSAsynchronousFetchRequest<ResultType> extends NSPersistentStoreRequest {

	readonly completionBlock: (p1: NSAsynchronousFetchResult<any>) => void;

	setEstimatedResultCount(_: number)

	estimatedResultCount: number;

	readonly fetchRequest: NSFetchRequest<ResultType>;

	static create(fetchRequest: NSFetchRequest<ResultType>, completionBlock: (p1: NSAsynchronousFetchResult<ResultType>) => void);
}

declare class NSAsynchronousFetchResult<ResultType> extends NSPersistentStoreAsynchronousResult {

	readonly fetchRequest: NSAsynchronousFetchRequest<ResultType>;

	readonly finalResult: NSArray<ResultType>;
}

declare class NSAtomicStore extends NSPersistentStore {

	addCacheNodes(_: NSSet<NSAtomicStoreCacheNode>): void;

	cacheNodeForObjectID(_: NSManagedObjectID): NSAtomicStoreCacheNode;

	cacheNodes(): NSSet<NSAtomicStoreCacheNode>;

	load(): boolean;

	newCacheNodeForManagedObject(_: NSManagedObject): NSAtomicStoreCacheNode;

	newReferenceObjectForManagedObject(_: NSManagedObject): any;

	objectIDForEntityReferenceObject(for_: NSEntityDescription, withReferenceObject: any): NSManagedObjectID;

	referenceObjectForObjectID(_: NSManagedObjectID): any;

	save(): boolean;

	updateCacheNodeFromManagedObject(_: NSAtomicStoreCacheNode, fromManagedObject: NSManagedObject): void;

	willRemoveCacheNodes(_: NSSet<NSAtomicStoreCacheNode>): void;
}

declare class NSAtomicStoreCacheNode extends NSObject {

	readonly objectID: NSManagedObjectID;

	setPropertyCache(_: NSMutableDictionary<string, any>)

	propertyCache: NSMutableDictionary<string, any>;

	static create(objectID: NSManagedObjectID);
}

declare class NSAttributeDescription extends NSPropertyDescription {

	setAllowsExternalBinaryDataStorage(_: boolean)

	allowsExternalBinaryDataStorage: boolean;

	setAttributeType(_: NSAttributeType)

	attributeType: NSAttributeType;

	setAttributeValueClassName(_: string)

	attributeValueClassName: string;

	setDefaultValue(_: any)

	defaultValue: any;

	setPreservesValueInHistoryOnDeletion(_: boolean)

	preservesValueInHistoryOnDeletion: boolean;

	setValueTransformerName(_: string)

	valueTransformerName: string;
}

enum NSAttributeType {

	UndefinedAttributeType = 0,

	Integer16AttributeType = 100,

	Integer32AttributeType = 200,

	Integer64AttributeType = 300,

	DecimalAttributeType = 400,

	DoubleAttributeType = 500,

	FloatAttributeType = 600,

	StringAttributeType = 700,

	BooleanAttributeType = 800,

	DateAttributeType = 900,

	BinaryDataAttributeType = 1000,

	UUIDAttributeType = 1100,

	URIAttributeType = 1200,

	TransformableAttributeType = 1800,

	ObjectIDAttributeType = 2000
}


declare class NSBatchDeleteRequest extends NSPersistentStoreRequest {

	readonly fetchRequest: NSFetchRequest<any>;

	setResultType(_: NSBatchDeleteRequestResultType)

	resultType: NSBatchDeleteRequestResultType;

	static create(fetchRequest: NSFetchRequest<any>);

	static create(objectIDs: NSArray<NSManagedObjectID> | NSManagedObjectID[]);
}

enum NSBatchDeleteRequestResultType {

	ResultTypeStatusOnly = 0,

	ResultTypeObjectIDs = 1,

	ResultTypeCount = 2
}


declare class NSBatchDeleteResult extends NSPersistentStoreResult {

	readonly result: any;

	readonly resultType: NSBatchDeleteRequestResultType;
}

declare class NSBatchInsertRequest extends NSPersistentStoreRequest {

	static batchInsertRequestWithEntityNameObjects(_: string, objects: NSArray<NSDictionary<string, any>>): NSBatchInsertRequest;

	readonly entity: NSEntityDescription;

	readonly entityName: string;

	setObjectsToInsert(_: NSArray<NSDictionary<string, any>>)

	objectsToInsert: NSArray<NSDictionary<string, any>>;

	setResultType(_: NSBatchInsertRequestResultType)

	resultType: NSBatchInsertRequestResultType;

	static create(entity: NSEntityDescription, objects: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[]);

	static create(entityName: string, objects: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[]);
}

enum NSBatchInsertRequestResultType {

	StatusOnly = 0,

	ObjectIDs = 1,

	Count = 2
}


declare class NSBatchInsertResult extends NSPersistentStoreResult {

	readonly result: any;

	readonly resultType: NSBatchInsertRequestResultType;
}

declare class NSBatchUpdateRequest extends NSPersistentStoreRequest {

	static batchUpdateRequestWithEntityName(_: string): NSBatchUpdateRequest;

	readonly entity: NSEntityDescription;

	readonly entityName: string;

	setIncludesSubentities(_: boolean)

	includesSubentities: boolean;

	setPredicate(_: NSPredicate)

	predicate: NSPredicate;

	setPropertiesToUpdate(_: NSDictionary<any, any>)

	propertiesToUpdate: NSDictionary<any, any>;

	setResultType(_: NSBatchUpdateRequestResultType)

	resultType: NSBatchUpdateRequestResultType;

	static create(entity: NSEntityDescription);

	static create(entityName: string);
}

enum NSBatchUpdateRequestResultType {

	StatusOnlyResultType = 0,

	UpdatedObjectIDsResultType = 1,

	UpdatedObjectsCountResultType = 2
}


declare class NSBatchUpdateResult extends NSPersistentStoreResult {

	readonly result: any;

	readonly resultType: NSBatchUpdateRequestResultType;
}

declare var NSBinaryStoreInsecureDecodingCompatibilityOption: string;

declare var NSBinaryStoreSecureDecodingClasses: string;

declare var NSBinaryStoreType: string;

declare class NSConstraintConflict extends NSObject {

	readonly conflictingObjects: NSArray<NSManagedObject>;

	readonly conflictingSnapshots: NSArray<NSDictionary<any, any>>;

	readonly constraint: NSArray<string>;

	readonly constraintValues: NSDictionary<string, any>;

	readonly databaseObject: NSManagedObject;

	readonly databaseSnapshot: NSDictionary<string, any>;

	static create(constraint: NSArray<string> | string[], databaseObject: NSManagedObject, databaseSnapshot: NSDictionary<any, any>, conflictingObjects: NSArray<NSManagedObject> | NSManagedObject[], conflictingSnapshots: NSArray<any> | any[]);
}

declare class NSCoreDataCoreSpotlightDelegate extends NSObject {

	static create(forStoreWithDescription: NSPersistentStoreDescription, model: NSManagedObjectModel);

	attributeSetForObject(_: NSManagedObject): CSSearchableItemAttributeSet;

	domainIdentifier(): string;

	indexName(): string;

	searchableIndexReindexAllSearchableItemsWithAcknowledgementHandler(_: CSSearchableIndex, reindexAllSearchableItemsWithAcknowledgementHandler: () => void): void;

	searchableIndexReindexSearchableItemsWithIdentifiersAcknowledgementHandler(_: CSSearchableIndex, reindexSearchableItemsWithIdentifiers: NSArray<string>, acknowledgementHandler: () => void): void;
}

declare var NSCoreDataCoreSpotlightExporter: string;

declare const NSCoreDataError: number;

declare var NSCoreDataVersionNumber: number;

enum NSDeleteRule {

	NoActionDeleteRule = 0,

	NullifyDeleteRule = 1,

	CascadeDeleteRule = 2,

	DenyDeleteRule = 3
}


declare var NSDeletedObjectsKey: string;

declare class NSDerivedAttributeDescription extends NSAttributeDescription {

	setDerivationExpression(_: NSExpression)

	derivationExpression: NSExpression;
}

declare var NSDetailedErrorsKey: string;

declare class NSEntityDescription extends NSObject implements NSCoding, NSCopying, NSFastEnumeration {

	static entityForNameInManagedObjectContext(forEntityName: string, in_: NSManagedObjectContext): NSEntityDescription;

	static insertNewObjectForEntityForNameInManagedObjectContext(forEntityName: string, into: NSManagedObjectContext): NSManagedObject;

	setAbstract(_: boolean)

	isAbstract: boolean;

	readonly attributesByName: NSDictionary<string, NSAttributeDescription>;

	setCoreSpotlightDisplayNameExpression(_: NSExpression)

	coreSpotlightDisplayNameExpression: NSExpression;

	setIndexes(_: NSArray<NSFetchIndexDescription>)

	indexes: NSArray<NSFetchIndexDescription>;

	setManagedObjectClassName(_: string)

	managedObjectClassName: string;

	readonly managedObjectModel: NSManagedObjectModel;

	setName(_: string)

	name: string;

	setProperties(_: NSArray<NSPropertyDescription>)

	properties: NSArray<NSPropertyDescription>;

	readonly propertiesByName: NSDictionary<string, NSPropertyDescription>;

	readonly relationshipsByName: NSDictionary<string, NSRelationshipDescription>;

	setRenamingIdentifier(_: string)

	renamingIdentifier: string;

	setSubentities(_: NSArray<NSEntityDescription>)

	subentities: NSArray<NSEntityDescription>;

	readonly subentitiesByName: NSDictionary<string, NSEntityDescription>;

	readonly superentity: NSEntityDescription;

	setUniquenessConstraints(_: NSArray<NSArray<any>>)

	uniquenessConstraints: NSArray<NSArray<any>>;

	setUserInfo(_: NSDictionary<any, any>)

	userInfo: NSDictionary<any, any>;

	readonly versionHash: NSData;

	setVersionHashModifier(_: string)

	versionHashModifier: string;

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	countByEnumeratingWithStateObjectsCount(_: NSFastEnumerationState, objects?: any, count: number): number;

	encodeWithCoder(_: NSCoder): void;

	isKindOfEntity(entity: NSEntityDescription): boolean;

	relationshipsWithDestinationEntity(forDestination: NSEntityDescription): NSArray<NSRelationshipDescription>;
}

declare class NSEntityMapping extends NSObject {

	setAttributeMappings(_: NSArray<NSPropertyMapping>)

	attributeMappings: NSArray<NSPropertyMapping>;

	setDestinationEntityName(_: string)

	destinationEntityName: string;

	setDestinationEntityVersionHash(_: NSData)

	destinationEntityVersionHash: NSData;

	setEntityMigrationPolicyClassName(_: string)

	entityMigrationPolicyClassName: string;

	setMappingType(_: NSEntityMappingType)

	mappingType: NSEntityMappingType;

	setName(_: string)

	name: string;

	setRelationshipMappings(_: NSArray<NSPropertyMapping>)

	relationshipMappings: NSArray<NSPropertyMapping>;

	setSourceEntityName(_: string)

	sourceEntityName: string;

	setSourceEntityVersionHash(_: NSData)

	sourceEntityVersionHash: NSData;

	setSourceExpression(_: NSExpression)

	sourceExpression: NSExpression;

	setUserInfo(_: NSDictionary<any, any>)

	userInfo: NSDictionary<any, any>;
}

enum NSEntityMappingType {

	UndefinedEntityMappingType = 0,

	CustomEntityMappingType = 1,

	AddEntityMappingType = 2,

	RemoveEntityMappingType = 3,

	CopyEntityMappingType = 4,

	TransformEntityMappingType = 5
}


declare class NSEntityMigrationPolicy extends NSObject {

	beginEntityMappingManagerError(_: NSEntityMapping, with_: NSMigrationManager): boolean;

	createDestinationInstancesForSourceInstanceEntityMappingManagerError(forSource: NSManagedObject, in_: NSEntityMapping, manager: NSMigrationManager): boolean;

	createRelationshipsForDestinationInstanceEntityMappingManagerError(forDestination: NSManagedObject, in_: NSEntityMapping, manager: NSMigrationManager): boolean;

	endEntityMappingManagerError(manager: NSEntityMapping, error: NSMigrationManager): boolean;

	endInstanceCreationForEntityMappingManagerError(forMapping: NSEntityMapping, manager: NSMigrationManager): boolean;

	endRelationshipCreationForEntityMappingManagerError(forMapping: NSEntityMapping, manager: NSMigrationManager): boolean;

	performCustomValidationForEntityMappingManagerError(forMapping: NSEntityMapping, manager: NSMigrationManager): boolean;
}

declare const NSEntityMigrationPolicyError: number;

declare var NSErrorMergePolicy: any;

declare var NSErrorMergePolicyVar: any;

declare class NSExpressionDescription extends NSPropertyDescription {

	setExpression(_: NSExpression)

	expression: NSExpression;

	setExpressionResultType(_: NSAttributeType)

	expressionResultType: NSAttributeType;
}

declare const NSExternalRecordImportError: number;

declare class NSFetchIndexDescription extends NSObject implements NSCoding {

	setElements(_: NSArray<NSFetchIndexElementDescription>)

	elements: NSArray<NSFetchIndexElementDescription>;

	readonly entity: NSEntityDescription;

	setName(_: string)

	name: string;

	setPartialIndexPredicate(_: NSPredicate)

	partialIndexPredicate: NSPredicate;

	static create(coder: NSCoder); // inherited from NSCoding

	static create(name: string, elements: NSArray<NSFetchIndexElementDescription> | NSFetchIndexElementDescription[]);

	encodeWithCoder(_: NSCoder): void;
}

declare class NSFetchIndexElementDescription extends NSObject implements NSCoding {

	setAscending(_: boolean)

	isAscending: boolean;

	setCollationType(_: NSFetchIndexElementType)

	collationType: NSFetchIndexElementType;

	readonly indexDescription: NSFetchIndexDescription;

	readonly property: NSPropertyDescription;

	readonly propertyName: string;

	static create(coder: NSCoder); // inherited from NSCoding

	static create(property: NSPropertyDescription, collationType: NSFetchIndexElementType);

	encodeWithCoder(_: NSCoder): void;
}

enum NSFetchIndexElementType {

	Binary = 0,

	RTree = 1
}


declare class NSFetchRequest<ResultType> extends NSPersistentStoreRequest implements NSCoding {

	static fetchRequestWithEntityName<ResultType>(_: string): NSFetchRequest<ResultType>;

	setEntity(_: NSEntityDescription)

	entity: NSEntityDescription;

	readonly entityName: string;

	setFetchBatchSize(_: number)

	fetchBatchSize: number;

	setFetchLimit(_: number)

	fetchLimit: number;

	setFetchOffset(_: number)

	fetchOffset: number;

	setHavingPredicate(_: NSPredicate)

	havingPredicate: NSPredicate;

	setIncludesPendingChanges(_: boolean)

	includesPendingChanges: boolean;

	setIncludesPropertyValues(_: boolean)

	includesPropertyValues: boolean;

	setIncludesSubentities(_: boolean)

	includesSubentities: boolean;

	setPredicate(_: NSPredicate)

	predicate: NSPredicate;

	setPropertiesToFetch(_: NSArray<any>)

	propertiesToFetch: NSArray<any>;

	setPropertiesToGroupBy(_: NSArray<any>)

	propertiesToGroupBy: NSArray<any>;

	setRelationshipKeyPathsForPrefetching(_: NSArray<string>)

	relationshipKeyPathsForPrefetching: NSArray<string>;

	setResultType(_: NSFetchRequestResultType)

	resultType: NSFetchRequestResultType;

	setReturnsDistinctResults(_: boolean)

	returnsDistinctResults: boolean;

	setReturnsObjectsAsFaults(_: boolean)

	returnsObjectsAsFaults: boolean;

	setShouldRefreshRefetchedObjects(_: boolean)

	shouldRefreshRefetchedObjects: boolean;

	setSortDescriptors(_: NSArray<NSSortDescriptor>)

	sortDescriptors: NSArray<NSSortDescriptor>;

	static create(coder: NSCoder); // inherited from NSCoding

	static create(entityName: string);

	encodeWithCoder(_: NSCoder): void;

	execute(): NSArray<ResultType>;
}

declare class NSFetchRequestExpression extends NSExpression {

	static expressionForFetchContextCountOnly(_: NSExpression, context: NSExpression, countOnly: boolean): NSExpression;

	readonly contextExpression: NSExpression;

	readonly isCountOnlyRequest: boolean;

	readonly requestExpression: NSExpression;
}

declare var NSFetchRequestExpressionType: NSExpressionType;

interface NSFetchRequestResult extends NSObjectProtocol {
}
declare var NSFetchRequestResult: {

	prototype: NSFetchRequestResult;
};

enum NSFetchRequestResultType {

	ManagedObjectResultType = 0,

	ManagedObjectIDResultType = 1,

	DictionaryResultType = 2,

	CountResultType = 4
}


declare class NSFetchedPropertyDescription extends NSPropertyDescription {

	setFetchRequest(_: NSFetchRequest<any>)

	fetchRequest: NSFetchRequest<any>;
}

enum NSFetchedResultsChangeType {

	Insert = 1,

	Delete = 2,

	Move = 3,

	Update = 4
}


declare class NSFetchedResultsController<ResultType> extends NSObject {

	static deleteCacheWithName(_?: string): void;

	readonly cacheName: string;

	setDelegate(_: NSFetchedResultsControllerDelegate)

	delegate: NSFetchedResultsControllerDelegate;

	readonly fetchRequest: NSFetchRequest<ResultType>;

	readonly fetchedObjects: NSArray<ResultType>;

	readonly managedObjectContext: NSManagedObjectContext;

	readonly sectionIndexTitles: NSArray<string>;

	readonly sectionNameKeyPath: string;

	readonly sections: NSArray<NSFetchedResultsSectionInfo>;

	static create(fetchRequest: NSFetchRequest<ResultType>, managedObjectContext: NSManagedObjectContext, sectionNameKeyPath: string, cacheName: string);

	indexPathForObject(_: ResultType): NSIndexPath;

	objectAtIndexPath(_: NSIndexPath): ResultType;

	performFetch(): boolean;

	sectionForSectionIndexTitleAtIndex(_: string, atIndex: number): number;

	sectionIndexTitleForSectionName(_: string): string;
}

interface NSFetchedResultsControllerDelegate extends NSObjectProtocol {

	controllerWithDidChangeContentWithDifference?(_: NSFetchedResultsController<any>, didChangeContentWithDifference: NSOrderedCollectionDifference<NSManagedObjectID>): void;

	controllerWithDidChangeContentWithSnapshot?(_: NSFetchedResultsController<any>, didChangeContentWithSnapshot: NSDiffableDataSourceSnapshot<string, NSManagedObjectID>): void;

	controllerWithDidChangeObjectAtIndexPathForChangeTypeNewIndexPath?(_: NSFetchedResultsController<any>, didChangeObject: any, atIndexPath?: NSIndexPath, forChangeType: NSFetchedResultsChangeType, newIndexPath?: NSIndexPath): void;

	controllerWithDidChangeSectionAtIndexForChangeType?(_: NSFetchedResultsController<any>, didChangeSection: NSFetchedResultsSectionInfo, atIndex: number, forChangeType: NSFetchedResultsChangeType): void;

	controllerWithSectionIndexTitleForSectionName?(_: NSFetchedResultsController<any>, sectionIndexTitleForSectionName: string): string;

	controllerDidChangeContent?(_: NSFetchedResultsController<any>): void;

	controllerWillChangeContent?(_: NSFetchedResultsController<any>): void;
}
declare var NSFetchedResultsControllerDelegate: {

	prototype: NSFetchedResultsControllerDelegate;
};

interface NSFetchedResultsSectionInfo {

	indexTitle: string;

	name: string;

	numberOfObjects: number;

	objects: NSArray<any>;
}
declare var NSFetchedResultsSectionInfo: {

	prototype: NSFetchedResultsSectionInfo;
};

declare var NSIgnorePersistentStoreVersioningOption: string;

declare var NSInMemoryStoreType: string;

declare class NSIncrementalStore extends NSPersistentStore {

	static identifierForNewStoreAtURL(_: NSURL): any;

	executeRequestWithContextError(withContext: NSPersistentStoreRequest, error?: NSManagedObjectContext): any;

	managedObjectContextDidRegisterObjectsWithIDs(_: NSArray<NSManagedObjectID>): void;

	managedObjectContextDidUnregisterObjectsWithIDs(_: NSArray<NSManagedObjectID>): void;

	newObjectIDForEntityReferenceObject(for_: NSEntityDescription, referenceObject: any): NSManagedObjectID;

	newValueForRelationshipForObjectWithIDWithContextError(forObjectWithID: NSRelationshipDescription, withContext: NSManagedObjectID, error?: NSManagedObjectContext): any;

	newValuesForObjectWithIDWithContextError(withContext: NSManagedObjectID, error: NSManagedObjectContext): NSIncrementalStoreNode;

	obtainPermanentIDsForObjectsError(error: NSArray<NSManagedObject>): NSArray<NSManagedObjectID>;

	referenceObjectForObjectID(_: NSManagedObjectID): any;
}

declare class NSIncrementalStoreNode extends NSObject {

	readonly objectID: NSManagedObjectID;

	readonly version: number;

	static create(objectID: NSManagedObjectID, withValues: NSDictionary<string, any>, version: number);

	updateWithValuesVersion(_: NSDictionary<string, any>, version: number): void;

	valueForPropertyDescription(_: NSPropertyDescription): any;
}

declare var NSInferMappingModelAutomaticallyOption: string;

declare const NSInferredMappingModelError: number;

declare var NSInsertedObjectsKey: string;

declare var NSInvalidatedAllObjectsKey: string;

declare var NSInvalidatedObjectsKey: string;

declare class NSManagedObject extends NSObject implements NSFetchRequestResult {

	static entity(): NSEntityDescription;

	static fetchRequest(): NSFetchRequest<any>;

	readonly isDeleted: boolean;

	readonly entity: NSEntityDescription;

	readonly isFault: boolean;

	readonly faultingState: number;

	readonly hasChanges: boolean;

	readonly hasPersistentChangedValues: boolean;

	readonly isInserted: boolean;

	readonly managedObjectContext: NSManagedObjectContext;

	readonly objectID: NSManagedObjectID;

	readonly isUpdated: boolean;

	static contextShouldIgnoreUnmodeledPropertyChanges(): boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static create(context: NSManagedObjectContext);

	static create(entity: NSEntityDescription, insertIntoManagedObjectContext: NSManagedObjectContext);

	awakeFromFetch(): void;

	awakeFromInsert(): void;

	awakeFromSnapshotEvents(_: NSSnapshotEventType): void;

	changedValues(): NSDictionary<string, any>;

	changedValuesForCurrentEvent(): NSDictionary<string, any>;

	committedValuesForKeys(_?: NSArray<string>): NSDictionary<string, any>;

	conformsToProtocol(_: any /* Protocol */): boolean;

	didAccessValueForKey(_?: string): void;

	didSave(): void;

	didTurnIntoFault(): void;

	hasFaultForRelationshipNamed(_: string): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	objectIDsForRelationshipNamed(_: string): NSArray<NSManagedObjectID>;

	observationInfo(): any;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	prepareForDeletion(): void;

	primitiveValueForKey(_: string): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;

	setObservationInfo(_?: any): void;

	setPrimitiveValueForKey(_?: any, forKey: string): void;

	validateForDelete(): boolean;

	validateForInsert(): boolean;

	validateForUpdate(): boolean;

	willAccessValueForKey(_?: string): void;

	willSave(): void;

	willTurnIntoFault(): void;
}

declare const NSManagedObjectConstraintMergeError: number;

declare const NSManagedObjectConstraintValidationError: number;

declare class NSManagedObjectContext extends NSObject implements NSCoding, NSLocking, NSEditor, NSEditorRegistration {

	static mergeChangesFromRemoteContextSaveIntoContexts(_: NSDictionary<any, any>, intoContexts: NSArray<NSManagedObjectContext>): void;

	setAutomaticallyMergesChangesFromParent(_: boolean)

	automaticallyMergesChangesFromParent: boolean;

	readonly concurrencyType: NSManagedObjectContextConcurrencyType;

	readonly deletedObjects: NSSet<NSManagedObject>;

	readonly hasChanges: boolean;

	readonly insertedObjects: NSSet<NSManagedObject>;

	setMergePolicy(_: any)

	mergePolicy: any;

	setName(_: string)

	name: string;

	setParentContext(_: NSManagedObjectContext)

	parentContext: NSManagedObjectContext;

	setPersistentStoreCoordinator(_: NSPersistentStoreCoordinator)

	persistentStoreCoordinator: NSPersistentStoreCoordinator;

	setPropagatesDeletesAtEndOfEvent(_: boolean)

	propagatesDeletesAtEndOfEvent: boolean;

	readonly queryGenerationToken: NSQueryGenerationToken;

	readonly registeredObjects: NSSet<NSManagedObject>;

	setRetainsRegisteredObjects(_: boolean)

	retainsRegisteredObjects: boolean;

	setShouldDeleteInaccessibleFaults(_: boolean)

	shouldDeleteInaccessibleFaults: boolean;

	setStalenessInterval(_: number)

	stalenessInterval: number;

	setTransactionAuthor(_: string)

	transactionAuthor: string;

	setUndoManager(_: NSUndoManager)

	undoManager: NSUndoManager;

	readonly updatedObjects: NSSet<NSManagedObject>;

	readonly userInfo: NSMutableDictionary<any, any>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static create(coder: NSCoder); // inherited from NSCoding

	static create(concurrencyType: NSManagedObjectContextConcurrencyType);

	assignObjectToPersistentStore(_: any, toPersistentStore: NSPersistentStore): void;

	commitEditing(): boolean;

	commitEditingAndReturnError(): boolean;

	commitEditingWithDelegateDidCommitSelectorContextInfo(withDelegate?: any, didCommit?: string, contextInfo?: any): void;

	conformsToProtocol(_: any /* Protocol */): boolean;

	countForFetchRequestWithError(error: NSFetchRequest<any>): number;

	deleteObject(_: NSManagedObject): void;

	detectConflictsForObject(_: NSManagedObject): void;

	discardEditing(): void;

	encodeWithCoder(_: NSCoder): void;

	fetchWith_(_: NSFetchRequest<any>): NSArray<any>;

	executeRequestError(error: NSPersistentStoreRequest): NSPersistentStoreResult;

	existingObjectWithIDError(error: NSManagedObjectID): NSManagedObject;

	insertObject(_: NSManagedObject): void;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	lock(): void;

	mergeChangesFromContextDidSaveNotification(_: NSNotification): void;

	objectDidBeginEditing(_: NSEditor): void;

	objectDidEndEditing(_: NSEditor): void;

	objectRegisteredForID(for_: NSManagedObjectID): NSManagedObject;

	objectWithID(_: NSManagedObjectID): NSManagedObject;

	obtainPermanentIDsForObjectsError(error: NSArray<NSManagedObject>): boolean;

	performBlock(_: () => void): void;

	performBlockAndWait(_: () => void): void;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	processPendingChanges(): void;

	redo(): void;

	refreshAllObjects(): void;

	refreshObjectMergeChanges(_: NSManagedObject, mergeChanges: boolean): void;

	reset(): void;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	rollback(): void;

	save(): boolean;

	self(): this;

	setQueryGenerationFromTokenError(error?: NSQueryGenerationToken): boolean;

	shouldHandleInaccessibleFaultForObjectIDTriggeredByProperty(_: NSManagedObject, forObjectID: NSManagedObjectID, triggeredByProperty?: NSPropertyDescription): boolean;

	undo(): void;

	unlock(): void;
}

enum NSManagedObjectContextConcurrencyType {

	ConfinementConcurrencyType = 0,

	PrivateQueueConcurrencyType = 1,

	MainQueueConcurrencyType = 2
}


declare var NSManagedObjectContextDidSaveNotification: string;

declare const NSManagedObjectContextLockingError: number;

declare var NSManagedObjectContextObjectsDidChangeNotification: string;

declare var NSManagedObjectContextQueryGenerationKey: string;

declare var NSManagedObjectContextWillSaveNotification: string;

declare const NSManagedObjectExternalRelationshipError: number;

declare class NSManagedObjectID extends NSObject implements NSCopying, NSFetchRequestResult {

	readonly entity: NSEntityDescription;

	readonly persistentStore: NSPersistentStore;

	readonly isTemporaryID: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	URIRepresentation(): NSURL;

	conformsToProtocol(_: any /* Protocol */): boolean;

	copyWithZone(_?: any): any;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const NSManagedObjectMergeError: number;

declare class NSManagedObjectModel extends NSObject implements NSCoding, NSCopying, NSFastEnumeration {

	static mergedModelFromBundles(_?: NSArray<NSBundle>): NSManagedObjectModel;

	static mergedModelFromBundlesForStoreMetadata(_?: NSArray<NSBundle>, forStoreMetadata: NSDictionary<string, any>): NSManagedObjectModel;

	static modelByMergingModels(_?: NSArray<NSManagedObjectModel>): NSManagedObjectModel;

	static modelByMergingModelsForStoreMetadata(_: NSArray<NSManagedObjectModel>, forStoreMetadata: NSDictionary<string, any>): NSManagedObjectModel;

	readonly configurations: NSArray<string>;

	setEntities(_: NSArray<NSEntityDescription>)

	entities: NSArray<NSEntityDescription>;

	readonly entitiesByName: NSDictionary<string, NSEntityDescription>;

	readonly entityVersionHashesByName: NSDictionary<string, NSData>;

	readonly fetchRequestTemplatesByName: NSDictionary<string, NSFetchRequest<any>>;

	setLocalizationDictionary(_: NSDictionary<string, string>)

	localizationDictionary: NSDictionary<string, string>;

	setVersionIdentifiers(_: NSSet<any>)

	versionIdentifiers: NSSet<any>;

	static create(coder: NSCoder); // inherited from NSCoding

	static create(contentsOfURL: NSURL);

	copyWithZone(_?: any): any;

	countByEnumeratingWithStateObjectsCount(_: NSFastEnumerationState, objects?: any, count: number): number;

	encodeWithCoder(_: NSCoder): void;

	entitiesForConfiguration(forConfigurationName?: string): NSArray<NSEntityDescription>;

	fetchRequestFromTemplateWithNameSubstitutionVariables(_: string, substitutionVariables: NSDictionary<string, any>): NSFetchRequest<any>;

	fetchRequestTemplateForName(_: string): NSFetchRequest<any>;

	isConfigurationCompatibleWithStoreMetadata(withName?: string, compatibleWithStoreMetadata: NSDictionary<string, any>): boolean;

	setEntitiesForConfiguration(_: NSArray<NSEntityDescription>, forConfigurationName: string): void;

	setFetchRequestTemplateForName(_?: NSFetchRequest<any>, forName: string): void;
}

declare const NSManagedObjectReferentialIntegrityError: number;

declare const NSManagedObjectValidationError: number;

declare class NSMappingModel extends NSObject {

	static inferredMappingModelForSourceModelDestinationModelError(destinationModel: NSManagedObjectModel, error: NSManagedObjectModel): NSMappingModel;

	static mappingModelFromBundlesForSourceModelDestinationModel(_?: NSArray<NSBundle>, forSourceModel?: NSManagedObjectModel, destinationModel?: NSManagedObjectModel): NSMappingModel;

	setEntityMappings(_: NSArray<NSEntityMapping>)

	entityMappings: NSArray<NSEntityMapping>;

	readonly entityMappingsByName: NSDictionary<string, NSEntityMapping>;

	static create(contentsOfURL: NSURL);
}

declare var NSMergeByPropertyObjectTrumpMergePolicy: any;

declare var NSMergeByPropertyObjectTrumpMergePolicyVar: any;

declare var NSMergeByPropertyStoreTrumpMergePolicy: any;

declare var NSMergeByPropertyStoreTrumpMergePolicyVar: any;

declare class NSMergeConflict extends NSObject {

	readonly cachedSnapshot: NSDictionary<string, any>;

	readonly newVersionNumber: number;

	readonly objectSnapshot: NSDictionary<string, any>;

	readonly oldVersionNumber: number;

	readonly persistedSnapshot: NSDictionary<string, any>;

	readonly sourceObject: NSManagedObject;

	static create(source: NSManagedObject, newVersion: number, oldVersion: number, cachedSnapshot: NSDictionary<string, any>, persistedSnapshot: NSDictionary<string, any>);
}

declare class NSMergePolicy extends NSObject {

	readonly mergeType: NSMergePolicyType;

	static errorMergePolicy(): NSMergePolicy;

	static mergeByPropertyObjectTrumpMergePolicy(): NSMergePolicy;

	static mergeByPropertyStoreTrumpMergePolicy(): NSMergePolicy;

	static overwriteMergePolicy(): NSMergePolicy;

	static rollbackMergePolicy(): NSMergePolicy;

	static create(mergeType: NSMergePolicyType);

	resolveConflictsError(mergeConflicts: NSArray<any>): boolean;

	resolveConstraintConflictsError(constraintConflicts: NSArray<NSConstraintConflict>): boolean;

	resolveOptimisticLockingVersionConflictsError(optimisticLockingConflicts: NSArray<NSMergeConflict>): boolean;
}

enum NSMergePolicyType {

	ErrorMergePolicyType = 0,

	MergeByPropertyStoreTrumpMergePolicyType = 1,

	MergeByPropertyObjectTrumpMergePolicyType = 2,

	OverwriteMergePolicyType = 3,

	RollbackMergePolicyType = 4
}


declare var NSMigratePersistentStoresAutomaticallyOption: string;

declare const NSMigrationCancelledError: number;

declare const NSMigrationConstraintViolationError: number;

declare var NSMigrationDestinationObjectKey: string;

declare var NSMigrationEntityMappingKey: string;

declare var NSMigrationEntityPolicyKey: string;

declare const NSMigrationError: number;

declare class NSMigrationManager extends NSObject {

	readonly currentEntityMapping: NSEntityMapping;

	readonly destinationContext: NSManagedObjectContext;

	readonly destinationModel: NSManagedObjectModel;

	readonly mappingModel: NSMappingModel;

	readonly migrationProgress: number;

	readonly sourceContext: NSManagedObjectContext;

	readonly sourceModel: NSManagedObjectModel;

	setUserInfo(_: NSDictionary<any, any>)

	userInfo: NSDictionary<any, any>;

	setUsesStoreSpecificMigrationManager(_: boolean)

	usesStoreSpecificMigrationManager: boolean;

	static create(sourceModel: NSManagedObjectModel, destinationModel: NSManagedObjectModel);

	associateSourceInstanceWithDestinationInstanceForEntityMapping(sourceInstance: NSManagedObject, withDestinationInstance: NSManagedObject, for_: NSEntityMapping): void;

	cancelMigrationWithError(_: NSError): void;

	destinationEntityForEntityMapping(_: NSEntityMapping): NSEntityDescription;

	destinationInstancesForEntityMappingNamedSourceInstances(forEntityMappingName: string, sourceInstances?: NSArray<NSManagedObject>): NSArray<NSManagedObject>;

	migrateStoreFromURLTypeOptionsWithMappingModelToDestinationURLDestinationTypeDestinationOptionsError(from: NSURL, sourceType: string, options?: NSDictionary<any, any>, with_?: NSMappingModel, toDestinationURL: NSURL, destinationType: string, destinationOptions?: NSDictionary<any, any>): boolean;

	reset(): void;

	sourceEntityForEntityMapping(_: NSEntityMapping): NSEntityDescription;

	sourceInstancesForEntityMappingNamedDestinationInstances(forEntityMappingName: string, destinationInstances?: NSArray<NSManagedObject>): NSArray<NSManagedObject>;
}

declare const NSMigrationManagerDestinationStoreError: number;

declare var NSMigrationManagerKey: string;

declare const NSMigrationManagerSourceStoreError: number;

declare const NSMigrationMissingMappingModelError: number;

declare const NSMigrationMissingSourceModelError: number;

declare var NSMigrationPropertyMappingKey: string;

declare var NSMigrationSourceObjectKey: string;

declare var NSOverwriteMergePolicy: any;

declare var NSOverwriteMergePolicyVar: any;

declare class NSPersistentCloudKitContainer extends NSPersistentContainer {

	static persistentContainerWithName(_: string): NSPersistentCloudKitContainer; // inherited from NSPersistentContainer

	static persistentContainerWithNameManagedObjectModel(_: string, managedObjectModel: NSManagedObjectModel): NSPersistentCloudKitContainer; // inherited from NSPersistentContainer

	initializeCloudKitSchemaWithOptionsError(error: NSPersistentCloudKitContainerSchemaInitializationOptions): boolean;

	recordForManagedObjectID(_: NSManagedObjectID): CKRecord;

	recordIDForManagedObjectID(_: NSManagedObjectID): CKRecordID;

	recordIDsForManagedObjectIDs(_: NSArray<NSManagedObjectID>): NSDictionary<NSManagedObjectID, CKRecordID>;

	recordsForManagedObjectIDs(_: NSArray<NSManagedObjectID>): NSDictionary<NSManagedObjectID, CKRecord>;
}

declare class NSPersistentCloudKitContainerOptions extends NSObject {

	readonly containerIdentifier: string;

	static create(containerIdentifier: string);
}

enum NSPersistentCloudKitContainerSchemaInitializationOptions {

	None = 0,

	DryRun = 2,

	PrintSchema = 4
}


declare class NSPersistentContainer extends NSObject {

	static defaultDirectoryURL(): NSURL;

	static persistentContainerWithName(_: string): NSPersistentContainer;

	static persistentContainerWithNameManagedObjectModel(_: string, managedObjectModel: NSManagedObjectModel): NSPersistentContainer;

	readonly managedObjectModel: NSManagedObjectModel;

	readonly name: string;

	readonly persistentStoreCoordinator: NSPersistentStoreCoordinator;

	setPersistentStoreDescriptions(_: NSArray<NSPersistentStoreDescription>)

	persistentStoreDescriptions: NSArray<NSPersistentStoreDescription>;

	readonly viewContext: NSManagedObjectContext;

	static create(name: string);

	static create(name: string, managedObjectModel: NSManagedObjectModel);

	loadPersistentStoresWithCompletionHandler(_?: (p1: NSPersistentStoreDescription, p2: NSError) => void): void;

	newBackgroundContext(): NSManagedObjectContext;

	performBackgroundTask(_: (p1: NSManagedObjectContext) => void): void;
}

declare class NSPersistentHistoryChange extends NSObject implements NSCopying {

	static entityDescriptionWithContext(_: NSManagedObjectContext): NSEntityDescription;

	readonly changeID: number;

	readonly changeType: NSPersistentHistoryChangeType;

	readonly changedObjectID: NSManagedObjectID;

	readonly tombstone: NSDictionary<any, any>;

	readonly transaction: NSPersistentHistoryTransaction;

	readonly updatedProperties: NSSet<NSPropertyDescription>;

	static entityDescription(): NSEntityDescription;

	static fetchRequest(): NSFetchRequest<any>;

	copyWithZone(_?: any): any;
}

declare class NSPersistentHistoryChangeRequest extends NSPersistentStoreRequest {

	static deleteHistoryBeforeDate(_: Date): NSPersistentHistoryChangeRequest;

	static deleteHistoryBeforeToken(_?: NSPersistentHistoryToken): NSPersistentHistoryChangeRequest;

	static deleteHistoryBeforeTransaction(_?: NSPersistentHistoryTransaction): NSPersistentHistoryChangeRequest;

	static fetchHistoryAfterDate(_: Date): NSPersistentHistoryChangeRequest;

	static fetchHistoryAfterToken(_?: NSPersistentHistoryToken): NSPersistentHistoryChangeRequest;

	static fetchHistoryAfterTransaction(_?: NSPersistentHistoryTransaction): NSPersistentHistoryChangeRequest;

	static fetchHistoryWithFetchRequest(_: NSFetchRequest<any>): NSPersistentHistoryChangeRequest;

	setFetchRequest(_: NSFetchRequest<any>)

	fetchRequest: NSFetchRequest<any>;

	setResultType(_: NSPersistentHistoryResultType)

	resultType: NSPersistentHistoryResultType;

	readonly token: NSPersistentHistoryToken;
}

enum NSPersistentHistoryChangeType {

	Insert = 0,

	Update = 1,

	Delete = 2
}


declare class NSPersistentHistoryResult extends NSPersistentStoreResult {

	readonly result: any;

	readonly resultType: NSPersistentHistoryResultType;
}

enum NSPersistentHistoryResultType {

	StatusOnly = 0,

	ObjectIDs = 1,

	Count = 2,

	TransactionsOnly = 3,

	ChangesOnly = 4,

	TransactionsAndChanges = 5
}


declare class NSPersistentHistoryToken extends NSObject implements NSCopying, NSSecureCoding {

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare const NSPersistentHistoryTokenExpiredError: number;

declare var NSPersistentHistoryTokenKey: string;

declare var NSPersistentHistoryTrackingKey: string;

declare class NSPersistentHistoryTransaction extends NSObject implements NSCopying {

	static entityDescriptionWithContext(_: NSManagedObjectContext): NSEntityDescription;

	readonly author: string;

	readonly bundleID: string;

	readonly changes: NSArray<NSPersistentHistoryChange>;

	readonly contextName: string;

	readonly processID: string;

	readonly storeID: string;

	readonly timestamp: Date;

	readonly token: NSPersistentHistoryToken;

	readonly transactionNumber: number;

	static entityDescription(): NSEntityDescription;

	static fetchRequest(): NSFetchRequest<any>;

	copyWithZone(_?: any): any;

	objectIDNotification(): NSNotification;
}

declare class NSPersistentStore extends NSObject {

	static metadataForPersistentStoreWithURLError(error: NSURL): NSDictionary<string, any>;

	static migrationManagerClass(): typeof NSObject;

	static setMetadataForPersistentStoreWithURLError(_?: NSDictionary<string, any>, forPersistentStoreAt: NSURL): boolean;

	setURL(_: NSURL)

	URL: NSURL;

	readonly configurationName: string;

	readonly coreSpotlightExporter: NSCoreDataCoreSpotlightDelegate;

	setIdentifier(_: string)

	identifier: string;

	setMetadata(_: NSDictionary<string, any>)

	metadata: NSDictionary<string, any>;

	readonly options: NSDictionary<any, any>;

	readonly persistentStoreCoordinator: NSPersistentStoreCoordinator;

	setReadOnly(_: boolean)

	isReadOnly: boolean;

	readonly type: string;

	static create(persistentStoreCoordinator: NSPersistentStoreCoordinator, configurationName: string, URL: NSURL, options: NSDictionary<any, any>);

	didAddToPersistentStoreCoordinator(_: NSPersistentStoreCoordinator): void;

	loadMetadata(): boolean;

	willRemoveFromPersistentStoreCoordinator(_?: NSPersistentStoreCoordinator): void;
}

declare class NSPersistentStoreAsynchronousResult extends NSPersistentStoreResult {

	readonly managedObjectContext: NSManagedObjectContext;

	readonly operationError: NSError;

	readonly progress: NSProgress;

	cancel(): void;
}

declare var NSPersistentStoreConnectionPoolMaxSizeKey: string;

declare class NSPersistentStoreCoordinator extends NSObject implements NSLocking {

	static elementsDerivedFromExternalRecordURL(fromExternalRecordAt: NSURL): NSDictionary<any, any>;

	static metadataForPersistentStoreOfTypeURLOptionsError(ofType: string, at: NSURL, options?: NSDictionary<any, any>): NSDictionary<string, any>;

	static registerStoreClassForStoreType(_?: typeof NSObject, forStoreType: string): void;

	static setMetadataForPersistentStoreOfTypeURLOptionsError(_?: NSDictionary<string, any>, forPersistentStoreOfType: string, at: NSURL, options?: NSDictionary<any, any>): boolean;

	readonly managedObjectModel: NSManagedObjectModel;

	setName(_: string)

	name: string;

	readonly persistentStores: NSArray<NSPersistentStore>;

	static registeredStoreTypes(): NSDictionary<string, NSValue>;

	static create(managedObjectModel: NSManagedObjectModel);

	URLForPersistentStore(_: NSPersistentStore): NSURL;

	addPersistentStoreWithDescriptionCompletionHandler(_: NSPersistentStoreDescription, completionHandler?: (p1: NSPersistentStoreDescription, p2: NSError) => void): void;

	addPersistentStoreWithTypeConfigurationURLOptionsError(ofType: string, configurationName?: string, at?: NSURL, options?: NSDictionary<any, any>): NSPersistentStore;

	currentPersistentHistoryTokenFromStores(_?: NSArray<any>): NSPersistentHistoryToken;

	destroyPersistentStoreAtURLWithTypeOptionsError(at: NSURL, ofType: string, options?: NSDictionary<any, any>): boolean;

	executeRequestWithContextError(withContext: NSPersistentStoreRequest, error: NSManagedObjectContext): any;

	importStoreWithIdentifierFromExternalRecordsDirectoryToURLOptionsWithTypeError(withIdentifier?: string, fromExternalRecordsDirectoryAt: NSURL, to: NSURL, options?: NSDictionary<any, any>, ofType: string): NSPersistentStore;

	lock(): void;

	managedObjectIDForURIRepresentation(_: NSURL): NSManagedObjectID;

	metadataForPersistentStore(_: NSPersistentStore): NSDictionary<string, any>;

	migratePersistentStoreToURLOptionsWithTypeError(toURL: NSPersistentStore, options: NSURL, withType?: NSDictionary<any, any>, error: string): NSPersistentStore;

	performBlock(_: () => void): void;

	performBlockAndWait(_: () => void): void;

	persistentStoreForURL(_: NSURL): NSPersistentStore;

	removePersistentStoreError(_: NSPersistentStore): boolean;

	replacePersistentStoreAtURLDestinationOptionsWithPersistentStoreFromURLSourceOptionsStoreTypeError(at: NSURL, destinationOptions?: NSDictionary<any, any>, withPersistentStoreFrom: NSURL, sourceOptions?: NSDictionary<any, any>, ofType: string): boolean;

	setMetadataForPersistentStore(_?: NSDictionary<string, any>, forPersistentStore: NSPersistentStore): void;

	setURLForPersistentStore(_: NSURL, forPersistentStore: NSPersistentStore): boolean;

	unlock(): void;
}

declare const NSPersistentStoreCoordinatorLockingError: number;

declare var NSPersistentStoreCoordinatorStoresDidChangeNotification: string;

declare var NSPersistentStoreCoordinatorStoresWillChangeNotification: string;

declare var NSPersistentStoreCoordinatorWillRemoveStoreNotification: string;

declare class NSPersistentStoreDescription extends NSObject implements NSCopying {

	static persistentStoreDescriptionWithURL(_: NSURL): NSPersistentStoreDescription;

	setURL(_: NSURL)

	URL: NSURL;

	setCloudKitContainerOptions(_: NSPersistentCloudKitContainerOptions)

	cloudKitContainerOptions: NSPersistentCloudKitContainerOptions;

	setConfiguration(_: string)

	configuration: string;

	readonly options: NSDictionary<string, NSObject>;

	setReadOnly(_: boolean)

	isReadOnly: boolean;

	setShouldAddStoreAsynchronously(_: boolean)

	shouldAddStoreAsynchronously: boolean;

	setShouldInferMappingModelAutomatically(_: boolean)

	shouldInferMappingModelAutomatically: boolean;

	setShouldMigrateStoreAutomatically(_: boolean)

	shouldMigrateStoreAutomatically: boolean;

	readonly sqlitePragmas: NSDictionary<string, NSObject>;

	setTimeout(_: number)

	timeout: number;

	setType(_: string)

	type: string;

	static create(URL: NSURL);

	copyWithZone(_?: any): any;

	setOptionForKey(_?: NSObject, forKey: string): void;

	setValueForPragmaNamed(_?: NSObject, forPragmaNamed: string): void;
}

declare var NSPersistentStoreForceDestroyOption: string;

declare const NSPersistentStoreIncompatibleSchemaError: number;

declare const NSPersistentStoreIncompatibleVersionHashError: number;

declare const NSPersistentStoreIncompleteSaveError: number;

declare const NSPersistentStoreInvalidTypeError: number;

declare var NSPersistentStoreOSCompatibility: string;

declare const NSPersistentStoreOpenError: number;

declare const NSPersistentStoreOperationError: number;

declare var NSPersistentStoreRemoteChangeNotification: string;

declare var NSPersistentStoreRemoteChangeNotificationPostOptionKey: string;

declare class NSPersistentStoreRequest extends NSObject implements NSCopying {

	setAffectedStores(_: NSArray<NSPersistentStore>)

	affectedStores: NSArray<NSPersistentStore>;

	readonly requestType: NSPersistentStoreRequestType;

	copyWithZone(_?: any): any;
}

enum NSPersistentStoreRequestType {

	FetchRequestType = 1,

	SaveRequestType = 2,

	BatchInsertRequestType = 5,

	BatchUpdateRequestType = 6,

	BatchDeleteRequestType = 7
}


declare class NSPersistentStoreResult extends NSObject {
}

declare const NSPersistentStoreSaveConflictsError: number;

declare var NSPersistentStoreSaveConflictsErrorKey: string;

declare const NSPersistentStoreSaveError: number;

declare const NSPersistentStoreTimeoutError: number;

declare var NSPersistentStoreTimeoutOption: string;

declare const NSPersistentStoreTypeMismatchError: number;

declare var NSPersistentStoreURLKey: string;

declare const NSPersistentStoreUnsupportedRequestTypeError: number;

declare class NSPropertyDescription extends NSObject implements NSCoding, NSCopying {

	readonly entity: NSEntityDescription;

	setIndexedBySpotlight(_: boolean)

	isIndexedBySpotlight: boolean;

	setName(_: string)

	name: string;

	setOptional(_: boolean)

	isOptional: boolean;

	setRenamingIdentifier(_: string)

	renamingIdentifier: string;

	setTransient(_: boolean)

	isTransient: boolean;

	setUserInfo(_: NSDictionary<any, any>)

	userInfo: NSDictionary<any, any>;

	readonly validationPredicates: NSArray<NSPredicate>;

	readonly validationWarnings: NSArray<any>;

	readonly versionHash: NSData;

	setVersionHashModifier(_: string)

	versionHashModifier: string;

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	setValidationPredicatesWithValidationWarnings(_?: NSArray<NSPredicate>, withValidationWarnings?: NSArray<string>): void;
}

declare class NSPropertyMapping extends NSObject {

	setName(_: string)

	name: string;

	setUserInfo(_: NSDictionary<any, any>)

	userInfo: NSDictionary<any, any>;

	setValueExpression(_: NSExpression)

	valueExpression: NSExpression;
}

declare class NSQueryGenerationToken extends NSObject implements NSCopying, NSSecureCoding {

	static currentQueryGenerationToken(): NSQueryGenerationToken;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

declare var NSReadOnlyPersistentStoreOption: string;

declare var NSRefreshedObjectsKey: string;

declare class NSRelationshipDescription extends NSPropertyDescription {

	setDeleteRule(_: NSDeleteRule)

	deleteRule: NSDeleteRule;

	setDestinationEntity(_: NSEntityDescription)

	destinationEntity: NSEntityDescription;

	setInverseRelationship(_: NSRelationshipDescription)

	inverseRelationship: NSRelationshipDescription;

	setMaxCount(_: number)

	maxCount: number;

	setMinCount(_: number)

	minCount: number;

	setOrdered(_: boolean)

	isOrdered: boolean;

	readonly isToMany: boolean;
}

declare var NSRemovedPersistentStoresKey: string;

declare var NSRollbackMergePolicy: any;

declare var NSRollbackMergePolicyVar: any;

declare var NSSQLiteAnalyzeOption: string;

declare const NSSQLiteError: number;

declare var NSSQLiteErrorDomain: string;

declare var NSSQLiteManualVacuumOption: string;

declare var NSSQLitePragmasOption: string;

declare var NSSQLiteStoreType: string;

declare class NSSaveChangesRequest extends NSPersistentStoreRequest {

	readonly deletedObjects: NSSet<NSManagedObject>;

	readonly insertedObjects: NSSet<NSManagedObject>;

	readonly lockedObjects: NSSet<NSManagedObject>;

	readonly updatedObjects: NSSet<NSManagedObject>;

	static create(insertedObjects: NSSet<NSManagedObject>, updatedObjects: NSSet<NSManagedObject>, deletedObjects: NSSet<NSManagedObject>, lockedObjects: NSSet<NSManagedObject>);
}

enum NSSnapshotEventType {

	UndoInsertion = 2,

	UndoDeletion = 4,

	UndoUpdate = 8,

	Rollback = 16,

	Refresh = 32,

	MergePolicy = 64
}


declare var NSStoreModelVersionHashesKey: string;

declare var NSStoreModelVersionIdentifiersKey: string;

declare var NSStoreTypeKey: string;

declare var NSStoreUUIDKey: string;

declare var NSUUIDChangedPersistentStoresKey: string;

declare var NSUpdatedObjectsKey: string;

declare var NSValidateXMLStoreOption: string;

declare const NSValidationDateTooLateError: number;

declare const NSValidationDateTooSoonError: number;

declare const NSValidationInvalidDateError: number;

declare const NSValidationInvalidURIError: number;

declare var NSValidationKeyErrorKey: string;

declare const NSValidationMissingMandatoryPropertyError: number;

declare const NSValidationMultipleErrorsError: number;

declare const NSValidationNumberTooLargeError: number;

declare const NSValidationNumberTooSmallError: number;

declare var NSValidationObjectErrorKey: string;

declare var NSValidationPredicateErrorKey: string;

declare const NSValidationRelationshipDeniedDeleteError: number;

declare const NSValidationRelationshipExceedsMaximumCountError: number;

declare const NSValidationRelationshipLacksMinimumCountError: number;

declare const NSValidationStringPatternMatchingError: number;

declare const NSValidationStringTooLongError: number;

declare const NSValidationStringTooShortError: number;

declare var NSValidationValueErrorKey: string;

declare var NSXMLStoreType: string;
