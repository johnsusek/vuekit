import AppKit
import JavaScriptCore

class VueKitDev {
  let vueKit: VueKit
  var folderMonitorSource: DispatchSourceFileSystemObject?

  init(vueKit: VueKit) {
    self.vueKit = vueKit
  }

  func loadInjectionIII() {
    Bundle(path: "/Applications/InjectionIII.app/Contents/Resources/macOSInjection.bundle")!.load()
  }

  func startMonitoring() {
    guard let bundlePath = Bundle.main.path(forResource: "bundle", ofType: "js") else {
      print("Could not find bundle js")
      return
    }

    print("Start monitoring...", bundlePath)

    var monitoredFolderFileDescriptor = open(bundlePath, O_EVTONLY)
    let folderMonitorQueue = DispatchQueue(label: "FolderMonitorQueue", attributes: .concurrent)

    folderMonitorSource = DispatchSource.makeFileSystemObjectSource(
      fileDescriptor: monitoredFolderFileDescriptor, eventMask: .write, queue: folderMonitorQueue)

    folderMonitorSource!.setEventHandler {
      DispatchQueue.main.async { [weak self] in
        // TODO: Reload context
        print("Reloading")
      }
    }

    folderMonitorSource!.setCancelHandler {
      close(monitoredFolderFileDescriptor)
      monitoredFolderFileDescriptor = -1
    }

    folderMonitorSource!.resume()
  }
}
