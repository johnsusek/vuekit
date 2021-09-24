import AppKit
import JavaScriptCore
import SwiftUI
//
//final class VueKitView: NSView {}
//
//extension VueKitView: NSViewRepresentable {
//  func makeNSView(context: Context) -> VueKitView {
//    let view = VueKitView()
//    return view
//  }
//
//  func updateNSView(_ view: VueKitView, context: Context) {
//  }
//}
//
//struct VueKitViewPreview: PreviewProvider {
//  static var previews: some View {
//    return BindingProvider(false) { binding in
//      VueKitView()
//      let VueKit = VueKit()
//      VueKit.loadBundle()
//
//      let view = VueKitView()
//      let rootView = VueKit.rootNode().controller.view
//      let windowContentView = rootView.superview!
//      view.addSubview(windowContentView)
//
//      windowContentView.translatesAutoresizingMaskIntoConstraints = false
//      windowContentView.topAnchor.constraint(equalTo: view.topAnchor).isActive = true
//      windowContentView.bottomAnchor.constraint(equalTo: view.bottomAnchor).isActive = true
//      windowContentView.leadingAnchor.constraint(equalTo: view.leadingAnchor).isActive = true
//      windowContentView.trailingAnchor.constraint(equalTo: view.trailingAnchor).isActive = true
//
//      return view
//    }
//  }
//}

//struct BindingProvider<StateT, Content: View>: View {
//  @State private var state: StateT
//  private var content: (_ binding: Binding<StateT>) -> Content
//
//  init(_ initialState: StateT, @ViewBuilder content: @escaping (_ binding: Binding<StateT>) -> Content) {
//    self.content = content
//    self._state = State(initialValue: initialState)
//  }
//
//  var body: some View {
//    self.content($state)
//  }
//}
