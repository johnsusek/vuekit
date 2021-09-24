import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol XMLParserExports: JSExport {
	// Static Methods

	// Instance Methods
	@objc func abortParsing()
	@objc func parse() -> Bool

	// Own Instance Properties
	@objc @available(OSX 10.9, *) var allowedExternalEntityURLs: Set<URL>? { get set }
	@objc var columnNumber: Int { @objc get }
	@objc var delegate: XMLParserDelegate? { @objc get @objc (setDelegate:) set }
	@objc @available(OSX 10.9, *) var externalEntityResolvingPolicy: XMLParser.ExternalEntityResolvingPolicy { @objc get @objc (setExternalEntityResolvingPolicy:) set }
	@objc var lineNumber: Int { @objc get }
	@objc var parserError: Error? { @objc get }
	@objc var publicID: String? { @objc get }
	@objc var shouldProcessNamespaces: Bool { @objc get @objc (setShouldProcessNamespaces:) set }
	@objc var shouldReportNamespacePrefixes: Bool { @objc get @objc (setShouldReportNamespacePrefixes:) set }
	@objc var shouldResolveExternalEntities: Bool { @objc get @objc (setShouldResolveExternalEntities:) set }
	@objc var systemID: String? { @objc get }
}

extension XMLParser: XMLParserExports {}
