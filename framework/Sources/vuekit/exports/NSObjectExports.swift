import AppKit
import JavaScriptCore

@objc public protocol NSObjectExports: JSExport {
	// @objc static func automaticallyNotifiesObserversForKey(_: String) -> Bool
	// @objc static func cancelPreviousPerformRequestsWithTarget(_: Any)
	// @objc static func cancelPreviousPerformRequestsWithTarget(_: Any, selector: Selector, object: Any?)
	// @objc static func classFallbacksForKeyedArchiver() -> [String]
	// @objc static func classForKeyedUnarchiver() -> AnyClass
	// @objc static func conformsToProtocol(_: Any) -> Bool
	// @objc static func copyWithZone(_: UnsafeMutableRawPointer) -> Any
	// @objc static func debugDescription() -> String
	// @objc (defaultPlaceholderForMarker:withBinding:) @available(OSX 10.0, *) static func defaultPlaceholder(`for`: Any?, with: NSBindingName) -> Any?
	// @objc static func description() -> String
	// @objc static func exposeBinding(_: NSBindingName)
	// @objc static func hash() -> Int
	// // @objc static func initialize()
	// // @objc static func instanceMethodForSelector(_: Selector) -> JSManagedValue /* : Void */
	// @objc static func instancesRespondToSelector(_: Selector) -> Bool
	// @objc static func isSubclassOfClass(_: AnyClass) -> Bool
	// @objc @available(OSX 10.5, *) static func keyPathsForValuesAffectingValueForKey(_: String) -> JSValue
	// // @objc static func load()
	// @objc static func mutableCopyWithZone(_: UnsafeMutableRawPointer) -> Any
	// @objc @available(OSX 10.5, *) static func resolveClassMethod(_: Selector) -> Bool
	// @objc @available(OSX 10.5, *) static func resolveInstanceMethod(_: Selector) -> Bool
	// @objc (setDefaultPlaceholder:forMarker:withBinding:) @available(OSX 10.0, *) static func setDefaultPlaceholder(_: Any?, `for`: Any?, with: NSBindingName)
	// @objc static func setVersion(_: Int)
	// @objc static func superclass() -> AnyClass
	// @objc static func version() -> Int
	// @objc var accessibilityFocusedUIElement: Any? { @objc get }
	// @objc @available(OSX 10.9, *) var accessibilityNotifiesWhenDestroyed: Bool { @objc get }
	// @objc var attributeKeys: [String] { @objc get }
	// @objc @available(OSX 10.6, *) var autoContentAccessingProxy: Any { @objc get }
	// @objc var classCode: Int32 { @objc get }
	// @objc var classDescription: NSClassDescription { @objc get }
	// @objc var classForArchiver: AnyClass? { @objc get }
	// @objc var classForCoder: AnyClass { @objc get }
	// @objc var classForKeyedArchiver: AnyClass? { @objc get }
	// @objc var className: String { @objc get }
	// @objc var exposedBindings: [NSBindingName] { @objc get }
	// @objc var objectSpecifier: NSScriptObjectSpecifier? { @objc get }
	// @objc var observationInfo: UnsafeMutableRawPointer? { @objc get @objc (setObservationInfo:) set }
	// @objc var scriptingProperties: [String: Any]? { @objc get @objc (setScriptingProperties:) set }
	// @objc var selectable: Bool { @objc (isSelectable) get }
	// @objc var toManyRelationshipKeys: [String] { @objc get }
	// @objc var toOneRelationshipKeys: [String] { @objc get }
	// @objc static var accessInstanceVariablesDirectly: Bool { @objc get }
	// @objc func acceptsPreviewPanelControl(_: QLPreviewPanel) -> Bool
	// @objc func accessibilityArrayAttributeCount(_: NSAccessibility.Attribute) -> Int
	// @objc func accessibilityArrayAttributeValues(_: NSAccessibility.Attribute, index: Int, maxCount: Int) -> NSArray<AnyObject>
	// @objc func accessibilityHitTest(_: NSPoint) -> Any?
	// @objc func accessibilityIndexOfChild(_: Any) -> Int
	// @objc func addObserver(_: NSObject, forKeyPath: String, options: NSKeyValueObservingOptions, context: UnsafeMutableRawPointer?)
	// @objc func allowsWeakReference() -> Bool
	// @objc @available(OSX 10.0, *) func application(_: NSApplication, delegateHandlesKey: String) -> Bool
	// @objc func attemptRecoveryFromError(_: Error, optionIndex: Int) -> Bool
	// @objc (attemptRecoveryFromError:optionIndex:delegate:didRecoverSelector:contextInfo:) func attemptRecovery(fromError: Error, optionIndex: Int, delegate: Any?, didRecoverSelector: Selector?, contextInfo: UnsafeMutableRawPointer?)
	// @objc func awakeAfterUsingCoder(_: NSCoder) -> Any?
	// @objc func awakeFromNib()
	// @objc func beginPreviewPanelControl(_: QLPreviewPanel)
	// @objc func bind(_: NSBindingName, toObject: Any, withKeyPath: String, options: [NSBindingOption: Any]?)
	// @objc @available(OSX 10.0, *) func changeColor(_: Any?)
	// @objc @available(OSX 10.0, *) func changeFont(_: Any?)
	// @objc func coerceValue(_: Any?, forKey: String) -> Any?
	// @objc @available(OSX 10.0, *) func commitEditing() -> Bool
	// @objc @available(OSX 10.7, *) func commitEditingAndReturnError() -> Bool
	// @objc @available(OSX 10.0, *) func commitEditingWithDelegate(_: Any?, didCommitSelector: Selector?, contextInfo: UnsafeMutableRawPointer?)
	// @objc @available(OSX 10.0, *) func controlTextDidBeginEditing(_: Notification)
	// @objc @available(OSX 10.0, *) func controlTextDidChange(_: Notification)
	// @objc @available(OSX 10.0, *) func controlTextDidEndEditing(_: Notification)
	// @objc func copy() -> Any
	// @objc @available(OSX 10.5, *) func copyScriptingValue(_: Any, forKey: String, withProperties: [String: Any]) -> Any?
	// @objc func dictionaryWithValuesForKeys(_: [String]) -> [String: Any]
	// @objc func didChange(_: NSKeyValueChange, valuesAtIndexes: IndexSet, forKey: String)
	// @objc func didChangeValueForKey(_: String)
	// @objc func didChangeValueForKey(_: String, withSetMutation: NSKeyValueSetMutationKind, usingObjects: Set<AnyObject>)
	// @objc @available(OSX 10.0, *) func discardEditing()
	// @objc func doesContain(_: Any) -> Bool
	// @objc func doesNotRecognizeSelector(_: Selector)
	// @objc func endPreviewPanelControl(_: QLPreviewPanel)
	// @objc func finalize()
	// @objc @available(OSX 10.5, *) func forwardingTargetForSelector(_: Selector) -> Any
	// @objc func imageRepresentation() -> Any
	// @objc func imageRepresentationType() -> String
	// @objc func imageSubtitle() -> String
	// @objc func imageTitle() -> String
	// @objc func imageUID() -> String
	// @objc func imageVersion() -> Int
	// @objc func indicesOfObjectsByEvaluatingObjectSpecifier(_: NSScriptObjectSpecifier) -> [NSNumber]?
	// @objc (infoForBinding:) func infoForBinding(_: NSBindingName) -> [NSBindingInfoKey: Any]?
	// @objc func insertValue(_: Any, atIndex: Int, inPropertyWithKey: String)
	// @objc func insertValue(_: Any, inPropertyWithKey: String)
	// @objc func inverseForRelationshipKey(_: String) -> String?
	// @objc func isCaseInsensitiveLike(_: String) -> Bool
	// @objc func isEqualTo(_: Any?) -> Bool
	// @objc func isGreaterThan(_: Any?) -> Bool
	// @objc func isGreaterThanOrEqualTo(_: Any?) -> Bool
	// @objc func isLessThan(_: Any?) -> Bool
	// @objc func isLessThanOrEqualTo(_: Any?) -> Bool
	// @objc func isLike(_: String) -> Bool
	// @objc func isNotEqualTo(_: Any?) -> Bool
	// @objc @available(OSX 10.7, *) func layer(_: CALayer, shouldInheritContentsScale: CGFloat, fromWindow: NSWindow) -> Bool
	// // @objc func methodForSelector(_: Selector) -> JSManagedValue /* : Void */
	// @objc func mutableArrayValueForKey(_: String) -> NSMutableArray<AnyObject>
	// @objc func mutableArrayValueForKeyPath(_: String) -> NSMutableArray<AnyObject>
	// @objc func mutableCopy() -> Any
	// @objc @available(OSX 10.7, *) func mutableOrderedSetValueForKey(_: String) -> NSMutableOrderedSet<AnyObject>
	// @objc @available(OSX 10.7, *) func mutableOrderedSetValueForKeyPath(_: String) -> NSMutableOrderedSet<AnyObject>
	// @objc func mutableSetValueForKey(_: String) -> NSMutableSet<AnyObject>
	// @objc func mutableSetValueForKeyPath(_: String) -> NSMutableSet<AnyObject>
	// @objc @available(OSX 10.5, *) func newScriptingObjectOfClass(_: AnyClass, forValueForKey: String, withContentsValue: Any?, properties: [String: Any]) -> Any?
	// @objc @available(OSX 10.0, *) func objectDidBeginEditing(_: NSEditor)
	// @objc @available(OSX 10.0, *) func objectDidEndEditing(_: NSEditor)
	// @objc func observeValueForKeyPath(_: String?, ofObject: Any?, change: [NSKeyValueChangeKey: Any]?, context: UnsafeMutableRawPointer?)
	// @objc (optionDescriptionsForBinding:) @available(OSX 10.5, *) func optionDescriptionsForBinding(_: NSBindingName) -> [NSAttributeDescription]
	// @objc @available(OSX 10.0, *) func pasteboard(_: NSPasteboard, provideDataForType: NSPasteboard.PasteboardType)
	// @objc @available(OSX 10.0, *) func pasteboardChangedOwner(_: NSPasteboard)
	// @objc @available(OSX 10.5, *) func performSelector(_: Selector, onThread: Thread, withObject: Any?, waitUntilDone: Bool)
	// @objc @available(OSX 10.5, *) func performSelector(_: Selector, onThread: Thread, withObject: Any?, waitUntilDone: Bool, modes: [String]?)
	// @objc func performSelector(_: Selector, withObject: Any?, afterDelay: TimeInterval)
	// @objc func performSelector(_: Selector, withObject: Any?, afterDelay: TimeInterval, inModes: [RunLoop.Mode])
	// @objc @available(OSX 10.5, *) func performSelectorInBackground(_: Selector, withObject: Any?)
	// @objc func performSelectorOnMainThread(_: Selector, withObject: Any?, waitUntilDone: Bool)
	// @objc func performSelectorOnMainThread(_: Selector, withObject: Any?, waitUntilDone: Bool, modes: [String]?)
	// @objc @available(OSX 10.10, *) func prepareForInterfaceBuilder()
	// @objc func quartzFilterManager(_: QuartzFilterManager, didAddFilter: QuartzFilter)
	// @objc func quartzFilterManager(_: QuartzFilterManager, didModifyFilter: QuartzFilter)
	// @objc func quartzFilterManager(_: QuartzFilterManager, didRemoveFilter: QuartzFilter)
	// @objc func quartzFilterManager(_: QuartzFilterManager, didSelectFilter: QuartzFilter)
	// @objc func removeObserver(_: NSObject, forKeyPath: String)
	// @objc @available(OSX 10.7, *) func removeObserver(_: NSObject, forKeyPath: String, context: UnsafeMutableRawPointer?)
	// @objc func removeValueAtIndex(_: Int, fromPropertyWithKey: String)
	// @objc func replaceValueAtIndex(_: Int, inPropertyWithKey: String, withValue: Any)
	// @objc func replacementObjectForCoder(_: NSCoder) -> Any?
	// @objc func replacementObjectForKeyedArchiver(_: NSKeyedArchiver) -> Any?
	// @objc func retainWeakReference() -> Bool
	// @objc func saveOptions(_: IKSaveOptions, shouldShowUTType: String) -> Bool
	// @objc func scriptingBeginsWith(_: Any) -> Bool
	// @objc func scriptingContains(_: Any) -> Bool
	// @objc func scriptingEndsWith(_: Any) -> Bool
	// @objc func scriptingIsEqualTo(_: Any) -> Bool
	// @objc func scriptingIsGreaterThan(_: Any) -> Bool
	// @objc func scriptingIsGreaterThanOrEqualTo(_: Any) -> Bool
	// @objc func scriptingIsLessThan(_: Any) -> Bool
	// @objc func scriptingIsLessThanOrEqualTo(_: Any) -> Bool
	// @objc @available(OSX 10.5, *) func scriptingValueForSpecifier(_: NSScriptObjectSpecifier) -> Any?
	// @objc func setNilValueForKey(_: String)
	// @objc func setValue(_: Any?, forKey: String)
	// @objc func setValue(_: Any?, forKeyPath: String)
	// @objc func setValue(_: Any?, forUndefinedKey: String)
	// @objc (setValuesForKeysWithDictionary:) func setValuesForKeys(_: [String: Any])
	// @objc func unbind(_: NSBindingName)
	// @objc (validModesForFontPanel:) @available(OSX 10.0, *) func validModesForFontPanel(_: NSFontPanel) -> NSFontPanel.ModeMask
	// @objc (validateMenuItem:) @available(OSX 10.0, *) func validateMenuItem(_: NSMenuItem) -> Bool
	// @objc (validateToolbarItem:) @available(OSX 10.0, *) func validateToolbarItem(_: NSToolbarItem) -> Bool
	// // @objc func validateValue(forKey: UnsafeMutablePointer<Any>?, error: String) -> Bool
	// // @objc func validateValue(forKeyPath: UnsafeMutablePointer<Any>?, error: String) -> Bool
	// @objc func valueAtIndex(_: Int, inPropertyWithKey: String) -> Any?
	// @objc (valueClassForBinding:) func valueClassForBinding(_: NSBindingName) -> AnyClass?
	// @objc func valueForKey(_: String) -> Any?
	// @objc func valueForKeyPath(_: String) -> Any?
	// @objc func valueForUndefinedKey(_: String) -> Any?
	// @objc func valueWithName(_: String, inPropertyWithKey: String) -> Any?
	// @objc func valueWithUniqueID(_: Any, inPropertyWithKey: String) -> Any?
	// @objc @available(OSX 10.0, *) func view(_: NSView, stringForToolTip: NSView.ToolTipTag, point: NSPoint, userData: UnsafeMutableRawPointer?) -> String
	// @objc func willChange(_: NSKeyValueChange, valuesAtIndexes: IndexSet, forKey: String)
	// @objc func willChangeValueForKey(_: String)
	// @objc func willChangeValueForKey(_: String, withSetMutation: NSKeyValueSetMutationKind, usingObjects: Set<AnyObject>)
}

extension NSObject: NSObjectExports {
}
