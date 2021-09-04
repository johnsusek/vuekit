
declare class BCChatAction extends NSObject {

	static openTranscriptIntentParameters(_: string, intentParameters: NSDictionary<string, string>): void;
}

declare class BCChatButton extends NSControl {

	static create(style: BCChatButtonStyle);
}

enum BCChatButtonStyle {

	Light = 0,

	Dark = 1
}


declare var BCParameterNameBody: string;

declare var BCParameterNameGroup: string;

declare var BCParameterNameIntent: string;
