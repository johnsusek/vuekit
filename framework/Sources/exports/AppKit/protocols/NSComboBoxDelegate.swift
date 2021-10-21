import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AppKit
// Protocol 

@objc protocol NSComboBoxDelegateExports: JSExport, NSTextFieldDelegateExports {
  @objc func comboBoxSelectionDidChange(_: Notification)
  @objc func comboBoxSelectionIsChanging(_: Notification)
  @objc func comboBoxWillDismiss(_: Notification)
  @objc func comboBoxWillPopUp(_: Notification)
}

