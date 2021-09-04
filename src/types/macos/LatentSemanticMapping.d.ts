
declare function LSMMapAddCategory(mapref: any): number;

declare function LSMMapAddText(mapref: any, textref: any, category: number): number;

declare function LSMMapAddTextWithWeight(mapref: any, textref: any, category: number, weight: number): number;

declare function LSMMapApplyClusters(mapref: any, clusters: NSArray<any> | any[]): number;

declare function LSMMapCompile(mapref: any): number;

declare function LSMMapCreate(alloc: any, flags: number): any;

declare function LSMMapCreateClusters(alloc: any, mapref: any, subset: NSArray<any> | any[], numClusters: number, flags: number): NSArray<any>;

declare function LSMMapCreateFromURL(alloc: any, file: NSURL, flags: number): any;

declare function LSMMapGetCategoryCount(mapref: any): number;

declare function LSMMapGetProperties(mapref: any): NSDictionary<any, any>;

declare function LSMMapGetTypeID(): number;

declare function LSMMapSetProperties(mapref: any, properties: NSDictionary<any, any>): void;

declare function LSMMapSetStopWords(mapref: any, textref: any): number;

declare function LSMMapStartTraining(mapref: any): number;

declare function LSMMapWriteToStream(mapref: any, textref: any, stream: NSOutputStream, options: number): number;

declare function LSMMapWriteToURL(mapref: any, file: NSURL, flags: number): number;

declare function LSMResultCopyToken(result: any, n: number): NSData;

declare function LSMResultCopyTokenCluster(result: any, n: number): NSArray<any>;

declare function LSMResultCopyWord(result: any, n: number): string;

declare function LSMResultCopyWordCluster(result: any, n: number): NSArray<any>;

declare function LSMResultCreate(alloc: any, mapref: any, textref: any, numResults: number, flags: number): any;

declare function LSMResultGetCategory(result: any, n: number): number;

declare function LSMResultGetCount(result: any): number;

declare function LSMResultGetScore(result: any, n: number): number;

declare function LSMResultGetTypeID(): number;

declare function LSMTextAddToken(textref: any, token: NSData): number;

declare function LSMTextAddWord(textref: any, word: string): number;

declare function LSMTextAddWords(textref: any, words: string, locale: NSLocale, flags: number): number;

declare function LSMTextCreate(alloc: any, mapref: any): any;

declare function LSMTextGetTypeID(): number;

declare const kLSMClusterAgglomerative: number;

declare const kLSMClusterCategories: number;

declare const kLSMClusterKMeans: number;

declare const kLSMClusterTokens: number;

declare const kLSMClusterWords: number;

declare const kLSMMapBadCluster: number;

declare const kLSMMapBadPath: number;

declare const kLSMMapDiscardCounts: number;

declare const kLSMMapHashText: number;

declare const kLSMMapLoadMutable: number;

declare const kLSMMapNoSuchCategory: number;

declare const kLSMMapOutOfState: number;

declare const kLSMMapOverflow: number;

declare const kLSMMapPairs: number;

declare const kLSMMapTriplets: number;

declare const kLSMMapWriteError: number;

declare const kLSMResultBestWords: number;

declare const kLSMTextApplySpamHeuristics: number;

declare const kLSMTextPreserveAcronyms: number;

declare const kLSMTextPreserveCase: number;
