import AppKit

extension VueKitNode: NSTextFieldDelegate, NSControlTextEditingDelegate {
  
  //  optional func textField(_ textField: NSTextField, textView: NSTextView, candidatesForSelectedRange selectedRange: NSRange) -> [Any]?
  //  optional func textField(_ textField: NSTextField, textView: NSTextView, candidates: [NSTextCheckingResult], forSelectedRange selectedRange: NSRange) -> [NSTextCheckingResult]
  //  optional func textField(_ textField: NSTextField, textView: NSTextView, shouldSelectCandidateAt index: Int) -> Bool
  
  func textField(_ textField: NSTextField, textView: NSTextView, shouldSelectCandidateAt index: Int) -> Bool {
    return try! self.handleDelegateInJS("onShouldSelectCandidateAt", [textField, textView, index])
  }

  //  optional func controlTextDidBeginEditing(_ obj: Notification)
  //  optional func controlTextDidEndEditing(_ obj: Notification)
  //  optional func controlTextDidChange(_ obj: Notification)
  //  optional func control(_ control: NSControl, textShouldBeginEditing fieldEditor: NSText) -> Bool
  //  optional func control(_ control: NSControl, textShouldEndEditing fieldEditor: NSText) -> Bool
  
  func controlTextDidBeginEditing(_ obj: Notification) {
    _ = try! self.callJSDelegate("onControlTextDidBeginEditing", [])
  }
  
  func controlTextDidEndEditing(_ obj: Notification) {
    _ = try! self.callJSDelegate("onControlTextDidEndEditing", [])
  }
  
  func controlTextDidChange(_ obj: Notification) {
    _ = try! self.callJSDelegate("onControlTextDidChange", [])
  }
    
  func control(_ control: NSControl, textShouldEndEditing fieldEditor: NSText) -> Bool {
    return try! self.handleDelegateInJS("onTextShouldEndEditing", [control, fieldEditor])
  }
  
  func control(_ control: NSControl, textShouldBeginEditing fieldEditor: NSText) -> Bool {
    return try! self.handleDelegateInJS("onTextShouldBeginEditing", [control, fieldEditor])
  }
  
  //  optional func control(_ control: NSControl, didFailToFormatString string: String, errorDescription error: String?) -> Bool
  //  optional func control(_ control: NSControl, didFailToValidatePartialString string: String, errorDescription error: String?)
  //  optional func control(_ control: NSControl, isValidObject obj: Any?) -> Bool
  //  optional func control(_ control: NSControl, textView: NSTextView, doCommandBy commandSelector: Selector) -> Bool

  func control(_ control: NSControl, textView: NSTextView, doCommandBy commandSelector: Selector) -> Bool {
    let callbackName = VueKitNode.selectorToCallbackName(commandSelector)
    let preventDefault = false
    let responds = props.hasProperty(callbackName)
        
    if (!responds) {
      return preventDefault
    }
  
    guard props.hasProperty(callbackName), let fn = props.forProperty(callbackName) else {
      return preventDefault
    }
    
    fn.call(withArguments: [])
    
    return preventDefault
  }  
}
