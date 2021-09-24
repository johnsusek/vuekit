import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSItemProviderExports: JSExport {
	// , NSCopyingExports
	// Static Methods

	// Instance Methods
	@objc (canLoadObjectOfClass:) @available(OSX 10.13, *) func canLoadObject(ofClass: NSItemProviderReading.Type) -> Bool
	@objc (hasItemConformingToTypeIdentifier:) func hasItemConformingToTypeIdentifier(_: String) -> Bool
	@objc (hasRepresentationConformingToTypeIdentifier:fileOptions:) @available(OSX 10.13, *) func hasRepresentationConforming(toTypeIdentifier: String, fileOptions: NSItemProviderFileOptions) -> Bool
	@objc (loadDataRepresentationForTypeIdentifier:completionHandler:) @available(OSX 10.13, *) func loadDataRepresentation(forTypeIdentifier typeIdentifier: String, completionHandler: @escaping (Data?, Error?) -> Void) -> Progress
	@objc (loadFileRepresentationForTypeIdentifier:completionHandler:) @available(OSX 10.13, *) func loadFileRepresentation(forTypeIdentifier typeIdentifier: String, completionHandler: @escaping (URL?, Error?) -> Void) -> Progress
	@objc (loadInPlaceFileRepresentationForTypeIdentifier:completionHandler:) @available(OSX 10.13, *) func loadInPlaceFileRepresentation(forTypeIdentifier typeIdentifier: String, completionHandler: @escaping (URL?, Bool, Error?) -> Void) -> Progress
	@objc (loadItemForTypeIdentifier:options:completionHandler:) func loadItem(forTypeIdentifier typeIdentifier: String, options: [AnyHashable : Any]?, completionHandler: NSItemProvider.CompletionHandler?)
	@objc (loadObjectOfClass:completionHandler:) @available(OSX 10.13, *) func loadObject(ofClass aClass: NSItemProviderReading.Type, completionHandler: @escaping (NSItemProviderReading?, Error?) -> Void) -> Progress
	@objc (loadPreviewImageWithOptions:completionHandler:) @available(OSX 10.10, *) func loadPreviewImage(options: [AnyHashable : Any]!, completionHandler: NSItemProvider.CompletionHandler!)
	@objc @available(OSX 10.12, *) func registerCloudKitShare(_: CKShare, container: CKContainer)
	@objc (registerCloudKitShareWithPreparationHandler:) @available(OSX 10.12, *) func registerCloudKitShare(preparationHandler: @escaping (@escaping (CKShare?, CKContainer?, Error?) -> Void) -> Void)
	@objc (registerDataRepresentationForTypeIdentifier:visibility:loadHandler:) @available(OSX 10.13, *) func registerDataRepresentation(forTypeIdentifier typeIdentifier: String, visibility: NSItemProviderRepresentationVisibility, loadHandler: @escaping (@escaping (Data?, Error?) -> Void) -> Progress?)
	@objc (registerFileRepresentationForTypeIdentifier:fileOptions:visibility:loadHandler:) @available(OSX 10.13, *) func registerFileRepresentation(forTypeIdentifier typeIdentifier: String, fileOptions: NSItemProviderFileOptions, visibility: NSItemProviderRepresentationVisibility, loadHandler: @escaping (@escaping (URL?, Bool, Error?) -> Void) -> Progress?)
	@objc (registerItemForTypeIdentifier:loadHandler:) func registerItem(forTypeIdentifier typeIdentifier: String, loadHandler: @escaping NSItemProvider.LoadHandler)
	@objc @available(OSX 10.13, *) func registerObject(_: NSItemProviderWriting, visibility: NSItemProviderRepresentationVisibility)
	@objc (registerObjectOfClass:visibility:loadHandler:) @available(OSX 10.13, *) func registerObject(ofClass aClass: NSItemProviderWriting.Type, visibility: NSItemProviderRepresentationVisibility, loadHandler: @escaping (@escaping (NSItemProviderWriting?, Error?) -> Void) -> Progress?)
	@objc (registeredTypeIdentifiersWithFileOptions:) @available(OSX 10.13, *) func registeredTypeIdentifiers(fileOptions: NSItemProviderFileOptions) -> [String]

	// Own Instance Properties
	@objc @available(OSX 10.10, *) var containerFrame: NSRect { @objc get }
	@objc @available(OSX 10.10, *) var preferredPresentationSize: NSSize { @objc get }
	@objc @available(OSX 10.10, *) var previewImageHandler: NSItemProvider.LoadHandler? { get set }
	@objc var registeredTypeIdentifiers: [String] { @objc get }
	@objc @available(OSX 10.10, *) var sourceFrame: NSRect { @objc get }
	@objc @available(OSX 10.14, *) var suggestedName: String? { @objc get @objc (setSuggestedName:) set }
}

extension NSItemProvider: NSItemProviderExports {}
