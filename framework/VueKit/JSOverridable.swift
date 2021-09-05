import AppKit
import JavaScriptCore

@objc protocol JSOverridable: JSExport {
  @objc var draw: JSValue? { @objc get @objc set }
  @objc (drawRect:) func draw(_ dirtyRect: NSRect)
}

extension JSOverridable {
  func drawOverride(_ dirtyRect: NSRect) {
    guard let draw = self.draw else { return }
    let jsDirtyRect = JSValue.init(rect: dirtyRect, in: VueKit.current.context)
    draw.call(withArguments: [jsDirtyRect as Any])
  }
}

