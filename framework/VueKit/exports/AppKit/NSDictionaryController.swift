import AppKit
import JavaScriptCore

@objc protocol NSDictionaryControllerExports: JSExport {
	@objc var excludedKeys: [String] { @objc get @objc (setExcludedKeys:) set }
	@objc var includedKeys: [String] { @objc get @objc (setIncludedKeys:) set }
	@objc var initialKey: String { @objc get @objc (setInitialKey:) set }
	@objc var initialValue: Any { @objc get @objc (setInitialValue:) set }
	@objc var localizedKeyDictionary: [String: String] { @objc get @objc (setLocalizedKeyDictionary:) set }
	@objc var localizedKeyTable: String? { @objc get @objc (setLocalizedKeyTable:) set }
	@objc func newObject() -> NSDictionaryControllerKeyValuePair
}

extension NSDictionaryController: NSDictionaryControllerExports {
	@objc override class func create() -> NSDictionaryController {
		return NSDictionaryController()
	}
}
