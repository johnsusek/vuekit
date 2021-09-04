
enum NLDistanceType {

	Cosine = 0
}


declare class NLEmbedding extends NSObject {

	static currentRevisionForLanguage(_: string): number;

	static embeddingWithContentsOfURLError(error: NSURL): NLEmbedding;

	static supportedRevisionsForLanguage(_: string): NSIndexSet;

	static wordEmbeddingForLanguage(_: string): NLEmbedding;

	static wordEmbeddingForLanguageRevision(_: string, revision: number): NLEmbedding;

	static writeEmbeddingForDictionaryLanguageRevisionToURLError(language: NSDictionary<string, NSArray<number>>, revision?: string, toURL: number, error: NSURL): boolean;

	readonly dimension: number;

	readonly language: string;

	readonly revision: number;

	readonly vocabularySize: number;

	containsString(_: string): boolean;

	distanceBetweenStringAndStringDistanceType(_: string, andString: string, distanceType: NLDistanceType): number;

	enumerateNeighborsForStringMaximumCountDistanceTypeUsingBlock(_: string, maximumCount: number, distanceType: NLDistanceType, usingBlock: (p1: string, p2: number, p3: boolean) => void): void;

	enumerateNeighborsForStringMaximumCountMaximumDistanceDistanceTypeUsingBlock(_: string, maximumCount: number, maximumDistance: number, distanceType: NLDistanceType, usingBlock: (p1: string, p2: number, p3: boolean) => void): void;

	enumerateNeighborsForVectorMaximumCountDistanceTypeUsingBlock(_: NSArray<number>, maximumCount: number, distanceType: NLDistanceType, usingBlock: (p1: string, p2: number, p3: boolean) => void): void;

	enumerateNeighborsForVectorMaximumCountMaximumDistanceDistanceTypeUsingBlock(_: NSArray<number>, maximumCount: number, maximumDistance: number, distanceType: NLDistanceType, usingBlock: (p1: string, p2: number, p3: boolean) => void): void;

	neighborsForStringMaximumCountDistanceType(_: string, maximumCount: number, distanceType: NLDistanceType): NSArray<string>;

	neighborsForStringMaximumCountMaximumDistanceDistanceType(_: string, maximumCount: number, maximumDistance: number, distanceType: NLDistanceType): NSArray<string>;

	neighborsForVectorMaximumCountDistanceType(_: NSArray<number>, maximumCount: number, distanceType: NLDistanceType): NSArray<string>;

	neighborsForVectorMaximumCountMaximumDistanceDistanceType(_: NSArray<number>, maximumCount: number, maximumDistance: number, distanceType: NLDistanceType): NSArray<string>;

	vectorForString(_: string): NSArray<number>;
}

declare class NLGazetteer extends NSObject {

	static gazetteerWithContentsOfURLError(error: NSURL): NLGazetteer;

	static writeGazetteerForDictionaryLanguageToURLError(language: NSDictionary<string, NSArray<string>>, toURL?: string, error: NSURL): boolean;

	readonly data: NSData;

	readonly language: string;

	static create(contentsOfURL: NSURL);

	static create(data: NSData);

	static create(dictionary: NSDictionary<string, NSArray<string>>, language: string);

	labelForString(_: string): string;
}

declare var NLLanguageAmharic: string;

declare var NLLanguageArabic: string;

declare var NLLanguageArmenian: string;

declare var NLLanguageBengali: string;

declare var NLLanguageBulgarian: string;

declare var NLLanguageBurmese: string;

declare var NLLanguageCatalan: string;

declare var NLLanguageCherokee: string;

declare var NLLanguageCroatian: string;

declare var NLLanguageCzech: string;

declare var NLLanguageDanish: string;

declare var NLLanguageDutch: string;

declare var NLLanguageEnglish: string;

declare var NLLanguageFinnish: string;

declare var NLLanguageFrench: string;

declare var NLLanguageGeorgian: string;

declare var NLLanguageGerman: string;

declare var NLLanguageGreek: string;

declare var NLLanguageGujarati: string;

declare var NLLanguageHebrew: string;

declare var NLLanguageHindi: string;

declare var NLLanguageHungarian: string;

declare var NLLanguageIcelandic: string;

declare var NLLanguageIndonesian: string;

declare var NLLanguageItalian: string;

declare var NLLanguageJapanese: string;

declare var NLLanguageKannada: string;

declare var NLLanguageKhmer: string;

declare var NLLanguageKorean: string;

declare var NLLanguageLao: string;

declare var NLLanguageMalay: string;

declare var NLLanguageMalayalam: string;

declare var NLLanguageMarathi: string;

declare var NLLanguageMongolian: string;

declare var NLLanguageNorwegian: string;

declare var NLLanguageOriya: string;

declare var NLLanguagePersian: string;

declare var NLLanguagePolish: string;

declare var NLLanguagePortuguese: string;

declare var NLLanguagePunjabi: string;

declare class NLLanguageRecognizer extends NSObject {

	static dominantLanguageForString(_: string): string;

	readonly dominantLanguage: string;

	setLanguageConstraints(_: NSArray<string>)

	languageConstraints: NSArray<string>;

	setLanguageHints(_: NSDictionary<string, number>)

	languageHints: NSDictionary<string, number>;

	languageHypothesesWithMaximum(_: number): NSDictionary<string, number>;

	processString(_: string): void;

	reset(): void;
}

declare var NLLanguageRomanian: string;

declare var NLLanguageRussian: string;

declare var NLLanguageSimplifiedChinese: string;

declare var NLLanguageSinhalese: string;

declare var NLLanguageSlovak: string;

declare var NLLanguageSpanish: string;

declare var NLLanguageSwedish: string;

declare var NLLanguageTamil: string;

declare var NLLanguageTelugu: string;

declare var NLLanguageThai: string;

declare var NLLanguageTibetan: string;

declare var NLLanguageTraditionalChinese: string;

declare var NLLanguageTurkish: string;

declare var NLLanguageUkrainian: string;

declare var NLLanguageUndetermined: string;

declare var NLLanguageUrdu: string;

declare var NLLanguageVietnamese: string;

declare class NLModel extends NSObject {

	static modelWithContentsOfURLError(error: NSURL): NLModel;

	static modelWithMLModelError(error: MLModel): NLModel;

	readonly configuration: NLModelConfiguration;

	predictedLabelForString(_: string): string;

	predictedLabelsForTokens(_: NSArray<string>): NSArray<string>;
}

declare class NLModelConfiguration extends NSObject implements NSCopying, NSSecureCoding {

	static currentRevisionForType(_: NLModelType): number;

	static supportedRevisionsForType(_: NLModelType): NSIndexSet;

	readonly language: string;

	readonly revision: number;

	readonly type: NLModelType;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	copyWithZone(_?: any): any;

	encodeWithCoder(_: NSCoder): void;
}

enum NLModelType {

	Classifier = 0,

	Sequence = 1
}


declare var NLTagAdjective: string;

declare var NLTagAdverb: string;

declare var NLTagClassifier: string;

declare var NLTagCloseParenthesis: string;

declare var NLTagCloseQuote: string;

declare var NLTagConjunction: string;

declare var NLTagDash: string;

declare var NLTagDeterminer: string;

declare var NLTagIdiom: string;

declare var NLTagInterjection: string;

declare var NLTagNoun: string;

declare var NLTagNumber: string;

declare var NLTagOpenParenthesis: string;

declare var NLTagOpenQuote: string;

declare var NLTagOrganizationName: string;

declare var NLTagOther: string;

declare var NLTagOtherPunctuation: string;

declare var NLTagOtherWhitespace: string;

declare var NLTagOtherWord: string;

declare var NLTagParagraphBreak: string;

declare var NLTagParticle: string;

declare var NLTagPersonalName: string;

declare var NLTagPlaceName: string;

declare var NLTagPreposition: string;

declare var NLTagPronoun: string;

declare var NLTagPunctuation: string;

declare var NLTagSchemeLanguage: string;

declare var NLTagSchemeLemma: string;

declare var NLTagSchemeLexicalClass: string;

declare var NLTagSchemeNameType: string;

declare var NLTagSchemeNameTypeOrLexicalClass: string;

declare var NLTagSchemeScript: string;

declare var NLTagSchemeSentimentScore: string;

declare var NLTagSchemeTokenType: string;

declare var NLTagSentenceTerminator: string;

declare var NLTagVerb: string;

declare var NLTagWhitespace: string;

declare var NLTagWord: string;

declare var NLTagWordJoiner: string;

declare class NLTagger extends NSObject {

	static availableTagSchemesForUnitLanguage(_: NLTokenUnit, language: string): NSArray<string>;

	static requestAssetsForLanguageTagSchemeCompletionHandler(_: string, tagScheme: string, completionHandler?: (p1: NLTaggerAssetsResult, p2: NSError) => void): void;

	readonly dominantLanguage: string;

	setString(_: string)

	string: string;

	readonly tagSchemes: NSArray<string>;

	static create(tagSchemes: NSArray<string> | string[]);

	enumerateTagsInRangeUnitSchemeOptionsUsingBlock(_: NSRange, unit: NLTokenUnit, scheme: string, options: NLTaggerOptions, usingBlock?: (p1: string, p2: NSRange, p3: boolean) => void): void;

	gazetteersForTagScheme(_: string): NSArray<NLGazetteer>;

	modelsForTagScheme(_: string): NSArray<NLModel>;

	setGazetteersForTagScheme(_: NSArray<NLGazetteer>, forTagScheme: string): void;

	setLanguageRange(_: string, range: NSRange): void;

	setModelsForTagScheme(_: NSArray<NLModel>, forTagScheme: string): void;

	setOrthographyRange(_: NSOrthography, range: NSRange): void;

	tagAtIndexUnitSchemeTokenRange(_: number, unit: NLTokenUnit, scheme: string, tokenRange?: NSRange): string;

	tagsInRangeUnitSchemeOptionsTokenRanges(_: NSRange, unit: NLTokenUnit, scheme: string, options: NLTaggerOptions, tokenRanges?: NSArray<NSValue>): NSArray<string>;

	tokenRangeAtIndexUnit(_: number, unit: NLTokenUnit): NSRange;
}

enum NLTaggerAssetsResult {

	Available = 0,

	NotAvailable = 1,

	Error = 2
}


enum NLTaggerOptions {

	OmitWords = 1,

	OmitPunctuation = 2,

	OmitWhitespace = 4,

	OmitOther = 8,

	JoinNames = 16,

	JoinContractions = 32
}


enum NLTokenUnit {

	Word = 0,

	Sentence = 1,

	Paragraph = 2,

	Document = 3
}


declare class NLTokenizer extends NSObject {

	setString(_: string)

	string: string;

	readonly unit: NLTokenUnit;

	static create(unit: NLTokenUnit);

	enumerateTokensInRangeUsingBlock(_: NSRange, usingBlock: (p1: NSRange, p2: NLTokenizerAttributes, p3: boolean) => void): void;

	setLanguage(_: string): void;

	tokenRangeAtIndex(_: number): NSRange;

	tokensForRange(_: NSRange): NSArray<NSValue>;
}

enum NLTokenizerAttributes {

	Numeric = 1,

	Symbolic = 2,

	Emoji = 4
}

