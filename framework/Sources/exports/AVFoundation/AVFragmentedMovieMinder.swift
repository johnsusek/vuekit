import AppKit
import JavaScriptCore
import Quartz
import AVKit
import CoreImage
import CoreGraphics
import AVFoundation

@objc protocol AVFragmentedMovieMinderExports: JSExport, AVFragmentedAssetMinderExports {
	// Static Methods

	// Instance Methods
	@objc (addFragmentedMovie:) func add(_: AVFragmentedMovie)
	@objc (removeFragmentedMovie:) func remove(_: AVFragmentedMovie)

	// Own Instance Properties
	@objc var movies: [AVFragmentedMovie] { @objc get }
}

extension AVFragmentedMovieMinder: AVFragmentedMovieMinderExports {}
