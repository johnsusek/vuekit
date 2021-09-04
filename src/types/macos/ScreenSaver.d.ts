
declare class ScreenSaverDefaults extends NSUserDefaults {

	static defaultsForModuleWithName(_: string): ScreenSaverDefaults;
}

declare class ScreenSaverView extends NSView {

	static backingStoreType(): NSBackingStoreType;

	static performGammaFade(): boolean;

	readonly isAnimating: boolean;

	setAnimationTimeInterval(_: number)

	animationTimeInterval: number;

	readonly configureSheet: NSWindow;

	readonly hasConfigureSheet: boolean;

	readonly isPreview: boolean;

	static create(frame: CGRect, isPreview: boolean);

	animateOneFrame(): void;

	startAnimation(): void;

	stopAnimation(): void;
}
