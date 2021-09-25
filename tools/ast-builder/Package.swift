// swift-tools-version:5.3

import PackageDescription

let package = Package(
  name: "ast-builder",
  platforms: [
    .macOS(.v10_15)
  ],
  dependencies: [
    .package(name: "SwiftSyntax", url: "https://github.com/apple/swift-syntax", from: "0.0.1"),
    .package(name: "SwiftyJSON", url: "https://github.com/SwiftyJSON/SwiftyJSON", from: "5.0.0"),
  ],
  targets: [
    .target(
      name: "ast-builder",
      dependencies: [
        "SwiftSyntax",
        "SwiftyJSON",
      ])
  ]
)
