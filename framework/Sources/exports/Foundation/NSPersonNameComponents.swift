import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import Foundation

@objc protocol NSPersonNameComponentsExports: JSExport {
	// , NSCopyingExports, NSSecureCodingExports
	// Static Methods

	// Own Instance Properties
	@objc var familyName: String? { @objc get @objc (setFamilyName:) set }
	@objc var givenName: String? { @objc get @objc (setGivenName:) set }
	@objc var middleName: String? { @objc get @objc (setMiddleName:) set }
	@objc var namePrefix: String? { @objc get @objc (setNamePrefix:) set }
	@objc var nameSuffix: String? { @objc get @objc (setNameSuffix:) set }
	@objc var nickname: String? { @objc get @objc (setNickname:) set }
	@objc var phoneticRepresentation: PersonNameComponents? { get set }

	// Constructors
	@objc static func create() -> NSPersonNameComponents
}

extension NSPersonNameComponents: NSPersonNameComponentsExports {
	@objc class func create() -> NSPersonNameComponents {
		return NSPersonNameComponents()
	}

}
