import AppKit
import CloudKit
import JavaScriptCore

// NSApplication.shared.registerForRemoteNotifications()
// createSub()


class VueKitCloudStore {
  func createSub() {
    let subscription = CKQuerySubscription(
      recordType: "Recipe",
      predicate: NSPredicate(value: true),
      options: [.firesOnRecordCreation, .firesOnRecordUpdate, .firesOnRecordDeletion])
    
    let notification = CKSubscription.NotificationInfo()
    notification.shouldSendContentAvailable = true
    
    subscription.notificationInfo = notification
    
    let db = CKContainer.default().privateCloudDatabase
    db.save(subscription, completionHandler: subSaved)
  }
  
  func subSaved(savedSubscription: CKSubscription?, error: Error?) {
    guard let savedSubscription = savedSubscription, error == nil else {
      print(error as Any)
      return
    }
    
    print("subscription saved successfully", savedSubscription)
    // TODO: (probably want to save the subscriptionID in user defaults or something)
  }
}
