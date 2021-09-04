
declare class SFAuthorization extends NSObject implements NSSecureCoding {

	static authorization(): any;

	static authorizationWithFlagsRightsEnvironment(_: AuthorizationFlags, rights: AuthorizationItemSet, environment: AuthorizationItemSet): any;

	static supportsSecureCoding(): boolean; // inherited from NSSecureCoding

	static create(coder: NSCoder); // inherited from NSCoding

	static create(flags: AuthorizationFlags, rights: AuthorizationItemSet, environment: AuthorizationItemSet);

	authorizationRef(): any;

	encodeWithCoder(_: NSCoder): void;

	invalidateCredentials(): void;

	obtainWithRightFlagsError(flags: string, error: AuthorizationFlags): boolean;

	obtainWithRightsFlagsEnvironmentAuthorizedRightsError(flags: AuthorizationItemSet, environment: AuthorizationFlags, authorizedRights: AuthorizationItemSet, error: AuthorizationItemSet): boolean;
}
