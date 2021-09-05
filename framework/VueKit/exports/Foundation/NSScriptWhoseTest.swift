import AppKit
import JavaScriptCore

@objc protocol NSScriptWhoseTestExports: JSExport {
	@objc func isTrue() -> Bool
}

extension NSScriptWhoseTest: NSScriptWhoseTestExports {
	@objc override class func create() -> NSScriptWhoseTest {
		return NSScriptWhoseTest()
	}
}
