import AppKit
import CloudKit
import JavaScriptCore

enum DelegateHandlerError: Error {
  case missingJSHandler
}

@objc class VueKitNode: NSObject, VueKitNodeJSExport {
  // MARK: - Static
  
  @objc static var Nodes: [NSView: VueKitNode] = [:]
  
  @objc class func create(_ view: NSView, _ key: JSValue, _ props: JSValue, _ emitEvent: JSValue, _ emitAction: JSValue) -> (VueKitNode) {
    return VueKitNode(view: view, key: key, props: props, emitEvent: JSManagedValue(value: emitEvent), emitAction: JSManagedValue(value: emitAction))
  }
  
  class func selectorToCallbackName(_ sel: Selector) -> String {
    let selector = "on" + String(describing: sel)
      .split(separator: ":")
      .enumerated()
      .map { String($0.element).capitalizingFirstLetter() }
      .joined()
    
    return selector
  }
  
  // MARK: - Initializers
  
  init(view: NSView, key: JSValue, props: JSValue, emitEvent: JSManagedValue, emitAction: JSManagedValue) {
    self.key = key
    self.props = props
    self.emitEvent = emitEvent
    self.emitAction = emitAction
    self.view = view
    self.children = []

    super.init()
    
    VueKitNode.Nodes[view] = self
    
    if let control = view as? NSControl {
      control.target = self
      control.action = #selector(self.action)
    }
    
    if let textField = view as? NSTextField {
      self.delegate = self
      textField.delegate = self.delegate as? NSTextFieldDelegate
    }
    
    if let splitView = view as? NSSplitView {
      self.delegate = self
      splitView.delegate = self.delegate as? NSSplitViewDelegate
    }
  }
  
  // MARK: - Overrides
  
  override func responds(to aSelector: Selector) -> Bool {
    let selector = String(describing: aSelector)
        
    if (selector == "control:textView:doCommandBySelector:") {
      return true;
    }

    let callbackName = VueKitNode.selectorToCallbackName(aSelector)

    // Never respond to private selectors (that start with an underscore)
    let selectorParts = selector.split(separator: ":")
    if selectorParts.first != nil, selectorParts.first!.starts(with: "_") {
      return false
    }
    
    let responds = props.hasProperty(callbackName)
    
    return responds
  }
  
  // MARK: - Instance Methods
  
  func callJSDelegate(_ propName: String, _ args: [Any]) throws -> JSValue? {
    guard props.hasProperty(propName), let fn = props.forProperty(propName) else {
      throw DelegateHandlerError.missingJSHandler
    }
        
    return fn.call(withArguments: [self] + args)
  }
  
  func handleDelegateInJS<T>(_ delegatePropName: String, _ args: [Any]) throws -> T {
    // This is a force-try, ultimately, because it is unknowable what to return
    // from unimplemented-in-js delegates. Working backwards from this fact, we must throw
    // in our VueKitNode delegate extension functions, since we can't know what to return.
    //
    // For example if a delegate fn returns [NSTextCheckingResult], but is unimplemented in js,
    // then we would need to construct a NSTextCheckingResult in that case to return *something*
    // to even make the swift compile. But how do we know how to construct arbitrary objects like this?
    //
    // So, since our delegate extensions all must throw when unimplemented, this function
    // which is called by them must as well. The good news is, "this should never fail",
    // because responds(to:) will check the node props for a js implementation of the delegate fn,
    // before allowing the objc runtime to send us these delegate selectors.
    
    let res = try! self.callJSDelegate(delegatePropName, args)
    
    print("(\(T.self)) \(delegatePropName) - JS response:", res!)
    
    let responseObject = res!.toObject()! as! T
    return responseObject
  }

  @objc func destroy() {
    if (self.view != nil) {
      VueKitNode.Nodes.removeValue(forKey: self.view!)
    }
  }
  
  @objc func action(_ sender: NSControl) {
    guard let event = NSApp.currentEvent else { return }
    guard let emit = emitAction.value else { return }
    emit.call(withArguments: [self, event, "\(event)"])
  }
  
  // MARK: - Properties
  
  var delegate: NSObject?
  
  var view: NSView?
  var children: [VueKitNode]
  
  // TODO: Memory leak! Change these to managed values. Right now they get GCed
  // immediately. Need to hold a ref to these somewhere to prevent GC
  var key: JSValue
  var props: JSValue
  var emitEvent: JSManagedValue
  var emitAction: JSManagedValue
}

@objc protocol VueKitNodeJSExport: JSExport {
  static func create(_ view: NSView, _ key: JSValue, _ props: JSValue, _ emitEvent: JSValue, _ emitAction: JSValue) -> (VueKitNode)
  
  var view: NSView? { @objc get @objc set }
  
  var children: [VueKitNode] { @objc get @objc set }

  var key: JSValue { @objc get @objc set }
  var props: JSValue { @objc get @objc set }
  var emitEvent: JSManagedValue { @objc get @objc set }
  var emitAction: JSManagedValue { @objc get @objc set }
  
  func destroy()
}
