
interface IMServiceApplication extends NSObjectProtocol {
}
declare var IMServiceApplication: {

	prototype: IMServiceApplication;
};

interface IMServiceApplicationChatRoomSupport extends IMServiceApplication {
}
declare var IMServiceApplicationChatRoomSupport: {

	prototype: IMServiceApplicationChatRoomSupport;
};

interface IMServiceApplicationFileTransferSessionSupport extends IMServiceApplication {
}
declare var IMServiceApplicationFileTransferSessionSupport: {

	prototype: IMServiceApplicationFileTransferSessionSupport;
};

interface IMServiceApplicationGroupListAuthorizationSupport extends IMServiceApplicationGroupListSupport {
}
declare var IMServiceApplicationGroupListAuthorizationSupport: {

	prototype: IMServiceApplicationGroupListAuthorizationSupport;
};

interface IMServiceApplicationGroupListSupport extends IMServiceApplication {
}
declare var IMServiceApplicationGroupListSupport: {

	prototype: IMServiceApplicationGroupListSupport;
};

interface IMServiceApplicationInstantMessagingSupport {
}
declare var IMServiceApplicationInstantMessagingSupport: {

	prototype: IMServiceApplicationInstantMessagingSupport;
};

interface IMServicePlugIn extends NSObjectProtocol {
}
declare var IMServicePlugIn: {

	prototype: IMServicePlugIn;
};

interface IMServicePlugInChatRoomSupport {
}
declare var IMServicePlugInChatRoomSupport: {

	prototype: IMServicePlugInChatRoomSupport;
};

interface IMServicePlugInFileTransferSessionSupport {
}
declare var IMServicePlugInFileTransferSessionSupport: {

	prototype: IMServicePlugInFileTransferSessionSupport;
};

interface IMServicePlugInGroupListAuthorizationSupport extends IMServicePlugInGroupListSupport {
}
declare var IMServicePlugInGroupListAuthorizationSupport: {

	prototype: IMServicePlugInGroupListAuthorizationSupport;
};

interface IMServicePlugInGroupListEditingSupport extends IMServicePlugInGroupListSupport {
}
declare var IMServicePlugInGroupListEditingSupport: {

	prototype: IMServicePlugInGroupListEditingSupport;
};

interface IMServicePlugInGroupListHandlePictureSupport extends NSObjectProtocol {
}
declare var IMServicePlugInGroupListHandlePictureSupport: {

	prototype: IMServicePlugInGroupListHandlePictureSupport;
};

interface IMServicePlugInGroupListOrderingSupport extends IMServicePlugInGroupListSupport {

	reorderGroups(_: NSArray<any>): void;
}
declare var IMServicePlugInGroupListOrderingSupport: {

	prototype: IMServicePlugInGroupListOrderingSupport;
};

interface IMServicePlugInGroupListSupport {
}
declare var IMServicePlugInGroupListSupport: {

	prototype: IMServicePlugInGroupListSupport;
};

interface IMServicePlugInInstantMessagingSupport {
}
declare var IMServicePlugInInstantMessagingSupport: {

	prototype: IMServicePlugInInstantMessagingSupport;
};

interface IMServicePlugInPresenceSupport {
}
declare var IMServicePlugInPresenceSupport: {

	prototype: IMServicePlugInPresenceSupport;
};
