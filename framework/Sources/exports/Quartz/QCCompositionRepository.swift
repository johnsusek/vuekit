import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Quartz

@objc protocol QCCompositionRepositoryExports: JSExport {
	// Static Methods
	@objc (sharedCompositionRepository) static func shared() -> QCCompositionRepository

	// Instance Methods
	@objc func allCompositions() -> [Any]
	@objc (compositionWithIdentifier:) func composition(withIdentifier: String) -> QCComposition
	@objc (compositionsWithProtocols:andAttributes:) func compositions(withProtocols: [Any], andAttributes: [AnyHashable: Any]) -> [Any]

	// Constructors
	@objc static func create() -> QCCompositionRepository
}

extension QCCompositionRepository: QCCompositionRepositoryExports {
	@objc class func create() -> QCCompositionRepository {
		return QCCompositionRepository()
	}

}
