import AppKit
import JavaScriptCore

@objc protocol JSOverridableView: JSExport {
  @objc var draw: JSValue? { @objc get @objc set }
  @objc (drawRect:) func draw(_ dirtyRect: NSRect)
}

extension JSOverridableView {
  func drawOverride(_ dirtyRect: NSRect) {
    guard let draw = self.draw else { return }
    let jsDirtyRect = JSValue.init(rect: dirtyRect, in: BridgeTender.current.context)
    draw.call(withArguments: [jsDirtyRect as Any])
  }
}

