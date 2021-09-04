
declare class FPUIActionExtensionContext extends NSExtensionContext {

	readonly domainIdentifier: string;

	completeRequest(): void;
}

declare class FPUIActionExtensionViewController extends NSViewController {

	readonly extensionContext: FPUIActionExtensionContext;

	prepareForActionWithIdentifierItemIdentifiers(_: string, itemIdentifiers: NSArray<string>): void;

	prepareForError(_: NSError): void;
}

declare var FPUIErrorDomain: string;

enum FPUIExtensionErrorCode {

	UserCancelled = 0,

	Failed = 1
}

