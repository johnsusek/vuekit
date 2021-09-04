
declare class CNContactPicker extends NSObject {

	setDelegate(_: CNContactPickerDelegate)

	delegate: CNContactPickerDelegate;

	setDisplayedKeys(_: NSArray<string>)

	displayedKeys: NSArray<string>;

	close(): void;

	showRelativeToRectOfViewPreferredEdge(_: CGRect, ofView: NSView, preferredEdge: NSRectEdge): void;
}

interface CNContactPickerDelegate extends NSObjectProtocol {

	contactPickerDidSelectContact?(_: CNContactPicker, didSelectContact: CNContact): void;

	contactPickerDidSelectContactProperty?(_: CNContactPicker, didSelectContactProperty: CNContactProperty): void;

	contactPickerDidClose?(_: CNContactPicker): void;

	contactPickerWillClose?(_: CNContactPicker): void;
}
declare var CNContactPickerDelegate: {

	prototype: CNContactPickerDelegate;
};

declare class CNContactViewController extends NSViewController {

	static descriptorForRequiredKeys(): CNKeyDescriptor;

	setContact(_: CNContact)

	contact: CNContact;
}
