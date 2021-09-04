
declare class GKARC4RandomSource extends GKRandomSource {

	setSeed(_: NSData)

	seed: NSData;

	static create(seed: NSData);

	dropValuesWithCount(_: number): void;
}

declare class GKAgent extends GKComponent implements NSSecureCoding {

	setBehavior(_: GKBehavior)

	behavior: GKBehavior;

	setDelegate(_: GKAgentDelegate)

	delegate: GKAgentDelegate;

	setMass(_: number)

	mass: number;

	setMaxAcceleration(_: number)

	maxAcceleration: number;

	setMaxSpeed(_: number)

	maxSpeed: number;

	setRadius(_: number)

	radius: number;

	setSpeed(_: number)

	speed: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class GKAgent2D extends GKAgent implements NSSecureCoding {

	setPosition(_: number)

	position: number;

	setRotation(_: number)

	rotation: number;

	readonly velocity: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	encodeWithCoder(_: NSCoder): void;
}

declare class GKAgent3D extends GKAgent {

	setPosition(_: number)

	position: number;

	setRightHanded(_: boolean)

	rightHanded: boolean;

	setRotation(_: simd_float3x3)

	rotation: simd_float3x3;

	readonly velocity: number;
}

interface GKAgentDelegate extends NSObjectProtocol {

	agentDidUpdate?(_: GKAgent): void;

	agentWillUpdate?(_: GKAgent): void;
}
declare var GKAgentDelegate: {

	prototype: GKAgentDelegate;
};

declare class GKBehavior extends NSObject implements NSCopying, NSFastEnumeration {

	static behaviorWithGoalWeight(_: GKGoal, weight: number): GKBehavior;

	static behaviorWithGoals(_: NSArray<GKGoal>): GKBehavior;

	static behaviorWithGoalsAndWeights(_: NSArray<GKGoal>, andWeights: NSArray<number>): GKBehavior;

	static behaviorWithWeightedGoals(_: NSDictionary<GKGoal, number>): GKBehavior;

	readonly goalCount: number;

	copyWithZone(_?: any): any;

	countByEnumeratingWithStateObjectsCount(_: NSFastEnumerationState, objects?: any, count: number): number;

	objectAtIndexedSubscript(_: number): GKGoal;

	objectForKeyedSubscript(_: GKGoal): number;

	removeAllGoals(): void;

	removeGoal(_: GKGoal): void;

	setObjectForKeyedSubscript(_: number, forKeyedSubscript: GKGoal): void;

	setWeightForGoal(_: number, forGoal: GKGoal): void;

	weightForGoal(_: GKGoal): number;
}

declare class GKBillowNoiseSource extends GKCoherentNoiseSource {

	static billowNoiseSourceWithFrequencyOctaveCountPersistenceLacunaritySeed(_: number, octaveCount: number, persistence: number, lacunarity: number, seed: number): GKBillowNoiseSource;

	setPersistence(_: number)

	persistence: number;

	static create(frequency: number, octaveCount: number, persistence: number, lacunarity: number, seed: number);
}

interface GKBox {
	boxMin: number;
	boxMax: number;
}
declare var GKBox: GKBox;

declare class GKCheckerboardNoiseSource extends GKNoiseSource {

	static checkerboardNoiseWithSquareSize(_: number): GKCheckerboardNoiseSource;

	setSquareSize(_: number)

	squareSize: number;

	static create(squareSize: number);
}

declare class GKCircleObstacle extends GKObstacle {

	static obstacleWithRadius(_: number): GKCircleObstacle;

	setPosition(_: number)

	position: number;

	setRadius(_: number)

	radius: number;

	static create(radius: number);
}

declare class GKCoherentNoiseSource extends GKNoiseSource {

	setFrequency(_: number)

	frequency: number;

	setLacunarity(_: number)

	lacunarity: number;

	setOctaveCount(_: number)

	octaveCount: number;

	setSeed(_: number)

	seed: number;
}

declare class GKComponent extends NSObject implements NSCopying, NSSecureCoding {

	readonly entity: GKEntity;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	didAddToEntity(): void;

	encodeWithCoder(_: NSCoder): void;

	updateWithDeltaTime(deltaTime: number): void;

	willRemoveFromEntity(): void;
}

declare class GKComponentSystem<ComponentType> extends NSObject implements NSFastEnumeration {

	readonly componentClass: typeof NSObject;

	readonly components: NSArray<ComponentType>;

	static create(componentClass: typeof NSObject);

	addComponent(_: ComponentType): void;

	addComponentWithEntity(foundIn: GKEntity): void;

	classForGenericArgumentAtIndex(_: number): typeof NSObject;

	countByEnumeratingWithStateObjectsCount(_: NSFastEnumerationState, objects?: any, count: number): number;

	objectAtIndexedSubscript(_: number): ComponentType;

	removeComponent(_: ComponentType): void;

	removeComponentWithEntity(foundIn: GKEntity): void;

	updateWithDeltaTime(deltaTime: number): void;
}

declare class GKCompositeBehavior extends GKBehavior {

	static behaviorWithBehaviors(_: NSArray<GKBehavior>): GKCompositeBehavior;

	static behaviorWithBehaviorsAndWeights(behaviors: NSArray<GKBehavior>, weights: NSArray<number>): GKCompositeBehavior;

	static behaviorWithGoalWeight(_: GKGoal, weight: number): GKCompositeBehavior; // inherited from GKBehavior

	static behaviorWithGoals(_: NSArray<GKGoal>): GKCompositeBehavior; // inherited from GKBehavior

	static behaviorWithGoalsAndWeights(_: NSArray<GKGoal>, andWeights: NSArray<number>): GKCompositeBehavior; // inherited from GKBehavior

	static behaviorWithWeightedGoals(_: NSDictionary<GKGoal, number>): GKCompositeBehavior; // inherited from GKBehavior

	readonly behaviorCount: number;

	objectAtIndexedSubscript(_: number): GKBehavior;

	objectForKeyedSubscript(_: GKBehavior): number;

	removeAllBehaviors(): void;

	removeBehavior(_: GKBehavior): void;

	setObjectForKeyedSubscript(_: number, forKeyedSubscript: GKBehavior): void;

	setWeightForBehavior(_: number, forBehavior: GKBehavior): void;

	weightForBehavior(_: GKBehavior): number;
}

declare class GKConstantNoiseSource extends GKNoiseSource {

	static constantNoiseWithValue(_: number): GKConstantNoiseSource;

	setValue(_: number)

	value: number;

	static create(value: number);
}

declare class GKCylindersNoiseSource extends GKNoiseSource {

	static cylindersNoiseWithFrequency(_: number): GKCylindersNoiseSource;

	setFrequency(_: number)

	frequency: number;

	static create(frequency: number);
}

declare class GKDecisionNode extends NSObject {

	createBranchWithPredicateAttribute(predicate: NSPredicate, attribute: NSObjectProtocol): this;

	createBranchWithValueAttribute(value: number, attribute: NSObjectProtocol): this;

	createBranchWithWeightAttribute(weight: number, attribute: NSObjectProtocol): this;
}

declare class GKDecisionTree extends NSObject implements NSSecureCoding {

	setRandomSource(_: GKRandomSource)

	randomSource: GKRandomSource;

	readonly rootNode: GKDecisionNode;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(attribute: NSObjectProtocol);

	static create(coder: NSCoder); // inherited from NSCoding

	static create(examples: NSArray<NSArray<NSObjectProtocol>> | NSArray<NSObjectProtocol>[], actions: NSArray<NSObjectProtocol> | NSObjectProtocol[], attributes: NSArray<NSObjectProtocol> | NSObjectProtocol[]);

	static create(URL: NSURL, error: NSError);

	encodeWithCoder(_: NSCoder): void;

	exportToURLError(_: NSURL, error?: NSError): boolean;

	findActionForAnswers(_: NSDictionary<NSObjectProtocol, NSObjectProtocol>): NSObjectProtocol;
}

declare class GKEntity extends NSObject implements NSCopying, NSSecureCoding {

	static entity(): GKEntity;

	readonly components: NSArray<GKComponent>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	addComponent(_: GKComponent): void;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	removeComponentForClass(_: typeof NSObject): void;

	updateWithDeltaTime(deltaTime: number): void;
}

interface GKGameModel extends NSCopying, NSObjectProtocol {

	activePlayer: GKGameModelPlayer;

	players: NSArray<GKGameModelPlayer>;

	applyGameModelUpdate(_: GKGameModelUpdate): void;

	gameModelUpdatesForPlayer(_: GKGameModelPlayer): NSArray<GKGameModelUpdate>;

	isLossForPlayer?(_: GKGameModelPlayer): boolean;

	isWinForPlayer?(_: GKGameModelPlayer): boolean;

	scoreForPlayer?(_: GKGameModelPlayer): number;

	setGameModel(_: GKGameModel): void;

	unapplyGameModelUpdate?(_: GKGameModelUpdate): void;
}
declare var GKGameModel: {

	prototype: GKGameModel;
};

declare var GKGameModelMaxScore: number;

declare var GKGameModelMinScore: number;

interface GKGameModelPlayer extends NSObjectProtocol {

	playerId: number;
}
declare var GKGameModelPlayer: {

	prototype: GKGameModelPlayer;
};

interface GKGameModelUpdate extends NSObjectProtocol {

	setValue(_: number)

	value: number;
}
declare var GKGameModelUpdate: {

	prototype: GKGameModelUpdate;
};

declare class GKGaussianDistribution extends GKRandomDistribution {

	static d20(): GKGaussianDistribution; // inherited from GKRandomDistribution

	static d6(): GKGaussianDistribution; // inherited from GKRandomDistribution

	static distributionForDieWithSideCount(_: number): GKGaussianDistribution; // inherited from GKRandomDistribution

	static distributionWithLowestValueHighestValue(_: number, highestValue: number): GKGaussianDistribution; // inherited from GKRandomDistribution

	readonly deviation: number;

	readonly mean: number;

	static create(randomSource: GKRandom, mean: number, deviation: number);
}

declare class GKGoal extends NSObject implements NSCopying {

	static goalToAlignWithAgentsMaxDistanceMaxAngle(_: NSArray<GKAgent>, maxDistance: number, maxAngle: number): GKGoal;

	static goalToAvoidAgentsMaxPredictionTime(_: NSArray<GKAgent>, maxPredictionTime: number): GKGoal;

	static goalToAvoidObstaclesMaxPredictionTime(_: NSArray<GKObstacle>, maxPredictionTime: number): GKGoal;

	static goalToCohereWithAgentsMaxDistanceMaxAngle(_: NSArray<GKAgent>, maxDistance: number, maxAngle: number): GKGoal;

	static goalToFleeAgent(toFlee: GKAgent): GKGoal;

	static goalToFollowPathMaxPredictionTimeForward(_: GKPath, maxPredictionTime: number, forward: boolean): GKGoal;

	static goalToInterceptAgentMaxPredictionTime(toIntercept: GKAgent, maxPredictionTime: number): GKGoal;

	static goalToReachTargetSpeed(_: number): GKGoal;

	static goalToSeekAgent(toSeek: GKAgent): GKGoal;

	static goalToSeparateFromAgentsMaxDistanceMaxAngle(_: NSArray<GKAgent>, maxDistance: number, maxAngle: number): GKGoal;

	static goalToStayOnPathMaxPredictionTime(_: GKPath, maxPredictionTime: number): GKGoal;

	static goalToWander(_: number): GKGoal;

	copyWithZone(_?: any): any;
}

declare class GKGraph extends NSObject implements NSCopying, NSSecureCoding {

	static graphWithNodes(_: NSArray<GKGraphNode>): GKGraph;

	readonly nodes: NSArray<GKGraphNode>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(nodes: NSArray<GKGraphNode> | GKGraphNode[]);

	addNodes(_: NSArray<GKGraphNode>): void;

	connectNodeToLowestCostNodeBidirectional(node: GKGraphNode, bidirectional: boolean): void;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	findPathFromNodeToNode(_: GKGraphNode, toNode: GKGraphNode): NSArray<GKGraphNode>;

	removeNodes(_: NSArray<GKGraphNode>): void;
}

declare class GKGraphNode extends NSObject implements NSSecureCoding {

	readonly connectedNodes: NSArray<GKGraphNode>;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	addConnectionsToNodesBidirectional(_: NSArray<GKGraphNode>, bidirectional: boolean): void;

	costToNode(_: GKGraphNode): number;

	encodeWithCoder(_: NSCoder): void;

	estimatedCostToNode(_: GKGraphNode): number;

	findPathFromNode(_: GKGraphNode): NSArray<GKGraphNode>;

	findPathToNode(_: GKGraphNode): NSArray<GKGraphNode>;

	removeConnectionsToNodesBidirectional(_: NSArray<GKGraphNode>, bidirectional: boolean): void;
}

declare class GKGraphNode2D extends GKGraphNode {

	static nodeWithPoint(_: number): GKGraphNode2D;

	setPosition(_: number)

	position: number;

	static create(point: number);
}

declare class GKGraphNode3D extends GKGraphNode {

	static nodeWithPoint(_: number): GKGraphNode3D;

	setPosition(_: number)

	position: number;

	static create(point: number);
}

declare class GKGridGraph<NodeType> extends GKGraph {

	static graphFromGridStartingAtWidthHeightDiagonalsAllowed<NodeType>(_: number, width: number, height: number, diagonalsAllowed: boolean): GKGridGraph<NodeType>;

	static graphFromGridStartingAtWidthHeightDiagonalsAllowedNodeClass<NodeType>(_: number, width: number, height: number, diagonalsAllowed: boolean, nodeClass: typeof NSObject): GKGridGraph<NodeType>;

	static graphWithNodes<NodeType>(_: NSArray<GKGraphNode>): GKGridGraph<NodeType>; // inherited from GKGraph

	readonly diagonalsAllowed: boolean;

	readonly gridHeight: number;

	readonly gridOrigin: number;

	readonly gridWidth: number;

	static create(fromGridStartingAt: number, width: number, height: number, diagonalsAllowed: boolean);

	static create(fromGridStartingAt: number, width: number, height: number, diagonalsAllowed: boolean, nodeClass: typeof NSObject);

	classForGenericArgumentAtIndex(_: number): typeof NSObject;

	connectNodeToAdjacentNodes(node: GKGridGraphNode): void;

	nodeAtGridPosition(atGridPosition: number): NodeType;
}

declare class GKGridGraphNode extends GKGraphNode {

	static nodeWithGridPosition(_: number): GKGridGraphNode;

	readonly gridPosition: number;

	static create(gridPosition: number);
}

declare class GKLinearCongruentialRandomSource extends GKRandomSource {

	setSeed(_: number)

	seed: number;

	static create(seed: number);
}

declare class GKMersenneTwisterRandomSource extends GKRandomSource {

	setSeed(_: number)

	seed: number;

	static create(seed: number);
}

declare class GKMeshGraph<NodeType> extends GKGraph {

	static graphWithBufferRadiusMinCoordinateMaxCoordinate<NodeType>(_: number, minCoordinate: number, maxCoordinate: number): GKMeshGraph<NodeType>;

	static graphWithBufferRadiusMinCoordinateMaxCoordinateNodeClass<NodeType>(_: number, minCoordinate: number, maxCoordinate: number, nodeClass: typeof NSObject): GKMeshGraph<NodeType>;

	static graphWithNodes<NodeType>(_: NSArray<GKGraphNode>): GKMeshGraph<NodeType>; // inherited from GKGraph

	readonly bufferRadius: number;

	readonly obstacles: NSArray<GKPolygonObstacle>;

	readonly triangleCount: number;

	setTriangulationMode(_: GKMeshGraphTriangulationMode)

	triangulationMode: GKMeshGraphTriangulationMode;

	static create(bufferRadius: number, minCoordinate: number, maxCoordinate: number);

	static create(bufferRadius: number, minCoordinate: number, maxCoordinate: number, nodeClass: typeof NSObject);

	addObstacles(_: NSArray<GKPolygonObstacle>): void;

	classForGenericArgumentAtIndex(_: number): typeof NSObject;

	connectNodeUsingObstacles(node: NodeType): void;

	removeObstacles(_: NSArray<GKPolygonObstacle>): void;

	triangleAtIndex(_: number): GKTriangle;

	triangulate(): void;
}

enum GKMeshGraphTriangulationMode {

	Vertices = 1,

	Centers = 2,

	EdgeMidpoints = 4
}


declare class GKMinmaxStrategist extends NSObject implements GKStrategist {

	setMaxLookAheadDepth(_: number)

	maxLookAheadDepth: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	setGameModel(_: GKGameModel)

	gameModel: GKGameModel; // inherited from GKStrategist

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	setRandomSource(_: GKRandom)

	randomSource: GKRandom; // inherited from GKStrategist

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	bestMoveForActivePlayer(): GKGameModelUpdate;

	bestMoveForPlayer(_: GKGameModelPlayer): GKGameModelUpdate;

	conformsToProtocol(_: any /* Protocol */): boolean;

	isEqual(_: any): boolean;

	isKindOfClass(_: typeof NSObject): boolean;

	isMemberOfClass(_: typeof NSObject): boolean;

	performSelector(_: string): any;

	performSelectorWithObject(_: string, withObject: any): any;

	performSelectorWithObjectWithObject(_: string, withObject: any, withObject: any): any;

	randomMoveForPlayerFromNumberOfBestMoves(_: GKGameModelPlayer, fromNumberOfBestMoves: number): GKGameModelUpdate;

	respondsToSelector(_: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class GKMonteCarloStrategist extends NSObject implements GKStrategist {

	setBudget(_: number)

	budget: number;

	setExplorationParameter(_: number)

	explorationParameter: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	setGameModel(_: GKGameModel)

	gameModel: GKGameModel; // inherited from GKStrategist

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	setRandomSource(_: GKRandom)

	randomSource: GKRandom; // inherited from GKStrategist

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	bestMoveForActivePlayer(): GKGameModelUpdate;

	conformsToProtocol(_: any /* Protocol */): boolean;

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

declare class GKNSPredicateRule extends GKRule {

	static ruleWithBlockPredicateAction(evaluator: (p1: GKRuleSystem) => boolean, action: (p1: GKRuleSystem) => void): GKNSPredicateRule; // inherited from GKRule

	static ruleWithPredicateAssertingFactGrade(_: NSPredicate, assertingFact: NSObjectProtocol, grade: number): GKNSPredicateRule; // inherited from GKRule

	static ruleWithPredicateRetractingFactGrade(_: NSPredicate, retractingFact: NSObjectProtocol, grade: number): GKNSPredicateRule; // inherited from GKRule

	readonly predicate: NSPredicate;

	static create(predicate: NSPredicate);
}

declare class GKNoise extends NSObject {

	static noiseWithComponentNoisesSelectionNoise(_: NSArray<GKNoise>, selectionNoise: GKNoise): GKNoise;

	static noiseWithComponentNoisesSelectionNoiseComponentBoundariesBoundaryBlendDistances(_: NSArray<GKNoise>, selectionNoise: GKNoise, componentBoundaries: NSArray<number>, boundaryBlendDistances: NSArray<number>): GKNoise;

	static noiseWithNoiseSource(_: GKNoiseSource): GKNoise;

	static noiseWithNoiseSourceGradientColors(_: GKNoiseSource, gradientColors: NSDictionary<number, NSColor>): GKNoise;

	setGradientColors(_: NSDictionary<number, NSColor>)

	gradientColors: NSDictionary<number, NSColor>;

	static create(noiseSource: GKNoiseSource);

	static create(noiseSource: GKNoiseSource, gradientColors: NSDictionary<number, NSColor>);

	addWithNoise(_: GKNoise): void;

	applyAbsoluteValue(): void;

	applyTurbulenceWithFrequency(_: number): void;

	clampWithLowerBoundUpperBound(lowerBound: number, upperBound: number): void;

	displaceXWithNoiseYWithNoiseZWithNoise(x: GKNoise, y: GKNoise, z: GKNoise): void;

	invert(): void;

	maximumWithNoise(_: GKNoise): void;

	minimumWithNoise(_: GKNoise): void;

	moveBy(_: number): void;

	multiplyWithNoise(_: GKNoise): void;

	raiseToPowerWithNoise(_: GKNoise): void;

	remapValuesToCurveWithControlPoints(toCurveWithControlPoints: NSDictionary<number, number>): void;

	remapValuesToTerracesWithPeaksTerracesInverted(toTerracesWithPeaks: NSArray<number>, terracesInverted: boolean): void;

	rotateBy(_: number): void;

	valueAtPosition(_: number): number;
}

declare class GKNoiseMap extends NSObject {

	static noiseMapWithNoise(_: GKNoise): GKNoiseMap;

	static noiseMapWithNoiseSizeOriginSampleCountSeamless(_: GKNoise, size: number, origin: number, sampleCount: number, seamless: boolean): GKNoiseMap;

	readonly origin: number;

	readonly sampleCount: number;

	readonly isSeamless: boolean;

	readonly size: number;

	static create(noise: GKNoise);

	static create(noise: GKNoise, size: number, origin: number, sampleCount: number, seamless: boolean);

	interpolatedValueAtPosition(at: number): number;

	setValueAtPosition(_: number, at: number): void;

	valueAtPosition(at: number): number;
}

declare class GKNoiseSource extends NSObject {
}

declare class GKObstacle extends NSObject {
}

declare class GKObstacleGraph<NodeType> extends GKGraph {

	static graphWithNodes<NodeType>(_: NSArray<GKGraphNode>): GKObstacleGraph<NodeType>; // inherited from GKGraph

	static graphWithObstaclesBufferRadius<NodeType>(_: NSArray<GKPolygonObstacle>, bufferRadius: number): GKObstacleGraph<NodeType>;

	static graphWithObstaclesBufferRadiusNodeClass<NodeType>(_: NSArray<GKPolygonObstacle>, bufferRadius: number, nodeClass: typeof NSObject): GKObstacleGraph<NodeType>;

	readonly bufferRadius: number;

	readonly obstacles: NSArray<GKPolygonObstacle>;

	static create(obstacles: NSArray<GKPolygonObstacle> | GKPolygonObstacle[], bufferRadius: number);

	static create(obstacles: NSArray<GKPolygonObstacle> | GKPolygonObstacle[], bufferRadius: number, nodeClass: typeof NSObject);

	addObstacles(_: NSArray<GKPolygonObstacle>): void;

	classForGenericArgumentAtIndex(_: number): typeof NSObject;

	connectNodeUsingObstacles(node: NodeType): void;

	connectNodeUsingObstaclesIgnoringBufferRadiusOfObstacles(node: NodeType, ignoringBufferRadiusOf: NSArray<GKPolygonObstacle>): void;

	connectNodeUsingObstaclesIgnoringObstacles(node: NodeType, ignoring: NSArray<GKPolygonObstacle>): void;

	isConnectionLockedFromNodeToNode(_: NodeType, toNode: NodeType): boolean;

	lockConnectionFromNodeToNode(_: NodeType, toNode: NodeType): void;

	nodesForObstacle(_: GKPolygonObstacle): NSArray<NodeType>;

	removeAllObstacles(): void;

	removeObstacles(_: NSArray<GKPolygonObstacle>): void;

	unlockConnectionFromNodeToNode(_: NodeType, toNode: NodeType): void;
}

declare class GKOctree<ElementType> extends NSObject {

	static octreeWithBoundingBoxMinimumCellSize<ElementType>(_: GKBox, minimumCellSize: number): GKOctree<ElementType>;

	static create(boundingBox: GKBox, minimumCellSize: number);

	addElementWithBox(_: ElementType, in_: GKBox): GKOctreeNode;

	addElementWithPoint(_: ElementType, at: number): GKOctreeNode;

	elementsAtPoint(at: number): NSArray<ElementType>;

	elementsInBox(_: GKBox): NSArray<ElementType>;

	removeElement(_: ElementType): boolean;

	removeElementWithNode(_: ElementType, using: GKOctreeNode): boolean;
}

declare class GKOctreeNode extends NSObject {

	readonly box: GKBox;
}

declare class GKPath extends NSObject {

	static pathWithFloat3PointsCountRadiusCyclical(_: number, count: number, radius: number, cyclical: boolean): GKPath;

	static pathWithGraphNodesRadius(_: NSArray<GKGraphNode>, radius: number): GKPath;

	static pathWithPointsCountRadiusCyclical(_: number, count: number, radius: number, cyclical: boolean): GKPath;

	setCyclical(_: boolean)

	isCyclical: boolean;

	readonly numPoints: number;

	setRadius(_: number)

	radius: number;

	static create(float3Points: number, count: number, radius: number, cyclical: boolean);

	static create(graphNodes: NSArray<GKGraphNode> | GKGraphNode[], radius: number);

	static create(points: number, count: number, radius: number, cyclical: boolean);

	float2AtIndex(_: number): number;

	float3AtIndex(_: number): number;
}

declare class GKPerlinNoiseSource extends GKCoherentNoiseSource {

	static perlinNoiseSourceWithFrequencyOctaveCountPersistenceLacunaritySeed(_: number, octaveCount: number, persistence: number, lacunarity: number, seed: number): GKPerlinNoiseSource;

	setPersistence(_: number)

	persistence: number;

	static create(frequency: number, octaveCount: number, persistence: number, lacunarity: number, seed: number);
}

declare class GKPolygonObstacle extends GKObstacle implements NSSecureCoding {

	static obstacleWithPointsCount(_: number, count: number): GKPolygonObstacle;

	readonly vertexCount: number;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(points: number, count: number);

	encodeWithCoder(_: NSCoder): void;

	vertexAtIndex(_: number): number;
}

interface GKQuad {
	quadMin: number;
	quadMax: number;
}
declare var GKQuad: GKQuad;

declare class GKQuadtree<ElementType> extends NSObject {

	static quadtreeWithBoundingQuadMinimumCellSize<ElementType>(_: GKQuad, minimumCellSize: number): GKQuadtree<ElementType>;

	static create(boundingQuad: GKQuad, minimumCellSize: number);

	addElementWithPoint(_: ElementType, at: number): GKQuadtreeNode;

	addElementWithQuad(_: ElementType, in_: GKQuad): GKQuadtreeNode;

	elementsAtPoint(at: number): NSArray<ElementType>;

	elementsInQuad(_: GKQuad): NSArray<ElementType>;

	removeElement(_: ElementType): boolean;

	removeElementWithNode(_: ElementType, using: GKQuadtreeNode): boolean;
}

declare class GKQuadtreeNode extends NSObject {

	readonly quad: GKQuad;
}

declare class GKRTree<ElementType> extends NSObject {

	static treeWithMaxNumberOfChildren<ElementType>(_: number): GKRTree<ElementType>;

	setQueryReserve(_: number)

	queryReserve: number;

	static create(maxNumberOfChildren: number);

	addElementBoundingRectMinBoundingRectMaxSplitStrategy(_: ElementType, boundingRectMin: number, boundingRectMax: number, splitStrategy: GKRTreeSplitStrategy): void;

	elementsInBoundingRectMinRectMax(_: number, rectMax: number): NSArray<ElementType>;

	removeElementBoundingRectMinBoundingRectMax(_: ElementType, boundingRectMin: number, boundingRectMax: number): void;
}

enum GKRTreeSplitStrategy {

	Halve = 0,

	Linear = 1,

	Quadratic = 2,

	ReduceOverlap = 3
}


interface GKRandom {

	nextBool(): boolean;

	nextInt(): number;

	nextIntWithUpperBound(_: number): number;

	nextUniform(): number;
}
declare var GKRandom: {

	prototype: GKRandom;
};

declare class GKRandomDistribution extends NSObject implements GKRandom {

	static d20(): GKRandomDistribution;

	static d6(): GKRandomDistribution;

	static distributionForDieWithSideCount(_: number): GKRandomDistribution;

	static distributionWithLowestValueHighestValue(_: number, highestValue: number): GKRandomDistribution;

	readonly highestValue: number;

	readonly lowestValue: number;

	readonly numberOfPossibleOutcomes: number;

	static create(randomSource: GKRandom, lowestValue: number, highestValue: number);

	nextBool(): boolean;

	nextInt(): number;

	nextIntWithUpperBound(_: number): number;

	nextUniform(): number;
}

declare class GKRandomSource extends NSObject implements GKRandom, NSCopying, NSSecureCoding {

	static sharedRandom(): GKRandomSource;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	arrayByShufflingObjectsInArray(_: NSArray<any>): NSArray<any>;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	nextBool(): boolean;

	nextInt(): number;

	nextIntWithUpperBound(_: number): number;

	nextUniform(): number;
}

declare class GKRidgedNoiseSource extends GKCoherentNoiseSource {

	static ridgedNoiseSourceWithFrequencyOctaveCountLacunaritySeed(_: number, octaveCount: number, lacunarity: number, seed: number): GKRidgedNoiseSource;

	static create(frequency: number, octaveCount: number, lacunarity: number, seed: number);
}

declare class GKRule extends NSObject {

	static ruleWithBlockPredicateAction(evaluator: (p1: GKRuleSystem) => boolean, action: (p1: GKRuleSystem) => void): GKRule;

	static ruleWithPredicateAssertingFactGrade(_: NSPredicate, assertingFact: NSObjectProtocol, grade: number): GKRule;

	static ruleWithPredicateRetractingFactGrade(_: NSPredicate, retractingFact: NSObjectProtocol, grade: number): GKRule;

	setSalience(_: number)

	salience: number;

	evaluatePredicateWithSystem(in_: GKRuleSystem): boolean;

	performActionWithSystem(in_: GKRuleSystem): void;
}

declare class GKRuleSystem extends NSObject {

	readonly agenda: NSArray<GKRule>;

	readonly executed: NSArray<GKRule>;

	readonly facts: NSArray<any>;

	readonly rules: NSArray<GKRule>;

	readonly state: NSMutableDictionary<any, any>;

	addRule(_: GKRule): void;

	addRulesFromArray(_: NSArray<GKRule>): void;

	assertFact(_: NSObjectProtocol): void;

	assertFactGrade(_: NSObjectProtocol, grade: number): void;

	evaluate(): void;

	gradeForFact(_: NSObjectProtocol): number;

	maximumGradeForFacts(_: NSArray<any>): number;

	minimumGradeForFacts(_: NSArray<any>): number;

	removeAllRules(): void;

	reset(): void;

	retractFact(_: NSObjectProtocol): void;

	retractFactGrade(_: NSObjectProtocol, grade: number): void;
}

declare class GKSCNNodeComponent extends GKComponent implements GKAgentDelegate {

	static componentWithNode(_: SCNNode): GKSCNNodeComponent;

	readonly node: SCNNode;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static create(node: SCNNode);

	agentDidUpdate(_: GKAgent): void;

	agentWillUpdate(_: GKAgent): void;

	conformsToProtocol(_: any /* Protocol */): boolean;

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

declare class GKSKNodeComponent extends GKComponent implements GKAgentDelegate {

	static componentWithNode(_: SKNode): GKSKNodeComponent;

	setNode(_: SKNode)

	node: SKNode;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static create(node: SKNode);

	agentDidUpdate(_: GKAgent): void;

	agentWillUpdate(_: GKAgent): void;

	conformsToProtocol(_: any /* Protocol */): boolean;

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

declare class GKScene extends NSObject implements NSCopying, NSSecureCoding {

	static sceneWithFileNamed(_: string): GKScene;

	static sceneWithFileNamedRootNode(_: string, rootNode: GKSceneRootNodeType): GKScene;

	readonly entities: NSArray<GKEntity>;

	readonly graphs: NSDictionary<string, GKGraph>;

	setRootNode(_: GKSceneRootNodeType)

	rootNode: GKSceneRootNodeType;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	addEntity(_: GKEntity): void;

	addGraphName(_: GKGraph, name: string): void;

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;

	removeEntity(_: GKEntity): void;

	removeGraph(_: string): void;
}

interface GKSceneRootNodeType extends NSObjectProtocol {
}
declare var GKSceneRootNodeType: {

	prototype: GKSceneRootNodeType;
};

declare class GKShuffledDistribution extends GKRandomDistribution {

	static d20(): GKShuffledDistribution; // inherited from GKRandomDistribution

	static d6(): GKShuffledDistribution; // inherited from GKRandomDistribution

	static distributionForDieWithSideCount(_: number): GKShuffledDistribution; // inherited from GKRandomDistribution

	static distributionWithLowestValueHighestValue(_: number, highestValue: number): GKShuffledDistribution; // inherited from GKRandomDistribution
}

declare class GKSphereObstacle extends GKObstacle {

	static obstacleWithRadius(_: number): GKSphereObstacle;

	setPosition(_: number)

	position: number;

	setRadius(_: number)

	radius: number;

	static create(radius: number);
}

declare class GKSpheresNoiseSource extends GKNoiseSource {

	static spheresNoiseWithFrequency(_: number): GKSpheresNoiseSource;

	setFrequency(_: number)

	frequency: number;

	static create(frequency: number);
}

declare class GKState extends NSObject {

	static state(): GKState;

	readonly stateMachine: GKStateMachine;

	didEnterWithPreviousState(from?: GKState): void;

	isValidNextState(_: typeof NSObject): boolean;

	updateWithDeltaTime(deltaTime: number): void;

	willExitWithNextState(to: GKState): void;
}

declare class GKStateMachine extends NSObject {

	static stateMachineWithStates(_: NSArray<GKState>): GKStateMachine;

	readonly currentState: GKState;

	static create(states: NSArray<GKState> | GKState[]);

	canEnterState(_: typeof NSObject): boolean;

	enterState(_: typeof NSObject): boolean;

	updateWithDeltaTime(deltaTime: number): void;
}

interface GKStrategist extends NSObjectProtocol {

	setGameModel(_: GKGameModel)

	gameModel: GKGameModel;

	setRandomSource(_: GKRandom)

	randomSource: GKRandom;

	bestMoveForActivePlayer(): GKGameModelUpdate;
}
declare var GKStrategist: {

	prototype: GKStrategist;
};

interface GKTriangle {
	points: number;
}
declare var GKTriangle: GKTriangle;

declare class GKVoronoiNoiseSource extends GKNoiseSource {

	static voronoiNoiseWithFrequencyDisplacementDistanceEnabledSeed(_: number, displacement: number, distanceEnabled: boolean, seed: number): GKVoronoiNoiseSource;

	setDisplacement(_: number)

	displacement: number;

	setDistanceEnabled(_: boolean)

	isDistanceEnabled: boolean;

	setFrequency(_: number)

	frequency: number;

	setSeed(_: number)

	seed: number;

	static create(frequency: number, displacement: number, distanceEnabled: boolean, seed: number);
}
