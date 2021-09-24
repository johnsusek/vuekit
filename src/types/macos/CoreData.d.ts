globalThis.NSAttributeType = globalThis.NSAttributeType || {};

globalThis.NSAttributeType = {
    UndefinedAttributeType: 0,
    Integer16AttributeType: 100,
    Integer32AttributeType: 200,
    Integer64AttributeType: 300,
    DecimalAttributeType: 400,
    DoubleAttributeType: 500,
    FloatAttributeType: 600,
    StringAttributeType: 700,
    BooleanAttributeType: 800,
    DateAttributeType: 900,
    BinaryDataAttributeType: 1000,
    UUIDAttributeType: 1100,
    URIAttributeType: 1200,
    TransformableAttributeType: 1800,
    ObjectIDAttributeType: 2000,
    '0': 'UndefinedAttributeType',
    '100': 'Integer16AttributeType',
    '200': 'Integer32AttributeType',
    '300': 'Integer64AttributeType',
    '400': 'DecimalAttributeType',
    '500': 'DoubleAttributeType',
    '600': 'FloatAttributeType',
    '700': 'StringAttributeType',
    '800': 'BooleanAttributeType',
    '900': 'DateAttributeType',
    '1000': 'BinaryDataAttributeType',
    '1100': 'UUIDAttributeType',
    '1200': 'URIAttributeType',
    '1800': 'TransformableAttributeType',
    '2000': 'ObjectIDAttributeType'
}

globalThis.NSBatchDeleteRequestResultType = globalThis.NSBatchDeleteRequestResultType || {};

globalThis.NSBatchDeleteRequestResultType = {
    ResultTypeStatusOnly: 0,
    ResultTypeObjectIDs: 1,
    ResultTypeCount: 2,
    '0': 'ResultTypeStatusOnly',
    '1': 'ResultTypeObjectIDs',
    '2': 'ResultTypeCount'
}

globalThis.NSBatchInsertRequestResultType = globalThis.NSBatchInsertRequestResultType || {};

globalThis.NSBatchInsertRequestResultType = {
    StatusOnly: 0,
    ObjectIDs: 1,
    Count: 2,
    '0': 'StatusOnly',
    '1': 'ObjectIDs',
    '2': 'Count'
}

globalThis.NSBatchUpdateRequestResultType = globalThis.NSBatchUpdateRequestResultType || {};

globalThis.NSBatchUpdateRequestResultType = {
    StatusOnlyResultType: 0,
    UpdatedObjectIDsResultType: 1,
    UpdatedObjectsCountResultType: 2,
    '0': 'StatusOnlyResultType',
    '1': 'UpdatedObjectIDsResultType',
    '2': 'UpdatedObjectsCountResultType'
}

globalThis.NSDeleteRule = globalThis.NSDeleteRule || {};

globalThis.NSDeleteRule = {
    NoActionDeleteRule: 0,
    NullifyDeleteRule: 1,
    CascadeDeleteRule: 2,
    DenyDeleteRule: 3,
    '0': 'NoActionDeleteRule',
    '1': 'NullifyDeleteRule',
    '2': 'CascadeDeleteRule',
    '3': 'DenyDeleteRule'
}

globalThis.NSEntityMappingType = globalThis.NSEntityMappingType || {};

globalThis.NSEntityMappingType = {
    UndefinedEntityMappingType: 0,
    CustomEntityMappingType: 1,
    AddEntityMappingType: 2,
    RemoveEntityMappingType: 3,
    CopyEntityMappingType: 4,
    TransformEntityMappingType: 5,
    '0': 'UndefinedEntityMappingType',
    '1': 'CustomEntityMappingType',
    '2': 'AddEntityMappingType',
    '3': 'RemoveEntityMappingType',
    '4': 'CopyEntityMappingType',
    '5': 'TransformEntityMappingType'
}

globalThis.NSFetchIndexElementType = globalThis.NSFetchIndexElementType || {};

globalThis.NSFetchIndexElementType = {
    Binary: 0,
    RTree: 1,
    '0': 'Binary',
    '1': 'RTree'
}

globalThis.NSFetchRequestResultType = globalThis.NSFetchRequestResultType || {};

globalThis.NSFetchRequestResultType = {
    ManagedObjectResultType: 0,
    ManagedObjectIDResultType: 1,
    DictionaryResultType: 2,
    CountResultType: 4,
    '0': 'ManagedObjectResultType',
    '1': 'ManagedObjectIDResultType',
    '2': 'DictionaryResultType',
    '4': 'CountResultType'
}

globalThis.NSFetchedResultsChangeType = globalThis.NSFetchedResultsChangeType || {};

globalThis.NSFetchedResultsChangeType = {
    Insert: 1,
    Delete: 2,
    Move: 3,
    Update: 4,
    '1': 'Insert',
    '2': 'Delete',
    '3': 'Move',
    '4': 'Update'
}

globalThis.NSManagedObjectContextConcurrencyType = globalThis.NSManagedObjectContextConcurrencyType || {};

globalThis.NSManagedObjectContextConcurrencyType = {
    ConfinementConcurrencyType: 0,
    PrivateQueueConcurrencyType: 1,
    MainQueueConcurrencyType: 2,
    '0': 'ConfinementConcurrencyType',
    '1': 'PrivateQueueConcurrencyType',
    '2': 'MainQueueConcurrencyType'
}

globalThis.NSMergePolicyType = globalThis.NSMergePolicyType || {};

globalThis.NSMergePolicyType = {
    ErrorMergePolicyType: 0,
    MergeByPropertyStoreTrumpMergePolicyType: 1,
    MergeByPropertyObjectTrumpMergePolicyType: 2,
    OverwriteMergePolicyType: 3,
    RollbackMergePolicyType: 4,
    '0': 'ErrorMergePolicyType',
    '1': 'MergeByPropertyStoreTrumpMergePolicyType',
    '2': 'MergeByPropertyObjectTrumpMergePolicyType',
    '3': 'OverwriteMergePolicyType',
    '4': 'RollbackMergePolicyType'
}

globalThis.NSPersistentCloudKitContainerSchemaInitializationOptions = globalThis.NSPersistentCloudKitContainerSchemaInitializationOptions || {};

globalThis.NSPersistentCloudKitContainerSchemaInitializationOptions = {
    None: 0,
    DryRun: 2,
    PrintSchema: 4,
    '0': 'None',
    '2': 'DryRun',
    '4': 'PrintSchema'
}

globalThis.NSPersistentHistoryChangeType = globalThis.NSPersistentHistoryChangeType || {};

globalThis.NSPersistentHistoryChangeType = {
    Insert: 0,
    Update: 1,
    Delete: 2,
    '0': 'Insert',
    '1': 'Update',
    '2': 'Delete'
}

globalThis.NSPersistentHistoryResultType = globalThis.NSPersistentHistoryResultType || {};

globalThis.NSPersistentHistoryResultType = {
    StatusOnly: 0,
    ObjectIDs: 1,
    Count: 2,
    TransactionsOnly: 3,
    ChangesOnly: 4,
    TransactionsAndChanges: 5,
    '0': 'StatusOnly',
    '1': 'ObjectIDs',
    '2': 'Count',
    '3': 'TransactionsOnly',
    '4': 'ChangesOnly',
    '5': 'TransactionsAndChanges'
}

globalThis.NSPersistentStoreRequestType = globalThis.NSPersistentStoreRequestType || {};

globalThis.NSPersistentStoreRequestType = {
    FetchRequestType: 1,
    SaveRequestType: 2,
    BatchInsertRequestType: 5,
    BatchUpdateRequestType: 6,
    BatchDeleteRequestType: 7,
    '1': 'FetchRequestType',
    '2': 'SaveRequestType',
    '5': 'BatchInsertRequestType',
    '6': 'BatchUpdateRequestType',
    '7': 'BatchDeleteRequestType'
}

globalThis.NSSnapshotEventType = globalThis.NSSnapshotEventType || {};

globalThis.NSSnapshotEventType = {
    UndoInsertion: 2,
    UndoDeletion: 4,
    UndoUpdate: 8,
    Rollback: 16,
    Refresh: 32,
    MergePolicy: 64,
    '2': 'UndoInsertion',
    '4': 'UndoDeletion',
    '8': 'UndoUpdate',
    '16': 'Rollback',
    '32': 'Refresh',
    '64': 'MergePolicy'
}

declare var NSAddedPersistentStoresKey: string;

declare var NSAffectedObjectsErrorKey: string;

declare var NSAffectedStoresErrorKey: string;

declare class NSAsynchronousFetchRequest<ResultType> extends NSPersistentStoreRequest {
  readonly completionBlock: (p1: NSAsynchronousFetchResult<any>) => void;
  estimatedResultCount: number;
  setEstimatedResultCount(_: number)
  readonly fetchRequest: NSFetchRequest<ResultType>;
  static createWithFetchRequestCompletionBlock(fetchRequest: NSFetchRequest<ResultType>, completionBlock?: (p1: NSAsynchronousFetchResult<ResultType>) => void): this;
}

declare class NSAsynchronousFetchResult<ResultType> extends NSPersistentStoreAsynchronousResult {
  readonly fetchRequest: NSAsynchronousFetchRequest<ResultType>;
  readonly finalResult: NSArray<ResultType>;
}

declare class NSAtomicStore extends NSPersistentStore {
  addCacheNodes(_: Set<NSAtomicStoreCacheNode>): void;
  cacheNodeForObjectID(_: NSManagedObjectID): NSAtomicStoreCacheNode;
  cacheNodes(): Set<NSAtomicStoreCacheNode>;
  load(): boolean;
  newCacheNodeForManagedObject(_: NSManagedObject): NSAtomicStoreCacheNode;
  newReferenceObjectForManagedObject(_: NSManagedObject): any;
  objectIDForEntityReferenceObject(for_: NSEntityDescription, withReferenceObject: any): NSManagedObjectID;
  referenceObjectForObjectID(_: NSManagedObjectID): any;
  save(): boolean;
  updateCacheNodeFromManagedObject(_: NSAtomicStoreCacheNode, fromManagedObject: NSManagedObject): void;
  willRemoveCacheNodes(_: Set<NSAtomicStoreCacheNode>): void;
}

declare class NSAtomicStoreCacheNode extends NSObject {
  readonly objectID: NSManagedObjectID;
  propertyCache: NSMutableDictionary<string, any>;
  setPropertyCache(_: NSMutableDictionary<string, any>)
  static createWithObjectID(objectID: NSManagedObjectID): this;
  setValueForKey(_?: any, forKey: string): void;
  valueForKey(_: string): any;
}

declare class NSAttributeDescription extends NSPropertyDescription {
  allowsExternalBinaryDataStorage: boolean;
  setAllowsExternalBinaryDataStorage(_: boolean)
  attributeType: NSAttributeType;
  setAttributeType(_: NSAttributeType)
  attributeValueClassName: string;
  setAttributeValueClassName(_: string)
  defaultValue: any;
  setDefaultValue(_: any)
  preservesValueInHistoryOnDeletion: boolean;
  setPreservesValueInHistoryOnDeletion(_: boolean)
  valueTransformerName: string;
  setValueTransformerName(_: string)
}

declare class NSBatchDeleteRequest extends NSPersistentStoreRequest {
  readonly fetchRequest: NSFetchRequest<any>;
  resultType: NSBatchDeleteRequestResultType;
  setResultType(_: NSBatchDeleteRequestResultType)
  static createWithFetchRequest(fetchRequest: NSFetchRequest<any>): this;
  static createWithObjectIDs(objectIDs: NSArray<NSManagedObjectID>): this;
}

declare class NSBatchDeleteResult extends NSPersistentStoreResult {
  readonly result: any;
  readonly resultType: NSBatchDeleteRequestResultType;
}

declare class NSBatchInsertRequest extends NSPersistentStoreRequest {
  static batchInsertRequestWithEntityNameObjects(_: string, objects: NSArray<NSDictionary<string, any>>): NSBatchInsertRequest;
  readonly entity: NSEntityDescription;
  readonly entityName: string;
  objectsToInsert: NSArray<NSDictionary<string, any>>;
  setObjectsToInsert(_: NSArray<NSDictionary<string, any>>)
  resultType: NSBatchInsertRequestResultType;
  setResultType(_: NSBatchInsertRequestResultType)
  static createWithEntityObjects(entity: NSEntityDescription, objects: NSArray<NSDictionary<string, any>>): this;
  static createWithEntityNameObjects(entityName: string, objects: NSArray<NSDictionary<string, any>>): this;
}

declare class NSBatchInsertResult extends NSPersistentStoreResult {
  readonly result: any;
  readonly resultType: NSBatchInsertRequestResultType;
}

declare class NSBatchUpdateRequest extends NSPersistentStoreRequest {
  static batchUpdateRequestWithEntityName(_: string): NSBatchUpdateRequest;
  readonly entity: NSEntityDescription;
  readonly entityName: string;
  includesSubentities: boolean;
  setIncludesSubentities(_: boolean)
  predicate: NSPredicate;
  setPredicate(_: NSPredicate)
  propertiesToUpdate: NSDictionary<any, any>;
  setPropertiesToUpdate(_: NSDictionary<any, any>)
  resultType: NSBatchUpdateRequestResultType;
  setResultType(_: NSBatchUpdateRequestResultType)
  static createWithEntity(entity: NSEntityDescription): this;
  static createWithEntityName(entityName: string): this;
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
  static createWithConstraintDatabaseObjectDatabaseSnapshotConflictingObjectsConflictingSnapshots(constraint: NSArray<string>, databaseObject?: NSManagedObject, databaseSnapshot?: NSDictionary<any, any>, conflictingObjects: NSArray<NSManagedObject>, conflictingSnapshots: NSArray<any>): this;
}

declare class NSCoreDataCoreSpotlightDelegate extends NSObject {
  attributeSetForObject(_: NSManagedObject): CSSearchableItemAttributeSet;
  domainIdentifier(): string;
  indexName(): string;
  static createForStoreWithDescriptionModel(forStoreWithDescription: NSPersistentStoreDescription, model: NSManagedObjectModel): this;
  searchableIndexReindexAllSearchableItemsWithAcknowledgementHandler(_: CSSearchableIndex, reindexAllSearchableItemsWithAcknowledgementHandler: () => void): void;
  searchableIndexReindexSearchableItemsWithIdentifiersAcknowledgementHandler(_: CSSearchableIndex, reindexSearchableItemsWithIdentifiers: NSArray<string>, acknowledgementHandler: () => void): void;
}

declare var NSCoreDataCoreSpotlightExporter: string;


declare const NSCoreDataError: number;
declare var NSCoreDataVersionNumber: number;

declare var NSDeletedObjectsKey: string;

declare class NSDerivedAttributeDescription extends NSAttributeDescription {
  derivationExpression: NSExpression;
  setDerivationExpression(_: NSExpression)
}

declare var NSDetailedErrorsKey: string;

declare class NSEntityDescription extends NSObject implements NSCoding, NSCopying, NSFastEnumeration {
  static entityForNameInManagedObjectContext(forEntityName: string, in_: NSManagedObjectContext): NSEntityDescription;
  static insertNewObjectForEntityForNameInManagedObjectContext(forEntityName: string, into: NSManagedObjectContext): NSManagedObject;
  isAbstract: boolean;
  setAbstract(_: boolean)
  readonly attributesByName: NSDictionary<string, NSAttributeDescription>;
  coreSpotlightDisplayNameExpression: NSExpression;
  setCoreSpotlightDisplayNameExpression(_: NSExpression)
  indexes: NSArray<NSFetchIndexDescription>;
  setIndexes(_: NSArray<NSFetchIndexDescription>)
  managedObjectClassName: string;
  setManagedObjectClassName(_: string)
  readonly managedObjectModel: NSManagedObjectModel;
  name: string;
  setName(_: string)
  properties: NSArray<NSPropertyDescription>;
  setProperties(_: NSArray<NSPropertyDescription>)
  readonly propertiesByName: NSDictionary<string, NSPropertyDescription>;
  readonly relationshipsByName: NSDictionary<string, NSRelationshipDescription>;
  renamingIdentifier: string;
  setRenamingIdentifier(_: string)
  subentities: NSArray<NSEntityDescription>;
  setSubentities(_: NSArray<NSEntityDescription>)
  readonly subentitiesByName: NSDictionary<string, NSEntityDescription>;
  readonly superentity: NSEntityDescription;
  uniquenessConstraints: NSArray<NSArray<any>>;
  setUniquenessConstraints(_: NSArray<NSArray<any>>)
  userInfo: NSDictionary<any, any>;
  setUserInfo(_: NSDictionary<any, any>)
  readonly versionHash: Data;
  versionHashModifier: string;
  setVersionHashModifier(_: string)
  copyWithZone(with_?: any): any;
  countByEnumeratingWithStateObjectsCount(with_: NSFastEnumerationState, objects?: any, count: number): number;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  isKindOfEntity(entity: NSEntityDescription): boolean;
  relationshipsWithDestinationEntity(forDestination: NSEntityDescription): NSArray<NSRelationshipDescription>;
}

declare class NSEntityMapping extends NSObject {
  attributeMappings: NSArray<NSPropertyMapping>;
  setAttributeMappings(_: NSArray<NSPropertyMapping>)
  destinationEntityName: string;
  setDestinationEntityName(_: string)
  destinationEntityVersionHash: Data;
  setDestinationEntityVersionHash(_: Data)
  entityMigrationPolicyClassName: string;
  setEntityMigrationPolicyClassName(_: string)
  mappingType: NSEntityMappingType;
  setMappingType(_: NSEntityMappingType)
  name: string;
  setName(_: string)
  relationshipMappings: NSArray<NSPropertyMapping>;
  setRelationshipMappings(_: NSArray<NSPropertyMapping>)
  sourceEntityName: string;
  setSourceEntityName(_: string)
  sourceEntityVersionHash: Data;
  setSourceEntityVersionHash(_: Data)
  sourceExpression: NSExpression;
  setSourceExpression(_: NSExpression)
  userInfo: NSDictionary<any, any>;
  setUserInfo(_: NSDictionary<any, any>)
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
  expression: NSExpression;
  setExpression(_: NSExpression)
  expressionResultType: NSAttributeType;
  setExpressionResultType(_: NSAttributeType)
}


declare const NSExternalRecordImportError: number;
declare class NSFetchIndexDescription extends NSObject implements NSCoding {
  elements: NSArray<NSFetchIndexElementDescription>;
  setElements(_: NSArray<NSFetchIndexElementDescription>)
  readonly entity: NSEntityDescription;
  name: string;
  setName(_: string)
  partialIndexPredicate: NSPredicate;
  setPartialIndexPredicate(_: NSPredicate)
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithNameElements(name: string, elements?: NSArray<NSFetchIndexElementDescription>): this;
}

declare class NSFetchIndexElementDescription extends NSObject implements NSCoding {
  isAscending: boolean;
  setAscending(_: boolean)
  collationType: NSFetchIndexElementType;
  setCollationType(_: NSFetchIndexElementType)
  readonly indexDescription: NSFetchIndexDescription;
  readonly property: NSPropertyDescription;
  readonly propertyName: string;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  static createWithPropertyCollationType(property: NSPropertyDescription, collationType: NSFetchIndexElementType): this;
}

declare class NSFetchRequest<ResultType> extends NSPersistentStoreRequest implements NSCoding {
  static fetchRequestWithEntityName<ResultType>(_: string): NSFetchRequest<ResultType>;
  entity: NSEntityDescription;
  setEntity(_: NSEntityDescription)
  readonly entityName: string;
  fetchBatchSize: number;
  setFetchBatchSize(_: number)
  fetchLimit: number;
  setFetchLimit(_: number)
  fetchOffset: number;
  setFetchOffset(_: number)
  havingPredicate: NSPredicate;
  setHavingPredicate(_: NSPredicate)
  includesPendingChanges: boolean;
  setIncludesPendingChanges(_: boolean)
  includesPropertyValues: boolean;
  setIncludesPropertyValues(_: boolean)
  includesSubentities: boolean;
  setIncludesSubentities(_: boolean)
  predicate: NSPredicate;
  setPredicate(_: NSPredicate)
  propertiesToFetch: NSArray<any>;
  setPropertiesToFetch(_: NSArray<any>)
  propertiesToGroupBy: NSArray<any>;
  setPropertiesToGroupBy(_: NSArray<any>)
  relationshipKeyPathsForPrefetching: NSArray<string>;
  setRelationshipKeyPathsForPrefetching(_: NSArray<string>)
  resultType: NSFetchRequestResultType;
  setResultType(_: NSFetchRequestResultType)
  returnsDistinctResults: boolean;
  setReturnsDistinctResults(_: boolean)
  returnsObjectsAsFaults: boolean;
  setReturnsObjectsAsFaults(_: boolean)
  shouldRefreshRefetchedObjects: boolean;
  setShouldRefreshRefetchedObjects(_: boolean)
  sortDescriptors: NSArray<NSSortDescriptor>;
  setSortDescriptors(_: NSArray<NSSortDescriptor>)
  encodeWithCoder(with_: NSCoder): void;
  execute(): NSArray<ResultType>;
  static createWithCoder(coder: NSCoder): this;
  static createWithEntityName(entityName: string): this;
}

declare class NSFetchRequestExpression extends NSExpression {
  static expressionForFetchContextCountOnly(_: NSExpression, context: NSExpression, countOnly: boolean): NSExpression;
  readonly contextExpression: NSExpression;
  readonly isCountOnlyRequest: boolean;
  readonly requestExpression: NSExpression;
}

declare var NSFetchRequestExpressionType: NSExpression.ExpressionType;

interface NSFetchRequestResult extends NSObjectProtocol {
}

declare var NSFetchRequestResult: {
  prototype: NSFetchRequestResult;
};

declare class NSFetchedPropertyDescription extends NSPropertyDescription {
  fetchRequest: NSFetchRequest<any>;
  setFetchRequest(_: NSFetchRequest<any>)
}

declare class NSFetchedResultsController<ResultType> extends NSObject {
  static deleteCacheWithName(_?: string): void;
  readonly cacheName: string;
  delegate: NSFetchedResultsControllerDelegate;
  setDelegate(_: NSFetchedResultsControllerDelegate)
  readonly fetchRequest: NSFetchRequest<ResultType>;
  readonly fetchedObjects: NSArray<ResultType>;
  readonly managedObjectContext: NSManagedObjectContext;
  readonly sectionIndexTitles: NSArray<string>;
  readonly sectionNameKeyPath: string;
  readonly sections: NSArray<NSFetchedResultsSectionInfo>;
  indexPathForObject(_: ResultType): IndexPath;
  static createWithFetchRequestManagedObjectContextSectionNameKeyPathCacheName(fetchRequest: NSFetchRequest<ResultType>, managedObjectContext: NSManagedObjectContext, sectionNameKeyPath?: string, cacheName?: string): this;
  objectAtIndexPath(_: IndexPath): ResultType;
  performFetch(): boolean;
  sectionForSectionIndexTitleAtIndex(_: string, atIndex: number): number;
  sectionIndexTitleForSectionName(_: string): string;
}

interface NSFetchedResultsControllerDelegate extends NSObjectProtocol {
  controllerWithDidChangeContentWithDifference?(_: NSFetchedResultsController<any>, didChangeContentWithDifference: NSOrderedCollectionDifference<NSManagedObjectID>): void;
  controllerWithDidChangeContentWithSnapshot?(_: NSFetchedResultsController<any>, didChangeContentWithSnapshot: NSDiffableDataSourceSnapshotReference<string, NSManagedObjectID>): void;
  controllerWithDidChangeObjectAtIndexPathForChangeTypeNewIndexPath?(_: NSFetchedResultsController<any>, didChangeObject: any, atIndexPath?: IndexPath, forChangeType: NSFetchedResultsChangeType, newIndexPath?: IndexPath): void;
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
  static identifierForNewStoreAtURL(_: URL): any;
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
  static createWithObjectIDWithValuesVersion(objectID: NSManagedObjectID, withValues: NSDictionary<string, any>, version: number): this;
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
  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol
  awakeFromFetch(): void;
  awakeFromInsert(): void;
  awakeFromSnapshotEvents(_: NSSnapshotEventType): void;
  changedValues(): NSDictionary<string, any>;
  changedValuesForCurrentEvent(): NSDictionary<string, any>;
  committedValuesForKeys(_?: NSArray<string>): NSDictionary<string, any>;
  conformsToProtocol(_: any /* Protocol */): boolean;
  didAccessValueForKey(_?: string): void;
  didChangeValueForKey(_: string): void;
  didChangeValueForKeyWithWithSetMutationUsingObjects(_: string, withSetMutation: NSKeyValueSetMutationKind, usingObjects: Set<any>): void;
  didSave(): void;
  didTurnIntoFault(): void;
  hasFaultForRelationshipNamed(_: string): boolean;
  static createWithContext(context: NSManagedObjectContext): this;
  static createWithEntityInsertIntoManagedObjectContext(entity: NSEntityDescription, insertIntoManagedObjectContext?: NSManagedObjectContext): this;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  isProxy(): boolean;
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
  setValueForKey(_?: any, forKey: string): void;
  validateForDelete(): boolean;
  validateForInsert(): boolean;
  validateForUpdate(): boolean;
  validateValueForKeyError(forKey?: any, error: string): boolean;
  valueForKey(_: string): any;
  willAccessValueForKey(_?: string): void;
  willChangeValueForKey(_: string): void;
  willChangeValueForKeyWithWithSetMutationUsingObjects(_: string, withSetMutation: NSKeyValueSetMutationKind, usingObjects: Set<any>): void;
  willSave(): void;
  willTurnIntoFault(): void;
}


declare const NSManagedObjectConstraintMergeError: number;

declare const NSManagedObjectConstraintValidationError: number;
declare class NSManagedObjectContext extends NSObject implements NSCoding, NSLocking {
  static mergeChangesFromRemoteContextSaveIntoContexts(_: NSDictionary<any, any>, intoContexts: NSArray<NSManagedObjectContext>): void;
  automaticallyMergesChangesFromParent: boolean;
  setAutomaticallyMergesChangesFromParent(_: boolean)
  readonly concurrencyType: NSManagedObjectContextConcurrencyType;
  readonly deletedObjects: Set<NSManagedObject>;
  readonly hasChanges: boolean;
  readonly insertedObjects: Set<NSManagedObject>;
  mergePolicy: any;
  setMergePolicy(_: any)
  name: string;
  setName(_: string)
  parentContext: NSManagedObjectContext;
  setParentContext(_: NSManagedObjectContext)
  persistentStoreCoordinator: NSPersistentStoreCoordinator;
  setPersistentStoreCoordinator(_: NSPersistentStoreCoordinator)
  propagatesDeletesAtEndOfEvent: boolean;
  setPropagatesDeletesAtEndOfEvent(_: boolean)
  readonly queryGenerationToken: NSQueryGenerationToken;
  readonly registeredObjects: Set<NSManagedObject>;
  retainsRegisteredObjects: boolean;
  setRetainsRegisteredObjects(_: boolean)
  shouldDeleteInaccessibleFaults: boolean;
  setShouldDeleteInaccessibleFaults(_: boolean)
  stalenessInterval: number;
  setStalenessInterval(_: number)
  transactionAuthor: string;
  setTransactionAuthor(_: string)
  undoManager: UndoManager;
  setUndoManager(_: UndoManager)
  readonly updatedObjects: Set<NSManagedObject>;
  readonly userInfo: NSMutableDictionary<any, any>;
  assignObjectToPersistentStore(_: any, toPersistentStore: NSPersistentStore): void;
  countForFetchRequestWithError(error: NSFetchRequest<any>): number;
  deleteObject(_: NSManagedObject): void;
  detectConflictsForObject(_: NSManagedObject): void;
  encodeWithCoder(with_: NSCoder): void;
  fetchWith_(_: NSFetchRequest<any>): NSArray<any>;
  executeRequestError(error: NSPersistentStoreRequest): NSPersistentStoreResult;
  existingObjectWithIDError(error: NSManagedObjectID): NSManagedObject;
  static createWithCoder(coder: NSCoder): this;
  static createWithConcurrencyType(concurrencyType: NSManagedObjectContextConcurrencyType): this;
  insertObject(_: NSManagedObject): void;
  lock(): void;
  mergeChangesFromContextDidSaveNotification(_: Notification): void;
  objectRegisteredForID(for_: NSManagedObjectID): NSManagedObject;
  objectWithID(_: NSManagedObjectID): NSManagedObject;
  observeValueForKeyPathOfObjectChangeContext(_?: string, ofObject?: any, change?: NSDictionary<string, any>, context?: any): void;
  obtainPermanentIDsForObjectsError(error: NSArray<NSManagedObject>): boolean;
  performBlock(_: () => void): void;
  performBlockAndWait(_: () => void): void;
  processPendingChanges(): void;
  redo(): void;
  refreshAllObjects(): void;
  refreshObjectMergeChanges(_: NSManagedObject, mergeChanges: boolean): void;
  reset(): void;
  rollback(): void;
  save(): boolean;
  setQueryGenerationFromTokenError(error?: NSQueryGenerationToken): boolean;
  shouldHandleInaccessibleFaultForObjectIDTriggeredByProperty(_: NSManagedObject, forObjectID: NSManagedObjectID, triggeredByProperty?: NSPropertyDescription): boolean;
  undo(): void;
  unlock(): void;
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
  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol
  URIRepresentation(): URL;
  conformsToProtocol(_: any /* Protocol */): boolean;
  copyWithZone(with_?: any): any;
  isEqual(_: any): boolean;
  isKindOfClass(_: typeof NSObject): boolean;
  isMemberOfClass(_: typeof NSObject): boolean;
  isProxy(): boolean;
  performSelector(_: string): any;
  performSelectorWithObject(_: string, withObject: any): any;
  performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;
  respondsToSelector(_: string): boolean;
  retainCount(): number;
  self(): this;
}


declare const NSManagedObjectMergeError: number;
declare class NSManagedObjectModel extends NSObject implements NSCoding, NSCopying, NSFastEnumeration {
  static mergedModelFromBundles(_?: NSArray<Bundle>): NSManagedObjectModel;
  static mergedModelFromBundlesForStoreMetadata(_?: NSArray<Bundle>, forStoreMetadata: NSDictionary<string, any>): NSManagedObjectModel;
  static modelByMergingModels(_?: NSArray<NSManagedObjectModel>): NSManagedObjectModel;
  static modelByMergingModelsForStoreMetadata(_: NSArray<NSManagedObjectModel>, forStoreMetadata: NSDictionary<string, any>): NSManagedObjectModel;
  readonly configurations: NSArray<string>;
  entities: NSArray<NSEntityDescription>;
  setEntities(_: NSArray<NSEntityDescription>)
  readonly entitiesByName: NSDictionary<string, NSEntityDescription>;
  readonly entityVersionHashesByName: NSDictionary<string, Data>;
  readonly fetchRequestTemplatesByName: NSDictionary<string, NSFetchRequest<any>>;
  localizationDictionary: NSDictionary<string, string>;
  setLocalizationDictionary(_: NSDictionary<string, string>)
  versionIdentifiers: Set<any>;
  setVersionIdentifiers(_: Set<any>)
  copyWithZone(with_?: any): any;
  countByEnumeratingWithStateObjectsCount(with_: NSFastEnumerationState, objects?: any, count: number): number;
  encodeWithCoder(with_: NSCoder): void;
  entitiesForConfiguration(forConfigurationName?: string): NSArray<NSEntityDescription>;
  fetchRequestFromTemplateWithNameSubstitutionVariables(_: string, substitutionVariables: NSDictionary<string, any>): NSFetchRequest<any>;
  fetchRequestTemplateForName(_: string): NSFetchRequest<any>;
  static createWithCoder(coder: NSCoder): this;
  static createWithContentsOfURL(contentsOfURL: URL): this;
  isConfigurationCompatibleWithStoreMetadata(withName?: string, compatibleWithStoreMetadata: NSDictionary<string, any>): boolean;
  setEntitiesForConfiguration(_: NSArray<NSEntityDescription>, forConfigurationName: string): void;
  setFetchRequestTemplateForName(_?: NSFetchRequest<any>, forName: string): void;
}


declare const NSManagedObjectReferentialIntegrityError: number;

declare const NSManagedObjectValidationError: number;
declare class NSMappingModel extends NSObject {
  static inferredMappingModelForSourceModelDestinationModelError(destinationModel: NSManagedObjectModel, error: NSManagedObjectModel): NSMappingModel;
  static mappingModelFromBundlesForSourceModelDestinationModel(_?: NSArray<Bundle>, forSourceModel?: NSManagedObjectModel, destinationModel?: NSManagedObjectModel): NSMappingModel;
  entityMappings: NSArray<NSEntityMapping>;
  setEntityMappings(_: NSArray<NSEntityMapping>)
  readonly entityMappingsByName: NSDictionary<string, NSEntityMapping>;
  static createWithContentsOfURL(contentsOfURL?: URL): this;
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
  static createWithSourceNewVersionOldVersionCachedSnapshotPersistedSnapshot(source: NSManagedObject, newVersion: number, oldVersion: number, cachedSnapshot?: NSDictionary<string, any>, persistedSnapshot?: NSDictionary<string, any>): this;
}

declare class NSMergePolicy extends NSObject {
  readonly mergeType: NSMergePolicyType;
  static errorMergePolicy(): NSMergePolicy;
  static mergeByPropertyObjectTrumpMergePolicy(): NSMergePolicy;
  static mergeByPropertyStoreTrumpMergePolicy(): NSMergePolicy;
  static overwriteMergePolicy(): NSMergePolicy;
  static rollbackMergePolicy(): NSMergePolicy;
  static createWithMergeType(mergeType: NSMergePolicyType): this;
  resolveConflictsError(mergeConflicts: NSArray<any>): boolean;
  resolveConstraintConflictsError(constraintConflicts: NSArray<NSConstraintConflict>): boolean;
  resolveOptimisticLockingVersionConflictsError(optimisticLockingConflicts: NSArray<NSMergeConflict>): boolean;
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
  userInfo: NSDictionary<any, any>;
  setUserInfo(_: NSDictionary<any, any>)
  usesStoreSpecificMigrationManager: boolean;
  setUsesStoreSpecificMigrationManager(_: boolean)
  associateSourceInstanceWithDestinationInstanceForEntityMapping(sourceInstance: NSManagedObject, withDestinationInstance: NSManagedObject, for_: NSEntityMapping): void;
  cancelMigrationWithError(_: NSError): void;
  destinationEntityForEntityMapping(_: NSEntityMapping): NSEntityDescription;
  destinationInstancesForEntityMappingNamedSourceInstances(forEntityMappingName: string, sourceInstances?: NSArray<NSManagedObject>): NSArray<NSManagedObject>;
  static createWithSourceModelDestinationModel(sourceModel: NSManagedObjectModel, destinationModel: NSManagedObjectModel): this;
  migrateStoreFromURLTypeOptionsWithMappingModelToDestinationURLDestinationTypeDestinationOptionsError(from: URL, sourceType: string, options?: NSDictionary<any, any>, with_?: NSMappingModel, toDestinationURL: URL, destinationType: string, destinationOptions?: NSDictionary<any, any>): boolean;
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
  recordIDForManagedObjectID(_: NSManagedObjectID): CKRecord.ID;
  recordIDsForManagedObjectIDs(_: NSArray<NSManagedObjectID>): NSDictionary<NSManagedObjectID, CKRecord.ID>;
  recordsForManagedObjectIDs(_: NSArray<NSManagedObjectID>): NSDictionary<NSManagedObjectID, CKRecord>;
}

declare class NSPersistentCloudKitContainerOptions extends NSObject {
  readonly containerIdentifier: string;
  static createWithContainerIdentifier(containerIdentifier: string): this;
}

declare class NSPersistentContainer extends NSObject {
  static defaultDirectoryURL(): URL;
  static persistentContainerWithName(_: string): NSPersistentContainer;
  static persistentContainerWithNameManagedObjectModel(_: string, managedObjectModel: NSManagedObjectModel): NSPersistentContainer;
  readonly managedObjectModel: NSManagedObjectModel;
  readonly name: string;
  readonly persistentStoreCoordinator: NSPersistentStoreCoordinator;
  persistentStoreDescriptions: NSArray<NSPersistentStoreDescription>;
  setPersistentStoreDescriptions(_: NSArray<NSPersistentStoreDescription>)
  readonly viewContext: NSManagedObjectContext;
  static createWithName(name: string): this;
  static createWithNameManagedObjectModel(name: string, managedObjectModel: NSManagedObjectModel): this;
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
  readonly updatedProperties: Set<NSPropertyDescription>;
  static entityDescription(): NSEntityDescription;
  static fetchRequest(): NSFetchRequest<any>;
  copyWithZone(with_?: any): any;
}

declare class NSPersistentHistoryChangeRequest extends NSPersistentStoreRequest {
  static deleteHistoryBeforeDate(_: Date): NSPersistentHistoryChangeRequest;
  static deleteHistoryBeforeToken(_?: NSPersistentHistoryToken): NSPersistentHistoryChangeRequest;
  static deleteHistoryBeforeTransaction(_?: NSPersistentHistoryTransaction): NSPersistentHistoryChangeRequest;
  static fetchHistoryAfterDate(_: Date): NSPersistentHistoryChangeRequest;
  static fetchHistoryAfterToken(_?: NSPersistentHistoryToken): NSPersistentHistoryChangeRequest;
  static fetchHistoryAfterTransaction(_?: NSPersistentHistoryTransaction): NSPersistentHistoryChangeRequest;
  static fetchHistoryWithFetchRequest(_: NSFetchRequest<any>): NSPersistentHistoryChangeRequest;
  fetchRequest: NSFetchRequest<any>;
  setFetchRequest(_: NSFetchRequest<any>)
  resultType: NSPersistentHistoryResultType;
  setResultType(_: NSPersistentHistoryResultType)
  readonly token: NSPersistentHistoryToken;
}

declare class NSPersistentHistoryResult extends NSPersistentStoreResult {
  readonly result: any;
  readonly resultType: NSPersistentHistoryResultType;
}

declare class NSPersistentHistoryToken extends NSObject implements NSCopying, NSSecureCoding {
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
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
  copyWithZone(with_?: any): any;
  objectIDNotification(): Notification;
}

declare class NSPersistentStore extends NSObject {
  static metadataForPersistentStoreWithURLError(error: URL): NSDictionary<string, any>;
  static migrationManagerClass(): typeof NSObject;
  static setMetadataForPersistentStoreWithURLError(_?: NSDictionary<string, any>, forPersistentStoreAt: URL): boolean;
  URL: URL;
  setURL(_: URL)
  readonly configurationName: string;
  readonly coreSpotlightExporter: NSCoreDataCoreSpotlightDelegate;
  identifier: string;
  setIdentifier(_: string)
  metadata: NSDictionary<string, any>;
  setMetadata(_: NSDictionary<string, any>)
  readonly options: NSDictionary<any, any>;
  readonly persistentStoreCoordinator: NSPersistentStoreCoordinator;
  isReadOnly: boolean;
  setReadOnly(_: boolean)
  readonly type: string;
  didAddToPersistentStoreCoordinator(_: NSPersistentStoreCoordinator): void;
  static createWithPersistentStoreCoordinatorConfigurationNameUrlOptions(persistentStoreCoordinator?: NSPersistentStoreCoordinator, configurationName?: string, URL: URL, options?: NSDictionary<any, any>): this;
  loadMetadata(): boolean;
  willRemoveFromPersistentStoreCoordinator(_?: NSPersistentStoreCoordinator): void;
}

declare class NSPersistentStoreAsynchronousResult extends NSPersistentStoreResult {
  readonly managedObjectContext: NSManagedObjectContext;
  readonly operationError: NSError;
  readonly progress: Progress;
  cancel(): void;
}

declare var NSPersistentStoreConnectionPoolMaxSizeKey: string;

declare class NSPersistentStoreCoordinator extends NSObject implements NSLocking {
  static elementsDerivedFromExternalRecordURL(fromExternalRecordAt: URL): NSDictionary<any, any>;
  static metadataForPersistentStoreOfTypeUrlOptionsError(ofType: string, at: URL, options?: NSDictionary<any, any>): NSDictionary<string, any>;
  static registerStoreClassForStoreType(_?: typeof NSObject, forStoreType: string): void;
  static setMetadataForPersistentStoreOfTypeUrlOptionsError(_?: NSDictionary<string, any>, forPersistentStoreOfType: string, at: URL, options?: NSDictionary<any, any>): boolean;
  readonly managedObjectModel: NSManagedObjectModel;
  name: string;
  setName(_: string)
  readonly persistentStores: NSArray<NSPersistentStore>;
  static registeredStoreTypes(): NSDictionary<string, NSValue>;
  URLForPersistentStore(_: NSPersistentStore): URL;
  addPersistentStoreWithDescriptionCompletionHandler(_: NSPersistentStoreDescription, completionHandler?: (p1: NSPersistentStoreDescription, p2: NSError) => void): void;
  addPersistentStoreWithTypeConfigurationUrlOptionsError(ofType: string, configurationName?: string, at?: URL, options?: NSDictionary<any, any>): NSPersistentStore;
  currentPersistentHistoryTokenFromStores(_?: NSArray<any>): NSPersistentHistoryToken;
  destroyPersistentStoreAtURLWithTypeOptionsError(at: URL, ofType: string, options?: NSDictionary<any, any>): boolean;
  executeRequestWithContextError(withContext: NSPersistentStoreRequest, error: NSManagedObjectContext): any;
  importStoreWithIdentifierFromExternalRecordsDirectoryToURLOptionsWithTypeError(withIdentifier?: string, fromExternalRecordsDirectoryAt: URL, to: URL, options?: NSDictionary<any, any>, ofType: string): NSPersistentStore;
  static createWithManagedObjectModel(managedObjectModel: NSManagedObjectModel): this;
  lock(): void;
  managedObjectIDForURIRepresentation(_: URL): NSManagedObjectID;
  metadataForPersistentStore(_: NSPersistentStore): NSDictionary<string, any>;
  migratePersistentStoreToURLOptionsWithTypeError(toURL: NSPersistentStore, options: URL, withType?: NSDictionary<any, any>, error: string): NSPersistentStore;
  performBlock(_: () => void): void;
  performBlockAndWait(_: () => void): void;
  persistentStoreForURL(_: URL): NSPersistentStore;
  removePersistentStoreError(_: NSPersistentStore): boolean;
  replacePersistentStoreAtURLDestinationOptionsWithPersistentStoreFromURLSourceOptionsStoreTypeError(at: URL, destinationOptions?: NSDictionary<any, any>, withPersistentStoreFrom: URL, sourceOptions?: NSDictionary<any, any>, ofType: string): boolean;
  setMetadataForPersistentStore(_?: NSDictionary<string, any>, forPersistentStore: NSPersistentStore): void;
  setURLForPersistentStore(_: URL, forPersistentStore: NSPersistentStore): boolean;
  unlock(): void;
}


declare const NSPersistentStoreCoordinatorLockingError: number;
declare var NSPersistentStoreCoordinatorStoresDidChangeNotification: string;

declare var NSPersistentStoreCoordinatorStoresWillChangeNotification: string;

declare var NSPersistentStoreCoordinatorWillRemoveStoreNotification: string;

declare class NSPersistentStoreDescription extends NSObject implements NSCopying {
  static persistentStoreDescriptionWithURL(_: URL): NSPersistentStoreDescription;
  URL: URL;
  setURL(_: URL)
  cloudKitContainerOptions: NSPersistentCloudKitContainerOptions;
  setCloudKitContainerOptions(_: NSPersistentCloudKitContainerOptions)
  configuration: string;
  setConfiguration(_: string)
  readonly options: NSDictionary<string, NSObject>;
  isReadOnly: boolean;
  setReadOnly(_: boolean)
  shouldAddStoreAsynchronously: boolean;
  setShouldAddStoreAsynchronously(_: boolean)
  shouldInferMappingModelAutomatically: boolean;
  setShouldInferMappingModelAutomatically(_: boolean)
  shouldMigrateStoreAutomatically: boolean;
  setShouldMigrateStoreAutomatically(_: boolean)
  readonly sqlitePragmas: NSDictionary<string, NSObject>;
  timeout: number;
  setTimeout(_: number)
  type: string;
  setType(_: string)
  copyWithZone(with_?: any): any;
  static createWithUrl(URL: URL): this;
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
  affectedStores: NSArray<NSPersistentStore>;
  setAffectedStores(_: NSArray<NSPersistentStore>)
  readonly requestType: NSPersistentStoreRequestType;
  copyWithZone(with_?: any): any;
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
  isIndexedBySpotlight: boolean;
  setIndexedBySpotlight(_: boolean)
  name: string;
  setName(_: string)
  isOptional: boolean;
  setOptional(_: boolean)
  renamingIdentifier: string;
  setRenamingIdentifier(_: string)
  isTransient: boolean;
  setTransient(_: boolean)
  userInfo: NSDictionary<any, any>;
  setUserInfo(_: NSDictionary<any, any>)
  readonly validationPredicates: NSArray<NSPredicate>;
  readonly validationWarnings: NSArray<any>;
  readonly versionHash: Data;
  versionHashModifier: string;
  setVersionHashModifier(_: string)
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
  setValidationPredicatesWithValidationWarnings(_?: NSArray<NSPredicate>, withValidationWarnings?: NSArray<string>): void;
}

declare class NSPropertyMapping extends NSObject {
  name: string;
  setName(_: string)
  userInfo: NSDictionary<any, any>;
  setUserInfo(_: NSDictionary<any, any>)
  valueExpression: NSExpression;
  setValueExpression(_: NSExpression)
}

declare class NSQueryGenerationToken extends NSObject implements NSCopying, NSSecureCoding {
  static currentQueryGenerationToken(): NSQueryGenerationToken;
  static supportsSecureCoding(): boolean; // inherited from NSSecureCoding
  copyWithZone(with_?: any): any;
  encodeWithCoder(with_: NSCoder): void;
  static createWithCoder(coder: NSCoder): this;
}

declare var NSReadOnlyPersistentStoreOption: string;

declare var NSRefreshedObjectsKey: string;

declare class NSRelationshipDescription extends NSPropertyDescription {
  deleteRule: NSDeleteRule;
  setDeleteRule(_: NSDeleteRule)
  destinationEntity: NSEntityDescription;
  setDestinationEntity(_: NSEntityDescription)
  inverseRelationship: NSRelationshipDescription;
  setInverseRelationship(_: NSRelationshipDescription)
  maxCount: number;
  setMaxCount(_: number)
  minCount: number;
  setMinCount(_: number)
  isOrdered: boolean;
  setOrdered(_: boolean)
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
  readonly deletedObjects: Set<NSManagedObject>;
  readonly insertedObjects: Set<NSManagedObject>;
  readonly lockedObjects: Set<NSManagedObject>;
  readonly updatedObjects: Set<NSManagedObject>;
  static createWithInsertedObjectsUpdatedObjectsDeletedObjectsLockedObjects(insertedObjects?: Set<NSManagedObject>, updatedObjects?: Set<NSManagedObject>, deletedObjects?: Set<NSManagedObject>, lockedObjects?: Set<NSManagedObject>): this;
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

enum NSBatchDeleteRequestResultType {
    ResultTypeStatusOnly = 0,
    ResultTypeObjectIDs = 1,
    ResultTypeCount = 2
}

enum NSBatchInsertRequestResultType {
    StatusOnly = 0,
    ObjectIDs = 1,
    Count = 2
}

enum NSBatchUpdateRequestResultType {
    StatusOnlyResultType = 0,
    UpdatedObjectIDsResultType = 1,
    UpdatedObjectsCountResultType = 2
}

enum NSDeleteRule {
    NoActionDeleteRule = 0,
    NullifyDeleteRule = 1,
    CascadeDeleteRule = 2,
    DenyDeleteRule = 3
}

enum NSEntityMappingType {
    UndefinedEntityMappingType = 0,
    CustomEntityMappingType = 1,
    AddEntityMappingType = 2,
    RemoveEntityMappingType = 3,
    CopyEntityMappingType = 4,
    TransformEntityMappingType = 5
}

enum NSFetchIndexElementType {
    Binary = 0,
    RTree = 1
}

enum NSFetchRequestResultType {
    ManagedObjectResultType = 0,
    ManagedObjectIDResultType = 1,
    DictionaryResultType = 2,
    CountResultType = 4
}

enum NSFetchedResultsChangeType {
    Insert = 1,
    Delete = 2,
    Move = 3,
    Update = 4
}

enum NSManagedObjectContextConcurrencyType {
    ConfinementConcurrencyType = 0,
    PrivateQueueConcurrencyType = 1,
    MainQueueConcurrencyType = 2
}

enum NSMergePolicyType {
    ErrorMergePolicyType = 0,
    MergeByPropertyStoreTrumpMergePolicyType = 1,
    MergeByPropertyObjectTrumpMergePolicyType = 2,
    OverwriteMergePolicyType = 3,
    RollbackMergePolicyType = 4
}

enum NSPersistentCloudKitContainerSchemaInitializationOptions {
    None = 0,
    DryRun = 2,
    PrintSchema = 4
}

enum NSPersistentHistoryChangeType {
    Insert = 0,
    Update = 1,
    Delete = 2
}

enum NSPersistentHistoryResultType {
    StatusOnly = 0,
    ObjectIDs = 1,
    Count = 2,
    TransactionsOnly = 3,
    ChangesOnly = 4,
    TransactionsAndChanges = 5
}

enum NSPersistentStoreRequestType {
    FetchRequestType = 1,
    SaveRequestType = 2,
    BatchInsertRequestType = 5,
    BatchUpdateRequestType = 6,
    BatchDeleteRequestType = 7
}

enum NSSnapshotEventType {
    UndoInsertion = 2,
    UndoDeletion = 4,
    UndoUpdate = 8,
    Rollback = 16,
    Refresh = 32,
    MergePolicy = 64
}

