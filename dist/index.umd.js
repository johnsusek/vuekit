(function(global2, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.VueKit = {}));
})(this, function(exports2) {
  "use strict";
  if (globalThis.hostLog) {
    let originalConsoleLog = console.log;
    console.log = (...data) => {
      originalConsoleLog(...data);
      globalThis.hostLog(...data);
    };
  }
  let global$2 = globalThis;
  var ByteCountFormatter;
  (function(ByteCountFormatter2) {
    let CountStyle;
    (function(CountStyle2) {
      CountStyle2[CountStyle2["File"] = 0] = "File";
      CountStyle2[CountStyle2["Memory"] = 1] = "Memory";
      CountStyle2[CountStyle2["Decimal"] = 2] = "Decimal";
      CountStyle2[CountStyle2["Binary"] = 3] = "Binary";
    })(CountStyle = ByteCountFormatter2.CountStyle || (ByteCountFormatter2.CountStyle = {}));
    global$2["ByteCountFormatter"]["CountStyle"] = CountStyle;
    let Units;
    (function(Units2) {
      Units2[Units2["UseDefault"] = 0] = "UseDefault";
      Units2[Units2["UseBytes"] = 1] = "UseBytes";
      Units2[Units2["UseKB"] = 2] = "UseKB";
      Units2[Units2["UseMB"] = 4] = "UseMB";
      Units2[Units2["UseGB"] = 8] = "UseGB";
      Units2[Units2["UseTB"] = 16] = "UseTB";
      Units2[Units2["UsePB"] = 32] = "UsePB";
      Units2[Units2["UseEB"] = 64] = "UseEB";
      Units2[Units2["UseZB"] = 128] = "UseZB";
      Units2[Units2["UseYBOrHigher"] = 65280] = "UseYBOrHigher";
      Units2[Units2["UseAll"] = 65535] = "UseAll";
    })(Units = ByteCountFormatter2.Units || (ByteCountFormatter2.Units = {}));
    global$2["ByteCountFormatter"]["Units"] = Units;
  })(ByteCountFormatter || (ByteCountFormatter = {}));
  var DateComponentsFormatter;
  (function(DateComponentsFormatter2) {
    let UnitsStyle;
    (function(UnitsStyle2) {
      UnitsStyle2[UnitsStyle2["Positional"] = 0] = "Positional";
      UnitsStyle2[UnitsStyle2["Abbreviated"] = 1] = "Abbreviated";
      UnitsStyle2[UnitsStyle2["Short"] = 2] = "Short";
      UnitsStyle2[UnitsStyle2["Full"] = 3] = "Full";
      UnitsStyle2[UnitsStyle2["SpellOut"] = 4] = "SpellOut";
      UnitsStyle2[UnitsStyle2["Brief"] = 5] = "Brief";
    })(UnitsStyle = DateComponentsFormatter2.UnitsStyle || (DateComponentsFormatter2.UnitsStyle = {}));
    global$2["DateComponentsFormatter"]["UnitsStyle"] = UnitsStyle;
    let ZeroFormattingBehavior;
    (function(ZeroFormattingBehavior2) {
      ZeroFormattingBehavior2[ZeroFormattingBehavior2["None"] = 0] = "None";
      ZeroFormattingBehavior2[ZeroFormattingBehavior2["Default"] = 1] = "Default";
      ZeroFormattingBehavior2[ZeroFormattingBehavior2["DropLeading"] = 2] = "DropLeading";
      ZeroFormattingBehavior2[ZeroFormattingBehavior2["DropMiddle"] = 4] = "DropMiddle";
      ZeroFormattingBehavior2[ZeroFormattingBehavior2["DropTrailing"] = 8] = "DropTrailing";
      ZeroFormattingBehavior2[ZeroFormattingBehavior2["DropAll"] = 14] = "DropAll";
      ZeroFormattingBehavior2[ZeroFormattingBehavior2["Pad"] = 65536] = "Pad";
    })(ZeroFormattingBehavior = DateComponentsFormatter2.ZeroFormattingBehavior || (DateComponentsFormatter2.ZeroFormattingBehavior = {}));
    global$2["DateComponentsFormatter"]["ZeroFormattingBehavior"] = ZeroFormattingBehavior;
  })(DateComponentsFormatter || (DateComponentsFormatter = {}));
  var DateFormatter;
  (function(DateFormatter2) {
    let Behavior;
    (function(Behavior2) {
      Behavior2[Behavior2["BehaviorDefault"] = 0] = "BehaviorDefault";
      Behavior2[Behavior2["Behavior10_0"] = 1e3] = "Behavior10_0";
      Behavior2[Behavior2["Behavior10_4"] = 1040] = "Behavior10_4";
    })(Behavior = DateFormatter2.Behavior || (DateFormatter2.Behavior = {}));
    global$2["DateFormatter"]["Behavior"] = Behavior;
    let Style;
    (function(Style2) {
      Style2[Style2["NoStyle"] = 0] = "NoStyle";
      Style2[Style2["ShortStyle"] = 1] = "ShortStyle";
      Style2[Style2["MediumStyle"] = 2] = "MediumStyle";
      Style2[Style2["LongStyle"] = 3] = "LongStyle";
      Style2[Style2["FullStyle"] = 4] = "FullStyle";
    })(Style = DateFormatter2.Style || (DateFormatter2.Style = {}));
    global$2["DateFormatter"]["Style"] = Style;
  })(DateFormatter || (DateFormatter = {}));
  var DateIntervalFormatter;
  (function(DateIntervalFormatter2) {
    let Style;
    (function(Style2) {
      Style2[Style2["NoStyle"] = 0] = "NoStyle";
      Style2[Style2["ShortStyle"] = 1] = "ShortStyle";
      Style2[Style2["MediumStyle"] = 2] = "MediumStyle";
      Style2[Style2["LongStyle"] = 3] = "LongStyle";
      Style2[Style2["FullStyle"] = 4] = "FullStyle";
    })(Style = DateIntervalFormatter2.Style || (DateIntervalFormatter2.Style = {}));
    global$2["DateIntervalFormatter"]["Style"] = Style;
  })(DateIntervalFormatter || (DateIntervalFormatter = {}));
  var DistributedNotificationCenter;
  (function(DistributedNotificationCenter2) {
    let Options;
    (function(Options2) {
      Options2[Options2["DeliverImmediately"] = 1] = "DeliverImmediately";
      Options2[Options2["PostToAllSessions"] = 2] = "PostToAllSessions";
    })(Options = DistributedNotificationCenter2.Options || (DistributedNotificationCenter2.Options = {}));
    global$2["DistributedNotificationCenter"]["Options"] = Options;
    let SuspensionBehavior;
    (function(SuspensionBehavior2) {
      SuspensionBehavior2[SuspensionBehavior2["Drop"] = 1] = "Drop";
      SuspensionBehavior2[SuspensionBehavior2["Coalesce"] = 2] = "Coalesce";
      SuspensionBehavior2[SuspensionBehavior2["Hold"] = 3] = "Hold";
      SuspensionBehavior2[SuspensionBehavior2["DeliverImmediately"] = 4] = "DeliverImmediately";
    })(SuspensionBehavior = DistributedNotificationCenter2.SuspensionBehavior || (DistributedNotificationCenter2.SuspensionBehavior = {}));
    global$2["DistributedNotificationCenter"]["SuspensionBehavior"] = SuspensionBehavior;
  })(DistributedNotificationCenter || (DistributedNotificationCenter = {}));
  var EnergyFormatter;
  (function(EnergyFormatter2) {
    let Unit2;
    (function(Unit3) {
      Unit3[Unit3["Joule"] = 11] = "Joule";
      Unit3[Unit3["Kilojoule"] = 14] = "Kilojoule";
      Unit3[Unit3["Calorie"] = 1793] = "Calorie";
      Unit3[Unit3["Kilocalorie"] = 1794] = "Kilocalorie";
    })(Unit2 = EnergyFormatter2.Unit || (EnergyFormatter2.Unit = {}));
    global$2["EnergyFormatter"]["Unit"] = Unit2;
  })(EnergyFormatter || (EnergyFormatter = {}));
  var FileManager;
  (function(FileManager2) {
    let DirectoryEnumerationOptions;
    (function(DirectoryEnumerationOptions2) {
      DirectoryEnumerationOptions2[DirectoryEnumerationOptions2["SkipsSubdirectoryDescendants"] = 1] = "SkipsSubdirectoryDescendants";
      DirectoryEnumerationOptions2[DirectoryEnumerationOptions2["SkipsPackageDescendants"] = 2] = "SkipsPackageDescendants";
      DirectoryEnumerationOptions2[DirectoryEnumerationOptions2["SkipsHiddenFiles"] = 4] = "SkipsHiddenFiles";
      DirectoryEnumerationOptions2[DirectoryEnumerationOptions2["IncludesDirectoriesPostOrder"] = 8] = "IncludesDirectoriesPostOrder";
      DirectoryEnumerationOptions2[DirectoryEnumerationOptions2["ProducesRelativePathURLs"] = 16] = "ProducesRelativePathURLs";
    })(DirectoryEnumerationOptions = FileManager2.DirectoryEnumerationOptions || (FileManager2.DirectoryEnumerationOptions = {}));
    global$2["FileManager"]["DirectoryEnumerationOptions"] = DirectoryEnumerationOptions;
    let ItemReplacementOptions;
    (function(ItemReplacementOptions2) {
      ItemReplacementOptions2[ItemReplacementOptions2["UsingNewMetadataOnly"] = 1] = "UsingNewMetadataOnly";
      ItemReplacementOptions2[ItemReplacementOptions2["WithoutDeletingBackupItem"] = 2] = "WithoutDeletingBackupItem";
    })(ItemReplacementOptions = FileManager2.ItemReplacementOptions || (FileManager2.ItemReplacementOptions = {}));
    global$2["FileManager"]["ItemReplacementOptions"] = ItemReplacementOptions;
    let UnmountOptions;
    (function(UnmountOptions2) {
      UnmountOptions2[UnmountOptions2["AllPartitionsAndEjectDisk"] = 1] = "AllPartitionsAndEjectDisk";
      UnmountOptions2[UnmountOptions2["WithoutUI"] = 2] = "WithoutUI";
    })(UnmountOptions = FileManager2.UnmountOptions || (FileManager2.UnmountOptions = {}));
    global$2["FileManager"]["UnmountOptions"] = UnmountOptions;
    let SearchPathDirectory;
    (function(SearchPathDirectory2) {
      SearchPathDirectory2[SearchPathDirectory2["ApplicationDirectory"] = 1] = "ApplicationDirectory";
      SearchPathDirectory2[SearchPathDirectory2["DemoApplicationDirectory"] = 2] = "DemoApplicationDirectory";
      SearchPathDirectory2[SearchPathDirectory2["DeveloperApplicationDirectory"] = 3] = "DeveloperApplicationDirectory";
      SearchPathDirectory2[SearchPathDirectory2["AdminApplicationDirectory"] = 4] = "AdminApplicationDirectory";
      SearchPathDirectory2[SearchPathDirectory2["LibraryDirectory"] = 5] = "LibraryDirectory";
      SearchPathDirectory2[SearchPathDirectory2["DeveloperDirectory"] = 6] = "DeveloperDirectory";
      SearchPathDirectory2[SearchPathDirectory2["UserDirectory"] = 7] = "UserDirectory";
      SearchPathDirectory2[SearchPathDirectory2["DocumentationDirectory"] = 8] = "DocumentationDirectory";
      SearchPathDirectory2[SearchPathDirectory2["DocumentDirectory"] = 9] = "DocumentDirectory";
      SearchPathDirectory2[SearchPathDirectory2["CoreServiceDirectory"] = 10] = "CoreServiceDirectory";
      SearchPathDirectory2[SearchPathDirectory2["AutosavedInformationDirectory"] = 11] = "AutosavedInformationDirectory";
      SearchPathDirectory2[SearchPathDirectory2["DesktopDirectory"] = 12] = "DesktopDirectory";
      SearchPathDirectory2[SearchPathDirectory2["CachesDirectory"] = 13] = "CachesDirectory";
      SearchPathDirectory2[SearchPathDirectory2["ApplicationSupportDirectory"] = 14] = "ApplicationSupportDirectory";
      SearchPathDirectory2[SearchPathDirectory2["DownloadsDirectory"] = 15] = "DownloadsDirectory";
      SearchPathDirectory2[SearchPathDirectory2["InputMethodsDirectory"] = 16] = "InputMethodsDirectory";
      SearchPathDirectory2[SearchPathDirectory2["MoviesDirectory"] = 17] = "MoviesDirectory";
      SearchPathDirectory2[SearchPathDirectory2["MusicDirectory"] = 18] = "MusicDirectory";
      SearchPathDirectory2[SearchPathDirectory2["PicturesDirectory"] = 19] = "PicturesDirectory";
      SearchPathDirectory2[SearchPathDirectory2["PrinterDescriptionDirectory"] = 20] = "PrinterDescriptionDirectory";
      SearchPathDirectory2[SearchPathDirectory2["SharedPublicDirectory"] = 21] = "SharedPublicDirectory";
      SearchPathDirectory2[SearchPathDirectory2["PreferencePanesDirectory"] = 22] = "PreferencePanesDirectory";
      SearchPathDirectory2[SearchPathDirectory2["ApplicationScriptsDirectory"] = 23] = "ApplicationScriptsDirectory";
      SearchPathDirectory2[SearchPathDirectory2["ItemReplacementDirectory"] = 99] = "ItemReplacementDirectory";
      SearchPathDirectory2[SearchPathDirectory2["AllApplicationsDirectory"] = 100] = "AllApplicationsDirectory";
      SearchPathDirectory2[SearchPathDirectory2["AllLibrariesDirectory"] = 101] = "AllLibrariesDirectory";
      SearchPathDirectory2[SearchPathDirectory2["TrashDirectory"] = 102] = "TrashDirectory";
    })(SearchPathDirectory = FileManager2.SearchPathDirectory || (FileManager2.SearchPathDirectory = {}));
    global$2["FileManager"]["SearchPathDirectory"] = SearchPathDirectory;
    let SearchPathDomainMask;
    (function(SearchPathDomainMask2) {
      SearchPathDomainMask2[SearchPathDomainMask2["UserDomainMask"] = 1] = "UserDomainMask";
      SearchPathDomainMask2[SearchPathDomainMask2["LocalDomainMask"] = 2] = "LocalDomainMask";
      SearchPathDomainMask2[SearchPathDomainMask2["NetworkDomainMask"] = 4] = "NetworkDomainMask";
      SearchPathDomainMask2[SearchPathDomainMask2["SystemDomainMask"] = 8] = "SystemDomainMask";
      SearchPathDomainMask2[SearchPathDomainMask2["AllDomainsMask"] = 65535] = "AllDomainsMask";
    })(SearchPathDomainMask = FileManager2.SearchPathDomainMask || (FileManager2.SearchPathDomainMask = {}));
    global$2["FileManager"]["SearchPathDomainMask"] = SearchPathDomainMask;
    let URLRelationship;
    (function(URLRelationship2) {
      URLRelationship2[URLRelationship2["Contains"] = 0] = "Contains";
      URLRelationship2[URLRelationship2["Same"] = 1] = "Same";
      URLRelationship2[URLRelationship2["Other"] = 2] = "Other";
    })(URLRelationship = FileManager2.URLRelationship || (FileManager2.URLRelationship = {}));
    global$2["FileManager"]["URLRelationship"] = URLRelationship;
    let VolumeEnumerationOptions;
    (function(VolumeEnumerationOptions2) {
      VolumeEnumerationOptions2[VolumeEnumerationOptions2["SkipHiddenVolumes"] = 2] = "SkipHiddenVolumes";
      VolumeEnumerationOptions2[VolumeEnumerationOptions2["ProduceFileReferenceURLs"] = 4] = "ProduceFileReferenceURLs";
    })(VolumeEnumerationOptions = FileManager2.VolumeEnumerationOptions || (FileManager2.VolumeEnumerationOptions = {}));
    global$2["FileManager"]["VolumeEnumerationOptions"] = VolumeEnumerationOptions;
  })(FileManager || (FileManager = {}));
  var FileWrapper;
  (function(FileWrapper2) {
    let ReadingOptions;
    (function(ReadingOptions2) {
      ReadingOptions2[ReadingOptions2["Immediate"] = 1] = "Immediate";
      ReadingOptions2[ReadingOptions2["WithoutMapping"] = 2] = "WithoutMapping";
    })(ReadingOptions = FileWrapper2.ReadingOptions || (FileWrapper2.ReadingOptions = {}));
    global$2["FileWrapper"]["ReadingOptions"] = ReadingOptions;
    let WritingOptions;
    (function(WritingOptions2) {
      WritingOptions2[WritingOptions2["Atomic"] = 1] = "Atomic";
      WritingOptions2[WritingOptions2["WithNameUpdating"] = 2] = "WithNameUpdating";
    })(WritingOptions = FileWrapper2.WritingOptions || (FileWrapper2.WritingOptions = {}));
    global$2["FileWrapper"]["WritingOptions"] = WritingOptions;
  })(FileWrapper || (FileWrapper = {}));
  var Formatter;
  (function(Formatter2) {
    let Context;
    (function(Context2) {
      Context2[Context2["Unknown"] = 0] = "Unknown";
      Context2[Context2["Dynamic"] = 1] = "Dynamic";
      Context2[Context2["Standalone"] = 2] = "Standalone";
      Context2[Context2["ListItem"] = 3] = "ListItem";
      Context2[Context2["BeginningOfSentence"] = 4] = "BeginningOfSentence";
      Context2[Context2["MiddleOfSentence"] = 5] = "MiddleOfSentence";
    })(Context = Formatter2.Context || (Formatter2.Context = {}));
    global$2["Formatter"]["Context"] = Context;
    let UnitStyle;
    (function(UnitStyle2) {
      UnitStyle2[UnitStyle2["Short"] = 1] = "Short";
      UnitStyle2[UnitStyle2["Medium"] = 2] = "Medium";
      UnitStyle2[UnitStyle2["Long"] = 3] = "Long";
    })(UnitStyle = Formatter2.UnitStyle || (Formatter2.UnitStyle = {}));
    global$2["Formatter"]["UnitStyle"] = UnitStyle;
  })(Formatter || (Formatter = {}));
  var HTTPCookie;
  (function(HTTPCookie2) {
    let AcceptPolicy;
    (function(AcceptPolicy2) {
      AcceptPolicy2[AcceptPolicy2["Always"] = 0] = "Always";
      AcceptPolicy2[AcceptPolicy2["Never"] = 1] = "Never";
      AcceptPolicy2[AcceptPolicy2["OnlyFromMainDocumentDomain"] = 2] = "OnlyFromMainDocumentDomain";
    })(AcceptPolicy = HTTPCookie2.AcceptPolicy || (HTTPCookie2.AcceptPolicy = {}));
    global$2["HTTPCookie"]["AcceptPolicy"] = AcceptPolicy;
  })(HTTPCookie || (HTTPCookie = {}));
  var ISO8601DateFormatter;
  (function(ISO8601DateFormatter2) {
    let Options;
    (function(Options2) {
      Options2[Options2["WithYear"] = 1] = "WithYear";
      Options2[Options2["WithMonth"] = 2] = "WithMonth";
      Options2[Options2["WithWeekOfYear"] = 4] = "WithWeekOfYear";
      Options2[Options2["WithDay"] = 16] = "WithDay";
      Options2[Options2["WithTime"] = 32] = "WithTime";
      Options2[Options2["WithTimeZone"] = 64] = "WithTimeZone";
      Options2[Options2["WithSpaceBetweenDateAndTime"] = 128] = "WithSpaceBetweenDateAndTime";
      Options2[Options2["WithDashSeparatorInDate"] = 256] = "WithDashSeparatorInDate";
      Options2[Options2["WithColonSeparatorInTime"] = 512] = "WithColonSeparatorInTime";
      Options2[Options2["WithColonSeparatorInTimeZone"] = 1024] = "WithColonSeparatorInTimeZone";
      Options2[Options2["WithFractionalSeconds"] = 2048] = "WithFractionalSeconds";
      Options2[Options2["WithFullDate"] = 275] = "WithFullDate";
      Options2[Options2["WithFullTime"] = 1632] = "WithFullTime";
      Options2[Options2["WithInternetDateTime"] = 1907] = "WithInternetDateTime";
    })(Options = ISO8601DateFormatter2.Options || (ISO8601DateFormatter2.Options = {}));
    global$2["ISO8601DateFormatter"]["Options"] = Options;
  })(ISO8601DateFormatter || (ISO8601DateFormatter = {}));
  var JSONSerialization;
  (function(JSONSerialization2) {
    let ReadingOptions;
    (function(ReadingOptions2) {
      ReadingOptions2[ReadingOptions2["MutableContainers"] = 1] = "MutableContainers";
      ReadingOptions2[ReadingOptions2["MutableLeaves"] = 2] = "MutableLeaves";
      ReadingOptions2[ReadingOptions2["FragmentsAllowed"] = 4] = "FragmentsAllowed";
      ReadingOptions2[ReadingOptions2["AllowFragments"] = 4] = "AllowFragments";
    })(ReadingOptions = JSONSerialization2.ReadingOptions || (JSONSerialization2.ReadingOptions = {}));
    global$2["JSONSerialization"]["ReadingOptions"] = ReadingOptions;
    let WritingOptions;
    (function(WritingOptions2) {
      WritingOptions2[WritingOptions2["PrettyPrinted"] = 1] = "PrettyPrinted";
      WritingOptions2[WritingOptions2["SortedKeys"] = 2] = "SortedKeys";
      WritingOptions2[WritingOptions2["FragmentsAllowed"] = 4] = "FragmentsAllowed";
      WritingOptions2[WritingOptions2["WithoutEscapingSlashes"] = 8] = "WithoutEscapingSlashes";
    })(WritingOptions = JSONSerialization2.WritingOptions || (JSONSerialization2.WritingOptions = {}));
    global$2["JSONSerialization"]["WritingOptions"] = WritingOptions;
  })(JSONSerialization || (JSONSerialization = {}));
  var LengthFormatter;
  (function(LengthFormatter2) {
    let Unit2;
    (function(Unit3) {
      Unit3[Unit3["Millimeter"] = 8] = "Millimeter";
      Unit3[Unit3["Centimeter"] = 9] = "Centimeter";
      Unit3[Unit3["Meter"] = 11] = "Meter";
      Unit3[Unit3["Kilometer"] = 14] = "Kilometer";
      Unit3[Unit3["Inch"] = 1281] = "Inch";
      Unit3[Unit3["Foot"] = 1282] = "Foot";
      Unit3[Unit3["Yard"] = 1283] = "Yard";
      Unit3[Unit3["Mile"] = 1284] = "Mile";
    })(Unit2 = LengthFormatter2.Unit || (LengthFormatter2.Unit = {}));
    global$2["LengthFormatter"]["Unit"] = Unit2;
  })(LengthFormatter || (LengthFormatter = {}));
  var MassFormatter;
  (function(MassFormatter2) {
    let Unit2;
    (function(Unit3) {
      Unit3[Unit3["Gram"] = 11] = "Gram";
      Unit3[Unit3["Kilogram"] = 14] = "Kilogram";
      Unit3[Unit3["Ounce"] = 1537] = "Ounce";
      Unit3[Unit3["Pound"] = 1538] = "Pound";
      Unit3[Unit3["Stone"] = 1539] = "Stone";
    })(Unit2 = MassFormatter2.Unit || (MassFormatter2.Unit = {}));
    global$2["MassFormatter"]["Unit"] = Unit2;
  })(MassFormatter || (MassFormatter = {}));
  var MeasurementFormatter;
  (function(MeasurementFormatter2) {
    let UnitOptions;
    (function(UnitOptions2) {
      UnitOptions2[UnitOptions2["ProvidedUnit"] = 1] = "ProvidedUnit";
      UnitOptions2[UnitOptions2["NaturalScale"] = 2] = "NaturalScale";
      UnitOptions2[UnitOptions2["TemperatureWithoutUnit"] = 4] = "TemperatureWithoutUnit";
    })(UnitOptions = MeasurementFormatter2.UnitOptions || (MeasurementFormatter2.UnitOptions = {}));
    global$2["MeasurementFormatter"]["UnitOptions"] = UnitOptions;
  })(MeasurementFormatter || (MeasurementFormatter = {}));
  var NSAccessibility;
  (function(NSAccessibility2) {
    let AnnotationPosition;
    (function(AnnotationPosition2) {
      AnnotationPosition2[AnnotationPosition2["FullRange"] = 0] = "FullRange";
      AnnotationPosition2[AnnotationPosition2["Start"] = 1] = "Start";
      AnnotationPosition2[AnnotationPosition2["End"] = 2] = "End";
    })(AnnotationPosition = NSAccessibility2.AnnotationPosition || (NSAccessibility2.AnnotationPosition = {}));
    global$2["NSAccessibility"]["AnnotationPosition"] = AnnotationPosition;
    let Orientation;
    (function(Orientation2) {
      Orientation2[Orientation2["Unknown"] = 0] = "Unknown";
      Orientation2[Orientation2["Vertical"] = 1] = "Vertical";
      Orientation2[Orientation2["Horizontal"] = 2] = "Horizontal";
    })(Orientation = NSAccessibility2.Orientation || (NSAccessibility2.Orientation = {}));
    global$2["NSAccessibility"]["Orientation"] = Orientation;
    let RulerMarkerType;
    (function(RulerMarkerType2) {
      RulerMarkerType2[RulerMarkerType2["Unknown"] = 0] = "Unknown";
      RulerMarkerType2[RulerMarkerType2["TabStopLeft"] = 1] = "TabStopLeft";
      RulerMarkerType2[RulerMarkerType2["TabStopRight"] = 2] = "TabStopRight";
      RulerMarkerType2[RulerMarkerType2["TabStopCenter"] = 3] = "TabStopCenter";
      RulerMarkerType2[RulerMarkerType2["TabStopDecimal"] = 4] = "TabStopDecimal";
      RulerMarkerType2[RulerMarkerType2["IndentHead"] = 5] = "IndentHead";
      RulerMarkerType2[RulerMarkerType2["IndentTail"] = 6] = "IndentTail";
      RulerMarkerType2[RulerMarkerType2["IndentFirstLine"] = 7] = "IndentFirstLine";
    })(RulerMarkerType = NSAccessibility2.RulerMarkerType || (NSAccessibility2.RulerMarkerType = {}));
    global$2["NSAccessibility"]["RulerMarkerType"] = RulerMarkerType;
    let SortDirection;
    (function(SortDirection2) {
      SortDirection2[SortDirection2["Unknown"] = 0] = "Unknown";
      SortDirection2[SortDirection2["Ascending"] = 1] = "Ascending";
      SortDirection2[SortDirection2["Descending"] = 2] = "Descending";
    })(SortDirection = NSAccessibility2.SortDirection || (NSAccessibility2.SortDirection = {}));
    global$2["NSAccessibility"]["SortDirection"] = SortDirection;
    let Units;
    (function(Units2) {
      Units2[Units2["Unknown"] = 0] = "Unknown";
      Units2[Units2["Inches"] = 1] = "Inches";
      Units2[Units2["Centimeters"] = 2] = "Centimeters";
      Units2[Units2["Points"] = 3] = "Points";
      Units2[Units2["Picas"] = 4] = "Picas";
    })(Units = NSAccessibility2.Units || (NSAccessibility2.Units = {}));
    global$2["NSAccessibility"]["Units"] = Units;
  })(NSAccessibility || (NSAccessibility = {}));
  var NSAccessibilityCustomRotor;
  (function(NSAccessibilityCustomRotor2) {
    let SearchDirection;
    (function(SearchDirection2) {
      SearchDirection2[SearchDirection2["Previous"] = 0] = "Previous";
      SearchDirection2[SearchDirection2["Next"] = 1] = "Next";
    })(SearchDirection = NSAccessibilityCustomRotor2.SearchDirection || (NSAccessibilityCustomRotor2.SearchDirection = {}));
    global$2["NSAccessibilityCustomRotor"]["SearchDirection"] = SearchDirection;
    let RotorType;
    (function(RotorType2) {
      RotorType2[RotorType2["Custom"] = 0] = "Custom";
      RotorType2[RotorType2["Any"] = 1] = "Any";
      RotorType2[RotorType2["Annotation"] = 2] = "Annotation";
      RotorType2[RotorType2["BoldText"] = 3] = "BoldText";
      RotorType2[RotorType2["Heading"] = 4] = "Heading";
      RotorType2[RotorType2["HeadingLevel1"] = 5] = "HeadingLevel1";
      RotorType2[RotorType2["HeadingLevel2"] = 6] = "HeadingLevel2";
      RotorType2[RotorType2["HeadingLevel3"] = 7] = "HeadingLevel3";
      RotorType2[RotorType2["HeadingLevel4"] = 8] = "HeadingLevel4";
      RotorType2[RotorType2["HeadingLevel5"] = 9] = "HeadingLevel5";
      RotorType2[RotorType2["HeadingLevel6"] = 10] = "HeadingLevel6";
      RotorType2[RotorType2["Image"] = 11] = "Image";
      RotorType2[RotorType2["ItalicText"] = 12] = "ItalicText";
      RotorType2[RotorType2["Landmark"] = 13] = "Landmark";
      RotorType2[RotorType2["Link"] = 14] = "Link";
      RotorType2[RotorType2["List"] = 15] = "List";
      RotorType2[RotorType2["MisspelledWord"] = 16] = "MisspelledWord";
      RotorType2[RotorType2["Table"] = 17] = "Table";
      RotorType2[RotorType2["TextField"] = 18] = "TextField";
      RotorType2[RotorType2["UnderlinedText"] = 19] = "UnderlinedText";
      RotorType2[RotorType2["VisitedLink"] = 20] = "VisitedLink";
    })(RotorType = NSAccessibilityCustomRotor2.RotorType || (NSAccessibilityCustomRotor2.RotorType = {}));
    global$2["NSAccessibilityCustomRotor"]["RotorType"] = RotorType;
  })(NSAccessibilityCustomRotor || (NSAccessibilityCustomRotor = {}));
  var NSAlert;
  (function(NSAlert2) {
    let Style;
    (function(Style2) {
      Style2[Style2["Warning"] = 0] = "Warning";
      Style2[Style2["Informational"] = 1] = "Informational";
      Style2[Style2["Critical"] = 2] = "Critical";
    })(Style = NSAlert2.Style || (NSAlert2.Style = {}));
    global$2["NSAlert"]["Style"] = Style;
  })(NSAlert || (NSAlert = {}));
  var NSAnimation;
  (function(NSAnimation2) {
    let BlockingMode;
    (function(BlockingMode2) {
      BlockingMode2[BlockingMode2["Blocking"] = 0] = "Blocking";
      BlockingMode2[BlockingMode2["Nonblocking"] = 1] = "Nonblocking";
      BlockingMode2[BlockingMode2["NonblockingThreaded"] = 2] = "NonblockingThreaded";
    })(BlockingMode = NSAnimation2.BlockingMode || (NSAnimation2.BlockingMode = {}));
    global$2["NSAnimation"]["BlockingMode"] = BlockingMode;
    let Curve;
    (function(Curve2) {
      Curve2[Curve2["EaseInOut"] = 0] = "EaseInOut";
      Curve2[Curve2["EaseIn"] = 1] = "EaseIn";
      Curve2[Curve2["EaseOut"] = 2] = "EaseOut";
      Curve2[Curve2["Linear"] = 3] = "Linear";
    })(Curve = NSAnimation2.Curve || (NSAnimation2.Curve = {}));
    global$2["NSAnimation"]["Curve"] = Curve;
  })(NSAnimation || (NSAnimation = {}));
  var NSAppleEventDescriptor;
  (function(NSAppleEventDescriptor2) {
    let SendOptions;
    (function(SendOptions2) {
      SendOptions2[SendOptions2["NoReply"] = 1] = "NoReply";
      SendOptions2[SendOptions2["QueueReply"] = 2] = "QueueReply";
      SendOptions2[SendOptions2["WaitForReply"] = 3] = "WaitForReply";
      SendOptions2[SendOptions2["NeverInteract"] = 16] = "NeverInteract";
      SendOptions2[SendOptions2["CanInteract"] = 32] = "CanInteract";
      SendOptions2[SendOptions2["AlwaysInteract"] = 48] = "AlwaysInteract";
      SendOptions2[SendOptions2["CanSwitchLayer"] = 64] = "CanSwitchLayer";
      SendOptions2[SendOptions2["DontRecord"] = 4096] = "DontRecord";
      SendOptions2[SendOptions2["DontExecute"] = 8192] = "DontExecute";
      SendOptions2[SendOptions2["DontAnnotate"] = 65536] = "DontAnnotate";
      SendOptions2[SendOptions2["DefaultOptions"] = 35] = "DefaultOptions";
    })(SendOptions = NSAppleEventDescriptor2.SendOptions || (NSAppleEventDescriptor2.SendOptions = {}));
    global$2["NSAppleEventDescriptor"]["SendOptions"] = SendOptions;
  })(NSAppleEventDescriptor || (NSAppleEventDescriptor = {}));
  var NSApplication;
  (function(NSApplication2) {
    let ActivationOptions;
    (function(ActivationOptions2) {
      ActivationOptions2[ActivationOptions2["ActivateAllWindows"] = 1] = "ActivateAllWindows";
      ActivationOptions2[ActivationOptions2["ActivateIgnoringOtherApps"] = 2] = "ActivateIgnoringOtherApps";
    })(ActivationOptions = NSApplication2.ActivationOptions || (NSApplication2.ActivationOptions = {}));
    global$2["NSApplication"]["ActivationOptions"] = ActivationOptions;
    let ActivationPolicy;
    (function(ActivationPolicy2) {
      ActivationPolicy2[ActivationPolicy2["Regular"] = 0] = "Regular";
      ActivationPolicy2[ActivationPolicy2["Accessory"] = 1] = "Accessory";
      ActivationPolicy2[ActivationPolicy2["Prohibited"] = 2] = "Prohibited";
    })(ActivationPolicy = NSApplication2.ActivationPolicy || (NSApplication2.ActivationPolicy = {}));
    global$2["NSApplication"]["ActivationPolicy"] = ActivationPolicy;
    let DelegateReply;
    (function(DelegateReply2) {
      DelegateReply2[DelegateReply2["Success"] = 0] = "Success";
      DelegateReply2[DelegateReply2["Cancel"] = 1] = "Cancel";
      DelegateReply2[DelegateReply2["Failure"] = 2] = "Failure";
    })(DelegateReply = NSApplication2.DelegateReply || (NSApplication2.DelegateReply = {}));
    global$2["NSApplication"]["DelegateReply"] = DelegateReply;
    let OcclusionState;
    (function(OcclusionState2) {
      OcclusionState2[OcclusionState2["Visible"] = 2] = "Visible";
    })(OcclusionState = NSApplication2.OcclusionState || (NSApplication2.OcclusionState = {}));
    global$2["NSApplication"]["OcclusionState"] = OcclusionState;
    let PresentationOptions;
    (function(PresentationOptions2) {
      PresentationOptions2[PresentationOptions2["Default"] = 0] = "Default";
      PresentationOptions2[PresentationOptions2["AutoHideDock"] = 1] = "AutoHideDock";
      PresentationOptions2[PresentationOptions2["HideDock"] = 2] = "HideDock";
      PresentationOptions2[PresentationOptions2["AutoHideMenuBar"] = 4] = "AutoHideMenuBar";
      PresentationOptions2[PresentationOptions2["HideMenuBar"] = 8] = "HideMenuBar";
      PresentationOptions2[PresentationOptions2["DisableAppleMenu"] = 16] = "DisableAppleMenu";
      PresentationOptions2[PresentationOptions2["DisableProcessSwitching"] = 32] = "DisableProcessSwitching";
      PresentationOptions2[PresentationOptions2["DisableForceQuit"] = 64] = "DisableForceQuit";
      PresentationOptions2[PresentationOptions2["DisableSessionTermination"] = 128] = "DisableSessionTermination";
      PresentationOptions2[PresentationOptions2["DisableHideApplication"] = 256] = "DisableHideApplication";
      PresentationOptions2[PresentationOptions2["DisableMenuBarTransparency"] = 512] = "DisableMenuBarTransparency";
      PresentationOptions2[PresentationOptions2["FullScreen"] = 1024] = "FullScreen";
      PresentationOptions2[PresentationOptions2["AutoHideToolbar"] = 2048] = "AutoHideToolbar";
      PresentationOptions2[PresentationOptions2["DisableCursorLocationAssistance"] = 4096] = "DisableCursorLocationAssistance";
    })(PresentationOptions = NSApplication2.PresentationOptions || (NSApplication2.PresentationOptions = {}));
    global$2["NSApplication"]["PresentationOptions"] = PresentationOptions;
    let PrintReply;
    (function(PrintReply2) {
      PrintReply2[PrintReply2["PrintingCancelled"] = 0] = "PrintingCancelled";
      PrintReply2[PrintReply2["PrintingSuccess"] = 1] = "PrintingSuccess";
      PrintReply2[PrintReply2["PrintingFailure"] = 3] = "PrintingFailure";
      PrintReply2[PrintReply2["PrintingReplyLater"] = 2] = "PrintingReplyLater";
    })(PrintReply = NSApplication2.PrintReply || (NSApplication2.PrintReply = {}));
    global$2["NSApplication"]["PrintReply"] = PrintReply;
    let TerminateReply;
    (function(TerminateReply2) {
      TerminateReply2[TerminateReply2["TerminateCancel"] = 0] = "TerminateCancel";
      TerminateReply2[TerminateReply2["TerminateNow"] = 1] = "TerminateNow";
      TerminateReply2[TerminateReply2["TerminateLater"] = 2] = "TerminateLater";
    })(TerminateReply = NSApplication2.TerminateReply || (NSApplication2.TerminateReply = {}));
    global$2["NSApplication"]["TerminateReply"] = TerminateReply;
    let RemoteNotificationType;
    (function(RemoteNotificationType2) {
      RemoteNotificationType2[RemoteNotificationType2["None"] = 0] = "None";
      RemoteNotificationType2[RemoteNotificationType2["Badge"] = 1] = "Badge";
      RemoteNotificationType2[RemoteNotificationType2["Sound"] = 2] = "Sound";
      RemoteNotificationType2[RemoteNotificationType2["Alert"] = 4] = "Alert";
    })(RemoteNotificationType = NSApplication2.RemoteNotificationType || (NSApplication2.RemoteNotificationType = {}));
    global$2["NSApplication"]["RemoteNotificationType"] = RemoteNotificationType;
    let RequestUserAttentionType;
    (function(RequestUserAttentionType2) {
      RequestUserAttentionType2[RequestUserAttentionType2["CriticalRequest"] = 0] = "CriticalRequest";
      RequestUserAttentionType2[RequestUserAttentionType2["InformationalRequest"] = 10] = "InformationalRequest";
    })(RequestUserAttentionType = NSApplication2.RequestUserAttentionType || (NSApplication2.RequestUserAttentionType = {}));
    global$2["NSApplication"]["RequestUserAttentionType"] = RequestUserAttentionType;
    let WindowListOptions;
    (function(WindowListOptions2) {
      WindowListOptions2[WindowListOptions2["OrderedFrontToBack"] = 1] = "OrderedFrontToBack";
    })(WindowListOptions = NSApplication2.WindowListOptions || (NSApplication2.WindowListOptions = {}));
    global$2["NSApplication"]["WindowListOptions"] = WindowListOptions;
  })(NSApplication || (NSApplication = {}));
  var NSAttributedString;
  (function(NSAttributedString2) {
    let SpellingState;
    (function(SpellingState2) {
      SpellingState2[SpellingState2["SpellingFlag"] = 1] = "SpellingFlag";
      SpellingState2[SpellingState2["GrammarFlag"] = 2] = "GrammarFlag";
    })(SpellingState = NSAttributedString2.SpellingState || (NSAttributedString2.SpellingState = {}));
    global$2["NSAttributedString"]["SpellingState"] = SpellingState;
    let EnumerationOptions;
    (function(EnumerationOptions2) {
      EnumerationOptions2[EnumerationOptions2["Reverse"] = 2] = "Reverse";
      EnumerationOptions2[EnumerationOptions2["LongestEffectiveRangeNotRequired"] = 1048576] = "LongestEffectiveRangeNotRequired";
    })(EnumerationOptions = NSAttributedString2.EnumerationOptions || (NSAttributedString2.EnumerationOptions = {}));
    global$2["NSAttributedString"]["EnumerationOptions"] = EnumerationOptions;
  })(NSAttributedString || (NSAttributedString = {}));
  var NSBackgroundActivityScheduler;
  (function(NSBackgroundActivityScheduler2) {
    let Result;
    (function(Result2) {
      Result2[Result2["Finished"] = 1] = "Finished";
      Result2[Result2["Deferred"] = 2] = "Deferred";
    })(Result = NSBackgroundActivityScheduler2.Result || (NSBackgroundActivityScheduler2.Result = {}));
    global$2["NSBackgroundActivityScheduler"]["Result"] = Result;
  })(NSBackgroundActivityScheduler || (NSBackgroundActivityScheduler = {}));
  var NSBezierPath;
  (function(NSBezierPath2) {
    let ElementType;
    (function(ElementType2) {
      ElementType2[ElementType2["MoveTo"] = 0] = "MoveTo";
      ElementType2[ElementType2["LineTo"] = 1] = "LineTo";
      ElementType2[ElementType2["CurveTo"] = 2] = "CurveTo";
      ElementType2[ElementType2["ClosePath"] = 3] = "ClosePath";
    })(ElementType = NSBezierPath2.ElementType || (NSBezierPath2.ElementType = {}));
    global$2["NSBezierPath"]["ElementType"] = ElementType;
    let LineCapStyle;
    (function(LineCapStyle2) {
      LineCapStyle2[LineCapStyle2["Butt"] = 0] = "Butt";
      LineCapStyle2[LineCapStyle2["Round"] = 1] = "Round";
      LineCapStyle2[LineCapStyle2["Square"] = 2] = "Square";
    })(LineCapStyle = NSBezierPath2.LineCapStyle || (NSBezierPath2.LineCapStyle = {}));
    global$2["NSBezierPath"]["LineCapStyle"] = LineCapStyle;
    let LineJoinStyle;
    (function(LineJoinStyle2) {
      LineJoinStyle2[LineJoinStyle2["Miter"] = 0] = "Miter";
      LineJoinStyle2[LineJoinStyle2["Round"] = 1] = "Round";
      LineJoinStyle2[LineJoinStyle2["Bevel"] = 2] = "Bevel";
    })(LineJoinStyle = NSBezierPath2.LineJoinStyle || (NSBezierPath2.LineJoinStyle = {}));
    global$2["NSBezierPath"]["LineJoinStyle"] = LineJoinStyle;
    let WindingRule;
    (function(WindingRule2) {
      WindingRule2[WindingRule2["NonZero"] = 0] = "NonZero";
      WindingRule2[WindingRule2["EvenOdd"] = 1] = "EvenOdd";
    })(WindingRule = NSBezierPath2.WindingRule || (NSBezierPath2.WindingRule = {}));
    global$2["NSBezierPath"]["WindingRule"] = WindingRule;
  })(NSBezierPath || (NSBezierPath = {}));
  var NSBitmapImageRep;
  (function(NSBitmapImageRep2) {
    let Format;
    (function(Format2) {
      Format2[Format2["AlphaFirst"] = 1] = "AlphaFirst";
      Format2[Format2["AlphaNonpremultiplied"] = 2] = "AlphaNonpremultiplied";
      Format2[Format2["FloatingPointSamples"] = 4] = "FloatingPointSamples";
      Format2[Format2["SixteenBitLittleEndian"] = 256] = "SixteenBitLittleEndian";
      Format2[Format2["ThirtyTwoBitLittleEndian"] = 512] = "ThirtyTwoBitLittleEndian";
      Format2[Format2["SixteenBitBigEndian"] = 1024] = "SixteenBitBigEndian";
      Format2[Format2["ThirtyTwoBitBigEndian"] = 2048] = "ThirtyTwoBitBigEndian";
    })(Format = NSBitmapImageRep2.Format || (NSBitmapImageRep2.Format = {}));
    global$2["NSBitmapImageRep"]["Format"] = Format;
    let FileType;
    (function(FileType2) {
      FileType2[FileType2["TIFF"] = 0] = "TIFF";
      FileType2[FileType2["BMP"] = 1] = "BMP";
      FileType2[FileType2["GIF"] = 2] = "GIF";
      FileType2[FileType2["JPEG"] = 3] = "JPEG";
      FileType2[FileType2["PNG"] = 4] = "PNG";
      FileType2[FileType2["JPEG2000"] = 5] = "JPEG2000";
    })(FileType = NSBitmapImageRep2.FileType || (NSBitmapImageRep2.FileType = {}));
    global$2["NSBitmapImageRep"]["FileType"] = FileType;
    let LoadStatus;
    (function(LoadStatus2) {
      LoadStatus2[LoadStatus2["UnknownType"] = -1] = "UnknownType";
      LoadStatus2[LoadStatus2["ReadingHeader"] = -2] = "ReadingHeader";
      LoadStatus2[LoadStatus2["WillNeedAllData"] = -3] = "WillNeedAllData";
      LoadStatus2[LoadStatus2["InvalidData"] = -4] = "InvalidData";
      LoadStatus2[LoadStatus2["UnexpectedEOF"] = -5] = "UnexpectedEOF";
      LoadStatus2[LoadStatus2["Completed"] = -6] = "Completed";
    })(LoadStatus = NSBitmapImageRep2.LoadStatus || (NSBitmapImageRep2.LoadStatus = {}));
    global$2["NSBitmapImageRep"]["LoadStatus"] = LoadStatus;
    let TIFFCompression;
    (function(TIFFCompression2) {
      TIFFCompression2[TIFFCompression2["None"] = 1] = "None";
      TIFFCompression2[TIFFCompression2["CCITTFAX3"] = 3] = "CCITTFAX3";
      TIFFCompression2[TIFFCompression2["CCITTFAX4"] = 4] = "CCITTFAX4";
      TIFFCompression2[TIFFCompression2["LZW"] = 5] = "LZW";
      TIFFCompression2[TIFFCompression2["JPEG"] = 6] = "JPEG";
      TIFFCompression2[TIFFCompression2["NEXT"] = 32766] = "NEXT";
      TIFFCompression2[TIFFCompression2["PackBits"] = 32773] = "PackBits";
      TIFFCompression2[TIFFCompression2["OldJPEG"] = 32865] = "OldJPEG";
    })(TIFFCompression = NSBitmapImageRep2.TIFFCompression || (NSBitmapImageRep2.TIFFCompression = {}));
    global$2["NSBitmapImageRep"]["TIFFCompression"] = TIFFCompression;
  })(NSBitmapImageRep || (NSBitmapImageRep = {}));
  var NSBox$1;
  (function(NSBox2) {
    let BoxType;
    (function(BoxType2) {
      BoxType2[BoxType2["Primary"] = 0] = "Primary";
      BoxType2[BoxType2["Separator"] = 2] = "Separator";
      BoxType2[BoxType2["Custom"] = 4] = "Custom";
    })(BoxType = NSBox2.BoxType || (NSBox2.BoxType = {}));
    global$2["NSBox"]["BoxType"] = BoxType;
    let TitlePosition;
    (function(TitlePosition2) {
      TitlePosition2[TitlePosition2["NoTitle"] = 0] = "NoTitle";
      TitlePosition2[TitlePosition2["AboveTop"] = 1] = "AboveTop";
      TitlePosition2[TitlePosition2["AtTop"] = 2] = "AtTop";
      TitlePosition2[TitlePosition2["BelowTop"] = 3] = "BelowTop";
      TitlePosition2[TitlePosition2["AboveBottom"] = 4] = "AboveBottom";
      TitlePosition2[TitlePosition2["AtBottom"] = 5] = "AtBottom";
      TitlePosition2[TitlePosition2["BelowBottom"] = 6] = "BelowBottom";
    })(TitlePosition = NSBox2.TitlePosition || (NSBox2.TitlePosition = {}));
    global$2["NSBox"]["TitlePosition"] = TitlePosition;
  })(NSBox$1 || (NSBox$1 = {}));
  var NSBrowser$1;
  (function(NSBrowser2) {
    let ColumnResizingType;
    (function(ColumnResizingType2) {
      ColumnResizingType2[ColumnResizingType2["NoColumnResizing"] = 0] = "NoColumnResizing";
      ColumnResizingType2[ColumnResizingType2["AutoColumnResizing"] = 1] = "AutoColumnResizing";
      ColumnResizingType2[ColumnResizingType2["UserColumnResizing"] = 2] = "UserColumnResizing";
    })(ColumnResizingType = NSBrowser2.ColumnResizingType || (NSBrowser2.ColumnResizingType = {}));
    global$2["NSBrowser"]["ColumnResizingType"] = ColumnResizingType;
    let DropOperation;
    (function(DropOperation2) {
      DropOperation2[DropOperation2["On"] = 0] = "On";
      DropOperation2[DropOperation2["Above"] = 1] = "Above";
    })(DropOperation = NSBrowser2.DropOperation || (NSBrowser2.DropOperation = {}));
    global$2["NSBrowser"]["DropOperation"] = DropOperation;
  })(NSBrowser$1 || (NSBrowser$1 = {}));
  var NSButton$1;
  (function(NSButton2) {
    let BezelStyle;
    (function(BezelStyle2) {
      BezelStyle2[BezelStyle2["Rounded"] = 1] = "Rounded";
      BezelStyle2[BezelStyle2["RegularSquare"] = 2] = "RegularSquare";
      BezelStyle2[BezelStyle2["Disclosure"] = 5] = "Disclosure";
      BezelStyle2[BezelStyle2["ShadowlessSquare"] = 6] = "ShadowlessSquare";
      BezelStyle2[BezelStyle2["Circular"] = 7] = "Circular";
      BezelStyle2[BezelStyle2["TexturedSquare"] = 8] = "TexturedSquare";
      BezelStyle2[BezelStyle2["HelpButton"] = 9] = "HelpButton";
      BezelStyle2[BezelStyle2["SmallSquare"] = 10] = "SmallSquare";
      BezelStyle2[BezelStyle2["TexturedRounded"] = 11] = "TexturedRounded";
      BezelStyle2[BezelStyle2["RoundRect"] = 12] = "RoundRect";
      BezelStyle2[BezelStyle2["Recessed"] = 13] = "Recessed";
      BezelStyle2[BezelStyle2["RoundedDisclosure"] = 14] = "RoundedDisclosure";
      BezelStyle2[BezelStyle2["Inline"] = 15] = "Inline";
    })(BezelStyle = NSButton2.BezelStyle || (NSButton2.BezelStyle = {}));
    global$2["NSButton"]["BezelStyle"] = BezelStyle;
    let ButtonType;
    (function(ButtonType2) {
      ButtonType2[ButtonType2["MomentaryLight"] = 0] = "MomentaryLight";
      ButtonType2[ButtonType2["PushOnPushOff"] = 1] = "PushOnPushOff";
      ButtonType2[ButtonType2["Toggle"] = 2] = "Toggle";
      ButtonType2[ButtonType2["Switch"] = 3] = "Switch";
      ButtonType2[ButtonType2["Radio"] = 4] = "Radio";
      ButtonType2[ButtonType2["MomentaryChange"] = 5] = "MomentaryChange";
      ButtonType2[ButtonType2["OnOff"] = 6] = "OnOff";
      ButtonType2[ButtonType2["MomentaryPushIn"] = 7] = "MomentaryPushIn";
      ButtonType2[ButtonType2["Accelerator"] = 8] = "Accelerator";
      ButtonType2[ButtonType2["MultiLevelAccelerator"] = 9] = "MultiLevelAccelerator";
    })(ButtonType = NSButton2.ButtonType || (NSButton2.ButtonType = {}));
    global$2["NSButton"]["ButtonType"] = ButtonType;
  })(NSButton$1 || (NSButton$1 = {}));
  var NSCalendar;
  (function(NSCalendar2) {
    let Options;
    (function(Options2) {
      Options2[Options2["WrapComponents"] = 1] = "WrapComponents";
      Options2[Options2["MatchStrictly"] = 2] = "MatchStrictly";
      Options2[Options2["SearchBackwards"] = 4] = "SearchBackwards";
      Options2[Options2["MatchPreviousTimePreservingSmallerUnits"] = 256] = "MatchPreviousTimePreservingSmallerUnits";
      Options2[Options2["MatchNextTimePreservingSmallerUnits"] = 512] = "MatchNextTimePreservingSmallerUnits";
      Options2[Options2["MatchNextTime"] = 1024] = "MatchNextTime";
      Options2[Options2["MatchFirst"] = 4096] = "MatchFirst";
      Options2[Options2["MatchLast"] = 8192] = "MatchLast";
    })(Options = NSCalendar2.Options || (NSCalendar2.Options = {}));
    global$2["NSCalendar"]["Options"] = Options;
    let Unit2;
    (function(Unit3) {
      Unit3[Unit3["CalendarUnitEra"] = 2] = "CalendarUnitEra";
      Unit3[Unit3["CalendarUnitYear"] = 4] = "CalendarUnitYear";
      Unit3[Unit3["CalendarUnitMonth"] = 8] = "CalendarUnitMonth";
      Unit3[Unit3["CalendarUnitDay"] = 16] = "CalendarUnitDay";
      Unit3[Unit3["CalendarUnitHour"] = 32] = "CalendarUnitHour";
      Unit3[Unit3["CalendarUnitMinute"] = 64] = "CalendarUnitMinute";
      Unit3[Unit3["CalendarUnitSecond"] = 128] = "CalendarUnitSecond";
      Unit3[Unit3["CalendarUnitWeekday"] = 512] = "CalendarUnitWeekday";
      Unit3[Unit3["CalendarUnitWeekdayOrdinal"] = 1024] = "CalendarUnitWeekdayOrdinal";
      Unit3[Unit3["CalendarUnitQuarter"] = 2048] = "CalendarUnitQuarter";
      Unit3[Unit3["CalendarUnitWeekOfMonth"] = 4096] = "CalendarUnitWeekOfMonth";
      Unit3[Unit3["CalendarUnitWeekOfYear"] = 8192] = "CalendarUnitWeekOfYear";
      Unit3[Unit3["CalendarUnitYearForWeekOfYear"] = 16384] = "CalendarUnitYearForWeekOfYear";
      Unit3[Unit3["CalendarUnitNanosecond"] = 32768] = "CalendarUnitNanosecond";
      Unit3[Unit3["CalendarUnitCalendar"] = 1048576] = "CalendarUnitCalendar";
      Unit3[Unit3["CalendarUnitTimeZone"] = 2097152] = "CalendarUnitTimeZone";
      Unit3[Unit3["EraCalendarUnit"] = 2] = "EraCalendarUnit";
      Unit3[Unit3["YearCalendarUnit"] = 4] = "YearCalendarUnit";
      Unit3[Unit3["MonthCalendarUnit"] = 8] = "MonthCalendarUnit";
      Unit3[Unit3["DayCalendarUnit"] = 16] = "DayCalendarUnit";
      Unit3[Unit3["HourCalendarUnit"] = 32] = "HourCalendarUnit";
      Unit3[Unit3["MinuteCalendarUnit"] = 64] = "MinuteCalendarUnit";
      Unit3[Unit3["SecondCalendarUnit"] = 128] = "SecondCalendarUnit";
      Unit3[Unit3["WeekCalendarUnit"] = 256] = "WeekCalendarUnit";
      Unit3[Unit3["WeekdayCalendarUnit"] = 512] = "WeekdayCalendarUnit";
      Unit3[Unit3["WeekdayOrdinalCalendarUnit"] = 1024] = "WeekdayOrdinalCalendarUnit";
      Unit3[Unit3["QuarterCalendarUnit"] = 2048] = "QuarterCalendarUnit";
      Unit3[Unit3["WeekOfMonthCalendarUnit"] = 4096] = "WeekOfMonthCalendarUnit";
      Unit3[Unit3["WeekOfYearCalendarUnit"] = 8192] = "WeekOfYearCalendarUnit";
      Unit3[Unit3["YearForWeekOfYearCalendarUnit"] = 16384] = "YearForWeekOfYearCalendarUnit";
      Unit3[Unit3["CalendarCalendarUnit"] = 1048576] = "CalendarCalendarUnit";
      Unit3[Unit3["TimeZoneCalendarUnit"] = 2097152] = "TimeZoneCalendarUnit";
    })(Unit2 = NSCalendar2.Unit || (NSCalendar2.Unit = {}));
    global$2["NSCalendar"]["Unit"] = Unit2;
  })(NSCalendar || (NSCalendar = {}));
  var NSCell;
  (function(NSCell2) {
    let Attribute;
    (function(Attribute2) {
      Attribute2[Attribute2["CellDisabled"] = 0] = "CellDisabled";
      Attribute2[Attribute2["CellState"] = 1] = "CellState";
      Attribute2[Attribute2["PushInCell"] = 2] = "PushInCell";
      Attribute2[Attribute2["CellEditable"] = 3] = "CellEditable";
      Attribute2[Attribute2["ChangeGrayCell"] = 4] = "ChangeGrayCell";
      Attribute2[Attribute2["CellHighlighted"] = 5] = "CellHighlighted";
      Attribute2[Attribute2["CellLightsByContents"] = 6] = "CellLightsByContents";
      Attribute2[Attribute2["CellLightsByGray"] = 7] = "CellLightsByGray";
      Attribute2[Attribute2["ChangeBackgroundCell"] = 8] = "ChangeBackgroundCell";
      Attribute2[Attribute2["CellLightsByBackground"] = 9] = "CellLightsByBackground";
      Attribute2[Attribute2["CellIsBordered"] = 10] = "CellIsBordered";
      Attribute2[Attribute2["CellHasOverlappingImage"] = 11] = "CellHasOverlappingImage";
      Attribute2[Attribute2["CellHasImageHorizontal"] = 12] = "CellHasImageHorizontal";
      Attribute2[Attribute2["CellHasImageOnLeftOrBottom"] = 13] = "CellHasImageOnLeftOrBottom";
      Attribute2[Attribute2["CellChangesContents"] = 14] = "CellChangesContents";
      Attribute2[Attribute2["CellIsInsetButton"] = 15] = "CellIsInsetButton";
      Attribute2[Attribute2["CellAllowsMixedState"] = 16] = "CellAllowsMixedState";
    })(Attribute = NSCell2.Attribute || (NSCell2.Attribute = {}));
    global$2["NSCell"]["Attribute"] = Attribute;
    let HitResult;
    (function(HitResult2) {
      HitResult2[HitResult2["None"] = 0] = "None";
      HitResult2[HitResult2["ContentArea"] = 1] = "ContentArea";
      HitResult2[HitResult2["EditableTextArea"] = 2] = "EditableTextArea";
      HitResult2[HitResult2["TrackableArea"] = 4] = "TrackableArea";
    })(HitResult = NSCell2.HitResult || (NSCell2.HitResult = {}));
    global$2["NSCell"]["HitResult"] = HitResult;
    let StyleMask;
    (function(StyleMask2) {
      StyleMask2[StyleMask2["NoCellMask"] = 0] = "NoCellMask";
      StyleMask2[StyleMask2["ContentsCellMask"] = 1] = "ContentsCellMask";
      StyleMask2[StyleMask2["PushInCellMask"] = 2] = "PushInCellMask";
      StyleMask2[StyleMask2["ChangeGrayCellMask"] = 4] = "ChangeGrayCellMask";
      StyleMask2[StyleMask2["ChangeBackgroundCellMask"] = 8] = "ChangeBackgroundCellMask";
    })(StyleMask = NSCell2.StyleMask || (NSCell2.StyleMask = {}));
    global$2["NSCell"]["StyleMask"] = StyleMask;
    let CellType;
    (function(CellType2) {
      CellType2[CellType2["NullCellType"] = 0] = "NullCellType";
      CellType2[CellType2["TextCellType"] = 1] = "TextCellType";
      CellType2[CellType2["ImageCellType"] = 2] = "ImageCellType";
    })(CellType = NSCell2.CellType || (NSCell2.CellType = {}));
    global$2["NSCell"]["CellType"] = CellType;
  })(NSCell || (NSCell = {}));
  var NSCoder;
  (function(NSCoder2) {
    let DecodingFailurePolicy;
    (function(DecodingFailurePolicy2) {
      DecodingFailurePolicy2[DecodingFailurePolicy2["RaiseException"] = 0] = "RaiseException";
      DecodingFailurePolicy2[DecodingFailurePolicy2["SetErrorAndReturn"] = 1] = "SetErrorAndReturn";
    })(DecodingFailurePolicy = NSCoder2.DecodingFailurePolicy || (NSCoder2.DecodingFailurePolicy = {}));
    global$2["NSCoder"]["DecodingFailurePolicy"] = DecodingFailurePolicy;
  })(NSCoder || (NSCoder = {}));
  var NSCollectionView;
  (function(NSCollectionView2) {
    let UpdateAction;
    (function(UpdateAction2) {
      UpdateAction2[UpdateAction2["Insert"] = 0] = "Insert";
      UpdateAction2[UpdateAction2["Delete"] = 1] = "Delete";
      UpdateAction2[UpdateAction2["Reload"] = 2] = "Reload";
      UpdateAction2[UpdateAction2["Move"] = 3] = "Move";
      UpdateAction2[UpdateAction2["None"] = 4] = "None";
    })(UpdateAction = NSCollectionView2.UpdateAction || (NSCollectionView2.UpdateAction = {}));
    global$2["NSCollectionView"]["UpdateAction"] = UpdateAction;
    let DropOperation;
    (function(DropOperation2) {
      DropOperation2[DropOperation2["On"] = 0] = "On";
      DropOperation2[DropOperation2["Before"] = 1] = "Before";
    })(DropOperation = NSCollectionView2.DropOperation || (NSCollectionView2.DropOperation = {}));
    global$2["NSCollectionView"]["DropOperation"] = DropOperation;
    let ScrollDirection;
    (function(ScrollDirection2) {
      ScrollDirection2[ScrollDirection2["Vertical"] = 0] = "Vertical";
      ScrollDirection2[ScrollDirection2["Horizontal"] = 1] = "Horizontal";
    })(ScrollDirection = NSCollectionView2.ScrollDirection || (NSCollectionView2.ScrollDirection = {}));
    global$2["NSCollectionView"]["ScrollDirection"] = ScrollDirection;
    let ScrollPosition;
    (function(ScrollPosition2) {
      ScrollPosition2[ScrollPosition2["None"] = 0] = "None";
      ScrollPosition2[ScrollPosition2["Top"] = 1] = "Top";
      ScrollPosition2[ScrollPosition2["CenteredVertically"] = 2] = "CenteredVertically";
      ScrollPosition2[ScrollPosition2["Bottom"] = 4] = "Bottom";
      ScrollPosition2[ScrollPosition2["NearestHorizontalEdge"] = 512] = "NearestHorizontalEdge";
      ScrollPosition2[ScrollPosition2["Left"] = 8] = "Left";
      ScrollPosition2[ScrollPosition2["CenteredHorizontally"] = 16] = "CenteredHorizontally";
      ScrollPosition2[ScrollPosition2["Right"] = 32] = "Right";
      ScrollPosition2[ScrollPosition2["LeadingEdge"] = 64] = "LeadingEdge";
      ScrollPosition2[ScrollPosition2["TrailingEdge"] = 128] = "TrailingEdge";
      ScrollPosition2[ScrollPosition2["NearestVerticalEdge"] = 256] = "NearestVerticalEdge";
    })(ScrollPosition = NSCollectionView2.ScrollPosition || (NSCollectionView2.ScrollPosition = {}));
    global$2["NSCollectionView"]["ScrollPosition"] = ScrollPosition;
  })(NSCollectionView || (NSCollectionView = {}));
  var NSCollectionViewItem;
  (function(NSCollectionViewItem2) {
    let HighlightState;
    (function(HighlightState2) {
      HighlightState2[HighlightState2["None"] = 0] = "None";
      HighlightState2[HighlightState2["ForSelection"] = 1] = "ForSelection";
      HighlightState2[HighlightState2["ForDeselection"] = 2] = "ForDeselection";
      HighlightState2[HighlightState2["AsDropTarget"] = 3] = "AsDropTarget";
    })(HighlightState = NSCollectionViewItem2.HighlightState || (NSCollectionViewItem2.HighlightState = {}));
    global$2["NSCollectionViewItem"]["HighlightState"] = HighlightState;
  })(NSCollectionViewItem || (NSCollectionViewItem = {}));
  var NSColor;
  (function(NSColor2) {
    let SystemEffect;
    (function(SystemEffect2) {
      SystemEffect2[SystemEffect2["None"] = 0] = "None";
      SystemEffect2[SystemEffect2["Pressed"] = 1] = "Pressed";
      SystemEffect2[SystemEffect2["DeepPressed"] = 2] = "DeepPressed";
      SystemEffect2[SystemEffect2["Disabled"] = 3] = "Disabled";
      SystemEffect2[SystemEffect2["Rollover"] = 4] = "Rollover";
    })(SystemEffect = NSColor2.SystemEffect || (NSColor2.SystemEffect = {}));
    global$2["NSColor"]["SystemEffect"] = SystemEffect;
    let ColorType;
    (function(ColorType2) {
      ColorType2[ColorType2["ComponentBased"] = 0] = "ComponentBased";
      ColorType2[ColorType2["Pattern"] = 1] = "Pattern";
      ColorType2[ColorType2["Catalog"] = 2] = "Catalog";
    })(ColorType = NSColor2.ColorType || (NSColor2.ColorType = {}));
    global$2["NSColor"]["ColorType"] = ColorType;
  })(NSColor || (NSColor = {}));
  var NSColorPanel;
  (function(NSColorPanel2) {
    let Mode;
    (function(Mode2) {
      Mode2[Mode2["None"] = -1] = "None";
      Mode2[Mode2["Gray"] = 0] = "Gray";
      Mode2[Mode2["RGB"] = 1] = "RGB";
      Mode2[Mode2["CMYK"] = 2] = "CMYK";
      Mode2[Mode2["HSB"] = 3] = "HSB";
      Mode2[Mode2["CustomPalette"] = 4] = "CustomPalette";
      Mode2[Mode2["ColorList"] = 5] = "ColorList";
      Mode2[Mode2["Wheel"] = 6] = "Wheel";
      Mode2[Mode2["Crayon"] = 7] = "Crayon";
    })(Mode = NSColorPanel2.Mode || (NSColorPanel2.Mode = {}));
    global$2["NSColorPanel"]["Mode"] = Mode;
    let Options;
    (function(Options2) {
      Options2[Options2["GrayModeMask"] = 1] = "GrayModeMask";
      Options2[Options2["RGBModeMask"] = 2] = "RGBModeMask";
      Options2[Options2["CMYKModeMask"] = 4] = "CMYKModeMask";
      Options2[Options2["HSBModeMask"] = 8] = "HSBModeMask";
      Options2[Options2["CustomPaletteModeMask"] = 16] = "CustomPaletteModeMask";
      Options2[Options2["ColorListModeMask"] = 32] = "ColorListModeMask";
      Options2[Options2["WheelModeMask"] = 64] = "WheelModeMask";
      Options2[Options2["CrayonModeMask"] = 128] = "CrayonModeMask";
      Options2[Options2["AllModesMask"] = 65535] = "AllModesMask";
    })(Options = NSColorPanel2.Options || (NSColorPanel2.Options = {}));
    global$2["NSColorPanel"]["Options"] = Options;
  })(NSColorPanel || (NSColorPanel = {}));
  var NSColorSpace;
  (function(NSColorSpace2) {
    let Model;
    (function(Model2) {
      Model2[Model2["Unknown"] = -1] = "Unknown";
      Model2[Model2["Gray"] = 0] = "Gray";
      Model2[Model2["RGB"] = 1] = "RGB";
      Model2[Model2["CMYK"] = 2] = "CMYK";
      Model2[Model2["LAB"] = 3] = "LAB";
      Model2[Model2["DeviceN"] = 4] = "DeviceN";
      Model2[Model2["Indexed"] = 5] = "Indexed";
      Model2[Model2["Patterned"] = 6] = "Patterned";
    })(Model = NSColorSpace2.Model || (NSColorSpace2.Model = {}));
    global$2["NSColorSpace"]["Model"] = Model;
  })(NSColorSpace || (NSColorSpace = {}));
  var NSComparisonPredicate;
  (function(NSComparisonPredicate2) {
    let Modifier;
    (function(Modifier2) {
      Modifier2[Modifier2["DirectPredicateModifier"] = 0] = "DirectPredicateModifier";
      Modifier2[Modifier2["AllPredicateModifier"] = 1] = "AllPredicateModifier";
      Modifier2[Modifier2["AnyPredicateModifier"] = 2] = "AnyPredicateModifier";
    })(Modifier = NSComparisonPredicate2.Modifier || (NSComparisonPredicate2.Modifier = {}));
    global$2["NSComparisonPredicate"]["Modifier"] = Modifier;
    let Options;
    (function(Options2) {
      Options2[Options2["CaseInsensitivePredicateOption"] = 1] = "CaseInsensitivePredicateOption";
      Options2[Options2["DiacriticInsensitivePredicateOption"] = 2] = "DiacriticInsensitivePredicateOption";
      Options2[Options2["NormalizedPredicateOption"] = 4] = "NormalizedPredicateOption";
    })(Options = NSComparisonPredicate2.Options || (NSComparisonPredicate2.Options = {}));
    global$2["NSComparisonPredicate"]["Options"] = Options;
    let Operator;
    (function(Operator2) {
      Operator2[Operator2["LessThanPredicateOperatorType"] = 0] = "LessThanPredicateOperatorType";
      Operator2[Operator2["LessThanOrEqualToPredicateOperatorType"] = 1] = "LessThanOrEqualToPredicateOperatorType";
      Operator2[Operator2["GreaterThanPredicateOperatorType"] = 2] = "GreaterThanPredicateOperatorType";
      Operator2[Operator2["GreaterThanOrEqualToPredicateOperatorType"] = 3] = "GreaterThanOrEqualToPredicateOperatorType";
      Operator2[Operator2["EqualToPredicateOperatorType"] = 4] = "EqualToPredicateOperatorType";
      Operator2[Operator2["NotEqualToPredicateOperatorType"] = 5] = "NotEqualToPredicateOperatorType";
      Operator2[Operator2["MatchesPredicateOperatorType"] = 6] = "MatchesPredicateOperatorType";
      Operator2[Operator2["LikePredicateOperatorType"] = 7] = "LikePredicateOperatorType";
      Operator2[Operator2["BeginsWithPredicateOperatorType"] = 8] = "BeginsWithPredicateOperatorType";
      Operator2[Operator2["EndsWithPredicateOperatorType"] = 9] = "EndsWithPredicateOperatorType";
      Operator2[Operator2["InPredicateOperatorType"] = 10] = "InPredicateOperatorType";
      Operator2[Operator2["CustomSelectorPredicateOperatorType"] = 11] = "CustomSelectorPredicateOperatorType";
      Operator2[Operator2["ContainsPredicateOperatorType"] = 99] = "ContainsPredicateOperatorType";
      Operator2[Operator2["BetweenPredicateOperatorType"] = 100] = "BetweenPredicateOperatorType";
    })(Operator = NSComparisonPredicate2.Operator || (NSComparisonPredicate2.Operator = {}));
    global$2["NSComparisonPredicate"]["Operator"] = Operator;
  })(NSComparisonPredicate || (NSComparisonPredicate = {}));
  var NSCompoundPredicate;
  (function(NSCompoundPredicate2) {
    let LogicalType;
    (function(LogicalType2) {
      LogicalType2[LogicalType2["NotPredicateType"] = 0] = "NotPredicateType";
      LogicalType2[LogicalType2["AndPredicateType"] = 1] = "AndPredicateType";
      LogicalType2[LogicalType2["OrPredicateType"] = 2] = "OrPredicateType";
    })(LogicalType = NSCompoundPredicate2.LogicalType || (NSCompoundPredicate2.LogicalType = {}));
    global$2["NSCompoundPredicate"]["LogicalType"] = LogicalType;
  })(NSCompoundPredicate || (NSCompoundPredicate = {}));
  var NSControl$1;
  (function(NSControl2) {
    let ImagePosition;
    (function(ImagePosition2) {
      ImagePosition2[ImagePosition2["NoImage"] = 0] = "NoImage";
      ImagePosition2[ImagePosition2["ImageOnly"] = 1] = "ImageOnly";
      ImagePosition2[ImagePosition2["ImageLeft"] = 2] = "ImageLeft";
      ImagePosition2[ImagePosition2["ImageRight"] = 3] = "ImageRight";
      ImagePosition2[ImagePosition2["ImageBelow"] = 4] = "ImageBelow";
      ImagePosition2[ImagePosition2["ImageAbove"] = 5] = "ImageAbove";
      ImagePosition2[ImagePosition2["ImageOverlaps"] = 6] = "ImageOverlaps";
      ImagePosition2[ImagePosition2["ImageLeading"] = 7] = "ImageLeading";
      ImagePosition2[ImagePosition2["ImageTrailing"] = 8] = "ImageTrailing";
    })(ImagePosition = NSControl2.ImagePosition || (NSControl2.ImagePosition = {}));
    global$2["NSControl"]["ImagePosition"] = ImagePosition;
    let ControlSize;
    (function(ControlSize2) {
      ControlSize2[ControlSize2["Regular"] = 0] = "Regular";
      ControlSize2[ControlSize2["Small"] = 1] = "Small";
      ControlSize2[ControlSize2["Mini"] = 2] = "Mini";
    })(ControlSize = NSControl2.ControlSize || (NSControl2.ControlSize = {}));
    global$2["NSControl"]["ControlSize"] = ControlSize;
  })(NSControl$1 || (NSControl$1 = {}));
  var NSData;
  (function(NSData2) {
    let Base64DecodingOptions;
    (function(Base64DecodingOptions2) {
      Base64DecodingOptions2[Base64DecodingOptions2["IgnoreUnknownCharacters"] = 1] = "IgnoreUnknownCharacters";
    })(Base64DecodingOptions = NSData2.Base64DecodingOptions || (NSData2.Base64DecodingOptions = {}));
    global$2["NSData"]["Base64DecodingOptions"] = Base64DecodingOptions;
    let Base64EncodingOptions;
    (function(Base64EncodingOptions2) {
      Base64EncodingOptions2[Base64EncodingOptions2["Encoding64CharacterLineLength"] = 1] = "Encoding64CharacterLineLength";
      Base64EncodingOptions2[Base64EncodingOptions2["Encoding76CharacterLineLength"] = 2] = "Encoding76CharacterLineLength";
      Base64EncodingOptions2[Base64EncodingOptions2["EncodingEndLineWithCarriageReturn"] = 16] = "EncodingEndLineWithCarriageReturn";
      Base64EncodingOptions2[Base64EncodingOptions2["EncodingEndLineWithLineFeed"] = 32] = "EncodingEndLineWithLineFeed";
    })(Base64EncodingOptions = NSData2.Base64EncodingOptions || (NSData2.Base64EncodingOptions = {}));
    global$2["NSData"]["Base64EncodingOptions"] = Base64EncodingOptions;
    let CompressionAlgorithm;
    (function(CompressionAlgorithm2) {
      CompressionAlgorithm2[CompressionAlgorithm2["LZFSE"] = 0] = "LZFSE";
      CompressionAlgorithm2[CompressionAlgorithm2["LZ4"] = 1] = "LZ4";
      CompressionAlgorithm2[CompressionAlgorithm2["LZMA"] = 2] = "LZMA";
      CompressionAlgorithm2[CompressionAlgorithm2["Zlib"] = 3] = "Zlib";
    })(CompressionAlgorithm = NSData2.CompressionAlgorithm || (NSData2.CompressionAlgorithm = {}));
    global$2["NSData"]["CompressionAlgorithm"] = CompressionAlgorithm;
    let ReadingOptions;
    (function(ReadingOptions2) {
      ReadingOptions2[ReadingOptions2["DataReadingMappedIfSafe"] = 1] = "DataReadingMappedIfSafe";
      ReadingOptions2[ReadingOptions2["DataReadingUncached"] = 2] = "DataReadingUncached";
      ReadingOptions2[ReadingOptions2["DataReadingMappedAlways"] = 8] = "DataReadingMappedAlways";
      ReadingOptions2[ReadingOptions2["DataReadingMapped"] = 1] = "DataReadingMapped";
      ReadingOptions2[ReadingOptions2["MappedRead"] = 1] = "MappedRead";
      ReadingOptions2[ReadingOptions2["UncachedRead"] = 2] = "UncachedRead";
    })(ReadingOptions = NSData2.ReadingOptions || (NSData2.ReadingOptions = {}));
    global$2["NSData"]["ReadingOptions"] = ReadingOptions;
    let SearchOptions;
    (function(SearchOptions2) {
      SearchOptions2[SearchOptions2["Backwards"] = 1] = "Backwards";
      SearchOptions2[SearchOptions2["Anchored"] = 2] = "Anchored";
    })(SearchOptions = NSData2.SearchOptions || (NSData2.SearchOptions = {}));
    global$2["NSData"]["SearchOptions"] = SearchOptions;
    let WritingOptions;
    (function(WritingOptions2) {
      WritingOptions2[WritingOptions2["DataWritingAtomic"] = 1] = "DataWritingAtomic";
      WritingOptions2[WritingOptions2["DataWritingWithoutOverwriting"] = 2] = "DataWritingWithoutOverwriting";
      WritingOptions2[WritingOptions2["DataWritingFileProtectionNone"] = 268435456] = "DataWritingFileProtectionNone";
      WritingOptions2[WritingOptions2["DataWritingFileProtectionComplete"] = 536870912] = "DataWritingFileProtectionComplete";
      WritingOptions2[WritingOptions2["DataWritingFileProtectionCompleteUnlessOpen"] = 805306368] = "DataWritingFileProtectionCompleteUnlessOpen";
      WritingOptions2[WritingOptions2["DataWritingFileProtectionCompleteUntilFirstUserAuthentication"] = 1073741824] = "DataWritingFileProtectionCompleteUntilFirstUserAuthentication";
      WritingOptions2[WritingOptions2["DataWritingFileProtectionMask"] = 4026531840] = "DataWritingFileProtectionMask";
      WritingOptions2[WritingOptions2["AtomicWrite"] = 1] = "AtomicWrite";
    })(WritingOptions = NSData2.WritingOptions || (NSData2.WritingOptions = {}));
    global$2["NSData"]["WritingOptions"] = WritingOptions;
  })(NSData || (NSData = {}));
  var NSDatePicker$1;
  (function(NSDatePicker2) {
    let ElementFlags;
    (function(ElementFlags2) {
      ElementFlags2[ElementFlags2["HourMinute"] = 12] = "HourMinute";
      ElementFlags2[ElementFlags2["HourMinuteSecond"] = 14] = "HourMinuteSecond";
      ElementFlags2[ElementFlags2["TimeZone"] = 16] = "TimeZone";
      ElementFlags2[ElementFlags2["YearMonth"] = 192] = "YearMonth";
      ElementFlags2[ElementFlags2["YearMonthDay"] = 224] = "YearMonthDay";
      ElementFlags2[ElementFlags2["Era"] = 256] = "Era";
    })(ElementFlags = NSDatePicker2.ElementFlags || (NSDatePicker2.ElementFlags = {}));
    global$2["NSDatePicker"]["ElementFlags"] = ElementFlags;
    let Mode;
    (function(Mode2) {
      Mode2[Mode2["Single"] = 0] = "Single";
      Mode2[Mode2["Range"] = 1] = "Range";
    })(Mode = NSDatePicker2.Mode || (NSDatePicker2.Mode = {}));
    global$2["NSDatePicker"]["Mode"] = Mode;
    let Style;
    (function(Style2) {
      Style2[Style2["TextFieldAndStepper"] = 0] = "TextFieldAndStepper";
      Style2[Style2["ClockAndCalendar"] = 1] = "ClockAndCalendar";
      Style2[Style2["TextField"] = 2] = "TextField";
    })(Style = NSDatePicker2.Style || (NSDatePicker2.Style = {}));
    global$2["NSDatePicker"]["Style"] = Style;
  })(NSDatePicker$1 || (NSDatePicker$1 = {}));
  var NSDecimalNumber;
  (function(NSDecimalNumber2) {
    let CalculationError;
    (function(CalculationError2) {
      CalculationError2[CalculationError2["NoError"] = 0] = "NoError";
      CalculationError2[CalculationError2["LossOfPrecision"] = 1] = "LossOfPrecision";
      CalculationError2[CalculationError2["Underflow"] = 2] = "Underflow";
      CalculationError2[CalculationError2["Overflow"] = 3] = "Overflow";
      CalculationError2[CalculationError2["DivideByZero"] = 4] = "DivideByZero";
    })(CalculationError = NSDecimalNumber2.CalculationError || (NSDecimalNumber2.CalculationError = {}));
    global$2["NSDecimalNumber"]["CalculationError"] = CalculationError;
    let RoundingMode;
    (function(RoundingMode2) {
      RoundingMode2[RoundingMode2["Plain"] = 0] = "Plain";
      RoundingMode2[RoundingMode2["Down"] = 1] = "Down";
      RoundingMode2[RoundingMode2["Up"] = 2] = "Up";
      RoundingMode2[RoundingMode2["Bankers"] = 3] = "Bankers";
    })(RoundingMode = NSDecimalNumber2.RoundingMode || (NSDecimalNumber2.RoundingMode = {}));
    global$2["NSDecimalNumber"]["RoundingMode"] = RoundingMode;
  })(NSDecimalNumber || (NSDecimalNumber = {}));
  var NSDocument;
  (function(NSDocument2) {
    let ChangeType;
    (function(ChangeType2) {
      ChangeType2[ChangeType2["ChangeDone"] = 0] = "ChangeDone";
      ChangeType2[ChangeType2["ChangeUndone"] = 1] = "ChangeUndone";
      ChangeType2[ChangeType2["ChangeRedone"] = 5] = "ChangeRedone";
      ChangeType2[ChangeType2["ChangeCleared"] = 2] = "ChangeCleared";
      ChangeType2[ChangeType2["ChangeReadOtherContents"] = 3] = "ChangeReadOtherContents";
      ChangeType2[ChangeType2["ChangeAutosaved"] = 4] = "ChangeAutosaved";
      ChangeType2[ChangeType2["ChangeDiscardable"] = 256] = "ChangeDiscardable";
    })(ChangeType = NSDocument2.ChangeType || (NSDocument2.ChangeType = {}));
    global$2["NSDocument"]["ChangeType"] = ChangeType;
    let SaveOperationType;
    (function(SaveOperationType2) {
      SaveOperationType2[SaveOperationType2["SaveOperation"] = 0] = "SaveOperation";
      SaveOperationType2[SaveOperationType2["SaveAsOperation"] = 1] = "SaveAsOperation";
      SaveOperationType2[SaveOperationType2["SaveToOperation"] = 2] = "SaveToOperation";
      SaveOperationType2[SaveOperationType2["AutosaveInPlaceOperation"] = 4] = "AutosaveInPlaceOperation";
      SaveOperationType2[SaveOperationType2["AutosaveElsewhereOperation"] = 3] = "AutosaveElsewhereOperation";
      SaveOperationType2[SaveOperationType2["AutosaveAsOperation"] = 5] = "AutosaveAsOperation";
      SaveOperationType2[SaveOperationType2["AutosaveOperation"] = 3] = "AutosaveOperation";
    })(SaveOperationType = NSDocument2.SaveOperationType || (NSDocument2.SaveOperationType = {}));
    global$2["NSDocument"]["SaveOperationType"] = SaveOperationType;
  })(NSDocument || (NSDocument = {}));
  var NSDrawer;
  (function(NSDrawer2) {
    let State;
    (function(State2) {
      State2[State2["ClosedState"] = 0] = "ClosedState";
      State2[State2["OpeningState"] = 1] = "OpeningState";
      State2[State2["OpenState"] = 2] = "OpenState";
      State2[State2["ClosingState"] = 3] = "ClosingState";
    })(State = NSDrawer2.State || (NSDrawer2.State = {}));
    global$2["NSDrawer"]["State"] = State;
  })(NSDrawer || (NSDrawer = {}));
  var NSEvent$1;
  (function(NSEvent2) {
    let ButtonMask;
    (function(ButtonMask2) {
      ButtonMask2[ButtonMask2["PenTip"] = 1] = "PenTip";
      ButtonMask2[ButtonMask2["PenLowerSide"] = 2] = "PenLowerSide";
      ButtonMask2[ButtonMask2["PenUpperSide"] = 4] = "PenUpperSide";
    })(ButtonMask = NSEvent2.ButtonMask || (NSEvent2.ButtonMask = {}));
    global$2["NSEvent"]["ButtonMask"] = ButtonMask;
    let GestureAxis;
    (function(GestureAxis2) {
      GestureAxis2[GestureAxis2["None"] = 0] = "None";
      GestureAxis2[GestureAxis2["Horizontal"] = 1] = "Horizontal";
      GestureAxis2[GestureAxis2["Vertical"] = 2] = "Vertical";
    })(GestureAxis = NSEvent2.GestureAxis || (NSEvent2.GestureAxis = {}));
    global$2["NSEvent"]["GestureAxis"] = GestureAxis;
    let EventTypeMask;
    (function(EventTypeMask2) {
      EventTypeMask2[EventTypeMask2["LeftMouseDown"] = 2] = "LeftMouseDown";
      EventTypeMask2[EventTypeMask2["LeftMouseUp"] = 4] = "LeftMouseUp";
      EventTypeMask2[EventTypeMask2["RightMouseDown"] = 8] = "RightMouseDown";
      EventTypeMask2[EventTypeMask2["RightMouseUp"] = 16] = "RightMouseUp";
      EventTypeMask2[EventTypeMask2["MouseMoved"] = 32] = "MouseMoved";
      EventTypeMask2[EventTypeMask2["LeftMouseDragged"] = 64] = "LeftMouseDragged";
      EventTypeMask2[EventTypeMask2["RightMouseDragged"] = 128] = "RightMouseDragged";
      EventTypeMask2[EventTypeMask2["MouseEntered"] = 256] = "MouseEntered";
      EventTypeMask2[EventTypeMask2["MouseExited"] = 512] = "MouseExited";
      EventTypeMask2[EventTypeMask2["KeyDown"] = 1024] = "KeyDown";
      EventTypeMask2[EventTypeMask2["KeyUp"] = 2048] = "KeyUp";
      EventTypeMask2[EventTypeMask2["FlagsChanged"] = 4096] = "FlagsChanged";
      EventTypeMask2[EventTypeMask2["AppKitDefined"] = 8192] = "AppKitDefined";
      EventTypeMask2[EventTypeMask2["SystemDefined"] = 16384] = "SystemDefined";
      EventTypeMask2[EventTypeMask2["ApplicationDefined"] = 32768] = "ApplicationDefined";
      EventTypeMask2[EventTypeMask2["Periodic"] = 65536] = "Periodic";
      EventTypeMask2[EventTypeMask2["CursorUpdate"] = 131072] = "CursorUpdate";
      EventTypeMask2[EventTypeMask2["ScrollWheel"] = 4194304] = "ScrollWheel";
      EventTypeMask2[EventTypeMask2["TabletPoint"] = 8388608] = "TabletPoint";
      EventTypeMask2[EventTypeMask2["TabletProximity"] = 16777216] = "TabletProximity";
      EventTypeMask2[EventTypeMask2["OtherMouseDown"] = 33554432] = "OtherMouseDown";
      EventTypeMask2[EventTypeMask2["OtherMouseUp"] = 67108864] = "OtherMouseUp";
      EventTypeMask2[EventTypeMask2["OtherMouseDragged"] = 134217728] = "OtherMouseDragged";
      EventTypeMask2[EventTypeMask2["Gesture"] = 536870912] = "Gesture";
      EventTypeMask2[EventTypeMask2["Magnify"] = 1073741824] = "Magnify";
      EventTypeMask2[EventTypeMask2["Swipe"] = 2147483648] = "Swipe";
      EventTypeMask2[EventTypeMask2["Rotate"] = 262144] = "Rotate";
      EventTypeMask2[EventTypeMask2["BeginGesture"] = 524288] = "BeginGesture";
      EventTypeMask2[EventTypeMask2["EndGesture"] = 1048576] = "EndGesture";
      EventTypeMask2[EventTypeMask2["SmartMagnify"] = 4294967296] = "SmartMagnify";
      EventTypeMask2[EventTypeMask2["Pressure"] = 17179869184] = "Pressure";
      EventTypeMask2[EventTypeMask2["DirectTouch"] = 137438953472] = "DirectTouch";
      EventTypeMask2[EventTypeMask2["ChangeMode"] = 274877906944] = "ChangeMode";
      EventTypeMask2[EventTypeMask2["Any"] = -1] = "Any";
    })(EventTypeMask = NSEvent2.EventTypeMask || (NSEvent2.EventTypeMask = {}));
    global$2["NSEvent"]["EventTypeMask"] = EventTypeMask;
    let ModifierFlags;
    (function(ModifierFlags2) {
      ModifierFlags2[ModifierFlags2["CapsLock"] = 65536] = "CapsLock";
      ModifierFlags2[ModifierFlags2["Shift"] = 131072] = "Shift";
      ModifierFlags2[ModifierFlags2["Control"] = 262144] = "Control";
      ModifierFlags2[ModifierFlags2["Option"] = 524288] = "Option";
      ModifierFlags2[ModifierFlags2["Command"] = 1048576] = "Command";
      ModifierFlags2[ModifierFlags2["NumericPad"] = 2097152] = "NumericPad";
      ModifierFlags2[ModifierFlags2["Help"] = 4194304] = "Help";
      ModifierFlags2[ModifierFlags2["Function"] = 8388608] = "Function";
      ModifierFlags2[ModifierFlags2["DeviceIndependentFlagsMask"] = 4294901760] = "DeviceIndependentFlagsMask";
    })(ModifierFlags = NSEvent2.ModifierFlags || (NSEvent2.ModifierFlags = {}));
    global$2["NSEvent"]["ModifierFlags"] = ModifierFlags;
    let Phase;
    (function(Phase2) {
      Phase2[Phase2["None"] = 0] = "None";
      Phase2[Phase2["Began"] = 1] = "Began";
      Phase2[Phase2["Stationary"] = 2] = "Stationary";
      Phase2[Phase2["Changed"] = 4] = "Changed";
      Phase2[Phase2["Ended"] = 8] = "Ended";
      Phase2[Phase2["Cancelled"] = 16] = "Cancelled";
      Phase2[Phase2["MayBegin"] = 32] = "MayBegin";
    })(Phase = NSEvent2.Phase || (NSEvent2.Phase = {}));
    global$2["NSEvent"]["Phase"] = Phase;
    let EventSubtype;
    (function(EventSubtype2) {
      EventSubtype2[EventSubtype2["WindowExposed"] = 0] = "WindowExposed";
      EventSubtype2[EventSubtype2["ApplicationActivated"] = 1] = "ApplicationActivated";
      EventSubtype2[EventSubtype2["ApplicationDeactivated"] = 2] = "ApplicationDeactivated";
      EventSubtype2[EventSubtype2["WindowMoved"] = 4] = "WindowMoved";
      EventSubtype2[EventSubtype2["ScreenChanged"] = 8] = "ScreenChanged";
      EventSubtype2[EventSubtype2["PowerOff"] = 1] = "PowerOff";
      EventSubtype2[EventSubtype2["MouseEvent"] = 0] = "MouseEvent";
      EventSubtype2[EventSubtype2["TabletPoint"] = 1] = "TabletPoint";
      EventSubtype2[EventSubtype2["TabletProximity"] = 2] = "TabletProximity";
      EventSubtype2[EventSubtype2["Touch"] = 3] = "Touch";
    })(EventSubtype = NSEvent2.EventSubtype || (NSEvent2.EventSubtype = {}));
    global$2["NSEvent"]["EventSubtype"] = EventSubtype;
    let SwipeTrackingOptions;
    (function(SwipeTrackingOptions2) {
      SwipeTrackingOptions2[SwipeTrackingOptions2["LockDirection"] = 1] = "LockDirection";
      SwipeTrackingOptions2[SwipeTrackingOptions2["ClampGestureAmount"] = 2] = "ClampGestureAmount";
    })(SwipeTrackingOptions = NSEvent2.SwipeTrackingOptions || (NSEvent2.SwipeTrackingOptions = {}));
    global$2["NSEvent"]["SwipeTrackingOptions"] = SwipeTrackingOptions;
    let EventType;
    (function(EventType2) {
      EventType2[EventType2["LeftMouseDown"] = 1] = "LeftMouseDown";
      EventType2[EventType2["LeftMouseUp"] = 2] = "LeftMouseUp";
      EventType2[EventType2["RightMouseDown"] = 3] = "RightMouseDown";
      EventType2[EventType2["RightMouseUp"] = 4] = "RightMouseUp";
      EventType2[EventType2["MouseMoved"] = 5] = "MouseMoved";
      EventType2[EventType2["LeftMouseDragged"] = 6] = "LeftMouseDragged";
      EventType2[EventType2["RightMouseDragged"] = 7] = "RightMouseDragged";
      EventType2[EventType2["MouseEntered"] = 8] = "MouseEntered";
      EventType2[EventType2["MouseExited"] = 9] = "MouseExited";
      EventType2[EventType2["KeyDown"] = 10] = "KeyDown";
      EventType2[EventType2["KeyUp"] = 11] = "KeyUp";
      EventType2[EventType2["FlagsChanged"] = 12] = "FlagsChanged";
      EventType2[EventType2["AppKitDefined"] = 13] = "AppKitDefined";
      EventType2[EventType2["SystemDefined"] = 14] = "SystemDefined";
      EventType2[EventType2["ApplicationDefined"] = 15] = "ApplicationDefined";
      EventType2[EventType2["Periodic"] = 16] = "Periodic";
      EventType2[EventType2["CursorUpdate"] = 17] = "CursorUpdate";
      EventType2[EventType2["ScrollWheel"] = 22] = "ScrollWheel";
      EventType2[EventType2["TabletPoint"] = 23] = "TabletPoint";
      EventType2[EventType2["TabletProximity"] = 24] = "TabletProximity";
      EventType2[EventType2["OtherMouseDown"] = 25] = "OtherMouseDown";
      EventType2[EventType2["OtherMouseUp"] = 26] = "OtherMouseUp";
      EventType2[EventType2["OtherMouseDragged"] = 27] = "OtherMouseDragged";
      EventType2[EventType2["Gesture"] = 29] = "Gesture";
      EventType2[EventType2["Magnify"] = 30] = "Magnify";
      EventType2[EventType2["Swipe"] = 31] = "Swipe";
      EventType2[EventType2["Rotate"] = 18] = "Rotate";
      EventType2[EventType2["BeginGesture"] = 19] = "BeginGesture";
      EventType2[EventType2["EndGesture"] = 20] = "EndGesture";
      EventType2[EventType2["SmartMagnify"] = 32] = "SmartMagnify";
      EventType2[EventType2["QuickLook"] = 33] = "QuickLook";
      EventType2[EventType2["Pressure"] = 34] = "Pressure";
      EventType2[EventType2["DirectTouch"] = 37] = "DirectTouch";
      EventType2[EventType2["ChangeMode"] = 38] = "ChangeMode";
    })(EventType = NSEvent2.EventType || (NSEvent2.EventType = {}));
    global$2["NSEvent"]["EventType"] = EventType;
    let PointingDeviceType;
    (function(PointingDeviceType2) {
      PointingDeviceType2[PointingDeviceType2["Unknown"] = 0] = "Unknown";
      PointingDeviceType2[PointingDeviceType2["Pen"] = 1] = "Pen";
      PointingDeviceType2[PointingDeviceType2["Cursor"] = 2] = "Cursor";
      PointingDeviceType2[PointingDeviceType2["Eraser"] = 3] = "Eraser";
    })(PointingDeviceType = NSEvent2.PointingDeviceType || (NSEvent2.PointingDeviceType = {}));
    global$2["NSEvent"]["PointingDeviceType"] = PointingDeviceType;
    let PressureBehavior;
    (function(PressureBehavior2) {
      PressureBehavior2[PressureBehavior2["Unknown"] = -1] = "Unknown";
      PressureBehavior2[PressureBehavior2["PrimaryDefault"] = 0] = "PrimaryDefault";
      PressureBehavior2[PressureBehavior2["PrimaryClick"] = 1] = "PrimaryClick";
      PressureBehavior2[PressureBehavior2["PrimaryGeneric"] = 2] = "PrimaryGeneric";
      PressureBehavior2[PressureBehavior2["PrimaryAccelerator"] = 3] = "PrimaryAccelerator";
      PressureBehavior2[PressureBehavior2["PrimaryDeepClick"] = 5] = "PrimaryDeepClick";
      PressureBehavior2[PressureBehavior2["PrimaryDeepDrag"] = 6] = "PrimaryDeepDrag";
    })(PressureBehavior = NSEvent2.PressureBehavior || (NSEvent2.PressureBehavior = {}));
    global$2["NSEvent"]["PressureBehavior"] = PressureBehavior;
  })(NSEvent$1 || (NSEvent$1 = {}));
  var NSExpression;
  (function(NSExpression2) {
    let ExpressionType;
    (function(ExpressionType2) {
      ExpressionType2[ExpressionType2["ConstantValueExpressionType"] = 0] = "ConstantValueExpressionType";
      ExpressionType2[ExpressionType2["EvaluatedObjectExpressionType"] = 1] = "EvaluatedObjectExpressionType";
      ExpressionType2[ExpressionType2["VariableExpressionType"] = 2] = "VariableExpressionType";
      ExpressionType2[ExpressionType2["KeyPathExpressionType"] = 3] = "KeyPathExpressionType";
      ExpressionType2[ExpressionType2["FunctionExpressionType"] = 4] = "FunctionExpressionType";
      ExpressionType2[ExpressionType2["UnionSetExpressionType"] = 5] = "UnionSetExpressionType";
      ExpressionType2[ExpressionType2["IntersectSetExpressionType"] = 6] = "IntersectSetExpressionType";
      ExpressionType2[ExpressionType2["MinusSetExpressionType"] = 7] = "MinusSetExpressionType";
      ExpressionType2[ExpressionType2["SubqueryExpressionType"] = 13] = "SubqueryExpressionType";
      ExpressionType2[ExpressionType2["AggregateExpressionType"] = 14] = "AggregateExpressionType";
      ExpressionType2[ExpressionType2["AnyKeyExpressionType"] = 15] = "AnyKeyExpressionType";
      ExpressionType2[ExpressionType2["BlockExpressionType"] = 19] = "BlockExpressionType";
      ExpressionType2[ExpressionType2["ConditionalExpressionType"] = 20] = "ConditionalExpressionType";
    })(ExpressionType = NSExpression2.ExpressionType || (NSExpression2.ExpressionType = {}));
    global$2["NSExpression"]["ExpressionType"] = ExpressionType;
  })(NSExpression || (NSExpression = {}));
  var NSFileCoordinator;
  (function(NSFileCoordinator2) {
    let ReadingOptions;
    (function(ReadingOptions2) {
      ReadingOptions2[ReadingOptions2["WithoutChanges"] = 1] = "WithoutChanges";
      ReadingOptions2[ReadingOptions2["ResolvesSymbolicLink"] = 2] = "ResolvesSymbolicLink";
      ReadingOptions2[ReadingOptions2["ImmediatelyAvailableMetadataOnly"] = 4] = "ImmediatelyAvailableMetadataOnly";
      ReadingOptions2[ReadingOptions2["ForUploading"] = 8] = "ForUploading";
    })(ReadingOptions = NSFileCoordinator2.ReadingOptions || (NSFileCoordinator2.ReadingOptions = {}));
    global$2["NSFileCoordinator"]["ReadingOptions"] = ReadingOptions;
    let WritingOptions;
    (function(WritingOptions2) {
      WritingOptions2[WritingOptions2["ForDeleting"] = 1] = "ForDeleting";
      WritingOptions2[WritingOptions2["ForMoving"] = 2] = "ForMoving";
      WritingOptions2[WritingOptions2["ForMerging"] = 4] = "ForMerging";
      WritingOptions2[WritingOptions2["ForReplacing"] = 8] = "ForReplacing";
      WritingOptions2[WritingOptions2["ContentIndependentMetadataOnly"] = 16] = "ContentIndependentMetadataOnly";
    })(WritingOptions = NSFileCoordinator2.WritingOptions || (NSFileCoordinator2.WritingOptions = {}));
    global$2["NSFileCoordinator"]["WritingOptions"] = WritingOptions;
  })(NSFileCoordinator || (NSFileCoordinator = {}));
  var NSFileVersion;
  (function(NSFileVersion2) {
    let AddingOptions;
    (function(AddingOptions2) {
      AddingOptions2[AddingOptions2["ByMoving"] = 1] = "ByMoving";
    })(AddingOptions = NSFileVersion2.AddingOptions || (NSFileVersion2.AddingOptions = {}));
    global$2["NSFileVersion"]["AddingOptions"] = AddingOptions;
    let ReplacingOptions;
    (function(ReplacingOptions2) {
      ReplacingOptions2[ReplacingOptions2["ByMoving"] = 1] = "ByMoving";
    })(ReplacingOptions = NSFileVersion2.ReplacingOptions || (NSFileVersion2.ReplacingOptions = {}));
    global$2["NSFileVersion"]["ReplacingOptions"] = ReplacingOptions;
  })(NSFileVersion || (NSFileVersion = {}));
  var NSFontAssetRequest;
  (function(NSFontAssetRequest2) {
    let Options;
    (function(Options2) {
      Options2[Options2["UsesStandardUI"] = 1] = "UsesStandardUI";
    })(Options = NSFontAssetRequest2.Options || (NSFontAssetRequest2.Options = {}));
    global$2["NSFontAssetRequest"]["Options"] = Options;
  })(NSFontAssetRequest || (NSFontAssetRequest = {}));
  var NSFontCollection;
  (function(NSFontCollection2) {
    let Visibility;
    (function(Visibility2) {
      Visibility2[Visibility2["Process"] = 1] = "Process";
      Visibility2[Visibility2["User"] = 2] = "User";
      Visibility2[Visibility2["Computer"] = 4] = "Computer";
    })(Visibility = NSFontCollection2.Visibility || (NSFontCollection2.Visibility = {}));
    global$2["NSFontCollection"]["Visibility"] = Visibility;
  })(NSFontCollection || (NSFontCollection = {}));
  var NSFontDescriptor;
  (function(NSFontDescriptor2) {
    let SymbolicTraits;
    (function(SymbolicTraits2) {
      SymbolicTraits2[SymbolicTraits2["TraitItalic"] = 1] = "TraitItalic";
      SymbolicTraits2[SymbolicTraits2["TraitBold"] = 2] = "TraitBold";
      SymbolicTraits2[SymbolicTraits2["TraitExpanded"] = 32] = "TraitExpanded";
      SymbolicTraits2[SymbolicTraits2["TraitCondensed"] = 64] = "TraitCondensed";
      SymbolicTraits2[SymbolicTraits2["TraitMonoSpace"] = 1024] = "TraitMonoSpace";
      SymbolicTraits2[SymbolicTraits2["TraitVertical"] = 2048] = "TraitVertical";
      SymbolicTraits2[SymbolicTraits2["TraitUIOptimized"] = 4096] = "TraitUIOptimized";
      SymbolicTraits2[SymbolicTraits2["TraitTightLeading"] = 32768] = "TraitTightLeading";
      SymbolicTraits2[SymbolicTraits2["TraitLooseLeading"] = 65536] = "TraitLooseLeading";
      SymbolicTraits2[SymbolicTraits2["ClassMask"] = 4026531840] = "ClassMask";
      SymbolicTraits2[SymbolicTraits2["ClassUnknown"] = 0] = "ClassUnknown";
      SymbolicTraits2[SymbolicTraits2["ClassOldStyleSerifs"] = 268435456] = "ClassOldStyleSerifs";
      SymbolicTraits2[SymbolicTraits2["ClassTransitionalSerifs"] = 536870912] = "ClassTransitionalSerifs";
      SymbolicTraits2[SymbolicTraits2["ClassModernSerifs"] = 805306368] = "ClassModernSerifs";
      SymbolicTraits2[SymbolicTraits2["ClassClarendonSerifs"] = 1073741824] = "ClassClarendonSerifs";
      SymbolicTraits2[SymbolicTraits2["ClassSlabSerifs"] = 1342177280] = "ClassSlabSerifs";
      SymbolicTraits2[SymbolicTraits2["ClassFreeformSerifs"] = 1879048192] = "ClassFreeformSerifs";
      SymbolicTraits2[SymbolicTraits2["ClassSansSerif"] = 2147483648] = "ClassSansSerif";
      SymbolicTraits2[SymbolicTraits2["ClassOrnamentals"] = 2415919104] = "ClassOrnamentals";
      SymbolicTraits2[SymbolicTraits2["ClassScripts"] = 2684354560] = "ClassScripts";
      SymbolicTraits2[SymbolicTraits2["ClassSymbolic"] = 3221225472] = "ClassSymbolic";
    })(SymbolicTraits = NSFontDescriptor2.SymbolicTraits || (NSFontDescriptor2.SymbolicTraits = {}));
    global$2["NSFontDescriptor"]["SymbolicTraits"] = SymbolicTraits;
  })(NSFontDescriptor || (NSFontDescriptor = {}));
  var NSFontPanel;
  (function(NSFontPanel2) {
    let ModeMask;
    (function(ModeMask2) {
      ModeMask2[ModeMask2["ModeMaskFace"] = 1] = "ModeMaskFace";
      ModeMask2[ModeMask2["ModeMaskSize"] = 2] = "ModeMaskSize";
      ModeMask2[ModeMask2["ModeMaskCollection"] = 4] = "ModeMaskCollection";
      ModeMask2[ModeMask2["ModeMaskUnderlineEffect"] = 256] = "ModeMaskUnderlineEffect";
      ModeMask2[ModeMask2["ModeMaskStrikethroughEffect"] = 512] = "ModeMaskStrikethroughEffect";
      ModeMask2[ModeMask2["ModeMaskTextColorEffect"] = 1024] = "ModeMaskTextColorEffect";
      ModeMask2[ModeMask2["ModeMaskDocumentColorEffect"] = 2048] = "ModeMaskDocumentColorEffect";
      ModeMask2[ModeMask2["ModeMaskShadowEffect"] = 4096] = "ModeMaskShadowEffect";
      ModeMask2[ModeMask2["ModeMaskAllEffects"] = 1048320] = "ModeMaskAllEffects";
      ModeMask2[ModeMask2["ModesMaskStandardModes"] = 65535] = "ModesMaskStandardModes";
      ModeMask2[ModeMask2["ModesMaskAllModes"] = 4294967295] = "ModesMaskAllModes";
    })(ModeMask = NSFontPanel2.ModeMask || (NSFontPanel2.ModeMask = {}));
    global$2["NSFontPanel"]["ModeMask"] = ModeMask;
  })(NSFontPanel || (NSFontPanel = {}));
  var NSGestureRecognizer;
  (function(NSGestureRecognizer2) {
    let State;
    (function(State2) {
      State2[State2["Possible"] = 0] = "Possible";
      State2[State2["Began"] = 1] = "Began";
      State2[State2["Changed"] = 2] = "Changed";
      State2[State2["Ended"] = 3] = "Ended";
      State2[State2["Cancelled"] = 4] = "Cancelled";
      State2[State2["Failed"] = 5] = "Failed";
      State2[State2["Recognized"] = 3] = "Recognized";
    })(State = NSGestureRecognizer2.State || (NSGestureRecognizer2.State = {}));
    global$2["NSGestureRecognizer"]["State"] = State;
  })(NSGestureRecognizer || (NSGestureRecognizer = {}));
  var NSGradient;
  (function(NSGradient2) {
    let DrawingOptions;
    (function(DrawingOptions2) {
      DrawingOptions2[DrawingOptions2["DrawsBeforeStartingLocation"] = 1] = "DrawsBeforeStartingLocation";
      DrawingOptions2[DrawingOptions2["DrawsAfterEndingLocation"] = 2] = "DrawsAfterEndingLocation";
    })(DrawingOptions = NSGradient2.DrawingOptions || (NSGradient2.DrawingOptions = {}));
    global$2["NSGradient"]["DrawingOptions"] = DrawingOptions;
  })(NSGradient || (NSGradient = {}));
  var NSGridCell$1;
  (function(NSGridCell2) {
    let Placement;
    (function(Placement2) {
      Placement2[Placement2["Inherited"] = 0] = "Inherited";
      Placement2[Placement2["None"] = 1] = "None";
      Placement2[Placement2["Leading"] = 2] = "Leading";
      Placement2[Placement2["Top"] = 2] = "Top";
      Placement2[Placement2["Trailing"] = 3] = "Trailing";
      Placement2[Placement2["Bottom"] = 3] = "Bottom";
      Placement2[Placement2["Center"] = 4] = "Center";
      Placement2[Placement2["Fill"] = 5] = "Fill";
    })(Placement = NSGridCell2.Placement || (NSGridCell2.Placement = {}));
    global$2["NSGridCell"]["Placement"] = Placement;
  })(NSGridCell$1 || (NSGridCell$1 = {}));
  var NSGridRow$1;
  (function(NSGridRow2) {
    let Alignment;
    (function(Alignment2) {
      Alignment2[Alignment2["Inherited"] = 0] = "Inherited";
      Alignment2[Alignment2["None"] = 1] = "None";
      Alignment2[Alignment2["FirstBaseline"] = 2] = "FirstBaseline";
      Alignment2[Alignment2["LastBaseline"] = 3] = "LastBaseline";
    })(Alignment = NSGridRow2.Alignment || (NSGridRow2.Alignment = {}));
    global$2["NSGridRow"]["Alignment"] = Alignment;
  })(NSGridRow$1 || (NSGridRow$1 = {}));
  var NSHapticFeedbackManager;
  (function(NSHapticFeedbackManager2) {
    let FeedbackPattern;
    (function(FeedbackPattern2) {
      FeedbackPattern2[FeedbackPattern2["Generic"] = 0] = "Generic";
      FeedbackPattern2[FeedbackPattern2["Alignment"] = 1] = "Alignment";
      FeedbackPattern2[FeedbackPattern2["LevelChange"] = 2] = "LevelChange";
    })(FeedbackPattern = NSHapticFeedbackManager2.FeedbackPattern || (NSHapticFeedbackManager2.FeedbackPattern = {}));
    global$2["NSHapticFeedbackManager"]["FeedbackPattern"] = FeedbackPattern;
    let PerformanceTime;
    (function(PerformanceTime2) {
      PerformanceTime2[PerformanceTime2["Default"] = 0] = "Default";
      PerformanceTime2[PerformanceTime2["Now"] = 1] = "Now";
      PerformanceTime2[PerformanceTime2["DrawCompleted"] = 2] = "DrawCompleted";
    })(PerformanceTime = NSHapticFeedbackManager2.PerformanceTime || (NSHapticFeedbackManager2.PerformanceTime = {}));
    global$2["NSHapticFeedbackManager"]["PerformanceTime"] = PerformanceTime;
  })(NSHapticFeedbackManager || (NSHapticFeedbackManager = {}));
  var NSImage;
  (function(NSImage2) {
    let CacheMode;
    (function(CacheMode2) {
      CacheMode2[CacheMode2["Default"] = 0] = "Default";
      CacheMode2[CacheMode2["Always"] = 1] = "Always";
      CacheMode2[CacheMode2["BySize"] = 2] = "BySize";
      CacheMode2[CacheMode2["Never"] = 3] = "Never";
    })(CacheMode = NSImage2.CacheMode || (NSImage2.CacheMode = {}));
    global$2["NSImage"]["CacheMode"] = CacheMode;
    let LayoutDirection;
    (function(LayoutDirection2) {
      LayoutDirection2[LayoutDirection2["Unspecified"] = -1] = "Unspecified";
      LayoutDirection2[LayoutDirection2["LeftToRight"] = 2] = "LeftToRight";
      LayoutDirection2[LayoutDirection2["RightToLeft"] = 3] = "RightToLeft";
    })(LayoutDirection = NSImage2.LayoutDirection || (NSImage2.LayoutDirection = {}));
    global$2["NSImage"]["LayoutDirection"] = LayoutDirection;
    let LoadStatus;
    (function(LoadStatus2) {
      LoadStatus2[LoadStatus2["Completed"] = 0] = "Completed";
      LoadStatus2[LoadStatus2["Cancelled"] = 1] = "Cancelled";
      LoadStatus2[LoadStatus2["InvalidData"] = 2] = "InvalidData";
      LoadStatus2[LoadStatus2["UnexpectedEOF"] = 3] = "UnexpectedEOF";
      LoadStatus2[LoadStatus2["ReadError"] = 4] = "ReadError";
    })(LoadStatus = NSImage2.LoadStatus || (NSImage2.LoadStatus = {}));
    global$2["NSImage"]["LoadStatus"] = LoadStatus;
    let ResizingMode;
    (function(ResizingMode2) {
      ResizingMode2[ResizingMode2["Stretch"] = 0] = "Stretch";
      ResizingMode2[ResizingMode2["Tile"] = 1] = "Tile";
    })(ResizingMode = NSImage2.ResizingMode || (NSImage2.ResizingMode = {}));
    global$2["NSImage"]["ResizingMode"] = ResizingMode;
  })(NSImage || (NSImage = {}));
  var NSImageView$1;
  (function(NSImageView2) {
    let FrameStyle;
    (function(FrameStyle2) {
      FrameStyle2[FrameStyle2["None"] = 0] = "None";
      FrameStyle2[FrameStyle2["Photo"] = 1] = "Photo";
      FrameStyle2[FrameStyle2["GrayBezel"] = 2] = "GrayBezel";
      FrameStyle2[FrameStyle2["Groove"] = 3] = "Groove";
      FrameStyle2[FrameStyle2["Button"] = 4] = "Button";
    })(FrameStyle = NSImageView2.FrameStyle || (NSImageView2.FrameStyle = {}));
    global$2["NSImageView"]["FrameStyle"] = FrameStyle;
  })(NSImageView$1 || (NSImageView$1 = {}));
  var NSItemProvider;
  (function(NSItemProvider2) {
    let ErrorCode;
    (function(ErrorCode2) {
      ErrorCode2[ErrorCode2["UnknownError"] = -1] = "UnknownError";
      ErrorCode2[ErrorCode2["ItemUnavailableError"] = -1e3] = "ItemUnavailableError";
      ErrorCode2[ErrorCode2["UnexpectedValueClassError"] = -1100] = "UnexpectedValueClassError";
      ErrorCode2[ErrorCode2["UnavailableCoercionError"] = -1200] = "UnavailableCoercionError";
    })(ErrorCode = NSItemProvider2.ErrorCode || (NSItemProvider2.ErrorCode = {}));
    global$2["NSItemProvider"]["ErrorCode"] = ErrorCode;
  })(NSItemProvider || (NSItemProvider = {}));
  var NSLayoutConstraint$1;
  (function(NSLayoutConstraint2) {
    let Attribute;
    (function(Attribute2) {
      Attribute2[Attribute2["Left"] = 1] = "Left";
      Attribute2[Attribute2["Right"] = 2] = "Right";
      Attribute2[Attribute2["Top"] = 3] = "Top";
      Attribute2[Attribute2["Bottom"] = 4] = "Bottom";
      Attribute2[Attribute2["Leading"] = 5] = "Leading";
      Attribute2[Attribute2["Trailing"] = 6] = "Trailing";
      Attribute2[Attribute2["Width"] = 7] = "Width";
      Attribute2[Attribute2["Height"] = 8] = "Height";
      Attribute2[Attribute2["CenterX"] = 9] = "CenterX";
      Attribute2[Attribute2["CenterY"] = 10] = "CenterY";
      Attribute2[Attribute2["LastBaseline"] = 11] = "LastBaseline";
      Attribute2[Attribute2["Baseline"] = 11] = "Baseline";
      Attribute2[Attribute2["FirstBaseline"] = 12] = "FirstBaseline";
      Attribute2[Attribute2["NotAnAttribute"] = 0] = "NotAnAttribute";
    })(Attribute = NSLayoutConstraint2.Attribute || (NSLayoutConstraint2.Attribute = {}));
    global$2["NSLayoutConstraint"]["Attribute"] = Attribute;
    let Orientation;
    (function(Orientation2) {
      Orientation2[Orientation2["Horizontal"] = 0] = "Horizontal";
      Orientation2[Orientation2["Vertical"] = 1] = "Vertical";
    })(Orientation = NSLayoutConstraint2.Orientation || (NSLayoutConstraint2.Orientation = {}));
    global$2["NSLayoutConstraint"]["Orientation"] = Orientation;
    let FormatOptions;
    (function(FormatOptions2) {
      FormatOptions2[FormatOptions2["AlignAllLeft"] = 2] = "AlignAllLeft";
      FormatOptions2[FormatOptions2["AlignAllRight"] = 4] = "AlignAllRight";
      FormatOptions2[FormatOptions2["AlignAllTop"] = 8] = "AlignAllTop";
      FormatOptions2[FormatOptions2["AlignAllBottom"] = 16] = "AlignAllBottom";
      FormatOptions2[FormatOptions2["AlignAllLeading"] = 32] = "AlignAllLeading";
      FormatOptions2[FormatOptions2["AlignAllTrailing"] = 64] = "AlignAllTrailing";
      FormatOptions2[FormatOptions2["AlignAllCenterX"] = 512] = "AlignAllCenterX";
      FormatOptions2[FormatOptions2["AlignAllCenterY"] = 1024] = "AlignAllCenterY";
      FormatOptions2[FormatOptions2["AlignAllLastBaseline"] = 2048] = "AlignAllLastBaseline";
      FormatOptions2[FormatOptions2["AlignAllFirstBaseline"] = 4096] = "AlignAllFirstBaseline";
      FormatOptions2[FormatOptions2["AlignAllBaseline"] = 2048] = "AlignAllBaseline";
      FormatOptions2[FormatOptions2["AlignmentMask"] = 65535] = "AlignmentMask";
      FormatOptions2[FormatOptions2["DirectionLeadingToTrailing"] = 0] = "DirectionLeadingToTrailing";
      FormatOptions2[FormatOptions2["DirectionLeftToRight"] = 65536] = "DirectionLeftToRight";
      FormatOptions2[FormatOptions2["DirectionRightToLeft"] = 131072] = "DirectionRightToLeft";
      FormatOptions2[FormatOptions2["DirectionMask"] = 196608] = "DirectionMask";
    })(FormatOptions = NSLayoutConstraint2.FormatOptions || (NSLayoutConstraint2.FormatOptions = {}));
    global$2["NSLayoutConstraint"]["FormatOptions"] = FormatOptions;
    let Relation;
    (function(Relation2) {
      Relation2[Relation2["LessThanOrEqual"] = -1] = "LessThanOrEqual";
      Relation2[Relation2["Equal"] = 0] = "Equal";
      Relation2[Relation2["GreaterThanOrEqual"] = 1] = "GreaterThanOrEqual";
    })(Relation = NSLayoutConstraint2.Relation || (NSLayoutConstraint2.Relation = {}));
    global$2["NSLayoutConstraint"]["Relation"] = Relation;
  })(NSLayoutConstraint$1 || (NSLayoutConstraint$1 = {}));
  var NSLayoutManager$1;
  (function(NSLayoutManager2) {
    let ControlCharacterAction;
    (function(ControlCharacterAction2) {
      ControlCharacterAction2[ControlCharacterAction2["ZeroAdvancement"] = 1] = "ZeroAdvancement";
      ControlCharacterAction2[ControlCharacterAction2["Whitespace"] = 2] = "Whitespace";
      ControlCharacterAction2[ControlCharacterAction2["HorizontalTab"] = 4] = "HorizontalTab";
      ControlCharacterAction2[ControlCharacterAction2["LineBreak"] = 8] = "LineBreak";
      ControlCharacterAction2[ControlCharacterAction2["ParagraphBreak"] = 16] = "ParagraphBreak";
      ControlCharacterAction2[ControlCharacterAction2["ContainerBreak"] = 32] = "ContainerBreak";
    })(ControlCharacterAction = NSLayoutManager2.ControlCharacterAction || (NSLayoutManager2.ControlCharacterAction = {}));
    global$2["NSLayoutManager"]["ControlCharacterAction"] = ControlCharacterAction;
    let GlyphProperty;
    (function(GlyphProperty2) {
      GlyphProperty2[GlyphProperty2["Null"] = 1] = "Null";
      GlyphProperty2[GlyphProperty2["ControlCharacter"] = 2] = "ControlCharacter";
      GlyphProperty2[GlyphProperty2["Elastic"] = 4] = "Elastic";
      GlyphProperty2[GlyphProperty2["NonBaseCharacter"] = 8] = "NonBaseCharacter";
    })(GlyphProperty = NSLayoutManager2.GlyphProperty || (NSLayoutManager2.GlyphProperty = {}));
    global$2["NSLayoutManager"]["GlyphProperty"] = GlyphProperty;
    let TextLayoutOrientation;
    (function(TextLayoutOrientation2) {
      TextLayoutOrientation2[TextLayoutOrientation2["Horizontal"] = 0] = "Horizontal";
      TextLayoutOrientation2[TextLayoutOrientation2["Vertical"] = 1] = "Vertical";
    })(TextLayoutOrientation = NSLayoutManager2.TextLayoutOrientation || (NSLayoutManager2.TextLayoutOrientation = {}));
    global$2["NSLayoutManager"]["TextLayoutOrientation"] = TextLayoutOrientation;
    let TypesetterBehavior;
    (function(TypesetterBehavior2) {
      TypesetterBehavior2[TypesetterBehavior2["LatestBehavior"] = -1] = "LatestBehavior";
      TypesetterBehavior2[TypesetterBehavior2["OriginalBehavior"] = 0] = "OriginalBehavior";
      TypesetterBehavior2[TypesetterBehavior2["Behavior_10_2_WithCompatibility"] = 1] = "Behavior_10_2_WithCompatibility";
      TypesetterBehavior2[TypesetterBehavior2["Behavior_10_2"] = 2] = "Behavior_10_2";
      TypesetterBehavior2[TypesetterBehavior2["Behavior_10_3"] = 3] = "Behavior_10_3";
      TypesetterBehavior2[TypesetterBehavior2["Behavior_10_4"] = 4] = "Behavior_10_4";
    })(TypesetterBehavior = NSLayoutManager2.TypesetterBehavior || (NSLayoutManager2.TypesetterBehavior = {}));
    global$2["NSLayoutManager"]["TypesetterBehavior"] = TypesetterBehavior;
  })(NSLayoutManager$1 || (NSLayoutManager$1 = {}));
  var NSLevelIndicator$1;
  (function(NSLevelIndicator2) {
    let PlaceholderVisibility;
    (function(PlaceholderVisibility2) {
      PlaceholderVisibility2[PlaceholderVisibility2["Automatic"] = 0] = "Automatic";
      PlaceholderVisibility2[PlaceholderVisibility2["Always"] = 1] = "Always";
      PlaceholderVisibility2[PlaceholderVisibility2["WhileEditing"] = 2] = "WhileEditing";
    })(PlaceholderVisibility = NSLevelIndicator2.PlaceholderVisibility || (NSLevelIndicator2.PlaceholderVisibility = {}));
    global$2["NSLevelIndicator"]["PlaceholderVisibility"] = PlaceholderVisibility;
    let Style;
    (function(Style2) {
      Style2[Style2["Relevancy"] = 0] = "Relevancy";
      Style2[Style2["ContinuousCapacity"] = 1] = "ContinuousCapacity";
      Style2[Style2["DiscreteCapacity"] = 2] = "DiscreteCapacity";
      Style2[Style2["Rating"] = 3] = "Rating";
    })(Style = NSLevelIndicator2.Style || (NSLevelIndicator2.Style = {}));
    global$2["NSLevelIndicator"]["Style"] = Style;
  })(NSLevelIndicator$1 || (NSLevelIndicator$1 = {}));
  var NSLinguisticTagger;
  (function(NSLinguisticTagger2) {
    let Options;
    (function(Options2) {
      Options2[Options2["OmitWords"] = 1] = "OmitWords";
      Options2[Options2["OmitPunctuation"] = 2] = "OmitPunctuation";
      Options2[Options2["OmitWhitespace"] = 4] = "OmitWhitespace";
      Options2[Options2["OmitOther"] = 8] = "OmitOther";
      Options2[Options2["JoinNames"] = 16] = "JoinNames";
    })(Options = NSLinguisticTagger2.Options || (NSLinguisticTagger2.Options = {}));
    global$2["NSLinguisticTagger"]["Options"] = Options;
  })(NSLinguisticTagger || (NSLinguisticTagger = {}));
  var NSLocale;
  (function(NSLocale2) {
    let LanguageDirection;
    (function(LanguageDirection2) {
      LanguageDirection2[LanguageDirection2["Unknown"] = 0] = "Unknown";
      LanguageDirection2[LanguageDirection2["LeftToRight"] = 1] = "LeftToRight";
      LanguageDirection2[LanguageDirection2["RightToLeft"] = 2] = "RightToLeft";
      LanguageDirection2[LanguageDirection2["TopToBottom"] = 3] = "TopToBottom";
      LanguageDirection2[LanguageDirection2["BottomToTop"] = 4] = "BottomToTop";
    })(LanguageDirection = NSLocale2.LanguageDirection || (NSLocale2.LanguageDirection = {}));
    global$2["NSLocale"]["LanguageDirection"] = LanguageDirection;
  })(NSLocale || (NSLocale = {}));
  var NSMachPort;
  (function(NSMachPort2) {
    let Options;
    (function(Options2) {
      Options2[Options2["DeallocateNone"] = 0] = "DeallocateNone";
      Options2[Options2["DeallocateSendRight"] = 1] = "DeallocateSendRight";
      Options2[Options2["DeallocateReceiveRight"] = 2] = "DeallocateReceiveRight";
    })(Options = NSMachPort2.Options || (NSMachPort2.Options = {}));
    global$2["NSMachPort"]["Options"] = Options;
  })(NSMachPort || (NSMachPort = {}));
  var NSMatrix$1;
  (function(NSMatrix2) {
    let Mode;
    (function(Mode2) {
      Mode2[Mode2["RadioModeMatrix"] = 0] = "RadioModeMatrix";
      Mode2[Mode2["HighlightModeMatrix"] = 1] = "HighlightModeMatrix";
      Mode2[Mode2["ListModeMatrix"] = 2] = "ListModeMatrix";
      Mode2[Mode2["TrackModeMatrix"] = 3] = "TrackModeMatrix";
    })(Mode = NSMatrix2.Mode || (NSMatrix2.Mode = {}));
    global$2["NSMatrix"]["Mode"] = Mode;
  })(NSMatrix$1 || (NSMatrix$1 = {}));
  var NSMediaLibraryBrowserController;
  (function(NSMediaLibraryBrowserController2) {
    let Library;
    (function(Library2) {
      Library2[Library2["Audio"] = 1] = "Audio";
      Library2[Library2["Image"] = 2] = "Image";
      Library2[Library2["Movie"] = 4] = "Movie";
    })(Library = NSMediaLibraryBrowserController2.Library || (NSMediaLibraryBrowserController2.Library = {}));
    global$2["NSMediaLibraryBrowserController"]["Library"] = Library;
  })(NSMediaLibraryBrowserController || (NSMediaLibraryBrowserController = {}));
  var NSMenu;
  (function(NSMenu2) {
    let Properties;
    (function(Properties2) {
      Properties2[Properties2["PropertyItemTitle"] = 1] = "PropertyItemTitle";
      Properties2[Properties2["PropertyItemAttributedTitle"] = 2] = "PropertyItemAttributedTitle";
      Properties2[Properties2["PropertyItemKeyEquivalent"] = 4] = "PropertyItemKeyEquivalent";
      Properties2[Properties2["PropertyItemImage"] = 8] = "PropertyItemImage";
      Properties2[Properties2["PropertyItemEnabled"] = 16] = "PropertyItemEnabled";
      Properties2[Properties2["PropertyItemAccessibilityDescription"] = 32] = "PropertyItemAccessibilityDescription";
    })(Properties = NSMenu2.Properties || (NSMenu2.Properties = {}));
    global$2["NSMenu"]["Properties"] = Properties;
  })(NSMenu || (NSMenu = {}));
  var NSPDFPanel;
  (function(NSPDFPanel2) {
    let Options;
    (function(Options2) {
      Options2[Options2["ShowsPaperSize"] = 4] = "ShowsPaperSize";
      Options2[Options2["ShowsOrientation"] = 8] = "ShowsOrientation";
      Options2[Options2["RequestsParentDirectory"] = 16777216] = "RequestsParentDirectory";
    })(Options = NSPDFPanel2.Options || (NSPDFPanel2.Options = {}));
    global$2["NSPDFPanel"]["Options"] = Options;
  })(NSPDFPanel || (NSPDFPanel = {}));
  var NSPageController;
  (function(NSPageController2) {
    let TransitionStyle;
    (function(TransitionStyle2) {
      TransitionStyle2[TransitionStyle2["StackHistory"] = 0] = "StackHistory";
      TransitionStyle2[TransitionStyle2["StackBook"] = 1] = "StackBook";
      TransitionStyle2[TransitionStyle2["HorizontalStrip"] = 2] = "HorizontalStrip";
    })(TransitionStyle = NSPageController2.TransitionStyle || (NSPageController2.TransitionStyle = {}));
    global$2["NSPageController"]["TransitionStyle"] = TransitionStyle;
  })(NSPageController || (NSPageController = {}));
  var NSParagraphStyle;
  (function(NSParagraphStyle2) {
    let TextTabType;
    (function(TextTabType2) {
      TextTabType2[TextTabType2["LeftTabStopType"] = 0] = "LeftTabStopType";
      TextTabType2[TextTabType2["RightTabStopType"] = 1] = "RightTabStopType";
      TextTabType2[TextTabType2["CenterTabStopType"] = 2] = "CenterTabStopType";
      TextTabType2[TextTabType2["DecimalTabStopType"] = 3] = "DecimalTabStopType";
    })(TextTabType = NSParagraphStyle2.TextTabType || (NSParagraphStyle2.TextTabType = {}));
    global$2["NSParagraphStyle"]["TextTabType"] = TextTabType;
    (function(LineBreakStrategy2) {
      LineBreakStrategy2[LineBreakStrategy2["pushOut"] = 0] = "pushOut";
      LineBreakStrategy2[LineBreakStrategy2["hangulWordPriority"] = 1] = "hangulWordPriority";
      LineBreakStrategy2[LineBreakStrategy2["standard"] = 2] = "standard";
    })(NSParagraphStyle2.LineBreakStrategy || (NSParagraphStyle2.LineBreakStrategy = {}));
  })(NSParagraphStyle || (NSParagraphStyle = {}));
  var NSPasteboard;
  (function(NSPasteboard2) {
    let ContentsOptions;
    (function(ContentsOptions2) {
      ContentsOptions2[ContentsOptions2["CurrentHostOnly"] = 1] = "CurrentHostOnly";
    })(ContentsOptions = NSPasteboard2.ContentsOptions || (NSPasteboard2.ContentsOptions = {}));
    global$2["NSPasteboard"]["ContentsOptions"] = ContentsOptions;
    let ReadingOptions;
    (function(ReadingOptions2) {
      ReadingOptions2[ReadingOptions2["AsData"] = 0] = "AsData";
      ReadingOptions2[ReadingOptions2["AsString"] = 1] = "AsString";
      ReadingOptions2[ReadingOptions2["AsPropertyList"] = 2] = "AsPropertyList";
      ReadingOptions2[ReadingOptions2["AsKeyedArchive"] = 4] = "AsKeyedArchive";
    })(ReadingOptions = NSPasteboard2.ReadingOptions || (NSPasteboard2.ReadingOptions = {}));
    global$2["NSPasteboard"]["ReadingOptions"] = ReadingOptions;
    let WritingOptions;
    (function(WritingOptions2) {
      WritingOptions2[WritingOptions2["Promised"] = 512] = "Promised";
    })(WritingOptions = NSPasteboard2.WritingOptions || (NSPasteboard2.WritingOptions = {}));
    global$2["NSPasteboard"]["WritingOptions"] = WritingOptions;
  })(NSPasteboard || (NSPasteboard = {}));
  var NSPathControl$1;
  (function(NSPathControl2) {
    let Style;
    (function(Style2) {
      Style2[Style2["Standard"] = 0] = "Standard";
      Style2[Style2["PopUp"] = 2] = "PopUp";
      Style2[Style2["NavigationBar"] = 1] = "NavigationBar";
    })(Style = NSPathControl2.Style || (NSPathControl2.Style = {}));
    global$2["NSPathControl"]["Style"] = Style;
  })(NSPathControl$1 || (NSPathControl$1 = {}));
  var NSPickerTouchBarItem;
  (function(NSPickerTouchBarItem2) {
    let ControlRepresentation;
    (function(ControlRepresentation2) {
      ControlRepresentation2[ControlRepresentation2["Automatic"] = 0] = "Automatic";
      ControlRepresentation2[ControlRepresentation2["Expanded"] = 1] = "Expanded";
      ControlRepresentation2[ControlRepresentation2["Collapsed"] = 2] = "Collapsed";
    })(ControlRepresentation = NSPickerTouchBarItem2.ControlRepresentation || (NSPickerTouchBarItem2.ControlRepresentation = {}));
    global$2["NSPickerTouchBarItem"]["ControlRepresentation"] = ControlRepresentation;
    let SelectionMode;
    (function(SelectionMode2) {
      SelectionMode2[SelectionMode2["SelectOne"] = 0] = "SelectOne";
      SelectionMode2[SelectionMode2["SelectAny"] = 1] = "SelectAny";
      SelectionMode2[SelectionMode2["Momentary"] = 2] = "Momentary";
    })(SelectionMode = NSPickerTouchBarItem2.SelectionMode || (NSPickerTouchBarItem2.SelectionMode = {}));
    global$2["NSPickerTouchBarItem"]["SelectionMode"] = SelectionMode;
  })(NSPickerTouchBarItem || (NSPickerTouchBarItem = {}));
  var NSPointerFunctions;
  (function(NSPointerFunctions2) {
    let Options;
    (function(Options2) {
      Options2[Options2["StrongMemory"] = 0] = "StrongMemory";
      Options2[Options2["ZeroingWeakMemory"] = 1] = "ZeroingWeakMemory";
      Options2[Options2["OpaqueMemory"] = 2] = "OpaqueMemory";
      Options2[Options2["MallocMemory"] = 3] = "MallocMemory";
      Options2[Options2["MachVirtualMemory"] = 4] = "MachVirtualMemory";
      Options2[Options2["WeakMemory"] = 5] = "WeakMemory";
      Options2[Options2["ObjectPersonality"] = 0] = "ObjectPersonality";
      Options2[Options2["OpaquePersonality"] = 256] = "OpaquePersonality";
      Options2[Options2["ObjectPointerPersonality"] = 512] = "ObjectPointerPersonality";
      Options2[Options2["CStringPersonality"] = 768] = "CStringPersonality";
      Options2[Options2["StructPersonality"] = 1024] = "StructPersonality";
      Options2[Options2["IntegerPersonality"] = 1280] = "IntegerPersonality";
      Options2[Options2["CopyIn"] = 65536] = "CopyIn";
    })(Options = NSPointerFunctions2.Options || (NSPointerFunctions2.Options = {}));
    global$2["NSPointerFunctions"]["Options"] = Options;
  })(NSPointerFunctions || (NSPointerFunctions = {}));
  var NSPopUpButton;
  (function(NSPopUpButton2) {
    let ArrowPosition;
    (function(ArrowPosition2) {
      ArrowPosition2[ArrowPosition2["NoArrow"] = 0] = "NoArrow";
      ArrowPosition2[ArrowPosition2["ArrowAtCenter"] = 1] = "ArrowAtCenter";
      ArrowPosition2[ArrowPosition2["ArrowAtBottom"] = 2] = "ArrowAtBottom";
    })(ArrowPosition = NSPopUpButton2.ArrowPosition || (NSPopUpButton2.ArrowPosition = {}));
    global$2["NSPopUpButton"]["ArrowPosition"] = ArrowPosition;
  })(NSPopUpButton || (NSPopUpButton = {}));
  var NSPopover;
  (function(NSPopover2) {
    let Behavior;
    (function(Behavior2) {
      Behavior2[Behavior2["ApplicationDefined"] = 0] = "ApplicationDefined";
      Behavior2[Behavior2["Transient"] = 1] = "Transient";
      Behavior2[Behavior2["Semitransient"] = 2] = "Semitransient";
    })(Behavior = NSPopover2.Behavior || (NSPopover2.Behavior = {}));
    global$2["NSPopover"]["Behavior"] = Behavior;
  })(NSPopover || (NSPopover = {}));
  var NSPositionalSpecifier;
  (function(NSPositionalSpecifier2) {
    let InsertionPosition;
    (function(InsertionPosition2) {
      InsertionPosition2[InsertionPosition2["PositionAfter"] = 0] = "PositionAfter";
      InsertionPosition2[InsertionPosition2["PositionBefore"] = 1] = "PositionBefore";
      InsertionPosition2[InsertionPosition2["PositionBeginning"] = 2] = "PositionBeginning";
      InsertionPosition2[InsertionPosition2["PositionEnd"] = 3] = "PositionEnd";
      InsertionPosition2[InsertionPosition2["PositionReplace"] = 4] = "PositionReplace";
    })(InsertionPosition = NSPositionalSpecifier2.InsertionPosition || (NSPositionalSpecifier2.InsertionPosition = {}));
    global$2["NSPositionalSpecifier"]["InsertionPosition"] = InsertionPosition;
  })(NSPositionalSpecifier || (NSPositionalSpecifier = {}));
  var NSPrintInfo;
  (function(NSPrintInfo2) {
    let PaperOrientation;
    (function(PaperOrientation2) {
      PaperOrientation2[PaperOrientation2["Portrait"] = 0] = "Portrait";
      PaperOrientation2[PaperOrientation2["Landscape"] = 1] = "Landscape";
    })(PaperOrientation = NSPrintInfo2.PaperOrientation || (NSPrintInfo2.PaperOrientation = {}));
    global$2["NSPrintInfo"]["PaperOrientation"] = PaperOrientation;
    let PaginationMode;
    (function(PaginationMode2) {
      PaginationMode2[PaginationMode2["Automatic"] = 0] = "Automatic";
      PaginationMode2[PaginationMode2["Fit"] = 1] = "Fit";
      PaginationMode2[PaginationMode2["Clip"] = 2] = "Clip";
    })(PaginationMode = NSPrintInfo2.PaginationMode || (NSPrintInfo2.PaginationMode = {}));
    global$2["NSPrintInfo"]["PaginationMode"] = PaginationMode;
  })(NSPrintInfo || (NSPrintInfo = {}));
  var NSPrintOperation;
  (function(NSPrintOperation2) {
    let RenderingQuality;
    (function(RenderingQuality2) {
      RenderingQuality2[RenderingQuality2["Best"] = 0] = "Best";
      RenderingQuality2[RenderingQuality2["Responsive"] = 1] = "Responsive";
    })(RenderingQuality = NSPrintOperation2.RenderingQuality || (NSPrintOperation2.RenderingQuality = {}));
    global$2["NSPrintOperation"]["RenderingQuality"] = RenderingQuality;
    let PageOrder;
    (function(PageOrder2) {
      PageOrder2[PageOrder2["DescendingPageOrder"] = -1] = "DescendingPageOrder";
      PageOrder2[PageOrder2["SpecialPageOrder"] = 0] = "SpecialPageOrder";
      PageOrder2[PageOrder2["AscendingPageOrder"] = 1] = "AscendingPageOrder";
      PageOrder2[PageOrder2["UnknownPageOrder"] = 2] = "UnknownPageOrder";
    })(PageOrder = NSPrintOperation2.PageOrder || (NSPrintOperation2.PageOrder = {}));
    global$2["NSPrintOperation"]["PageOrder"] = PageOrder;
  })(NSPrintOperation || (NSPrintOperation = {}));
  var NSPrintPanel;
  (function(NSPrintPanel2) {
    let Options;
    (function(Options2) {
      Options2[Options2["ShowsCopies"] = 1] = "ShowsCopies";
      Options2[Options2["ShowsPageRange"] = 2] = "ShowsPageRange";
      Options2[Options2["ShowsPaperSize"] = 4] = "ShowsPaperSize";
      Options2[Options2["ShowsOrientation"] = 8] = "ShowsOrientation";
      Options2[Options2["ShowsScaling"] = 16] = "ShowsScaling";
      Options2[Options2["ShowsPrintSelection"] = 32] = "ShowsPrintSelection";
      Options2[Options2["ShowsPageSetupAccessory"] = 256] = "ShowsPageSetupAccessory";
      Options2[Options2["ShowsPreview"] = 131072] = "ShowsPreview";
    })(Options = NSPrintPanel2.Options || (NSPrintPanel2.Options = {}));
    global$2["NSPrintPanel"]["Options"] = Options;
  })(NSPrintPanel || (NSPrintPanel = {}));
  var NSPrinter;
  (function(NSPrinter2) {
    let TableStatus;
    (function(TableStatus2) {
      TableStatus2[TableStatus2["OK"] = 0] = "OK";
      TableStatus2[TableStatus2["NotFound"] = 1] = "NotFound";
      TableStatus2[TableStatus2["Error"] = 2] = "Error";
    })(TableStatus = NSPrinter2.TableStatus || (NSPrinter2.TableStatus = {}));
    global$2["NSPrinter"]["TableStatus"] = TableStatus;
  })(NSPrinter || (NSPrinter = {}));
  var NSProgressIndicator$1;
  (function(NSProgressIndicator2) {
    let Style;
    (function(Style2) {
      Style2[Style2["Bar"] = 0] = "Bar";
      Style2[Style2["Spinning"] = 1] = "Spinning";
    })(Style = NSProgressIndicator2.Style || (NSProgressIndicator2.Style = {}));
    global$2["NSProgressIndicator"]["Style"] = Style;
  })(NSProgressIndicator$1 || (NSProgressIndicator$1 = {}));
  var NSRegularExpression;
  (function(NSRegularExpression2) {
    let MatchingFlags;
    (function(MatchingFlags2) {
      MatchingFlags2[MatchingFlags2["Progress"] = 1] = "Progress";
      MatchingFlags2[MatchingFlags2["Completed"] = 2] = "Completed";
      MatchingFlags2[MatchingFlags2["HitEnd"] = 4] = "HitEnd";
      MatchingFlags2[MatchingFlags2["RequiredEnd"] = 8] = "RequiredEnd";
      MatchingFlags2[MatchingFlags2["InternalError"] = 16] = "InternalError";
    })(MatchingFlags = NSRegularExpression2.MatchingFlags || (NSRegularExpression2.MatchingFlags = {}));
    global$2["NSRegularExpression"]["MatchingFlags"] = MatchingFlags;
    let MatchingOptions;
    (function(MatchingOptions2) {
      MatchingOptions2[MatchingOptions2["ReportProgress"] = 1] = "ReportProgress";
      MatchingOptions2[MatchingOptions2["ReportCompletion"] = 2] = "ReportCompletion";
      MatchingOptions2[MatchingOptions2["Anchored"] = 4] = "Anchored";
      MatchingOptions2[MatchingOptions2["WithTransparentBounds"] = 8] = "WithTransparentBounds";
      MatchingOptions2[MatchingOptions2["WithoutAnchoringBounds"] = 16] = "WithoutAnchoringBounds";
    })(MatchingOptions = NSRegularExpression2.MatchingOptions || (NSRegularExpression2.MatchingOptions = {}));
    global$2["NSRegularExpression"]["MatchingOptions"] = MatchingOptions;
    let Options;
    (function(Options2) {
      Options2[Options2["CaseInsensitive"] = 1] = "CaseInsensitive";
      Options2[Options2["AllowCommentsAndWhitespace"] = 2] = "AllowCommentsAndWhitespace";
      Options2[Options2["IgnoreMetacharacters"] = 4] = "IgnoreMetacharacters";
      Options2[Options2["DotMatchesLineSeparators"] = 8] = "DotMatchesLineSeparators";
      Options2[Options2["AnchorsMatchLines"] = 16] = "AnchorsMatchLines";
      Options2[Options2["UseUnixLineSeparators"] = 32] = "UseUnixLineSeparators";
      Options2[Options2["UseUnicodeWordBoundaries"] = 64] = "UseUnicodeWordBoundaries";
    })(Options = NSRegularExpression2.Options || (NSRegularExpression2.Options = {}));
    global$2["NSRegularExpression"]["Options"] = Options;
  })(NSRegularExpression || (NSRegularExpression = {}));
  var NSRelativeSpecifier;
  (function(NSRelativeSpecifier2) {
    let RelativePosition;
    (function(RelativePosition2) {
      RelativePosition2[RelativePosition2["After"] = 0] = "After";
      RelativePosition2[RelativePosition2["Before"] = 1] = "Before";
    })(RelativePosition = NSRelativeSpecifier2.RelativePosition || (NSRelativeSpecifier2.RelativePosition = {}));
    global$2["NSRelativeSpecifier"]["RelativePosition"] = RelativePosition;
  })(NSRelativeSpecifier || (NSRelativeSpecifier = {}));
  var NSRuleEditor$1;
  (function(NSRuleEditor2) {
    let NestingMode;
    (function(NestingMode2) {
      NestingMode2[NestingMode2["Single"] = 0] = "Single";
      NestingMode2[NestingMode2["List"] = 1] = "List";
      NestingMode2[NestingMode2["Compound"] = 2] = "Compound";
      NestingMode2[NestingMode2["Simple"] = 3] = "Simple";
    })(NestingMode = NSRuleEditor2.NestingMode || (NSRuleEditor2.NestingMode = {}));
    global$2["NSRuleEditor"]["NestingMode"] = NestingMode;
    let RowType;
    (function(RowType2) {
      RowType2[RowType2["Simple"] = 0] = "Simple";
      RowType2[RowType2["Compound"] = 1] = "Compound";
    })(RowType = NSRuleEditor2.RowType || (NSRuleEditor2.RowType = {}));
    global$2["NSRuleEditor"]["RowType"] = RowType;
  })(NSRuleEditor$1 || (NSRuleEditor$1 = {}));
  var NSRulerView$1;
  (function(NSRulerView2) {
    let Orientation;
    (function(Orientation2) {
      Orientation2[Orientation2["HorizontalRuler"] = 0] = "HorizontalRuler";
      Orientation2[Orientation2["VerticalRuler"] = 1] = "VerticalRuler";
    })(Orientation = NSRulerView2.Orientation || (NSRulerView2.Orientation = {}));
    global$2["NSRulerView"]["Orientation"] = Orientation;
  })(NSRulerView$1 || (NSRulerView$1 = {}));
  var NSScrollView$1;
  (function(NSScrollView2) {
    let Elasticity;
    (function(Elasticity2) {
      Elasticity2[Elasticity2["Automatic"] = 0] = "Automatic";
      Elasticity2[Elasticity2["None"] = 1] = "None";
      Elasticity2[Elasticity2["Allowed"] = 2] = "Allowed";
    })(Elasticity = NSScrollView2.Elasticity || (NSScrollView2.Elasticity = {}));
    global$2["NSScrollView"]["Elasticity"] = Elasticity;
    let FindBarPosition;
    (function(FindBarPosition2) {
      FindBarPosition2[FindBarPosition2["AboveHorizontalRuler"] = 0] = "AboveHorizontalRuler";
      FindBarPosition2[FindBarPosition2["AboveContent"] = 1] = "AboveContent";
      FindBarPosition2[FindBarPosition2["BelowContent"] = 2] = "BelowContent";
    })(FindBarPosition = NSScrollView2.FindBarPosition || (NSScrollView2.FindBarPosition = {}));
    global$2["NSScrollView"]["FindBarPosition"] = FindBarPosition;
  })(NSScrollView$1 || (NSScrollView$1 = {}));
  var NSScroller$1;
  (function(NSScroller2) {
    let KnobStyle;
    (function(KnobStyle2) {
      KnobStyle2[KnobStyle2["Default"] = 0] = "Default";
      KnobStyle2[KnobStyle2["Dark"] = 1] = "Dark";
      KnobStyle2[KnobStyle2["Light"] = 2] = "Light";
    })(KnobStyle = NSScroller2.KnobStyle || (NSScroller2.KnobStyle = {}));
    global$2["NSScroller"]["KnobStyle"] = KnobStyle;
    let Part;
    (function(Part2) {
      Part2[Part2["NoPart"] = 0] = "NoPart";
      Part2[Part2["DecrementPage"] = 1] = "DecrementPage";
      Part2[Part2["Knob"] = 2] = "Knob";
      Part2[Part2["IncrementPage"] = 3] = "IncrementPage";
      Part2[Part2["DecrementLine"] = 4] = "DecrementLine";
      Part2[Part2["IncrementLine"] = 5] = "IncrementLine";
      Part2[Part2["KnobSlot"] = 6] = "KnobSlot";
    })(Part = NSScroller2.Part || (NSScroller2.Part = {}));
    global$2["NSScroller"]["Part"] = Part;
    let Style;
    (function(Style2) {
      Style2[Style2["Legacy"] = 0] = "Legacy";
      Style2[Style2["Overlay"] = 1] = "Overlay";
    })(Style = NSScroller2.Style || (NSScroller2.Style = {}));
    global$2["NSScroller"]["Style"] = Style;
    let UsableParts;
    (function(UsableParts2) {
      UsableParts2[UsableParts2["NoScrollerParts"] = 0] = "NoScrollerParts";
      UsableParts2[UsableParts2["OnlyScrollerArrows"] = 1] = "OnlyScrollerArrows";
      UsableParts2[UsableParts2["AllScrollerParts"] = 2] = "AllScrollerParts";
    })(UsableParts = NSScroller2.UsableParts || (NSScroller2.UsableParts = {}));
    global$2["NSScroller"]["UsableParts"] = UsableParts;
  })(NSScroller$1 || (NSScroller$1 = {}));
  var NSScrubber$1;
  (function(NSScrubber2) {
    let Alignment;
    (function(Alignment2) {
      Alignment2[Alignment2["None"] = 0] = "None";
      Alignment2[Alignment2["Leading"] = 1] = "Leading";
      Alignment2[Alignment2["Trailing"] = 2] = "Trailing";
      Alignment2[Alignment2["Center"] = 3] = "Center";
    })(Alignment = NSScrubber2.Alignment || (NSScrubber2.Alignment = {}));
    global$2["NSScrubber"]["Alignment"] = Alignment;
    let Mode;
    (function(Mode2) {
      Mode2[Mode2["Fixed"] = 0] = "Fixed";
      Mode2[Mode2["Free"] = 1] = "Free";
    })(Mode = NSScrubber2.Mode || (NSScrubber2.Mode = {}));
    global$2["NSScrubber"]["Mode"] = Mode;
  })(NSScrubber$1 || (NSScrubber$1 = {}));
  var NSSegmentedControl$1;
  (function(NSSegmentedControl2) {
    let Distribution;
    (function(Distribution2) {
      Distribution2[Distribution2["Fit"] = 0] = "Fit";
      Distribution2[Distribution2["Fill"] = 1] = "Fill";
      Distribution2[Distribution2["FillEqually"] = 2] = "FillEqually";
      Distribution2[Distribution2["FillProportionally"] = 3] = "FillProportionally";
    })(Distribution = NSSegmentedControl2.Distribution || (NSSegmentedControl2.Distribution = {}));
    global$2["NSSegmentedControl"]["Distribution"] = Distribution;
    let Style;
    (function(Style2) {
      Style2[Style2["Automatic"] = 0] = "Automatic";
      Style2[Style2["Rounded"] = 1] = "Rounded";
      Style2[Style2["RoundRect"] = 3] = "RoundRect";
      Style2[Style2["TexturedSquare"] = 4] = "TexturedSquare";
      Style2[Style2["SmallSquare"] = 6] = "SmallSquare";
      Style2[Style2["Separated"] = 8] = "Separated";
      Style2[Style2["TexturedRounded"] = 2] = "TexturedRounded";
      Style2[Style2["Capsule"] = 5] = "Capsule";
    })(Style = NSSegmentedControl2.Style || (NSSegmentedControl2.Style = {}));
    global$2["NSSegmentedControl"]["Style"] = Style;
    let SwitchTracking;
    (function(SwitchTracking2) {
      SwitchTracking2[SwitchTracking2["SelectOne"] = 0] = "SelectOne";
      SwitchTracking2[SwitchTracking2["SelectAny"] = 1] = "SelectAny";
      SwitchTracking2[SwitchTracking2["Momentary"] = 2] = "Momentary";
      SwitchTracking2[SwitchTracking2["MomentaryAccelerator"] = 3] = "MomentaryAccelerator";
    })(SwitchTracking = NSSegmentedControl2.SwitchTracking || (NSSegmentedControl2.SwitchTracking = {}));
    global$2["NSSegmentedControl"]["SwitchTracking"] = SwitchTracking;
  })(NSSegmentedControl$1 || (NSSegmentedControl$1 = {}));
  var NSSharingService;
  (function(NSSharingService2) {
    let CloudKitOptions;
    (function(CloudKitOptions2) {
      CloudKitOptions2[CloudKitOptions2["Standard"] = 0] = "Standard";
      CloudKitOptions2[CloudKitOptions2["AllowPublic"] = 1] = "AllowPublic";
      CloudKitOptions2[CloudKitOptions2["AllowPrivate"] = 2] = "AllowPrivate";
      CloudKitOptions2[CloudKitOptions2["AllowReadOnly"] = 16] = "AllowReadOnly";
      CloudKitOptions2[CloudKitOptions2["AllowReadWrite"] = 32] = "AllowReadWrite";
    })(CloudKitOptions = NSSharingService2.CloudKitOptions || (NSSharingService2.CloudKitOptions = {}));
    global$2["NSSharingService"]["CloudKitOptions"] = CloudKitOptions;
    let SharingContentScope;
    (function(SharingContentScope2) {
      SharingContentScope2[SharingContentScope2["Item"] = 0] = "Item";
      SharingContentScope2[SharingContentScope2["Partial"] = 1] = "Partial";
      SharingContentScope2[SharingContentScope2["Full"] = 2] = "Full";
    })(SharingContentScope = NSSharingService2.SharingContentScope || (NSSharingService2.SharingContentScope = {}));
    global$2["NSSharingService"]["SharingContentScope"] = SharingContentScope;
  })(NSSharingService || (NSSharingService = {}));
  var NSSlider$1;
  (function(NSSlider2) {
    let SliderType;
    (function(SliderType2) {
      SliderType2[SliderType2["Linear"] = 0] = "Linear";
      SliderType2[SliderType2["Circular"] = 1] = "Circular";
    })(SliderType = NSSlider2.SliderType || (NSSlider2.SliderType = {}));
    global$2["NSSlider"]["SliderType"] = SliderType;
    let TickMarkPosition;
    (function(TickMarkPosition2) {
      TickMarkPosition2[TickMarkPosition2["Below"] = 0] = "Below";
      TickMarkPosition2[TickMarkPosition2["Above"] = 1] = "Above";
      TickMarkPosition2[TickMarkPosition2["Leading"] = 1] = "Leading";
      TickMarkPosition2[TickMarkPosition2["Trailing"] = 0] = "Trailing";
    })(TickMarkPosition = NSSlider2.TickMarkPosition || (NSSlider2.TickMarkPosition = {}));
    global$2["NSSlider"]["TickMarkPosition"] = TickMarkPosition;
  })(NSSlider$1 || (NSSlider$1 = {}));
  var NSSpecifierTest;
  (function(NSSpecifierTest2) {
    let TestComparisonOperation;
    (function(TestComparisonOperation2) {
      TestComparisonOperation2[TestComparisonOperation2["EqualToComparison"] = 0] = "EqualToComparison";
      TestComparisonOperation2[TestComparisonOperation2["LessThanOrEqualToComparison"] = 1] = "LessThanOrEqualToComparison";
      TestComparisonOperation2[TestComparisonOperation2["LessThanComparison"] = 2] = "LessThanComparison";
      TestComparisonOperation2[TestComparisonOperation2["GreaterThanOrEqualToComparison"] = 3] = "GreaterThanOrEqualToComparison";
      TestComparisonOperation2[TestComparisonOperation2["GreaterThanComparison"] = 4] = "GreaterThanComparison";
      TestComparisonOperation2[TestComparisonOperation2["BeginsWithComparison"] = 5] = "BeginsWithComparison";
      TestComparisonOperation2[TestComparisonOperation2["EndsWithComparison"] = 6] = "EndsWithComparison";
      TestComparisonOperation2[TestComparisonOperation2["ContainsComparison"] = 7] = "ContainsComparison";
    })(TestComparisonOperation = NSSpecifierTest2.TestComparisonOperation || (NSSpecifierTest2.TestComparisonOperation = {}));
    global$2["NSSpecifierTest"]["TestComparisonOperation"] = TestComparisonOperation;
  })(NSSpecifierTest || (NSSpecifierTest = {}));
  var NSSpeechSynthesizer;
  (function(NSSpeechSynthesizer2) {
    let Boundary;
    (function(Boundary2) {
      Boundary2[Boundary2["ImmediateBoundary"] = 0] = "ImmediateBoundary";
      Boundary2[Boundary2["WordBoundary"] = 1] = "WordBoundary";
      Boundary2[Boundary2["SentenceBoundary"] = 2] = "SentenceBoundary";
    })(Boundary = NSSpeechSynthesizer2.Boundary || (NSSpeechSynthesizer2.Boundary = {}));
    global$2["NSSpeechSynthesizer"]["Boundary"] = Boundary;
  })(NSSpeechSynthesizer || (NSSpeechSynthesizer = {}));
  var NSSpellChecker;
  (function(NSSpellChecker2) {
    let CorrectionIndicatorType;
    (function(CorrectionIndicatorType2) {
      CorrectionIndicatorType2[CorrectionIndicatorType2["Default"] = 0] = "Default";
      CorrectionIndicatorType2[CorrectionIndicatorType2["Reversion"] = 1] = "Reversion";
      CorrectionIndicatorType2[CorrectionIndicatorType2["Guesses"] = 2] = "Guesses";
    })(CorrectionIndicatorType = NSSpellChecker2.CorrectionIndicatorType || (NSSpellChecker2.CorrectionIndicatorType = {}));
    global$2["NSSpellChecker"]["CorrectionIndicatorType"] = CorrectionIndicatorType;
    let CorrectionResponse;
    (function(CorrectionResponse2) {
      CorrectionResponse2[CorrectionResponse2["None"] = 0] = "None";
      CorrectionResponse2[CorrectionResponse2["Accepted"] = 1] = "Accepted";
      CorrectionResponse2[CorrectionResponse2["Rejected"] = 2] = "Rejected";
      CorrectionResponse2[CorrectionResponse2["Ignored"] = 3] = "Ignored";
      CorrectionResponse2[CorrectionResponse2["Edited"] = 4] = "Edited";
      CorrectionResponse2[CorrectionResponse2["Reverted"] = 5] = "Reverted";
    })(CorrectionResponse = NSSpellChecker2.CorrectionResponse || (NSSpellChecker2.CorrectionResponse = {}));
    global$2["NSSpellChecker"]["CorrectionResponse"] = CorrectionResponse;
  })(NSSpellChecker || (NSSpellChecker = {}));
  var NSSplitView$1;
  (function(NSSplitView2) {
    let DividerStyle;
    (function(DividerStyle2) {
      DividerStyle2[DividerStyle2["Thick"] = 1] = "Thick";
      DividerStyle2[DividerStyle2["Thin"] = 2] = "Thin";
      DividerStyle2[DividerStyle2["PaneSplitter"] = 3] = "PaneSplitter";
    })(DividerStyle = NSSplitView2.DividerStyle || (NSSplitView2.DividerStyle = {}));
    global$2["NSSplitView"]["DividerStyle"] = DividerStyle;
  })(NSSplitView$1 || (NSSplitView$1 = {}));
  var NSSplitViewItem;
  (function(NSSplitViewItem2) {
    let Behavior;
    (function(Behavior2) {
      Behavior2[Behavior2["Default"] = 0] = "Default";
      Behavior2[Behavior2["Sidebar"] = 1] = "Sidebar";
      Behavior2[Behavior2["ContentList"] = 2] = "ContentList";
    })(Behavior = NSSplitViewItem2.Behavior || (NSSplitViewItem2.Behavior = {}));
    global$2["NSSplitViewItem"]["Behavior"] = Behavior;
    let CollapseBehavior;
    (function(CollapseBehavior2) {
      CollapseBehavior2[CollapseBehavior2["Default"] = 0] = "Default";
      CollapseBehavior2[CollapseBehavior2["PreferResizingSplitViewWithFixedSiblings"] = 1] = "PreferResizingSplitViewWithFixedSiblings";
      CollapseBehavior2[CollapseBehavior2["PreferResizingSiblingsWithFixedSplitView"] = 2] = "PreferResizingSiblingsWithFixedSplitView";
      CollapseBehavior2[CollapseBehavior2["UseConstraints"] = 3] = "UseConstraints";
    })(CollapseBehavior = NSSplitViewItem2.CollapseBehavior || (NSSplitViewItem2.CollapseBehavior = {}));
    global$2["NSSplitViewItem"]["CollapseBehavior"] = CollapseBehavior;
  })(NSSplitViewItem || (NSSplitViewItem = {}));
  var NSStackView$1;
  (function(NSStackView2) {
    let Distribution;
    (function(Distribution2) {
      Distribution2[Distribution2["GravityAreas"] = -1] = "GravityAreas";
      Distribution2[Distribution2["Fill"] = 0] = "Fill";
      Distribution2[Distribution2["FillEqually"] = 1] = "FillEqually";
      Distribution2[Distribution2["FillProportionally"] = 2] = "FillProportionally";
      Distribution2[Distribution2["EqualSpacing"] = 3] = "EqualSpacing";
      Distribution2[Distribution2["EqualCentering"] = 4] = "EqualCentering";
    })(Distribution = NSStackView2.Distribution || (NSStackView2.Distribution = {}));
    global$2["NSStackView"]["Distribution"] = Distribution;
    let Gravity;
    (function(Gravity2) {
      Gravity2[Gravity2["Top"] = 1] = "Top";
      Gravity2[Gravity2["Leading"] = 1] = "Leading";
      Gravity2[Gravity2["Center"] = 2] = "Center";
      Gravity2[Gravity2["Bottom"] = 3] = "Bottom";
      Gravity2[Gravity2["Trailing"] = 3] = "Trailing";
    })(Gravity = NSStackView2.Gravity || (NSStackView2.Gravity = {}));
    global$2["NSStackView"]["Gravity"] = Gravity;
  })(NSStackView$1 || (NSStackView$1 = {}));
  var NSStatusItem;
  (function(NSStatusItem2) {
    let Behavior;
    (function(Behavior2) {
      Behavior2[Behavior2["RemovalAllowed"] = 2] = "RemovalAllowed";
      Behavior2[Behavior2["TerminationOnRemoval"] = 4] = "TerminationOnRemoval";
    })(Behavior = NSStatusItem2.Behavior || (NSStatusItem2.Behavior = {}));
    global$2["NSStatusItem"]["Behavior"] = Behavior;
  })(NSStatusItem || (NSStatusItem = {}));
  var NSString;
  (function(NSString2) {
    let DrawingOptions;
    (function(DrawingOptions2) {
      DrawingOptions2[DrawingOptions2["UsesLineFragmentOrigin"] = 1] = "UsesLineFragmentOrigin";
      DrawingOptions2[DrawingOptions2["UsesFontLeading"] = 2] = "UsesFontLeading";
      DrawingOptions2[DrawingOptions2["UsesDeviceMetrics"] = 8] = "UsesDeviceMetrics";
      DrawingOptions2[DrawingOptions2["TruncatesLastVisibleLine"] = 32] = "TruncatesLastVisibleLine";
      DrawingOptions2[DrawingOptions2["DisableScreenFontSubstitution"] = 4] = "DisableScreenFontSubstitution";
      DrawingOptions2[DrawingOptions2["OneShot"] = 16] = "OneShot";
    })(DrawingOptions = NSString2.DrawingOptions || (NSString2.DrawingOptions = {}));
    global$2["NSString"]["DrawingOptions"] = DrawingOptions;
    let CompareOptions;
    (function(CompareOptions2) {
      CompareOptions2[CompareOptions2["CaseInsensitiveSearch"] = 1] = "CaseInsensitiveSearch";
      CompareOptions2[CompareOptions2["LiteralSearch"] = 2] = "LiteralSearch";
      CompareOptions2[CompareOptions2["BackwardsSearch"] = 4] = "BackwardsSearch";
      CompareOptions2[CompareOptions2["AnchoredSearch"] = 8] = "AnchoredSearch";
      CompareOptions2[CompareOptions2["NumericSearch"] = 64] = "NumericSearch";
      CompareOptions2[CompareOptions2["DiacriticInsensitiveSearch"] = 128] = "DiacriticInsensitiveSearch";
      CompareOptions2[CompareOptions2["WidthInsensitiveSearch"] = 256] = "WidthInsensitiveSearch";
      CompareOptions2[CompareOptions2["ForcedOrderingSearch"] = 512] = "ForcedOrderingSearch";
      CompareOptions2[CompareOptions2["RegularExpressionSearch"] = 1024] = "RegularExpressionSearch";
    })(CompareOptions = NSString2.CompareOptions || (NSString2.CompareOptions = {}));
    global$2["NSString"]["CompareOptions"] = CompareOptions;
    let EncodingConversionOptions;
    (function(EncodingConversionOptions2) {
      EncodingConversionOptions2[EncodingConversionOptions2["AllowLossy"] = 1] = "AllowLossy";
      EncodingConversionOptions2[EncodingConversionOptions2["ExternalRepresentation"] = 2] = "ExternalRepresentation";
    })(EncodingConversionOptions = NSString2.EncodingConversionOptions || (NSString2.EncodingConversionOptions = {}));
    global$2["NSString"]["EncodingConversionOptions"] = EncodingConversionOptions;
    let EnumerationOptions;
    (function(EnumerationOptions2) {
      EnumerationOptions2[EnumerationOptions2["ByLines"] = 0] = "ByLines";
      EnumerationOptions2[EnumerationOptions2["ByParagraphs"] = 1] = "ByParagraphs";
      EnumerationOptions2[EnumerationOptions2["ByComposedCharacterSequences"] = 2] = "ByComposedCharacterSequences";
      EnumerationOptions2[EnumerationOptions2["ByWords"] = 3] = "ByWords";
      EnumerationOptions2[EnumerationOptions2["BySentences"] = 4] = "BySentences";
      EnumerationOptions2[EnumerationOptions2["Reverse"] = 256] = "Reverse";
      EnumerationOptions2[EnumerationOptions2["SubstringNotRequired"] = 512] = "SubstringNotRequired";
      EnumerationOptions2[EnumerationOptions2["Localized"] = 1024] = "Localized";
    })(EnumerationOptions = NSString2.EnumerationOptions || (NSString2.EnumerationOptions = {}));
    global$2["NSString"]["EnumerationOptions"] = EnumerationOptions;
  })(NSString || (NSString = {}));
  var NSTabView$1;
  (function(NSTabView2) {
    let TabPosition;
    (function(TabPosition2) {
      TabPosition2[TabPosition2["None"] = 0] = "None";
      TabPosition2[TabPosition2["Top"] = 1] = "Top";
      TabPosition2[TabPosition2["Left"] = 2] = "Left";
      TabPosition2[TabPosition2["Bottom"] = 3] = "Bottom";
      TabPosition2[TabPosition2["Right"] = 4] = "Right";
    })(TabPosition = NSTabView2.TabPosition || (NSTabView2.TabPosition = {}));
    global$2["NSTabView"]["TabPosition"] = TabPosition;
    let TabViewBorderType;
    (function(TabViewBorderType2) {
      TabViewBorderType2[TabViewBorderType2["None"] = 0] = "None";
      TabViewBorderType2[TabViewBorderType2["Line"] = 1] = "Line";
      TabViewBorderType2[TabViewBorderType2["Bezel"] = 2] = "Bezel";
    })(TabViewBorderType = NSTabView2.TabViewBorderType || (NSTabView2.TabViewBorderType = {}));
    global$2["NSTabView"]["TabViewBorderType"] = TabViewBorderType;
    let TabType;
    (function(TabType2) {
      TabType2[TabType2["TopTabsBezelBorder"] = 0] = "TopTabsBezelBorder";
      TabType2[TabType2["LeftTabsBezelBorder"] = 1] = "LeftTabsBezelBorder";
      TabType2[TabType2["BottomTabsBezelBorder"] = 2] = "BottomTabsBezelBorder";
      TabType2[TabType2["RightTabsBezelBorder"] = 3] = "RightTabsBezelBorder";
      TabType2[TabType2["NoTabsBezelBorder"] = 4] = "NoTabsBezelBorder";
      TabType2[TabType2["NoTabsLineBorder"] = 5] = "NoTabsLineBorder";
      TabType2[TabType2["NoTabsNoBorder"] = 6] = "NoTabsNoBorder";
    })(TabType = NSTabView2.TabType || (NSTabView2.TabType = {}));
    global$2["NSTabView"]["TabType"] = TabType;
  })(NSTabView$1 || (NSTabView$1 = {}));
  var NSTabViewController;
  (function(NSTabViewController2) {
    let TabStyle;
    (function(TabStyle2) {
      TabStyle2[TabStyle2["SegmentedControlOnTop"] = 0] = "SegmentedControlOnTop";
      TabStyle2[TabStyle2["SegmentedControlOnBottom"] = 1] = "SegmentedControlOnBottom";
      TabStyle2[TabStyle2["Toolbar"] = 2] = "Toolbar";
      TabStyle2[TabStyle2["Unspecified"] = -1] = "Unspecified";
    })(TabStyle = NSTabViewController2.TabStyle || (NSTabViewController2.TabStyle = {}));
    global$2["NSTabViewController"]["TabStyle"] = TabStyle;
  })(NSTabViewController || (NSTabViewController = {}));
  var NSTabViewItem;
  (function(NSTabViewItem2) {
    let State;
    (function(State2) {
      State2[State2["SelectedTab"] = 0] = "SelectedTab";
      State2[State2["BackgroundTab"] = 1] = "BackgroundTab";
      State2[State2["PressedTab"] = 2] = "PressedTab";
    })(State = NSTabViewItem2.State || (NSTabViewItem2.State = {}));
    global$2["NSTabViewItem"]["State"] = State;
  })(NSTabViewItem || (NSTabViewItem = {}));
  var NSTableColumn;
  (function(NSTableColumn2) {
    let ResizingOptions;
    (function(ResizingOptions2) {
      ResizingOptions2[ResizingOptions2["NoResizing"] = 0] = "NoResizing";
      ResizingOptions2[ResizingOptions2["AutoresizingMask"] = 1] = "AutoresizingMask";
      ResizingOptions2[ResizingOptions2["UserResizingMask"] = 2] = "UserResizingMask";
    })(ResizingOptions = NSTableColumn2.ResizingOptions || (NSTableColumn2.ResizingOptions = {}));
    global$2["NSTableColumn"]["ResizingOptions"] = ResizingOptions;
  })(NSTableColumn || (NSTableColumn = {}));
  var NSTableView$1;
  (function(NSTableView2) {
    let RowActionEdge;
    (function(RowActionEdge2) {
      RowActionEdge2[RowActionEdge2["Leading"] = 0] = "Leading";
      RowActionEdge2[RowActionEdge2["Trailing"] = 1] = "Trailing";
    })(RowActionEdge = NSTableView2.RowActionEdge || (NSTableView2.RowActionEdge = {}));
    global$2["NSTableView"]["RowActionEdge"] = RowActionEdge;
    let AnimationOptions;
    (function(AnimationOptions2) {
      AnimationOptions2[AnimationOptions2["EffectNone"] = 0] = "EffectNone";
      AnimationOptions2[AnimationOptions2["EffectFade"] = 1] = "EffectFade";
      AnimationOptions2[AnimationOptions2["EffectGap"] = 2] = "EffectGap";
      AnimationOptions2[AnimationOptions2["SlideUp"] = 16] = "SlideUp";
      AnimationOptions2[AnimationOptions2["SlideDown"] = 32] = "SlideDown";
      AnimationOptions2[AnimationOptions2["SlideLeft"] = 48] = "SlideLeft";
      AnimationOptions2[AnimationOptions2["SlideRight"] = 64] = "SlideRight";
    })(AnimationOptions = NSTableView2.AnimationOptions || (NSTableView2.AnimationOptions = {}));
    global$2["NSTableView"]["AnimationOptions"] = AnimationOptions;
    let ColumnAutoresizingStyle;
    (function(ColumnAutoresizingStyle2) {
      ColumnAutoresizingStyle2[ColumnAutoresizingStyle2["NoColumnAutoresizing"] = 0] = "NoColumnAutoresizing";
      ColumnAutoresizingStyle2[ColumnAutoresizingStyle2["UniformColumnAutoresizingStyle"] = 1] = "UniformColumnAutoresizingStyle";
      ColumnAutoresizingStyle2[ColumnAutoresizingStyle2["SequentialColumnAutoresizingStyle"] = 2] = "SequentialColumnAutoresizingStyle";
      ColumnAutoresizingStyle2[ColumnAutoresizingStyle2["ReverseSequentialColumnAutoresizingStyle"] = 3] = "ReverseSequentialColumnAutoresizingStyle";
      ColumnAutoresizingStyle2[ColumnAutoresizingStyle2["LastColumnOnlyAutoresizingStyle"] = 4] = "LastColumnOnlyAutoresizingStyle";
      ColumnAutoresizingStyle2[ColumnAutoresizingStyle2["FirstColumnOnlyAutoresizingStyle"] = 5] = "FirstColumnOnlyAutoresizingStyle";
    })(ColumnAutoresizingStyle = NSTableView2.ColumnAutoresizingStyle || (NSTableView2.ColumnAutoresizingStyle = {}));
    global$2["NSTableView"]["ColumnAutoresizingStyle"] = ColumnAutoresizingStyle;
    let DraggingDestinationFeedbackStyle;
    (function(DraggingDestinationFeedbackStyle2) {
      DraggingDestinationFeedbackStyle2[DraggingDestinationFeedbackStyle2["None"] = -1] = "None";
      DraggingDestinationFeedbackStyle2[DraggingDestinationFeedbackStyle2["Regular"] = 0] = "Regular";
      DraggingDestinationFeedbackStyle2[DraggingDestinationFeedbackStyle2["SourceList"] = 1] = "SourceList";
      DraggingDestinationFeedbackStyle2[DraggingDestinationFeedbackStyle2["Gap"] = 2] = "Gap";
    })(DraggingDestinationFeedbackStyle = NSTableView2.DraggingDestinationFeedbackStyle || (NSTableView2.DraggingDestinationFeedbackStyle = {}));
    global$2["NSTableView"]["DraggingDestinationFeedbackStyle"] = DraggingDestinationFeedbackStyle;
    let DropOperation;
    (function(DropOperation2) {
      DropOperation2[DropOperation2["On"] = 0] = "On";
      DropOperation2[DropOperation2["Above"] = 1] = "Above";
    })(DropOperation = NSTableView2.DropOperation || (NSTableView2.DropOperation = {}));
    global$2["NSTableView"]["DropOperation"] = DropOperation;
    let GridLineStyle;
    (function(GridLineStyle2) {
      GridLineStyle2[GridLineStyle2["GridNone"] = 0] = "GridNone";
      GridLineStyle2[GridLineStyle2["SolidVerticalGridLineMask"] = 1] = "SolidVerticalGridLineMask";
      GridLineStyle2[GridLineStyle2["SolidHorizontalGridLineMask"] = 2] = "SolidHorizontalGridLineMask";
      GridLineStyle2[GridLineStyle2["DashedHorizontalGridLineMask"] = 8] = "DashedHorizontalGridLineMask";
    })(GridLineStyle = NSTableView2.GridLineStyle || (NSTableView2.GridLineStyle = {}));
    global$2["NSTableView"]["GridLineStyle"] = GridLineStyle;
    let RowSizeStyle;
    (function(RowSizeStyle2) {
      RowSizeStyle2[RowSizeStyle2["Default"] = -1] = "Default";
      RowSizeStyle2[RowSizeStyle2["Custom"] = 0] = "Custom";
      RowSizeStyle2[RowSizeStyle2["Small"] = 1] = "Small";
      RowSizeStyle2[RowSizeStyle2["Medium"] = 2] = "Medium";
      RowSizeStyle2[RowSizeStyle2["Large"] = 3] = "Large";
    })(RowSizeStyle = NSTableView2.RowSizeStyle || (NSTableView2.RowSizeStyle = {}));
    global$2["NSTableView"]["RowSizeStyle"] = RowSizeStyle;
    let SelectionHighlightStyle;
    (function(SelectionHighlightStyle2) {
      SelectionHighlightStyle2[SelectionHighlightStyle2["None"] = -1] = "None";
      SelectionHighlightStyle2[SelectionHighlightStyle2["Regular"] = 0] = "Regular";
      SelectionHighlightStyle2[SelectionHighlightStyle2["SourceList"] = 1] = "SourceList";
    })(SelectionHighlightStyle = NSTableView2.SelectionHighlightStyle || (NSTableView2.SelectionHighlightStyle = {}));
    global$2["NSTableView"]["SelectionHighlightStyle"] = SelectionHighlightStyle;
  })(NSTableView$1 || (NSTableView$1 = {}));
  var NSTableViewRowAction;
  (function(NSTableViewRowAction2) {
    let Style;
    (function(Style2) {
      Style2[Style2["Regular"] = 0] = "Regular";
      Style2[Style2["Destructive"] = 1] = "Destructive";
    })(Style = NSTableViewRowAction2.Style || (NSTableViewRowAction2.Style = {}));
    global$2["NSTableViewRowAction"]["Style"] = Style;
  })(NSTableViewRowAction || (NSTableViewRowAction = {}));
  var NSTextBlock;
  (function(NSTextBlock2) {
    let Dimension2;
    (function(Dimension3) {
      Dimension3[Dimension3["Width"] = 0] = "Width";
      Dimension3[Dimension3["MinimumWidth"] = 1] = "MinimumWidth";
      Dimension3[Dimension3["MaximumWidth"] = 2] = "MaximumWidth";
      Dimension3[Dimension3["Height"] = 4] = "Height";
      Dimension3[Dimension3["MinimumHeight"] = 5] = "MinimumHeight";
      Dimension3[Dimension3["MaximumHeight"] = 6] = "MaximumHeight";
    })(Dimension2 = NSTextBlock2.Dimension || (NSTextBlock2.Dimension = {}));
    global$2["NSTextBlock"]["Dimension"] = Dimension2;
    let Layer;
    (function(Layer2) {
      Layer2[Layer2["Padding"] = -1] = "Padding";
      Layer2[Layer2["Border"] = 0] = "Border";
      Layer2[Layer2["Margin"] = 1] = "Margin";
    })(Layer = NSTextBlock2.Layer || (NSTextBlock2.Layer = {}));
    global$2["NSTextBlock"]["Layer"] = Layer;
    let ValueType;
    (function(ValueType2) {
      ValueType2[ValueType2["AbsoluteValueType"] = 0] = "AbsoluteValueType";
      ValueType2[ValueType2["PercentageValueType"] = 1] = "PercentageValueType";
    })(ValueType = NSTextBlock2.ValueType || (NSTextBlock2.ValueType = {}));
    global$2["NSTextBlock"]["ValueType"] = ValueType;
    let VerticalAlignment;
    (function(VerticalAlignment2) {
      VerticalAlignment2[VerticalAlignment2["TopAlignment"] = 0] = "TopAlignment";
      VerticalAlignment2[VerticalAlignment2["MiddleAlignment"] = 1] = "MiddleAlignment";
      VerticalAlignment2[VerticalAlignment2["BottomAlignment"] = 2] = "BottomAlignment";
      VerticalAlignment2[VerticalAlignment2["BaselineAlignment"] = 3] = "BaselineAlignment";
    })(VerticalAlignment = NSTextBlock2.VerticalAlignment || (NSTextBlock2.VerticalAlignment = {}));
    global$2["NSTextBlock"]["VerticalAlignment"] = VerticalAlignment;
  })(NSTextBlock || (NSTextBlock = {}));
  var NSTextCheckingResult;
  (function(NSTextCheckingResult2) {
    let CheckingType;
    (function(CheckingType2) {
      CheckingType2[CheckingType2["Orthography"] = 1] = "Orthography";
      CheckingType2[CheckingType2["Spelling"] = 2] = "Spelling";
      CheckingType2[CheckingType2["Grammar"] = 4] = "Grammar";
      CheckingType2[CheckingType2["Date"] = 8] = "Date";
      CheckingType2[CheckingType2["Address"] = 16] = "Address";
      CheckingType2[CheckingType2["Link"] = 32] = "Link";
      CheckingType2[CheckingType2["Quote"] = 64] = "Quote";
      CheckingType2[CheckingType2["Dash"] = 128] = "Dash";
      CheckingType2[CheckingType2["Replacement"] = 256] = "Replacement";
      CheckingType2[CheckingType2["Correction"] = 512] = "Correction";
      CheckingType2[CheckingType2["RegularExpression"] = 1024] = "RegularExpression";
      CheckingType2[CheckingType2["PhoneNumber"] = 2048] = "PhoneNumber";
      CheckingType2[CheckingType2["TransitInformation"] = 4096] = "TransitInformation";
    })(CheckingType = NSTextCheckingResult2.CheckingType || (NSTextCheckingResult2.CheckingType = {}));
    global$2["NSTextCheckingResult"]["CheckingType"] = CheckingType;
  })(NSTextCheckingResult || (NSTextCheckingResult = {}));
  var NSTextField$1;
  (function(NSTextField2) {
    let BezelStyle;
    (function(BezelStyle2) {
      BezelStyle2[BezelStyle2["SquareBezel"] = 0] = "SquareBezel";
      BezelStyle2[BezelStyle2["RoundedBezel"] = 1] = "RoundedBezel";
    })(BezelStyle = NSTextField2.BezelStyle || (NSTextField2.BezelStyle = {}));
    global$2["NSTextField"]["BezelStyle"] = BezelStyle;
  })(NSTextField$1 || (NSTextField$1 = {}));
  var NSTextFinder;
  (function(NSTextFinder2) {
    let Action;
    (function(Action2) {
      Action2[Action2["ShowFindInterface"] = 1] = "ShowFindInterface";
      Action2[Action2["NextMatch"] = 2] = "NextMatch";
      Action2[Action2["PreviousMatch"] = 3] = "PreviousMatch";
      Action2[Action2["ReplaceAll"] = 4] = "ReplaceAll";
      Action2[Action2["Replace"] = 5] = "Replace";
      Action2[Action2["ReplaceAndFind"] = 6] = "ReplaceAndFind";
      Action2[Action2["SetSearchString"] = 7] = "SetSearchString";
      Action2[Action2["ReplaceAllInSelection"] = 8] = "ReplaceAllInSelection";
      Action2[Action2["SelectAll"] = 9] = "SelectAll";
      Action2[Action2["SelectAllInSelection"] = 10] = "SelectAllInSelection";
      Action2[Action2["HideFindInterface"] = 11] = "HideFindInterface";
      Action2[Action2["ShowReplaceInterface"] = 12] = "ShowReplaceInterface";
      Action2[Action2["HideReplaceInterface"] = 13] = "HideReplaceInterface";
    })(Action = NSTextFinder2.Action || (NSTextFinder2.Action = {}));
    global$2["NSTextFinder"]["Action"] = Action;
    let MatchingType;
    (function(MatchingType2) {
      MatchingType2[MatchingType2["Contains"] = 0] = "Contains";
      MatchingType2[MatchingType2["StartsWith"] = 1] = "StartsWith";
      MatchingType2[MatchingType2["FullWord"] = 2] = "FullWord";
      MatchingType2[MatchingType2["EndsWith"] = 3] = "EndsWith";
    })(MatchingType = NSTextFinder2.MatchingType || (NSTextFinder2.MatchingType = {}));
    global$2["NSTextFinder"]["MatchingType"] = MatchingType;
  })(NSTextFinder || (NSTextFinder = {}));
  var NSTextList;
  (function(NSTextList2) {
    let Options;
    (function(Options2) {
      Options2[Options2["PrependEnclosingMarker"] = 1] = "PrependEnclosingMarker";
    })(Options = NSTextList2.Options || (NSTextList2.Options = {}));
    global$2["NSTextList"]["Options"] = Options;
  })(NSTextList || (NSTextList = {}));
  var NSTextTable;
  (function(NSTextTable2) {
    let LayoutAlgorithm;
    (function(LayoutAlgorithm2) {
      LayoutAlgorithm2[LayoutAlgorithm2["AutomaticLayoutAlgorithm"] = 0] = "AutomaticLayoutAlgorithm";
      LayoutAlgorithm2[LayoutAlgorithm2["FixedLayoutAlgorithm"] = 1] = "FixedLayoutAlgorithm";
    })(LayoutAlgorithm = NSTextTable2.LayoutAlgorithm || (NSTextTable2.LayoutAlgorithm = {}));
    global$2["NSTextTable"]["LayoutAlgorithm"] = LayoutAlgorithm;
  })(NSTextTable || (NSTextTable = {}));
  var NSTimeZone;
  (function(NSTimeZone2) {
    let NameStyle;
    (function(NameStyle2) {
      NameStyle2[NameStyle2["Standard"] = 0] = "Standard";
      NameStyle2[NameStyle2["ShortStandard"] = 1] = "ShortStandard";
      NameStyle2[NameStyle2["DaylightSaving"] = 2] = "DaylightSaving";
      NameStyle2[NameStyle2["ShortDaylightSaving"] = 3] = "ShortDaylightSaving";
      NameStyle2[NameStyle2["Generic"] = 4] = "Generic";
      NameStyle2[NameStyle2["ShortGeneric"] = 5] = "ShortGeneric";
    })(NameStyle = NSTimeZone2.NameStyle || (NSTimeZone2.NameStyle = {}));
    global$2["NSTimeZone"]["NameStyle"] = NameStyle;
  })(NSTimeZone || (NSTimeZone = {}));
  var NSTokenField$1;
  (function(NSTokenField2) {
    let TokenStyle;
    (function(TokenStyle2) {
      TokenStyle2[TokenStyle2["Default"] = 0] = "Default";
      TokenStyle2[TokenStyle2["None"] = 1] = "None";
      TokenStyle2[TokenStyle2["Rounded"] = 2] = "Rounded";
      TokenStyle2[TokenStyle2["Squared"] = 3] = "Squared";
      TokenStyle2[TokenStyle2["PlainSquared"] = 4] = "PlainSquared";
    })(TokenStyle = NSTokenField2.TokenStyle || (NSTokenField2.TokenStyle = {}));
    global$2["NSTokenField"]["TokenStyle"] = TokenStyle;
  })(NSTokenField$1 || (NSTokenField$1 = {}));
  var NSToolbar;
  (function(NSToolbar2) {
    let DisplayMode;
    (function(DisplayMode2) {
      DisplayMode2[DisplayMode2["Default"] = 0] = "Default";
      DisplayMode2[DisplayMode2["IconAndLabel"] = 1] = "IconAndLabel";
      DisplayMode2[DisplayMode2["IconOnly"] = 2] = "IconOnly";
      DisplayMode2[DisplayMode2["LabelOnly"] = 3] = "LabelOnly";
    })(DisplayMode = NSToolbar2.DisplayMode || (NSToolbar2.DisplayMode = {}));
    global$2["NSToolbar"]["DisplayMode"] = DisplayMode;
    let SizeMode;
    (function(SizeMode2) {
      SizeMode2[SizeMode2["Default"] = 0] = "Default";
      SizeMode2[SizeMode2["Regular"] = 1] = "Regular";
      SizeMode2[SizeMode2["Small"] = 2] = "Small";
    })(SizeMode = NSToolbar2.SizeMode || (NSToolbar2.SizeMode = {}));
    global$2["NSToolbar"]["SizeMode"] = SizeMode;
  })(NSToolbar || (NSToolbar = {}));
  var NSToolbarItemGroup;
  (function(NSToolbarItemGroup2) {
    let ControlRepresentation;
    (function(ControlRepresentation2) {
      ControlRepresentation2[ControlRepresentation2["Automatic"] = 0] = "Automatic";
      ControlRepresentation2[ControlRepresentation2["Expanded"] = 1] = "Expanded";
      ControlRepresentation2[ControlRepresentation2["Collapsed"] = 2] = "Collapsed";
    })(ControlRepresentation = NSToolbarItemGroup2.ControlRepresentation || (NSToolbarItemGroup2.ControlRepresentation = {}));
    global$2["NSToolbarItemGroup"]["ControlRepresentation"] = ControlRepresentation;
    let SelectionMode;
    (function(SelectionMode2) {
      SelectionMode2[SelectionMode2["SelectOne"] = 0] = "SelectOne";
      SelectionMode2[SelectionMode2["SelectAny"] = 1] = "SelectAny";
      SelectionMode2[SelectionMode2["Momentary"] = 2] = "Momentary";
    })(SelectionMode = NSToolbarItemGroup2.SelectionMode || (NSToolbarItemGroup2.SelectionMode = {}));
    global$2["NSToolbarItemGroup"]["SelectionMode"] = SelectionMode;
  })(NSToolbarItemGroup || (NSToolbarItemGroup = {}));
  var NSTouch;
  (function(NSTouch2) {
    let Phase;
    (function(Phase2) {
      Phase2[Phase2["Began"] = 1] = "Began";
      Phase2[Phase2["Moved"] = 2] = "Moved";
      Phase2[Phase2["Stationary"] = 4] = "Stationary";
      Phase2[Phase2["Ended"] = 8] = "Ended";
      Phase2[Phase2["Cancelled"] = 16] = "Cancelled";
      Phase2[Phase2["Touching"] = 7] = "Touching";
      Phase2[Phase2["Any"] = -1] = "Any";
    })(Phase = NSTouch2.Phase || (NSTouch2.Phase = {}));
    global$2["NSTouch"]["Phase"] = Phase;
    let TouchType;
    (function(TouchType2) {
      TouchType2[TouchType2["Direct"] = 0] = "Direct";
      TouchType2[TouchType2["Indirect"] = 1] = "Indirect";
    })(TouchType = NSTouch2.TouchType || (NSTouch2.TouchType = {}));
    global$2["NSTouch"]["TouchType"] = TouchType;
    let TouchTypeMask;
    (function(TouchTypeMask2) {
      TouchTypeMask2[TouchTypeMask2["Direct"] = 1] = "Direct";
      TouchTypeMask2[TouchTypeMask2["Indirect"] = 2] = "Indirect";
    })(TouchTypeMask = NSTouch2.TouchTypeMask || (NSTouch2.TouchTypeMask = {}));
    global$2["NSTouch"]["TouchTypeMask"] = TouchTypeMask;
  })(NSTouch || (NSTouch = {}));
  var NSTrackingArea;
  (function(NSTrackingArea2) {
    let Options;
    (function(Options2) {
      Options2[Options2["MouseEnteredAndExited"] = 1] = "MouseEnteredAndExited";
      Options2[Options2["MouseMoved"] = 2] = "MouseMoved";
      Options2[Options2["CursorUpdate"] = 4] = "CursorUpdate";
      Options2[Options2["ActiveWhenFirstResponder"] = 16] = "ActiveWhenFirstResponder";
      Options2[Options2["ActiveInKeyWindow"] = 32] = "ActiveInKeyWindow";
      Options2[Options2["ActiveInActiveApp"] = 64] = "ActiveInActiveApp";
      Options2[Options2["ActiveAlways"] = 128] = "ActiveAlways";
      Options2[Options2["AssumeInside"] = 256] = "AssumeInside";
      Options2[Options2["InVisibleRect"] = 512] = "InVisibleRect";
      Options2[Options2["EnabledDuringMouseDrag"] = 1024] = "EnabledDuringMouseDrag";
    })(Options = NSTrackingArea2.Options || (NSTrackingArea2.Options = {}));
    global$2["NSTrackingArea"]["Options"] = Options;
  })(NSTrackingArea || (NSTrackingArea = {}));
  var NSURL;
  (function(NSURL2) {
    let BookmarkCreationOptions;
    (function(BookmarkCreationOptions2) {
      BookmarkCreationOptions2[BookmarkCreationOptions2["PreferFileIDResolution"] = 256] = "PreferFileIDResolution";
      BookmarkCreationOptions2[BookmarkCreationOptions2["MinimalBookmark"] = 512] = "MinimalBookmark";
      BookmarkCreationOptions2[BookmarkCreationOptions2["SuitableForBookmarkFile"] = 1024] = "SuitableForBookmarkFile";
      BookmarkCreationOptions2[BookmarkCreationOptions2["WithSecurityScope"] = 2048] = "WithSecurityScope";
      BookmarkCreationOptions2[BookmarkCreationOptions2["SecurityScopeAllowOnlyReadAccess"] = 4096] = "SecurityScopeAllowOnlyReadAccess";
    })(BookmarkCreationOptions = NSURL2.BookmarkCreationOptions || (NSURL2.BookmarkCreationOptions = {}));
    global$2["NSURL"]["BookmarkCreationOptions"] = BookmarkCreationOptions;
    let BookmarkResolutionOptions;
    (function(BookmarkResolutionOptions2) {
      BookmarkResolutionOptions2[BookmarkResolutionOptions2["WithoutUI"] = 256] = "WithoutUI";
      BookmarkResolutionOptions2[BookmarkResolutionOptions2["WithoutMounting"] = 512] = "WithoutMounting";
      BookmarkResolutionOptions2[BookmarkResolutionOptions2["WithSecurityScope"] = 1024] = "WithSecurityScope";
    })(BookmarkResolutionOptions = NSURL2.BookmarkResolutionOptions || (NSURL2.BookmarkResolutionOptions = {}));
    global$2["NSURL"]["BookmarkResolutionOptions"] = BookmarkResolutionOptions;
  })(NSURL || (NSURL = {}));
  var NSURLHandle;
  (function(NSURLHandle2) {
    let Status;
    (function(Status2) {
      Status2[Status2["NotLoaded"] = 0] = "NotLoaded";
      Status2[Status2["LoadSucceeded"] = 1] = "LoadSucceeded";
      Status2[Status2["LoadInProgress"] = 2] = "LoadInProgress";
      Status2[Status2["LoadFailed"] = 3] = "LoadFailed";
    })(Status = NSURLHandle2.Status || (NSURLHandle2.Status = {}));
    global$2["NSURLHandle"]["Status"] = Status;
  })(NSURLHandle || (NSURLHandle = {}));
  var NSURLRequest;
  (function(NSURLRequest2) {
    let CachePolicy;
    (function(CachePolicy2) {
      CachePolicy2[CachePolicy2["UseProtocolCachePolicy"] = 0] = "UseProtocolCachePolicy";
      CachePolicy2[CachePolicy2["ReloadIgnoringLocalCacheData"] = 1] = "ReloadIgnoringLocalCacheData";
      CachePolicy2[CachePolicy2["ReloadIgnoringLocalAndRemoteCacheData"] = 4] = "ReloadIgnoringLocalAndRemoteCacheData";
      CachePolicy2[CachePolicy2["ReloadIgnoringCacheData"] = 1] = "ReloadIgnoringCacheData";
      CachePolicy2[CachePolicy2["ReturnCacheDataElseLoad"] = 2] = "ReturnCacheDataElseLoad";
      CachePolicy2[CachePolicy2["ReturnCacheDataDontLoad"] = 3] = "ReturnCacheDataDontLoad";
      CachePolicy2[CachePolicy2["ReloadRevalidatingCacheData"] = 5] = "ReloadRevalidatingCacheData";
    })(CachePolicy = NSURLRequest2.CachePolicy || (NSURLRequest2.CachePolicy = {}));
    global$2["NSURLRequest"]["CachePolicy"] = CachePolicy;
    let NetworkServiceType;
    (function(NetworkServiceType2) {
      NetworkServiceType2[NetworkServiceType2["NetworkServiceTypeDefault"] = 0] = "NetworkServiceTypeDefault";
      NetworkServiceType2[NetworkServiceType2["NetworkServiceTypeVoIP"] = 1] = "NetworkServiceTypeVoIP";
      NetworkServiceType2[NetworkServiceType2["NetworkServiceTypeVideo"] = 2] = "NetworkServiceTypeVideo";
      NetworkServiceType2[NetworkServiceType2["NetworkServiceTypeBackground"] = 3] = "NetworkServiceTypeBackground";
      NetworkServiceType2[NetworkServiceType2["NetworkServiceTypeVoice"] = 4] = "NetworkServiceTypeVoice";
      NetworkServiceType2[NetworkServiceType2["NetworkServiceTypeResponsiveData"] = 6] = "NetworkServiceTypeResponsiveData";
      NetworkServiceType2[NetworkServiceType2["NetworkServiceTypeAVStreaming"] = 8] = "NetworkServiceTypeAVStreaming";
      NetworkServiceType2[NetworkServiceType2["NetworkServiceTypeResponsiveAV"] = 9] = "NetworkServiceTypeResponsiveAV";
      NetworkServiceType2[NetworkServiceType2["NetworkServiceTypeCallSignaling"] = 11] = "NetworkServiceTypeCallSignaling";
    })(NetworkServiceType = NSURLRequest2.NetworkServiceType || (NSURLRequest2.NetworkServiceType = {}));
    global$2["NSURLRequest"]["NetworkServiceType"] = NetworkServiceType;
  })(NSURLRequest || (NSURLRequest = {}));
  var NSUserNotification;
  (function(NSUserNotification2) {
    let ActivationType;
    (function(ActivationType2) {
      ActivationType2[ActivationType2["None"] = 0] = "None";
      ActivationType2[ActivationType2["ContentsClicked"] = 1] = "ContentsClicked";
      ActivationType2[ActivationType2["ActionButtonClicked"] = 2] = "ActionButtonClicked";
      ActivationType2[ActivationType2["Replied"] = 3] = "Replied";
      ActivationType2[ActivationType2["AdditionalActionClicked"] = 4] = "AdditionalActionClicked";
    })(ActivationType = NSUserNotification2.ActivationType || (NSUserNotification2.ActivationType = {}));
    global$2["NSUserNotification"]["ActivationType"] = ActivationType;
  })(NSUserNotification || (NSUserNotification = {}));
  var NSView$1;
  (function(NSView2) {
    let AutoresizingMask;
    (function(AutoresizingMask2) {
      AutoresizingMask2[AutoresizingMask2["ViewNotSizable"] = 0] = "ViewNotSizable";
      AutoresizingMask2[AutoresizingMask2["ViewMinXMargin"] = 1] = "ViewMinXMargin";
      AutoresizingMask2[AutoresizingMask2["ViewWidthSizable"] = 2] = "ViewWidthSizable";
      AutoresizingMask2[AutoresizingMask2["ViewMaxXMargin"] = 4] = "ViewMaxXMargin";
      AutoresizingMask2[AutoresizingMask2["ViewMinYMargin"] = 8] = "ViewMinYMargin";
      AutoresizingMask2[AutoresizingMask2["ViewHeightSizable"] = 16] = "ViewHeightSizable";
      AutoresizingMask2[AutoresizingMask2["ViewMaxYMargin"] = 32] = "ViewMaxYMargin";
    })(AutoresizingMask = NSView2.AutoresizingMask || (NSView2.AutoresizingMask = {}));
    global$2["NSView"]["AutoresizingMask"] = AutoresizingMask;
    let BackgroundStyle;
    (function(BackgroundStyle2) {
      BackgroundStyle2[BackgroundStyle2["Normal"] = 0] = "Normal";
      BackgroundStyle2[BackgroundStyle2["Emphasized"] = 1] = "Emphasized";
      BackgroundStyle2[BackgroundStyle2["Raised"] = 2] = "Raised";
      BackgroundStyle2[BackgroundStyle2["Lowered"] = 3] = "Lowered";
    })(BackgroundStyle = NSView2.BackgroundStyle || (NSView2.BackgroundStyle = {}));
    global$2["NSView"]["BackgroundStyle"] = BackgroundStyle;
    let LayerContentsPlacement;
    (function(LayerContentsPlacement2) {
      LayerContentsPlacement2[LayerContentsPlacement2["ScaleAxesIndependently"] = 0] = "ScaleAxesIndependently";
      LayerContentsPlacement2[LayerContentsPlacement2["ScaleProportionallyToFit"] = 1] = "ScaleProportionallyToFit";
      LayerContentsPlacement2[LayerContentsPlacement2["ScaleProportionallyToFill"] = 2] = "ScaleProportionallyToFill";
      LayerContentsPlacement2[LayerContentsPlacement2["Center"] = 3] = "Center";
      LayerContentsPlacement2[LayerContentsPlacement2["Top"] = 4] = "Top";
      LayerContentsPlacement2[LayerContentsPlacement2["TopRight"] = 5] = "TopRight";
      LayerContentsPlacement2[LayerContentsPlacement2["Right"] = 6] = "Right";
      LayerContentsPlacement2[LayerContentsPlacement2["BottomRight"] = 7] = "BottomRight";
      LayerContentsPlacement2[LayerContentsPlacement2["Bottom"] = 8] = "Bottom";
      LayerContentsPlacement2[LayerContentsPlacement2["BottomLeft"] = 9] = "BottomLeft";
      LayerContentsPlacement2[LayerContentsPlacement2["Left"] = 10] = "Left";
      LayerContentsPlacement2[LayerContentsPlacement2["TopLeft"] = 11] = "TopLeft";
    })(LayerContentsPlacement = NSView2.LayerContentsPlacement || (NSView2.LayerContentsPlacement = {}));
    global$2["NSView"]["LayerContentsPlacement"] = LayerContentsPlacement;
    let LayerContentsRedrawPolicy;
    (function(LayerContentsRedrawPolicy2) {
      LayerContentsRedrawPolicy2[LayerContentsRedrawPolicy2["Never"] = 0] = "Never";
      LayerContentsRedrawPolicy2[LayerContentsRedrawPolicy2["OnSetNeedsDisplay"] = 1] = "OnSetNeedsDisplay";
      LayerContentsRedrawPolicy2[LayerContentsRedrawPolicy2["DuringViewResize"] = 2] = "DuringViewResize";
      LayerContentsRedrawPolicy2[LayerContentsRedrawPolicy2["BeforeViewResize"] = 3] = "BeforeViewResize";
      LayerContentsRedrawPolicy2[LayerContentsRedrawPolicy2["Crossfade"] = 4] = "Crossfade";
    })(LayerContentsRedrawPolicy = NSView2.LayerContentsRedrawPolicy || (NSView2.LayerContentsRedrawPolicy = {}));
    global$2["NSView"]["LayerContentsRedrawPolicy"] = LayerContentsRedrawPolicy;
  })(NSView$1 || (NSView$1 = {}));
  var NSViewController;
  (function(NSViewController2) {
    let TransitionOptions;
    (function(TransitionOptions2) {
      TransitionOptions2[TransitionOptions2["None"] = 0] = "None";
      TransitionOptions2[TransitionOptions2["Crossfade"] = 1] = "Crossfade";
      TransitionOptions2[TransitionOptions2["SlideUp"] = 16] = "SlideUp";
      TransitionOptions2[TransitionOptions2["SlideDown"] = 32] = "SlideDown";
      TransitionOptions2[TransitionOptions2["SlideLeft"] = 64] = "SlideLeft";
      TransitionOptions2[TransitionOptions2["SlideRight"] = 128] = "SlideRight";
      TransitionOptions2[TransitionOptions2["SlideForward"] = 320] = "SlideForward";
      TransitionOptions2[TransitionOptions2["SlideBackward"] = 384] = "SlideBackward";
      TransitionOptions2[TransitionOptions2["AllowUserInteraction"] = 4096] = "AllowUserInteraction";
    })(TransitionOptions = NSViewController2.TransitionOptions || (NSViewController2.TransitionOptions = {}));
    global$2["NSViewController"]["TransitionOptions"] = TransitionOptions;
  })(NSViewController || (NSViewController = {}));
  var NSVisualEffectView$1;
  (function(NSVisualEffectView2) {
    let BlendingMode;
    (function(BlendingMode2) {
      BlendingMode2[BlendingMode2["BehindWindow"] = 0] = "BehindWindow";
      BlendingMode2[BlendingMode2["WithinWindow"] = 1] = "WithinWindow";
    })(BlendingMode = NSVisualEffectView2.BlendingMode || (NSVisualEffectView2.BlendingMode = {}));
    global$2["NSVisualEffectView"]["BlendingMode"] = BlendingMode;
    let Material;
    (function(Material2) {
      Material2[Material2["Titlebar"] = 3] = "Titlebar";
      Material2[Material2["Selection"] = 4] = "Selection";
      Material2[Material2["Menu"] = 5] = "Menu";
      Material2[Material2["Popover"] = 6] = "Popover";
      Material2[Material2["Sidebar"] = 7] = "Sidebar";
      Material2[Material2["HeaderView"] = 10] = "HeaderView";
      Material2[Material2["Sheet"] = 11] = "Sheet";
      Material2[Material2["WindowBackground"] = 12] = "WindowBackground";
      Material2[Material2["HUDWindow"] = 13] = "HUDWindow";
      Material2[Material2["FullScreenUI"] = 15] = "FullScreenUI";
      Material2[Material2["ToolTip"] = 17] = "ToolTip";
      Material2[Material2["ContentBackground"] = 18] = "ContentBackground";
      Material2[Material2["UnderWindowBackground"] = 21] = "UnderWindowBackground";
      Material2[Material2["UnderPageBackground"] = 22] = "UnderPageBackground";
      Material2[Material2["AppearanceBased"] = 0] = "AppearanceBased";
      Material2[Material2["Light"] = 1] = "Light";
      Material2[Material2["Dark"] = 2] = "Dark";
      Material2[Material2["MediumLight"] = 8] = "MediumLight";
      Material2[Material2["UltraDark"] = 9] = "UltraDark";
    })(Material = NSVisualEffectView2.Material || (NSVisualEffectView2.Material = {}));
    global$2["NSVisualEffectView"]["Material"] = Material;
    let State;
    (function(State2) {
      State2[State2["FollowsWindowActiveState"] = 0] = "FollowsWindowActiveState";
      State2[State2["Active"] = 1] = "Active";
      State2[State2["Inactive"] = 2] = "Inactive";
    })(State = NSVisualEffectView2.State || (NSVisualEffectView2.State = {}));
    global$2["NSVisualEffectView"]["State"] = State;
  })(NSVisualEffectView$1 || (NSVisualEffectView$1 = {}));
  var NSWhoseSpecifier;
  (function(NSWhoseSpecifier2) {
    let SubelementIdentifier;
    (function(SubelementIdentifier2) {
      SubelementIdentifier2[SubelementIdentifier2["IndexSubelement"] = 0] = "IndexSubelement";
      SubelementIdentifier2[SubelementIdentifier2["EverySubelement"] = 1] = "EverySubelement";
      SubelementIdentifier2[SubelementIdentifier2["MiddleSubelement"] = 2] = "MiddleSubelement";
      SubelementIdentifier2[SubelementIdentifier2["RandomSubelement"] = 3] = "RandomSubelement";
      SubelementIdentifier2[SubelementIdentifier2["NoSubelement"] = 4] = "NoSubelement";
    })(SubelementIdentifier = NSWhoseSpecifier2.SubelementIdentifier || (NSWhoseSpecifier2.SubelementIdentifier = {}));
    global$2["NSWhoseSpecifier"]["SubelementIdentifier"] = SubelementIdentifier;
  })(NSWhoseSpecifier || (NSWhoseSpecifier = {}));
  var NSWindow$1;
  (function(NSWindow2) {
    let BackingStoreType;
    (function(BackingStoreType2) {
      BackingStoreType2[BackingStoreType2["Retained"] = 0] = "Retained";
      BackingStoreType2[BackingStoreType2["Nonretained"] = 1] = "Nonretained";
      BackingStoreType2[BackingStoreType2["Buffered"] = 2] = "Buffered";
    })(BackingStoreType = NSWindow2.BackingStoreType || (NSWindow2.BackingStoreType = {}));
    global$2["NSWindow"]["BackingStoreType"] = BackingStoreType;
    let SelectionDirection;
    (function(SelectionDirection2) {
      SelectionDirection2[SelectionDirection2["DirectSelection"] = 0] = "DirectSelection";
      SelectionDirection2[SelectionDirection2["SelectingNext"] = 1] = "SelectingNext";
      SelectionDirection2[SelectionDirection2["SelectingPrevious"] = 2] = "SelectingPrevious";
    })(SelectionDirection = NSWindow2.SelectionDirection || (NSWindow2.SelectionDirection = {}));
    global$2["NSWindow"]["SelectionDirection"] = SelectionDirection;
    let AnimationBehavior;
    (function(AnimationBehavior2) {
      AnimationBehavior2[AnimationBehavior2["Default"] = 0] = "Default";
      AnimationBehavior2[AnimationBehavior2["None"] = 2] = "None";
      AnimationBehavior2[AnimationBehavior2["DocumentWindow"] = 3] = "DocumentWindow";
      AnimationBehavior2[AnimationBehavior2["UtilityWindow"] = 4] = "UtilityWindow";
      AnimationBehavior2[AnimationBehavior2["AlertPanel"] = 5] = "AlertPanel";
    })(AnimationBehavior = NSWindow2.AnimationBehavior || (NSWindow2.AnimationBehavior = {}));
    global$2["NSWindow"]["AnimationBehavior"] = AnimationBehavior;
    let ButtonType;
    (function(ButtonType2) {
      ButtonType2[ButtonType2["CloseButton"] = 0] = "CloseButton";
      ButtonType2[ButtonType2["MiniaturizeButton"] = 1] = "MiniaturizeButton";
      ButtonType2[ButtonType2["ZoomButton"] = 2] = "ZoomButton";
      ButtonType2[ButtonType2["ToolbarButton"] = 3] = "ToolbarButton";
      ButtonType2[ButtonType2["DocumentIconButton"] = 4] = "DocumentIconButton";
      ButtonType2[ButtonType2["DocumentVersionsButton"] = 6] = "DocumentVersionsButton";
    })(ButtonType = NSWindow2.ButtonType || (NSWindow2.ButtonType = {}));
    global$2["NSWindow"]["ButtonType"] = ButtonType;
    let CollectionBehavior;
    (function(CollectionBehavior2) {
      CollectionBehavior2[CollectionBehavior2["Default"] = 0] = "Default";
      CollectionBehavior2[CollectionBehavior2["CanJoinAllSpaces"] = 1] = "CanJoinAllSpaces";
      CollectionBehavior2[CollectionBehavior2["MoveToActiveSpace"] = 2] = "MoveToActiveSpace";
      CollectionBehavior2[CollectionBehavior2["Managed"] = 4] = "Managed";
      CollectionBehavior2[CollectionBehavior2["Transient"] = 8] = "Transient";
      CollectionBehavior2[CollectionBehavior2["Stationary"] = 16] = "Stationary";
      CollectionBehavior2[CollectionBehavior2["ParticipatesInCycle"] = 32] = "ParticipatesInCycle";
      CollectionBehavior2[CollectionBehavior2["IgnoresCycle"] = 64] = "IgnoresCycle";
      CollectionBehavior2[CollectionBehavior2["FullScreenPrimary"] = 128] = "FullScreenPrimary";
      CollectionBehavior2[CollectionBehavior2["FullScreenAuxiliary"] = 256] = "FullScreenAuxiliary";
      CollectionBehavior2[CollectionBehavior2["FullScreenNone"] = 512] = "FullScreenNone";
      CollectionBehavior2[CollectionBehavior2["FullScreenAllowsTiling"] = 2048] = "FullScreenAllowsTiling";
      CollectionBehavior2[CollectionBehavior2["FullScreenDisallowsTiling"] = 4096] = "FullScreenDisallowsTiling";
    })(CollectionBehavior = NSWindow2.CollectionBehavior || (NSWindow2.CollectionBehavior = {}));
    global$2["NSWindow"]["CollectionBehavior"] = CollectionBehavior;
    let Depth;
    (function(Depth2) {
      Depth2[Depth2["TwentyfourBitRGB"] = 520] = "TwentyfourBitRGB";
      Depth2[Depth2["SixtyfourBitRGB"] = 528] = "SixtyfourBitRGB";
      Depth2[Depth2["OnehundredtwentyeightBitRGB"] = 544] = "OnehundredtwentyeightBitRGB";
    })(Depth = NSWindow2.Depth || (NSWindow2.Depth = {}));
    global$2["NSWindow"]["Depth"] = Depth;
    let NumberListOptions;
    (function(NumberListOptions2) {
      NumberListOptions2[NumberListOptions2["AllApplications"] = 1] = "AllApplications";
      NumberListOptions2[NumberListOptions2["AllSpaces"] = 16] = "AllSpaces";
    })(NumberListOptions = NSWindow2.NumberListOptions || (NSWindow2.NumberListOptions = {}));
    global$2["NSWindow"]["NumberListOptions"] = NumberListOptions;
    let OcclusionState;
    (function(OcclusionState2) {
      OcclusionState2[OcclusionState2["Visible"] = 2] = "Visible";
    })(OcclusionState = NSWindow2.OcclusionState || (NSWindow2.OcclusionState = {}));
    global$2["NSWindow"]["OcclusionState"] = OcclusionState;
    let OrderingMode;
    (function(OrderingMode2) {
      OrderingMode2[OrderingMode2["Above"] = 1] = "Above";
      OrderingMode2[OrderingMode2["Below"] = -1] = "Below";
      OrderingMode2[OrderingMode2["Out"] = 0] = "Out";
    })(OrderingMode = NSWindow2.OrderingMode || (NSWindow2.OrderingMode = {}));
    global$2["NSWindow"]["OrderingMode"] = OrderingMode;
    let SharingType;
    (function(SharingType2) {
      SharingType2[SharingType2["None"] = 0] = "None";
      SharingType2[SharingType2["ReadOnly"] = 1] = "ReadOnly";
      SharingType2[SharingType2["ReadWrite"] = 2] = "ReadWrite";
    })(SharingType = NSWindow2.SharingType || (NSWindow2.SharingType = {}));
    global$2["NSWindow"]["SharingType"] = SharingType;
    let StyleMask;
    (function(StyleMask2) {
      StyleMask2[StyleMask2["Borderless"] = 0] = "Borderless";
      StyleMask2[StyleMask2["Titled"] = 1] = "Titled";
      StyleMask2[StyleMask2["Closable"] = 2] = "Closable";
      StyleMask2[StyleMask2["Miniaturizable"] = 4] = "Miniaturizable";
      StyleMask2[StyleMask2["Resizable"] = 8] = "Resizable";
      StyleMask2[StyleMask2["TexturedBackground"] = 256] = "TexturedBackground";
      StyleMask2[StyleMask2["UnifiedTitleAndToolbar"] = 4096] = "UnifiedTitleAndToolbar";
      StyleMask2[StyleMask2["FullScreen"] = 16384] = "FullScreen";
      StyleMask2[StyleMask2["FullSizeContentView"] = 32768] = "FullSizeContentView";
      StyleMask2[StyleMask2["UtilityWindow"] = 16] = "UtilityWindow";
      StyleMask2[StyleMask2["DocModalWindow"] = 64] = "DocModalWindow";
      StyleMask2[StyleMask2["NonactivatingPanel"] = 128] = "NonactivatingPanel";
      StyleMask2[StyleMask2["HUDWindow"] = 8192] = "HUDWindow";
    })(StyleMask = NSWindow2.StyleMask || (NSWindow2.StyleMask = {}));
    global$2["NSWindow"]["StyleMask"] = StyleMask;
    let TabbingMode;
    (function(TabbingMode2) {
      TabbingMode2[TabbingMode2["Automatic"] = 0] = "Automatic";
      TabbingMode2[TabbingMode2["Preferred"] = 1] = "Preferred";
      TabbingMode2[TabbingMode2["Disallowed"] = 2] = "Disallowed";
    })(TabbingMode = NSWindow2.TabbingMode || (NSWindow2.TabbingMode = {}));
    global$2["NSWindow"]["TabbingMode"] = TabbingMode;
    let TitleVisibility;
    (function(TitleVisibility2) {
      TitleVisibility2[TitleVisibility2["Visible"] = 0] = "Visible";
      TitleVisibility2[TitleVisibility2["Hidden"] = 1] = "Hidden";
    })(TitleVisibility = NSWindow2.TitleVisibility || (NSWindow2.TitleVisibility = {}));
    global$2["NSWindow"]["TitleVisibility"] = TitleVisibility;
    let UserTabbingPreference;
    (function(UserTabbingPreference2) {
      UserTabbingPreference2[UserTabbingPreference2["Manual"] = 0] = "Manual";
      UserTabbingPreference2[UserTabbingPreference2["Always"] = 1] = "Always";
      UserTabbingPreference2[UserTabbingPreference2["InFullScreen"] = 2] = "InFullScreen";
    })(UserTabbingPreference = NSWindow2.UserTabbingPreference || (NSWindow2.UserTabbingPreference = {}));
    global$2["NSWindow"]["UserTabbingPreference"] = UserTabbingPreference;
  })(NSWindow$1 || (NSWindow$1 = {}));
  var NSWorkspace;
  (function(NSWorkspace2) {
    let AuthorizationType;
    (function(AuthorizationType2) {
      AuthorizationType2[AuthorizationType2["CreateSymbolicLink"] = 0] = "CreateSymbolicLink";
      AuthorizationType2[AuthorizationType2["SetAttributes"] = 1] = "SetAttributes";
      AuthorizationType2[AuthorizationType2["ReplaceFile"] = 2] = "ReplaceFile";
    })(AuthorizationType = NSWorkspace2.AuthorizationType || (NSWorkspace2.AuthorizationType = {}));
    global$2["NSWorkspace"]["AuthorizationType"] = AuthorizationType;
    let IconCreationOptions;
    (function(IconCreationOptions2) {
      IconCreationOptions2[IconCreationOptions2["ExcludeQuickDrawElementsIconCreationOption"] = 2] = "ExcludeQuickDrawElementsIconCreationOption";
      IconCreationOptions2[IconCreationOptions2["Exclude10_4ElementsIconCreationOption"] = 4] = "Exclude10_4ElementsIconCreationOption";
    })(IconCreationOptions = NSWorkspace2.IconCreationOptions || (NSWorkspace2.IconCreationOptions = {}));
    global$2["NSWorkspace"]["IconCreationOptions"] = IconCreationOptions;
    let LaunchOptions;
    (function(LaunchOptions2) {
      LaunchOptions2[LaunchOptions2["AndPrint"] = 2] = "AndPrint";
      LaunchOptions2[LaunchOptions2["WithErrorPresentation"] = 64] = "WithErrorPresentation";
      LaunchOptions2[LaunchOptions2["InhibitingBackgroundOnly"] = 128] = "InhibitingBackgroundOnly";
      LaunchOptions2[LaunchOptions2["WithoutAddingToRecents"] = 256] = "WithoutAddingToRecents";
      LaunchOptions2[LaunchOptions2["WithoutActivation"] = 512] = "WithoutActivation";
      LaunchOptions2[LaunchOptions2["Async"] = 65536] = "Async";
      LaunchOptions2[LaunchOptions2["NewInstance"] = 524288] = "NewInstance";
      LaunchOptions2[LaunchOptions2["AndHide"] = 1048576] = "AndHide";
      LaunchOptions2[LaunchOptions2["AndHideOthers"] = 2097152] = "AndHideOthers";
      LaunchOptions2[LaunchOptions2["Default"] = 65536] = "Default";
      LaunchOptions2[LaunchOptions2["AllowingClassicStartup"] = 131072] = "AllowingClassicStartup";
      LaunchOptions2[LaunchOptions2["PreferringClassic"] = 262144] = "PreferringClassic";
    })(LaunchOptions = NSWorkspace2.LaunchOptions || (NSWorkspace2.LaunchOptions = {}));
    global$2["NSWorkspace"]["LaunchOptions"] = LaunchOptions;
  })(NSWorkspace || (NSWorkspace = {}));
  var NSXPCConnection;
  (function(NSXPCConnection2) {
    let Options;
    (function(Options2) {
      Options2[Options2["Privileged"] = 4096] = "Privileged";
    })(Options = NSXPCConnection2.Options || (NSXPCConnection2.Options = {}));
    global$2["NSXPCConnection"]["Options"] = Options;
  })(NSXPCConnection || (NSXPCConnection = {}));
  var NetService;
  (function(NetService2) {
    (function(Options2) {
      Options2[Options2["noAutoRename"] = 0] = "noAutoRename";
      Options2[Options2["listenForConnections"] = 1] = "listenForConnections";
      Options2[Options2["center"] = 2] = "center";
      Options2[Options2["name"] = 3] = "name";
      Options2[Options2["object"] = 4] = "object";
    })(NetService2.Options || (NetService2.Options = {}));
  })(NetService || (NetService = {}));
  var NotificationQueue;
  (function(NotificationQueue2) {
    let NotificationCoalescing;
    (function(NotificationCoalescing2) {
      NotificationCoalescing2[NotificationCoalescing2["NoCoalescing"] = 0] = "NoCoalescing";
      NotificationCoalescing2[NotificationCoalescing2["CoalescingOnName"] = 1] = "CoalescingOnName";
      NotificationCoalescing2[NotificationCoalescing2["CoalescingOnSender"] = 2] = "CoalescingOnSender";
    })(NotificationCoalescing = NotificationQueue2.NotificationCoalescing || (NotificationQueue2.NotificationCoalescing = {}));
    global$2["NotificationQueue"]["NotificationCoalescing"] = NotificationCoalescing;
    let PostingStyle;
    (function(PostingStyle2) {
      PostingStyle2[PostingStyle2["WhenIdle"] = 1] = "WhenIdle";
      PostingStyle2[PostingStyle2["ASAP"] = 2] = "ASAP";
      PostingStyle2[PostingStyle2["Now"] = 3] = "Now";
    })(PostingStyle = NotificationQueue2.PostingStyle || (NotificationQueue2.PostingStyle = {}));
    global$2["NotificationQueue"]["PostingStyle"] = PostingStyle;
  })(NotificationQueue || (NotificationQueue = {}));
  var NumberFormatter;
  (function(NumberFormatter2) {
    let Behavior;
    (function(Behavior2) {
      Behavior2[Behavior2["BehaviorDefault"] = 0] = "BehaviorDefault";
      Behavior2[Behavior2["Behavior10_0"] = 1e3] = "Behavior10_0";
      Behavior2[Behavior2["Behavior10_4"] = 1040] = "Behavior10_4";
    })(Behavior = NumberFormatter2.Behavior || (NumberFormatter2.Behavior = {}));
    global$2["NumberFormatter"]["Behavior"] = Behavior;
    let PadPosition;
    (function(PadPosition2) {
      PadPosition2[PadPosition2["BeforePrefix"] = 0] = "BeforePrefix";
      PadPosition2[PadPosition2["AfterPrefix"] = 1] = "AfterPrefix";
      PadPosition2[PadPosition2["BeforeSuffix"] = 2] = "BeforeSuffix";
      PadPosition2[PadPosition2["AfterSuffix"] = 3] = "AfterSuffix";
    })(PadPosition = NumberFormatter2.PadPosition || (NumberFormatter2.PadPosition = {}));
    global$2["NumberFormatter"]["PadPosition"] = PadPosition;
    let RoundingMode;
    (function(RoundingMode2) {
      RoundingMode2[RoundingMode2["Ceiling"] = 0] = "Ceiling";
      RoundingMode2[RoundingMode2["Floor"] = 1] = "Floor";
      RoundingMode2[RoundingMode2["Down"] = 2] = "Down";
      RoundingMode2[RoundingMode2["Up"] = 3] = "Up";
      RoundingMode2[RoundingMode2["HalfEven"] = 4] = "HalfEven";
      RoundingMode2[RoundingMode2["HalfDown"] = 5] = "HalfDown";
      RoundingMode2[RoundingMode2["HalfUp"] = 6] = "HalfUp";
    })(RoundingMode = NumberFormatter2.RoundingMode || (NumberFormatter2.RoundingMode = {}));
    global$2["NumberFormatter"]["RoundingMode"] = RoundingMode;
    let Style;
    (function(Style2) {
      Style2[Style2["NoStyle"] = 0] = "NoStyle";
      Style2[Style2["DecimalStyle"] = 1] = "DecimalStyle";
      Style2[Style2["CurrencyStyle"] = 2] = "CurrencyStyle";
      Style2[Style2["PercentStyle"] = 3] = "PercentStyle";
      Style2[Style2["ScientificStyle"] = 4] = "ScientificStyle";
      Style2[Style2["SpellOutStyle"] = 5] = "SpellOutStyle";
      Style2[Style2["OrdinalStyle"] = 6] = "OrdinalStyle";
      Style2[Style2["CurrencyISOCodeStyle"] = 8] = "CurrencyISOCodeStyle";
      Style2[Style2["CurrencyPluralStyle"] = 9] = "CurrencyPluralStyle";
      Style2[Style2["CurrencyAccountingStyle"] = 10] = "CurrencyAccountingStyle";
    })(Style = NumberFormatter2.Style || (NumberFormatter2.Style = {}));
    global$2["NumberFormatter"]["Style"] = Style;
  })(NumberFormatter || (NumberFormatter = {}));
  var Operation;
  (function(Operation2) {
    let QueuePriority;
    (function(QueuePriority2) {
      QueuePriority2[QueuePriority2["VeryLow"] = -8] = "VeryLow";
      QueuePriority2[QueuePriority2["Low"] = -4] = "Low";
      QueuePriority2[QueuePriority2["Normal"] = 0] = "Normal";
      QueuePriority2[QueuePriority2["High"] = 4] = "High";
      QueuePriority2[QueuePriority2["VeryHigh"] = 8] = "VeryHigh";
    })(QueuePriority = Operation2.QueuePriority || (Operation2.QueuePriority = {}));
    global$2["Operation"]["QueuePriority"] = QueuePriority;
  })(Operation || (Operation = {}));
  var PersonNameComponentsFormatter;
  (function(PersonNameComponentsFormatter2) {
    let Options;
    (function(Options2) {
      Options2[Options2["Phonetic"] = 2] = "Phonetic";
    })(Options = PersonNameComponentsFormatter2.Options || (PersonNameComponentsFormatter2.Options = {}));
    global$2["PersonNameComponentsFormatter"]["Options"] = Options;
    let Style;
    (function(Style2) {
      Style2[Style2["Default"] = 0] = "Default";
      Style2[Style2["Short"] = 1] = "Short";
      Style2[Style2["Medium"] = 2] = "Medium";
      Style2[Style2["Long"] = 3] = "Long";
      Style2[Style2["Abbreviated"] = 4] = "Abbreviated";
    })(Style = PersonNameComponentsFormatter2.Style || (PersonNameComponentsFormatter2.Style = {}));
    global$2["PersonNameComponentsFormatter"]["Style"] = Style;
  })(PersonNameComponentsFormatter || (PersonNameComponentsFormatter = {}));
  var Process;
  (function(Process2) {
    let TerminationReason;
    (function(TerminationReason2) {
      TerminationReason2[TerminationReason2["Exit"] = 1] = "Exit";
      TerminationReason2[TerminationReason2["UncaughtSignal"] = 2] = "UncaughtSignal";
    })(TerminationReason = Process2.TerminationReason || (Process2.TerminationReason = {}));
    global$2["Process"]["TerminationReason"] = TerminationReason;
  })(Process || (Process = {}));
  var ProcessInfo;
  (function(ProcessInfo2) {
    let ActivityOptions;
    (function(ActivityOptions2) {
      ActivityOptions2[ActivityOptions2["IdleDisplaySleepDisabled"] = 1099511627776] = "IdleDisplaySleepDisabled";
      ActivityOptions2[ActivityOptions2["IdleSystemSleepDisabled"] = 1048576] = "IdleSystemSleepDisabled";
      ActivityOptions2[ActivityOptions2["SuddenTerminationDisabled"] = 16384] = "SuddenTerminationDisabled";
      ActivityOptions2[ActivityOptions2["AutomaticTerminationDisabled"] = 32768] = "AutomaticTerminationDisabled";
      ActivityOptions2[ActivityOptions2["UserInitiated"] = 16777215] = "UserInitiated";
      ActivityOptions2[ActivityOptions2["UserInitiatedAllowingIdleSystemSleep"] = 15728639] = "UserInitiatedAllowingIdleSystemSleep";
      ActivityOptions2[ActivityOptions2["Background"] = 255] = "Background";
      ActivityOptions2[ActivityOptions2["LatencyCritical"] = 1095216660480] = "LatencyCritical";
    })(ActivityOptions = ProcessInfo2.ActivityOptions || (ProcessInfo2.ActivityOptions = {}));
    global$2["ProcessInfo"]["ActivityOptions"] = ActivityOptions;
    let ThermalState;
    (function(ThermalState2) {
      ThermalState2[ThermalState2["Nominal"] = 0] = "Nominal";
      ThermalState2[ThermalState2["Fair"] = 1] = "Fair";
      ThermalState2[ThermalState2["Serious"] = 2] = "Serious";
      ThermalState2[ThermalState2["Critical"] = 3] = "Critical";
    })(ThermalState = ProcessInfo2.ThermalState || (ProcessInfo2.ThermalState = {}));
    global$2["ProcessInfo"]["ThermalState"] = ThermalState;
  })(ProcessInfo || (ProcessInfo = {}));
  var PropertyListSerialization;
  (function(PropertyListSerialization2) {
    let PropertyListFormat;
    (function(PropertyListFormat2) {
      PropertyListFormat2[PropertyListFormat2["OpenStepFormat"] = 1] = "OpenStepFormat";
      PropertyListFormat2[PropertyListFormat2["XMLFormat_v1_0"] = 100] = "XMLFormat_v1_0";
      PropertyListFormat2[PropertyListFormat2["BinaryFormat_v1_0"] = 200] = "BinaryFormat_v1_0";
    })(PropertyListFormat = PropertyListSerialization2.PropertyListFormat || (PropertyListSerialization2.PropertyListFormat = {}));
    global$2["PropertyListSerialization"]["PropertyListFormat"] = PropertyListFormat;
    let MutabilityOptions;
    (function(MutabilityOptions2) {
      MutabilityOptions2[MutabilityOptions2["Immutable"] = 0] = "Immutable";
      MutabilityOptions2[MutabilityOptions2["MutableContainers"] = 1] = "MutableContainers";
      MutabilityOptions2[MutabilityOptions2["MutableContainersAndLeaves"] = 2] = "MutableContainersAndLeaves";
    })(MutabilityOptions = PropertyListSerialization2.MutabilityOptions || (PropertyListSerialization2.MutabilityOptions = {}));
    global$2["PropertyListSerialization"]["MutabilityOptions"] = MutabilityOptions;
  })(PropertyListSerialization || (PropertyListSerialization = {}));
  var RelativeDateTimeFormatter;
  (function(RelativeDateTimeFormatter2) {
    let DateTimeStyle;
    (function(DateTimeStyle2) {
      DateTimeStyle2[DateTimeStyle2["Numeric"] = 0] = "Numeric";
      DateTimeStyle2[DateTimeStyle2["Named"] = 1] = "Named";
    })(DateTimeStyle = RelativeDateTimeFormatter2.DateTimeStyle || (RelativeDateTimeFormatter2.DateTimeStyle = {}));
    global$2["RelativeDateTimeFormatter"]["DateTimeStyle"] = DateTimeStyle;
    let UnitsStyle;
    (function(UnitsStyle2) {
      UnitsStyle2[UnitsStyle2["Full"] = 0] = "Full";
      UnitsStyle2[UnitsStyle2["SpellOut"] = 1] = "SpellOut";
      UnitsStyle2[UnitsStyle2["Short"] = 2] = "Short";
      UnitsStyle2[UnitsStyle2["Abbreviated"] = 3] = "Abbreviated";
    })(UnitsStyle = RelativeDateTimeFormatter2.UnitsStyle || (RelativeDateTimeFormatter2.UnitsStyle = {}));
    global$2["RelativeDateTimeFormatter"]["UnitsStyle"] = UnitsStyle;
  })(RelativeDateTimeFormatter || (RelativeDateTimeFormatter = {}));
  var Stream;
  (function(Stream2) {
    let Event;
    (function(Event2) {
      Event2[Event2["None"] = 0] = "None";
      Event2[Event2["OpenCompleted"] = 1] = "OpenCompleted";
      Event2[Event2["HasBytesAvailable"] = 2] = "HasBytesAvailable";
      Event2[Event2["HasSpaceAvailable"] = 4] = "HasSpaceAvailable";
      Event2[Event2["ErrorOccurred"] = 8] = "ErrorOccurred";
      Event2[Event2["EndEncountered"] = 16] = "EndEncountered";
    })(Event = Stream2.Event || (Stream2.Event = {}));
    global$2["Stream"]["Event"] = Event;
    let Status;
    (function(Status2) {
      Status2[Status2["NotOpen"] = 0] = "NotOpen";
      Status2[Status2["Opening"] = 1] = "Opening";
      Status2[Status2["Open"] = 2] = "Open";
      Status2[Status2["Reading"] = 3] = "Reading";
      Status2[Status2["Writing"] = 4] = "Writing";
      Status2[Status2["AtEnd"] = 5] = "AtEnd";
      Status2[Status2["Closed"] = 6] = "Closed";
      Status2[Status2["Error"] = 7] = "Error";
    })(Status = Stream2.Status || (Stream2.Status = {}));
    global$2["Stream"]["Status"] = Status;
  })(Stream || (Stream = {}));
  var URLCache;
  (function(URLCache2) {
    let StoragePolicy;
    (function(StoragePolicy2) {
      StoragePolicy2[StoragePolicy2["Allowed"] = 0] = "Allowed";
      StoragePolicy2[StoragePolicy2["AllowedInMemoryOnly"] = 1] = "AllowedInMemoryOnly";
      StoragePolicy2[StoragePolicy2["NotAllowed"] = 2] = "NotAllowed";
    })(StoragePolicy = URLCache2.StoragePolicy || (URLCache2.StoragePolicy = {}));
    global$2["URLCache"]["StoragePolicy"] = StoragePolicy;
  })(URLCache || (URLCache = {}));
  var URLCredential;
  (function(URLCredential2) {
    let Persistence;
    (function(Persistence2) {
      Persistence2[Persistence2["None"] = 0] = "None";
      Persistence2[Persistence2["ForSession"] = 1] = "ForSession";
      Persistence2[Persistence2["Permanent"] = 2] = "Permanent";
      Persistence2[Persistence2["Synchronizable"] = 3] = "Synchronizable";
    })(Persistence = URLCredential2.Persistence || (URLCredential2.Persistence = {}));
    global$2["URLCredential"]["Persistence"] = Persistence;
  })(URLCredential || (URLCredential = {}));
  var URLSession;
  (function(URLSession2) {
    let AuthChallengeDisposition;
    (function(AuthChallengeDisposition2) {
      AuthChallengeDisposition2[AuthChallengeDisposition2["UseCredential"] = 0] = "UseCredential";
      AuthChallengeDisposition2[AuthChallengeDisposition2["PerformDefaultHandling"] = 1] = "PerformDefaultHandling";
      AuthChallengeDisposition2[AuthChallengeDisposition2["CancelAuthenticationChallenge"] = 2] = "CancelAuthenticationChallenge";
      AuthChallengeDisposition2[AuthChallengeDisposition2["RejectProtectionSpace"] = 3] = "RejectProtectionSpace";
    })(AuthChallengeDisposition = URLSession2.AuthChallengeDisposition || (URLSession2.AuthChallengeDisposition = {}));
    global$2["URLSession"]["AuthChallengeDisposition"] = AuthChallengeDisposition;
    let ResponseDisposition;
    (function(ResponseDisposition2) {
      ResponseDisposition2[ResponseDisposition2["Cancel"] = 0] = "Cancel";
      ResponseDisposition2[ResponseDisposition2["Allow"] = 1] = "Allow";
      ResponseDisposition2[ResponseDisposition2["BecomeDownload"] = 2] = "BecomeDownload";
      ResponseDisposition2[ResponseDisposition2["BecomeStream"] = 3] = "BecomeStream";
    })(ResponseDisposition = URLSession2.ResponseDisposition || (URLSession2.ResponseDisposition = {}));
    global$2["URLSession"]["ResponseDisposition"] = ResponseDisposition;
  })(URLSession || (URLSession = {}));
  var URLSessionTask;
  (function(URLSessionTask2) {
    let State;
    (function(State2) {
      State2[State2["Running"] = 0] = "Running";
      State2[State2["Suspended"] = 1] = "Suspended";
      State2[State2["Canceling"] = 2] = "Canceling";
      State2[State2["Completed"] = 3] = "Completed";
    })(State = URLSessionTask2.State || (URLSessionTask2.State = {}));
    global$2["URLSessionTask"]["State"] = State;
  })(URLSessionTask || (URLSessionTask = {}));
  var URLSessionTaskMetrics;
  (function(URLSessionTaskMetrics2) {
    let ResourceFetchType;
    (function(ResourceFetchType2) {
      ResourceFetchType2[ResourceFetchType2["Unknown"] = 0] = "Unknown";
      ResourceFetchType2[ResourceFetchType2["NetworkLoad"] = 1] = "NetworkLoad";
      ResourceFetchType2[ResourceFetchType2["ServerPush"] = 2] = "ServerPush";
      ResourceFetchType2[ResourceFetchType2["LocalCache"] = 3] = "LocalCache";
    })(ResourceFetchType = URLSessionTaskMetrics2.ResourceFetchType || (URLSessionTaskMetrics2.ResourceFetchType = {}));
    global$2["URLSessionTaskMetrics"]["ResourceFetchType"] = ResourceFetchType;
  })(URLSessionTaskMetrics || (URLSessionTaskMetrics = {}));
  var URLSessionWebSocketTask;
  (function(URLSessionWebSocketTask2) {
    let CloseCode;
    (function(CloseCode2) {
      CloseCode2[CloseCode2["Invalid"] = 0] = "Invalid";
      CloseCode2[CloseCode2["NormalClosure"] = 1e3] = "NormalClosure";
      CloseCode2[CloseCode2["GoingAway"] = 1001] = "GoingAway";
      CloseCode2[CloseCode2["ProtocolError"] = 1002] = "ProtocolError";
      CloseCode2[CloseCode2["UnsupportedData"] = 1003] = "UnsupportedData";
      CloseCode2[CloseCode2["NoStatusReceived"] = 1005] = "NoStatusReceived";
      CloseCode2[CloseCode2["AbnormalClosure"] = 1006] = "AbnormalClosure";
      CloseCode2[CloseCode2["InvalidFramePayloadData"] = 1007] = "InvalidFramePayloadData";
      CloseCode2[CloseCode2["PolicyViolation"] = 1008] = "PolicyViolation";
      CloseCode2[CloseCode2["MessageTooBig"] = 1009] = "MessageTooBig";
      CloseCode2[CloseCode2["MandatoryExtensionMissing"] = 1010] = "MandatoryExtensionMissing";
      CloseCode2[CloseCode2["InternalServerError"] = 1011] = "InternalServerError";
      CloseCode2[CloseCode2["TLSHandshakeFailure"] = 1015] = "TLSHandshakeFailure";
    })(CloseCode = URLSessionWebSocketTask2.CloseCode || (URLSessionWebSocketTask2.CloseCode = {}));
    global$2["URLSessionWebSocketTask"]["CloseCode"] = CloseCode;
  })(URLSessionWebSocketTask || (URLSessionWebSocketTask = {}));
  var XMLDTDNode;
  (function(XMLDTDNode2) {
    let DTDKind;
    (function(DTDKind2) {
      DTDKind2[DTDKind2["EntityGeneralKind"] = 1] = "EntityGeneralKind";
      DTDKind2[DTDKind2["EntityParsedKind"] = 2] = "EntityParsedKind";
      DTDKind2[DTDKind2["EntityUnparsedKind"] = 3] = "EntityUnparsedKind";
      DTDKind2[DTDKind2["EntityParameterKind"] = 4] = "EntityParameterKind";
      DTDKind2[DTDKind2["EntityPredefined"] = 5] = "EntityPredefined";
      DTDKind2[DTDKind2["AttributeCDATAKind"] = 6] = "AttributeCDATAKind";
      DTDKind2[DTDKind2["AttributeIDKind"] = 7] = "AttributeIDKind";
      DTDKind2[DTDKind2["AttributeIDRefKind"] = 8] = "AttributeIDRefKind";
      DTDKind2[DTDKind2["AttributeIDRefsKind"] = 9] = "AttributeIDRefsKind";
      DTDKind2[DTDKind2["AttributeEntityKind"] = 10] = "AttributeEntityKind";
      DTDKind2[DTDKind2["AttributeEntitiesKind"] = 11] = "AttributeEntitiesKind";
      DTDKind2[DTDKind2["AttributeNMTokenKind"] = 12] = "AttributeNMTokenKind";
      DTDKind2[DTDKind2["AttributeNMTokensKind"] = 13] = "AttributeNMTokensKind";
      DTDKind2[DTDKind2["AttributeEnumerationKind"] = 14] = "AttributeEnumerationKind";
      DTDKind2[DTDKind2["AttributeNotationKind"] = 15] = "AttributeNotationKind";
      DTDKind2[DTDKind2["ElementDeclarationUndefinedKind"] = 16] = "ElementDeclarationUndefinedKind";
      DTDKind2[DTDKind2["ElementDeclarationEmptyKind"] = 17] = "ElementDeclarationEmptyKind";
      DTDKind2[DTDKind2["ElementDeclarationAnyKind"] = 18] = "ElementDeclarationAnyKind";
      DTDKind2[DTDKind2["ElementDeclarationMixedKind"] = 19] = "ElementDeclarationMixedKind";
      DTDKind2[DTDKind2["ElementDeclarationElementKind"] = 20] = "ElementDeclarationElementKind";
    })(DTDKind = XMLDTDNode2.DTDKind || (XMLDTDNode2.DTDKind = {}));
    global$2["XMLDTDNode"]["DTDKind"] = DTDKind;
  })(XMLDTDNode || (XMLDTDNode = {}));
  var XMLDocument;
  (function(XMLDocument2) {
    let ContentKind;
    (function(ContentKind2) {
      ContentKind2[ContentKind2["XMLKind"] = 0] = "XMLKind";
      ContentKind2[ContentKind2["XHTMLKind"] = 1] = "XHTMLKind";
      ContentKind2[ContentKind2["HTMLKind"] = 2] = "HTMLKind";
      ContentKind2[ContentKind2["TextKind"] = 3] = "TextKind";
    })(ContentKind = XMLDocument2.ContentKind || (XMLDocument2.ContentKind = {}));
    global$2["XMLDocument"]["ContentKind"] = ContentKind;
  })(XMLDocument || (XMLDocument = {}));
  var XMLNode;
  (function(XMLNode2) {
    let Kind;
    (function(Kind2) {
      Kind2[Kind2["InvalidKind"] = 0] = "InvalidKind";
      Kind2[Kind2["DocumentKind"] = 1] = "DocumentKind";
      Kind2[Kind2["ElementKind"] = 2] = "ElementKind";
      Kind2[Kind2["AttributeKind"] = 3] = "AttributeKind";
      Kind2[Kind2["NamespaceKind"] = 4] = "NamespaceKind";
      Kind2[Kind2["ProcessingInstructionKind"] = 5] = "ProcessingInstructionKind";
      Kind2[Kind2["CommentKind"] = 6] = "CommentKind";
      Kind2[Kind2["TextKind"] = 7] = "TextKind";
      Kind2[Kind2["DTDKind"] = 8] = "DTDKind";
      Kind2[Kind2["EntityDeclarationKind"] = 9] = "EntityDeclarationKind";
      Kind2[Kind2["AttributeDeclarationKind"] = 10] = "AttributeDeclarationKind";
      Kind2[Kind2["ElementDeclarationKind"] = 11] = "ElementDeclarationKind";
      Kind2[Kind2["NotationDeclarationKind"] = 12] = "NotationDeclarationKind";
    })(Kind = XMLNode2.Kind || (XMLNode2.Kind = {}));
    global$2["XMLNode"]["Kind"] = Kind;
    let Options;
    (function(Options2) {
      Options2[Options2["NodeOptionsNone"] = 0] = "NodeOptionsNone";
      Options2[Options2["NodeIsCDATA"] = 1] = "NodeIsCDATA";
      Options2[Options2["NodeExpandEmptyElement"] = 2] = "NodeExpandEmptyElement";
      Options2[Options2["NodeCompactEmptyElement"] = 4] = "NodeCompactEmptyElement";
      Options2[Options2["NodeUseSingleQuotes"] = 8] = "NodeUseSingleQuotes";
      Options2[Options2["NodeUseDoubleQuotes"] = 16] = "NodeUseDoubleQuotes";
      Options2[Options2["NodeNeverEscapeContents"] = 32] = "NodeNeverEscapeContents";
      Options2[Options2["DocumentTidyHTML"] = 512] = "DocumentTidyHTML";
      Options2[Options2["DocumentTidyXML"] = 1024] = "DocumentTidyXML";
      Options2[Options2["DocumentValidate"] = 8192] = "DocumentValidate";
      Options2[Options2["NodeLoadExternalEntitiesAlways"] = 16384] = "NodeLoadExternalEntitiesAlways";
      Options2[Options2["NodeLoadExternalEntitiesSameOriginOnly"] = 32768] = "NodeLoadExternalEntitiesSameOriginOnly";
      Options2[Options2["NodeLoadExternalEntitiesNever"] = 524288] = "NodeLoadExternalEntitiesNever";
      Options2[Options2["DocumentXInclude"] = 65536] = "DocumentXInclude";
      Options2[Options2["NodePrettyPrint"] = 131072] = "NodePrettyPrint";
      Options2[Options2["DocumentIncludeContentTypeDeclaration"] = 262144] = "DocumentIncludeContentTypeDeclaration";
      Options2[Options2["NodePreserveNamespaceOrder"] = 1048576] = "NodePreserveNamespaceOrder";
      Options2[Options2["NodePreserveAttributeOrder"] = 2097152] = "NodePreserveAttributeOrder";
      Options2[Options2["NodePreserveEntities"] = 4194304] = "NodePreserveEntities";
      Options2[Options2["NodePreservePrefixes"] = 8388608] = "NodePreservePrefixes";
      Options2[Options2["NodePreserveCDATA"] = 16777216] = "NodePreserveCDATA";
      Options2[Options2["NodePreserveWhitespace"] = 33554432] = "NodePreserveWhitespace";
      Options2[Options2["NodePreserveDTD"] = 67108864] = "NodePreserveDTD";
      Options2[Options2["NodePreserveCharacterReferences"] = 134217728] = "NodePreserveCharacterReferences";
      Options2[Options2["NodePromoteSignificantWhitespace"] = 268435456] = "NodePromoteSignificantWhitespace";
      Options2[Options2["NodePreserveEmptyElements"] = 6] = "NodePreserveEmptyElements";
      Options2[Options2["NodePreserveQuotes"] = 24] = "NodePreserveQuotes";
      Options2[Options2["NodePreserveAll"] = 4293918750] = "NodePreserveAll";
    })(Options = XMLNode2.Options || (XMLNode2.Options = {}));
    global$2["XMLNode"]["Options"] = Options;
  })(XMLNode || (XMLNode = {}));
  var XMLParser;
  (function(XMLParser2) {
    let ErrorCode;
    (function(ErrorCode2) {
      ErrorCode2[ErrorCode2["InternalError"] = 1] = "InternalError";
      ErrorCode2[ErrorCode2["OutOfMemoryError"] = 2] = "OutOfMemoryError";
      ErrorCode2[ErrorCode2["DocumentStartError"] = 3] = "DocumentStartError";
      ErrorCode2[ErrorCode2["EmptyDocumentError"] = 4] = "EmptyDocumentError";
      ErrorCode2[ErrorCode2["PrematureDocumentEndError"] = 5] = "PrematureDocumentEndError";
      ErrorCode2[ErrorCode2["InvalidHexCharacterRefError"] = 6] = "InvalidHexCharacterRefError";
      ErrorCode2[ErrorCode2["InvalidDecimalCharacterRefError"] = 7] = "InvalidDecimalCharacterRefError";
      ErrorCode2[ErrorCode2["InvalidCharacterRefError"] = 8] = "InvalidCharacterRefError";
      ErrorCode2[ErrorCode2["InvalidCharacterError"] = 9] = "InvalidCharacterError";
      ErrorCode2[ErrorCode2["CharacterRefAtEOFError"] = 10] = "CharacterRefAtEOFError";
      ErrorCode2[ErrorCode2["CharacterRefInPrologError"] = 11] = "CharacterRefInPrologError";
      ErrorCode2[ErrorCode2["CharacterRefInEpilogError"] = 12] = "CharacterRefInEpilogError";
      ErrorCode2[ErrorCode2["CharacterRefInDTDError"] = 13] = "CharacterRefInDTDError";
      ErrorCode2[ErrorCode2["EntityRefAtEOFError"] = 14] = "EntityRefAtEOFError";
      ErrorCode2[ErrorCode2["EntityRefInPrologError"] = 15] = "EntityRefInPrologError";
      ErrorCode2[ErrorCode2["EntityRefInEpilogError"] = 16] = "EntityRefInEpilogError";
      ErrorCode2[ErrorCode2["EntityRefInDTDError"] = 17] = "EntityRefInDTDError";
      ErrorCode2[ErrorCode2["ParsedEntityRefAtEOFError"] = 18] = "ParsedEntityRefAtEOFError";
      ErrorCode2[ErrorCode2["ParsedEntityRefInPrologError"] = 19] = "ParsedEntityRefInPrologError";
      ErrorCode2[ErrorCode2["ParsedEntityRefInEpilogError"] = 20] = "ParsedEntityRefInEpilogError";
      ErrorCode2[ErrorCode2["ParsedEntityRefInInternalSubsetError"] = 21] = "ParsedEntityRefInInternalSubsetError";
      ErrorCode2[ErrorCode2["EntityReferenceWithoutNameError"] = 22] = "EntityReferenceWithoutNameError";
      ErrorCode2[ErrorCode2["EntityReferenceMissingSemiError"] = 23] = "EntityReferenceMissingSemiError";
      ErrorCode2[ErrorCode2["ParsedEntityRefNoNameError"] = 24] = "ParsedEntityRefNoNameError";
      ErrorCode2[ErrorCode2["ParsedEntityRefMissingSemiError"] = 25] = "ParsedEntityRefMissingSemiError";
      ErrorCode2[ErrorCode2["UndeclaredEntityError"] = 26] = "UndeclaredEntityError";
      ErrorCode2[ErrorCode2["UnparsedEntityError"] = 28] = "UnparsedEntityError";
      ErrorCode2[ErrorCode2["EntityIsExternalError"] = 29] = "EntityIsExternalError";
      ErrorCode2[ErrorCode2["EntityIsParameterError"] = 30] = "EntityIsParameterError";
      ErrorCode2[ErrorCode2["UnknownEncodingError"] = 31] = "UnknownEncodingError";
      ErrorCode2[ErrorCode2["EncodingNotSupportedError"] = 32] = "EncodingNotSupportedError";
      ErrorCode2[ErrorCode2["StringNotStartedError"] = 33] = "StringNotStartedError";
      ErrorCode2[ErrorCode2["StringNotClosedError"] = 34] = "StringNotClosedError";
      ErrorCode2[ErrorCode2["NamespaceDeclarationError"] = 35] = "NamespaceDeclarationError";
      ErrorCode2[ErrorCode2["EntityNotStartedError"] = 36] = "EntityNotStartedError";
      ErrorCode2[ErrorCode2["EntityNotFinishedError"] = 37] = "EntityNotFinishedError";
      ErrorCode2[ErrorCode2["LessThanSymbolInAttributeError"] = 38] = "LessThanSymbolInAttributeError";
      ErrorCode2[ErrorCode2["AttributeNotStartedError"] = 39] = "AttributeNotStartedError";
      ErrorCode2[ErrorCode2["AttributeNotFinishedError"] = 40] = "AttributeNotFinishedError";
      ErrorCode2[ErrorCode2["AttributeHasNoValueError"] = 41] = "AttributeHasNoValueError";
      ErrorCode2[ErrorCode2["AttributeRedefinedError"] = 42] = "AttributeRedefinedError";
      ErrorCode2[ErrorCode2["LiteralNotStartedError"] = 43] = "LiteralNotStartedError";
      ErrorCode2[ErrorCode2["LiteralNotFinishedError"] = 44] = "LiteralNotFinishedError";
      ErrorCode2[ErrorCode2["CommentNotFinishedError"] = 45] = "CommentNotFinishedError";
      ErrorCode2[ErrorCode2["ProcessingInstructionNotStartedError"] = 46] = "ProcessingInstructionNotStartedError";
      ErrorCode2[ErrorCode2["ProcessingInstructionNotFinishedError"] = 47] = "ProcessingInstructionNotFinishedError";
      ErrorCode2[ErrorCode2["NotationNotStartedError"] = 48] = "NotationNotStartedError";
      ErrorCode2[ErrorCode2["NotationNotFinishedError"] = 49] = "NotationNotFinishedError";
      ErrorCode2[ErrorCode2["AttributeListNotStartedError"] = 50] = "AttributeListNotStartedError";
      ErrorCode2[ErrorCode2["AttributeListNotFinishedError"] = 51] = "AttributeListNotFinishedError";
      ErrorCode2[ErrorCode2["MixedContentDeclNotStartedError"] = 52] = "MixedContentDeclNotStartedError";
      ErrorCode2[ErrorCode2["MixedContentDeclNotFinishedError"] = 53] = "MixedContentDeclNotFinishedError";
      ErrorCode2[ErrorCode2["ElementContentDeclNotStartedError"] = 54] = "ElementContentDeclNotStartedError";
      ErrorCode2[ErrorCode2["ElementContentDeclNotFinishedError"] = 55] = "ElementContentDeclNotFinishedError";
      ErrorCode2[ErrorCode2["XMLDeclNotStartedError"] = 56] = "XMLDeclNotStartedError";
      ErrorCode2[ErrorCode2["XMLDeclNotFinishedError"] = 57] = "XMLDeclNotFinishedError";
      ErrorCode2[ErrorCode2["ConditionalSectionNotStartedError"] = 58] = "ConditionalSectionNotStartedError";
      ErrorCode2[ErrorCode2["ConditionalSectionNotFinishedError"] = 59] = "ConditionalSectionNotFinishedError";
      ErrorCode2[ErrorCode2["ExternalSubsetNotFinishedError"] = 60] = "ExternalSubsetNotFinishedError";
      ErrorCode2[ErrorCode2["DOCTYPEDeclNotFinishedError"] = 61] = "DOCTYPEDeclNotFinishedError";
      ErrorCode2[ErrorCode2["MisplacedCDATAEndStringError"] = 62] = "MisplacedCDATAEndStringError";
      ErrorCode2[ErrorCode2["CDATANotFinishedError"] = 63] = "CDATANotFinishedError";
      ErrorCode2[ErrorCode2["MisplacedXMLDeclarationError"] = 64] = "MisplacedXMLDeclarationError";
      ErrorCode2[ErrorCode2["SpaceRequiredError"] = 65] = "SpaceRequiredError";
      ErrorCode2[ErrorCode2["SeparatorRequiredError"] = 66] = "SeparatorRequiredError";
      ErrorCode2[ErrorCode2["NMTOKENRequiredError"] = 67] = "NMTOKENRequiredError";
      ErrorCode2[ErrorCode2["NAMERequiredError"] = 68] = "NAMERequiredError";
      ErrorCode2[ErrorCode2["PCDATARequiredError"] = 69] = "PCDATARequiredError";
      ErrorCode2[ErrorCode2["URIRequiredError"] = 70] = "URIRequiredError";
      ErrorCode2[ErrorCode2["PublicIdentifierRequiredError"] = 71] = "PublicIdentifierRequiredError";
      ErrorCode2[ErrorCode2["LTRequiredError"] = 72] = "LTRequiredError";
      ErrorCode2[ErrorCode2["GTRequiredError"] = 73] = "GTRequiredError";
      ErrorCode2[ErrorCode2["LTSlashRequiredError"] = 74] = "LTSlashRequiredError";
      ErrorCode2[ErrorCode2["EqualExpectedError"] = 75] = "EqualExpectedError";
      ErrorCode2[ErrorCode2["TagNameMismatchError"] = 76] = "TagNameMismatchError";
      ErrorCode2[ErrorCode2["UnfinishedTagError"] = 77] = "UnfinishedTagError";
      ErrorCode2[ErrorCode2["StandaloneValueError"] = 78] = "StandaloneValueError";
      ErrorCode2[ErrorCode2["InvalidEncodingNameError"] = 79] = "InvalidEncodingNameError";
      ErrorCode2[ErrorCode2["CommentContainsDoubleHyphenError"] = 80] = "CommentContainsDoubleHyphenError";
      ErrorCode2[ErrorCode2["InvalidEncodingError"] = 81] = "InvalidEncodingError";
      ErrorCode2[ErrorCode2["ExternalStandaloneEntityError"] = 82] = "ExternalStandaloneEntityError";
      ErrorCode2[ErrorCode2["InvalidConditionalSectionError"] = 83] = "InvalidConditionalSectionError";
      ErrorCode2[ErrorCode2["EntityValueRequiredError"] = 84] = "EntityValueRequiredError";
      ErrorCode2[ErrorCode2["NotWellBalancedError"] = 85] = "NotWellBalancedError";
      ErrorCode2[ErrorCode2["ExtraContentError"] = 86] = "ExtraContentError";
      ErrorCode2[ErrorCode2["InvalidCharacterInEntityError"] = 87] = "InvalidCharacterInEntityError";
      ErrorCode2[ErrorCode2["ParsedEntityRefInInternalError"] = 88] = "ParsedEntityRefInInternalError";
      ErrorCode2[ErrorCode2["EntityRefLoopError"] = 89] = "EntityRefLoopError";
      ErrorCode2[ErrorCode2["EntityBoundaryError"] = 90] = "EntityBoundaryError";
      ErrorCode2[ErrorCode2["InvalidURIError"] = 91] = "InvalidURIError";
      ErrorCode2[ErrorCode2["URIFragmentError"] = 92] = "URIFragmentError";
      ErrorCode2[ErrorCode2["NoDTDError"] = 94] = "NoDTDError";
      ErrorCode2[ErrorCode2["DelegateAbortedParseError"] = 512] = "DelegateAbortedParseError";
    })(ErrorCode = XMLParser2.ErrorCode || (XMLParser2.ErrorCode = {}));
    global$2["XMLParser"]["ErrorCode"] = ErrorCode;
    let ExternalEntityResolvingPolicy;
    (function(ExternalEntityResolvingPolicy2) {
      ExternalEntityResolvingPolicy2[ExternalEntityResolvingPolicy2["ResolveExternalEntitiesNever"] = 0] = "ResolveExternalEntitiesNever";
      ExternalEntityResolvingPolicy2[ExternalEntityResolvingPolicy2["ResolveExternalEntitiesNoNetwork"] = 1] = "ResolveExternalEntitiesNoNetwork";
      ExternalEntityResolvingPolicy2[ExternalEntityResolvingPolicy2["ResolveExternalEntitiesSameOriginOnly"] = 2] = "ResolveExternalEntitiesSameOriginOnly";
      ExternalEntityResolvingPolicy2[ExternalEntityResolvingPolicy2["ResolveExternalEntitiesAlways"] = 3] = "ResolveExternalEntitiesAlways";
    })(ExternalEntityResolvingPolicy = XMLParser2.ExternalEntityResolvingPolicy || (XMLParser2.ExternalEntityResolvingPolicy = {}));
    global$2["XMLParser"]["ExternalEntityResolvingPolicy"] = ExternalEntityResolvingPolicy;
  })(XMLParser || (XMLParser = {}));
  var AVAssetReferenceRestrictions;
  (function(AVAssetReferenceRestrictions2) {
    AVAssetReferenceRestrictions2[AVAssetReferenceRestrictions2["forbidRemoteReferenceToLocal"] = 0] = "forbidRemoteReferenceToLocal";
    AVAssetReferenceRestrictions2[AVAssetReferenceRestrictions2["forbidLocalReferenceToRemote"] = 1] = "forbidLocalReferenceToRemote";
    AVAssetReferenceRestrictions2[AVAssetReferenceRestrictions2["forbidCrossSiteReference"] = 2] = "forbidCrossSiteReference";
    AVAssetReferenceRestrictions2[AVAssetReferenceRestrictions2["forbidLocalReferenceToLocal"] = 3] = "forbidLocalReferenceToLocal";
    AVAssetReferenceRestrictions2[AVAssetReferenceRestrictions2["forbidAll"] = 4] = "forbidAll";
    AVAssetReferenceRestrictions2[AVAssetReferenceRestrictions2["defaultPolicy"] = 5] = "defaultPolicy";
  })(AVAssetReferenceRestrictions || (AVAssetReferenceRestrictions = {}));
  global$2["AVAssetReferenceRestrictions"] = AVAssetReferenceRestrictions;
  var AVAudioPlayerNodeBufferOptions;
  (function(AVAudioPlayerNodeBufferOptions2) {
    AVAudioPlayerNodeBufferOptions2[AVAudioPlayerNodeBufferOptions2["byteSwapped"] = 0] = "byteSwapped";
    AVAudioPlayerNodeBufferOptions2[AVAudioPlayerNodeBufferOptions2["scalarCount"] = 1] = "scalarCount";
    AVAudioPlayerNodeBufferOptions2[AVAudioPlayerNodeBufferOptions2["loops"] = 2] = "loops";
    AVAudioPlayerNodeBufferOptions2[AVAudioPlayerNodeBufferOptions2["interrupts"] = 3] = "interrupts";
    AVAudioPlayerNodeBufferOptions2[AVAudioPlayerNodeBufferOptions2["interruptsAtLoop"] = 4] = "interruptsAtLoop";
  })(AVAudioPlayerNodeBufferOptions || (AVAudioPlayerNodeBufferOptions = {}));
  global$2["AVAudioPlayerNodeBufferOptions"] = AVAudioPlayerNodeBufferOptions;
  var AVAudioSpatializationFormats;
  (function(AVAudioSpatializationFormats2) {
    AVAudioSpatializationFormats2[AVAudioSpatializationFormats2["monoAndStereo"] = 0] = "monoAndStereo";
    AVAudioSpatializationFormats2[AVAudioSpatializationFormats2["multichannel"] = 1] = "multichannel";
    AVAudioSpatializationFormats2[AVAudioSpatializationFormats2["monoStereoAndMultichannel"] = 2] = "monoStereoAndMultichannel";
  })(AVAudioSpatializationFormats || (AVAudioSpatializationFormats = {}));
  global$2["AVAudioSpatializationFormats"] = AVAudioSpatializationFormats;
  var AVMovieWritingOptions;
  (function(AVMovieWritingOptions2) {
    AVMovieWritingOptions2[AVMovieWritingOptions2["errorDomain"] = 0] = "errorDomain";
    AVMovieWritingOptions2[AVMovieWritingOptions2["unknown"] = 1] = "unknown";
    AVMovieWritingOptions2[AVMovieWritingOptions2["outOfMemory"] = 2] = "outOfMemory";
    AVMovieWritingOptions2[AVMovieWritingOptions2["sessionNotRunning"] = 3] = "sessionNotRunning";
    AVMovieWritingOptions2[AVMovieWritingOptions2["deviceAlreadyUsedByAnotherSession"] = 4] = "deviceAlreadyUsedByAnotherSession";
    AVMovieWritingOptions2[AVMovieWritingOptions2["noDataCaptured"] = 5] = "noDataCaptured";
    AVMovieWritingOptions2[AVMovieWritingOptions2["sessionConfigurationChanged"] = 6] = "sessionConfigurationChanged";
    AVMovieWritingOptions2[AVMovieWritingOptions2["diskFull"] = 7] = "diskFull";
    AVMovieWritingOptions2[AVMovieWritingOptions2["deviceWasDisconnected"] = 8] = "deviceWasDisconnected";
    AVMovieWritingOptions2[AVMovieWritingOptions2["mediaChanged"] = 9] = "mediaChanged";
    AVMovieWritingOptions2[AVMovieWritingOptions2["maximumDurationReached"] = 10] = "maximumDurationReached";
    AVMovieWritingOptions2[AVMovieWritingOptions2["maximumFileSizeReached"] = 11] = "maximumFileSizeReached";
    AVMovieWritingOptions2[AVMovieWritingOptions2["mediaDiscontinuity"] = 12] = "mediaDiscontinuity";
    AVMovieWritingOptions2[AVMovieWritingOptions2["maximumNumberOfSamplesForFileFormatReached"] = 13] = "maximumNumberOfSamplesForFileFormatReached";
    AVMovieWritingOptions2[AVMovieWritingOptions2["deviceNotConnected"] = 14] = "deviceNotConnected";
    AVMovieWritingOptions2[AVMovieWritingOptions2["deviceInUseByAnotherApplication"] = 15] = "deviceInUseByAnotherApplication";
    AVMovieWritingOptions2[AVMovieWritingOptions2["deviceLockedForConfigurationByAnotherProcess"] = 16] = "deviceLockedForConfigurationByAnotherProcess";
    AVMovieWritingOptions2[AVMovieWritingOptions2["exportFailed"] = 17] = "exportFailed";
    AVMovieWritingOptions2[AVMovieWritingOptions2["decodeFailed"] = 18] = "decodeFailed";
    AVMovieWritingOptions2[AVMovieWritingOptions2["invalidSourceMedia"] = 19] = "invalidSourceMedia";
    AVMovieWritingOptions2[AVMovieWritingOptions2["fileAlreadyExists"] = 20] = "fileAlreadyExists";
    AVMovieWritingOptions2[AVMovieWritingOptions2["compositionTrackSegmentsNotContiguous"] = 21] = "compositionTrackSegmentsNotContiguous";
    AVMovieWritingOptions2[AVMovieWritingOptions2["invalidCompositionTrackSegmentDuration"] = 22] = "invalidCompositionTrackSegmentDuration";
    AVMovieWritingOptions2[AVMovieWritingOptions2["invalidCompositionTrackSegmentSourceStartTime"] = 23] = "invalidCompositionTrackSegmentSourceStartTime";
    AVMovieWritingOptions2[AVMovieWritingOptions2["invalidCompositionTrackSegmentSourceDuration"] = 24] = "invalidCompositionTrackSegmentSourceDuration";
    AVMovieWritingOptions2[AVMovieWritingOptions2["fileFormatNotRecognized"] = 25] = "fileFormatNotRecognized";
    AVMovieWritingOptions2[AVMovieWritingOptions2["fileFailedToParse"] = 26] = "fileFailedToParse";
    AVMovieWritingOptions2[AVMovieWritingOptions2["maximumStillImageCaptureRequestsExceeded"] = 27] = "maximumStillImageCaptureRequestsExceeded";
    AVMovieWritingOptions2[AVMovieWritingOptions2["contentIsProtected"] = 28] = "contentIsProtected";
    AVMovieWritingOptions2[AVMovieWritingOptions2["noImageAtTime"] = 29] = "noImageAtTime";
    AVMovieWritingOptions2[AVMovieWritingOptions2["decoderNotFound"] = 30] = "decoderNotFound";
    AVMovieWritingOptions2[AVMovieWritingOptions2["encoderNotFound"] = 31] = "encoderNotFound";
    AVMovieWritingOptions2[AVMovieWritingOptions2["contentIsNotAuthorized"] = 32] = "contentIsNotAuthorized";
    AVMovieWritingOptions2[AVMovieWritingOptions2["applicationIsNotAuthorized"] = 33] = "applicationIsNotAuthorized";
    AVMovieWritingOptions2[AVMovieWritingOptions2["operationNotSupportedForAsset"] = 34] = "operationNotSupportedForAsset";
    AVMovieWritingOptions2[AVMovieWritingOptions2["decoderTemporarilyUnavailable"] = 35] = "decoderTemporarilyUnavailable";
    AVMovieWritingOptions2[AVMovieWritingOptions2["encoderTemporarilyUnavailable"] = 36] = "encoderTemporarilyUnavailable";
    AVMovieWritingOptions2[AVMovieWritingOptions2["invalidVideoComposition"] = 37] = "invalidVideoComposition";
    AVMovieWritingOptions2[AVMovieWritingOptions2["referenceForbiddenByReferencePolicy"] = 38] = "referenceForbiddenByReferencePolicy";
    AVMovieWritingOptions2[AVMovieWritingOptions2["invalidOutputURLPathExtension"] = 39] = "invalidOutputURLPathExtension";
    AVMovieWritingOptions2[AVMovieWritingOptions2["screenCaptureFailed"] = 40] = "screenCaptureFailed";
    AVMovieWritingOptions2[AVMovieWritingOptions2["displayWasDisabled"] = 41] = "displayWasDisabled";
    AVMovieWritingOptions2[AVMovieWritingOptions2["torchLevelUnavailable"] = 42] = "torchLevelUnavailable";
    AVMovieWritingOptions2[AVMovieWritingOptions2["incompatibleAsset"] = 43] = "incompatibleAsset";
    AVMovieWritingOptions2[AVMovieWritingOptions2["failedToLoadMediaData"] = 44] = "failedToLoadMediaData";
    AVMovieWritingOptions2[AVMovieWritingOptions2["serverIncorrectlyConfigured"] = 45] = "serverIncorrectlyConfigured";
    AVMovieWritingOptions2[AVMovieWritingOptions2["applicationIsNotAuthorizedToUseDevice"] = 46] = "applicationIsNotAuthorizedToUseDevice";
    AVMovieWritingOptions2[AVMovieWritingOptions2["failedToParse"] = 47] = "failedToParse";
    AVMovieWritingOptions2[AVMovieWritingOptions2["fileTypeDoesNotSupportSampleReferences"] = 48] = "fileTypeDoesNotSupportSampleReferences";
    AVMovieWritingOptions2[AVMovieWritingOptions2["undecodableMediaData"] = 49] = "undecodableMediaData";
    AVMovieWritingOptions2[AVMovieWritingOptions2["airPlayControllerRequiresInternet"] = 50] = "airPlayControllerRequiresInternet";
    AVMovieWritingOptions2[AVMovieWritingOptions2["airPlayReceiverRequiresInternet"] = 51] = "airPlayReceiverRequiresInternet";
    AVMovieWritingOptions2[AVMovieWritingOptions2["videoCompositorFailed"] = 52] = "videoCompositorFailed";
    AVMovieWritingOptions2[AVMovieWritingOptions2["createContentKeyRequestFailed"] = 53] = "createContentKeyRequestFailed";
    AVMovieWritingOptions2[AVMovieWritingOptions2["unsupportedOutputSettings"] = 54] = "unsupportedOutputSettings";
    AVMovieWritingOptions2[AVMovieWritingOptions2["operationNotAllowed"] = 55] = "operationNotAllowed";
    AVMovieWritingOptions2[AVMovieWritingOptions2["contentIsUnavailable"] = 56] = "contentIsUnavailable";
    AVMovieWritingOptions2[AVMovieWritingOptions2["formatUnsupported"] = 57] = "formatUnsupported";
    AVMovieWritingOptions2[AVMovieWritingOptions2["malformedDepth"] = 58] = "malformedDepth";
    AVMovieWritingOptions2[AVMovieWritingOptions2["contentNotUpdated"] = 59] = "contentNotUpdated";
    AVMovieWritingOptions2[AVMovieWritingOptions2["noLongerPlayable"] = 60] = "noLongerPlayable";
    AVMovieWritingOptions2[AVMovieWritingOptions2["noCompatibleAlternatesForExternalDisplay"] = 61] = "noCompatibleAlternatesForExternalDisplay";
    AVMovieWritingOptions2[AVMovieWritingOptions2["noSourceTrack"] = 62] = "noSourceTrack";
    AVMovieWritingOptions2[AVMovieWritingOptions2["externalPlaybackNotSupportedForAsset"] = 63] = "externalPlaybackNotSupportedForAsset";
    AVMovieWritingOptions2[AVMovieWritingOptions2["operationNotSupportedForPreset"] = 64] = "operationNotSupportedForPreset";
    AVMovieWritingOptions2[AVMovieWritingOptions2["incorrectlyConfigured"] = 65] = "incorrectlyConfigured";
    AVMovieWritingOptions2[AVMovieWritingOptions2["segmentStartedWithNonSyncSample"] = 66] = "segmentStartedWithNonSyncSample";
    AVMovieWritingOptions2[AVMovieWritingOptions2["rosettaNotInstalled"] = 67] = "rosettaNotInstalled";
    AVMovieWritingOptions2[AVMovieWritingOptions2["addMovieHeaderToDestination"] = 68] = "addMovieHeaderToDestination";
    AVMovieWritingOptions2[AVMovieWritingOptions2["truncateDestinationToMovieHeaderOnly"] = 69] = "truncateDestinationToMovieHeaderOnly";
  })(AVMovieWritingOptions || (AVMovieWritingOptions = {}));
  global$2["AVMovieWritingOptions"] = AVMovieWritingOptions;
  var AVMusicSequenceLoadOptions;
  (function(AVMusicSequenceLoadOptions2) {
    AVMusicSequenceLoadOptions2[AVMusicSequenceLoadOptions2["smfChannelsToTracks"] = 0] = "smfChannelsToTracks";
    AVMusicSequenceLoadOptions2[AVMusicSequenceLoadOptions2["scalarCount"] = 1] = "scalarCount";
  })(AVMusicSequenceLoadOptions || (AVMusicSequenceLoadOptions = {}));
  global$2["AVMusicSequenceLoadOptions"] = AVMusicSequenceLoadOptions;
  var AlignmentOptions;
  (function(AlignmentOptions2) {
    AlignmentOptions2[AlignmentOptions2["alignMinXInward"] = 0] = "alignMinXInward";
    AlignmentOptions2[AlignmentOptions2["alignMinYInward"] = 1] = "alignMinYInward";
    AlignmentOptions2[AlignmentOptions2["alignMaxXInward"] = 2] = "alignMaxXInward";
    AlignmentOptions2[AlignmentOptions2["alignMaxYInward"] = 3] = "alignMaxYInward";
    AlignmentOptions2[AlignmentOptions2["alignWidthInward"] = 4] = "alignWidthInward";
    AlignmentOptions2[AlignmentOptions2["alignHeightInward"] = 5] = "alignHeightInward";
    AlignmentOptions2[AlignmentOptions2["alignMinXOutward"] = 6] = "alignMinXOutward";
    AlignmentOptions2[AlignmentOptions2["alignMinYOutward"] = 7] = "alignMinYOutward";
    AlignmentOptions2[AlignmentOptions2["alignMaxXOutward"] = 8] = "alignMaxXOutward";
    AlignmentOptions2[AlignmentOptions2["alignMaxYOutward"] = 9] = "alignMaxYOutward";
    AlignmentOptions2[AlignmentOptions2["alignWidthOutward"] = 10] = "alignWidthOutward";
    AlignmentOptions2[AlignmentOptions2["alignHeightOutward"] = 11] = "alignHeightOutward";
    AlignmentOptions2[AlignmentOptions2["alignMinXNearest"] = 12] = "alignMinXNearest";
    AlignmentOptions2[AlignmentOptions2["alignMinYNearest"] = 13] = "alignMinYNearest";
    AlignmentOptions2[AlignmentOptions2["alignMaxXNearest"] = 14] = "alignMaxXNearest";
    AlignmentOptions2[AlignmentOptions2["alignMaxYNearest"] = 15] = "alignMaxYNearest";
    AlignmentOptions2[AlignmentOptions2["alignWidthNearest"] = 16] = "alignWidthNearest";
    AlignmentOptions2[AlignmentOptions2["alignHeightNearest"] = 17] = "alignHeightNearest";
    AlignmentOptions2[AlignmentOptions2["alignRectFlipped"] = 18] = "alignRectFlipped";
    AlignmentOptions2[AlignmentOptions2["alignAllEdgesInward"] = 19] = "alignAllEdgesInward";
    AlignmentOptions2[AlignmentOptions2["alignAllEdgesOutward"] = 20] = "alignAllEdgesOutward";
    AlignmentOptions2[AlignmentOptions2["alignAllEdgesNearest"] = 21] = "alignAllEdgesNearest";
  })(AlignmentOptions || (AlignmentOptions = {}));
  global$2["AlignmentOptions"] = AlignmentOptions;
  var AnyObject;
  (function(AnyObject2) {
    AnyObject2[AnyObject2["byteSwapped"] = 0] = "byteSwapped";
    AnyObject2[AnyObject2["scalarCount"] = 1] = "scalarCount";
    AnyObject2[AnyObject2["assureMemoryNow"] = 2] = "assureMemoryNow";
    AnyObject2[AnyObject2["alwaysCopyData"] = 3] = "alwaysCopyData";
    AnyObject2[AnyObject2["dontOptimizeDepth"] = 4] = "dontOptimizeDepth";
    AnyObject2[AnyObject2["permitEmptyReference"] = 5] = "permitEmptyReference";
  })(AnyObject || (AnyObject = {}));
  global$2["AnyObject"] = AnyObject;
  var CAAutoresizingMask;
  (function(CAAutoresizingMask2) {
    CAAutoresizingMask2[CAAutoresizingMask2["layerMinXMargin"] = 0] = "layerMinXMargin";
    CAAutoresizingMask2[CAAutoresizingMask2["layerWidthSizable"] = 1] = "layerWidthSizable";
    CAAutoresizingMask2[CAAutoresizingMask2["layerMaxXMargin"] = 2] = "layerMaxXMargin";
    CAAutoresizingMask2[CAAutoresizingMask2["layerMinYMargin"] = 3] = "layerMinYMargin";
    CAAutoresizingMask2[CAAutoresizingMask2["layerHeightSizable"] = 4] = "layerHeightSizable";
    CAAutoresizingMask2[CAAutoresizingMask2["layerMaxYMargin"] = 5] = "layerMaxYMargin";
  })(CAAutoresizingMask || (CAAutoresizingMask = {}));
  global$2["CAAutoresizingMask"] = CAAutoresizingMask;
  var CACornerMask;
  (function(CACornerMask2) {
    CACornerMask2[CACornerMask2["layerMinXMinYCorner"] = 0] = "layerMinXMinYCorner";
    CACornerMask2[CACornerMask2["layerMaxXMinYCorner"] = 1] = "layerMaxXMinYCorner";
    CACornerMask2[CACornerMask2["layerMinXMaxYCorner"] = 2] = "layerMinXMaxYCorner";
    CACornerMask2[CACornerMask2["layerMaxXMaxYCorner"] = 3] = "layerMaxXMaxYCorner";
  })(CACornerMask || (CACornerMask = {}));
  global$2["CACornerMask"] = CACornerMask;
  var CAEdgeAntialiasingMask;
  (function(CAEdgeAntialiasingMask2) {
    CAEdgeAntialiasingMask2[CAEdgeAntialiasingMask2["layerLeftEdge"] = 0] = "layerLeftEdge";
    CAEdgeAntialiasingMask2[CAEdgeAntialiasingMask2["layerRightEdge"] = 1] = "layerRightEdge";
    CAEdgeAntialiasingMask2[CAEdgeAntialiasingMask2["layerBottomEdge"] = 2] = "layerBottomEdge";
    CAEdgeAntialiasingMask2[CAEdgeAntialiasingMask2["layerTopEdge"] = 3] = "layerTopEdge";
  })(CAEdgeAntialiasingMask || (CAEdgeAntialiasingMask = {}));
  global$2["CAEdgeAntialiasingMask"] = CAEdgeAntialiasingMask;
  var CFCalendarUnit;
  (function(CFCalendarUnit2) {
    CFCalendarUnit2[CFCalendarUnit2["magnitude"] = 0] = "magnitude";
    CFCalendarUnit2[CFCalendarUnit2["byteSwapped"] = 1] = "byteSwapped";
    CFCalendarUnit2[CFCalendarUnit2["scalarCount"] = 2] = "scalarCount";
    CFCalendarUnit2[CFCalendarUnit2["era"] = 3] = "era";
    CFCalendarUnit2[CFCalendarUnit2["year"] = 4] = "year";
    CFCalendarUnit2[CFCalendarUnit2["month"] = 5] = "month";
    CFCalendarUnit2[CFCalendarUnit2["day"] = 6] = "day";
    CFCalendarUnit2[CFCalendarUnit2["hour"] = 7] = "hour";
    CFCalendarUnit2[CFCalendarUnit2["minute"] = 8] = "minute";
    CFCalendarUnit2[CFCalendarUnit2["second"] = 9] = "second";
    CFCalendarUnit2[CFCalendarUnit2["week"] = 10] = "week";
    CFCalendarUnit2[CFCalendarUnit2["weekday"] = 11] = "weekday";
    CFCalendarUnit2[CFCalendarUnit2["weekdayOrdinal"] = 12] = "weekdayOrdinal";
    CFCalendarUnit2[CFCalendarUnit2["quarter"] = 13] = "quarter";
    CFCalendarUnit2[CFCalendarUnit2["weekOfMonth"] = 14] = "weekOfMonth";
    CFCalendarUnit2[CFCalendarUnit2["weekOfYear"] = 15] = "weekOfYear";
    CFCalendarUnit2[CFCalendarUnit2["yearForWeekOfYear"] = 16] = "yearForWeekOfYear";
  })(CFCalendarUnit || (CFCalendarUnit = {}));
  global$2["CFCalendarUnit"] = CFCalendarUnit;
  var CFDataSearchFlags;
  (function(CFDataSearchFlags2) {
    CFDataSearchFlags2[CFDataSearchFlags2["backwards"] = 0] = "backwards";
    CFDataSearchFlags2[CFDataSearchFlags2["anchored"] = 1] = "anchored";
  })(CFDataSearchFlags || (CFDataSearchFlags = {}));
  global$2["CFDataSearchFlags"] = CFDataSearchFlags;
  var CFFileSecurityClearOptions;
  (function(CFFileSecurityClearOptions2) {
    CFFileSecurityClearOptions2[CFFileSecurityClearOptions2["magnitude"] = 0] = "magnitude";
    CFFileSecurityClearOptions2[CFFileSecurityClearOptions2["byteSwapped"] = 1] = "byteSwapped";
    CFFileSecurityClearOptions2[CFFileSecurityClearOptions2["scalarCount"] = 2] = "scalarCount";
    CFFileSecurityClearOptions2[CFFileSecurityClearOptions2["owner"] = 3] = "owner";
    CFFileSecurityClearOptions2[CFFileSecurityClearOptions2["group"] = 4] = "group";
    CFFileSecurityClearOptions2[CFFileSecurityClearOptions2["mode"] = 5] = "mode";
    CFFileSecurityClearOptions2[CFFileSecurityClearOptions2["ownerUUID"] = 6] = "ownerUUID";
    CFFileSecurityClearOptions2[CFFileSecurityClearOptions2["groupUUID"] = 7] = "groupUUID";
    CFFileSecurityClearOptions2[CFFileSecurityClearOptions2["accessControlList"] = 8] = "accessControlList";
  })(CFFileSecurityClearOptions || (CFFileSecurityClearOptions = {}));
  global$2["CFFileSecurityClearOptions"] = CFFileSecurityClearOptions;
  var CFGregorianUnitFlags;
  (function(CFGregorianUnitFlags2) {
    CFGregorianUnitFlags2[CFGregorianUnitFlags2["unitsYears"] = 0] = "unitsYears";
    CFGregorianUnitFlags2[CFGregorianUnitFlags2["unitsMonths"] = 1] = "unitsMonths";
    CFGregorianUnitFlags2[CFGregorianUnitFlags2["unitsDays"] = 2] = "unitsDays";
    CFGregorianUnitFlags2[CFGregorianUnitFlags2["unitsHours"] = 3] = "unitsHours";
    CFGregorianUnitFlags2[CFGregorianUnitFlags2["unitsMinutes"] = 4] = "unitsMinutes";
    CFGregorianUnitFlags2[CFGregorianUnitFlags2["unitsSeconds"] = 5] = "unitsSeconds";
    CFGregorianUnitFlags2[CFGregorianUnitFlags2["allUnits"] = 6] = "allUnits";
  })(CFGregorianUnitFlags || (CFGregorianUnitFlags = {}));
  global$2["CFGregorianUnitFlags"] = CFGregorianUnitFlags;
  var CFISO8601DateFormatOptions;
  (function(CFISO8601DateFormatOptions2) {
    CFISO8601DateFormatOptions2[CFISO8601DateFormatOptions2["byteSwapped"] = 0] = "byteSwapped";
    CFISO8601DateFormatOptions2[CFISO8601DateFormatOptions2["scalarCount"] = 1] = "scalarCount";
    CFISO8601DateFormatOptions2[CFISO8601DateFormatOptions2["withYear"] = 2] = "withYear";
    CFISO8601DateFormatOptions2[CFISO8601DateFormatOptions2["withMonth"] = 3] = "withMonth";
    CFISO8601DateFormatOptions2[CFISO8601DateFormatOptions2["withWeekOfYear"] = 4] = "withWeekOfYear";
    CFISO8601DateFormatOptions2[CFISO8601DateFormatOptions2["withDay"] = 5] = "withDay";
    CFISO8601DateFormatOptions2[CFISO8601DateFormatOptions2["withTime"] = 6] = "withTime";
    CFISO8601DateFormatOptions2[CFISO8601DateFormatOptions2["withTimeZone"] = 7] = "withTimeZone";
    CFISO8601DateFormatOptions2[CFISO8601DateFormatOptions2["withSpaceBetweenDateAndTime"] = 8] = "withSpaceBetweenDateAndTime";
    CFISO8601DateFormatOptions2[CFISO8601DateFormatOptions2["withDashSeparatorInDate"] = 9] = "withDashSeparatorInDate";
    CFISO8601DateFormatOptions2[CFISO8601DateFormatOptions2["withColonSeparatorInTime"] = 10] = "withColonSeparatorInTime";
    CFISO8601DateFormatOptions2[CFISO8601DateFormatOptions2["withColonSeparatorInTimeZone"] = 11] = "withColonSeparatorInTimeZone";
    CFISO8601DateFormatOptions2[CFISO8601DateFormatOptions2["withFractionalSeconds"] = 12] = "withFractionalSeconds";
    CFISO8601DateFormatOptions2[CFISO8601DateFormatOptions2["withFullDate"] = 13] = "withFullDate";
    CFISO8601DateFormatOptions2[CFISO8601DateFormatOptions2["withFullTime"] = 14] = "withFullTime";
    CFISO8601DateFormatOptions2[CFISO8601DateFormatOptions2["withInternetDateTime"] = 15] = "withInternetDateTime";
  })(CFISO8601DateFormatOptions || (CFISO8601DateFormatOptions = {}));
  global$2["CFISO8601DateFormatOptions"] = CFISO8601DateFormatOptions;
  var CFNumberFormatterOptionFlags;
  (function(CFNumberFormatterOptionFlags2) {
    CFNumberFormatterOptionFlags2[CFNumberFormatterOptionFlags2["magnitude"] = 0] = "magnitude";
    CFNumberFormatterOptionFlags2[CFNumberFormatterOptionFlags2["byteSwapped"] = 1] = "byteSwapped";
    CFNumberFormatterOptionFlags2[CFNumberFormatterOptionFlags2["scalarCount"] = 2] = "scalarCount";
    CFNumberFormatterOptionFlags2[CFNumberFormatterOptionFlags2["parseIntegersOnly"] = 3] = "parseIntegersOnly";
  })(CFNumberFormatterOptionFlags || (CFNumberFormatterOptionFlags = {}));
  global$2["CFNumberFormatterOptionFlags"] = CFNumberFormatterOptionFlags;
  var CFPropertyListMutabilityOptions;
  (function(CFPropertyListMutabilityOptions2) {
    CFPropertyListMutabilityOptions2[CFPropertyListMutabilityOptions2["byteSwapped"] = 0] = "byteSwapped";
    CFPropertyListMutabilityOptions2[CFPropertyListMutabilityOptions2["scalarCount"] = 1] = "scalarCount";
    CFPropertyListMutabilityOptions2[CFPropertyListMutabilityOptions2["mutableContainers"] = 2] = "mutableContainers";
    CFPropertyListMutabilityOptions2[CFPropertyListMutabilityOptions2["mutableContainersAndLeaves"] = 3] = "mutableContainersAndLeaves";
  })(CFPropertyListMutabilityOptions || (CFPropertyListMutabilityOptions = {}));
  global$2["CFPropertyListMutabilityOptions"] = CFPropertyListMutabilityOptions;
  var CFRunLoopActivity;
  (function(CFRunLoopActivity2) {
    CFRunLoopActivity2[CFRunLoopActivity2["entry"] = 0] = "entry";
    CFRunLoopActivity2[CFRunLoopActivity2["beforeTimers"] = 1] = "beforeTimers";
    CFRunLoopActivity2[CFRunLoopActivity2["beforeSources"] = 2] = "beforeSources";
    CFRunLoopActivity2[CFRunLoopActivity2["beforeWaiting"] = 3] = "beforeWaiting";
    CFRunLoopActivity2[CFRunLoopActivity2["afterWaiting"] = 4] = "afterWaiting";
    CFRunLoopActivity2[CFRunLoopActivity2["exit"] = 5] = "exit";
    CFRunLoopActivity2[CFRunLoopActivity2["allActivities"] = 6] = "allActivities";
  })(CFRunLoopActivity || (CFRunLoopActivity = {}));
  global$2["CFRunLoopActivity"] = CFRunLoopActivity;
  var CFSocketCallBackType;
  (function(CFSocketCallBackType2) {
    CFSocketCallBackType2[CFSocketCallBackType2["readCallBack"] = 0] = "readCallBack";
    CFSocketCallBackType2[CFSocketCallBackType2["acceptCallBack"] = 1] = "acceptCallBack";
    CFSocketCallBackType2[CFSocketCallBackType2["dataCallBack"] = 2] = "dataCallBack";
    CFSocketCallBackType2[CFSocketCallBackType2["connectCallBack"] = 3] = "connectCallBack";
    CFSocketCallBackType2[CFSocketCallBackType2["writeCallBack"] = 4] = "writeCallBack";
  })(CFSocketCallBackType || (CFSocketCallBackType = {}));
  global$2["CFSocketCallBackType"] = CFSocketCallBackType;
  var CFStreamEventType;
  (function(CFStreamEventType2) {
    CFStreamEventType2[CFStreamEventType2["magnitude"] = 0] = "magnitude";
    CFStreamEventType2[CFStreamEventType2["byteSwapped"] = 1] = "byteSwapped";
    CFStreamEventType2[CFStreamEventType2["scalarCount"] = 2] = "scalarCount";
    CFStreamEventType2[CFStreamEventType2["openCompleted"] = 3] = "openCompleted";
    CFStreamEventType2[CFStreamEventType2["hasBytesAvailable"] = 4] = "hasBytesAvailable";
    CFStreamEventType2[CFStreamEventType2["canAcceptBytes"] = 5] = "canAcceptBytes";
    CFStreamEventType2[CFStreamEventType2["errorOccurred"] = 6] = "errorOccurred";
    CFStreamEventType2[CFStreamEventType2["endEncountered"] = 7] = "endEncountered";
  })(CFStreamEventType || (CFStreamEventType = {}));
  global$2["CFStreamEventType"] = CFStreamEventType;
  var CFStringCompareFlags;
  (function(CFStringCompareFlags2) {
    CFStringCompareFlags2[CFStringCompareFlags2["compareCaseInsensitive"] = 0] = "compareCaseInsensitive";
    CFStringCompareFlags2[CFStringCompareFlags2["compareBackwards"] = 1] = "compareBackwards";
    CFStringCompareFlags2[CFStringCompareFlags2["compareAnchored"] = 2] = "compareAnchored";
    CFStringCompareFlags2[CFStringCompareFlags2["compareNonliteral"] = 3] = "compareNonliteral";
    CFStringCompareFlags2[CFStringCompareFlags2["compareLocalized"] = 4] = "compareLocalized";
    CFStringCompareFlags2[CFStringCompareFlags2["compareNumerically"] = 5] = "compareNumerically";
    CFStringCompareFlags2[CFStringCompareFlags2["compareDiacriticInsensitive"] = 6] = "compareDiacriticInsensitive";
    CFStringCompareFlags2[CFStringCompareFlags2["compareWidthInsensitive"] = 7] = "compareWidthInsensitive";
    CFStringCompareFlags2[CFStringCompareFlags2["compareForcedOrdering"] = 8] = "compareForcedOrdering";
  })(CFStringCompareFlags || (CFStringCompareFlags = {}));
  global$2["CFStringCompareFlags"] = CFStringCompareFlags;
  var CFStringTokenizerTokenType;
  (function(CFStringTokenizerTokenType2) {
    CFStringTokenizerTokenType2[CFStringTokenizerTokenType2["byteSwapped"] = 0] = "byteSwapped";
    CFStringTokenizerTokenType2[CFStringTokenizerTokenType2["scalarCount"] = 1] = "scalarCount";
    CFStringTokenizerTokenType2[CFStringTokenizerTokenType2["normal"] = 2] = "normal";
    CFStringTokenizerTokenType2[CFStringTokenizerTokenType2["hasSubTokensMask"] = 3] = "hasSubTokensMask";
    CFStringTokenizerTokenType2[CFStringTokenizerTokenType2["hasDerivedSubTokensMask"] = 4] = "hasDerivedSubTokensMask";
    CFStringTokenizerTokenType2[CFStringTokenizerTokenType2["hasHasNumbersMask"] = 5] = "hasHasNumbersMask";
    CFStringTokenizerTokenType2[CFStringTokenizerTokenType2["hasNonLettersMask"] = 6] = "hasNonLettersMask";
    CFStringTokenizerTokenType2[CFStringTokenizerTokenType2["isCJWordMask"] = 7] = "isCJWordMask";
  })(CFStringTokenizerTokenType || (CFStringTokenizerTokenType = {}));
  global$2["CFStringTokenizerTokenType"] = CFStringTokenizerTokenType;
  var CFURLBookmarkCreationOptions;
  (function(CFURLBookmarkCreationOptions2) {
    CFURLBookmarkCreationOptions2[CFURLBookmarkCreationOptions2["byteSwapped"] = 0] = "byteSwapped";
    CFURLBookmarkCreationOptions2[CFURLBookmarkCreationOptions2["scalarCount"] = 1] = "scalarCount";
    CFURLBookmarkCreationOptions2[CFURLBookmarkCreationOptions2["minimalBookmarkMask"] = 2] = "minimalBookmarkMask";
    CFURLBookmarkCreationOptions2[CFURLBookmarkCreationOptions2["suitableForBookmarkFile"] = 3] = "suitableForBookmarkFile";
    CFURLBookmarkCreationOptions2[CFURLBookmarkCreationOptions2["withSecurityScope"] = 4] = "withSecurityScope";
    CFURLBookmarkCreationOptions2[CFURLBookmarkCreationOptions2["securityScopeAllowOnlyReadAccess"] = 5] = "securityScopeAllowOnlyReadAccess";
  })(CFURLBookmarkCreationOptions || (CFURLBookmarkCreationOptions = {}));
  global$2["CFURLBookmarkCreationOptions"] = CFURLBookmarkCreationOptions;
  var CFURLBookmarkResolutionOptions;
  (function(CFURLBookmarkResolutionOptions2) {
    CFURLBookmarkResolutionOptions2[CFURLBookmarkResolutionOptions2["byteSwapped"] = 0] = "byteSwapped";
    CFURLBookmarkResolutionOptions2[CFURLBookmarkResolutionOptions2["scalarCount"] = 1] = "scalarCount";
    CFURLBookmarkResolutionOptions2[CFURLBookmarkResolutionOptions2["cfurlBookmarkResolutionWithoutUIMask"] = 2] = "cfurlBookmarkResolutionWithoutUIMask";
    CFURLBookmarkResolutionOptions2[CFURLBookmarkResolutionOptions2["cfurlBookmarkResolutionWithoutMountingMask"] = 3] = "cfurlBookmarkResolutionWithoutMountingMask";
    CFURLBookmarkResolutionOptions2[CFURLBookmarkResolutionOptions2["cfurlBookmarkResolutionWithSecurityScope"] = 4] = "cfurlBookmarkResolutionWithSecurityScope";
    CFURLBookmarkResolutionOptions2[CFURLBookmarkResolutionOptions2["cfBookmarkResolutionWithoutUIMask"] = 5] = "cfBookmarkResolutionWithoutUIMask";
    CFURLBookmarkResolutionOptions2[CFURLBookmarkResolutionOptions2["cfBookmarkResolutionWithoutMountingMask"] = 6] = "cfBookmarkResolutionWithoutMountingMask";
  })(CFURLBookmarkResolutionOptions || (CFURLBookmarkResolutionOptions = {}));
  global$2["CFURLBookmarkResolutionOptions"] = CFURLBookmarkResolutionOptions;
  var CFURLEnumeratorOptions;
  (function(CFURLEnumeratorOptions2) {
    CFURLEnumeratorOptions2[CFURLEnumeratorOptions2["descendRecursively"] = 0] = "descendRecursively";
    CFURLEnumeratorOptions2[CFURLEnumeratorOptions2["skipInvisibles"] = 1] = "skipInvisibles";
    CFURLEnumeratorOptions2[CFURLEnumeratorOptions2["generateFileReferenceURLs"] = 2] = "generateFileReferenceURLs";
    CFURLEnumeratorOptions2[CFURLEnumeratorOptions2["skipPackageContents"] = 3] = "skipPackageContents";
    CFURLEnumeratorOptions2[CFURLEnumeratorOptions2["includeDirectoriesPreOrder"] = 4] = "includeDirectoriesPreOrder";
    CFURLEnumeratorOptions2[CFURLEnumeratorOptions2["includeDirectoriesPostOrder"] = 5] = "includeDirectoriesPostOrder";
    CFURLEnumeratorOptions2[CFURLEnumeratorOptions2["generateRelativePathURLs"] = 6] = "generateRelativePathURLs";
  })(CFURLEnumeratorOptions || (CFURLEnumeratorOptions = {}));
  global$2["CFURLEnumeratorOptions"] = CFURLEnumeratorOptions;
  var CFXMLParserOptions;
  (function(CFXMLParserOptions2) {
    CFXMLParserOptions2[CFXMLParserOptions2["validateDocument"] = 0] = "validateDocument";
    CFXMLParserOptions2[CFXMLParserOptions2["skipMetaData"] = 1] = "skipMetaData";
    CFXMLParserOptions2[CFXMLParserOptions2["replacePhysicalEntities"] = 2] = "replacePhysicalEntities";
    CFXMLParserOptions2[CFXMLParserOptions2["skipWhitespace"] = 3] = "skipWhitespace";
    CFXMLParserOptions2[CFXMLParserOptions2["resolveExternalEntities"] = 4] = "resolveExternalEntities";
    CFXMLParserOptions2[CFXMLParserOptions2["addImpliedAttributes"] = 5] = "addImpliedAttributes";
    CFXMLParserOptions2[CFXMLParserOptions2["allOptions"] = 6] = "allOptions";
  })(CFXMLParserOptions || (CFXMLParserOptions = {}));
  global$2["CFXMLParserOptions"] = CFXMLParserOptions;
  var CFXMLParserStatusCode;
  (function(CFXMLParserStatusCode2) {
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["statusParseNotBegun"] = 0] = "statusParseNotBegun";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["statusParseInProgress"] = 1] = "statusParseInProgress";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["errorUnexpectedEOF"] = 2] = "errorUnexpectedEOF";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["errorUnknownEncoding"] = 3] = "errorUnknownEncoding";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["errorEncodingConversionFailure"] = 4] = "errorEncodingConversionFailure";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["errorMalformedProcessingInstruction"] = 5] = "errorMalformedProcessingInstruction";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["errorMalformedDTD"] = 6] = "errorMalformedDTD";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["errorMalformedName"] = 7] = "errorMalformedName";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["errorMalformedCDSect"] = 8] = "errorMalformedCDSect";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["errorMalformedCloseTag"] = 9] = "errorMalformedCloseTag";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["errorMalformedStartTag"] = 10] = "errorMalformedStartTag";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["errorMalformedDocument"] = 11] = "errorMalformedDocument";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["errorElementlessDocument"] = 12] = "errorElementlessDocument";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["errorMalformedComment"] = 13] = "errorMalformedComment";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["errorMalformedCharacterReference"] = 14] = "errorMalformedCharacterReference";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["errorMalformedParsedCharacterData"] = 15] = "errorMalformedParsedCharacterData";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["errorNoData"] = 16] = "errorNoData";
  })(CFXMLParserStatusCode || (CFXMLParserStatusCode = {}));
  global$2["CFXMLParserStatusCode"] = CFXMLParserStatusCode;
  var CGBitmapInfo;
  (function(CGBitmapInfo2) {
    CGBitmapInfo2[CGBitmapInfo2["alphaInfoMask"] = 0] = "alphaInfoMask";
    CGBitmapInfo2[CGBitmapInfo2["floatInfoMask"] = 1] = "floatInfoMask";
    CGBitmapInfo2[CGBitmapInfo2["floatComponents"] = 2] = "floatComponents";
    CGBitmapInfo2[CGBitmapInfo2["byteOrderMask"] = 3] = "byteOrderMask";
    CGBitmapInfo2[CGBitmapInfo2["byteOrder16Little"] = 4] = "byteOrder16Little";
    CGBitmapInfo2[CGBitmapInfo2["byteOrder32Little"] = 5] = "byteOrder32Little";
    CGBitmapInfo2[CGBitmapInfo2["byteOrder16Big"] = 6] = "byteOrder16Big";
    CGBitmapInfo2[CGBitmapInfo2["byteOrder32Big"] = 7] = "byteOrder32Big";
  })(CGBitmapInfo || (CGBitmapInfo = {}));
  global$2["CGBitmapInfo"] = CGBitmapInfo;
  var CGCaptureOptions;
  (function(CGCaptureOptions2) {
    CGCaptureOptions2[CGCaptureOptions2["byteSwapped"] = 0] = "byteSwapped";
    CGCaptureOptions2[CGCaptureOptions2["scalarCount"] = 1] = "scalarCount";
    CGCaptureOptions2[CGCaptureOptions2["noFill"] = 2] = "noFill";
  })(CGCaptureOptions || (CGCaptureOptions = {}));
  global$2["CGCaptureOptions"] = CGCaptureOptions;
  var CGConfigureOption;
  (function(CGConfigureOption2) {
    CGConfigureOption2[CGConfigureOption2["byteSwapped"] = 0] = "byteSwapped";
    CGConfigureOption2[CGConfigureOption2["scalarCount"] = 1] = "scalarCount";
    CGConfigureOption2[CGConfigureOption2["forAppOnly"] = 2] = "forAppOnly";
    CGConfigureOption2[CGConfigureOption2["forSession"] = 3] = "forSession";
    CGConfigureOption2[CGConfigureOption2["permanently"] = 4] = "permanently";
  })(CGConfigureOption || (CGConfigureOption = {}));
  global$2["CGConfigureOption"] = CGConfigureOption;
  var CGDisplayChangeSummaryFlags;
  (function(CGDisplayChangeSummaryFlags2) {
    CGDisplayChangeSummaryFlags2[CGDisplayChangeSummaryFlags2["byteSwapped"] = 0] = "byteSwapped";
    CGDisplayChangeSummaryFlags2[CGDisplayChangeSummaryFlags2["scalarCount"] = 1] = "scalarCount";
    CGDisplayChangeSummaryFlags2[CGDisplayChangeSummaryFlags2["beginConfigurationFlag"] = 2] = "beginConfigurationFlag";
    CGDisplayChangeSummaryFlags2[CGDisplayChangeSummaryFlags2["movedFlag"] = 3] = "movedFlag";
    CGDisplayChangeSummaryFlags2[CGDisplayChangeSummaryFlags2["setMainFlag"] = 4] = "setMainFlag";
    CGDisplayChangeSummaryFlags2[CGDisplayChangeSummaryFlags2["setModeFlag"] = 5] = "setModeFlag";
    CGDisplayChangeSummaryFlags2[CGDisplayChangeSummaryFlags2["addFlag"] = 6] = "addFlag";
    CGDisplayChangeSummaryFlags2[CGDisplayChangeSummaryFlags2["removeFlag"] = 7] = "removeFlag";
    CGDisplayChangeSummaryFlags2[CGDisplayChangeSummaryFlags2["enabledFlag"] = 8] = "enabledFlag";
    CGDisplayChangeSummaryFlags2[CGDisplayChangeSummaryFlags2["disabledFlag"] = 9] = "disabledFlag";
    CGDisplayChangeSummaryFlags2[CGDisplayChangeSummaryFlags2["mirrorFlag"] = 10] = "mirrorFlag";
    CGDisplayChangeSummaryFlags2[CGDisplayChangeSummaryFlags2["unMirrorFlag"] = 11] = "unMirrorFlag";
    CGDisplayChangeSummaryFlags2[CGDisplayChangeSummaryFlags2["desktopShapeChangedFlag"] = 12] = "desktopShapeChangedFlag";
  })(CGDisplayChangeSummaryFlags || (CGDisplayChangeSummaryFlags = {}));
  global$2["CGDisplayChangeSummaryFlags"] = CGDisplayChangeSummaryFlags;
  var CGEventFilterMask;
  (function(CGEventFilterMask2) {
    CGEventFilterMask2[CGEventFilterMask2["byteSwapped"] = 0] = "byteSwapped";
    CGEventFilterMask2[CGEventFilterMask2["scalarCount"] = 1] = "scalarCount";
    CGEventFilterMask2[CGEventFilterMask2["permitLocalMouseEvents"] = 2] = "permitLocalMouseEvents";
    CGEventFilterMask2[CGEventFilterMask2["permitLocalKeyboardEvents"] = 3] = "permitLocalKeyboardEvents";
    CGEventFilterMask2[CGEventFilterMask2["permitSystemDefinedEvents"] = 4] = "permitSystemDefinedEvents";
  })(CGEventFilterMask || (CGEventFilterMask = {}));
  global$2["CGEventFilterMask"] = CGEventFilterMask;
  var CGEventFlags;
  (function(CGEventFlags2) {
    CGEventFlags2[CGEventFlags2["maskAlphaShift"] = 0] = "maskAlphaShift";
    CGEventFlags2[CGEventFlags2["maskShift"] = 1] = "maskShift";
    CGEventFlags2[CGEventFlags2["maskControl"] = 2] = "maskControl";
    CGEventFlags2[CGEventFlags2["maskAlternate"] = 3] = "maskAlternate";
    CGEventFlags2[CGEventFlags2["maskCommand"] = 4] = "maskCommand";
    CGEventFlags2[CGEventFlags2["maskHelp"] = 5] = "maskHelp";
    CGEventFlags2[CGEventFlags2["maskSecondaryFn"] = 6] = "maskSecondaryFn";
    CGEventFlags2[CGEventFlags2["maskNumericPad"] = 7] = "maskNumericPad";
    CGEventFlags2[CGEventFlags2["maskNonCoalesced"] = 8] = "maskNonCoalesced";
  })(CGEventFlags || (CGEventFlags = {}));
  global$2["CGEventFlags"] = CGEventFlags;
  var CGGradientDrawingOptions;
  (function(CGGradientDrawingOptions2) {
    CGGradientDrawingOptions2[CGGradientDrawingOptions2["byteSwapped"] = 0] = "byteSwapped";
    CGGradientDrawingOptions2[CGGradientDrawingOptions2["scalarCount"] = 1] = "scalarCount";
    CGGradientDrawingOptions2[CGGradientDrawingOptions2["drawsBeforeStartLocation"] = 2] = "drawsBeforeStartLocation";
    CGGradientDrawingOptions2[CGGradientDrawingOptions2["drawsAfterEndLocation"] = 3] = "drawsAfterEndLocation";
  })(CGGradientDrawingOptions || (CGGradientDrawingOptions = {}));
  global$2["CGGradientDrawingOptions"] = CGGradientDrawingOptions;
  var CGPDFAccessPermissions;
  (function(CGPDFAccessPermissions2) {
    CGPDFAccessPermissions2[CGPDFAccessPermissions2["byteSwapped"] = 0] = "byteSwapped";
    CGPDFAccessPermissions2[CGPDFAccessPermissions2["scalarCount"] = 1] = "scalarCount";
    CGPDFAccessPermissions2[CGPDFAccessPermissions2["allowsLowQualityPrinting"] = 2] = "allowsLowQualityPrinting";
    CGPDFAccessPermissions2[CGPDFAccessPermissions2["allowsHighQualityPrinting"] = 3] = "allowsHighQualityPrinting";
    CGPDFAccessPermissions2[CGPDFAccessPermissions2["allowsDocumentChanges"] = 4] = "allowsDocumentChanges";
    CGPDFAccessPermissions2[CGPDFAccessPermissions2["allowsDocumentAssembly"] = 5] = "allowsDocumentAssembly";
    CGPDFAccessPermissions2[CGPDFAccessPermissions2["allowsContentCopying"] = 6] = "allowsContentCopying";
    CGPDFAccessPermissions2[CGPDFAccessPermissions2["allowsContentAccessibility"] = 7] = "allowsContentAccessibility";
    CGPDFAccessPermissions2[CGPDFAccessPermissions2["allowsCommenting"] = 8] = "allowsCommenting";
    CGPDFAccessPermissions2[CGPDFAccessPermissions2["allowsFormFieldEntry"] = 9] = "allowsFormFieldEntry";
  })(CGPDFAccessPermissions || (CGPDFAccessPermissions = {}));
  global$2["CGPDFAccessPermissions"] = CGPDFAccessPermissions;
  var CGScreenUpdateOperation;
  (function(CGScreenUpdateOperation2) {
    CGScreenUpdateOperation2[CGScreenUpdateOperation2["byteSwapped"] = 0] = "byteSwapped";
    CGScreenUpdateOperation2[CGScreenUpdateOperation2["scalarCount"] = 1] = "scalarCount";
    CGScreenUpdateOperation2[CGScreenUpdateOperation2["refresh"] = 2] = "refresh";
    CGScreenUpdateOperation2[CGScreenUpdateOperation2["move"] = 3] = "move";
    CGScreenUpdateOperation2[CGScreenUpdateOperation2["reducedDirtyRectangleCount"] = 4] = "reducedDirtyRectangleCount";
  })(CGScreenUpdateOperation || (CGScreenUpdateOperation = {}));
  global$2["CGScreenUpdateOperation"] = CGScreenUpdateOperation;
  var CGWindowImageOption;
  (function(CGWindowImageOption2) {
    CGWindowImageOption2[CGWindowImageOption2["byteSwapped"] = 0] = "byteSwapped";
    CGWindowImageOption2[CGWindowImageOption2["scalarCount"] = 1] = "scalarCount";
    CGWindowImageOption2[CGWindowImageOption2["boundsIgnoreFraming"] = 2] = "boundsIgnoreFraming";
    CGWindowImageOption2[CGWindowImageOption2["shouldBeOpaque"] = 3] = "shouldBeOpaque";
    CGWindowImageOption2[CGWindowImageOption2["onlyShadows"] = 4] = "onlyShadows";
    CGWindowImageOption2[CGWindowImageOption2["bestResolution"] = 5] = "bestResolution";
    CGWindowImageOption2[CGWindowImageOption2["nominalResolution"] = 6] = "nominalResolution";
  })(CGWindowImageOption || (CGWindowImageOption = {}));
  global$2["CGWindowImageOption"] = CGWindowImageOption;
  var CGWindowListOption;
  (function(CGWindowListOption2) {
    CGWindowListOption2[CGWindowListOption2["magnitude"] = 0] = "magnitude";
    CGWindowListOption2[CGWindowListOption2["byteSwapped"] = 1] = "byteSwapped";
    CGWindowListOption2[CGWindowListOption2["scalarCount"] = 2] = "scalarCount";
    CGWindowListOption2[CGWindowListOption2["optionAll"] = 3] = "optionAll";
    CGWindowListOption2[CGWindowListOption2["optionOnScreenOnly"] = 4] = "optionOnScreenOnly";
    CGWindowListOption2[CGWindowListOption2["optionOnScreenAboveWindow"] = 5] = "optionOnScreenAboveWindow";
    CGWindowListOption2[CGWindowListOption2["optionOnScreenBelowWindow"] = 6] = "optionOnScreenBelowWindow";
    CGWindowListOption2[CGWindowListOption2["optionIncludingWindow"] = 7] = "optionIncludingWindow";
    CGWindowListOption2[CGWindowListOption2["excludeDesktopElements"] = 8] = "excludeDesktopElements";
  })(CGWindowListOption || (CGWindowListOption = {}));
  global$2["CGWindowListOption"] = CGWindowListOption;
  var CKContainer_Application_Permissions;
  (function(CKContainer_Application_Permissions2) {
    CKContainer_Application_Permissions2[CKContainer_Application_Permissions2["userDiscoverability"] = 0] = "userDiscoverability";
  })(CKContainer_Application_Permissions || (CKContainer_Application_Permissions = {}));
  global$2["CKContainer_Application_Permissions"] = CKContainer_Application_Permissions;
  var CMSampleBuffer;
  (function(CMSampleBuffer2) {
    CMSampleBuffer2[CMSampleBuffer2["audioBufferListAssure16ByteAlignment"] = 0] = "audioBufferListAssure16ByteAlignment";
  })(CMSampleBuffer || (CMSampleBuffer = {}));
  global$2["CMSampleBuffer"] = CMSampleBuffer;
  var CMTimeFlags;
  (function(CMTimeFlags2) {
    CMTimeFlags2[CMTimeFlags2["magnitude"] = 0] = "magnitude";
    CMTimeFlags2[CMTimeFlags2["byteSwapped"] = 1] = "byteSwapped";
    CMTimeFlags2[CMTimeFlags2["scalarCount"] = 2] = "scalarCount";
    CMTimeFlags2[CMTimeFlags2["valid"] = 3] = "valid";
    CMTimeFlags2[CMTimeFlags2["hasBeenRounded"] = 4] = "hasBeenRounded";
    CMTimeFlags2[CMTimeFlags2["positiveInfinity"] = 5] = "positiveInfinity";
    CMTimeFlags2[CMTimeFlags2["negativeInfinity"] = 6] = "negativeInfinity";
    CMTimeFlags2[CMTimeFlags2["indefinite"] = 7] = "indefinite";
    CMTimeFlags2[CMTimeFlags2["impliedValueFlagsMask"] = 8] = "impliedValueFlagsMask";
  })(CMTimeFlags || (CMTimeFlags = {}));
  global$2["CMTimeFlags"] = CMTimeFlags;
  var Character;
  (function(Character2) {
    Character2[Character2["request"] = 0] = "request";
    Character2[Character2["session"] = 1] = "session";
    Character2[Character2["ascii"] = 2] = "ascii";
    Character2[Character2["nextstep"] = 3] = "nextstep";
    Character2[Character2["japaneseEUC"] = 4] = "japaneseEUC";
    Character2[Character2["utf8"] = 5] = "utf8";
    Character2[Character2["isoLatin1"] = 6] = "isoLatin1";
    Character2[Character2["symbol"] = 7] = "symbol";
    Character2[Character2["nonLossyASCII"] = 8] = "nonLossyASCII";
    Character2[Character2["shiftJIS"] = 9] = "shiftJIS";
    Character2[Character2["isoLatin2"] = 10] = "isoLatin2";
    Character2[Character2["unicode"] = 11] = "unicode";
    Character2[Character2["windowsCP1251"] = 12] = "windowsCP1251";
    Character2[Character2["windowsCP1252"] = 13] = "windowsCP1252";
    Character2[Character2["windowsCP1253"] = 14] = "windowsCP1253";
    Character2[Character2["windowsCP1254"] = 15] = "windowsCP1254";
    Character2[Character2["windowsCP1250"] = 16] = "windowsCP1250";
    Character2[Character2["iso2022JP"] = 17] = "iso2022JP";
    Character2[Character2["macOSRoman"] = 18] = "macOSRoman";
    Character2[Character2["utf16"] = 19] = "utf16";
    Character2[Character2["utf16BigEndian"] = 20] = "utf16BigEndian";
    Character2[Character2["utf16LittleEndian"] = 21] = "utf16LittleEndian";
    Character2[Character2["utf32"] = 22] = "utf32";
    Character2[Character2["utf32BigEndian"] = 23] = "utf32BigEndian";
    Character2[Character2["utf32LittleEndian"] = 24] = "utf32LittleEndian";
  })(Character || (Character = {}));
  global$2["Character"] = Character;
  var Data;
  (function(Data2) {
    Data2[Data2["video"] = 0] = "video";
    Data2[Data2["audio"] = 1] = "audio";
    Data2[Data2["muxed"] = 2] = "muxed";
    Data2[Data2["text"] = 3] = "text";
    Data2[Data2["closedCaption"] = 4] = "closedCaption";
    Data2[Data2["subtitle"] = 5] = "subtitle";
    Data2[Data2["timeCode"] = 6] = "timeCode";
    Data2[Data2["metadata"] = 7] = "metadata";
    Data2[Data2["linearPCM"] = 8] = "linearPCM";
    Data2[Data2["ac3"] = 9] = "ac3";
    Data2[Data2["iec60958AC3"] = 10] = "iec60958AC3";
    Data2[Data2["appleIMA4"] = 11] = "appleIMA4";
    Data2[Data2["mpeg4AAC"] = 12] = "mpeg4AAC";
    Data2[Data2["mpeg4CELP"] = 13] = "mpeg4CELP";
    Data2[Data2["mpeg4HVXC"] = 14] = "mpeg4HVXC";
    Data2[Data2["mpeg4TwinVQ"] = 15] = "mpeg4TwinVQ";
    Data2[Data2["mace3"] = 16] = "mace3";
    Data2[Data2["mace6"] = 17] = "mace6";
    Data2[Data2["uLaw"] = 18] = "uLaw";
    Data2[Data2["aLaw"] = 19] = "aLaw";
    Data2[Data2["qDesign"] = 20] = "qDesign";
    Data2[Data2["qDesign2"] = 21] = "qDesign2";
    Data2[Data2["qualcomm"] = 22] = "qualcomm";
    Data2[Data2["mpegLayer1"] = 23] = "mpegLayer1";
    Data2[Data2["mpegLayer2"] = 24] = "mpegLayer2";
    Data2[Data2["mpegLayer3"] = 25] = "mpegLayer3";
    Data2[Data2["midiStream"] = 26] = "midiStream";
    Data2[Data2["parameterValueStream"] = 27] = "parameterValueStream";
    Data2[Data2["appleLossless"] = 28] = "appleLossless";
    Data2[Data2["mpeg4AAC_HE"] = 29] = "mpeg4AAC_HE";
    Data2[Data2["mpeg4AAC_LD"] = 30] = "mpeg4AAC_LD";
    Data2[Data2["mpeg4AAC_ELD"] = 31] = "mpeg4AAC_ELD";
    Data2[Data2["mpeg4AAC_ELD_SBR"] = 32] = "mpeg4AAC_ELD_SBR";
    Data2[Data2["mpeg4AAC_ELD_V2"] = 33] = "mpeg4AAC_ELD_V2";
    Data2[Data2["mpeg4AAC_HE_V2"] = 34] = "mpeg4AAC_HE_V2";
    Data2[Data2["mpeg4AAC_Spatial"] = 35] = "mpeg4AAC_Spatial";
    Data2[Data2["mpegD_USAC"] = 36] = "mpegD_USAC";
    Data2[Data2["amr"] = 37] = "amr";
    Data2[Data2["amr_WB"] = 38] = "amr_WB";
    Data2[Data2["audible"] = 39] = "audible";
    Data2[Data2["iLBC"] = 40] = "iLBC";
    Data2[Data2["dviIntelIMA"] = 41] = "dviIntelIMA";
    Data2[Data2["microsoftGSM"] = 42] = "microsoftGSM";
    Data2[Data2["aes3"] = 43] = "aes3";
    Data2[Data2["enhancedAC3"] = 44] = "enhancedAC3";
    Data2[Data2["flac"] = 45] = "flac";
    Data2[Data2["opus"] = 46] = "opus";
    Data2[Data2["aacLCProtected"] = 47] = "aacLCProtected";
    Data2[Data2["aacAudibleProtected"] = 48] = "aacAudibleProtected";
    Data2[Data2["pixelFormat_32ARGB"] = 49] = "pixelFormat_32ARGB";
    Data2[Data2["pixelFormat_32BGRA"] = 50] = "pixelFormat_32BGRA";
    Data2[Data2["pixelFormat_24RGB"] = 51] = "pixelFormat_24RGB";
    Data2[Data2["pixelFormat_16BE555"] = 52] = "pixelFormat_16BE555";
    Data2[Data2["pixelFormat_16BE565"] = 53] = "pixelFormat_16BE565";
    Data2[Data2["pixelFormat_16LE555"] = 54] = "pixelFormat_16LE555";
    Data2[Data2["pixelFormat_16LE565"] = 55] = "pixelFormat_16LE565";
    Data2[Data2["pixelFormat_16LE5551"] = 56] = "pixelFormat_16LE5551";
    Data2[Data2["pixelFormat_422YpCbCr8"] = 57] = "pixelFormat_422YpCbCr8";
    Data2[Data2["pixelFormat_422YpCbCr8_yuvs"] = 58] = "pixelFormat_422YpCbCr8_yuvs";
    Data2[Data2["pixelFormat_444YpCbCr8"] = 59] = "pixelFormat_444YpCbCr8";
    Data2[Data2["pixelFormat_4444YpCbCrA8"] = 60] = "pixelFormat_4444YpCbCrA8";
    Data2[Data2["pixelFormat_422YpCbCr16"] = 61] = "pixelFormat_422YpCbCr16";
    Data2[Data2["pixelFormat_422YpCbCr10"] = 62] = "pixelFormat_422YpCbCr10";
    Data2[Data2["pixelFormat_444YpCbCr10"] = 63] = "pixelFormat_444YpCbCr10";
    Data2[Data2["pixelFormat_8IndexedGray_WhiteIsZero"] = 64] = "pixelFormat_8IndexedGray_WhiteIsZero";
    Data2[Data2["animation"] = 65] = "animation";
    Data2[Data2["cinepak"] = 66] = "cinepak";
    Data2[Data2["jpeg"] = 67] = "jpeg";
    Data2[Data2["jpeg_OpenDML"] = 68] = "jpeg_OpenDML";
    Data2[Data2["sorensonVideo"] = 69] = "sorensonVideo";
    Data2[Data2["sorensonVideo3"] = 70] = "sorensonVideo3";
    Data2[Data2["h263"] = 71] = "h263";
    Data2[Data2["h264"] = 72] = "h264";
    Data2[Data2["hevc"] = 73] = "hevc";
    Data2[Data2["hevcWithAlpha"] = 74] = "hevcWithAlpha";
    Data2[Data2["mpeg4Video"] = 75] = "mpeg4Video";
    Data2[Data2["mpeg2Video"] = 76] = "mpeg2Video";
    Data2[Data2["mpeg1Video"] = 77] = "mpeg1Video";
    Data2[Data2["dvcNTSC"] = 78] = "dvcNTSC";
    Data2[Data2["dvcPAL"] = 79] = "dvcPAL";
    Data2[Data2["dvcProPAL"] = 80] = "dvcProPAL";
    Data2[Data2["dvcPro50NTSC"] = 81] = "dvcPro50NTSC";
    Data2[Data2["dvcPro50PAL"] = 82] = "dvcPro50PAL";
    Data2[Data2["dvcPROHD720p60"] = 83] = "dvcPROHD720p60";
    Data2[Data2["dvcPROHD720p50"] = 84] = "dvcPROHD720p50";
    Data2[Data2["dvcPROHD1080i60"] = 85] = "dvcPROHD1080i60";
    Data2[Data2["dvcPROHD1080i50"] = 86] = "dvcPROHD1080i50";
    Data2[Data2["dvcPROHD1080p30"] = 87] = "dvcPROHD1080p30";
    Data2[Data2["dvcPROHD1080p25"] = 88] = "dvcPROHD1080p25";
    Data2[Data2["proRes4444XQ"] = 89] = "proRes4444XQ";
    Data2[Data2["proRes4444"] = 90] = "proRes4444";
    Data2[Data2["proRes422HQ"] = 91] = "proRes422HQ";
    Data2[Data2["proRes422"] = 92] = "proRes422";
    Data2[Data2["proRes422LT"] = 93] = "proRes422LT";
    Data2[Data2["proRes422Proxy"] = 94] = "proRes422Proxy";
    Data2[Data2["proResRAW"] = 95] = "proResRAW";
    Data2[Data2["proResRAWHQ"] = 96] = "proResRAWHQ";
    Data2[Data2["mpeg1System"] = 97] = "mpeg1System";
    Data2[Data2["mpeg2Transport"] = 98] = "mpeg2Transport";
    Data2[Data2["mpeg2Program"] = 99] = "mpeg2Program";
    Data2[Data2["dv"] = 100] = "dv";
    Data2[Data2["cea608"] = 101] = "cea608";
    Data2[Data2["cea708"] = 102] = "cea708";
    Data2[Data2["atsc"] = 103] = "atsc";
    Data2[Data2["qt"] = 104] = "qt";
    Data2[Data2["mobile3GPP"] = 105] = "mobile3GPP";
    Data2[Data2["webVTT"] = 106] = "webVTT";
    Data2[Data2["timeCode32"] = 107] = "timeCode32";
    Data2[Data2["timeCode64"] = 108] = "timeCode64";
    Data2[Data2["counter32"] = 109] = "counter32";
    Data2[Data2["counter64"] = 110] = "counter64";
    Data2[Data2["icy"] = 111] = "icy";
    Data2[Data2["id3"] = 112] = "id3";
    Data2[Data2["boxed"] = 113] = "boxed";
    Data2[Data2["emsg"] = 114] = "emsg";
    Data2[Data2["streamBasicDescription"] = 115] = "streamBasicDescription";
    Data2[Data2["magicCookie"] = 116] = "magicCookie";
    Data2[Data2["channelLayout"] = 117] = "channelLayout";
    Data2[Data2["extensions"] = 118] = "extensions";
    Data2[Data2["all"] = 119] = "all";
    Data2[Data2["startIndex"] = 120] = "startIndex";
    Data2[Data2["endIndex"] = 121] = "endIndex";
  })(Data || (Data = {}));
  global$2["Data"] = Data;
  var Int;
  (function(Int2) {
    Int2[Int2["byteSwapped"] = 0] = "byteSwapped";
    Int2[Int2["scalarCount"] = 1] = "scalarCount";
  })(Int || (Int = {}));
  global$2["Int"] = Int;
  var NSBinarySearchingOptions;
  (function(NSBinarySearchingOptions2) {
    NSBinarySearchingOptions2[NSBinarySearchingOptions2["firstEqual"] = 0] = "firstEqual";
    NSBinarySearchingOptions2[NSBinarySearchingOptions2["lastEqual"] = 1] = "lastEqual";
    NSBinarySearchingOptions2[NSBinarySearchingOptions2["insertionIndex"] = 2] = "insertionIndex";
  })(NSBinarySearchingOptions || (NSBinarySearchingOptions = {}));
  global$2["NSBinarySearchingOptions"] = NSBinarySearchingOptions;
  var NSDirectionalRectEdge;
  (function(NSDirectionalRectEdge2) {
    NSDirectionalRectEdge2[NSDirectionalRectEdge2["top"] = 0] = "top";
    NSDirectionalRectEdge2[NSDirectionalRectEdge2["leading"] = 1] = "leading";
    NSDirectionalRectEdge2[NSDirectionalRectEdge2["bottom"] = 2] = "bottom";
    NSDirectionalRectEdge2[NSDirectionalRectEdge2["trailing"] = 3] = "trailing";
    NSDirectionalRectEdge2[NSDirectionalRectEdge2["all"] = 4] = "all";
  })(NSDirectionalRectEdge || (NSDirectionalRectEdge = {}));
  global$2["NSDirectionalRectEdge"] = NSDirectionalRectEdge;
  var NSDragOperation;
  (function(NSDragOperation2) {
    NSDragOperation2[NSDragOperation2["copy"] = 0] = "copy";
    NSDragOperation2[NSDragOperation2["link"] = 1] = "link";
    NSDragOperation2[NSDragOperation2["generic"] = 2] = "generic";
    NSDragOperation2[NSDragOperation2["private"] = 3] = "private";
    NSDragOperation2[NSDragOperation2["move"] = 4] = "move";
    NSDragOperation2[NSDragOperation2["delete"] = 5] = "delete";
    NSDragOperation2[NSDragOperation2["every"] = 6] = "every";
    NSDragOperation2[NSDragOperation2["all_Obsolete"] = 7] = "all_Obsolete";
    NSDragOperation2[NSDragOperation2["all"] = 8] = "all";
  })(NSDragOperation || (NSDragOperation = {}));
  global$2["NSDragOperation"] = NSDragOperation;
  var NSDraggingItemEnumerationOptions;
  (function(NSDraggingItemEnumerationOptions2) {
    NSDraggingItemEnumerationOptions2[NSDraggingItemEnumerationOptions2["concurrent"] = 0] = "concurrent";
    NSDraggingItemEnumerationOptions2[NSDraggingItemEnumerationOptions2["clearNonenumeratedImages"] = 1] = "clearNonenumeratedImages";
  })(NSDraggingItemEnumerationOptions || (NSDraggingItemEnumerationOptions = {}));
  global$2["NSDraggingItemEnumerationOptions"] = NSDraggingItemEnumerationOptions;
  var NSEnumerationOptions;
  (function(NSEnumerationOptions2) {
    NSEnumerationOptions2[NSEnumerationOptions2["concurrent"] = 0] = "concurrent";
    NSEnumerationOptions2[NSEnumerationOptions2["reverse"] = 1] = "reverse";
  })(NSEnumerationOptions || (NSEnumerationOptions = {}));
  global$2["NSEnumerationOptions"] = NSEnumerationOptions;
  var NSFontCollectionOptions;
  (function(NSFontCollectionOptions2) {
    NSFontCollectionOptions2[NSFontCollectionOptions2["applicationOnlyMask"] = 0] = "applicationOnlyMask";
  })(NSFontCollectionOptions || (NSFontCollectionOptions = {}));
  global$2["NSFontCollectionOptions"] = NSFontCollectionOptions;
  var NSFontTraitMask;
  (function(NSFontTraitMask2) {
    NSFontTraitMask2[NSFontTraitMask2["byteSwapped"] = 0] = "byteSwapped";
    NSFontTraitMask2[NSFontTraitMask2["scalarCount"] = 1] = "scalarCount";
    NSFontTraitMask2[NSFontTraitMask2["italicFontMask"] = 2] = "italicFontMask";
    NSFontTraitMask2[NSFontTraitMask2["boldFontMask"] = 3] = "boldFontMask";
    NSFontTraitMask2[NSFontTraitMask2["unboldFontMask"] = 4] = "unboldFontMask";
    NSFontTraitMask2[NSFontTraitMask2["nonStandardCharacterSetFontMask"] = 5] = "nonStandardCharacterSetFontMask";
    NSFontTraitMask2[NSFontTraitMask2["narrowFontMask"] = 6] = "narrowFontMask";
    NSFontTraitMask2[NSFontTraitMask2["expandedFontMask"] = 7] = "expandedFontMask";
    NSFontTraitMask2[NSFontTraitMask2["condensedFontMask"] = 8] = "condensedFontMask";
    NSFontTraitMask2[NSFontTraitMask2["smallCapsFontMask"] = 9] = "smallCapsFontMask";
    NSFontTraitMask2[NSFontTraitMask2["posterFontMask"] = 10] = "posterFontMask";
    NSFontTraitMask2[NSFontTraitMask2["compressedFontMask"] = 11] = "compressedFontMask";
    NSFontTraitMask2[NSFontTraitMask2["fixedPitchFontMask"] = 12] = "fixedPitchFontMask";
    NSFontTraitMask2[NSFontTraitMask2["unitalicFontMask"] = 13] = "unitalicFontMask";
  })(NSFontTraitMask || (NSFontTraitMask = {}));
  global$2["NSFontTraitMask"] = NSFontTraitMask;
  var NSItemProviderFileOptions;
  (function(NSItemProviderFileOptions2) {
    NSItemProviderFileOptions2[NSItemProviderFileOptions2["openInPlace"] = 0] = "openInPlace";
  })(NSItemProviderFileOptions || (NSItemProviderFileOptions = {}));
  global$2["NSItemProviderFileOptions"] = NSItemProviderFileOptions;
  var NSKeyValueObservingOptions;
  (function(NSKeyValueObservingOptions2) {
    NSKeyValueObservingOptions2[NSKeyValueObservingOptions2["new"] = 0] = "new";
    NSKeyValueObservingOptions2[NSKeyValueObservingOptions2["old"] = 1] = "old";
    NSKeyValueObservingOptions2[NSKeyValueObservingOptions2["initial"] = 2] = "initial";
    NSKeyValueObservingOptions2[NSKeyValueObservingOptions2["prior"] = 3] = "prior";
  })(NSKeyValueObservingOptions || (NSKeyValueObservingOptions = {}));
  global$2["NSKeyValueObservingOptions"] = NSKeyValueObservingOptions;
  var NSOrderedCollectionDifferenceCalculationOptions;
  (function(NSOrderedCollectionDifferenceCalculationOptions2) {
    NSOrderedCollectionDifferenceCalculationOptions2[NSOrderedCollectionDifferenceCalculationOptions2["magnitude"] = 0] = "magnitude";
    NSOrderedCollectionDifferenceCalculationOptions2[NSOrderedCollectionDifferenceCalculationOptions2["timeInterval"] = 1] = "timeInterval";
    NSOrderedCollectionDifferenceCalculationOptions2[NSOrderedCollectionDifferenceCalculationOptions2["hashValue"] = 2] = "hashValue";
    NSOrderedCollectionDifferenceCalculationOptions2[NSOrderedCollectionDifferenceCalculationOptions2["omitInsertedObjects"] = 3] = "omitInsertedObjects";
    NSOrderedCollectionDifferenceCalculationOptions2[NSOrderedCollectionDifferenceCalculationOptions2["omitRemovedObjects"] = 4] = "omitRemovedObjects";
    NSOrderedCollectionDifferenceCalculationOptions2[NSOrderedCollectionDifferenceCalculationOptions2["inferMoves"] = 5] = "inferMoves";
  })(NSOrderedCollectionDifferenceCalculationOptions || (NSOrderedCollectionDifferenceCalculationOptions = {}));
  global$2["NSOrderedCollectionDifferenceCalculationOptions"] = NSOrderedCollectionDifferenceCalculationOptions;
  var NSSortOptions;
  (function(NSSortOptions2) {
    NSSortOptions2[NSSortOptions2["magnitude"] = 0] = "magnitude";
    NSSortOptions2[NSSortOptions2["byteSwapped"] = 1] = "byteSwapped";
    NSSortOptions2[NSSortOptions2["scalarCount"] = 2] = "scalarCount";
    NSSortOptions2[NSSortOptions2["concurrent"] = 3] = "concurrent";
    NSSortOptions2[NSSortOptions2["stable"] = 4] = "stable";
  })(NSSortOptions || (NSSortOptions = {}));
  global$2["NSSortOptions"] = NSSortOptions;
  var NSSpringLoadingOptions;
  (function(NSSpringLoadingOptions2) {
    NSSpringLoadingOptions2[NSSpringLoadingOptions2["disabled"] = 0] = "disabled";
    NSSpringLoadingOptions2[NSSpringLoadingOptions2["enabled"] = 1] = "enabled";
    NSSpringLoadingOptions2[NSSpringLoadingOptions2["continuousActivation"] = 2] = "continuousActivation";
    NSSpringLoadingOptions2[NSSpringLoadingOptions2["noHover"] = 3] = "noHover";
  })(NSSpringLoadingOptions || (NSSpringLoadingOptions = {}));
  global$2["NSSpringLoadingOptions"] = NSSpringLoadingOptions;
  var NSTextStorageEditActions;
  (function(NSTextStorageEditActions2) {
    NSTextStorageEditActions2[NSTextStorageEditActions2["editedAttributes"] = 0] = "editedAttributes";
    NSTextStorageEditActions2[NSTextStorageEditActions2["editedCharacters"] = 1] = "editedCharacters";
  })(NSTextStorageEditActions || (NSTextStorageEditActions = {}));
  global$2["NSTextStorageEditActions"] = NSTextStorageEditActions;
  var NSTypesetterControlCharacterAction;
  (function(NSTypesetterControlCharacterAction2) {
    NSTypesetterControlCharacterAction2[NSTypesetterControlCharacterAction2["magnitude"] = 0] = "magnitude";
    NSTypesetterControlCharacterAction2[NSTypesetterControlCharacterAction2["byteSwapped"] = 1] = "byteSwapped";
    NSTypesetterControlCharacterAction2[NSTypesetterControlCharacterAction2["scalarCount"] = 2] = "scalarCount";
    NSTypesetterControlCharacterAction2[NSTypesetterControlCharacterAction2["zeroAdvancementAction"] = 3] = "zeroAdvancementAction";
    NSTypesetterControlCharacterAction2[NSTypesetterControlCharacterAction2["whitespaceAction"] = 4] = "whitespaceAction";
    NSTypesetterControlCharacterAction2[NSTypesetterControlCharacterAction2["horizontalTabAction"] = 5] = "horizontalTabAction";
    NSTypesetterControlCharacterAction2[NSTypesetterControlCharacterAction2["lineBreakAction"] = 6] = "lineBreakAction";
    NSTypesetterControlCharacterAction2[NSTypesetterControlCharacterAction2["paragraphBreakAction"] = 7] = "paragraphBreakAction";
    NSTypesetterControlCharacterAction2[NSTypesetterControlCharacterAction2["containerBreakAction"] = 8] = "containerBreakAction";
  })(NSTypesetterControlCharacterAction || (NSTypesetterControlCharacterAction = {}));
  global$2["NSTypesetterControlCharacterAction"] = NSTypesetterControlCharacterAction;
  var NSUnderlineStyle;
  (function(NSUnderlineStyle2) {
    NSUnderlineStyle2[NSUnderlineStyle2["single"] = 0] = "single";
    NSUnderlineStyle2[NSUnderlineStyle2["thick"] = 1] = "thick";
    NSUnderlineStyle2[NSUnderlineStyle2["double"] = 2] = "double";
    NSUnderlineStyle2[NSUnderlineStyle2["patternDot"] = 3] = "patternDot";
    NSUnderlineStyle2[NSUnderlineStyle2["patternDash"] = 4] = "patternDash";
    NSUnderlineStyle2[NSUnderlineStyle2["patternDashDot"] = 5] = "patternDashDot";
    NSUnderlineStyle2[NSUnderlineStyle2["patternDashDotDot"] = 6] = "patternDashDotDot";
    NSUnderlineStyle2[NSUnderlineStyle2["byWord"] = 7] = "byWord";
  })(NSUnderlineStyle || (NSUnderlineStyle = {}));
  global$2["NSUnderlineStyle"] = NSUnderlineStyle;
  var UInt;
  (function(UInt2) {
    UInt2[UInt2["magnitude"] = 0] = "magnitude";
    UInt2[UInt2["byteSwapped"] = 1] = "byteSwapped";
    UInt2[UInt2["scalarCount"] = 2] = "scalarCount";
    UInt2[UInt2["hashValue"] = 3] = "hashValue";
    UInt2[UInt2["bitWidth"] = 4] = "bitWidth";
    UInt2[UInt2["leadingZeroBitCount"] = 5] = "leadingZeroBitCount";
    UInt2[UInt2["trailingZeroBitCount"] = 6] = "trailingZeroBitCount";
    UInt2[UInt2["nonzeroBitCount"] = 7] = "nonzeroBitCount";
    UInt2[UInt2["count"] = 8] = "count";
    UInt2[UInt2["startIndex"] = 9] = "startIndex";
    UInt2[UInt2["endIndex"] = 10] = "endIndex";
    UInt2[UInt2["indices"] = 11] = "indices";
    UInt2[UInt2["words"] = 12] = "words";
  })(UInt || (UInt = {}));
  global$2["UInt"] = UInt;
  var UInt8;
  (function(UInt82) {
    UInt82[UInt82["regions"] = 0] = "regions";
    UInt82[UInt82["startIndex"] = 1] = "startIndex";
    UInt82[UInt82["endIndex"] = 2] = "endIndex";
    UInt82[UInt82["indices"] = 3] = "indices";
    UInt82[UInt82["hashValue"] = 4] = "hashValue";
    UInt82[UInt82["autoupdatingCurrent"] = 5] = "autoupdatingCurrent";
    UInt82[UInt82["current"] = 6] = "current";
  })(UInt8 || (UInt8 = {}));
  global$2["UInt8"] = UInt8;
  var NSAccessibilityPriorityLevel;
  (function(NSAccessibilityPriorityLevel2) {
    NSAccessibilityPriorityLevel2[NSAccessibilityPriorityLevel2["Low"] = 10] = "Low";
    NSAccessibilityPriorityLevel2[NSAccessibilityPriorityLevel2["Medium"] = 50] = "Medium";
    NSAccessibilityPriorityLevel2[NSAccessibilityPriorityLevel2["High"] = 90] = "High";
  })(NSAccessibilityPriorityLevel || (NSAccessibilityPriorityLevel = {}));
  global$2["NSAccessibilityPriorityLevel"] = NSAccessibilityPriorityLevel;
  var NSAnimationEffect;
  (function(NSAnimationEffect2) {
    NSAnimationEffect2[NSAnimationEffect2["DisappearingItemDefault"] = 0] = "DisappearingItemDefault";
    NSAnimationEffect2[NSAnimationEffect2["Poof"] = 10] = "Poof";
  })(NSAnimationEffect || (NSAnimationEffect = {}));
  global$2["NSAnimationEffect"] = NSAnimationEffect;
  var NSBorderType$1;
  (function(NSBorderType2) {
    NSBorderType2[NSBorderType2["NoBorder"] = 0] = "NoBorder";
    NSBorderType2[NSBorderType2["LineBorder"] = 1] = "LineBorder";
    NSBorderType2[NSBorderType2["BezelBorder"] = 2] = "BezelBorder";
    NSBorderType2[NSBorderType2["GrooveBorder"] = 3] = "GrooveBorder";
  })(NSBorderType$1 || (NSBorderType$1 = {}));
  global$2["NSBorderType"] = NSBorderType$1;
  var NSCharacterCollection;
  (function(NSCharacterCollection2) {
    NSCharacterCollection2[NSCharacterCollection2["IdentityMappingCharacterCollection"] = 0] = "IdentityMappingCharacterCollection";
    NSCharacterCollection2[NSCharacterCollection2["AdobeCNS1CharacterCollection"] = 1] = "AdobeCNS1CharacterCollection";
    NSCharacterCollection2[NSCharacterCollection2["AdobeGB1CharacterCollection"] = 2] = "AdobeGB1CharacterCollection";
    NSCharacterCollection2[NSCharacterCollection2["AdobeJapan1CharacterCollection"] = 3] = "AdobeJapan1CharacterCollection";
    NSCharacterCollection2[NSCharacterCollection2["AdobeJapan2CharacterCollection"] = 4] = "AdobeJapan2CharacterCollection";
    NSCharacterCollection2[NSCharacterCollection2["AdobeKorea1CharacterCollection"] = 5] = "AdobeKorea1CharacterCollection";
  })(NSCharacterCollection || (NSCharacterCollection = {}));
  global$2["NSCharacterCollection"] = NSCharacterCollection;
  var NSCollectionElementCategory;
  (function(NSCollectionElementCategory2) {
    NSCollectionElementCategory2[NSCollectionElementCategory2["Item"] = 0] = "Item";
    NSCollectionElementCategory2[NSCollectionElementCategory2["SupplementaryView"] = 1] = "SupplementaryView";
    NSCollectionElementCategory2[NSCollectionElementCategory2["DecorationView"] = 2] = "DecorationView";
    NSCollectionElementCategory2[NSCollectionElementCategory2["InterItemGap"] = 3] = "InterItemGap";
  })(NSCollectionElementCategory || (NSCollectionElementCategory = {}));
  global$2["NSCollectionElementCategory"] = NSCollectionElementCategory;
  var NSCollectionLayoutSectionOrthogonalScrollingBehavior;
  (function(NSCollectionLayoutSectionOrthogonalScrollingBehavior2) {
    NSCollectionLayoutSectionOrthogonalScrollingBehavior2[NSCollectionLayoutSectionOrthogonalScrollingBehavior2["None"] = 0] = "None";
    NSCollectionLayoutSectionOrthogonalScrollingBehavior2[NSCollectionLayoutSectionOrthogonalScrollingBehavior2["Continuous"] = 1] = "Continuous";
    NSCollectionLayoutSectionOrthogonalScrollingBehavior2[NSCollectionLayoutSectionOrthogonalScrollingBehavior2["ContinuousGroupLeadingBoundary"] = 2] = "ContinuousGroupLeadingBoundary";
    NSCollectionLayoutSectionOrthogonalScrollingBehavior2[NSCollectionLayoutSectionOrthogonalScrollingBehavior2["Paging"] = 3] = "Paging";
    NSCollectionLayoutSectionOrthogonalScrollingBehavior2[NSCollectionLayoutSectionOrthogonalScrollingBehavior2["GroupPaging"] = 4] = "GroupPaging";
    NSCollectionLayoutSectionOrthogonalScrollingBehavior2[NSCollectionLayoutSectionOrthogonalScrollingBehavior2["GroupPagingCentered"] = 5] = "GroupPagingCentered";
  })(NSCollectionLayoutSectionOrthogonalScrollingBehavior || (NSCollectionLayoutSectionOrthogonalScrollingBehavior = {}));
  global$2["NSCollectionLayoutSectionOrthogonalScrollingBehavior"] = NSCollectionLayoutSectionOrthogonalScrollingBehavior;
  var NSColorRenderingIntent;
  (function(NSColorRenderingIntent2) {
    NSColorRenderingIntent2[NSColorRenderingIntent2["Default"] = 0] = "Default";
    NSColorRenderingIntent2[NSColorRenderingIntent2["AbsoluteColorimetric"] = 1] = "AbsoluteColorimetric";
    NSColorRenderingIntent2[NSColorRenderingIntent2["RelativeColorimetric"] = 2] = "RelativeColorimetric";
    NSColorRenderingIntent2[NSColorRenderingIntent2["Perceptual"] = 3] = "Perceptual";
    NSColorRenderingIntent2[NSColorRenderingIntent2["Saturation"] = 4] = "Saturation";
  })(NSColorRenderingIntent || (NSColorRenderingIntent = {}));
  global$2["NSColorRenderingIntent"] = NSColorRenderingIntent;
  var NSCompositingOperation;
  (function(NSCompositingOperation2) {
    NSCompositingOperation2[NSCompositingOperation2["Clear"] = 0] = "Clear";
    NSCompositingOperation2[NSCompositingOperation2["Copy"] = 1] = "Copy";
    NSCompositingOperation2[NSCompositingOperation2["SourceOver"] = 2] = "SourceOver";
    NSCompositingOperation2[NSCompositingOperation2["SourceIn"] = 3] = "SourceIn";
    NSCompositingOperation2[NSCompositingOperation2["SourceOut"] = 4] = "SourceOut";
    NSCompositingOperation2[NSCompositingOperation2["SourceAtop"] = 5] = "SourceAtop";
    NSCompositingOperation2[NSCompositingOperation2["DestinationOver"] = 6] = "DestinationOver";
    NSCompositingOperation2[NSCompositingOperation2["DestinationIn"] = 7] = "DestinationIn";
    NSCompositingOperation2[NSCompositingOperation2["DestinationOut"] = 8] = "DestinationOut";
    NSCompositingOperation2[NSCompositingOperation2["DestinationAtop"] = 9] = "DestinationAtop";
    NSCompositingOperation2[NSCompositingOperation2["XOR"] = 10] = "XOR";
    NSCompositingOperation2[NSCompositingOperation2["PlusDarker"] = 11] = "PlusDarker";
    NSCompositingOperation2[NSCompositingOperation2["Highlight"] = 12] = "Highlight";
    NSCompositingOperation2[NSCompositingOperation2["PlusLighter"] = 13] = "PlusLighter";
    NSCompositingOperation2[NSCompositingOperation2["Multiply"] = 14] = "Multiply";
    NSCompositingOperation2[NSCompositingOperation2["Screen"] = 15] = "Screen";
    NSCompositingOperation2[NSCompositingOperation2["Overlay"] = 16] = "Overlay";
    NSCompositingOperation2[NSCompositingOperation2["Darken"] = 17] = "Darken";
    NSCompositingOperation2[NSCompositingOperation2["Lighten"] = 18] = "Lighten";
    NSCompositingOperation2[NSCompositingOperation2["ColorDodge"] = 19] = "ColorDodge";
    NSCompositingOperation2[NSCompositingOperation2["ColorBurn"] = 20] = "ColorBurn";
    NSCompositingOperation2[NSCompositingOperation2["SoftLight"] = 21] = "SoftLight";
    NSCompositingOperation2[NSCompositingOperation2["HardLight"] = 22] = "HardLight";
    NSCompositingOperation2[NSCompositingOperation2["Difference"] = 23] = "Difference";
    NSCompositingOperation2[NSCompositingOperation2["Exclusion"] = 24] = "Exclusion";
    NSCompositingOperation2[NSCompositingOperation2["Hue"] = 25] = "Hue";
    NSCompositingOperation2[NSCompositingOperation2["Saturation"] = 26] = "Saturation";
    NSCompositingOperation2[NSCompositingOperation2["Color"] = 27] = "Color";
    NSCompositingOperation2[NSCompositingOperation2["Luminosity"] = 28] = "Luminosity";
  })(NSCompositingOperation || (NSCompositingOperation = {}));
  global$2["NSCompositingOperation"] = NSCompositingOperation;
  var NSControlTint$1;
  (function(NSControlTint2) {
    NSControlTint2[NSControlTint2["DefaultControlTint"] = 0] = "DefaultControlTint";
    NSControlTint2[NSControlTint2["BlueControlTint"] = 1] = "BlueControlTint";
    NSControlTint2[NSControlTint2["GraphiteControlTint"] = 6] = "GraphiteControlTint";
    NSControlTint2[NSControlTint2["ClearControlTint"] = 7] = "ClearControlTint";
  })(NSControlTint$1 || (NSControlTint$1 = {}));
  global$2["NSControlTint"] = NSControlTint$1;
  (function(NSDirectionalRectEdge2) {
    NSDirectionalRectEdge2[NSDirectionalRectEdge2["None"] = 0] = "None";
    NSDirectionalRectEdge2[NSDirectionalRectEdge2["Top"] = 1] = "Top";
    NSDirectionalRectEdge2[NSDirectionalRectEdge2["Leading"] = 2] = "Leading";
    NSDirectionalRectEdge2[NSDirectionalRectEdge2["Bottom"] = 4] = "Bottom";
    NSDirectionalRectEdge2[NSDirectionalRectEdge2["Trailing"] = 8] = "Trailing";
    NSDirectionalRectEdge2[NSDirectionalRectEdge2["All"] = 15] = "All";
  })(NSDirectionalRectEdge || (NSDirectionalRectEdge = {}));
  global$2["NSDirectionalRectEdge"] = NSDirectionalRectEdge;
  var NSDisplayGamut;
  (function(NSDisplayGamut2) {
    NSDisplayGamut2[NSDisplayGamut2["SRGB"] = 1] = "SRGB";
    NSDisplayGamut2[NSDisplayGamut2["P3"] = 2] = "P3";
  })(NSDisplayGamut || (NSDisplayGamut = {}));
  global$2["NSDisplayGamut"] = NSDisplayGamut;
  (function(NSDragOperation2) {
    NSDragOperation2[NSDragOperation2["None"] = 0] = "None";
    NSDragOperation2[NSDragOperation2["Copy"] = 1] = "Copy";
    NSDragOperation2[NSDragOperation2["Link"] = 2] = "Link";
    NSDragOperation2[NSDragOperation2["Generic"] = 4] = "Generic";
    NSDragOperation2[NSDragOperation2["Private"] = 8] = "Private";
    NSDragOperation2[NSDragOperation2["Move"] = 16] = "Move";
    NSDragOperation2[NSDragOperation2["Delete"] = 32] = "Delete";
    NSDragOperation2[NSDragOperation2["Every"] = -1] = "Every";
    NSDragOperation2[NSDragOperation2["All_Obsolete"] = 15] = "All_Obsolete";
    NSDragOperation2[NSDragOperation2["All"] = 15] = "All";
  })(NSDragOperation || (NSDragOperation = {}));
  global$2["NSDragOperation"] = NSDragOperation;
  var NSDraggingContext;
  (function(NSDraggingContext2) {
    NSDraggingContext2[NSDraggingContext2["OutsideApplication"] = 0] = "OutsideApplication";
    NSDraggingContext2[NSDraggingContext2["WithinApplication"] = 1] = "WithinApplication";
  })(NSDraggingContext || (NSDraggingContext = {}));
  global$2["NSDraggingContext"] = NSDraggingContext;
  var NSDraggingFormation;
  (function(NSDraggingFormation2) {
    NSDraggingFormation2[NSDraggingFormation2["Default"] = 0] = "Default";
    NSDraggingFormation2[NSDraggingFormation2["None"] = 1] = "None";
    NSDraggingFormation2[NSDraggingFormation2["Pile"] = 2] = "Pile";
    NSDraggingFormation2[NSDraggingFormation2["List"] = 3] = "List";
    NSDraggingFormation2[NSDraggingFormation2["Stack"] = 4] = "Stack";
  })(NSDraggingFormation || (NSDraggingFormation = {}));
  global$2["NSDraggingFormation"] = NSDraggingFormation;
  (function(NSDraggingItemEnumerationOptions2) {
    NSDraggingItemEnumerationOptions2[NSDraggingItemEnumerationOptions2["Concurrent"] = 1] = "Concurrent";
    NSDraggingItemEnumerationOptions2[NSDraggingItemEnumerationOptions2["ClearNonenumeratedImages"] = 65536] = "ClearNonenumeratedImages";
  })(NSDraggingItemEnumerationOptions || (NSDraggingItemEnumerationOptions = {}));
  global$2["NSDraggingItemEnumerationOptions"] = NSDraggingItemEnumerationOptions;
  var NSFindPanelAction;
  (function(NSFindPanelAction2) {
    NSFindPanelAction2[NSFindPanelAction2["ShowFindPanel"] = 1] = "ShowFindPanel";
    NSFindPanelAction2[NSFindPanelAction2["Next"] = 2] = "Next";
    NSFindPanelAction2[NSFindPanelAction2["Previous"] = 3] = "Previous";
    NSFindPanelAction2[NSFindPanelAction2["ReplaceAll"] = 4] = "ReplaceAll";
    NSFindPanelAction2[NSFindPanelAction2["Replace"] = 5] = "Replace";
    NSFindPanelAction2[NSFindPanelAction2["ReplaceAndFind"] = 6] = "ReplaceAndFind";
    NSFindPanelAction2[NSFindPanelAction2["SetFindString"] = 7] = "SetFindString";
    NSFindPanelAction2[NSFindPanelAction2["ReplaceAllInSelection"] = 8] = "ReplaceAllInSelection";
    NSFindPanelAction2[NSFindPanelAction2["SelectAll"] = 9] = "SelectAll";
    NSFindPanelAction2[NSFindPanelAction2["SelectAllInSelection"] = 10] = "SelectAllInSelection";
  })(NSFindPanelAction || (NSFindPanelAction = {}));
  global$2["NSFindPanelAction"] = NSFindPanelAction;
  var NSFindPanelSubstringMatchType;
  (function(NSFindPanelSubstringMatchType2) {
    NSFindPanelSubstringMatchType2[NSFindPanelSubstringMatchType2["Contains"] = 0] = "Contains";
    NSFindPanelSubstringMatchType2[NSFindPanelSubstringMatchType2["StartsWith"] = 1] = "StartsWith";
    NSFindPanelSubstringMatchType2[NSFindPanelSubstringMatchType2["FullWord"] = 2] = "FullWord";
    NSFindPanelSubstringMatchType2[NSFindPanelSubstringMatchType2["EndsWith"] = 3] = "EndsWith";
  })(NSFindPanelSubstringMatchType || (NSFindPanelSubstringMatchType = {}));
  global$2["NSFindPanelSubstringMatchType"] = NSFindPanelSubstringMatchType;
  var NSFocusRingPlacement;
  (function(NSFocusRingPlacement2) {
    NSFocusRingPlacement2[NSFocusRingPlacement2["Only"] = 0] = "Only";
    NSFocusRingPlacement2[NSFocusRingPlacement2["Below"] = 1] = "Below";
    NSFocusRingPlacement2[NSFocusRingPlacement2["Above"] = 2] = "Above";
  })(NSFocusRingPlacement || (NSFocusRingPlacement = {}));
  global$2["NSFocusRingPlacement"] = NSFocusRingPlacement;
  var NSFocusRingType;
  (function(NSFocusRingType2) {
    NSFocusRingType2[NSFocusRingType2["Default"] = 0] = "Default";
    NSFocusRingType2[NSFocusRingType2["None"] = 1] = "None";
    NSFocusRingType2[NSFocusRingType2["Exterior"] = 2] = "Exterior";
  })(NSFocusRingType || (NSFocusRingType = {}));
  global$2["NSFocusRingType"] = NSFocusRingType;
  var NSFontAction;
  (function(NSFontAction2) {
    NSFontAction2[NSFontAction2["NoFontChangeAction"] = 0] = "NoFontChangeAction";
    NSFontAction2[NSFontAction2["ViaPanelFontAction"] = 1] = "ViaPanelFontAction";
    NSFontAction2[NSFontAction2["AddTraitFontAction"] = 2] = "AddTraitFontAction";
    NSFontAction2[NSFontAction2["SizeUpFontAction"] = 3] = "SizeUpFontAction";
    NSFontAction2[NSFontAction2["SizeDownFontAction"] = 4] = "SizeDownFontAction";
    NSFontAction2[NSFontAction2["HeavierFontAction"] = 5] = "HeavierFontAction";
    NSFontAction2[NSFontAction2["LighterFontAction"] = 6] = "LighterFontAction";
    NSFontAction2[NSFontAction2["RemoveTraitFontAction"] = 7] = "RemoveTraitFontAction";
  })(NSFontAction || (NSFontAction = {}));
  global$2["NSFontAction"] = NSFontAction;
  (function(NSFontCollectionOptions2) {
    NSFontCollectionOptions2[NSFontCollectionOptions2["ApplicationOnlyMask"] = 1] = "ApplicationOnlyMask";
  })(NSFontCollectionOptions || (NSFontCollectionOptions = {}));
  global$2["NSFontCollectionOptions"] = NSFontCollectionOptions;
  var NSFontRenderingMode;
  (function(NSFontRenderingMode2) {
    NSFontRenderingMode2[NSFontRenderingMode2["DefaultRenderingMode"] = 0] = "DefaultRenderingMode";
    NSFontRenderingMode2[NSFontRenderingMode2["AntialiasedRenderingMode"] = 1] = "AntialiasedRenderingMode";
    NSFontRenderingMode2[NSFontRenderingMode2["IntegerAdvancementsRenderingMode"] = 2] = "IntegerAdvancementsRenderingMode";
    NSFontRenderingMode2[NSFontRenderingMode2["AntialiasedIntegerAdvancementsRenderingMode"] = 3] = "AntialiasedIntegerAdvancementsRenderingMode";
  })(NSFontRenderingMode || (NSFontRenderingMode = {}));
  global$2["NSFontRenderingMode"] = NSFontRenderingMode;
  (function(NSFontTraitMask2) {
    NSFontTraitMask2[NSFontTraitMask2["ItalicFontMask"] = 1] = "ItalicFontMask";
    NSFontTraitMask2[NSFontTraitMask2["BoldFontMask"] = 2] = "BoldFontMask";
    NSFontTraitMask2[NSFontTraitMask2["UnboldFontMask"] = 4] = "UnboldFontMask";
    NSFontTraitMask2[NSFontTraitMask2["NonStandardCharacterSetFontMask"] = 8] = "NonStandardCharacterSetFontMask";
    NSFontTraitMask2[NSFontTraitMask2["NarrowFontMask"] = 16] = "NarrowFontMask";
    NSFontTraitMask2[NSFontTraitMask2["ExpandedFontMask"] = 32] = "ExpandedFontMask";
    NSFontTraitMask2[NSFontTraitMask2["CondensedFontMask"] = 64] = "CondensedFontMask";
    NSFontTraitMask2[NSFontTraitMask2["SmallCapsFontMask"] = 128] = "SmallCapsFontMask";
    NSFontTraitMask2[NSFontTraitMask2["PosterFontMask"] = 256] = "PosterFontMask";
    NSFontTraitMask2[NSFontTraitMask2["CompressedFontMask"] = 512] = "CompressedFontMask";
    NSFontTraitMask2[NSFontTraitMask2["FixedPitchFontMask"] = 1024] = "FixedPitchFontMask";
    NSFontTraitMask2[NSFontTraitMask2["UnitalicFontMask"] = 16777216] = "UnitalicFontMask";
  })(NSFontTraitMask || (NSFontTraitMask = {}));
  global$2["NSFontTraitMask"] = NSFontTraitMask;
  var NSImageAlignment$1;
  (function(NSImageAlignment2) {
    NSImageAlignment2[NSImageAlignment2["Center"] = 0] = "Center";
    NSImageAlignment2[NSImageAlignment2["Top"] = 1] = "Top";
    NSImageAlignment2[NSImageAlignment2["TopLeft"] = 2] = "TopLeft";
    NSImageAlignment2[NSImageAlignment2["TopRight"] = 3] = "TopRight";
    NSImageAlignment2[NSImageAlignment2["Left"] = 4] = "Left";
    NSImageAlignment2[NSImageAlignment2["Bottom"] = 5] = "Bottom";
    NSImageAlignment2[NSImageAlignment2["BottomLeft"] = 6] = "BottomLeft";
    NSImageAlignment2[NSImageAlignment2["BottomRight"] = 7] = "BottomRight";
    NSImageAlignment2[NSImageAlignment2["Right"] = 8] = "Right";
  })(NSImageAlignment$1 || (NSImageAlignment$1 = {}));
  global$2["NSImageAlignment"] = NSImageAlignment$1;
  var NSImageInterpolation;
  (function(NSImageInterpolation2) {
    NSImageInterpolation2[NSImageInterpolation2["Default"] = 0] = "Default";
    NSImageInterpolation2[NSImageInterpolation2["None"] = 1] = "None";
    NSImageInterpolation2[NSImageInterpolation2["Low"] = 2] = "Low";
    NSImageInterpolation2[NSImageInterpolation2["Medium"] = 4] = "Medium";
    NSImageInterpolation2[NSImageInterpolation2["High"] = 3] = "High";
  })(NSImageInterpolation || (NSImageInterpolation = {}));
  global$2["NSImageInterpolation"] = NSImageInterpolation;
  var NSImageScaling$1;
  (function(NSImageScaling2) {
    NSImageScaling2[NSImageScaling2["ImageScaleProportionallyDown"] = 0] = "ImageScaleProportionallyDown";
    NSImageScaling2[NSImageScaling2["ImageScaleAxesIndependently"] = 1] = "ImageScaleAxesIndependently";
    NSImageScaling2[NSImageScaling2["ImageScaleNone"] = 2] = "ImageScaleNone";
    NSImageScaling2[NSImageScaling2["ImageScaleProportionallyUpOrDown"] = 3] = "ImageScaleProportionallyUpOrDown";
    NSImageScaling2[NSImageScaling2["ScaleProportionally"] = 0] = "ScaleProportionally";
    NSImageScaling2[NSImageScaling2["ScaleToFit"] = 1] = "ScaleToFit";
    NSImageScaling2[NSImageScaling2["ScaleNone"] = 2] = "ScaleNone";
  })(NSImageScaling$1 || (NSImageScaling$1 = {}));
  global$2["NSImageScaling"] = NSImageScaling$1;
  var NSLineBreakMode$1;
  (function(NSLineBreakMode2) {
    NSLineBreakMode2[NSLineBreakMode2["ByWordWrapping"] = 0] = "ByWordWrapping";
    NSLineBreakMode2[NSLineBreakMode2["ByCharWrapping"] = 1] = "ByCharWrapping";
    NSLineBreakMode2[NSLineBreakMode2["ByClipping"] = 2] = "ByClipping";
    NSLineBreakMode2[NSLineBreakMode2["ByTruncatingHead"] = 3] = "ByTruncatingHead";
    NSLineBreakMode2[NSLineBreakMode2["ByTruncatingTail"] = 4] = "ByTruncatingTail";
    NSLineBreakMode2[NSLineBreakMode2["ByTruncatingMiddle"] = 5] = "ByTruncatingMiddle";
  })(NSLineBreakMode$1 || (NSLineBreakMode$1 = {}));
  global$2["NSLineBreakMode"] = NSLineBreakMode$1;
  var NSLineMovementDirection;
  (function(NSLineMovementDirection2) {
    NSLineMovementDirection2[NSLineMovementDirection2["DoesntMove"] = 0] = "DoesntMove";
    NSLineMovementDirection2[NSLineMovementDirection2["MovesLeft"] = 1] = "MovesLeft";
    NSLineMovementDirection2[NSLineMovementDirection2["MovesRight"] = 2] = "MovesRight";
    NSLineMovementDirection2[NSLineMovementDirection2["MovesDown"] = 3] = "MovesDown";
    NSLineMovementDirection2[NSLineMovementDirection2["MovesUp"] = 4] = "MovesUp";
  })(NSLineMovementDirection || (NSLineMovementDirection = {}));
  global$2["NSLineMovementDirection"] = NSLineMovementDirection;
  var NSLineSweepDirection;
  (function(NSLineSweepDirection2) {
    NSLineSweepDirection2[NSLineSweepDirection2["Left"] = 0] = "Left";
    NSLineSweepDirection2[NSLineSweepDirection2["Right"] = 1] = "Right";
    NSLineSweepDirection2[NSLineSweepDirection2["Down"] = 2] = "Down";
    NSLineSweepDirection2[NSLineSweepDirection2["Up"] = 3] = "Up";
  })(NSLineSweepDirection || (NSLineSweepDirection = {}));
  global$2["NSLineSweepDirection"] = NSLineSweepDirection;
  var NSRectAlignment;
  (function(NSRectAlignment2) {
    NSRectAlignment2[NSRectAlignment2["None"] = 0] = "None";
    NSRectAlignment2[NSRectAlignment2["Top"] = 1] = "Top";
    NSRectAlignment2[NSRectAlignment2["TopLeading"] = 2] = "TopLeading";
    NSRectAlignment2[NSRectAlignment2["Leading"] = 3] = "Leading";
    NSRectAlignment2[NSRectAlignment2["BottomLeading"] = 4] = "BottomLeading";
    NSRectAlignment2[NSRectAlignment2["Bottom"] = 5] = "Bottom";
    NSRectAlignment2[NSRectAlignment2["BottomTrailing"] = 6] = "BottomTrailing";
    NSRectAlignment2[NSRectAlignment2["Trailing"] = 7] = "Trailing";
    NSRectAlignment2[NSRectAlignment2["TopTrailing"] = 8] = "TopTrailing";
  })(NSRectAlignment || (NSRectAlignment = {}));
  global$2["NSRectAlignment"] = NSRectAlignment;
  var NSSelectionAffinity;
  (function(NSSelectionAffinity2) {
    NSSelectionAffinity2[NSSelectionAffinity2["Upstream"] = 0] = "Upstream";
    NSSelectionAffinity2[NSSelectionAffinity2["Downstream"] = 1] = "Downstream";
  })(NSSelectionAffinity || (NSSelectionAffinity = {}));
  global$2["NSSelectionAffinity"] = NSSelectionAffinity;
  var NSSelectionGranularity$1;
  (function(NSSelectionGranularity2) {
    NSSelectionGranularity2[NSSelectionGranularity2["ByCharacter"] = 0] = "ByCharacter";
    NSSelectionGranularity2[NSSelectionGranularity2["ByWord"] = 1] = "ByWord";
    NSSelectionGranularity2[NSSelectionGranularity2["ByParagraph"] = 2] = "ByParagraph";
  })(NSSelectionGranularity$1 || (NSSelectionGranularity$1 = {}));
  global$2["NSSelectionGranularity"] = NSSelectionGranularity$1;
  var NSSpringLoadingHighlight;
  (function(NSSpringLoadingHighlight2) {
    NSSpringLoadingHighlight2[NSSpringLoadingHighlight2["None"] = 0] = "None";
    NSSpringLoadingHighlight2[NSSpringLoadingHighlight2["Standard"] = 1] = "Standard";
    NSSpringLoadingHighlight2[NSSpringLoadingHighlight2["Emphasized"] = 2] = "Emphasized";
  })(NSSpringLoadingHighlight || (NSSpringLoadingHighlight = {}));
  global$2["NSSpringLoadingHighlight"] = NSSpringLoadingHighlight;
  (function(NSSpringLoadingOptions2) {
    NSSpringLoadingOptions2[NSSpringLoadingOptions2["Disabled"] = 0] = "Disabled";
    NSSpringLoadingOptions2[NSSpringLoadingOptions2["Enabled"] = 1] = "Enabled";
    NSSpringLoadingOptions2[NSSpringLoadingOptions2["ContinuousActivation"] = 2] = "ContinuousActivation";
    NSSpringLoadingOptions2[NSSpringLoadingOptions2["NoHover"] = 8] = "NoHover";
  })(NSSpringLoadingOptions || (NSSpringLoadingOptions = {}));
  global$2["NSSpringLoadingOptions"] = NSSpringLoadingOptions;
  var NSTextAlignment$1;
  (function(NSTextAlignment2) {
    NSTextAlignment2[NSTextAlignment2["Left"] = 0] = "Left";
    NSTextAlignment2[NSTextAlignment2["Right"] = 1] = "Right";
    NSTextAlignment2[NSTextAlignment2["Center"] = 2] = "Center";
    NSTextAlignment2[NSTextAlignment2["Justified"] = 3] = "Justified";
    NSTextAlignment2[NSTextAlignment2["Natural"] = 4] = "Natural";
  })(NSTextAlignment$1 || (NSTextAlignment$1 = {}));
  global$2["NSTextAlignment"] = NSTextAlignment$1;
  var NSTextInputTraitType;
  (function(NSTextInputTraitType2) {
    NSTextInputTraitType2[NSTextInputTraitType2["Default"] = 0] = "Default";
    NSTextInputTraitType2[NSTextInputTraitType2["No"] = 1] = "No";
    NSTextInputTraitType2[NSTextInputTraitType2["Yes"] = 2] = "Yes";
  })(NSTextInputTraitType || (NSTextInputTraitType = {}));
  global$2["NSTextInputTraitType"] = NSTextInputTraitType;
  var NSTextMovement;
  (function(NSTextMovement2) {
    NSTextMovement2[NSTextMovement2["Return"] = 16] = "Return";
    NSTextMovement2[NSTextMovement2["Tab"] = 17] = "Tab";
    NSTextMovement2[NSTextMovement2["Backtab"] = 18] = "Backtab";
    NSTextMovement2[NSTextMovement2["Left"] = 19] = "Left";
    NSTextMovement2[NSTextMovement2["Right"] = 20] = "Right";
    NSTextMovement2[NSTextMovement2["Up"] = 21] = "Up";
    NSTextMovement2[NSTextMovement2["Down"] = 22] = "Down";
    NSTextMovement2[NSTextMovement2["Cancel"] = 23] = "Cancel";
    NSTextMovement2[NSTextMovement2["Other"] = 0] = "Other";
  })(NSTextMovement || (NSTextMovement = {}));
  global$2["NSTextMovement"] = NSTextMovement;
  var NSTextScalingType;
  (function(NSTextScalingType2) {
    NSTextScalingType2[NSTextScalingType2["Standard"] = 0] = "Standard";
    NSTextScalingType2[NSTextScalingType2["iOS"] = 1] = "iOS";
  })(NSTextScalingType || (NSTextScalingType = {}));
  global$2["NSTextScalingType"] = NSTextScalingType;
  (function(NSTextStorageEditActions2) {
    NSTextStorageEditActions2[NSTextStorageEditActions2["EditedAttributes"] = 1] = "EditedAttributes";
    NSTextStorageEditActions2[NSTextStorageEditActions2["EditedCharacters"] = 2] = "EditedCharacters";
  })(NSTextStorageEditActions || (NSTextStorageEditActions = {}));
  global$2["NSTextStorageEditActions"] = NSTextStorageEditActions;
  (function(NSTypesetterControlCharacterAction2) {
    NSTypesetterControlCharacterAction2[NSTypesetterControlCharacterAction2["ZeroAdvancementAction"] = 1] = "ZeroAdvancementAction";
    NSTypesetterControlCharacterAction2[NSTypesetterControlCharacterAction2["WhitespaceAction"] = 2] = "WhitespaceAction";
    NSTypesetterControlCharacterAction2[NSTypesetterControlCharacterAction2["HorizontalTabAction"] = 4] = "HorizontalTabAction";
    NSTypesetterControlCharacterAction2[NSTypesetterControlCharacterAction2["LineBreakAction"] = 8] = "LineBreakAction";
    NSTypesetterControlCharacterAction2[NSTypesetterControlCharacterAction2["ParagraphBreakAction"] = 16] = "ParagraphBreakAction";
    NSTypesetterControlCharacterAction2[NSTypesetterControlCharacterAction2["ContainerBreakAction"] = 32] = "ContainerBreakAction";
  })(NSTypesetterControlCharacterAction || (NSTypesetterControlCharacterAction = {}));
  global$2["NSTypesetterControlCharacterAction"] = NSTypesetterControlCharacterAction;
  (function(NSUnderlineStyle2) {
    NSUnderlineStyle2[NSUnderlineStyle2["None"] = 0] = "None";
    NSUnderlineStyle2[NSUnderlineStyle2["Single"] = 1] = "Single";
    NSUnderlineStyle2[NSUnderlineStyle2["Thick"] = 2] = "Thick";
    NSUnderlineStyle2[NSUnderlineStyle2["Double"] = 9] = "Double";
    NSUnderlineStyle2[NSUnderlineStyle2["PatternSolid"] = 0] = "PatternSolid";
    NSUnderlineStyle2[NSUnderlineStyle2["PatternDot"] = 256] = "PatternDot";
    NSUnderlineStyle2[NSUnderlineStyle2["PatternDash"] = 512] = "PatternDash";
    NSUnderlineStyle2[NSUnderlineStyle2["PatternDashDot"] = 768] = "PatternDashDot";
    NSUnderlineStyle2[NSUnderlineStyle2["PatternDashDotDot"] = 1024] = "PatternDashDotDot";
    NSUnderlineStyle2[NSUnderlineStyle2["ByWord"] = 32768] = "ByWord";
  })(NSUnderlineStyle || (NSUnderlineStyle = {}));
  global$2["NSUnderlineStyle"] = NSUnderlineStyle;
  var NSUserInterfaceLayoutDirection;
  (function(NSUserInterfaceLayoutDirection2) {
    NSUserInterfaceLayoutDirection2[NSUserInterfaceLayoutDirection2["LeftToRight"] = 0] = "LeftToRight";
    NSUserInterfaceLayoutDirection2[NSUserInterfaceLayoutDirection2["RightToLeft"] = 1] = "RightToLeft";
  })(NSUserInterfaceLayoutDirection || (NSUserInterfaceLayoutDirection = {}));
  global$2["NSUserInterfaceLayoutDirection"] = NSUserInterfaceLayoutDirection;
  var NSUserInterfaceLayoutOrientation$1;
  (function(NSUserInterfaceLayoutOrientation2) {
    NSUserInterfaceLayoutOrientation2[NSUserInterfaceLayoutOrientation2["Horizontal"] = 0] = "Horizontal";
    NSUserInterfaceLayoutOrientation2[NSUserInterfaceLayoutOrientation2["Vertical"] = 1] = "Vertical";
  })(NSUserInterfaceLayoutOrientation$1 || (NSUserInterfaceLayoutOrientation$1 = {}));
  global$2["NSUserInterfaceLayoutOrientation"] = NSUserInterfaceLayoutOrientation$1;
  var NSWritingDirection$1;
  (function(NSWritingDirection2) {
    NSWritingDirection2[NSWritingDirection2["Natural"] = -1] = "Natural";
    NSWritingDirection2[NSWritingDirection2["LeftToRight"] = 0] = "LeftToRight";
    NSWritingDirection2[NSWritingDirection2["RightToLeft"] = 1] = "RightToLeft";
  })(NSWritingDirection$1 || (NSWritingDirection$1 = {}));
  global$2["NSWritingDirection"] = NSWritingDirection$1;
  var NSWritingDirectionFormatType;
  (function(NSWritingDirectionFormatType2) {
    NSWritingDirectionFormatType2[NSWritingDirectionFormatType2["Embedding"] = 0] = "Embedding";
    NSWritingDirectionFormatType2[NSWritingDirectionFormatType2["Override"] = 2] = "Override";
  })(NSWritingDirectionFormatType || (NSWritingDirectionFormatType = {}));
  global$2["NSWritingDirectionFormatType"] = NSWritingDirectionFormatType;
  (function(CFCalendarUnit2) {
    CFCalendarUnit2[CFCalendarUnit2["kCFCalendarUnitEra"] = 2] = "kCFCalendarUnitEra";
    CFCalendarUnit2[CFCalendarUnit2["kCFCalendarUnitYear"] = 4] = "kCFCalendarUnitYear";
    CFCalendarUnit2[CFCalendarUnit2["kCFCalendarUnitMonth"] = 8] = "kCFCalendarUnitMonth";
    CFCalendarUnit2[CFCalendarUnit2["kCFCalendarUnitDay"] = 16] = "kCFCalendarUnitDay";
    CFCalendarUnit2[CFCalendarUnit2["kCFCalendarUnitHour"] = 32] = "kCFCalendarUnitHour";
    CFCalendarUnit2[CFCalendarUnit2["kCFCalendarUnitMinute"] = 64] = "kCFCalendarUnitMinute";
    CFCalendarUnit2[CFCalendarUnit2["kCFCalendarUnitSecond"] = 128] = "kCFCalendarUnitSecond";
    CFCalendarUnit2[CFCalendarUnit2["kCFCalendarUnitWeek"] = 256] = "kCFCalendarUnitWeek";
    CFCalendarUnit2[CFCalendarUnit2["kCFCalendarUnitWeekday"] = 512] = "kCFCalendarUnitWeekday";
    CFCalendarUnit2[CFCalendarUnit2["kCFCalendarUnitWeekdayOrdinal"] = 1024] = "kCFCalendarUnitWeekdayOrdinal";
    CFCalendarUnit2[CFCalendarUnit2["kCFCalendarUnitQuarter"] = 2048] = "kCFCalendarUnitQuarter";
    CFCalendarUnit2[CFCalendarUnit2["kCFCalendarUnitWeekOfMonth"] = 4096] = "kCFCalendarUnitWeekOfMonth";
    CFCalendarUnit2[CFCalendarUnit2["kCFCalendarUnitWeekOfYear"] = 8192] = "kCFCalendarUnitWeekOfYear";
    CFCalendarUnit2[CFCalendarUnit2["kCFCalendarUnitYearForWeekOfYear"] = 16384] = "kCFCalendarUnitYearForWeekOfYear";
  })(CFCalendarUnit || (CFCalendarUnit = {}));
  global$2["CFCalendarUnit"] = CFCalendarUnit;
  var CFCharacterSetPredefinedSet;
  (function(CFCharacterSetPredefinedSet2) {
    CFCharacterSetPredefinedSet2[CFCharacterSetPredefinedSet2["kCFCharacterSetControl"] = 1] = "kCFCharacterSetControl";
    CFCharacterSetPredefinedSet2[CFCharacterSetPredefinedSet2["kCFCharacterSetWhitespace"] = 2] = "kCFCharacterSetWhitespace";
    CFCharacterSetPredefinedSet2[CFCharacterSetPredefinedSet2["kCFCharacterSetWhitespaceAndNewline"] = 3] = "kCFCharacterSetWhitespaceAndNewline";
    CFCharacterSetPredefinedSet2[CFCharacterSetPredefinedSet2["kCFCharacterSetDecimalDigit"] = 4] = "kCFCharacterSetDecimalDigit";
    CFCharacterSetPredefinedSet2[CFCharacterSetPredefinedSet2["kCFCharacterSetLetter"] = 5] = "kCFCharacterSetLetter";
    CFCharacterSetPredefinedSet2[CFCharacterSetPredefinedSet2["kCFCharacterSetLowercaseLetter"] = 6] = "kCFCharacterSetLowercaseLetter";
    CFCharacterSetPredefinedSet2[CFCharacterSetPredefinedSet2["kCFCharacterSetUppercaseLetter"] = 7] = "kCFCharacterSetUppercaseLetter";
    CFCharacterSetPredefinedSet2[CFCharacterSetPredefinedSet2["kCFCharacterSetNonBase"] = 8] = "kCFCharacterSetNonBase";
    CFCharacterSetPredefinedSet2[CFCharacterSetPredefinedSet2["kCFCharacterSetDecomposable"] = 9] = "kCFCharacterSetDecomposable";
    CFCharacterSetPredefinedSet2[CFCharacterSetPredefinedSet2["kCFCharacterSetAlphaNumeric"] = 10] = "kCFCharacterSetAlphaNumeric";
    CFCharacterSetPredefinedSet2[CFCharacterSetPredefinedSet2["kCFCharacterSetPunctuation"] = 11] = "kCFCharacterSetPunctuation";
    CFCharacterSetPredefinedSet2[CFCharacterSetPredefinedSet2["kCFCharacterSetCapitalizedLetter"] = 13] = "kCFCharacterSetCapitalizedLetter";
    CFCharacterSetPredefinedSet2[CFCharacterSetPredefinedSet2["kCFCharacterSetSymbol"] = 14] = "kCFCharacterSetSymbol";
    CFCharacterSetPredefinedSet2[CFCharacterSetPredefinedSet2["kCFCharacterSetNewline"] = 15] = "kCFCharacterSetNewline";
    CFCharacterSetPredefinedSet2[CFCharacterSetPredefinedSet2["kCFCharacterSetIllegal"] = 12] = "kCFCharacterSetIllegal";
  })(CFCharacterSetPredefinedSet || (CFCharacterSetPredefinedSet = {}));
  global$2["CFCharacterSetPredefinedSet"] = CFCharacterSetPredefinedSet;
  var CFComparisonResult;
  (function(CFComparisonResult2) {
    CFComparisonResult2[CFComparisonResult2["kCFCompareLessThan"] = -1] = "kCFCompareLessThan";
    CFComparisonResult2[CFComparisonResult2["kCFCompareEqualTo"] = 0] = "kCFCompareEqualTo";
    CFComparisonResult2[CFComparisonResult2["kCFCompareGreaterThan"] = 1] = "kCFCompareGreaterThan";
  })(CFComparisonResult || (CFComparisonResult = {}));
  global$2["CFComparisonResult"] = CFComparisonResult;
  (function(CFDataSearchFlags2) {
    CFDataSearchFlags2[CFDataSearchFlags2["kCFDataSearchBackwards"] = 1] = "kCFDataSearchBackwards";
    CFDataSearchFlags2[CFDataSearchFlags2["kCFDataSearchAnchored"] = 2] = "kCFDataSearchAnchored";
  })(CFDataSearchFlags || (CFDataSearchFlags = {}));
  global$2["CFDataSearchFlags"] = CFDataSearchFlags;
  var CFDateFormatterStyle;
  (function(CFDateFormatterStyle2) {
    CFDateFormatterStyle2[CFDateFormatterStyle2["kCFDateFormatterNoStyle"] = 0] = "kCFDateFormatterNoStyle";
    CFDateFormatterStyle2[CFDateFormatterStyle2["kCFDateFormatterShortStyle"] = 1] = "kCFDateFormatterShortStyle";
    CFDateFormatterStyle2[CFDateFormatterStyle2["kCFDateFormatterMediumStyle"] = 2] = "kCFDateFormatterMediumStyle";
    CFDateFormatterStyle2[CFDateFormatterStyle2["kCFDateFormatterLongStyle"] = 3] = "kCFDateFormatterLongStyle";
    CFDateFormatterStyle2[CFDateFormatterStyle2["kCFDateFormatterFullStyle"] = 4] = "kCFDateFormatterFullStyle";
  })(CFDateFormatterStyle || (CFDateFormatterStyle = {}));
  global$2["CFDateFormatterStyle"] = CFDateFormatterStyle;
  (function(CFFileSecurityClearOptions2) {
    CFFileSecurityClearOptions2[CFFileSecurityClearOptions2["kCFFileSecurityClearOwner"] = 1] = "kCFFileSecurityClearOwner";
    CFFileSecurityClearOptions2[CFFileSecurityClearOptions2["kCFFileSecurityClearGroup"] = 2] = "kCFFileSecurityClearGroup";
    CFFileSecurityClearOptions2[CFFileSecurityClearOptions2["kCFFileSecurityClearMode"] = 4] = "kCFFileSecurityClearMode";
    CFFileSecurityClearOptions2[CFFileSecurityClearOptions2["kCFFileSecurityClearOwnerUUID"] = 8] = "kCFFileSecurityClearOwnerUUID";
    CFFileSecurityClearOptions2[CFFileSecurityClearOptions2["kCFFileSecurityClearGroupUUID"] = 16] = "kCFFileSecurityClearGroupUUID";
    CFFileSecurityClearOptions2[CFFileSecurityClearOptions2["kCFFileSecurityClearAccessControlList"] = 32] = "kCFFileSecurityClearAccessControlList";
  })(CFFileSecurityClearOptions || (CFFileSecurityClearOptions = {}));
  global$2["CFFileSecurityClearOptions"] = CFFileSecurityClearOptions;
  (function(CFGregorianUnitFlags2) {
    CFGregorianUnitFlags2[CFGregorianUnitFlags2["kCFGregorianUnitsYears"] = 1] = "kCFGregorianUnitsYears";
    CFGregorianUnitFlags2[CFGregorianUnitFlags2["kCFGregorianUnitsMonths"] = 2] = "kCFGregorianUnitsMonths";
    CFGregorianUnitFlags2[CFGregorianUnitFlags2["kCFGregorianUnitsDays"] = 4] = "kCFGregorianUnitsDays";
    CFGregorianUnitFlags2[CFGregorianUnitFlags2["kCFGregorianUnitsHours"] = 8] = "kCFGregorianUnitsHours";
    CFGregorianUnitFlags2[CFGregorianUnitFlags2["kCFGregorianUnitsMinutes"] = 16] = "kCFGregorianUnitsMinutes";
    CFGregorianUnitFlags2[CFGregorianUnitFlags2["kCFGregorianUnitsSeconds"] = 32] = "kCFGregorianUnitsSeconds";
    CFGregorianUnitFlags2[CFGregorianUnitFlags2["kCFGregorianAllUnits"] = 16777215] = "kCFGregorianAllUnits";
  })(CFGregorianUnitFlags || (CFGregorianUnitFlags = {}));
  global$2["CFGregorianUnitFlags"] = CFGregorianUnitFlags;
  (function(CFISO8601DateFormatOptions2) {
    CFISO8601DateFormatOptions2[CFISO8601DateFormatOptions2["kCFISO8601DateFormatWithYear"] = 1] = "kCFISO8601DateFormatWithYear";
    CFISO8601DateFormatOptions2[CFISO8601DateFormatOptions2["kCFISO8601DateFormatWithMonth"] = 2] = "kCFISO8601DateFormatWithMonth";
    CFISO8601DateFormatOptions2[CFISO8601DateFormatOptions2["kCFISO8601DateFormatWithWeekOfYear"] = 4] = "kCFISO8601DateFormatWithWeekOfYear";
    CFISO8601DateFormatOptions2[CFISO8601DateFormatOptions2["kCFISO8601DateFormatWithDay"] = 16] = "kCFISO8601DateFormatWithDay";
    CFISO8601DateFormatOptions2[CFISO8601DateFormatOptions2["kCFISO8601DateFormatWithTime"] = 32] = "kCFISO8601DateFormatWithTime";
    CFISO8601DateFormatOptions2[CFISO8601DateFormatOptions2["kCFISO8601DateFormatWithTimeZone"] = 64] = "kCFISO8601DateFormatWithTimeZone";
    CFISO8601DateFormatOptions2[CFISO8601DateFormatOptions2["kCFISO8601DateFormatWithSpaceBetweenDateAndTime"] = 128] = "kCFISO8601DateFormatWithSpaceBetweenDateAndTime";
    CFISO8601DateFormatOptions2[CFISO8601DateFormatOptions2["kCFISO8601DateFormatWithDashSeparatorInDate"] = 256] = "kCFISO8601DateFormatWithDashSeparatorInDate";
    CFISO8601DateFormatOptions2[CFISO8601DateFormatOptions2["kCFISO8601DateFormatWithColonSeparatorInTime"] = 512] = "kCFISO8601DateFormatWithColonSeparatorInTime";
    CFISO8601DateFormatOptions2[CFISO8601DateFormatOptions2["kCFISO8601DateFormatWithColonSeparatorInTimeZone"] = 1024] = "kCFISO8601DateFormatWithColonSeparatorInTimeZone";
    CFISO8601DateFormatOptions2[CFISO8601DateFormatOptions2["kCFISO8601DateFormatWithFractionalSeconds"] = 2048] = "kCFISO8601DateFormatWithFractionalSeconds";
    CFISO8601DateFormatOptions2[CFISO8601DateFormatOptions2["kCFISO8601DateFormatWithFullDate"] = 275] = "kCFISO8601DateFormatWithFullDate";
    CFISO8601DateFormatOptions2[CFISO8601DateFormatOptions2["kCFISO8601DateFormatWithFullTime"] = 1632] = "kCFISO8601DateFormatWithFullTime";
    CFISO8601DateFormatOptions2[CFISO8601DateFormatOptions2["kCFISO8601DateFormatWithInternetDateTime"] = 1907] = "kCFISO8601DateFormatWithInternetDateTime";
  })(CFISO8601DateFormatOptions || (CFISO8601DateFormatOptions = {}));
  global$2["CFISO8601DateFormatOptions"] = CFISO8601DateFormatOptions;
  var CFLocaleLanguageDirection;
  (function(CFLocaleLanguageDirection2) {
    CFLocaleLanguageDirection2[CFLocaleLanguageDirection2["kCFLocaleLanguageDirectionUnknown"] = 0] = "kCFLocaleLanguageDirectionUnknown";
    CFLocaleLanguageDirection2[CFLocaleLanguageDirection2["kCFLocaleLanguageDirectionLeftToRight"] = 1] = "kCFLocaleLanguageDirectionLeftToRight";
    CFLocaleLanguageDirection2[CFLocaleLanguageDirection2["kCFLocaleLanguageDirectionRightToLeft"] = 2] = "kCFLocaleLanguageDirectionRightToLeft";
    CFLocaleLanguageDirection2[CFLocaleLanguageDirection2["kCFLocaleLanguageDirectionTopToBottom"] = 3] = "kCFLocaleLanguageDirectionTopToBottom";
    CFLocaleLanguageDirection2[CFLocaleLanguageDirection2["kCFLocaleLanguageDirectionBottomToTop"] = 4] = "kCFLocaleLanguageDirectionBottomToTop";
  })(CFLocaleLanguageDirection || (CFLocaleLanguageDirection = {}));
  global$2["CFLocaleLanguageDirection"] = CFLocaleLanguageDirection;
  var CFNotificationSuspensionBehavior;
  (function(CFNotificationSuspensionBehavior2) {
    CFNotificationSuspensionBehavior2[CFNotificationSuspensionBehavior2["Drop"] = 1] = "Drop";
    CFNotificationSuspensionBehavior2[CFNotificationSuspensionBehavior2["Coalesce"] = 2] = "Coalesce";
    CFNotificationSuspensionBehavior2[CFNotificationSuspensionBehavior2["Hold"] = 3] = "Hold";
    CFNotificationSuspensionBehavior2[CFNotificationSuspensionBehavior2["DeliverImmediately"] = 4] = "DeliverImmediately";
  })(CFNotificationSuspensionBehavior || (CFNotificationSuspensionBehavior = {}));
  global$2["CFNotificationSuspensionBehavior"] = CFNotificationSuspensionBehavior;
  (function(CFNumberFormatterOptionFlags2) {
    CFNumberFormatterOptionFlags2[CFNumberFormatterOptionFlags2["kCFNumberFormatterParseIntegersOnly"] = 1] = "kCFNumberFormatterParseIntegersOnly";
  })(CFNumberFormatterOptionFlags || (CFNumberFormatterOptionFlags = {}));
  global$2["CFNumberFormatterOptionFlags"] = CFNumberFormatterOptionFlags;
  var CFNumberFormatterPadPosition;
  (function(CFNumberFormatterPadPosition2) {
    CFNumberFormatterPadPosition2[CFNumberFormatterPadPosition2["kCFNumberFormatterPadBeforePrefix"] = 0] = "kCFNumberFormatterPadBeforePrefix";
    CFNumberFormatterPadPosition2[CFNumberFormatterPadPosition2["kCFNumberFormatterPadAfterPrefix"] = 1] = "kCFNumberFormatterPadAfterPrefix";
    CFNumberFormatterPadPosition2[CFNumberFormatterPadPosition2["kCFNumberFormatterPadBeforeSuffix"] = 2] = "kCFNumberFormatterPadBeforeSuffix";
    CFNumberFormatterPadPosition2[CFNumberFormatterPadPosition2["kCFNumberFormatterPadAfterSuffix"] = 3] = "kCFNumberFormatterPadAfterSuffix";
  })(CFNumberFormatterPadPosition || (CFNumberFormatterPadPosition = {}));
  global$2["CFNumberFormatterPadPosition"] = CFNumberFormatterPadPosition;
  var CFNumberFormatterRoundingMode;
  (function(CFNumberFormatterRoundingMode2) {
    CFNumberFormatterRoundingMode2[CFNumberFormatterRoundingMode2["kCFNumberFormatterRoundCeiling"] = 0] = "kCFNumberFormatterRoundCeiling";
    CFNumberFormatterRoundingMode2[CFNumberFormatterRoundingMode2["kCFNumberFormatterRoundFloor"] = 1] = "kCFNumberFormatterRoundFloor";
    CFNumberFormatterRoundingMode2[CFNumberFormatterRoundingMode2["kCFNumberFormatterRoundDown"] = 2] = "kCFNumberFormatterRoundDown";
    CFNumberFormatterRoundingMode2[CFNumberFormatterRoundingMode2["kCFNumberFormatterRoundUp"] = 3] = "kCFNumberFormatterRoundUp";
    CFNumberFormatterRoundingMode2[CFNumberFormatterRoundingMode2["kCFNumberFormatterRoundHalfEven"] = 4] = "kCFNumberFormatterRoundHalfEven";
    CFNumberFormatterRoundingMode2[CFNumberFormatterRoundingMode2["kCFNumberFormatterRoundHalfDown"] = 5] = "kCFNumberFormatterRoundHalfDown";
    CFNumberFormatterRoundingMode2[CFNumberFormatterRoundingMode2["kCFNumberFormatterRoundHalfUp"] = 6] = "kCFNumberFormatterRoundHalfUp";
  })(CFNumberFormatterRoundingMode || (CFNumberFormatterRoundingMode = {}));
  global$2["CFNumberFormatterRoundingMode"] = CFNumberFormatterRoundingMode;
  var CFNumberFormatterStyle;
  (function(CFNumberFormatterStyle2) {
    CFNumberFormatterStyle2[CFNumberFormatterStyle2["kCFNumberFormatterNoStyle"] = 0] = "kCFNumberFormatterNoStyle";
    CFNumberFormatterStyle2[CFNumberFormatterStyle2["kCFNumberFormatterDecimalStyle"] = 1] = "kCFNumberFormatterDecimalStyle";
    CFNumberFormatterStyle2[CFNumberFormatterStyle2["kCFNumberFormatterCurrencyStyle"] = 2] = "kCFNumberFormatterCurrencyStyle";
    CFNumberFormatterStyle2[CFNumberFormatterStyle2["kCFNumberFormatterPercentStyle"] = 3] = "kCFNumberFormatterPercentStyle";
    CFNumberFormatterStyle2[CFNumberFormatterStyle2["kCFNumberFormatterScientificStyle"] = 4] = "kCFNumberFormatterScientificStyle";
    CFNumberFormatterStyle2[CFNumberFormatterStyle2["kCFNumberFormatterSpellOutStyle"] = 5] = "kCFNumberFormatterSpellOutStyle";
    CFNumberFormatterStyle2[CFNumberFormatterStyle2["kCFNumberFormatterOrdinalStyle"] = 6] = "kCFNumberFormatterOrdinalStyle";
    CFNumberFormatterStyle2[CFNumberFormatterStyle2["kCFNumberFormatterCurrencyISOCodeStyle"] = 8] = "kCFNumberFormatterCurrencyISOCodeStyle";
    CFNumberFormatterStyle2[CFNumberFormatterStyle2["kCFNumberFormatterCurrencyPluralStyle"] = 9] = "kCFNumberFormatterCurrencyPluralStyle";
    CFNumberFormatterStyle2[CFNumberFormatterStyle2["kCFNumberFormatterCurrencyAccountingStyle"] = 10] = "kCFNumberFormatterCurrencyAccountingStyle";
  })(CFNumberFormatterStyle || (CFNumberFormatterStyle = {}));
  global$2["CFNumberFormatterStyle"] = CFNumberFormatterStyle;
  var CFNumberType;
  (function(CFNumberType2) {
    CFNumberType2[CFNumberType2["kCFNumberSInt8Type"] = 1] = "kCFNumberSInt8Type";
    CFNumberType2[CFNumberType2["kCFNumberSInt16Type"] = 2] = "kCFNumberSInt16Type";
    CFNumberType2[CFNumberType2["kCFNumberSInt32Type"] = 3] = "kCFNumberSInt32Type";
    CFNumberType2[CFNumberType2["kCFNumberSInt64Type"] = 4] = "kCFNumberSInt64Type";
    CFNumberType2[CFNumberType2["kCFNumberFloat32Type"] = 5] = "kCFNumberFloat32Type";
    CFNumberType2[CFNumberType2["kCFNumberFloat64Type"] = 6] = "kCFNumberFloat64Type";
    CFNumberType2[CFNumberType2["kCFNumberCharType"] = 7] = "kCFNumberCharType";
    CFNumberType2[CFNumberType2["kCFNumberShortType"] = 8] = "kCFNumberShortType";
    CFNumberType2[CFNumberType2["kCFNumberIntType"] = 9] = "kCFNumberIntType";
    CFNumberType2[CFNumberType2["kCFNumberLongType"] = 10] = "kCFNumberLongType";
    CFNumberType2[CFNumberType2["kCFNumberLongLongType"] = 11] = "kCFNumberLongLongType";
    CFNumberType2[CFNumberType2["kCFNumberFloatType"] = 12] = "kCFNumberFloatType";
    CFNumberType2[CFNumberType2["kCFNumberDoubleType"] = 13] = "kCFNumberDoubleType";
    CFNumberType2[CFNumberType2["kCFNumberCFIndexType"] = 14] = "kCFNumberCFIndexType";
    CFNumberType2[CFNumberType2["kCFNumberNSIntegerType"] = 15] = "kCFNumberNSIntegerType";
    CFNumberType2[CFNumberType2["kCFNumberCGFloatType"] = 16] = "kCFNumberCGFloatType";
    CFNumberType2[CFNumberType2["kCFNumberMaxType"] = 16] = "kCFNumberMaxType";
  })(CFNumberType || (CFNumberType = {}));
  global$2["CFNumberType"] = CFNumberType;
  var CFPropertyListFormat;
  (function(CFPropertyListFormat2) {
    CFPropertyListFormat2[CFPropertyListFormat2["kCFPropertyListOpenStepFormat"] = 1] = "kCFPropertyListOpenStepFormat";
    CFPropertyListFormat2[CFPropertyListFormat2["kCFPropertyListXMLFormat_v1_0"] = 100] = "kCFPropertyListXMLFormat_v1_0";
    CFPropertyListFormat2[CFPropertyListFormat2["kCFPropertyListBinaryFormat_v1_0"] = 200] = "kCFPropertyListBinaryFormat_v1_0";
  })(CFPropertyListFormat || (CFPropertyListFormat = {}));
  global$2["CFPropertyListFormat"] = CFPropertyListFormat;
  (function(CFPropertyListMutabilityOptions2) {
    CFPropertyListMutabilityOptions2[CFPropertyListMutabilityOptions2["kCFPropertyListImmutable"] = 0] = "kCFPropertyListImmutable";
    CFPropertyListMutabilityOptions2[CFPropertyListMutabilityOptions2["kCFPropertyListMutableContainers"] = 1] = "kCFPropertyListMutableContainers";
    CFPropertyListMutabilityOptions2[CFPropertyListMutabilityOptions2["kCFPropertyListMutableContainersAndLeaves"] = 2] = "kCFPropertyListMutableContainersAndLeaves";
  })(CFPropertyListMutabilityOptions || (CFPropertyListMutabilityOptions = {}));
  global$2["CFPropertyListMutabilityOptions"] = CFPropertyListMutabilityOptions;
  (function(CFRunLoopActivity2) {
    CFRunLoopActivity2[CFRunLoopActivity2["kCFRunLoopEntry"] = 1] = "kCFRunLoopEntry";
    CFRunLoopActivity2[CFRunLoopActivity2["kCFRunLoopBeforeTimers"] = 2] = "kCFRunLoopBeforeTimers";
    CFRunLoopActivity2[CFRunLoopActivity2["kCFRunLoopBeforeSources"] = 4] = "kCFRunLoopBeforeSources";
    CFRunLoopActivity2[CFRunLoopActivity2["kCFRunLoopBeforeWaiting"] = 32] = "kCFRunLoopBeforeWaiting";
    CFRunLoopActivity2[CFRunLoopActivity2["kCFRunLoopAfterWaiting"] = 64] = "kCFRunLoopAfterWaiting";
    CFRunLoopActivity2[CFRunLoopActivity2["kCFRunLoopExit"] = 128] = "kCFRunLoopExit";
    CFRunLoopActivity2[CFRunLoopActivity2["kCFRunLoopAllActivities"] = 268435455] = "kCFRunLoopAllActivities";
  })(CFRunLoopActivity || (CFRunLoopActivity = {}));
  global$2["CFRunLoopActivity"] = CFRunLoopActivity;
  var CFRunLoopRunResult;
  (function(CFRunLoopRunResult2) {
    CFRunLoopRunResult2[CFRunLoopRunResult2["kCFRunLoopRunFinished"] = 1] = "kCFRunLoopRunFinished";
    CFRunLoopRunResult2[CFRunLoopRunResult2["kCFRunLoopRunStopped"] = 2] = "kCFRunLoopRunStopped";
    CFRunLoopRunResult2[CFRunLoopRunResult2["kCFRunLoopRunTimedOut"] = 3] = "kCFRunLoopRunTimedOut";
    CFRunLoopRunResult2[CFRunLoopRunResult2["kCFRunLoopRunHandledSource"] = 4] = "kCFRunLoopRunHandledSource";
  })(CFRunLoopRunResult || (CFRunLoopRunResult = {}));
  global$2["CFRunLoopRunResult"] = CFRunLoopRunResult;
  (function(CFSocketCallBackType2) {
    CFSocketCallBackType2[CFSocketCallBackType2["kCFSocketNoCallBack"] = 0] = "kCFSocketNoCallBack";
    CFSocketCallBackType2[CFSocketCallBackType2["kCFSocketReadCallBack"] = 1] = "kCFSocketReadCallBack";
    CFSocketCallBackType2[CFSocketCallBackType2["kCFSocketAcceptCallBack"] = 2] = "kCFSocketAcceptCallBack";
    CFSocketCallBackType2[CFSocketCallBackType2["kCFSocketDataCallBack"] = 3] = "kCFSocketDataCallBack";
    CFSocketCallBackType2[CFSocketCallBackType2["kCFSocketConnectCallBack"] = 4] = "kCFSocketConnectCallBack";
    CFSocketCallBackType2[CFSocketCallBackType2["kCFSocketWriteCallBack"] = 8] = "kCFSocketWriteCallBack";
  })(CFSocketCallBackType || (CFSocketCallBackType = {}));
  global$2["CFSocketCallBackType"] = CFSocketCallBackType;
  var CFSocketError;
  (function(CFSocketError2) {
    CFSocketError2[CFSocketError2["kCFSocketSuccess"] = 0] = "kCFSocketSuccess";
    CFSocketError2[CFSocketError2["kCFSocketError"] = -1] = "kCFSocketError";
    CFSocketError2[CFSocketError2["kCFSocketTimeout"] = -2] = "kCFSocketTimeout";
  })(CFSocketError || (CFSocketError = {}));
  global$2["CFSocketError"] = CFSocketError;
  var CFStreamErrorDomain;
  (function(CFStreamErrorDomain2) {
    CFStreamErrorDomain2[CFStreamErrorDomain2["kCFStreamErrorDomainCustom"] = -1] = "kCFStreamErrorDomainCustom";
    CFStreamErrorDomain2[CFStreamErrorDomain2["kCFStreamErrorDomainPOSIX"] = 1] = "kCFStreamErrorDomainPOSIX";
    CFStreamErrorDomain2[CFStreamErrorDomain2["kCFStreamErrorDomainMacOSStatus"] = 2] = "kCFStreamErrorDomainMacOSStatus";
  })(CFStreamErrorDomain || (CFStreamErrorDomain = {}));
  global$2["CFStreamErrorDomain"] = CFStreamErrorDomain;
  (function(CFStreamEventType2) {
    CFStreamEventType2[CFStreamEventType2["kCFStreamEventNone"] = 0] = "kCFStreamEventNone";
    CFStreamEventType2[CFStreamEventType2["kCFStreamEventOpenCompleted"] = 1] = "kCFStreamEventOpenCompleted";
    CFStreamEventType2[CFStreamEventType2["kCFStreamEventHasBytesAvailable"] = 2] = "kCFStreamEventHasBytesAvailable";
    CFStreamEventType2[CFStreamEventType2["kCFStreamEventCanAcceptBytes"] = 4] = "kCFStreamEventCanAcceptBytes";
    CFStreamEventType2[CFStreamEventType2["kCFStreamEventErrorOccurred"] = 8] = "kCFStreamEventErrorOccurred";
    CFStreamEventType2[CFStreamEventType2["kCFStreamEventEndEncountered"] = 16] = "kCFStreamEventEndEncountered";
  })(CFStreamEventType || (CFStreamEventType = {}));
  global$2["CFStreamEventType"] = CFStreamEventType;
  var CFStreamStatus;
  (function(CFStreamStatus2) {
    CFStreamStatus2[CFStreamStatus2["kCFStreamStatusNotOpen"] = 0] = "kCFStreamStatusNotOpen";
    CFStreamStatus2[CFStreamStatus2["kCFStreamStatusOpening"] = 1] = "kCFStreamStatusOpening";
    CFStreamStatus2[CFStreamStatus2["kCFStreamStatusOpen"] = 2] = "kCFStreamStatusOpen";
    CFStreamStatus2[CFStreamStatus2["kCFStreamStatusReading"] = 3] = "kCFStreamStatusReading";
    CFStreamStatus2[CFStreamStatus2["kCFStreamStatusWriting"] = 4] = "kCFStreamStatusWriting";
    CFStreamStatus2[CFStreamStatus2["kCFStreamStatusAtEnd"] = 5] = "kCFStreamStatusAtEnd";
    CFStreamStatus2[CFStreamStatus2["kCFStreamStatusClosed"] = 6] = "kCFStreamStatusClosed";
    CFStreamStatus2[CFStreamStatus2["kCFStreamStatusError"] = 7] = "kCFStreamStatusError";
  })(CFStreamStatus || (CFStreamStatus = {}));
  global$2["CFStreamStatus"] = CFStreamStatus;
  var CFStringBuiltInEncodings;
  (function(CFStringBuiltInEncodings2) {
    CFStringBuiltInEncodings2[CFStringBuiltInEncodings2["kCFStringEncodingMacRoman"] = 0] = "kCFStringEncodingMacRoman";
    CFStringBuiltInEncodings2[CFStringBuiltInEncodings2["kCFStringEncodingWindowsLatin1"] = 1280] = "kCFStringEncodingWindowsLatin1";
    CFStringBuiltInEncodings2[CFStringBuiltInEncodings2["kCFStringEncodingISOLatin1"] = 513] = "kCFStringEncodingISOLatin1";
    CFStringBuiltInEncodings2[CFStringBuiltInEncodings2["kCFStringEncodingNextStepLatin"] = 2817] = "kCFStringEncodingNextStepLatin";
    CFStringBuiltInEncodings2[CFStringBuiltInEncodings2["kCFStringEncodingASCII"] = 1536] = "kCFStringEncodingASCII";
    CFStringBuiltInEncodings2[CFStringBuiltInEncodings2["kCFStringEncodingUnicode"] = 256] = "kCFStringEncodingUnicode";
    CFStringBuiltInEncodings2[CFStringBuiltInEncodings2["kCFStringEncodingUTF8"] = 134217984] = "kCFStringEncodingUTF8";
    CFStringBuiltInEncodings2[CFStringBuiltInEncodings2["kCFStringEncodingNonLossyASCII"] = 3071] = "kCFStringEncodingNonLossyASCII";
    CFStringBuiltInEncodings2[CFStringBuiltInEncodings2["kCFStringEncodingUTF16"] = 256] = "kCFStringEncodingUTF16";
    CFStringBuiltInEncodings2[CFStringBuiltInEncodings2["kCFStringEncodingUTF16BE"] = 268435712] = "kCFStringEncodingUTF16BE";
    CFStringBuiltInEncodings2[CFStringBuiltInEncodings2["kCFStringEncodingUTF16LE"] = 335544576] = "kCFStringEncodingUTF16LE";
    CFStringBuiltInEncodings2[CFStringBuiltInEncodings2["kCFStringEncodingUTF32"] = 201326848] = "kCFStringEncodingUTF32";
    CFStringBuiltInEncodings2[CFStringBuiltInEncodings2["kCFStringEncodingUTF32BE"] = 402653440] = "kCFStringEncodingUTF32BE";
    CFStringBuiltInEncodings2[CFStringBuiltInEncodings2["kCFStringEncodingUTF32LE"] = 469762304] = "kCFStringEncodingUTF32LE";
  })(CFStringBuiltInEncodings || (CFStringBuiltInEncodings = {}));
  global$2["CFStringBuiltInEncodings"] = CFStringBuiltInEncodings;
  (function(CFStringCompareFlags2) {
    CFStringCompareFlags2[CFStringCompareFlags2["kCFCompareCaseInsensitive"] = 1] = "kCFCompareCaseInsensitive";
    CFStringCompareFlags2[CFStringCompareFlags2["kCFCompareBackwards"] = 4] = "kCFCompareBackwards";
    CFStringCompareFlags2[CFStringCompareFlags2["kCFCompareAnchored"] = 8] = "kCFCompareAnchored";
    CFStringCompareFlags2[CFStringCompareFlags2["kCFCompareNonliteral"] = 16] = "kCFCompareNonliteral";
    CFStringCompareFlags2[CFStringCompareFlags2["kCFCompareLocalized"] = 32] = "kCFCompareLocalized";
    CFStringCompareFlags2[CFStringCompareFlags2["kCFCompareNumerically"] = 64] = "kCFCompareNumerically";
    CFStringCompareFlags2[CFStringCompareFlags2["kCFCompareDiacriticInsensitive"] = 128] = "kCFCompareDiacriticInsensitive";
    CFStringCompareFlags2[CFStringCompareFlags2["kCFCompareWidthInsensitive"] = 256] = "kCFCompareWidthInsensitive";
    CFStringCompareFlags2[CFStringCompareFlags2["kCFCompareForcedOrdering"] = 512] = "kCFCompareForcedOrdering";
  })(CFStringCompareFlags || (CFStringCompareFlags = {}));
  global$2["CFStringCompareFlags"] = CFStringCompareFlags;
  var CFStringEncodings;
  (function(CFStringEncodings2) {
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacJapanese"] = 1] = "kCFStringEncodingMacJapanese";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacChineseTrad"] = 2] = "kCFStringEncodingMacChineseTrad";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacKorean"] = 3] = "kCFStringEncodingMacKorean";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacArabic"] = 4] = "kCFStringEncodingMacArabic";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacHebrew"] = 5] = "kCFStringEncodingMacHebrew";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacGreek"] = 6] = "kCFStringEncodingMacGreek";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacCyrillic"] = 7] = "kCFStringEncodingMacCyrillic";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacDevanagari"] = 9] = "kCFStringEncodingMacDevanagari";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacGurmukhi"] = 10] = "kCFStringEncodingMacGurmukhi";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacGujarati"] = 11] = "kCFStringEncodingMacGujarati";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacOriya"] = 12] = "kCFStringEncodingMacOriya";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacBengali"] = 13] = "kCFStringEncodingMacBengali";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacTamil"] = 14] = "kCFStringEncodingMacTamil";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacTelugu"] = 15] = "kCFStringEncodingMacTelugu";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacKannada"] = 16] = "kCFStringEncodingMacKannada";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacMalayalam"] = 17] = "kCFStringEncodingMacMalayalam";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacSinhalese"] = 18] = "kCFStringEncodingMacSinhalese";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacBurmese"] = 19] = "kCFStringEncodingMacBurmese";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacKhmer"] = 20] = "kCFStringEncodingMacKhmer";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacThai"] = 21] = "kCFStringEncodingMacThai";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacLaotian"] = 22] = "kCFStringEncodingMacLaotian";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacGeorgian"] = 23] = "kCFStringEncodingMacGeorgian";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacArmenian"] = 24] = "kCFStringEncodingMacArmenian";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacChineseSimp"] = 25] = "kCFStringEncodingMacChineseSimp";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacTibetan"] = 26] = "kCFStringEncodingMacTibetan";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacMongolian"] = 27] = "kCFStringEncodingMacMongolian";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacEthiopic"] = 28] = "kCFStringEncodingMacEthiopic";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacCentralEurRoman"] = 29] = "kCFStringEncodingMacCentralEurRoman";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacVietnamese"] = 30] = "kCFStringEncodingMacVietnamese";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacExtArabic"] = 31] = "kCFStringEncodingMacExtArabic";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacSymbol"] = 33] = "kCFStringEncodingMacSymbol";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacDingbats"] = 34] = "kCFStringEncodingMacDingbats";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacTurkish"] = 35] = "kCFStringEncodingMacTurkish";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacCroatian"] = 36] = "kCFStringEncodingMacCroatian";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacIcelandic"] = 37] = "kCFStringEncodingMacIcelandic";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacRomanian"] = 38] = "kCFStringEncodingMacRomanian";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacCeltic"] = 39] = "kCFStringEncodingMacCeltic";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacGaelic"] = 40] = "kCFStringEncodingMacGaelic";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacFarsi"] = 140] = "kCFStringEncodingMacFarsi";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacUkrainian"] = 152] = "kCFStringEncodingMacUkrainian";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacInuit"] = 236] = "kCFStringEncodingMacInuit";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacVT100"] = 252] = "kCFStringEncodingMacVT100";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacHFS"] = 255] = "kCFStringEncodingMacHFS";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingISOLatin2"] = 514] = "kCFStringEncodingISOLatin2";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingISOLatin3"] = 515] = "kCFStringEncodingISOLatin3";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingISOLatin4"] = 516] = "kCFStringEncodingISOLatin4";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingISOLatinCyrillic"] = 517] = "kCFStringEncodingISOLatinCyrillic";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingISOLatinArabic"] = 518] = "kCFStringEncodingISOLatinArabic";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingISOLatinGreek"] = 519] = "kCFStringEncodingISOLatinGreek";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingISOLatinHebrew"] = 520] = "kCFStringEncodingISOLatinHebrew";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingISOLatin5"] = 521] = "kCFStringEncodingISOLatin5";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingISOLatin6"] = 522] = "kCFStringEncodingISOLatin6";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingISOLatinThai"] = 523] = "kCFStringEncodingISOLatinThai";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingISOLatin7"] = 525] = "kCFStringEncodingISOLatin7";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingISOLatin8"] = 526] = "kCFStringEncodingISOLatin8";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingISOLatin9"] = 527] = "kCFStringEncodingISOLatin9";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingISOLatin10"] = 528] = "kCFStringEncodingISOLatin10";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingDOSLatinUS"] = 1024] = "kCFStringEncodingDOSLatinUS";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingDOSGreek"] = 1029] = "kCFStringEncodingDOSGreek";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingDOSBalticRim"] = 1030] = "kCFStringEncodingDOSBalticRim";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingDOSLatin1"] = 1040] = "kCFStringEncodingDOSLatin1";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingDOSGreek1"] = 1041] = "kCFStringEncodingDOSGreek1";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingDOSLatin2"] = 1042] = "kCFStringEncodingDOSLatin2";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingDOSCyrillic"] = 1043] = "kCFStringEncodingDOSCyrillic";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingDOSTurkish"] = 1044] = "kCFStringEncodingDOSTurkish";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingDOSPortuguese"] = 1045] = "kCFStringEncodingDOSPortuguese";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingDOSIcelandic"] = 1046] = "kCFStringEncodingDOSIcelandic";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingDOSHebrew"] = 1047] = "kCFStringEncodingDOSHebrew";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingDOSCanadianFrench"] = 1048] = "kCFStringEncodingDOSCanadianFrench";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingDOSArabic"] = 1049] = "kCFStringEncodingDOSArabic";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingDOSNordic"] = 1050] = "kCFStringEncodingDOSNordic";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingDOSRussian"] = 1051] = "kCFStringEncodingDOSRussian";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingDOSGreek2"] = 1052] = "kCFStringEncodingDOSGreek2";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingDOSThai"] = 1053] = "kCFStringEncodingDOSThai";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingDOSJapanese"] = 1056] = "kCFStringEncodingDOSJapanese";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingDOSChineseSimplif"] = 1057] = "kCFStringEncodingDOSChineseSimplif";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingDOSKorean"] = 1058] = "kCFStringEncodingDOSKorean";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingDOSChineseTrad"] = 1059] = "kCFStringEncodingDOSChineseTrad";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingWindowsLatin2"] = 1281] = "kCFStringEncodingWindowsLatin2";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingWindowsCyrillic"] = 1282] = "kCFStringEncodingWindowsCyrillic";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingWindowsGreek"] = 1283] = "kCFStringEncodingWindowsGreek";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingWindowsLatin5"] = 1284] = "kCFStringEncodingWindowsLatin5";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingWindowsHebrew"] = 1285] = "kCFStringEncodingWindowsHebrew";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingWindowsArabic"] = 1286] = "kCFStringEncodingWindowsArabic";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingWindowsBalticRim"] = 1287] = "kCFStringEncodingWindowsBalticRim";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingWindowsVietnamese"] = 1288] = "kCFStringEncodingWindowsVietnamese";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingWindowsKoreanJohab"] = 1296] = "kCFStringEncodingWindowsKoreanJohab";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingANSEL"] = 1537] = "kCFStringEncodingANSEL";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingJIS_X0201_76"] = 1568] = "kCFStringEncodingJIS_X0201_76";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingJIS_X0208_83"] = 1569] = "kCFStringEncodingJIS_X0208_83";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingJIS_X0208_90"] = 1570] = "kCFStringEncodingJIS_X0208_90";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingJIS_X0212_90"] = 1571] = "kCFStringEncodingJIS_X0212_90";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingJIS_C6226_78"] = 1572] = "kCFStringEncodingJIS_C6226_78";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingShiftJIS_X0213"] = 1576] = "kCFStringEncodingShiftJIS_X0213";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingShiftJIS_X0213_MenKuTen"] = 1577] = "kCFStringEncodingShiftJIS_X0213_MenKuTen";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingGB_2312_80"] = 1584] = "kCFStringEncodingGB_2312_80";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingGBK_95"] = 1585] = "kCFStringEncodingGBK_95";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingGB_18030_2000"] = 1586] = "kCFStringEncodingGB_18030_2000";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingKSC_5601_87"] = 1600] = "kCFStringEncodingKSC_5601_87";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingKSC_5601_92_Johab"] = 1601] = "kCFStringEncodingKSC_5601_92_Johab";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingCNS_11643_92_P1"] = 1617] = "kCFStringEncodingCNS_11643_92_P1";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingCNS_11643_92_P2"] = 1618] = "kCFStringEncodingCNS_11643_92_P2";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingCNS_11643_92_P3"] = 1619] = "kCFStringEncodingCNS_11643_92_P3";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingISO_2022_JP"] = 2080] = "kCFStringEncodingISO_2022_JP";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingISO_2022_JP_2"] = 2081] = "kCFStringEncodingISO_2022_JP_2";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingISO_2022_JP_1"] = 2082] = "kCFStringEncodingISO_2022_JP_1";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingISO_2022_JP_3"] = 2083] = "kCFStringEncodingISO_2022_JP_3";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingISO_2022_CN"] = 2096] = "kCFStringEncodingISO_2022_CN";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingISO_2022_CN_EXT"] = 2097] = "kCFStringEncodingISO_2022_CN_EXT";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingISO_2022_KR"] = 2112] = "kCFStringEncodingISO_2022_KR";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingEUC_JP"] = 2336] = "kCFStringEncodingEUC_JP";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingEUC_CN"] = 2352] = "kCFStringEncodingEUC_CN";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingEUC_TW"] = 2353] = "kCFStringEncodingEUC_TW";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingEUC_KR"] = 2368] = "kCFStringEncodingEUC_KR";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingShiftJIS"] = 2561] = "kCFStringEncodingShiftJIS";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingKOI8_R"] = 2562] = "kCFStringEncodingKOI8_R";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingBig5"] = 2563] = "kCFStringEncodingBig5";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingMacRomanLatin1"] = 2564] = "kCFStringEncodingMacRomanLatin1";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingHZ_GB_2312"] = 2565] = "kCFStringEncodingHZ_GB_2312";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingBig5_HKSCS_1999"] = 2566] = "kCFStringEncodingBig5_HKSCS_1999";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingVISCII"] = 2567] = "kCFStringEncodingVISCII";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingKOI8_U"] = 2568] = "kCFStringEncodingKOI8_U";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingBig5_E"] = 2569] = "kCFStringEncodingBig5_E";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingNextStepJapanese"] = 2818] = "kCFStringEncodingNextStepJapanese";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingEBCDIC_US"] = 3073] = "kCFStringEncodingEBCDIC_US";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingEBCDIC_CP037"] = 3074] = "kCFStringEncodingEBCDIC_CP037";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingUTF7"] = 67109120] = "kCFStringEncodingUTF7";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingUTF7_IMAP"] = 2576] = "kCFStringEncodingUTF7_IMAP";
    CFStringEncodings2[CFStringEncodings2["kCFStringEncodingShiftJIS_X0213_00"] = 1576] = "kCFStringEncodingShiftJIS_X0213_00";
  })(CFStringEncodings || (CFStringEncodings = {}));
  global$2["CFStringEncodings"] = CFStringEncodings;
  var CFStringNormalizationForm;
  (function(CFStringNormalizationForm2) {
    CFStringNormalizationForm2[CFStringNormalizationForm2["kCFStringNormalizationFormD"] = 0] = "kCFStringNormalizationFormD";
    CFStringNormalizationForm2[CFStringNormalizationForm2["kCFStringNormalizationFormKD"] = 1] = "kCFStringNormalizationFormKD";
    CFStringNormalizationForm2[CFStringNormalizationForm2["kCFStringNormalizationFormC"] = 2] = "kCFStringNormalizationFormC";
    CFStringNormalizationForm2[CFStringNormalizationForm2["kCFStringNormalizationFormKC"] = 3] = "kCFStringNormalizationFormKC";
  })(CFStringNormalizationForm || (CFStringNormalizationForm = {}));
  global$2["CFStringNormalizationForm"] = CFStringNormalizationForm;
  (function(CFStringTokenizerTokenType2) {
    CFStringTokenizerTokenType2[CFStringTokenizerTokenType2["kCFStringTokenizerTokenNone"] = 0] = "kCFStringTokenizerTokenNone";
    CFStringTokenizerTokenType2[CFStringTokenizerTokenType2["kCFStringTokenizerTokenNormal"] = 1] = "kCFStringTokenizerTokenNormal";
    CFStringTokenizerTokenType2[CFStringTokenizerTokenType2["kCFStringTokenizerTokenHasSubTokensMask"] = 2] = "kCFStringTokenizerTokenHasSubTokensMask";
    CFStringTokenizerTokenType2[CFStringTokenizerTokenType2["kCFStringTokenizerTokenHasDerivedSubTokensMask"] = 4] = "kCFStringTokenizerTokenHasDerivedSubTokensMask";
    CFStringTokenizerTokenType2[CFStringTokenizerTokenType2["kCFStringTokenizerTokenHasHasNumbersMask"] = 8] = "kCFStringTokenizerTokenHasHasNumbersMask";
    CFStringTokenizerTokenType2[CFStringTokenizerTokenType2["kCFStringTokenizerTokenHasNonLettersMask"] = 16] = "kCFStringTokenizerTokenHasNonLettersMask";
    CFStringTokenizerTokenType2[CFStringTokenizerTokenType2["kCFStringTokenizerTokenIsCJWordMask"] = 32] = "kCFStringTokenizerTokenIsCJWordMask";
  })(CFStringTokenizerTokenType || (CFStringTokenizerTokenType = {}));
  global$2["CFStringTokenizerTokenType"] = CFStringTokenizerTokenType;
  var CFTimeZoneNameStyle;
  (function(CFTimeZoneNameStyle2) {
    CFTimeZoneNameStyle2[CFTimeZoneNameStyle2["kCFTimeZoneNameStyleStandard"] = 0] = "kCFTimeZoneNameStyleStandard";
    CFTimeZoneNameStyle2[CFTimeZoneNameStyle2["kCFTimeZoneNameStyleShortStandard"] = 1] = "kCFTimeZoneNameStyleShortStandard";
    CFTimeZoneNameStyle2[CFTimeZoneNameStyle2["kCFTimeZoneNameStyleDaylightSaving"] = 2] = "kCFTimeZoneNameStyleDaylightSaving";
    CFTimeZoneNameStyle2[CFTimeZoneNameStyle2["kCFTimeZoneNameStyleShortDaylightSaving"] = 3] = "kCFTimeZoneNameStyleShortDaylightSaving";
    CFTimeZoneNameStyle2[CFTimeZoneNameStyle2["kCFTimeZoneNameStyleGeneric"] = 4] = "kCFTimeZoneNameStyleGeneric";
    CFTimeZoneNameStyle2[CFTimeZoneNameStyle2["kCFTimeZoneNameStyleShortGeneric"] = 5] = "kCFTimeZoneNameStyleShortGeneric";
  })(CFTimeZoneNameStyle || (CFTimeZoneNameStyle = {}));
  global$2["CFTimeZoneNameStyle"] = CFTimeZoneNameStyle;
  (function(CFURLBookmarkCreationOptions2) {
    CFURLBookmarkCreationOptions2[CFURLBookmarkCreationOptions2["kCFURLBookmarkCreationMinimalBookmarkMask"] = 512] = "kCFURLBookmarkCreationMinimalBookmarkMask";
    CFURLBookmarkCreationOptions2[CFURLBookmarkCreationOptions2["kCFURLBookmarkCreationSuitableForBookmarkFile"] = 1024] = "kCFURLBookmarkCreationSuitableForBookmarkFile";
    CFURLBookmarkCreationOptions2[CFURLBookmarkCreationOptions2["kCFURLBookmarkCreationWithSecurityScope"] = 2048] = "kCFURLBookmarkCreationWithSecurityScope";
    CFURLBookmarkCreationOptions2[CFURLBookmarkCreationOptions2["kCFURLBookmarkCreationSecurityScopeAllowOnlyReadAccess"] = 4096] = "kCFURLBookmarkCreationSecurityScopeAllowOnlyReadAccess";
    CFURLBookmarkCreationOptions2[CFURLBookmarkCreationOptions2["kCFURLBookmarkCreationPreferFileIDResolutionMask"] = 256] = "kCFURLBookmarkCreationPreferFileIDResolutionMask";
  })(CFURLBookmarkCreationOptions || (CFURLBookmarkCreationOptions = {}));
  global$2["CFURLBookmarkCreationOptions"] = CFURLBookmarkCreationOptions;
  (function(CFURLBookmarkResolutionOptions2) {
    CFURLBookmarkResolutionOptions2[CFURLBookmarkResolutionOptions2["kCFURLBookmarkResolutionWithoutUIMask"] = 256] = "kCFURLBookmarkResolutionWithoutUIMask";
    CFURLBookmarkResolutionOptions2[CFURLBookmarkResolutionOptions2["kCFURLBookmarkResolutionWithoutMountingMask"] = 512] = "kCFURLBookmarkResolutionWithoutMountingMask";
    CFURLBookmarkResolutionOptions2[CFURLBookmarkResolutionOptions2["kCFURLBookmarkResolutionWithSecurityScope"] = 1024] = "kCFURLBookmarkResolutionWithSecurityScope";
    CFURLBookmarkResolutionOptions2[CFURLBookmarkResolutionOptions2["kCFBookmarkResolutionWithoutUIMask"] = 256] = "kCFBookmarkResolutionWithoutUIMask";
    CFURLBookmarkResolutionOptions2[CFURLBookmarkResolutionOptions2["kCFBookmarkResolutionWithoutMountingMask"] = 512] = "kCFBookmarkResolutionWithoutMountingMask";
  })(CFURLBookmarkResolutionOptions || (CFURLBookmarkResolutionOptions = {}));
  global$2["CFURLBookmarkResolutionOptions"] = CFURLBookmarkResolutionOptions;
  var CFURLComponentType;
  (function(CFURLComponentType2) {
    CFURLComponentType2[CFURLComponentType2["kCFURLComponentScheme"] = 1] = "kCFURLComponentScheme";
    CFURLComponentType2[CFURLComponentType2["kCFURLComponentNetLocation"] = 2] = "kCFURLComponentNetLocation";
    CFURLComponentType2[CFURLComponentType2["kCFURLComponentPath"] = 3] = "kCFURLComponentPath";
    CFURLComponentType2[CFURLComponentType2["kCFURLComponentResourceSpecifier"] = 4] = "kCFURLComponentResourceSpecifier";
    CFURLComponentType2[CFURLComponentType2["kCFURLComponentUser"] = 5] = "kCFURLComponentUser";
    CFURLComponentType2[CFURLComponentType2["kCFURLComponentPassword"] = 6] = "kCFURLComponentPassword";
    CFURLComponentType2[CFURLComponentType2["kCFURLComponentUserInfo"] = 7] = "kCFURLComponentUserInfo";
    CFURLComponentType2[CFURLComponentType2["kCFURLComponentHost"] = 8] = "kCFURLComponentHost";
    CFURLComponentType2[CFURLComponentType2["kCFURLComponentPort"] = 9] = "kCFURLComponentPort";
    CFURLComponentType2[CFURLComponentType2["kCFURLComponentParameterString"] = 10] = "kCFURLComponentParameterString";
    CFURLComponentType2[CFURLComponentType2["kCFURLComponentQuery"] = 11] = "kCFURLComponentQuery";
    CFURLComponentType2[CFURLComponentType2["kCFURLComponentFragment"] = 12] = "kCFURLComponentFragment";
  })(CFURLComponentType || (CFURLComponentType = {}));
  global$2["CFURLComponentType"] = CFURLComponentType;
  (function(CFURLEnumeratorOptions2) {
    CFURLEnumeratorOptions2[CFURLEnumeratorOptions2["kCFURLEnumeratorDefaultBehavior"] = 0] = "kCFURLEnumeratorDefaultBehavior";
    CFURLEnumeratorOptions2[CFURLEnumeratorOptions2["kCFURLEnumeratorDescendRecursively"] = 1] = "kCFURLEnumeratorDescendRecursively";
    CFURLEnumeratorOptions2[CFURLEnumeratorOptions2["kCFURLEnumeratorSkipInvisibles"] = 2] = "kCFURLEnumeratorSkipInvisibles";
    CFURLEnumeratorOptions2[CFURLEnumeratorOptions2["kCFURLEnumeratorGenerateFileReferenceURLs"] = 4] = "kCFURLEnumeratorGenerateFileReferenceURLs";
    CFURLEnumeratorOptions2[CFURLEnumeratorOptions2["kCFURLEnumeratorSkipPackageContents"] = 8] = "kCFURLEnumeratorSkipPackageContents";
    CFURLEnumeratorOptions2[CFURLEnumeratorOptions2["kCFURLEnumeratorIncludeDirectoriesPreOrder"] = 16] = "kCFURLEnumeratorIncludeDirectoriesPreOrder";
    CFURLEnumeratorOptions2[CFURLEnumeratorOptions2["kCFURLEnumeratorIncludeDirectoriesPostOrder"] = 32] = "kCFURLEnumeratorIncludeDirectoriesPostOrder";
    CFURLEnumeratorOptions2[CFURLEnumeratorOptions2["kCFURLEnumeratorGenerateRelativePathURLs"] = 64] = "kCFURLEnumeratorGenerateRelativePathURLs";
  })(CFURLEnumeratorOptions || (CFURLEnumeratorOptions = {}));
  global$2["CFURLEnumeratorOptions"] = CFURLEnumeratorOptions;
  var CFURLEnumeratorResult;
  (function(CFURLEnumeratorResult2) {
    CFURLEnumeratorResult2[CFURLEnumeratorResult2["kCFURLEnumeratorSuccess"] = 1] = "kCFURLEnumeratorSuccess";
    CFURLEnumeratorResult2[CFURLEnumeratorResult2["kCFURLEnumeratorEnd"] = 2] = "kCFURLEnumeratorEnd";
    CFURLEnumeratorResult2[CFURLEnumeratorResult2["kCFURLEnumeratorError"] = 3] = "kCFURLEnumeratorError";
    CFURLEnumeratorResult2[CFURLEnumeratorResult2["kCFURLEnumeratorDirectoryPostOrderSuccess"] = 4] = "kCFURLEnumeratorDirectoryPostOrderSuccess";
  })(CFURLEnumeratorResult || (CFURLEnumeratorResult = {}));
  global$2["CFURLEnumeratorResult"] = CFURLEnumeratorResult;
  var CFURLPathStyle;
  (function(CFURLPathStyle2) {
    CFURLPathStyle2[CFURLPathStyle2["kCFURLPOSIXPathStyle"] = 0] = "kCFURLPOSIXPathStyle";
    CFURLPathStyle2[CFURLPathStyle2["kCFURLHFSPathStyle"] = 1] = "kCFURLHFSPathStyle";
    CFURLPathStyle2[CFURLPathStyle2["kCFURLWindowsPathStyle"] = 2] = "kCFURLWindowsPathStyle";
  })(CFURLPathStyle || (CFURLPathStyle = {}));
  global$2["CFURLPathStyle"] = CFURLPathStyle;
  var CFXMLEntityTypeCode;
  (function(CFXMLEntityTypeCode2) {
    CFXMLEntityTypeCode2[CFXMLEntityTypeCode2["kCFXMLEntityTypeParameter"] = 0] = "kCFXMLEntityTypeParameter";
    CFXMLEntityTypeCode2[CFXMLEntityTypeCode2["kCFXMLEntityTypeParsedInternal"] = 1] = "kCFXMLEntityTypeParsedInternal";
    CFXMLEntityTypeCode2[CFXMLEntityTypeCode2["kCFXMLEntityTypeParsedExternal"] = 2] = "kCFXMLEntityTypeParsedExternal";
    CFXMLEntityTypeCode2[CFXMLEntityTypeCode2["kCFXMLEntityTypeUnparsed"] = 3] = "kCFXMLEntityTypeUnparsed";
    CFXMLEntityTypeCode2[CFXMLEntityTypeCode2["kCFXMLEntityTypeCharacter"] = 4] = "kCFXMLEntityTypeCharacter";
  })(CFXMLEntityTypeCode || (CFXMLEntityTypeCode = {}));
  global$2["CFXMLEntityTypeCode"] = CFXMLEntityTypeCode;
  var CFXMLNodeTypeCode;
  (function(CFXMLNodeTypeCode2) {
    CFXMLNodeTypeCode2[CFXMLNodeTypeCode2["kCFXMLNodeTypeDocument"] = 1] = "kCFXMLNodeTypeDocument";
    CFXMLNodeTypeCode2[CFXMLNodeTypeCode2["kCFXMLNodeTypeElement"] = 2] = "kCFXMLNodeTypeElement";
    CFXMLNodeTypeCode2[CFXMLNodeTypeCode2["kCFXMLNodeTypeAttribute"] = 3] = "kCFXMLNodeTypeAttribute";
    CFXMLNodeTypeCode2[CFXMLNodeTypeCode2["kCFXMLNodeTypeProcessingInstruction"] = 4] = "kCFXMLNodeTypeProcessingInstruction";
    CFXMLNodeTypeCode2[CFXMLNodeTypeCode2["kCFXMLNodeTypeComment"] = 5] = "kCFXMLNodeTypeComment";
    CFXMLNodeTypeCode2[CFXMLNodeTypeCode2["kCFXMLNodeTypeText"] = 6] = "kCFXMLNodeTypeText";
    CFXMLNodeTypeCode2[CFXMLNodeTypeCode2["kCFXMLNodeTypeCDATASection"] = 7] = "kCFXMLNodeTypeCDATASection";
    CFXMLNodeTypeCode2[CFXMLNodeTypeCode2["kCFXMLNodeTypeDocumentFragment"] = 8] = "kCFXMLNodeTypeDocumentFragment";
    CFXMLNodeTypeCode2[CFXMLNodeTypeCode2["kCFXMLNodeTypeEntity"] = 9] = "kCFXMLNodeTypeEntity";
    CFXMLNodeTypeCode2[CFXMLNodeTypeCode2["kCFXMLNodeTypeEntityReference"] = 10] = "kCFXMLNodeTypeEntityReference";
    CFXMLNodeTypeCode2[CFXMLNodeTypeCode2["kCFXMLNodeTypeDocumentType"] = 11] = "kCFXMLNodeTypeDocumentType";
    CFXMLNodeTypeCode2[CFXMLNodeTypeCode2["kCFXMLNodeTypeWhitespace"] = 12] = "kCFXMLNodeTypeWhitespace";
    CFXMLNodeTypeCode2[CFXMLNodeTypeCode2["kCFXMLNodeTypeNotation"] = 13] = "kCFXMLNodeTypeNotation";
    CFXMLNodeTypeCode2[CFXMLNodeTypeCode2["kCFXMLNodeTypeElementTypeDeclaration"] = 14] = "kCFXMLNodeTypeElementTypeDeclaration";
    CFXMLNodeTypeCode2[CFXMLNodeTypeCode2["kCFXMLNodeTypeAttributeListDeclaration"] = 15] = "kCFXMLNodeTypeAttributeListDeclaration";
  })(CFXMLNodeTypeCode || (CFXMLNodeTypeCode = {}));
  global$2["CFXMLNodeTypeCode"] = CFXMLNodeTypeCode;
  (function(CFXMLParserOptions2) {
    CFXMLParserOptions2[CFXMLParserOptions2["kCFXMLParserValidateDocument"] = 1] = "kCFXMLParserValidateDocument";
    CFXMLParserOptions2[CFXMLParserOptions2["kCFXMLParserSkipMetaData"] = 2] = "kCFXMLParserSkipMetaData";
    CFXMLParserOptions2[CFXMLParserOptions2["kCFXMLParserReplacePhysicalEntities"] = 4] = "kCFXMLParserReplacePhysicalEntities";
    CFXMLParserOptions2[CFXMLParserOptions2["kCFXMLParserSkipWhitespace"] = 8] = "kCFXMLParserSkipWhitespace";
    CFXMLParserOptions2[CFXMLParserOptions2["kCFXMLParserResolveExternalEntities"] = 16] = "kCFXMLParserResolveExternalEntities";
    CFXMLParserOptions2[CFXMLParserOptions2["kCFXMLParserAddImpliedAttributes"] = 32] = "kCFXMLParserAddImpliedAttributes";
    CFXMLParserOptions2[CFXMLParserOptions2["kCFXMLParserAllOptions"] = 16777215] = "kCFXMLParserAllOptions";
    CFXMLParserOptions2[CFXMLParserOptions2["kCFXMLParserNoOptions"] = 0] = "kCFXMLParserNoOptions";
  })(CFXMLParserOptions || (CFXMLParserOptions = {}));
  global$2["CFXMLParserOptions"] = CFXMLParserOptions;
  (function(CFXMLParserStatusCode2) {
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["kCFXMLStatusParseNotBegun"] = -2] = "kCFXMLStatusParseNotBegun";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["kCFXMLStatusParseInProgress"] = -1] = "kCFXMLStatusParseInProgress";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["kCFXMLStatusParseSuccessful"] = 0] = "kCFXMLStatusParseSuccessful";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["kCFXMLErrorUnexpectedEOF"] = 1] = "kCFXMLErrorUnexpectedEOF";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["kCFXMLErrorUnknownEncoding"] = 2] = "kCFXMLErrorUnknownEncoding";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["kCFXMLErrorEncodingConversionFailure"] = 3] = "kCFXMLErrorEncodingConversionFailure";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["kCFXMLErrorMalformedProcessingInstruction"] = 4] = "kCFXMLErrorMalformedProcessingInstruction";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["kCFXMLErrorMalformedDTD"] = 5] = "kCFXMLErrorMalformedDTD";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["kCFXMLErrorMalformedName"] = 6] = "kCFXMLErrorMalformedName";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["kCFXMLErrorMalformedCDSect"] = 7] = "kCFXMLErrorMalformedCDSect";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["kCFXMLErrorMalformedCloseTag"] = 8] = "kCFXMLErrorMalformedCloseTag";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["kCFXMLErrorMalformedStartTag"] = 9] = "kCFXMLErrorMalformedStartTag";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["kCFXMLErrorMalformedDocument"] = 10] = "kCFXMLErrorMalformedDocument";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["kCFXMLErrorElementlessDocument"] = 11] = "kCFXMLErrorElementlessDocument";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["kCFXMLErrorMalformedComment"] = 12] = "kCFXMLErrorMalformedComment";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["kCFXMLErrorMalformedCharacterReference"] = 13] = "kCFXMLErrorMalformedCharacterReference";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["kCFXMLErrorMalformedParsedCharacterData"] = 14] = "kCFXMLErrorMalformedParsedCharacterData";
    CFXMLParserStatusCode2[CFXMLParserStatusCode2["kCFXMLErrorNoData"] = 15] = "kCFXMLErrorNoData";
  })(CFXMLParserStatusCode || (CFXMLParserStatusCode = {}));
  global$2["CFXMLParserStatusCode"] = CFXMLParserStatusCode;
  var __CFByteOrder;
  (function(__CFByteOrder2) {
    __CFByteOrder2[__CFByteOrder2["CFByteOrderUnknown"] = 0] = "CFByteOrderUnknown";
    __CFByteOrder2[__CFByteOrder2["CFByteOrderLittleEndian"] = 1] = "CFByteOrderLittleEndian";
    __CFByteOrder2[__CFByteOrder2["CFByteOrderBigEndian"] = 2] = "CFByteOrderBigEndian";
  })(__CFByteOrder || (__CFByteOrder = {}));
  global$2["__CFByteOrder"] = __CFByteOrder;
  (function(AlignmentOptions2) {
    AlignmentOptions2[AlignmentOptions2["MinXInward"] = 1] = "MinXInward";
    AlignmentOptions2[AlignmentOptions2["MinYInward"] = 2] = "MinYInward";
    AlignmentOptions2[AlignmentOptions2["MaxXInward"] = 4] = "MaxXInward";
    AlignmentOptions2[AlignmentOptions2["MaxYInward"] = 8] = "MaxYInward";
    AlignmentOptions2[AlignmentOptions2["WidthInward"] = 16] = "WidthInward";
    AlignmentOptions2[AlignmentOptions2["HeightInward"] = 32] = "HeightInward";
    AlignmentOptions2[AlignmentOptions2["MinXOutward"] = 256] = "MinXOutward";
    AlignmentOptions2[AlignmentOptions2["MinYOutward"] = 512] = "MinYOutward";
    AlignmentOptions2[AlignmentOptions2["MaxXOutward"] = 1024] = "MaxXOutward";
    AlignmentOptions2[AlignmentOptions2["MaxYOutward"] = 2048] = "MaxYOutward";
    AlignmentOptions2[AlignmentOptions2["WidthOutward"] = 4096] = "WidthOutward";
    AlignmentOptions2[AlignmentOptions2["HeightOutward"] = 8192] = "HeightOutward";
    AlignmentOptions2[AlignmentOptions2["MinXNearest"] = 65536] = "MinXNearest";
    AlignmentOptions2[AlignmentOptions2["MinYNearest"] = 131072] = "MinYNearest";
    AlignmentOptions2[AlignmentOptions2["MaxXNearest"] = 262144] = "MaxXNearest";
    AlignmentOptions2[AlignmentOptions2["MaxYNearest"] = 524288] = "MaxYNearest";
    AlignmentOptions2[AlignmentOptions2["WidthNearest"] = 1048576] = "WidthNearest";
    AlignmentOptions2[AlignmentOptions2["HeightNearest"] = 2097152] = "HeightNearest";
    AlignmentOptions2[AlignmentOptions2["RectFlipped"] = -9223372036854776e3] = "RectFlipped";
    AlignmentOptions2[AlignmentOptions2["AllEdgesInward"] = 15] = "AllEdgesInward";
    AlignmentOptions2[AlignmentOptions2["AllEdgesOutward"] = 3840] = "AllEdgesOutward";
    AlignmentOptions2[AlignmentOptions2["AllEdgesNearest"] = 983040] = "AllEdgesNearest";
  })(AlignmentOptions || (AlignmentOptions = {}));
  global$2["AlignmentOptions"] = AlignmentOptions;
  (function(NSBinarySearchingOptions2) {
    NSBinarySearchingOptions2[NSBinarySearchingOptions2["FirstEqual"] = 256] = "FirstEqual";
    NSBinarySearchingOptions2[NSBinarySearchingOptions2["LastEqual"] = 512] = "LastEqual";
    NSBinarySearchingOptions2[NSBinarySearchingOptions2["InsertionIndex"] = 1024] = "InsertionIndex";
  })(NSBinarySearchingOptions || (NSBinarySearchingOptions = {}));
  global$2["NSBinarySearchingOptions"] = NSBinarySearchingOptions;
  var NSCollectionChangeType;
  (function(NSCollectionChangeType2) {
    NSCollectionChangeType2[NSCollectionChangeType2["Insert"] = 0] = "Insert";
    NSCollectionChangeType2[NSCollectionChangeType2["Remove"] = 1] = "Remove";
  })(NSCollectionChangeType || (NSCollectionChangeType = {}));
  global$2["NSCollectionChangeType"] = NSCollectionChangeType;
  var ComparisonResult;
  (function(ComparisonResult2) {
    ComparisonResult2[ComparisonResult2["OrderedAscending"] = -1] = "OrderedAscending";
    ComparisonResult2[ComparisonResult2["OrderedSame"] = 0] = "OrderedSame";
    ComparisonResult2[ComparisonResult2["OrderedDescending"] = 1] = "OrderedDescending";
  })(ComparisonResult || (ComparisonResult = {}));
  global$2["ComparisonResult"] = ComparisonResult;
  (function(NSEnumerationOptions2) {
    NSEnumerationOptions2[NSEnumerationOptions2["Concurrent"] = 1] = "Concurrent";
    NSEnumerationOptions2[NSEnumerationOptions2["Reverse"] = 2] = "Reverse";
  })(NSEnumerationOptions || (NSEnumerationOptions = {}));
  global$2["NSEnumerationOptions"] = NSEnumerationOptions;
  (function(NSItemProviderFileOptions2) {
    NSItemProviderFileOptions2[NSItemProviderFileOptions2["OpenInPlace"] = 1] = "OpenInPlace";
  })(NSItemProviderFileOptions || (NSItemProviderFileOptions = {}));
  global$2["NSItemProviderFileOptions"] = NSItemProviderFileOptions;
  var NSItemProviderRepresentationVisibility;
  (function(NSItemProviderRepresentationVisibility2) {
    NSItemProviderRepresentationVisibility2[NSItemProviderRepresentationVisibility2["All"] = 0] = "All";
    NSItemProviderRepresentationVisibility2[NSItemProviderRepresentationVisibility2["Team"] = 1] = "Team";
    NSItemProviderRepresentationVisibility2[NSItemProviderRepresentationVisibility2["Group"] = 2] = "Group";
    NSItemProviderRepresentationVisibility2[NSItemProviderRepresentationVisibility2["OwnProcess"] = 3] = "OwnProcess";
  })(NSItemProviderRepresentationVisibility || (NSItemProviderRepresentationVisibility = {}));
  global$2["NSItemProviderRepresentationVisibility"] = NSItemProviderRepresentationVisibility;
  var NSKeyValueChange;
  (function(NSKeyValueChange2) {
    NSKeyValueChange2[NSKeyValueChange2["Setting"] = 1] = "Setting";
    NSKeyValueChange2[NSKeyValueChange2["Insertion"] = 2] = "Insertion";
    NSKeyValueChange2[NSKeyValueChange2["Removal"] = 3] = "Removal";
    NSKeyValueChange2[NSKeyValueChange2["Replacement"] = 4] = "Replacement";
  })(NSKeyValueChange || (NSKeyValueChange = {}));
  global$2["NSKeyValueChange"] = NSKeyValueChange;
  (function(NSKeyValueObservingOptions2) {
    NSKeyValueObservingOptions2[NSKeyValueObservingOptions2["New"] = 1] = "New";
    NSKeyValueObservingOptions2[NSKeyValueObservingOptions2["Old"] = 2] = "Old";
    NSKeyValueObservingOptions2[NSKeyValueObservingOptions2["Initial"] = 4] = "Initial";
    NSKeyValueObservingOptions2[NSKeyValueObservingOptions2["Prior"] = 8] = "Prior";
  })(NSKeyValueObservingOptions || (NSKeyValueObservingOptions = {}));
  global$2["NSKeyValueObservingOptions"] = NSKeyValueObservingOptions;
  var NSKeyValueSetMutationKind;
  (function(NSKeyValueSetMutationKind2) {
    NSKeyValueSetMutationKind2[NSKeyValueSetMutationKind2["UnionSetMutation"] = 1] = "UnionSetMutation";
    NSKeyValueSetMutationKind2[NSKeyValueSetMutationKind2["MinusSetMutation"] = 2] = "MinusSetMutation";
    NSKeyValueSetMutationKind2[NSKeyValueSetMutationKind2["IntersectSetMutation"] = 3] = "IntersectSetMutation";
    NSKeyValueSetMutationKind2[NSKeyValueSetMutationKind2["SetSetMutation"] = 4] = "SetSetMutation";
  })(NSKeyValueSetMutationKind || (NSKeyValueSetMutationKind = {}));
  global$2["NSKeyValueSetMutationKind"] = NSKeyValueSetMutationKind;
  var NSLinguisticTaggerUnit;
  (function(NSLinguisticTaggerUnit2) {
    NSLinguisticTaggerUnit2[NSLinguisticTaggerUnit2["Word"] = 0] = "Word";
    NSLinguisticTaggerUnit2[NSLinguisticTaggerUnit2["Sentence"] = 1] = "Sentence";
    NSLinguisticTaggerUnit2[NSLinguisticTaggerUnit2["Paragraph"] = 2] = "Paragraph";
    NSLinguisticTaggerUnit2[NSLinguisticTaggerUnit2["Document"] = 3] = "Document";
  })(NSLinguisticTaggerUnit || (NSLinguisticTaggerUnit = {}));
  global$2["NSLinguisticTaggerUnit"] = NSLinguisticTaggerUnit;
  (function(NSOrderedCollectionDifferenceCalculationOptions2) {
    NSOrderedCollectionDifferenceCalculationOptions2[NSOrderedCollectionDifferenceCalculationOptions2["OmitInsertedObjects"] = 1] = "OmitInsertedObjects";
    NSOrderedCollectionDifferenceCalculationOptions2[NSOrderedCollectionDifferenceCalculationOptions2["OmitRemovedObjects"] = 2] = "OmitRemovedObjects";
    NSOrderedCollectionDifferenceCalculationOptions2[NSOrderedCollectionDifferenceCalculationOptions2["InferMoves"] = 4] = "InferMoves";
  })(NSOrderedCollectionDifferenceCalculationOptions || (NSOrderedCollectionDifferenceCalculationOptions = {}));
  global$2["NSOrderedCollectionDifferenceCalculationOptions"] = NSOrderedCollectionDifferenceCalculationOptions;
  var QualityOfService;
  (function(QualityOfService2) {
    QualityOfService2[QualityOfService2["UserInteractive"] = 33] = "UserInteractive";
    QualityOfService2[QualityOfService2["UserInitiated"] = 25] = "UserInitiated";
    QualityOfService2[QualityOfService2["Utility"] = 17] = "Utility";
    QualityOfService2[QualityOfService2["Background"] = 9] = "Background";
    QualityOfService2[QualityOfService2["Default"] = -1] = "Default";
  })(QualityOfService || (QualityOfService = {}));
  global$2["QualityOfService"] = QualityOfService;
  var NSRectEdge$1;
  (function(NSRectEdge2) {
    NSRectEdge2[NSRectEdge2["RectEdgeMinX"] = 0] = "RectEdgeMinX";
    NSRectEdge2[NSRectEdge2["RectEdgeMinY"] = 1] = "RectEdgeMinY";
    NSRectEdge2[NSRectEdge2["RectEdgeMaxX"] = 2] = "RectEdgeMaxX";
    NSRectEdge2[NSRectEdge2["RectEdgeMaxY"] = 3] = "RectEdgeMaxY";
    NSRectEdge2[NSRectEdge2["MinXEdge"] = 0] = "MinXEdge";
    NSRectEdge2[NSRectEdge2["MinYEdge"] = 1] = "MinYEdge";
    NSRectEdge2[NSRectEdge2["MaxXEdge"] = 2] = "MaxXEdge";
    NSRectEdge2[NSRectEdge2["MaxYEdge"] = 3] = "MaxYEdge";
  })(NSRectEdge$1 || (NSRectEdge$1 = {}));
  global$2["NSRectEdge"] = NSRectEdge$1;
  var NSSaveOptions;
  (function(NSSaveOptions2) {
    NSSaveOptions2[NSSaveOptions2["Yes"] = 0] = "Yes";
    NSSaveOptions2[NSSaveOptions2["No"] = 1] = "No";
    NSSaveOptions2[NSSaveOptions2["Ask"] = 2] = "Ask";
  })(NSSaveOptions || (NSSaveOptions = {}));
  global$2["NSSaveOptions"] = NSSaveOptions;
  (function(NSSortOptions2) {
    NSSortOptions2[NSSortOptions2["Concurrent"] = 1] = "Concurrent";
    NSSortOptions2[NSSortOptions2["Stable"] = 16] = "Stable";
  })(NSSortOptions || (NSSortOptions = {}));
  global$2["NSSortOptions"] = NSSortOptions;
  var NSURLErrorNetworkUnavailableReason;
  (function(NSURLErrorNetworkUnavailableReason2) {
    NSURLErrorNetworkUnavailableReason2[NSURLErrorNetworkUnavailableReason2["Cellular"] = 0] = "Cellular";
    NSURLErrorNetworkUnavailableReason2[NSURLErrorNetworkUnavailableReason2["Expensive"] = 1] = "Expensive";
    NSURLErrorNetworkUnavailableReason2[NSURLErrorNetworkUnavailableReason2["Constrained"] = 2] = "Constrained";
  })(NSURLErrorNetworkUnavailableReason || (NSURLErrorNetworkUnavailableReason = {}));
  global$2["NSURLErrorNetworkUnavailableReason"] = NSURLErrorNetworkUnavailableReason;
  var NSURLSessionDelayedRequestDisposition;
  (function(NSURLSessionDelayedRequestDisposition2) {
    NSURLSessionDelayedRequestDisposition2[NSURLSessionDelayedRequestDisposition2["ContinueLoading"] = 0] = "ContinueLoading";
    NSURLSessionDelayedRequestDisposition2[NSURLSessionDelayedRequestDisposition2["UseNewRequest"] = 1] = "UseNewRequest";
    NSURLSessionDelayedRequestDisposition2[NSURLSessionDelayedRequestDisposition2["Cancel"] = 2] = "Cancel";
  })(NSURLSessionDelayedRequestDisposition || (NSURLSessionDelayedRequestDisposition = {}));
  global$2["NSURLSessionDelayedRequestDisposition"] = NSURLSessionDelayedRequestDisposition;
  var NSURLSessionWebSocketMessageType;
  (function(NSURLSessionWebSocketMessageType2) {
    NSURLSessionWebSocketMessageType2[NSURLSessionWebSocketMessageType2["Data"] = 0] = "Data";
    NSURLSessionWebSocketMessageType2[NSURLSessionWebSocketMessageType2["String"] = 1] = "String";
  })(NSURLSessionWebSocketMessageType || (NSURLSessionWebSocketMessageType = {}));
  global$2["NSURLSessionWebSocketMessageType"] = NSURLSessionWebSocketMessageType;
  let NSAllRomanInputSourcesLocaleIdentifier;
  global$2["NSAllRomanInputSourcesLocaleIdentifier"] = NSAllRomanInputSourcesLocaleIdentifier;
  let NSAnimationTriggerOrderIn;
  global$2["NSAnimationTriggerOrderIn"] = NSAnimationTriggerOrderIn;
  let NSAnimationTriggerOrderOut;
  global$2["NSAnimationTriggerOrderOut"] = NSAnimationTriggerOrderOut;
  let NSApp;
  global$2["NSApp"] = NSApp;
  let NSBlack;
  global$2["NSBlack"] = NSBlack;
  let NSDarkGray;
  global$2["NSDarkGray"] = NSDarkGray;
  let NSDirectionalEdgeInsetsZero;
  global$2["NSDirectionalEdgeInsetsZero"] = NSDirectionalEdgeInsetsZero;
  let NSLightGray;
  global$2["NSLightGray"] = NSLightGray;
  let NSMultipleValuesMarker;
  global$2["NSMultipleValuesMarker"] = NSMultipleValuesMarker;
  let NSNoSelectionMarker;
  global$2["NSNoSelectionMarker"] = NSNoSelectionMarker;
  let NSNotApplicableMarker;
  global$2["NSNotApplicableMarker"] = NSNotApplicableMarker;
  let NSTypeIdentifierAddressText;
  global$2["NSTypeIdentifierAddressText"] = NSTypeIdentifierAddressText;
  let NSTypeIdentifierDateText;
  global$2["NSTypeIdentifierDateText"] = NSTypeIdentifierDateText;
  let NSTypeIdentifierPhoneNumberText;
  global$2["NSTypeIdentifierPhoneNumberText"] = NSTypeIdentifierPhoneNumberText;
  let NSTypeIdentifierTransitInformationText;
  global$2["NSTypeIdentifierTransitInformationText"] = NSTypeIdentifierTransitInformationText;
  let NSUnderlineByWord;
  global$2["NSUnderlineByWord"] = NSUnderlineByWord;
  let NSUnderlinePatternDash;
  global$2["NSUnderlinePatternDash"] = NSUnderlinePatternDash;
  let NSUnderlinePatternDashDot;
  global$2["NSUnderlinePatternDashDot"] = NSUnderlinePatternDashDot;
  let NSUnderlinePatternDashDotDot;
  global$2["NSUnderlinePatternDashDotDot"] = NSUnderlinePatternDashDotDot;
  let NSUnderlinePatternDot;
  global$2["NSUnderlinePatternDot"] = NSUnderlinePatternDot;
  let NSUnderlinePatternSolid;
  global$2["NSUnderlinePatternSolid"] = NSUnderlinePatternSolid;
  let NSUserActivityDocumentURLKey;
  global$2["NSUserActivityDocumentURLKey"] = NSUserActivityDocumentURLKey;
  let NSWhite;
  global$2["NSWhite"] = NSWhite;
  let kCFAbsoluteTimeIntervalSince1904;
  global$2["kCFAbsoluteTimeIntervalSince1904"] = kCFAbsoluteTimeIntervalSince1904;
  let kCFAbsoluteTimeIntervalSince1970;
  global$2["kCFAbsoluteTimeIntervalSince1970"] = kCFAbsoluteTimeIntervalSince1970;
  let kCFAllocatorDefault;
  global$2["kCFAllocatorDefault"] = kCFAllocatorDefault;
  let kCFAllocatorMalloc;
  global$2["kCFAllocatorMalloc"] = kCFAllocatorMalloc;
  let kCFAllocatorMallocZone;
  global$2["kCFAllocatorMallocZone"] = kCFAllocatorMallocZone;
  let kCFAllocatorNull;
  global$2["kCFAllocatorNull"] = kCFAllocatorNull;
  let kCFAllocatorSystemDefault;
  global$2["kCFAllocatorSystemDefault"] = kCFAllocatorSystemDefault;
  let kCFAllocatorUseContext;
  global$2["kCFAllocatorUseContext"] = kCFAllocatorUseContext;
  let kCFBooleanFalse;
  global$2["kCFBooleanFalse"] = kCFBooleanFalse;
  let kCFBooleanTrue;
  global$2["kCFBooleanTrue"] = kCFBooleanTrue;
  let kCFBundleDevelopmentRegionKey;
  global$2["kCFBundleDevelopmentRegionKey"] = kCFBundleDevelopmentRegionKey;
  let kCFBundleExecutableKey;
  global$2["kCFBundleExecutableKey"] = kCFBundleExecutableKey;
  let kCFBundleIdentifierKey;
  global$2["kCFBundleIdentifierKey"] = kCFBundleIdentifierKey;
  let kCFBundleInfoDictionaryVersionKey;
  global$2["kCFBundleInfoDictionaryVersionKey"] = kCFBundleInfoDictionaryVersionKey;
  let kCFBundleLocalizationsKey;
  global$2["kCFBundleLocalizationsKey"] = kCFBundleLocalizationsKey;
  let kCFBundleNameKey;
  global$2["kCFBundleNameKey"] = kCFBundleNameKey;
  let kCFBundleVersionKey;
  global$2["kCFBundleVersionKey"] = kCFBundleVersionKey;
  let kCFCopyStringBagCallBacks;
  global$2["kCFCopyStringBagCallBacks"] = kCFCopyStringBagCallBacks;
  let kCFCopyStringDictionaryKeyCallBacks;
  global$2["kCFCopyStringDictionaryKeyCallBacks"] = kCFCopyStringDictionaryKeyCallBacks;
  let kCFCopyStringSetCallBacks;
  global$2["kCFCopyStringSetCallBacks"] = kCFCopyStringSetCallBacks;
  let kCFCoreFoundationVersionNumber;
  global$2["kCFCoreFoundationVersionNumber"] = kCFCoreFoundationVersionNumber;
  let kCFErrorDescriptionKey;
  global$2["kCFErrorDescriptionKey"] = kCFErrorDescriptionKey;
  let kCFErrorDomainCocoa;
  global$2["kCFErrorDomainCocoa"] = kCFErrorDomainCocoa;
  let kCFErrorDomainMach;
  global$2["kCFErrorDomainMach"] = kCFErrorDomainMach;
  let kCFErrorDomainOSStatus;
  global$2["kCFErrorDomainOSStatus"] = kCFErrorDomainOSStatus;
  let kCFErrorDomainPOSIX;
  global$2["kCFErrorDomainPOSIX"] = kCFErrorDomainPOSIX;
  let kCFErrorFilePathKey;
  global$2["kCFErrorFilePathKey"] = kCFErrorFilePathKey;
  let kCFErrorLocalizedDescriptionKey;
  global$2["kCFErrorLocalizedDescriptionKey"] = kCFErrorLocalizedDescriptionKey;
  let kCFErrorLocalizedFailureKey;
  global$2["kCFErrorLocalizedFailureKey"] = kCFErrorLocalizedFailureKey;
  let kCFErrorLocalizedFailureReasonKey;
  global$2["kCFErrorLocalizedFailureReasonKey"] = kCFErrorLocalizedFailureReasonKey;
  let kCFErrorLocalizedRecoverySuggestionKey;
  global$2["kCFErrorLocalizedRecoverySuggestionKey"] = kCFErrorLocalizedRecoverySuggestionKey;
  let kCFErrorURLKey;
  global$2["kCFErrorURLKey"] = kCFErrorURLKey;
  let kCFErrorUnderlyingErrorKey;
  global$2["kCFErrorUnderlyingErrorKey"] = kCFErrorUnderlyingErrorKey;
  let kCFNotFound;
  global$2["kCFNotFound"] = kCFNotFound;
  let kCFNull;
  global$2["kCFNull"] = kCFNull;
  let kCFNumberNaN;
  global$2["kCFNumberNaN"] = kCFNumberNaN;
  let kCFNumberNegativeInfinity;
  global$2["kCFNumberNegativeInfinity"] = kCFNumberNegativeInfinity;
  let kCFNumberPositiveInfinity;
  global$2["kCFNumberPositiveInfinity"] = kCFNumberPositiveInfinity;
  let kCFPlugInDynamicRegisterFunctionKey;
  global$2["kCFPlugInDynamicRegisterFunctionKey"] = kCFPlugInDynamicRegisterFunctionKey;
  let kCFPlugInDynamicRegistrationKey;
  global$2["kCFPlugInDynamicRegistrationKey"] = kCFPlugInDynamicRegistrationKey;
  let kCFPlugInFactoriesKey;
  global$2["kCFPlugInFactoriesKey"] = kCFPlugInFactoriesKey;
  let kCFPlugInTypesKey;
  global$2["kCFPlugInTypesKey"] = kCFPlugInTypesKey;
  let kCFPlugInUnloadFunctionKey;
  global$2["kCFPlugInUnloadFunctionKey"] = kCFPlugInUnloadFunctionKey;
  let kCFPreferencesAnyApplication;
  global$2["kCFPreferencesAnyApplication"] = kCFPreferencesAnyApplication;
  let kCFPreferencesAnyHost;
  global$2["kCFPreferencesAnyHost"] = kCFPreferencesAnyHost;
  let kCFPreferencesAnyUser;
  global$2["kCFPreferencesAnyUser"] = kCFPreferencesAnyUser;
  let kCFPreferencesCurrentApplication;
  global$2["kCFPreferencesCurrentApplication"] = kCFPreferencesCurrentApplication;
  let kCFPreferencesCurrentHost;
  global$2["kCFPreferencesCurrentHost"] = kCFPreferencesCurrentHost;
  let kCFPreferencesCurrentUser;
  global$2["kCFPreferencesCurrentUser"] = kCFPreferencesCurrentUser;
  let kCFSocketCommandKey;
  global$2["kCFSocketCommandKey"] = kCFSocketCommandKey;
  let kCFSocketErrorKey;
  global$2["kCFSocketErrorKey"] = kCFSocketErrorKey;
  let kCFSocketNameKey;
  global$2["kCFSocketNameKey"] = kCFSocketNameKey;
  let kCFSocketRegisterCommand;
  global$2["kCFSocketRegisterCommand"] = kCFSocketRegisterCommand;
  let kCFSocketResultKey;
  global$2["kCFSocketResultKey"] = kCFSocketResultKey;
  let kCFSocketRetrieveCommand;
  global$2["kCFSocketRetrieveCommand"] = kCFSocketRetrieveCommand;
  let kCFSocketValueKey;
  global$2["kCFSocketValueKey"] = kCFSocketValueKey;
  let kCFStreamErrorDomainSOCKS;
  global$2["kCFStreamErrorDomainSOCKS"] = kCFStreamErrorDomainSOCKS;
  let kCFStreamErrorDomainSSL;
  global$2["kCFStreamErrorDomainSSL"] = kCFStreamErrorDomainSSL;
  let kCFStreamPropertySOCKSPassword;
  global$2["kCFStreamPropertySOCKSPassword"] = kCFStreamPropertySOCKSPassword;
  let kCFStreamPropertySOCKSProxy;
  global$2["kCFStreamPropertySOCKSProxy"] = kCFStreamPropertySOCKSProxy;
  let kCFStreamPropertySOCKSProxyHost;
  global$2["kCFStreamPropertySOCKSProxyHost"] = kCFStreamPropertySOCKSProxyHost;
  let kCFStreamPropertySOCKSProxyPort;
  global$2["kCFStreamPropertySOCKSProxyPort"] = kCFStreamPropertySOCKSProxyPort;
  let kCFStreamPropertySOCKSUser;
  global$2["kCFStreamPropertySOCKSUser"] = kCFStreamPropertySOCKSUser;
  let kCFStreamPropertySOCKSVersion;
  global$2["kCFStreamPropertySOCKSVersion"] = kCFStreamPropertySOCKSVersion;
  let kCFStreamPropertyShouldCloseNativeSocket;
  global$2["kCFStreamPropertyShouldCloseNativeSocket"] = kCFStreamPropertyShouldCloseNativeSocket;
  let kCFStreamPropertySocketSecurityLevel;
  global$2["kCFStreamPropertySocketSecurityLevel"] = kCFStreamPropertySocketSecurityLevel;
  let kCFStreamSocketSOCKSVersion4;
  global$2["kCFStreamSocketSOCKSVersion4"] = kCFStreamSocketSOCKSVersion4;
  let kCFStreamSocketSOCKSVersion5;
  global$2["kCFStreamSocketSOCKSVersion5"] = kCFStreamSocketSOCKSVersion5;
  let kCFStreamSocketSecurityLevelNegotiatedSSL;
  global$2["kCFStreamSocketSecurityLevelNegotiatedSSL"] = kCFStreamSocketSecurityLevelNegotiatedSSL;
  let kCFStreamSocketSecurityLevelNone;
  global$2["kCFStreamSocketSecurityLevelNone"] = kCFStreamSocketSecurityLevelNone;
  let kCFStreamSocketSecurityLevelTLSv1;
  global$2["kCFStreamSocketSecurityLevelTLSv1"] = kCFStreamSocketSecurityLevelTLSv1;
  let kCFStringBinaryHeapCallBacks;
  global$2["kCFStringBinaryHeapCallBacks"] = kCFStringBinaryHeapCallBacks;
  let kCFStringTransformFullwidthHalfwidth;
  global$2["kCFStringTransformFullwidthHalfwidth"] = kCFStringTransformFullwidthHalfwidth;
  let kCFStringTransformHiraganaKatakana;
  global$2["kCFStringTransformHiraganaKatakana"] = kCFStringTransformHiraganaKatakana;
  let kCFStringTransformLatinArabic;
  global$2["kCFStringTransformLatinArabic"] = kCFStringTransformLatinArabic;
  let kCFStringTransformLatinCyrillic;
  global$2["kCFStringTransformLatinCyrillic"] = kCFStringTransformLatinCyrillic;
  let kCFStringTransformLatinGreek;
  global$2["kCFStringTransformLatinGreek"] = kCFStringTransformLatinGreek;
  let kCFStringTransformLatinHangul;
  global$2["kCFStringTransformLatinHangul"] = kCFStringTransformLatinHangul;
  let kCFStringTransformLatinHebrew;
  global$2["kCFStringTransformLatinHebrew"] = kCFStringTransformLatinHebrew;
  let kCFStringTransformLatinHiragana;
  global$2["kCFStringTransformLatinHiragana"] = kCFStringTransformLatinHiragana;
  let kCFStringTransformLatinKatakana;
  global$2["kCFStringTransformLatinKatakana"] = kCFStringTransformLatinKatakana;
  let kCFStringTransformLatinThai;
  global$2["kCFStringTransformLatinThai"] = kCFStringTransformLatinThai;
  let kCFStringTransformMandarinLatin;
  global$2["kCFStringTransformMandarinLatin"] = kCFStringTransformMandarinLatin;
  let kCFStringTransformStripCombiningMarks;
  global$2["kCFStringTransformStripCombiningMarks"] = kCFStringTransformStripCombiningMarks;
  let kCFStringTransformStripDiacritics;
  global$2["kCFStringTransformStripDiacritics"] = kCFStringTransformStripDiacritics;
  let kCFStringTransformToLatin;
  global$2["kCFStringTransformToLatin"] = kCFStringTransformToLatin;
  let kCFStringTransformToUnicodeName;
  global$2["kCFStringTransformToUnicodeName"] = kCFStringTransformToUnicodeName;
  let kCFStringTransformToXMLHex;
  global$2["kCFStringTransformToXMLHex"] = kCFStringTransformToXMLHex;
  let kCFTypeArrayCallBacks;
  global$2["kCFTypeArrayCallBacks"] = kCFTypeArrayCallBacks;
  let kCFTypeBagCallBacks;
  global$2["kCFTypeBagCallBacks"] = kCFTypeBagCallBacks;
  let kCFTypeDictionaryKeyCallBacks;
  global$2["kCFTypeDictionaryKeyCallBacks"] = kCFTypeDictionaryKeyCallBacks;
  let kCFTypeDictionaryValueCallBacks;
  global$2["kCFTypeDictionaryValueCallBacks"] = kCFTypeDictionaryValueCallBacks;
  let kCFTypeSetCallBacks;
  global$2["kCFTypeSetCallBacks"] = kCFTypeSetCallBacks;
  let kCFURLAddedToDirectoryDateKey;
  global$2["kCFURLAddedToDirectoryDateKey"] = kCFURLAddedToDirectoryDateKey;
  let kCFURLApplicationIsScriptableKey;
  global$2["kCFURLApplicationIsScriptableKey"] = kCFURLApplicationIsScriptableKey;
  let kCFURLAttributeModificationDateKey;
  global$2["kCFURLAttributeModificationDateKey"] = kCFURLAttributeModificationDateKey;
  let kCFURLCanonicalPathKey;
  global$2["kCFURLCanonicalPathKey"] = kCFURLCanonicalPathKey;
  let kCFURLContentAccessDateKey;
  global$2["kCFURLContentAccessDateKey"] = kCFURLContentAccessDateKey;
  let kCFURLContentModificationDateKey;
  global$2["kCFURLContentModificationDateKey"] = kCFURLContentModificationDateKey;
  let kCFURLCreationDateKey;
  global$2["kCFURLCreationDateKey"] = kCFURLCreationDateKey;
  let kCFURLDocumentIdentifierKey;
  global$2["kCFURLDocumentIdentifierKey"] = kCFURLDocumentIdentifierKey;
  let kCFURLFileAllocatedSizeKey;
  global$2["kCFURLFileAllocatedSizeKey"] = kCFURLFileAllocatedSizeKey;
  let kCFURLFileResourceIdentifierKey;
  global$2["kCFURLFileResourceIdentifierKey"] = kCFURLFileResourceIdentifierKey;
  let kCFURLFileResourceTypeBlockSpecial;
  global$2["kCFURLFileResourceTypeBlockSpecial"] = kCFURLFileResourceTypeBlockSpecial;
  let kCFURLFileResourceTypeCharacterSpecial;
  global$2["kCFURLFileResourceTypeCharacterSpecial"] = kCFURLFileResourceTypeCharacterSpecial;
  let kCFURLFileResourceTypeDirectory;
  global$2["kCFURLFileResourceTypeDirectory"] = kCFURLFileResourceTypeDirectory;
  let kCFURLFileResourceTypeKey;
  global$2["kCFURLFileResourceTypeKey"] = kCFURLFileResourceTypeKey;
  let kCFURLFileResourceTypeNamedPipe;
  global$2["kCFURLFileResourceTypeNamedPipe"] = kCFURLFileResourceTypeNamedPipe;
  let kCFURLFileResourceTypeRegular;
  global$2["kCFURLFileResourceTypeRegular"] = kCFURLFileResourceTypeRegular;
  let kCFURLFileResourceTypeSocket;
  global$2["kCFURLFileResourceTypeSocket"] = kCFURLFileResourceTypeSocket;
  let kCFURLFileResourceTypeSymbolicLink;
  global$2["kCFURLFileResourceTypeSymbolicLink"] = kCFURLFileResourceTypeSymbolicLink;
  let kCFURLFileResourceTypeUnknown;
  global$2["kCFURLFileResourceTypeUnknown"] = kCFURLFileResourceTypeUnknown;
  let kCFURLFileSecurityKey;
  global$2["kCFURLFileSecurityKey"] = kCFURLFileSecurityKey;
  let kCFURLFileSizeKey;
  global$2["kCFURLFileSizeKey"] = kCFURLFileSizeKey;
  let kCFURLGenerationIdentifierKey;
  global$2["kCFURLGenerationIdentifierKey"] = kCFURLGenerationIdentifierKey;
  let kCFURLHasHiddenExtensionKey;
  global$2["kCFURLHasHiddenExtensionKey"] = kCFURLHasHiddenExtensionKey;
  let kCFURLIsAliasFileKey;
  global$2["kCFURLIsAliasFileKey"] = kCFURLIsAliasFileKey;
  let kCFURLIsApplicationKey;
  global$2["kCFURLIsApplicationKey"] = kCFURLIsApplicationKey;
  let kCFURLIsDirectoryKey;
  global$2["kCFURLIsDirectoryKey"] = kCFURLIsDirectoryKey;
  let kCFURLIsExcludedFromBackupKey;
  global$2["kCFURLIsExcludedFromBackupKey"] = kCFURLIsExcludedFromBackupKey;
  let kCFURLIsExecutableKey;
  global$2["kCFURLIsExecutableKey"] = kCFURLIsExecutableKey;
  let kCFURLIsHiddenKey;
  global$2["kCFURLIsHiddenKey"] = kCFURLIsHiddenKey;
  let kCFURLIsMountTriggerKey;
  global$2["kCFURLIsMountTriggerKey"] = kCFURLIsMountTriggerKey;
  let kCFURLIsPackageKey;
  global$2["kCFURLIsPackageKey"] = kCFURLIsPackageKey;
  let kCFURLIsReadableKey;
  global$2["kCFURLIsReadableKey"] = kCFURLIsReadableKey;
  let kCFURLIsRegularFileKey;
  global$2["kCFURLIsRegularFileKey"] = kCFURLIsRegularFileKey;
  let kCFURLIsSymbolicLinkKey;
  global$2["kCFURLIsSymbolicLinkKey"] = kCFURLIsSymbolicLinkKey;
  let kCFURLIsSystemImmutableKey;
  global$2["kCFURLIsSystemImmutableKey"] = kCFURLIsSystemImmutableKey;
  let kCFURLIsUbiquitousItemKey;
  global$2["kCFURLIsUbiquitousItemKey"] = kCFURLIsUbiquitousItemKey;
  let kCFURLIsUserImmutableKey;
  global$2["kCFURLIsUserImmutableKey"] = kCFURLIsUserImmutableKey;
  let kCFURLIsVolumeKey;
  global$2["kCFURLIsVolumeKey"] = kCFURLIsVolumeKey;
  let kCFURLIsWritableKey;
  global$2["kCFURLIsWritableKey"] = kCFURLIsWritableKey;
  let kCFURLKeysOfUnsetValuesKey;
  global$2["kCFURLKeysOfUnsetValuesKey"] = kCFURLKeysOfUnsetValuesKey;
  let kCFURLLabelNumberKey;
  global$2["kCFURLLabelNumberKey"] = kCFURLLabelNumberKey;
  let kCFURLLinkCountKey;
  global$2["kCFURLLinkCountKey"] = kCFURLLinkCountKey;
  let kCFURLLocalizedLabelKey;
  global$2["kCFURLLocalizedLabelKey"] = kCFURLLocalizedLabelKey;
  let kCFURLLocalizedNameKey;
  global$2["kCFURLLocalizedNameKey"] = kCFURLLocalizedNameKey;
  let kCFURLLocalizedTypeDescriptionKey;
  global$2["kCFURLLocalizedTypeDescriptionKey"] = kCFURLLocalizedTypeDescriptionKey;
  let kCFURLNameKey;
  global$2["kCFURLNameKey"] = kCFURLNameKey;
  let kCFURLParentDirectoryURLKey;
  global$2["kCFURLParentDirectoryURLKey"] = kCFURLParentDirectoryURLKey;
  let kCFURLPathKey;
  global$2["kCFURLPathKey"] = kCFURLPathKey;
  let kCFURLPreferredIOBlockSizeKey;
  global$2["kCFURLPreferredIOBlockSizeKey"] = kCFURLPreferredIOBlockSizeKey;
  let kCFURLQuarantinePropertiesKey;
  global$2["kCFURLQuarantinePropertiesKey"] = kCFURLQuarantinePropertiesKey;
  let kCFURLTagNamesKey;
  global$2["kCFURLTagNamesKey"] = kCFURLTagNamesKey;
  let kCFURLTotalFileAllocatedSizeKey;
  global$2["kCFURLTotalFileAllocatedSizeKey"] = kCFURLTotalFileAllocatedSizeKey;
  let kCFURLTotalFileSizeKey;
  global$2["kCFURLTotalFileSizeKey"] = kCFURLTotalFileSizeKey;
  let kCFURLTypeIdentifierKey;
  global$2["kCFURLTypeIdentifierKey"] = kCFURLTypeIdentifierKey;
  let kCFURLUbiquitousItemDownloadingErrorKey;
  global$2["kCFURLUbiquitousItemDownloadingErrorKey"] = kCFURLUbiquitousItemDownloadingErrorKey;
  let kCFURLUbiquitousItemDownloadingStatusCurrent;
  global$2["kCFURLUbiquitousItemDownloadingStatusCurrent"] = kCFURLUbiquitousItemDownloadingStatusCurrent;
  let kCFURLUbiquitousItemDownloadingStatusDownloaded;
  global$2["kCFURLUbiquitousItemDownloadingStatusDownloaded"] = kCFURLUbiquitousItemDownloadingStatusDownloaded;
  let kCFURLUbiquitousItemDownloadingStatusKey;
  global$2["kCFURLUbiquitousItemDownloadingStatusKey"] = kCFURLUbiquitousItemDownloadingStatusKey;
  let kCFURLUbiquitousItemDownloadingStatusNotDownloaded;
  global$2["kCFURLUbiquitousItemDownloadingStatusNotDownloaded"] = kCFURLUbiquitousItemDownloadingStatusNotDownloaded;
  let kCFURLUbiquitousItemHasUnresolvedConflictsKey;
  global$2["kCFURLUbiquitousItemHasUnresolvedConflictsKey"] = kCFURLUbiquitousItemHasUnresolvedConflictsKey;
  let kCFURLUbiquitousItemIsDownloadingKey;
  global$2["kCFURLUbiquitousItemIsDownloadingKey"] = kCFURLUbiquitousItemIsDownloadingKey;
  let kCFURLUbiquitousItemIsUploadedKey;
  global$2["kCFURLUbiquitousItemIsUploadedKey"] = kCFURLUbiquitousItemIsUploadedKey;
  let kCFURLUbiquitousItemIsUploadingKey;
  global$2["kCFURLUbiquitousItemIsUploadingKey"] = kCFURLUbiquitousItemIsUploadingKey;
  let kCFURLUbiquitousItemUploadingErrorKey;
  global$2["kCFURLUbiquitousItemUploadingErrorKey"] = kCFURLUbiquitousItemUploadingErrorKey;
  let kCFURLVolumeAvailableCapacityForImportantUsageKey;
  global$2["kCFURLVolumeAvailableCapacityForImportantUsageKey"] = kCFURLVolumeAvailableCapacityForImportantUsageKey;
  let kCFURLVolumeAvailableCapacityForOpportunisticUsageKey;
  global$2["kCFURLVolumeAvailableCapacityForOpportunisticUsageKey"] = kCFURLVolumeAvailableCapacityForOpportunisticUsageKey;
  let kCFURLVolumeAvailableCapacityKey;
  global$2["kCFURLVolumeAvailableCapacityKey"] = kCFURLVolumeAvailableCapacityKey;
  let kCFURLVolumeCreationDateKey;
  global$2["kCFURLVolumeCreationDateKey"] = kCFURLVolumeCreationDateKey;
  let kCFURLVolumeIdentifierKey;
  global$2["kCFURLVolumeIdentifierKey"] = kCFURLVolumeIdentifierKey;
  let kCFURLVolumeIsAutomountedKey;
  global$2["kCFURLVolumeIsAutomountedKey"] = kCFURLVolumeIsAutomountedKey;
  let kCFURLVolumeIsBrowsableKey;
  global$2["kCFURLVolumeIsBrowsableKey"] = kCFURLVolumeIsBrowsableKey;
  let kCFURLVolumeIsEjectableKey;
  global$2["kCFURLVolumeIsEjectableKey"] = kCFURLVolumeIsEjectableKey;
  let kCFURLVolumeIsEncryptedKey;
  global$2["kCFURLVolumeIsEncryptedKey"] = kCFURLVolumeIsEncryptedKey;
  let kCFURLVolumeIsInternalKey;
  global$2["kCFURLVolumeIsInternalKey"] = kCFURLVolumeIsInternalKey;
  let kCFURLVolumeIsJournalingKey;
  global$2["kCFURLVolumeIsJournalingKey"] = kCFURLVolumeIsJournalingKey;
  let kCFURLVolumeIsLocalKey;
  global$2["kCFURLVolumeIsLocalKey"] = kCFURLVolumeIsLocalKey;
  let kCFURLVolumeIsReadOnlyKey;
  global$2["kCFURLVolumeIsReadOnlyKey"] = kCFURLVolumeIsReadOnlyKey;
  let kCFURLVolumeIsRemovableKey;
  global$2["kCFURLVolumeIsRemovableKey"] = kCFURLVolumeIsRemovableKey;
  let kCFURLVolumeIsRootFileSystemKey;
  global$2["kCFURLVolumeIsRootFileSystemKey"] = kCFURLVolumeIsRootFileSystemKey;
  let kCFURLVolumeLocalizedFormatDescriptionKey;
  global$2["kCFURLVolumeLocalizedFormatDescriptionKey"] = kCFURLVolumeLocalizedFormatDescriptionKey;
  let kCFURLVolumeLocalizedNameKey;
  global$2["kCFURLVolumeLocalizedNameKey"] = kCFURLVolumeLocalizedNameKey;
  let kCFURLVolumeMaximumFileSizeKey;
  global$2["kCFURLVolumeMaximumFileSizeKey"] = kCFURLVolumeMaximumFileSizeKey;
  let kCFURLVolumeNameKey;
  global$2["kCFURLVolumeNameKey"] = kCFURLVolumeNameKey;
  let kCFURLVolumeResourceCountKey;
  global$2["kCFURLVolumeResourceCountKey"] = kCFURLVolumeResourceCountKey;
  let kCFURLVolumeSupportsAccessPermissionsKey;
  global$2["kCFURLVolumeSupportsAccessPermissionsKey"] = kCFURLVolumeSupportsAccessPermissionsKey;
  let kCFURLVolumeSupportsAdvisoryFileLockingKey;
  global$2["kCFURLVolumeSupportsAdvisoryFileLockingKey"] = kCFURLVolumeSupportsAdvisoryFileLockingKey;
  let kCFURLVolumeSupportsCasePreservedNamesKey;
  global$2["kCFURLVolumeSupportsCasePreservedNamesKey"] = kCFURLVolumeSupportsCasePreservedNamesKey;
  let kCFURLVolumeSupportsCaseSensitiveNamesKey;
  global$2["kCFURLVolumeSupportsCaseSensitiveNamesKey"] = kCFURLVolumeSupportsCaseSensitiveNamesKey;
  let kCFURLVolumeSupportsCompressionKey;
  global$2["kCFURLVolumeSupportsCompressionKey"] = kCFURLVolumeSupportsCompressionKey;
  let kCFURLVolumeSupportsExclusiveRenamingKey;
  global$2["kCFURLVolumeSupportsExclusiveRenamingKey"] = kCFURLVolumeSupportsExclusiveRenamingKey;
  let kCFURLVolumeSupportsExtendedSecurityKey;
  global$2["kCFURLVolumeSupportsExtendedSecurityKey"] = kCFURLVolumeSupportsExtendedSecurityKey;
  let kCFURLVolumeSupportsFileCloningKey;
  global$2["kCFURLVolumeSupportsFileCloningKey"] = kCFURLVolumeSupportsFileCloningKey;
  let kCFURLVolumeSupportsHardLinksKey;
  global$2["kCFURLVolumeSupportsHardLinksKey"] = kCFURLVolumeSupportsHardLinksKey;
  let kCFURLVolumeSupportsImmutableFilesKey;
  global$2["kCFURLVolumeSupportsImmutableFilesKey"] = kCFURLVolumeSupportsImmutableFilesKey;
  let kCFURLVolumeSupportsJournalingKey;
  global$2["kCFURLVolumeSupportsJournalingKey"] = kCFURLVolumeSupportsJournalingKey;
  let kCFURLVolumeSupportsPersistentIDsKey;
  global$2["kCFURLVolumeSupportsPersistentIDsKey"] = kCFURLVolumeSupportsPersistentIDsKey;
  let kCFURLVolumeSupportsRenamingKey;
  global$2["kCFURLVolumeSupportsRenamingKey"] = kCFURLVolumeSupportsRenamingKey;
  let kCFURLVolumeSupportsRootDirectoryDatesKey;
  global$2["kCFURLVolumeSupportsRootDirectoryDatesKey"] = kCFURLVolumeSupportsRootDirectoryDatesKey;
  let kCFURLVolumeSupportsSparseFilesKey;
  global$2["kCFURLVolumeSupportsSparseFilesKey"] = kCFURLVolumeSupportsSparseFilesKey;
  let kCFURLVolumeSupportsSwapRenamingKey;
  global$2["kCFURLVolumeSupportsSwapRenamingKey"] = kCFURLVolumeSupportsSwapRenamingKey;
  let kCFURLVolumeSupportsSymbolicLinksKey;
  global$2["kCFURLVolumeSupportsSymbolicLinksKey"] = kCFURLVolumeSupportsSymbolicLinksKey;
  let kCFURLVolumeSupportsVolumeSizesKey;
  global$2["kCFURLVolumeSupportsVolumeSizesKey"] = kCFURLVolumeSupportsVolumeSizesKey;
  let kCFURLVolumeSupportsZeroRunsKey;
  global$2["kCFURLVolumeSupportsZeroRunsKey"] = kCFURLVolumeSupportsZeroRunsKey;
  let kCFURLVolumeTotalCapacityKey;
  global$2["kCFURLVolumeTotalCapacityKey"] = kCFURLVolumeTotalCapacityKey;
  let kCFURLVolumeURLForRemountingKey;
  global$2["kCFURLVolumeURLForRemountingKey"] = kCFURLVolumeURLForRemountingKey;
  let kCFURLVolumeURLKey;
  global$2["kCFURLVolumeURLKey"] = kCFURLVolumeURLKey;
  let kCFURLVolumeUUIDStringKey;
  global$2["kCFURLVolumeUUIDStringKey"] = kCFURLVolumeUUIDStringKey;
  let kCFUserNotificationAlertHeaderKey;
  global$2["kCFUserNotificationAlertHeaderKey"] = kCFUserNotificationAlertHeaderKey;
  let kCFUserNotificationAlertMessageKey;
  global$2["kCFUserNotificationAlertMessageKey"] = kCFUserNotificationAlertMessageKey;
  let kCFUserNotificationAlertTopMostKey;
  global$2["kCFUserNotificationAlertTopMostKey"] = kCFUserNotificationAlertTopMostKey;
  let kCFUserNotificationAlternateButtonTitleKey;
  global$2["kCFUserNotificationAlternateButtonTitleKey"] = kCFUserNotificationAlternateButtonTitleKey;
  let kCFUserNotificationCheckBoxTitlesKey;
  global$2["kCFUserNotificationCheckBoxTitlesKey"] = kCFUserNotificationCheckBoxTitlesKey;
  let kCFUserNotificationDefaultButtonTitleKey;
  global$2["kCFUserNotificationDefaultButtonTitleKey"] = kCFUserNotificationDefaultButtonTitleKey;
  let kCFUserNotificationIconURLKey;
  global$2["kCFUserNotificationIconURLKey"] = kCFUserNotificationIconURLKey;
  let kCFUserNotificationKeyboardTypesKey;
  global$2["kCFUserNotificationKeyboardTypesKey"] = kCFUserNotificationKeyboardTypesKey;
  let kCFUserNotificationLocalizationURLKey;
  global$2["kCFUserNotificationLocalizationURLKey"] = kCFUserNotificationLocalizationURLKey;
  let kCFUserNotificationOtherButtonTitleKey;
  global$2["kCFUserNotificationOtherButtonTitleKey"] = kCFUserNotificationOtherButtonTitleKey;
  let kCFUserNotificationPopUpSelectionKey;
  global$2["kCFUserNotificationPopUpSelectionKey"] = kCFUserNotificationPopUpSelectionKey;
  let kCFUserNotificationPopUpTitlesKey;
  global$2["kCFUserNotificationPopUpTitlesKey"] = kCFUserNotificationPopUpTitlesKey;
  let kCFUserNotificationProgressIndicatorValueKey;
  global$2["kCFUserNotificationProgressIndicatorValueKey"] = kCFUserNotificationProgressIndicatorValueKey;
  let kCFUserNotificationSoundURLKey;
  global$2["kCFUserNotificationSoundURLKey"] = kCFUserNotificationSoundURLKey;
  let kCFUserNotificationTextFieldTitlesKey;
  global$2["kCFUserNotificationTextFieldTitlesKey"] = kCFUserNotificationTextFieldTitlesKey;
  let kCFUserNotificationTextFieldValuesKey;
  global$2["kCFUserNotificationTextFieldValuesKey"] = kCFUserNotificationTextFieldValuesKey;
  let kCFXMLTreeErrorDescription;
  global$2["kCFXMLTreeErrorDescription"] = kCFXMLTreeErrorDescription;
  let kCFXMLTreeErrorLineNumber;
  global$2["kCFXMLTreeErrorLineNumber"] = kCFXMLTreeErrorLineNumber;
  let kCFXMLTreeErrorLocation;
  global$2["kCFXMLTreeErrorLocation"] = kCFXMLTreeErrorLocation;
  let kCFXMLTreeErrorStatusCode;
  global$2["kCFXMLTreeErrorStatusCode"] = kCFXMLTreeErrorStatusCode;
  let NSAppleEventTimeOutDefault;
  global$2["NSAppleEventTimeOutDefault"] = NSAppleEventTimeOutDefault;
  let NSAppleEventTimeOutNone;
  global$2["NSAppleEventTimeOutNone"] = NSAppleEventTimeOutNone;
  let NSAssertionHandlerKey;
  global$2["NSAssertionHandlerKey"] = NSAssertionHandlerKey;
  let NSCocoaErrorDomain;
  global$2["NSCocoaErrorDomain"] = NSCocoaErrorDomain;
  let NSDeallocateZombies;
  global$2["NSDeallocateZombies"] = NSDeallocateZombies;
  let NSDebugDescriptionErrorKey;
  global$2["NSDebugDescriptionErrorKey"] = NSDebugDescriptionErrorKey;
  let NSDebugEnabled;
  global$2["NSDebugEnabled"] = NSDebugEnabled;
  let NSEdgeInsetsZero;
  global$2["NSEdgeInsetsZero"] = NSEdgeInsetsZero;
  let NSExtensionItemAttachmentsKey;
  global$2["NSExtensionItemAttachmentsKey"] = NSExtensionItemAttachmentsKey;
  let NSExtensionItemAttributedContentTextKey;
  global$2["NSExtensionItemAttributedContentTextKey"] = NSExtensionItemAttributedContentTextKey;
  let NSExtensionItemAttributedTitleKey;
  global$2["NSExtensionItemAttributedTitleKey"] = NSExtensionItemAttributedTitleKey;
  let NSExtensionItemsAndErrorsKey;
  global$2["NSExtensionItemsAndErrorsKey"] = NSExtensionItemsAndErrorsKey;
  let NSExtensionJavaScriptPreprocessingResultsKey;
  global$2["NSExtensionJavaScriptPreprocessingResultsKey"] = NSExtensionJavaScriptPreprocessingResultsKey;
  let NSFileHandleNotificationDataItem;
  global$2["NSFileHandleNotificationDataItem"] = NSFileHandleNotificationDataItem;
  let NSFileHandleNotificationFileHandleItem;
  global$2["NSFileHandleNotificationFileHandleItem"] = NSFileHandleNotificationFileHandleItem;
  let NSFileManagerUnmountDissentingProcessIdentifierErrorKey;
  global$2["NSFileManagerUnmountDissentingProcessIdentifierErrorKey"] = NSFileManagerUnmountDissentingProcessIdentifierErrorKey;
  let NSFilePathErrorKey;
  global$2["NSFilePathErrorKey"] = NSFilePathErrorKey;
  let NSFoundationVersionNumber;
  global$2["NSFoundationVersionNumber"] = NSFoundationVersionNumber;
  let NSGrammarCorrections;
  global$2["NSGrammarCorrections"] = NSGrammarCorrections;
  let NSGrammarRange;
  global$2["NSGrammarRange"] = NSGrammarRange;
  let NSGrammarUserDescription;
  global$2["NSGrammarUserDescription"] = NSGrammarUserDescription;
  let NSHashTableCopyIn;
  global$2["NSHashTableCopyIn"] = NSHashTableCopyIn;
  let NSHashTableObjectPointerPersonality;
  global$2["NSHashTableObjectPointerPersonality"] = NSHashTableObjectPointerPersonality;
  let NSHashTableStrongMemory;
  global$2["NSHashTableStrongMemory"] = NSHashTableStrongMemory;
  let NSHashTableWeakMemory;
  global$2["NSHashTableWeakMemory"] = NSHashTableWeakMemory;
  let NSHelpAnchorErrorKey;
  global$2["NSHelpAnchorErrorKey"] = NSHelpAnchorErrorKey;
  let NSIntegerHashCallBacks;
  global$2["NSIntegerHashCallBacks"] = NSIntegerHashCallBacks;
  let NSIntegerMapKeyCallBacks;
  global$2["NSIntegerMapKeyCallBacks"] = NSIntegerMapKeyCallBacks;
  let NSIntegerMapValueCallBacks;
  global$2["NSIntegerMapValueCallBacks"] = NSIntegerMapValueCallBacks;
  let NSItemProviderPreferredImageSizeKey;
  global$2["NSItemProviderPreferredImageSizeKey"] = NSItemProviderPreferredImageSizeKey;
  let NSKeepAllocationStatistics;
  global$2["NSKeepAllocationStatistics"] = NSKeepAllocationStatistics;
  let NSKeyedArchiveRootObjectKey;
  global$2["NSKeyedArchiveRootObjectKey"] = NSKeyedArchiveRootObjectKey;
  let NSLoadedClasses;
  global$2["NSLoadedClasses"] = NSLoadedClasses;
  let NSLocalizedDescriptionKey;
  global$2["NSLocalizedDescriptionKey"] = NSLocalizedDescriptionKey;
  let NSLocalizedFailureErrorKey;
  global$2["NSLocalizedFailureErrorKey"] = NSLocalizedFailureErrorKey;
  let NSLocalizedFailureReasonErrorKey;
  global$2["NSLocalizedFailureReasonErrorKey"] = NSLocalizedFailureReasonErrorKey;
  let NSLocalizedRecoveryOptionsErrorKey;
  global$2["NSLocalizedRecoveryOptionsErrorKey"] = NSLocalizedRecoveryOptionsErrorKey;
  let NSLocalizedRecoverySuggestionErrorKey;
  global$2["NSLocalizedRecoverySuggestionErrorKey"] = NSLocalizedRecoverySuggestionErrorKey;
  let NSMachErrorDomain;
  global$2["NSMachErrorDomain"] = NSMachErrorDomain;
  let NSMapTableCopyIn;
  global$2["NSMapTableCopyIn"] = NSMapTableCopyIn;
  let NSMapTableObjectPointerPersonality;
  global$2["NSMapTableObjectPointerPersonality"] = NSMapTableObjectPointerPersonality;
  let NSMapTableStrongMemory;
  global$2["NSMapTableStrongMemory"] = NSMapTableStrongMemory;
  let NSMapTableWeakMemory;
  global$2["NSMapTableWeakMemory"] = NSMapTableWeakMemory;
  let NSMetadataItemAcquisitionMakeKey;
  global$2["NSMetadataItemAcquisitionMakeKey"] = NSMetadataItemAcquisitionMakeKey;
  let NSMetadataItemAcquisitionModelKey;
  global$2["NSMetadataItemAcquisitionModelKey"] = NSMetadataItemAcquisitionModelKey;
  let NSMetadataItemAlbumKey;
  global$2["NSMetadataItemAlbumKey"] = NSMetadataItemAlbumKey;
  let NSMetadataItemAltitudeKey;
  global$2["NSMetadataItemAltitudeKey"] = NSMetadataItemAltitudeKey;
  let NSMetadataItemApertureKey;
  global$2["NSMetadataItemApertureKey"] = NSMetadataItemApertureKey;
  let NSMetadataItemAppleLoopDescriptorsKey;
  global$2["NSMetadataItemAppleLoopDescriptorsKey"] = NSMetadataItemAppleLoopDescriptorsKey;
  let NSMetadataItemAppleLoopsKeyFilterTypeKey;
  global$2["NSMetadataItemAppleLoopsKeyFilterTypeKey"] = NSMetadataItemAppleLoopsKeyFilterTypeKey;
  let NSMetadataItemAppleLoopsLoopModeKey;
  global$2["NSMetadataItemAppleLoopsLoopModeKey"] = NSMetadataItemAppleLoopsLoopModeKey;
  let NSMetadataItemAppleLoopsRootKeyKey;
  global$2["NSMetadataItemAppleLoopsRootKeyKey"] = NSMetadataItemAppleLoopsRootKeyKey;
  let NSMetadataItemApplicationCategoriesKey;
  global$2["NSMetadataItemApplicationCategoriesKey"] = NSMetadataItemApplicationCategoriesKey;
  let NSMetadataItemAttributeChangeDateKey;
  global$2["NSMetadataItemAttributeChangeDateKey"] = NSMetadataItemAttributeChangeDateKey;
  let NSMetadataItemAudiencesKey;
  global$2["NSMetadataItemAudiencesKey"] = NSMetadataItemAudiencesKey;
  let NSMetadataItemAudioBitRateKey;
  global$2["NSMetadataItemAudioBitRateKey"] = NSMetadataItemAudioBitRateKey;
  let NSMetadataItemAudioChannelCountKey;
  global$2["NSMetadataItemAudioChannelCountKey"] = NSMetadataItemAudioChannelCountKey;
  let NSMetadataItemAudioEncodingApplicationKey;
  global$2["NSMetadataItemAudioEncodingApplicationKey"] = NSMetadataItemAudioEncodingApplicationKey;
  let NSMetadataItemAudioSampleRateKey;
  global$2["NSMetadataItemAudioSampleRateKey"] = NSMetadataItemAudioSampleRateKey;
  let NSMetadataItemAudioTrackNumberKey;
  global$2["NSMetadataItemAudioTrackNumberKey"] = NSMetadataItemAudioTrackNumberKey;
  let NSMetadataItemAuthorAddressesKey;
  global$2["NSMetadataItemAuthorAddressesKey"] = NSMetadataItemAuthorAddressesKey;
  let NSMetadataItemAuthorEmailAddressesKey;
  global$2["NSMetadataItemAuthorEmailAddressesKey"] = NSMetadataItemAuthorEmailAddressesKey;
  let NSMetadataItemAuthorsKey;
  global$2["NSMetadataItemAuthorsKey"] = NSMetadataItemAuthorsKey;
  let NSMetadataItemBitsPerSampleKey;
  global$2["NSMetadataItemBitsPerSampleKey"] = NSMetadataItemBitsPerSampleKey;
  let NSMetadataItemCFBundleIdentifierKey;
  global$2["NSMetadataItemCFBundleIdentifierKey"] = NSMetadataItemCFBundleIdentifierKey;
  let NSMetadataItemCameraOwnerKey;
  global$2["NSMetadataItemCameraOwnerKey"] = NSMetadataItemCameraOwnerKey;
  let NSMetadataItemCityKey;
  global$2["NSMetadataItemCityKey"] = NSMetadataItemCityKey;
  let NSMetadataItemCodecsKey;
  global$2["NSMetadataItemCodecsKey"] = NSMetadataItemCodecsKey;
  let NSMetadataItemColorSpaceKey;
  global$2["NSMetadataItemColorSpaceKey"] = NSMetadataItemColorSpaceKey;
  let NSMetadataItemCommentKey;
  global$2["NSMetadataItemCommentKey"] = NSMetadataItemCommentKey;
  let NSMetadataItemComposerKey;
  global$2["NSMetadataItemComposerKey"] = NSMetadataItemComposerKey;
  let NSMetadataItemContactKeywordsKey;
  global$2["NSMetadataItemContactKeywordsKey"] = NSMetadataItemContactKeywordsKey;
  let NSMetadataItemContentCreationDateKey;
  global$2["NSMetadataItemContentCreationDateKey"] = NSMetadataItemContentCreationDateKey;
  let NSMetadataItemContentModificationDateKey;
  global$2["NSMetadataItemContentModificationDateKey"] = NSMetadataItemContentModificationDateKey;
  let NSMetadataItemContentTypeKey;
  global$2["NSMetadataItemContentTypeKey"] = NSMetadataItemContentTypeKey;
  let NSMetadataItemContentTypeTreeKey;
  global$2["NSMetadataItemContentTypeTreeKey"] = NSMetadataItemContentTypeTreeKey;
  let NSMetadataItemContributorsKey;
  global$2["NSMetadataItemContributorsKey"] = NSMetadataItemContributorsKey;
  let NSMetadataItemCopyrightKey;
  global$2["NSMetadataItemCopyrightKey"] = NSMetadataItemCopyrightKey;
  let NSMetadataItemCountryKey;
  global$2["NSMetadataItemCountryKey"] = NSMetadataItemCountryKey;
  let NSMetadataItemCoverageKey;
  global$2["NSMetadataItemCoverageKey"] = NSMetadataItemCoverageKey;
  let NSMetadataItemCreatorKey;
  global$2["NSMetadataItemCreatorKey"] = NSMetadataItemCreatorKey;
  let NSMetadataItemDateAddedKey;
  global$2["NSMetadataItemDateAddedKey"] = NSMetadataItemDateAddedKey;
  let NSMetadataItemDeliveryTypeKey;
  global$2["NSMetadataItemDeliveryTypeKey"] = NSMetadataItemDeliveryTypeKey;
  let NSMetadataItemDescriptionKey;
  global$2["NSMetadataItemDescriptionKey"] = NSMetadataItemDescriptionKey;
  let NSMetadataItemDirectorKey;
  global$2["NSMetadataItemDirectorKey"] = NSMetadataItemDirectorKey;
  let NSMetadataItemDisplayNameKey;
  global$2["NSMetadataItemDisplayNameKey"] = NSMetadataItemDisplayNameKey;
  let NSMetadataItemDownloadedDateKey;
  global$2["NSMetadataItemDownloadedDateKey"] = NSMetadataItemDownloadedDateKey;
  let NSMetadataItemDueDateKey;
  global$2["NSMetadataItemDueDateKey"] = NSMetadataItemDueDateKey;
  let NSMetadataItemDurationSecondsKey;
  global$2["NSMetadataItemDurationSecondsKey"] = NSMetadataItemDurationSecondsKey;
  let NSMetadataItemEXIFGPSVersionKey;
  global$2["NSMetadataItemEXIFGPSVersionKey"] = NSMetadataItemEXIFGPSVersionKey;
  let NSMetadataItemEXIFVersionKey;
  global$2["NSMetadataItemEXIFVersionKey"] = NSMetadataItemEXIFVersionKey;
  let NSMetadataItemEditorsKey;
  global$2["NSMetadataItemEditorsKey"] = NSMetadataItemEditorsKey;
  let NSMetadataItemEmailAddressesKey;
  global$2["NSMetadataItemEmailAddressesKey"] = NSMetadataItemEmailAddressesKey;
  let NSMetadataItemEncodingApplicationsKey;
  global$2["NSMetadataItemEncodingApplicationsKey"] = NSMetadataItemEncodingApplicationsKey;
  let NSMetadataItemExecutableArchitecturesKey;
  global$2["NSMetadataItemExecutableArchitecturesKey"] = NSMetadataItemExecutableArchitecturesKey;
  let NSMetadataItemExecutablePlatformKey;
  global$2["NSMetadataItemExecutablePlatformKey"] = NSMetadataItemExecutablePlatformKey;
  let NSMetadataItemExposureModeKey;
  global$2["NSMetadataItemExposureModeKey"] = NSMetadataItemExposureModeKey;
  let NSMetadataItemExposureProgramKey;
  global$2["NSMetadataItemExposureProgramKey"] = NSMetadataItemExposureProgramKey;
  let NSMetadataItemExposureTimeSecondsKey;
  global$2["NSMetadataItemExposureTimeSecondsKey"] = NSMetadataItemExposureTimeSecondsKey;
  let NSMetadataItemExposureTimeStringKey;
  global$2["NSMetadataItemExposureTimeStringKey"] = NSMetadataItemExposureTimeStringKey;
  let NSMetadataItemFNumberKey;
  global$2["NSMetadataItemFNumberKey"] = NSMetadataItemFNumberKey;
  let NSMetadataItemFSContentChangeDateKey;
  global$2["NSMetadataItemFSContentChangeDateKey"] = NSMetadataItemFSContentChangeDateKey;
  let NSMetadataItemFSCreationDateKey;
  global$2["NSMetadataItemFSCreationDateKey"] = NSMetadataItemFSCreationDateKey;
  let NSMetadataItemFSNameKey;
  global$2["NSMetadataItemFSNameKey"] = NSMetadataItemFSNameKey;
  let NSMetadataItemFSSizeKey;
  global$2["NSMetadataItemFSSizeKey"] = NSMetadataItemFSSizeKey;
  let NSMetadataItemFinderCommentKey;
  global$2["NSMetadataItemFinderCommentKey"] = NSMetadataItemFinderCommentKey;
  let NSMetadataItemFlashOnOffKey;
  global$2["NSMetadataItemFlashOnOffKey"] = NSMetadataItemFlashOnOffKey;
  let NSMetadataItemFocalLength35mmKey;
  global$2["NSMetadataItemFocalLength35mmKey"] = NSMetadataItemFocalLength35mmKey;
  let NSMetadataItemFocalLengthKey;
  global$2["NSMetadataItemFocalLengthKey"] = NSMetadataItemFocalLengthKey;
  let NSMetadataItemFontsKey;
  global$2["NSMetadataItemFontsKey"] = NSMetadataItemFontsKey;
  let NSMetadataItemGPSAreaInformationKey;
  global$2["NSMetadataItemGPSAreaInformationKey"] = NSMetadataItemGPSAreaInformationKey;
  let NSMetadataItemGPSDOPKey;
  global$2["NSMetadataItemGPSDOPKey"] = NSMetadataItemGPSDOPKey;
  let NSMetadataItemGPSDateStampKey;
  global$2["NSMetadataItemGPSDateStampKey"] = NSMetadataItemGPSDateStampKey;
  let NSMetadataItemGPSDestBearingKey;
  global$2["NSMetadataItemGPSDestBearingKey"] = NSMetadataItemGPSDestBearingKey;
  let NSMetadataItemGPSDestDistanceKey;
  global$2["NSMetadataItemGPSDestDistanceKey"] = NSMetadataItemGPSDestDistanceKey;
  let NSMetadataItemGPSDestLatitudeKey;
  global$2["NSMetadataItemGPSDestLatitudeKey"] = NSMetadataItemGPSDestLatitudeKey;
  let NSMetadataItemGPSDestLongitudeKey;
  global$2["NSMetadataItemGPSDestLongitudeKey"] = NSMetadataItemGPSDestLongitudeKey;
  let NSMetadataItemGPSDifferentalKey;
  global$2["NSMetadataItemGPSDifferentalKey"] = NSMetadataItemGPSDifferentalKey;
  let NSMetadataItemGPSMapDatumKey;
  global$2["NSMetadataItemGPSMapDatumKey"] = NSMetadataItemGPSMapDatumKey;
  let NSMetadataItemGPSMeasureModeKey;
  global$2["NSMetadataItemGPSMeasureModeKey"] = NSMetadataItemGPSMeasureModeKey;
  let NSMetadataItemGPSProcessingMethodKey;
  global$2["NSMetadataItemGPSProcessingMethodKey"] = NSMetadataItemGPSProcessingMethodKey;
  let NSMetadataItemGPSStatusKey;
  global$2["NSMetadataItemGPSStatusKey"] = NSMetadataItemGPSStatusKey;
  let NSMetadataItemGPSTrackKey;
  global$2["NSMetadataItemGPSTrackKey"] = NSMetadataItemGPSTrackKey;
  let NSMetadataItemGenreKey;
  global$2["NSMetadataItemGenreKey"] = NSMetadataItemGenreKey;
  let NSMetadataItemHasAlphaChannelKey;
  global$2["NSMetadataItemHasAlphaChannelKey"] = NSMetadataItemHasAlphaChannelKey;
  let NSMetadataItemHeadlineKey;
  global$2["NSMetadataItemHeadlineKey"] = NSMetadataItemHeadlineKey;
  let NSMetadataItemISOSpeedKey;
  global$2["NSMetadataItemISOSpeedKey"] = NSMetadataItemISOSpeedKey;
  let NSMetadataItemIdentifierKey;
  global$2["NSMetadataItemIdentifierKey"] = NSMetadataItemIdentifierKey;
  let NSMetadataItemImageDirectionKey;
  global$2["NSMetadataItemImageDirectionKey"] = NSMetadataItemImageDirectionKey;
  let NSMetadataItemInformationKey;
  global$2["NSMetadataItemInformationKey"] = NSMetadataItemInformationKey;
  let NSMetadataItemInstantMessageAddressesKey;
  global$2["NSMetadataItemInstantMessageAddressesKey"] = NSMetadataItemInstantMessageAddressesKey;
  let NSMetadataItemInstructionsKey;
  global$2["NSMetadataItemInstructionsKey"] = NSMetadataItemInstructionsKey;
  let NSMetadataItemIsApplicationManagedKey;
  global$2["NSMetadataItemIsApplicationManagedKey"] = NSMetadataItemIsApplicationManagedKey;
  let NSMetadataItemIsGeneralMIDISequenceKey;
  global$2["NSMetadataItemIsGeneralMIDISequenceKey"] = NSMetadataItemIsGeneralMIDISequenceKey;
  let NSMetadataItemIsLikelyJunkKey;
  global$2["NSMetadataItemIsLikelyJunkKey"] = NSMetadataItemIsLikelyJunkKey;
  let NSMetadataItemIsUbiquitousKey;
  global$2["NSMetadataItemIsUbiquitousKey"] = NSMetadataItemIsUbiquitousKey;
  let NSMetadataItemKeySignatureKey;
  global$2["NSMetadataItemKeySignatureKey"] = NSMetadataItemKeySignatureKey;
  let NSMetadataItemKeywordsKey;
  global$2["NSMetadataItemKeywordsKey"] = NSMetadataItemKeywordsKey;
  let NSMetadataItemKindKey;
  global$2["NSMetadataItemKindKey"] = NSMetadataItemKindKey;
  let NSMetadataItemLanguagesKey;
  global$2["NSMetadataItemLanguagesKey"] = NSMetadataItemLanguagesKey;
  let NSMetadataItemLastUsedDateKey;
  global$2["NSMetadataItemLastUsedDateKey"] = NSMetadataItemLastUsedDateKey;
  let NSMetadataItemLatitudeKey;
  global$2["NSMetadataItemLatitudeKey"] = NSMetadataItemLatitudeKey;
  let NSMetadataItemLayerNamesKey;
  global$2["NSMetadataItemLayerNamesKey"] = NSMetadataItemLayerNamesKey;
  let NSMetadataItemLensModelKey;
  global$2["NSMetadataItemLensModelKey"] = NSMetadataItemLensModelKey;
  let NSMetadataItemLongitudeKey;
  global$2["NSMetadataItemLongitudeKey"] = NSMetadataItemLongitudeKey;
  let NSMetadataItemLyricistKey;
  global$2["NSMetadataItemLyricistKey"] = NSMetadataItemLyricistKey;
  let NSMetadataItemMaxApertureKey;
  global$2["NSMetadataItemMaxApertureKey"] = NSMetadataItemMaxApertureKey;
  let NSMetadataItemMediaTypesKey;
  global$2["NSMetadataItemMediaTypesKey"] = NSMetadataItemMediaTypesKey;
  let NSMetadataItemMeteringModeKey;
  global$2["NSMetadataItemMeteringModeKey"] = NSMetadataItemMeteringModeKey;
  let NSMetadataItemMusicalGenreKey;
  global$2["NSMetadataItemMusicalGenreKey"] = NSMetadataItemMusicalGenreKey;
  let NSMetadataItemMusicalInstrumentCategoryKey;
  global$2["NSMetadataItemMusicalInstrumentCategoryKey"] = NSMetadataItemMusicalInstrumentCategoryKey;
  let NSMetadataItemMusicalInstrumentNameKey;
  global$2["NSMetadataItemMusicalInstrumentNameKey"] = NSMetadataItemMusicalInstrumentNameKey;
  let NSMetadataItemNamedLocationKey;
  global$2["NSMetadataItemNamedLocationKey"] = NSMetadataItemNamedLocationKey;
  let NSMetadataItemNumberOfPagesKey;
  global$2["NSMetadataItemNumberOfPagesKey"] = NSMetadataItemNumberOfPagesKey;
  let NSMetadataItemOrganizationsKey;
  global$2["NSMetadataItemOrganizationsKey"] = NSMetadataItemOrganizationsKey;
  let NSMetadataItemOrientationKey;
  global$2["NSMetadataItemOrientationKey"] = NSMetadataItemOrientationKey;
  let NSMetadataItemOriginalFormatKey;
  global$2["NSMetadataItemOriginalFormatKey"] = NSMetadataItemOriginalFormatKey;
  let NSMetadataItemOriginalSourceKey;
  global$2["NSMetadataItemOriginalSourceKey"] = NSMetadataItemOriginalSourceKey;
  let NSMetadataItemPageHeightKey;
  global$2["NSMetadataItemPageHeightKey"] = NSMetadataItemPageHeightKey;
  let NSMetadataItemPageWidthKey;
  global$2["NSMetadataItemPageWidthKey"] = NSMetadataItemPageWidthKey;
  let NSMetadataItemParticipantsKey;
  global$2["NSMetadataItemParticipantsKey"] = NSMetadataItemParticipantsKey;
  let NSMetadataItemPathKey;
  global$2["NSMetadataItemPathKey"] = NSMetadataItemPathKey;
  let NSMetadataItemPerformersKey;
  global$2["NSMetadataItemPerformersKey"] = NSMetadataItemPerformersKey;
  let NSMetadataItemPhoneNumbersKey;
  global$2["NSMetadataItemPhoneNumbersKey"] = NSMetadataItemPhoneNumbersKey;
  let NSMetadataItemPixelCountKey;
  global$2["NSMetadataItemPixelCountKey"] = NSMetadataItemPixelCountKey;
  let NSMetadataItemPixelHeightKey;
  global$2["NSMetadataItemPixelHeightKey"] = NSMetadataItemPixelHeightKey;
  let NSMetadataItemPixelWidthKey;
  global$2["NSMetadataItemPixelWidthKey"] = NSMetadataItemPixelWidthKey;
  let NSMetadataItemProducerKey;
  global$2["NSMetadataItemProducerKey"] = NSMetadataItemProducerKey;
  let NSMetadataItemProfileNameKey;
  global$2["NSMetadataItemProfileNameKey"] = NSMetadataItemProfileNameKey;
  let NSMetadataItemProjectsKey;
  global$2["NSMetadataItemProjectsKey"] = NSMetadataItemProjectsKey;
  let NSMetadataItemPublishersKey;
  global$2["NSMetadataItemPublishersKey"] = NSMetadataItemPublishersKey;
  let NSMetadataItemRecipientAddressesKey;
  global$2["NSMetadataItemRecipientAddressesKey"] = NSMetadataItemRecipientAddressesKey;
  let NSMetadataItemRecipientEmailAddressesKey;
  global$2["NSMetadataItemRecipientEmailAddressesKey"] = NSMetadataItemRecipientEmailAddressesKey;
  let NSMetadataItemRecipientsKey;
  global$2["NSMetadataItemRecipientsKey"] = NSMetadataItemRecipientsKey;
  let NSMetadataItemRecordingDateKey;
  global$2["NSMetadataItemRecordingDateKey"] = NSMetadataItemRecordingDateKey;
  let NSMetadataItemRecordingYearKey;
  global$2["NSMetadataItemRecordingYearKey"] = NSMetadataItemRecordingYearKey;
  let NSMetadataItemRedEyeOnOffKey;
  global$2["NSMetadataItemRedEyeOnOffKey"] = NSMetadataItemRedEyeOnOffKey;
  let NSMetadataItemResolutionHeightDPIKey;
  global$2["NSMetadataItemResolutionHeightDPIKey"] = NSMetadataItemResolutionHeightDPIKey;
  let NSMetadataItemResolutionWidthDPIKey;
  global$2["NSMetadataItemResolutionWidthDPIKey"] = NSMetadataItemResolutionWidthDPIKey;
  let NSMetadataItemRightsKey;
  global$2["NSMetadataItemRightsKey"] = NSMetadataItemRightsKey;
  let NSMetadataItemSecurityMethodKey;
  global$2["NSMetadataItemSecurityMethodKey"] = NSMetadataItemSecurityMethodKey;
  let NSMetadataItemSpeedKey;
  global$2["NSMetadataItemSpeedKey"] = NSMetadataItemSpeedKey;
  let NSMetadataItemStarRatingKey;
  global$2["NSMetadataItemStarRatingKey"] = NSMetadataItemStarRatingKey;
  let NSMetadataItemStateOrProvinceKey;
  global$2["NSMetadataItemStateOrProvinceKey"] = NSMetadataItemStateOrProvinceKey;
  let NSMetadataItemStreamableKey;
  global$2["NSMetadataItemStreamableKey"] = NSMetadataItemStreamableKey;
  let NSMetadataItemSubjectKey;
  global$2["NSMetadataItemSubjectKey"] = NSMetadataItemSubjectKey;
  let NSMetadataItemTempoKey;
  global$2["NSMetadataItemTempoKey"] = NSMetadataItemTempoKey;
  let NSMetadataItemTextContentKey;
  global$2["NSMetadataItemTextContentKey"] = NSMetadataItemTextContentKey;
  let NSMetadataItemThemeKey;
  global$2["NSMetadataItemThemeKey"] = NSMetadataItemThemeKey;
  let NSMetadataItemTimeSignatureKey;
  global$2["NSMetadataItemTimeSignatureKey"] = NSMetadataItemTimeSignatureKey;
  let NSMetadataItemTimestampKey;
  global$2["NSMetadataItemTimestampKey"] = NSMetadataItemTimestampKey;
  let NSMetadataItemTitleKey;
  global$2["NSMetadataItemTitleKey"] = NSMetadataItemTitleKey;
  let NSMetadataItemTotalBitRateKey;
  global$2["NSMetadataItemTotalBitRateKey"] = NSMetadataItemTotalBitRateKey;
  let NSMetadataItemURLKey;
  global$2["NSMetadataItemURLKey"] = NSMetadataItemURLKey;
  let NSMetadataItemVersionKey;
  global$2["NSMetadataItemVersionKey"] = NSMetadataItemVersionKey;
  let NSMetadataItemVideoBitRateKey;
  global$2["NSMetadataItemVideoBitRateKey"] = NSMetadataItemVideoBitRateKey;
  let NSMetadataItemWhereFromsKey;
  global$2["NSMetadataItemWhereFromsKey"] = NSMetadataItemWhereFromsKey;
  let NSMetadataItemWhiteBalanceKey;
  global$2["NSMetadataItemWhiteBalanceKey"] = NSMetadataItemWhiteBalanceKey;
  let NSMetadataQueryAccessibleUbiquitousExternalDocumentsScope;
  global$2["NSMetadataQueryAccessibleUbiquitousExternalDocumentsScope"] = NSMetadataQueryAccessibleUbiquitousExternalDocumentsScope;
  let NSMetadataQueryIndexedLocalComputerScope;
  global$2["NSMetadataQueryIndexedLocalComputerScope"] = NSMetadataQueryIndexedLocalComputerScope;
  let NSMetadataQueryIndexedNetworkScope;
  global$2["NSMetadataQueryIndexedNetworkScope"] = NSMetadataQueryIndexedNetworkScope;
  let NSMetadataQueryLocalComputerScope;
  global$2["NSMetadataQueryLocalComputerScope"] = NSMetadataQueryLocalComputerScope;
  let NSMetadataQueryNetworkScope;
  global$2["NSMetadataQueryNetworkScope"] = NSMetadataQueryNetworkScope;
  let NSMetadataQueryResultContentRelevanceAttribute;
  global$2["NSMetadataQueryResultContentRelevanceAttribute"] = NSMetadataQueryResultContentRelevanceAttribute;
  let NSMetadataQueryUbiquitousDataScope;
  global$2["NSMetadataQueryUbiquitousDataScope"] = NSMetadataQueryUbiquitousDataScope;
  let NSMetadataQueryUbiquitousDocumentsScope;
  global$2["NSMetadataQueryUbiquitousDocumentsScope"] = NSMetadataQueryUbiquitousDocumentsScope;
  let NSMetadataQueryUpdateAddedItemsKey;
  global$2["NSMetadataQueryUpdateAddedItemsKey"] = NSMetadataQueryUpdateAddedItemsKey;
  let NSMetadataQueryUpdateChangedItemsKey;
  global$2["NSMetadataQueryUpdateChangedItemsKey"] = NSMetadataQueryUpdateChangedItemsKey;
  let NSMetadataQueryUpdateRemovedItemsKey;
  global$2["NSMetadataQueryUpdateRemovedItemsKey"] = NSMetadataQueryUpdateRemovedItemsKey;
  let NSMetadataQueryUserHomeScope;
  global$2["NSMetadataQueryUserHomeScope"] = NSMetadataQueryUserHomeScope;
  let NSMetadataUbiquitousItemContainerDisplayNameKey;
  global$2["NSMetadataUbiquitousItemContainerDisplayNameKey"] = NSMetadataUbiquitousItemContainerDisplayNameKey;
  let NSMetadataUbiquitousItemDownloadRequestedKey;
  global$2["NSMetadataUbiquitousItemDownloadRequestedKey"] = NSMetadataUbiquitousItemDownloadRequestedKey;
  let NSMetadataUbiquitousItemDownloadingErrorKey;
  global$2["NSMetadataUbiquitousItemDownloadingErrorKey"] = NSMetadataUbiquitousItemDownloadingErrorKey;
  let NSMetadataUbiquitousItemDownloadingStatusCurrent;
  global$2["NSMetadataUbiquitousItemDownloadingStatusCurrent"] = NSMetadataUbiquitousItemDownloadingStatusCurrent;
  let NSMetadataUbiquitousItemDownloadingStatusDownloaded;
  global$2["NSMetadataUbiquitousItemDownloadingStatusDownloaded"] = NSMetadataUbiquitousItemDownloadingStatusDownloaded;
  let NSMetadataUbiquitousItemDownloadingStatusKey;
  global$2["NSMetadataUbiquitousItemDownloadingStatusKey"] = NSMetadataUbiquitousItemDownloadingStatusKey;
  let NSMetadataUbiquitousItemDownloadingStatusNotDownloaded;
  global$2["NSMetadataUbiquitousItemDownloadingStatusNotDownloaded"] = NSMetadataUbiquitousItemDownloadingStatusNotDownloaded;
  let NSMetadataUbiquitousItemHasUnresolvedConflictsKey;
  global$2["NSMetadataUbiquitousItemHasUnresolvedConflictsKey"] = NSMetadataUbiquitousItemHasUnresolvedConflictsKey;
  let NSMetadataUbiquitousItemIsDownloadingKey;
  global$2["NSMetadataUbiquitousItemIsDownloadingKey"] = NSMetadataUbiquitousItemIsDownloadingKey;
  let NSMetadataUbiquitousItemIsExternalDocumentKey;
  global$2["NSMetadataUbiquitousItemIsExternalDocumentKey"] = NSMetadataUbiquitousItemIsExternalDocumentKey;
  let NSMetadataUbiquitousItemIsSharedKey;
  global$2["NSMetadataUbiquitousItemIsSharedKey"] = NSMetadataUbiquitousItemIsSharedKey;
  let NSMetadataUbiquitousItemIsUploadedKey;
  global$2["NSMetadataUbiquitousItemIsUploadedKey"] = NSMetadataUbiquitousItemIsUploadedKey;
  let NSMetadataUbiquitousItemIsUploadingKey;
  global$2["NSMetadataUbiquitousItemIsUploadingKey"] = NSMetadataUbiquitousItemIsUploadingKey;
  let NSMetadataUbiquitousItemPercentDownloadedKey;
  global$2["NSMetadataUbiquitousItemPercentDownloadedKey"] = NSMetadataUbiquitousItemPercentDownloadedKey;
  let NSMetadataUbiquitousItemPercentUploadedKey;
  global$2["NSMetadataUbiquitousItemPercentUploadedKey"] = NSMetadataUbiquitousItemPercentUploadedKey;
  let NSMetadataUbiquitousItemURLInLocalContainerKey;
  global$2["NSMetadataUbiquitousItemURLInLocalContainerKey"] = NSMetadataUbiquitousItemURLInLocalContainerKey;
  let NSMetadataUbiquitousItemUploadingErrorKey;
  global$2["NSMetadataUbiquitousItemUploadingErrorKey"] = NSMetadataUbiquitousItemUploadingErrorKey;
  let NSMetadataUbiquitousSharedItemCurrentUserPermissionsKey;
  global$2["NSMetadataUbiquitousSharedItemCurrentUserPermissionsKey"] = NSMetadataUbiquitousSharedItemCurrentUserPermissionsKey;
  let NSMetadataUbiquitousSharedItemCurrentUserRoleKey;
  global$2["NSMetadataUbiquitousSharedItemCurrentUserRoleKey"] = NSMetadataUbiquitousSharedItemCurrentUserRoleKey;
  let NSMetadataUbiquitousSharedItemMostRecentEditorNameComponentsKey;
  global$2["NSMetadataUbiquitousSharedItemMostRecentEditorNameComponentsKey"] = NSMetadataUbiquitousSharedItemMostRecentEditorNameComponentsKey;
  let NSMetadataUbiquitousSharedItemOwnerNameComponentsKey;
  global$2["NSMetadataUbiquitousSharedItemOwnerNameComponentsKey"] = NSMetadataUbiquitousSharedItemOwnerNameComponentsKey;
  let NSMetadataUbiquitousSharedItemPermissionsReadOnly;
  global$2["NSMetadataUbiquitousSharedItemPermissionsReadOnly"] = NSMetadataUbiquitousSharedItemPermissionsReadOnly;
  let NSMetadataUbiquitousSharedItemPermissionsReadWrite;
  global$2["NSMetadataUbiquitousSharedItemPermissionsReadWrite"] = NSMetadataUbiquitousSharedItemPermissionsReadWrite;
  let NSMetadataUbiquitousSharedItemRoleOwner;
  global$2["NSMetadataUbiquitousSharedItemRoleOwner"] = NSMetadataUbiquitousSharedItemRoleOwner;
  let NSMetadataUbiquitousSharedItemRoleParticipant;
  global$2["NSMetadataUbiquitousSharedItemRoleParticipant"] = NSMetadataUbiquitousSharedItemRoleParticipant;
  let NSNonOwnedPointerHashCallBacks;
  global$2["NSNonOwnedPointerHashCallBacks"] = NSNonOwnedPointerHashCallBacks;
  let NSNonOwnedPointerMapKeyCallBacks;
  global$2["NSNonOwnedPointerMapKeyCallBacks"] = NSNonOwnedPointerMapKeyCallBacks;
  let NSNonOwnedPointerMapValueCallBacks;
  global$2["NSNonOwnedPointerMapValueCallBacks"] = NSNonOwnedPointerMapValueCallBacks;
  let NSNonOwnedPointerOrNullMapKeyCallBacks;
  global$2["NSNonOwnedPointerOrNullMapKeyCallBacks"] = NSNonOwnedPointerOrNullMapKeyCallBacks;
  let NSNonRetainedObjectHashCallBacks;
  global$2["NSNonRetainedObjectHashCallBacks"] = NSNonRetainedObjectHashCallBacks;
  let NSNonRetainedObjectMapKeyCallBacks;
  global$2["NSNonRetainedObjectMapKeyCallBacks"] = NSNonRetainedObjectMapKeyCallBacks;
  let NSNonRetainedObjectMapValueCallBacks;
  global$2["NSNonRetainedObjectMapValueCallBacks"] = NSNonRetainedObjectMapValueCallBacks;
  let NSNotFound;
  global$2["NSNotFound"] = NSNotFound;
  let NSNotificationDeliverImmediately;
  global$2["NSNotificationDeliverImmediately"] = NSNotificationDeliverImmediately;
  let NSNotificationPostToAllSessions;
  global$2["NSNotificationPostToAllSessions"] = NSNotificationPostToAllSessions;
  let NSOSStatusErrorDomain;
  global$2["NSOSStatusErrorDomain"] = NSOSStatusErrorDomain;
  let NSObjectHashCallBacks;
  global$2["NSObjectHashCallBacks"] = NSObjectHashCallBacks;
  let NSObjectMapKeyCallBacks;
  global$2["NSObjectMapKeyCallBacks"] = NSObjectMapKeyCallBacks;
  let NSObjectMapValueCallBacks;
  global$2["NSObjectMapValueCallBacks"] = NSObjectMapValueCallBacks;
  let NSOperationNotSupportedForKeyException;
  global$2["NSOperationNotSupportedForKeyException"] = NSOperationNotSupportedForKeyException;
  let NSOwnedObjectIdentityHashCallBacks;
  global$2["NSOwnedObjectIdentityHashCallBacks"] = NSOwnedObjectIdentityHashCallBacks;
  let NSOwnedPointerHashCallBacks;
  global$2["NSOwnedPointerHashCallBacks"] = NSOwnedPointerHashCallBacks;
  let NSOwnedPointerMapKeyCallBacks;
  global$2["NSOwnedPointerMapKeyCallBacks"] = NSOwnedPointerMapKeyCallBacks;
  let NSOwnedPointerMapValueCallBacks;
  global$2["NSOwnedPointerMapValueCallBacks"] = NSOwnedPointerMapValueCallBacks;
  let NSPOSIXErrorDomain;
  global$2["NSPOSIXErrorDomain"] = NSPOSIXErrorDomain;
  let NSPersonNameComponentDelimiter;
  global$2["NSPersonNameComponentDelimiter"] = NSPersonNameComponentDelimiter;
  let NSPersonNameComponentFamilyName;
  global$2["NSPersonNameComponentFamilyName"] = NSPersonNameComponentFamilyName;
  let NSPersonNameComponentGivenName;
  global$2["NSPersonNameComponentGivenName"] = NSPersonNameComponentGivenName;
  let NSPersonNameComponentKey;
  global$2["NSPersonNameComponentKey"] = NSPersonNameComponentKey;
  let NSPersonNameComponentMiddleName;
  global$2["NSPersonNameComponentMiddleName"] = NSPersonNameComponentMiddleName;
  let NSPersonNameComponentNickname;
  global$2["NSPersonNameComponentNickname"] = NSPersonNameComponentNickname;
  let NSPersonNameComponentPrefix;
  global$2["NSPersonNameComponentPrefix"] = NSPersonNameComponentPrefix;
  let NSPersonNameComponentSuffix;
  global$2["NSPersonNameComponentSuffix"] = NSPersonNameComponentSuffix;
  let NSPointerToStructHashCallBacks;
  global$2["NSPointerToStructHashCallBacks"] = NSPointerToStructHashCallBacks;
  let NSRecoveryAttempterErrorKey;
  global$2["NSRecoveryAttempterErrorKey"] = NSRecoveryAttempterErrorKey;
  let NSStreamSOCKSErrorDomain;
  global$2["NSStreamSOCKSErrorDomain"] = NSStreamSOCKSErrorDomain;
  let NSStreamSocketSSLErrorDomain;
  global$2["NSStreamSocketSSLErrorDomain"] = NSStreamSocketSSLErrorDomain;
  let NSStringEncodingErrorKey;
  global$2["NSStringEncodingErrorKey"] = NSStringEncodingErrorKey;
  let NSURLAuthenticationMethodClientCertificate;
  global$2["NSURLAuthenticationMethodClientCertificate"] = NSURLAuthenticationMethodClientCertificate;
  let NSURLAuthenticationMethodDefault;
  global$2["NSURLAuthenticationMethodDefault"] = NSURLAuthenticationMethodDefault;
  let NSURLAuthenticationMethodHTMLForm;
  global$2["NSURLAuthenticationMethodHTMLForm"] = NSURLAuthenticationMethodHTMLForm;
  let NSURLAuthenticationMethodHTTPBasic;
  global$2["NSURLAuthenticationMethodHTTPBasic"] = NSURLAuthenticationMethodHTTPBasic;
  let NSURLAuthenticationMethodHTTPDigest;
  global$2["NSURLAuthenticationMethodHTTPDigest"] = NSURLAuthenticationMethodHTTPDigest;
  let NSURLAuthenticationMethodNTLM;
  global$2["NSURLAuthenticationMethodNTLM"] = NSURLAuthenticationMethodNTLM;
  let NSURLAuthenticationMethodNegotiate;
  global$2["NSURLAuthenticationMethodNegotiate"] = NSURLAuthenticationMethodNegotiate;
  let NSURLAuthenticationMethodServerTrust;
  global$2["NSURLAuthenticationMethodServerTrust"] = NSURLAuthenticationMethodServerTrust;
  let NSURLCredentialStorageRemoveSynchronizableCredentials;
  global$2["NSURLCredentialStorageRemoveSynchronizableCredentials"] = NSURLCredentialStorageRemoveSynchronizableCredentials;
  let NSURLErrorBackgroundTaskCancelledReasonKey;
  global$2["NSURLErrorBackgroundTaskCancelledReasonKey"] = NSURLErrorBackgroundTaskCancelledReasonKey;
  let NSURLErrorDomain;
  global$2["NSURLErrorDomain"] = NSURLErrorDomain;
  let NSURLErrorFailingURLErrorKey;
  global$2["NSURLErrorFailingURLErrorKey"] = NSURLErrorFailingURLErrorKey;
  let NSURLErrorFailingURLPeerTrustErrorKey;
  global$2["NSURLErrorFailingURLPeerTrustErrorKey"] = NSURLErrorFailingURLPeerTrustErrorKey;
  let NSURLErrorFailingURLStringErrorKey;
  global$2["NSURLErrorFailingURLStringErrorKey"] = NSURLErrorFailingURLStringErrorKey;
  let NSURLErrorKey;
  global$2["NSURLErrorKey"] = NSURLErrorKey;
  let NSURLErrorNetworkUnavailableReasonKey;
  global$2["NSURLErrorNetworkUnavailableReasonKey"] = NSURLErrorNetworkUnavailableReasonKey;
  let NSURLFileScheme;
  global$2["NSURLFileScheme"] = NSURLFileScheme;
  let NSURLProtectionSpaceFTP;
  global$2["NSURLProtectionSpaceFTP"] = NSURLProtectionSpaceFTP;
  let NSURLProtectionSpaceFTPProxy;
  global$2["NSURLProtectionSpaceFTPProxy"] = NSURLProtectionSpaceFTPProxy;
  let NSURLProtectionSpaceHTTP;
  global$2["NSURLProtectionSpaceHTTP"] = NSURLProtectionSpaceHTTP;
  let NSURLProtectionSpaceHTTPProxy;
  global$2["NSURLProtectionSpaceHTTPProxy"] = NSURLProtectionSpaceHTTPProxy;
  let NSURLProtectionSpaceHTTPS;
  global$2["NSURLProtectionSpaceHTTPS"] = NSURLProtectionSpaceHTTPS;
  let NSURLProtectionSpaceHTTPSProxy;
  global$2["NSURLProtectionSpaceHTTPSProxy"] = NSURLProtectionSpaceHTTPSProxy;
  let NSURLProtectionSpaceSOCKSProxy;
  global$2["NSURLProtectionSpaceSOCKSProxy"] = NSURLProtectionSpaceSOCKSProxy;
  let NSURLSessionDownloadTaskResumeData;
  global$2["NSURLSessionDownloadTaskResumeData"] = NSURLSessionDownloadTaskResumeData;
  let NSURLSessionTransferSizeUnknown;
  global$2["NSURLSessionTransferSizeUnknown"] = NSURLSessionTransferSizeUnknown;
  let NSUbiquitousKeyValueStoreChangeReasonKey;
  global$2["NSUbiquitousKeyValueStoreChangeReasonKey"] = NSUbiquitousKeyValueStoreChangeReasonKey;
  let NSUbiquitousKeyValueStoreChangedKeysKey;
  global$2["NSUbiquitousKeyValueStoreChangedKeysKey"] = NSUbiquitousKeyValueStoreChangedKeysKey;
  let NSUnderlyingErrorKey;
  global$2["NSUnderlyingErrorKey"] = NSUnderlyingErrorKey;
  let NSUndoCloseGroupingRunLoopOrdering;
  global$2["NSUndoCloseGroupingRunLoopOrdering"] = NSUndoCloseGroupingRunLoopOrdering;
  let NSUndoManagerGroupIsDiscardableKey;
  global$2["NSUndoManagerGroupIsDiscardableKey"] = NSUndoManagerGroupIsDiscardableKey;
  let NSUserActivityTypeBrowsingWeb;
  global$2["NSUserActivityTypeBrowsingWeb"] = NSUserActivityTypeBrowsingWeb;
  let NSUserNotificationDefaultSoundName;
  global$2["NSUserNotificationDefaultSoundName"] = NSUserNotificationDefaultSoundName;
  let NSZeroPoint;
  global$2["NSZeroPoint"] = NSZeroPoint;
  let NSZeroRect;
  global$2["NSZeroRect"] = NSZeroRect;
  let NSZeroSize;
  global$2["NSZeroSize"] = NSZeroSize;
  let NSZombieEnabled;
  global$2["NSZombieEnabled"] = NSZombieEnabled;
  function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(",");
    for (let i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
  }
  function normalizeStyle(value) {
    if (isArray(value)) {
      const res = {};
      for (let i = 0; i < value.length; i++) {
        const item = value[i];
        const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
        if (normalized) {
          for (const key in normalized) {
            res[key] = normalized[key];
          }
        }
      }
      return res;
    } else if (isString(value)) {
      return value;
    } else if (isObject(value)) {
      return value;
    }
  }
  const listDelimiterRE = /;(?![^(]*\))/g;
  const propertyDelimiterRE = /:(.+)/;
  function parseStringStyle(cssText) {
    const ret = {};
    cssText.split(listDelimiterRE).forEach((item) => {
      if (item) {
        const tmp = item.split(propertyDelimiterRE);
        tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return ret;
  }
  function normalizeClass(value) {
    let res = "";
    if (isString(value)) {
      res = value;
    } else if (isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const normalized = normalizeClass(value[i]);
        if (normalized) {
          res += normalized + " ";
        }
      }
    } else if (isObject(value)) {
      for (const name in value) {
        if (value[name]) {
          res += name + " ";
        }
      }
    }
    return res.trim();
  }
  const EMPTY_OBJ = {};
  const EMPTY_ARR = [];
  const NOOP = () => {
  };
  const NO = () => false;
  const onRE = /^on[^a-z]/;
  const isOn = (key) => onRE.test(key);
  const isModelListener = (key) => key.startsWith("onUpdate:");
  const extend = Object.assign;
  const remove = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
      arr.splice(i, 1);
    }
  };
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const isArray = Array.isArray;
  const isMap = (val) => toTypeString(val) === "[object Map]";
  const isSet = (val) => toTypeString(val) === "[object Set]";
  const isFunction = (val) => typeof val === "function";
  const isString = (val) => typeof val === "string";
  const isSymbol = (val) => typeof val === "symbol";
  const isObject = (val) => val !== null && typeof val === "object";
  const isPromise = (val) => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
  };
  const objectToString = Object.prototype.toString;
  const toTypeString = (value) => objectToString.call(value);
  const toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  const isPlainObject = (val) => toTypeString(val) === "[object Object]";
  const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
  const isReservedProp = /* @__PURE__ */ makeMap(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
  const cacheStringFunction = (fn) => {
    const cache = Object.create(null);
    return (str) => {
      const hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  };
  const camelizeRE = /-(\w)/g;
  const camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
  });
  const hyphenateRE = /\B([A-Z])/g;
  const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
  const capitalize$1 = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
  const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize$1(str)}` : ``);
  const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
  const invokeArrayFns = (fns, arg) => {
    for (let i = 0; i < fns.length; i++) {
      fns[i](arg);
    }
  };
  const def = (obj, key, value) => {
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: false,
      value
    });
  };
  const toNumber = (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
  };
  let _globalThis;
  const getGlobalThis = () => {
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
  };
  let activeEffectScope;
  const effectScopeStack = [];
  class EffectScope {
    constructor(detached = false) {
      this.active = true;
      this.effects = [];
      this.cleanups = [];
      if (!detached && activeEffectScope) {
        this.parent = activeEffectScope;
        this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
      }
    }
    run(fn) {
      if (this.active) {
        try {
          this.on();
          return fn();
        } finally {
          this.off();
        }
      }
    }
    on() {
      if (this.active) {
        effectScopeStack.push(this);
        activeEffectScope = this;
      }
    }
    off() {
      if (this.active) {
        effectScopeStack.pop();
        activeEffectScope = effectScopeStack[effectScopeStack.length - 1];
      }
    }
    stop(fromParent) {
      if (this.active) {
        this.effects.forEach((e) => e.stop());
        this.cleanups.forEach((cleanup) => cleanup());
        if (this.scopes) {
          this.scopes.forEach((e) => e.stop(true));
        }
        if (this.parent && !fromParent) {
          const last = this.parent.scopes.pop();
          if (last && last !== this) {
            this.parent.scopes[this.index] = last;
            last.index = this.index;
          }
        }
        this.active = false;
      }
    }
  }
  function recordEffectScope(effect, scope) {
    scope = scope || activeEffectScope;
    if (scope && scope.active) {
      scope.effects.push(effect);
    }
  }
  const createDep = (effects) => {
    const dep = new Set(effects);
    dep.w = 0;
    dep.n = 0;
    return dep;
  };
  const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
  const newTracked = (dep) => (dep.n & trackOpBit) > 0;
  const initDepMarkers = ({ deps }) => {
    if (deps.length) {
      for (let i = 0; i < deps.length; i++) {
        deps[i].w |= trackOpBit;
      }
    }
  };
  const finalizeDepMarkers = (effect) => {
    const { deps } = effect;
    if (deps.length) {
      let ptr = 0;
      for (let i = 0; i < deps.length; i++) {
        const dep = deps[i];
        if (wasTracked(dep) && !newTracked(dep)) {
          dep.delete(effect);
        } else {
          deps[ptr++] = dep;
        }
        dep.w &= ~trackOpBit;
        dep.n &= ~trackOpBit;
      }
      deps.length = ptr;
    }
  };
  const targetMap = new WeakMap();
  let effectTrackDepth = 0;
  let trackOpBit = 1;
  const maxMarkerBits = 30;
  const effectStack = [];
  let activeEffect;
  const ITERATE_KEY = Symbol("");
  const MAP_KEY_ITERATE_KEY = Symbol("");
  class ReactiveEffect {
    constructor(fn, scheduler = null, scope) {
      this.fn = fn;
      this.scheduler = scheduler;
      this.active = true;
      this.deps = [];
      recordEffectScope(this, scope);
    }
    run() {
      if (!this.active) {
        return this.fn();
      }
      if (!effectStack.includes(this)) {
        try {
          effectStack.push(activeEffect = this);
          enableTracking();
          trackOpBit = 1 << ++effectTrackDepth;
          if (effectTrackDepth <= maxMarkerBits) {
            initDepMarkers(this);
          } else {
            cleanupEffect(this);
          }
          return this.fn();
        } finally {
          if (effectTrackDepth <= maxMarkerBits) {
            finalizeDepMarkers(this);
          }
          trackOpBit = 1 << --effectTrackDepth;
          resetTracking();
          effectStack.pop();
          const n = effectStack.length;
          activeEffect = n > 0 ? effectStack[n - 1] : void 0;
        }
      }
    }
    stop() {
      if (this.active) {
        cleanupEffect(this);
        if (this.onStop) {
          this.onStop();
        }
        this.active = false;
      }
    }
  }
  function cleanupEffect(effect) {
    const { deps } = effect;
    if (deps.length) {
      for (let i = 0; i < deps.length; i++) {
        deps[i].delete(effect);
      }
      deps.length = 0;
    }
  }
  let shouldTrack = true;
  const trackStack = [];
  function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
  }
  function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
  }
  function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
  }
  function track(target, type, key) {
    if (!isTracking()) {
      return;
    }
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = createDep());
    }
    trackEffects(dep);
  }
  function isTracking() {
    return shouldTrack && activeEffect !== void 0;
  }
  function trackEffects(dep, debuggerEventExtraInfo) {
    let shouldTrack2 = false;
    if (effectTrackDepth <= maxMarkerBits) {
      if (!newTracked(dep)) {
        dep.n |= trackOpBit;
        shouldTrack2 = !wasTracked(dep);
      }
    } else {
      shouldTrack2 = !dep.has(activeEffect);
    }
    if (shouldTrack2) {
      dep.add(activeEffect);
      activeEffect.deps.push(dep);
    }
  }
  function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
      return;
    }
    let deps = [];
    if (type === "clear") {
      deps = [...depsMap.values()];
    } else if (key === "length" && isArray(target)) {
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 >= newValue) {
          deps.push(dep);
        }
      });
    } else {
      if (key !== void 0) {
        deps.push(depsMap.get(key));
      }
      switch (type) {
        case "add":
          if (!isArray(target)) {
            deps.push(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isIntegerKey(key)) {
            deps.push(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!isArray(target)) {
            deps.push(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            deps.push(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
    if (deps.length === 1) {
      if (deps[0]) {
        {
          triggerEffects(deps[0]);
        }
      }
    } else {
      const effects = [];
      for (const dep of deps) {
        if (dep) {
          effects.push(...dep);
        }
      }
      {
        triggerEffects(createDep(effects));
      }
    }
  }
  function triggerEffects(dep, debuggerEventExtraInfo) {
    for (const effect of isArray(dep) ? dep : [...dep]) {
      if (effect !== activeEffect || effect.allowRecurse) {
        if (effect.scheduler) {
          effect.scheduler();
        } else {
          effect.run();
        }
      }
    }
  }
  const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
  const builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
  const get = /* @__PURE__ */ createGetter();
  const shallowGet = /* @__PURE__ */ createGetter(false, true);
  const readonlyGet = /* @__PURE__ */ createGetter(true);
  const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
  function createArrayInstrumentations() {
    const instrumentations = {};
    ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
      instrumentations[key] = function(...args) {
        const arr = toRaw(this);
        for (let i = 0, l = this.length; i < l; i++) {
          track(arr, "get", i + "");
        }
        const res = arr[key](...args);
        if (res === -1 || res === false) {
          return arr[key](...args.map(toRaw));
        } else {
          return res;
        }
      };
    });
    ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
      instrumentations[key] = function(...args) {
        pauseTracking();
        const res = toRaw(this)[key].apply(this, args);
        resetTracking();
        return res;
      };
    });
    return instrumentations;
  }
  function createGetter(isReadonly2 = false, shallow = false) {
    return function get2(target, key, receiver) {
      if (key === "__v_isReactive") {
        return !isReadonly2;
      } else if (key === "__v_isReadonly") {
        return isReadonly2;
      } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
        return target;
      }
      const targetIsArray = isArray(target);
      if (!isReadonly2 && targetIsArray && hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      const res = Reflect.get(target, key, receiver);
      if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
        return res;
      }
      if (!isReadonly2) {
        track(target, "get", key);
      }
      if (shallow) {
        return res;
      }
      if (isRef(res)) {
        const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
        return shouldUnwrap ? res.value : res;
      }
      if (isObject(res)) {
        return isReadonly2 ? readonly(res) : reactive(res);
      }
      return res;
    };
  }
  const set = /* @__PURE__ */ createSetter();
  const shallowSet = /* @__PURE__ */ createSetter(true);
  function createSetter(shallow = false) {
    return function set2(target, key, value, receiver) {
      let oldValue = target[key];
      if (!shallow) {
        value = toRaw(value);
        oldValue = toRaw(oldValue);
        if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        }
      }
      const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
      const result = Reflect.set(target, key, value, receiver);
      if (target === toRaw(receiver)) {
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value);
        }
      }
      return result;
    };
  }
  function deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0);
    }
    return result;
  }
  function has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  function ownKeys(target) {
    track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
  }
  const mutableHandlers = {
    get,
    set,
    deleteProperty,
    has,
    ownKeys
  };
  const readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
      return true;
    },
    deleteProperty(target, key) {
      return true;
    }
  };
  const shallowReactiveHandlers = /* @__PURE__ */ extend({}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet
  });
  const toShallow = (value) => value;
  const getProto = (v) => Reflect.getPrototypeOf(v);
  function get$1(target, key, isReadonly2 = false, isShallow = false) {
    target = target["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly2 && track(rawTarget, "get", key);
    }
    !isReadonly2 && track(rawTarget, "get", rawKey);
    const { has: has2 } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) {
      return wrap(target.get(key));
    } else if (has2.call(rawTarget, rawKey)) {
      return wrap(target.get(rawKey));
    } else if (target !== rawTarget) {
      target.get(key);
    }
  }
  function has$1(key, isReadonly2 = false) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly2 && track(rawTarget, "has", key);
    }
    !isReadonly2 && track(rawTarget, "has", rawKey);
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
  }
  function size(target, isReadonly2 = false) {
    target = target["__v_raw"];
    !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
  }
  function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
      target.add(value);
      trigger(target, "add", value, value);
    }
    return this;
  }
  function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2, get: get2 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    }
    const oldValue = get2.call(target, key);
    target.set(key, value);
    if (!hadKey) {
      trigger(target, "add", key, value);
    } else if (hasChanged(value, oldValue)) {
      trigger(target, "set", key, value);
    }
    return this;
  }
  function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has2, get: get2 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    }
    get2 ? get2.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) {
      trigger(target, "delete", key, void 0);
    }
    return result;
  }
  function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const result = target.clear();
    if (hadItems) {
      trigger(target, "clear", void 0, void 0);
    }
    return result;
  }
  function createForEach(isReadonly2, isShallow) {
    return function forEach(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw"];
      const rawTarget = toRaw(target);
      const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
      !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    };
  }
  function createIterableMethod(method, isReadonly2, isShallow) {
    return function(...args) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const targetIsMap = isMap(rawTarget);
      const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
      const isKeyOnly = method === "keys" && targetIsMap;
      const innerIterator = target[method](...args);
      const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
      !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
      return {
        next() {
          const { value, done } = innerIterator.next();
          return done ? { value, done } : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function createReadonlyMethod(type) {
    return function(...args) {
      return type === "delete" ? false : this;
    };
  }
  function createInstrumentations() {
    const mutableInstrumentations2 = {
      get(key) {
        return get$1(this, key);
      },
      get size() {
        return size(this);
      },
      has: has$1,
      add,
      set: set$1,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, false)
    };
    const shallowInstrumentations2 = {
      get(key) {
        return get$1(this, key, false, true);
      },
      get size() {
        return size(this);
      },
      has: has$1,
      add,
      set: set$1,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, true)
    };
    const readonlyInstrumentations2 = {
      get(key) {
        return get$1(this, key, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod("add"),
      set: createReadonlyMethod("set"),
      delete: createReadonlyMethod("delete"),
      clear: createReadonlyMethod("clear"),
      forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations2 = {
      get(key) {
        return get$1(this, key, true, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod("add"),
      set: createReadonlyMethod("set"),
      delete: createReadonlyMethod("delete"),
      clear: createReadonlyMethod("clear"),
      forEach: createForEach(true, true)
    };
    const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
    iteratorMethods.forEach((method) => {
      mutableInstrumentations2[method] = createIterableMethod(method, false, false);
      readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
      shallowInstrumentations2[method] = createIterableMethod(method, false, true);
      shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
    });
    return [
      mutableInstrumentations2,
      readonlyInstrumentations2,
      shallowInstrumentations2,
      shallowReadonlyInstrumentations2
    ];
  }
  const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
  function createInstrumentationGetter(isReadonly2, shallow) {
    const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver) => {
      if (key === "__v_isReactive") {
        return !isReadonly2;
      } else if (key === "__v_isReadonly") {
        return isReadonly2;
      } else if (key === "__v_raw") {
        return target;
      }
      return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
  }
  const mutableCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, false)
  };
  const shallowCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, true)
  };
  const readonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, false)
  };
  const reactiveMap = new WeakMap();
  const shallowReactiveMap = new WeakMap();
  const readonlyMap = new WeakMap();
  const shallowReadonlyMap = new WeakMap();
  function targetTypeMap(rawType) {
    switch (rawType) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
  }
  function reactive(target) {
    if (target && target["__v_isReadonly"]) {
      return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
  }
  function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
  }
  function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
  }
  function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
      return target;
    }
    if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
      return target;
    }
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
      return existingProxy;
    }
    const targetType = getTargetType(target);
    if (targetType === 0) {
      return target;
    }
    const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
  }
  function isReactive(value) {
    if (isReadonly(value)) {
      return isReactive(value["__v_raw"]);
    }
    return !!(value && value["__v_isReactive"]);
  }
  function isReadonly(value) {
    return !!(value && value["__v_isReadonly"]);
  }
  function isProxy(value) {
    return isReactive(value) || isReadonly(value);
  }
  function toRaw(observed) {
    const raw = observed && observed["__v_raw"];
    return raw ? toRaw(raw) : observed;
  }
  function markRaw(value) {
    def(value, "__v_skip", true);
    return value;
  }
  const toReactive = (value) => isObject(value) ? reactive(value) : value;
  const toReadonly = (value) => isObject(value) ? readonly(value) : value;
  function trackRefValue(ref) {
    if (isTracking()) {
      ref = toRaw(ref);
      if (!ref.dep) {
        ref.dep = createDep();
      }
      {
        trackEffects(ref.dep);
      }
    }
  }
  function triggerRefValue(ref, newVal) {
    ref = toRaw(ref);
    if (ref.dep) {
      {
        triggerEffects(ref.dep);
      }
    }
  }
  function isRef(r) {
    return Boolean(r && r.__v_isRef === true);
  }
  function unref(ref) {
    return isRef(ref) ? ref.value : ref;
  }
  const shallowUnwrapHandlers = {
    get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver) => {
      const oldValue = target[key];
      if (isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      } else {
        return Reflect.set(target, key, value, receiver);
      }
    }
  };
  function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
  }
  class ComputedRefImpl {
    constructor(getter, _setter, isReadonly2) {
      this._setter = _setter;
      this.dep = void 0;
      this._dirty = true;
      this.__v_isRef = true;
      this.effect = new ReactiveEffect(getter, () => {
        if (!this._dirty) {
          this._dirty = true;
          triggerRefValue(this);
        }
      });
      this["__v_isReadonly"] = isReadonly2;
    }
    get value() {
      const self2 = toRaw(this);
      trackRefValue(self2);
      if (self2._dirty) {
        self2._dirty = false;
        self2._value = self2.effect.run();
      }
      return self2._value;
    }
    set value(newValue) {
      this._setter(newValue);
    }
  }
  function computed(getterOrOptions, debugOptions) {
    let getter;
    let setter;
    const onlyGetter = isFunction(getterOrOptions);
    if (onlyGetter) {
      getter = getterOrOptions;
      setter = NOOP;
    } else {
      getter = getterOrOptions.get;
      setter = getterOrOptions.set;
    }
    const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter);
    return cRef;
  }
  Promise.resolve();
  function emit$1(instance, event, ...rawArgs) {
    const props = instance.vnode.props || EMPTY_OBJ;
    let args = rawArgs;
    const isModelListener2 = event.startsWith("update:");
    const modelArg = isModelListener2 && event.slice(7);
    if (modelArg && modelArg in props) {
      const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
      const { number, trim } = props[modifiersKey] || EMPTY_OBJ;
      if (trim) {
        args = rawArgs.map((a) => a.trim());
      } else if (number) {
        args = rawArgs.map(toNumber);
      }
    }
    let handlerName;
    let handler = props[handlerName = toHandlerKey(event)] || props[handlerName = toHandlerKey(camelize(event))];
    if (!handler && isModelListener2) {
      handler = props[handlerName = toHandlerKey(hyphenate(event))];
    }
    if (handler) {
      callWithAsyncErrorHandling(handler, instance, 6, args);
    }
    const onceHandler = props[handlerName + `Once`];
    if (onceHandler) {
      if (!instance.emitted) {
        instance.emitted = {};
      } else if (instance.emitted[handlerName]) {
        return;
      }
      instance.emitted[handlerName] = true;
      callWithAsyncErrorHandling(onceHandler, instance, 6, args);
    }
  }
  function normalizeEmitsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.emitsCache;
    const cached = cache.get(comp);
    if (cached !== void 0) {
      return cached;
    }
    const raw = comp.emits;
    let normalized = {};
    let hasExtends = false;
    if (!isFunction(comp)) {
      const extendEmits = (raw2) => {
        const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
        if (normalizedFromExtend) {
          hasExtends = true;
          extend(normalized, normalizedFromExtend);
        }
      };
      if (!asMixin && appContext.mixins.length) {
        appContext.mixins.forEach(extendEmits);
      }
      if (comp.extends) {
        extendEmits(comp.extends);
      }
      if (comp.mixins) {
        comp.mixins.forEach(extendEmits);
      }
    }
    if (!raw && !hasExtends) {
      cache.set(comp, null);
      return null;
    }
    if (isArray(raw)) {
      raw.forEach((key) => normalized[key] = null);
    } else {
      extend(normalized, raw);
    }
    cache.set(comp, normalized);
    return normalized;
  }
  function isEmitListener(options, key) {
    if (!options || !isOn(key)) {
      return false;
    }
    key = key.slice(2).replace(/Once$/, "");
    return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
  }
  let currentRenderingInstance = null;
  let currentScopeId = null;
  function setCurrentRenderingInstance(instance) {
    const prev = currentRenderingInstance;
    currentRenderingInstance = instance;
    currentScopeId = instance && instance.type.__scopeId || null;
    return prev;
  }
  function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
    if (!ctx)
      return fn;
    if (fn._n) {
      return fn;
    }
    const renderFnWithContext = (...args) => {
      if (renderFnWithContext._d) {
        setBlockTracking(-1);
      }
      const prevInstance = setCurrentRenderingInstance(ctx);
      const res = fn(...args);
      setCurrentRenderingInstance(prevInstance);
      if (renderFnWithContext._d) {
        setBlockTracking(1);
      }
      return res;
    };
    renderFnWithContext._n = true;
    renderFnWithContext._c = true;
    renderFnWithContext._d = true;
    return renderFnWithContext;
  }
  function markAttrsAccessed() {
  }
  function renderComponentRoot(instance) {
    const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit, render, renderCache, data, setupState, ctx, inheritAttrs } = instance;
    let result;
    let fallthroughAttrs;
    const prev = setCurrentRenderingInstance(instance);
    try {
      if (vnode.shapeFlag & 4) {
        const proxyToUse = withProxy || proxy;
        result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
        fallthroughAttrs = attrs;
      } else {
        const render2 = Component;
        if (false)
          ;
        result = normalizeVNode(render2.length > 1 ? render2(props, false ? {
          get attrs() {
            markAttrsAccessed();
            return attrs;
          },
          slots,
          emit
        } : { attrs, slots, emit }) : render2(props, null));
        fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
      }
    } catch (err) {
      handleError(err, instance, 1);
      result = createVNode(Comment);
    }
    let root = result;
    if (fallthroughAttrs && inheritAttrs !== false) {
      const keys = Object.keys(fallthroughAttrs);
      const { shapeFlag } = root;
      if (keys.length) {
        if (shapeFlag & (1 | 6)) {
          if (propsOptions && keys.some(isModelListener)) {
            fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
          }
          root = cloneVNode(root, fallthroughAttrs);
        }
      }
    }
    if (vnode.dirs) {
      root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
    }
    if (vnode.transition) {
      root.transition = vnode.transition;
    }
    {
      result = root;
    }
    setCurrentRenderingInstance(prev);
    return result;
  }
  const getFunctionalFallthrough = (attrs) => {
    let res;
    for (const key in attrs) {
      if (key === "class" || key === "style" || isOn(key)) {
        (res || (res = {}))[key] = attrs[key];
      }
    }
    return res;
  };
  const filterModelListeners = (attrs, props) => {
    const res = {};
    for (const key in attrs) {
      if (!isModelListener(key) || !(key.slice(9) in props)) {
        res[key] = attrs[key];
      }
    }
    return res;
  };
  function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps, children: prevChildren, component } = prevVNode;
    const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
    const emits = component.emitsOptions;
    if (nextVNode.dirs || nextVNode.transition) {
      return true;
    }
    if (optimized && patchFlag >= 0) {
      if (patchFlag & 1024) {
        return true;
      }
      if (patchFlag & 16) {
        if (!prevProps) {
          return !!nextProps;
        }
        return hasPropsChanged(prevProps, nextProps, emits);
      } else if (patchFlag & 8) {
        const dynamicProps = nextVNode.dynamicProps;
        for (let i = 0; i < dynamicProps.length; i++) {
          const key = dynamicProps[i];
          if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
            return true;
          }
        }
      }
    } else {
      if (prevChildren || nextChildren) {
        if (!nextChildren || !nextChildren.$stable) {
          return true;
        }
      }
      if (prevProps === nextProps) {
        return false;
      }
      if (!prevProps) {
        return !!nextProps;
      }
      if (!nextProps) {
        return true;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
  }
  function hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) {
      return true;
    }
    for (let i = 0; i < nextKeys.length; i++) {
      const key = nextKeys[i];
      if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
        return true;
      }
    }
    return false;
  }
  function updateHOCHostEl({ vnode, parent }, el) {
    while (parent && parent.subTree === vnode) {
      (vnode = parent.vnode).el = el;
      parent = parent.parent;
    }
  }
  const isSuspense = (type) => type.__isSuspense;
  function queueEffectWithSuspense(fn, suspense) {
    if (suspense && suspense.pendingBranch) {
      if (isArray(fn)) {
        suspense.effects.push(...fn);
      } else {
        suspense.effects.push(fn);
      }
    } else {
      queuePostFlushCb(fn);
    }
  }
  function provide(key, value) {
    if (!currentInstance)
      ;
    else {
      let provides = currentInstance.provides;
      const parentProvides = currentInstance.parent && currentInstance.parent.provides;
      if (parentProvides === provides) {
        provides = currentInstance.provides = Object.create(parentProvides);
      }
      provides[key] = value;
    }
  }
  function inject(key, defaultValue, treatDefaultAsFactory = false) {
    const instance = currentInstance || currentRenderingInstance;
    if (instance) {
      const provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;
      if (provides && key in provides) {
        return provides[key];
      } else if (arguments.length > 1) {
        return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
      } else
        ;
    }
  }
  function defineComponent(options) {
    return isFunction(options) ? { setup: options, name: options.name } : options;
  }
  const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
  const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
  function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a", target);
  }
  function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da", target);
  }
  function registerKeepAliveHook(hook, type, target = currentInstance) {
    const wrappedHook = hook.__wdc || (hook.__wdc = () => {
      let current = target;
      while (current) {
        if (current.isDeactivated) {
          return;
        }
        current = current.parent;
      }
      hook();
    });
    injectHook(type, wrappedHook, target);
    if (target) {
      let current = target.parent;
      while (current && current.parent) {
        if (isKeepAlive(current.parent.vnode)) {
          injectToKeepAliveRoot(wrappedHook, type, target, current);
        }
        current = current.parent;
      }
    }
  }
  function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    const injected = injectHook(type, hook, keepAliveRoot, true);
    onUnmounted(() => {
      remove(keepAliveRoot[type], injected);
    }, target);
  }
  function injectHook(type, hook, target = currentInstance, prepend = false) {
    if (target) {
      const hooks = target[type] || (target[type] = []);
      const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
        if (target.isUnmounted) {
          return;
        }
        pauseTracking();
        setCurrentInstance(target);
        const res = callWithAsyncErrorHandling(hook, target, type, args);
        unsetCurrentInstance();
        resetTracking();
        return res;
      });
      if (prepend) {
        hooks.unshift(wrappedHook);
      } else {
        hooks.push(wrappedHook);
      }
      return wrappedHook;
    }
  }
  const createHook = (lifecycle) => (hook, target = currentInstance) => (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, hook, target);
  const onBeforeMount = createHook("bm");
  const onMounted = createHook("m");
  const onBeforeUpdate = createHook("bu");
  const onUpdated = createHook("u");
  const onBeforeUnmount = createHook("bum");
  const onUnmounted = createHook("um");
  const onServerPrefetch = createHook("sp");
  const onRenderTriggered = createHook("rtg");
  const onRenderTracked = createHook("rtc");
  function onErrorCaptured(hook, target = currentInstance) {
    injectHook("ec", hook, target);
  }
  let shouldCacheAccess = true;
  function applyOptions(instance) {
    const options = resolveMergedOptions(instance);
    const publicThis = instance.proxy;
    const ctx = instance.ctx;
    shouldCacheAccess = false;
    if (options.beforeCreate) {
      callHook(options.beforeCreate, instance, "bc");
    }
    const {
      data: dataOptions,
      computed: computedOptions,
      methods,
      watch: watchOptions,
      provide: provideOptions,
      inject: injectOptions,
      created,
      beforeMount,
      mounted,
      beforeUpdate,
      updated,
      activated,
      deactivated,
      beforeDestroy,
      beforeUnmount,
      destroyed,
      unmounted,
      render,
      renderTracked,
      renderTriggered,
      errorCaptured,
      serverPrefetch,
      expose,
      inheritAttrs,
      components,
      directives,
      filters
    } = options;
    const checkDuplicateProperties = null;
    if (injectOptions) {
      resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
    }
    if (methods) {
      for (const key in methods) {
        const methodHandler = methods[key];
        if (isFunction(methodHandler)) {
          {
            ctx[key] = methodHandler.bind(publicThis);
          }
        }
      }
    }
    if (dataOptions) {
      const data = dataOptions.call(publicThis, publicThis);
      if (!isObject(data))
        ;
      else {
        instance.data = reactive(data);
      }
    }
    shouldCacheAccess = true;
    if (computedOptions) {
      for (const key in computedOptions) {
        const opt = computedOptions[key];
        const get2 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
        const set2 = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : NOOP;
        const c = computed({
          get: get2,
          set: set2
        });
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => c.value,
          set: (v) => c.value = v
        });
      }
    }
    if (watchOptions) {
      for (const key in watchOptions) {
        createWatcher(watchOptions[key], ctx, publicThis, key);
      }
    }
    if (provideOptions) {
      const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
      Reflect.ownKeys(provides).forEach((key) => {
        provide(key, provides[key]);
      });
    }
    if (created) {
      callHook(created, instance, "c");
    }
    function registerLifecycleHook(register, hook) {
      if (isArray(hook)) {
        hook.forEach((_hook) => register(_hook.bind(publicThis)));
      } else if (hook) {
        register(hook.bind(publicThis));
      }
    }
    registerLifecycleHook(onBeforeMount, beforeMount);
    registerLifecycleHook(onMounted, mounted);
    registerLifecycleHook(onBeforeUpdate, beforeUpdate);
    registerLifecycleHook(onUpdated, updated);
    registerLifecycleHook(onActivated, activated);
    registerLifecycleHook(onDeactivated, deactivated);
    registerLifecycleHook(onErrorCaptured, errorCaptured);
    registerLifecycleHook(onRenderTracked, renderTracked);
    registerLifecycleHook(onRenderTriggered, renderTriggered);
    registerLifecycleHook(onBeforeUnmount, beforeUnmount);
    registerLifecycleHook(onUnmounted, unmounted);
    registerLifecycleHook(onServerPrefetch, serverPrefetch);
    if (isArray(expose)) {
      if (expose.length) {
        const exposed = instance.exposed || (instance.exposed = {});
        expose.forEach((key) => {
          Object.defineProperty(exposed, key, {
            get: () => publicThis[key],
            set: (val) => publicThis[key] = val
          });
        });
      } else if (!instance.exposed) {
        instance.exposed = {};
      }
    }
    if (render && instance.render === NOOP) {
      instance.render = render;
    }
    if (inheritAttrs != null) {
      instance.inheritAttrs = inheritAttrs;
    }
    if (components)
      instance.components = components;
    if (directives)
      instance.directives = directives;
  }
  function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP, unwrapRef = false) {
    if (isArray(injectOptions)) {
      injectOptions = normalizeInject(injectOptions);
    }
    for (const key in injectOptions) {
      const opt = injectOptions[key];
      let injected;
      if (isObject(opt)) {
        if ("default" in opt) {
          injected = inject(opt.from || key, opt.default, true);
        } else {
          injected = inject(opt.from || key);
        }
      } else {
        injected = inject(opt);
      }
      if (isRef(injected)) {
        if (unwrapRef) {
          Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: () => injected.value,
            set: (v) => injected.value = v
          });
        } else {
          ctx[key] = injected;
        }
      } else {
        ctx[key] = injected;
      }
    }
  }
  function callHook(hook, instance, type) {
    callWithAsyncErrorHandling(isArray(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
  }
  function createWatcher(raw, ctx, publicThis, key) {
    const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
    if (isString(raw)) {
      const handler = ctx[raw];
      if (isFunction(handler)) {
        watch(getter, handler);
      }
    } else if (isFunction(raw)) {
      watch(getter, raw.bind(publicThis));
    } else if (isObject(raw)) {
      if (isArray(raw)) {
        raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
      } else {
        const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
        if (isFunction(handler)) {
          watch(getter, handler, raw);
        }
      }
    } else
      ;
  }
  function resolveMergedOptions(instance) {
    const base = instance.type;
    const { mixins, extends: extendsOptions } = base;
    const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
    const cached = cache.get(base);
    let resolved;
    if (cached) {
      resolved = cached;
    } else if (!globalMixins.length && !mixins && !extendsOptions) {
      {
        resolved = base;
      }
    } else {
      resolved = {};
      if (globalMixins.length) {
        globalMixins.forEach((m) => mergeOptions(resolved, m, optionMergeStrategies, true));
      }
      mergeOptions(resolved, base, optionMergeStrategies);
    }
    cache.set(base, resolved);
    return resolved;
  }
  function mergeOptions(to, from, strats, asMixin = false) {
    const { mixins, extends: extendsOptions } = from;
    if (extendsOptions) {
      mergeOptions(to, extendsOptions, strats, true);
    }
    if (mixins) {
      mixins.forEach((m) => mergeOptions(to, m, strats, true));
    }
    for (const key in from) {
      if (asMixin && key === "expose")
        ;
      else {
        const strat = internalOptionMergeStrats[key] || strats && strats[key];
        to[key] = strat ? strat(to[key], from[key]) : from[key];
      }
    }
    return to;
  }
  const internalOptionMergeStrats = {
    data: mergeDataFn,
    props: mergeObjectOptions,
    emits: mergeObjectOptions,
    methods: mergeObjectOptions,
    computed: mergeObjectOptions,
    beforeCreate: mergeAsArray,
    created: mergeAsArray,
    beforeMount: mergeAsArray,
    mounted: mergeAsArray,
    beforeUpdate: mergeAsArray,
    updated: mergeAsArray,
    beforeDestroy: mergeAsArray,
    beforeUnmount: mergeAsArray,
    destroyed: mergeAsArray,
    unmounted: mergeAsArray,
    activated: mergeAsArray,
    deactivated: mergeAsArray,
    errorCaptured: mergeAsArray,
    serverPrefetch: mergeAsArray,
    components: mergeObjectOptions,
    directives: mergeObjectOptions,
    watch: mergeWatchOptions,
    provide: mergeDataFn,
    inject: mergeInject
  };
  function mergeDataFn(to, from) {
    if (!from) {
      return to;
    }
    if (!to) {
      return from;
    }
    return function mergedDataFn() {
      return extend(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
    };
  }
  function mergeInject(to, from) {
    return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
  }
  function normalizeInject(raw) {
    if (isArray(raw)) {
      const res = {};
      for (let i = 0; i < raw.length; i++) {
        res[raw[i]] = raw[i];
      }
      return res;
    }
    return raw;
  }
  function mergeAsArray(to, from) {
    return to ? [...new Set([].concat(to, from))] : from;
  }
  function mergeObjectOptions(to, from) {
    return to ? extend(extend(Object.create(null), to), from) : from;
  }
  function mergeWatchOptions(to, from) {
    if (!to)
      return from;
    if (!from)
      return to;
    const merged = extend(Object.create(null), to);
    for (const key in from) {
      merged[key] = mergeAsArray(to[key], from[key]);
    }
    return merged;
  }
  function initProps(instance, rawProps, isStateful, isSSR = false) {
    const props = {};
    const attrs = {};
    def(attrs, InternalObjectKey, 1);
    instance.propsDefaults = Object.create(null);
    setFullProps(instance, rawProps, props, attrs);
    for (const key in instance.propsOptions[0]) {
      if (!(key in props)) {
        props[key] = void 0;
      }
    }
    if (isStateful) {
      instance.props = isSSR ? props : shallowReactive(props);
    } else {
      if (!instance.type.props) {
        instance.props = attrs;
      } else {
        instance.props = props;
      }
    }
    instance.attrs = attrs;
  }
  function updateProps(instance, rawProps, rawPrevProps, optimized) {
    const { props, attrs, vnode: { patchFlag } } = instance;
    const rawCurrentProps = toRaw(props);
    const [options] = instance.propsOptions;
    let hasAttrsChanged = false;
    if ((optimized || patchFlag > 0) && !(patchFlag & 16)) {
      if (patchFlag & 8) {
        const propsToUpdate = instance.vnode.dynamicProps;
        for (let i = 0; i < propsToUpdate.length; i++) {
          let key = propsToUpdate[i];
          const value = rawProps[key];
          if (options) {
            if (hasOwn(attrs, key)) {
              if (value !== attrs[key]) {
                attrs[key] = value;
                hasAttrsChanged = true;
              }
            } else {
              const camelizedKey = camelize(key);
              props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
            }
          } else {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          }
        }
      }
    } else {
      if (setFullProps(instance, rawProps, props, attrs)) {
        hasAttrsChanged = true;
      }
      let kebabKey;
      for (const key in rawCurrentProps) {
        if (!rawProps || !hasOwn(rawProps, key) && ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
          if (options) {
            if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) {
              props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
            }
          } else {
            delete props[key];
          }
        }
      }
      if (attrs !== rawCurrentProps) {
        for (const key in attrs) {
          if (!rawProps || !hasOwn(rawProps, key)) {
            delete attrs[key];
            hasAttrsChanged = true;
          }
        }
      }
    }
    if (hasAttrsChanged) {
      trigger(instance, "set", "$attrs");
    }
  }
  function setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] = instance.propsOptions;
    let hasAttrsChanged = false;
    let rawCastValues;
    if (rawProps) {
      for (let key in rawProps) {
        if (isReservedProp(key)) {
          continue;
        }
        const value = rawProps[key];
        let camelKey;
        if (options && hasOwn(options, camelKey = camelize(key))) {
          if (!needCastKeys || !needCastKeys.includes(camelKey)) {
            props[camelKey] = value;
          } else {
            (rawCastValues || (rawCastValues = {}))[camelKey] = value;
          }
        } else if (!isEmitListener(instance.emitsOptions, key)) {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
    if (needCastKeys) {
      const rawCurrentProps = toRaw(props);
      const castValues = rawCastValues || EMPTY_OBJ;
      for (let i = 0; i < needCastKeys.length; i++) {
        const key = needCastKeys[i];
        props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
      }
    }
    return hasAttrsChanged;
  }
  function resolvePropValue(options, props, key, value, instance, isAbsent) {
    const opt = options[key];
    if (opt != null) {
      const hasDefault = hasOwn(opt, "default");
      if (hasDefault && value === void 0) {
        const defaultValue = opt.default;
        if (opt.type !== Function && isFunction(defaultValue)) {
          const { propsDefaults } = instance;
          if (key in propsDefaults) {
            value = propsDefaults[key];
          } else {
            setCurrentInstance(instance);
            value = propsDefaults[key] = defaultValue.call(null, props);
            unsetCurrentInstance();
          }
        } else {
          value = defaultValue;
        }
      }
      if (opt[0]) {
        if (isAbsent && !hasDefault) {
          value = false;
        } else if (opt[1] && (value === "" || value === hyphenate(key))) {
          value = true;
        }
      }
    }
    return value;
  }
  function normalizePropsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.propsCache;
    const cached = cache.get(comp);
    if (cached) {
      return cached;
    }
    const raw = comp.props;
    const normalized = {};
    const needCastKeys = [];
    let hasExtends = false;
    if (!isFunction(comp)) {
      const extendProps = (raw2) => {
        hasExtends = true;
        const [props, keys] = normalizePropsOptions(raw2, appContext, true);
        extend(normalized, props);
        if (keys)
          needCastKeys.push(...keys);
      };
      if (!asMixin && appContext.mixins.length) {
        appContext.mixins.forEach(extendProps);
      }
      if (comp.extends) {
        extendProps(comp.extends);
      }
      if (comp.mixins) {
        comp.mixins.forEach(extendProps);
      }
    }
    if (!raw && !hasExtends) {
      cache.set(comp, EMPTY_ARR);
      return EMPTY_ARR;
    }
    if (isArray(raw)) {
      for (let i = 0; i < raw.length; i++) {
        const normalizedKey = camelize(raw[i]);
        if (validatePropName(normalizedKey)) {
          normalized[normalizedKey] = EMPTY_OBJ;
        }
      }
    } else if (raw) {
      for (const key in raw) {
        const normalizedKey = camelize(key);
        if (validatePropName(normalizedKey)) {
          const opt = raw[key];
          const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? { type: opt } : opt;
          if (prop) {
            const booleanIndex = getTypeIndex(Boolean, prop.type);
            const stringIndex = getTypeIndex(String, prop.type);
            prop[0] = booleanIndex > -1;
            prop[1] = stringIndex < 0 || booleanIndex < stringIndex;
            if (booleanIndex > -1 || hasOwn(prop, "default")) {
              needCastKeys.push(normalizedKey);
            }
          }
        }
      }
    }
    const res = [normalized, needCastKeys];
    cache.set(comp, res);
    return res;
  }
  function validatePropName(key) {
    if (key[0] !== "$") {
      return true;
    }
    return false;
  }
  function getType(ctor) {
    const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : ctor === null ? "null" : "";
  }
  function isSameType(a, b) {
    return getType(a) === getType(b);
  }
  function getTypeIndex(type, expectedTypes) {
    if (isArray(expectedTypes)) {
      return expectedTypes.findIndex((t) => isSameType(t, type));
    } else if (isFunction(expectedTypes)) {
      return isSameType(expectedTypes, type) ? 0 : -1;
    }
    return -1;
  }
  const isInternalKey = (key) => key[0] === "_" || key === "$stable";
  const normalizeSlotValue = (value) => isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
  const normalizeSlot = (key, rawSlot, ctx) => {
    const normalized = withCtx((...args) => {
      return normalizeSlotValue(rawSlot(...args));
    }, ctx);
    normalized._c = false;
    return normalized;
  };
  const normalizeObjectSlots = (rawSlots, slots, instance) => {
    const ctx = rawSlots._ctx;
    for (const key in rawSlots) {
      if (isInternalKey(key))
        continue;
      const value = rawSlots[key];
      if (isFunction(value)) {
        slots[key] = normalizeSlot(key, value, ctx);
      } else if (value != null) {
        const normalized = normalizeSlotValue(value);
        slots[key] = () => normalized;
      }
    }
  };
  const normalizeVNodeSlots = (instance, children) => {
    const normalized = normalizeSlotValue(children);
    instance.slots.default = () => normalized;
  };
  const initSlots = (instance, children) => {
    if (instance.vnode.shapeFlag & 32) {
      const type = children._;
      if (type) {
        instance.slots = toRaw(children);
        def(children, "_", type);
      } else {
        normalizeObjectSlots(children, instance.slots = {});
      }
    } else {
      instance.slots = {};
      if (children) {
        normalizeVNodeSlots(instance, children);
      }
    }
    def(instance.slots, InternalObjectKey, 1);
  };
  const updateSlots = (instance, children, optimized) => {
    const { vnode, slots } = instance;
    let needDeletionCheck = true;
    let deletionComparisonTarget = EMPTY_OBJ;
    if (vnode.shapeFlag & 32) {
      const type = children._;
      if (type) {
        if (optimized && type === 1) {
          needDeletionCheck = false;
        } else {
          extend(slots, children);
          if (!optimized && type === 1) {
            delete slots._;
          }
        }
      } else {
        needDeletionCheck = !children.$stable;
        normalizeObjectSlots(children, slots);
      }
      deletionComparisonTarget = children;
    } else if (children) {
      normalizeVNodeSlots(instance, children);
      deletionComparisonTarget = { default: 1 };
    }
    if (needDeletionCheck) {
      for (const key in slots) {
        if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
          delete slots[key];
        }
      }
    }
  };
  function invokeDirectiveHook(vnode, prevVNode, instance, name) {
    const bindings = vnode.dirs;
    const oldBindings = prevVNode && prevVNode.dirs;
    for (let i = 0; i < bindings.length; i++) {
      const binding = bindings[i];
      if (oldBindings) {
        binding.oldValue = oldBindings[i].value;
      }
      let hook = binding.dir[name];
      if (hook) {
        pauseTracking();
        callWithAsyncErrorHandling(hook, instance, 8, [
          vnode.el,
          binding,
          vnode,
          prevVNode
        ]);
        resetTracking();
      }
    }
  }
  function createAppContext() {
    return {
      app: null,
      config: {
        isNativeTag: NO,
        performance: false,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {}
      },
      mixins: [],
      components: {},
      directives: {},
      provides: Object.create(null),
      optionsCache: new WeakMap(),
      propsCache: new WeakMap(),
      emitsCache: new WeakMap()
    };
  }
  let uid = 0;
  function createAppAPI(render, hydrate) {
    return function createApp2(rootComponent, rootProps = null) {
      if (rootProps != null && !isObject(rootProps)) {
        rootProps = null;
      }
      const context = createAppContext();
      const installedPlugins = new Set();
      let isMounted = false;
      const app = context.app = {
        _uid: uid++,
        _component: rootComponent,
        _props: rootProps,
        _container: null,
        _context: context,
        _instance: null,
        version,
        get config() {
          return context.config;
        },
        set config(v) {
        },
        use(plugin, ...options) {
          if (installedPlugins.has(plugin))
            ;
          else if (plugin && isFunction(plugin.install)) {
            installedPlugins.add(plugin);
            plugin.install(app, ...options);
          } else if (isFunction(plugin)) {
            installedPlugins.add(plugin);
            plugin(app, ...options);
          } else
            ;
          return app;
        },
        mixin(mixin) {
          {
            if (!context.mixins.includes(mixin)) {
              context.mixins.push(mixin);
            }
          }
          return app;
        },
        component(name, component) {
          if (!component) {
            return context.components[name];
          }
          context.components[name] = component;
          return app;
        },
        directive(name, directive) {
          if (!directive) {
            return context.directives[name];
          }
          context.directives[name] = directive;
          return app;
        },
        mount(rootContainer, isHydrate, isSVG) {
          if (!isMounted) {
            const vnode = createVNode(rootComponent, rootProps);
            vnode.appContext = context;
            if (isHydrate && hydrate) {
              hydrate(vnode, rootContainer);
            } else {
              render(vnode, rootContainer, isSVG);
            }
            isMounted = true;
            app._container = rootContainer;
            rootContainer.__vue_app__ = app;
            return getExposeProxy(vnode.component) || vnode.component.proxy;
          }
        },
        unmount() {
          if (isMounted) {
            render(null, app._container);
            delete app._container.__vue_app__;
          }
        },
        provide(key, value) {
          context.provides[key] = value;
          return app;
        }
      };
      return app;
    };
  }
  const queuePostRenderEffect = queueEffectWithSuspense;
  function createRenderer(options) {
    return baseCreateRenderer(options);
  }
  function baseCreateRenderer(options, createHydrationFns) {
    const target = getGlobalThis();
    target.__VUE__ = true;
    const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, cloneNode: hostCloneNode, insertStaticContent: hostInsertStaticContent } = options;
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
      if (n1 === n2) {
        return;
      }
      if (n1 && !isSameVNodeType(n1, n2)) {
        anchor = getNextHostNode(n1);
        unmount(n1, parentComponent, parentSuspense, true);
        n1 = null;
      }
      if (n2.patchFlag === -2) {
        optimized = false;
        n2.dynamicChildren = null;
      }
      const { type, ref, shapeFlag } = n2;
      switch (type) {
        case Text:
          processText(n1, n2, container, anchor);
          break;
        case Comment:
          processCommentNode(n1, n2, container, anchor);
          break;
        case Static:
          if (n1 == null) {
            mountStaticNode(n2, container, anchor, isSVG);
          }
          break;
        case Fragment:
          processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          break;
        default:
          if (shapeFlag & 1) {
            processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else if (shapeFlag & 6) {
            processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else if (shapeFlag & 64) {
            type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
          } else if (shapeFlag & 128) {
            type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
          } else
            ;
      }
      if (ref != null && parentComponent) {
        setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
      }
    };
    const processText = (n1, n2, container, anchor) => {
      if (n1 == null) {
        hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
      } else {
        const el = n2.el = n1.el;
        if (n2.children !== n1.children) {
          hostSetText(el, n2.children);
        }
      }
    };
    const processCommentNode = (n1, n2, container, anchor) => {
      if (n1 == null) {
        hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
      } else {
        n2.el = n1.el;
      }
    };
    const mountStaticNode = (n2, container, anchor, isSVG) => {
      [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
    };
    const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
      let next;
      while (el && el !== anchor) {
        next = hostNextSibling(el);
        hostInsert(el, container, nextSibling);
        el = next;
      }
      hostInsert(anchor, container, nextSibling);
    };
    const removeStaticNode = ({ el, anchor }) => {
      let next;
      while (el && el !== anchor) {
        next = hostNextSibling(el);
        hostRemove(el);
        el = next;
      }
      hostRemove(anchor);
    };
    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      isSVG = isSVG || n2.type === "svg";
      if (n1 == null) {
        mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    };
    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      let el;
      let vnodeHook;
      const { type, props, shapeFlag, transition, patchFlag, dirs } = vnode;
      if (vnode.el && hostCloneNode !== void 0 && patchFlag === -1) {
        el = vnode.el = hostCloneNode(vnode.el);
      } else {
        el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
        if (shapeFlag & 8) {
          hostSetElementText(el, vnode.children);
        } else if (shapeFlag & 16) {
          mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== "foreignObject", slotScopeIds, optimized);
        }
        if (dirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "created");
        }
        if (props) {
          for (const key in props) {
            if (key !== "value" && !isReservedProp(key)) {
              hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
          if ("value" in props) {
            hostPatchProp(el, "value", null, props.value);
          }
          if (vnodeHook = props.onVnodeBeforeMount) {
            invokeVNodeHook(vnodeHook, parentComponent, vnode);
          }
        }
        setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
      }
      const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
      if (needCallTransitionHooks) {
        transition.beforeEnter(el);
      }
      hostInsert(el, container, anchor);
      if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
          needCallTransitionHooks && transition.enter(el);
          dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
      }
    };
    const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
      if (scopeId) {
        hostSetScopeId(el, scopeId);
      }
      if (slotScopeIds) {
        for (let i = 0; i < slotScopeIds.length; i++) {
          hostSetScopeId(el, slotScopeIds[i]);
        }
      }
      if (parentComponent) {
        let subTree = parentComponent.subTree;
        if (vnode === subTree) {
          const parentVNode = parentComponent.vnode;
          setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
        }
      }
    };
    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
      for (let i = start; i < children.length; i++) {
        const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
        patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      const el = n2.el = n1.el;
      let { patchFlag, dynamicChildren, dirs } = n2;
      patchFlag |= n1.patchFlag & 16;
      const oldProps = n1.props || EMPTY_OBJ;
      const newProps = n2.props || EMPTY_OBJ;
      let vnodeHook;
      if (vnodeHook = newProps.onVnodeBeforeUpdate) {
        invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
      }
      if (dirs) {
        invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
      }
      const areChildrenSVG = isSVG && n2.type !== "foreignObject";
      if (dynamicChildren) {
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
      } else if (!optimized) {
        patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
      }
      if (patchFlag > 0) {
        if (patchFlag & 16) {
          patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
        } else {
          if (patchFlag & 2) {
            if (oldProps.class !== newProps.class) {
              hostPatchProp(el, "class", null, newProps.class, isSVG);
            }
          }
          if (patchFlag & 4) {
            hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
          }
          if (patchFlag & 8) {
            const propsToUpdate = n2.dynamicProps;
            for (let i = 0; i < propsToUpdate.length; i++) {
              const key = propsToUpdate[i];
              const prev = oldProps[key];
              const next = newProps[key];
              if (next !== prev || key === "value") {
                hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
              }
            }
          }
        }
        if (patchFlag & 1) {
          if (n1.children !== n2.children) {
            hostSetElementText(el, n2.children);
          }
        }
      } else if (!optimized && dynamicChildren == null) {
        patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
      }
      if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
          dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
        }, parentSuspense);
      }
    };
    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
      for (let i = 0; i < newChildren.length; i++) {
        const oldVNode = oldChildren[i];
        const newVNode = newChildren[i];
        const container = oldVNode.el && (oldVNode.type === Fragment || !isSameVNodeType(oldVNode, newVNode) || oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : fallbackContainer;
        patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
      }
    };
    const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
      if (oldProps !== newProps) {
        for (const key in newProps) {
          if (isReservedProp(key))
            continue;
          const next = newProps[key];
          const prev = oldProps[key];
          if (next !== prev && key !== "value") {
            hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
        if (oldProps !== EMPTY_OBJ) {
          for (const key in oldProps) {
            if (!isReservedProp(key) && !(key in newProps)) {
              hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
        }
        if ("value" in newProps) {
          hostPatchProp(el, "value", oldProps.value, newProps.value);
        }
      }
    };
    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
      const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
      let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
      if (fragmentSlotScopeIds) {
        slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
      }
      if (n1 == null) {
        hostInsert(fragmentStartAnchor, container, anchor);
        hostInsert(fragmentEndAnchor, container, anchor);
        mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && n1.dynamicChildren) {
          patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
          if (n2.key != null || parentComponent && n2 === parentComponent.subTree) {
            traverseStaticChildren(n1, n2, true);
          }
        } else {
          patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      }
    };
    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      n2.slotScopeIds = slotScopeIds;
      if (n1 == null) {
        if (n2.shapeFlag & 512) {
          parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
        } else {
          mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
        }
      } else {
        updateComponent(n1, n2, optimized);
      }
    };
    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
      const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
      if (isKeepAlive(initialVNode)) {
        instance.ctx.renderer = internals;
      }
      {
        setupComponent(instance);
      }
      if (instance.asyncDep) {
        parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
        if (!initialVNode.el) {
          const placeholder = instance.subTree = createVNode(Comment);
          processCommentNode(null, placeholder, container, anchor);
        }
        return;
      }
      setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
    };
    const updateComponent = (n1, n2, optimized) => {
      const instance = n2.component = n1.component;
      if (shouldUpdateComponent(n1, n2, optimized)) {
        if (instance.asyncDep && !instance.asyncResolved) {
          updateComponentPreRender(instance, n2, optimized);
          return;
        } else {
          instance.next = n2;
          invalidateJob(instance.update);
          instance.update();
        }
      } else {
        n2.component = n1.component;
        n2.el = n1.el;
        instance.vnode = n2;
      }
    };
    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
      const componentUpdateFn = () => {
        if (!instance.isMounted) {
          let vnodeHook;
          const { el, props } = initialVNode;
          const { bm, m, parent } = instance;
          const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
          effect.allowRecurse = false;
          if (bm) {
            invokeArrayFns(bm);
          }
          if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
            invokeVNodeHook(vnodeHook, parent, initialVNode);
          }
          effect.allowRecurse = true;
          if (el && hydrateNode) {
            const hydrateSubTree = () => {
              instance.subTree = renderComponentRoot(instance);
              hydrateNode(el, instance.subTree, instance, parentSuspense, null);
            };
            if (isAsyncWrapperVNode) {
              initialVNode.type.__asyncLoader().then(() => !instance.isUnmounted && hydrateSubTree());
            } else {
              hydrateSubTree();
            }
          } else {
            const subTree = instance.subTree = renderComponentRoot(instance);
            patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
            initialVNode.el = subTree.el;
          }
          if (m) {
            queuePostRenderEffect(m, parentSuspense);
          }
          if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
            const scopedInitialVNode = initialVNode;
            queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
          }
          if (initialVNode.shapeFlag & 256) {
            instance.a && queuePostRenderEffect(instance.a, parentSuspense);
          }
          instance.isMounted = true;
          initialVNode = container = anchor = null;
        } else {
          let { next, bu, u, parent, vnode } = instance;
          let originNext = next;
          let vnodeHook;
          effect.allowRecurse = false;
          if (next) {
            next.el = vnode.el;
            updateComponentPreRender(instance, next, optimized);
          } else {
            next = vnode;
          }
          if (bu) {
            invokeArrayFns(bu);
          }
          if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
            invokeVNodeHook(vnodeHook, parent, next, vnode);
          }
          effect.allowRecurse = true;
          const nextTree = renderComponentRoot(instance);
          const prevTree = instance.subTree;
          instance.subTree = nextTree;
          patch(prevTree, nextTree, hostParentNode(prevTree.el), getNextHostNode(prevTree), instance, parentSuspense, isSVG);
          next.el = nextTree.el;
          if (originNext === null) {
            updateHOCHostEl(instance, nextTree.el);
          }
          if (u) {
            queuePostRenderEffect(u, parentSuspense);
          }
          if (vnodeHook = next.props && next.props.onVnodeUpdated) {
            queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
          }
        }
      };
      const effect = new ReactiveEffect(componentUpdateFn, () => queueJob(instance.update), instance.scope);
      const update = instance.update = effect.run.bind(effect);
      update.id = instance.uid;
      effect.allowRecurse = update.allowRecurse = true;
      update();
    };
    const updateComponentPreRender = (instance, nextVNode, optimized) => {
      nextVNode.component = instance;
      const prevProps = instance.vnode.props;
      instance.vnode = nextVNode;
      instance.next = null;
      updateProps(instance, nextVNode.props, prevProps, optimized);
      updateSlots(instance, nextVNode.children, optimized);
      pauseTracking();
      flushPreFlushCbs(void 0, instance.update);
      resetTracking();
    };
    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
      const c1 = n1 && n1.children;
      const prevShapeFlag = n1 ? n1.shapeFlag : 0;
      const c2 = n2.children;
      const { patchFlag, shapeFlag } = n2;
      if (patchFlag > 0) {
        if (patchFlag & 128) {
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          return;
        } else if (patchFlag & 256) {
          patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          return;
        }
      }
      if (shapeFlag & 8) {
        if (prevShapeFlag & 16) {
          unmountChildren(c1, parentComponent, parentSuspense);
        }
        if (c2 !== c1) {
          hostSetElementText(container, c2);
        }
      } else {
        if (prevShapeFlag & 16) {
          if (shapeFlag & 16) {
            patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else {
            unmountChildren(c1, parentComponent, parentSuspense, true);
          }
        } else {
          if (prevShapeFlag & 8) {
            hostSetElementText(container, "");
          }
          if (shapeFlag & 16) {
            mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          }
        }
      }
    };
    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      c1 = c1 || EMPTY_ARR;
      c2 = c2 || EMPTY_ARR;
      const oldLength = c1.length;
      const newLength = c2.length;
      const commonLength = Math.min(oldLength, newLength);
      let i;
      for (i = 0; i < commonLength; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
      if (oldLength > newLength) {
        unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
      } else {
        mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
      }
    };
    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      let i = 0;
      const l2 = c2.length;
      let e1 = c1.length - 1;
      let e2 = l2 - 1;
      while (i <= e1 && i <= e2) {
        const n1 = c1[i];
        const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (isSameVNodeType(n1, n2)) {
          patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          break;
        }
        i++;
      }
      while (i <= e1 && i <= e2) {
        const n1 = c1[e1];
        const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
        if (isSameVNodeType(n1, n2)) {
          patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          break;
        }
        e1--;
        e2--;
      }
      if (i > e1) {
        if (i <= e2) {
          const nextPos = e2 + 1;
          const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
          while (i <= e2) {
            patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            i++;
          }
        }
      } else if (i > e2) {
        while (i <= e1) {
          unmount(c1[i], parentComponent, parentSuspense, true);
          i++;
        }
      } else {
        const s1 = i;
        const s2 = i;
        const keyToNewIndexMap = new Map();
        for (i = s2; i <= e2; i++) {
          const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
          if (nextChild.key != null) {
            keyToNewIndexMap.set(nextChild.key, i);
          }
        }
        let j;
        let patched = 0;
        const toBePatched = e2 - s2 + 1;
        let moved = false;
        let maxNewIndexSoFar = 0;
        const newIndexToOldIndexMap = new Array(toBePatched);
        for (i = 0; i < toBePatched; i++)
          newIndexToOldIndexMap[i] = 0;
        for (i = s1; i <= e1; i++) {
          const prevChild = c1[i];
          if (patched >= toBePatched) {
            unmount(prevChild, parentComponent, parentSuspense, true);
            continue;
          }
          let newIndex;
          if (prevChild.key != null) {
            newIndex = keyToNewIndexMap.get(prevChild.key);
          } else {
            for (j = s2; j <= e2; j++) {
              if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
                newIndex = j;
                break;
              }
            }
          }
          if (newIndex === void 0) {
            unmount(prevChild, parentComponent, parentSuspense, true);
          } else {
            newIndexToOldIndexMap[newIndex - s2] = i + 1;
            if (newIndex >= maxNewIndexSoFar) {
              maxNewIndexSoFar = newIndex;
            } else {
              moved = true;
            }
            patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            patched++;
          }
        }
        const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
        j = increasingNewIndexSequence.length - 1;
        for (i = toBePatched - 1; i >= 0; i--) {
          const nextIndex = s2 + i;
          const nextChild = c2[nextIndex];
          const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
          if (newIndexToOldIndexMap[i] === 0) {
            patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else if (moved) {
            if (j < 0 || i !== increasingNewIndexSequence[j]) {
              move(nextChild, container, anchor, 2);
            } else {
              j--;
            }
          }
        }
      }
    };
    const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
      const { el, type, transition, children, shapeFlag } = vnode;
      if (shapeFlag & 6) {
        move(vnode.component.subTree, container, anchor, moveType);
        return;
      }
      if (shapeFlag & 128) {
        vnode.suspense.move(container, anchor, moveType);
        return;
      }
      if (shapeFlag & 64) {
        type.move(vnode, container, anchor, internals);
        return;
      }
      if (type === Fragment) {
        hostInsert(el, container, anchor);
        for (let i = 0; i < children.length; i++) {
          move(children[i], container, anchor, moveType);
        }
        hostInsert(vnode.anchor, container, anchor);
        return;
      }
      if (type === Static) {
        moveStaticNode(vnode, container, anchor);
        return;
      }
      const needTransition = moveType !== 2 && shapeFlag & 1 && transition;
      if (needTransition) {
        if (moveType === 0) {
          transition.beforeEnter(el);
          hostInsert(el, container, anchor);
          queuePostRenderEffect(() => transition.enter(el), parentSuspense);
        } else {
          const { leave, delayLeave, afterLeave } = transition;
          const remove3 = () => hostInsert(el, container, anchor);
          const performLeave = () => {
            leave(el, () => {
              remove3();
              afterLeave && afterLeave();
            });
          };
          if (delayLeave) {
            delayLeave(el, remove3, performLeave);
          } else {
            performLeave();
          }
        }
      } else {
        hostInsert(el, container, anchor);
      }
    };
    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
      const { type, props, ref, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
      if (ref != null) {
        setRef(ref, null, parentSuspense, vnode, true);
      }
      if (shapeFlag & 256) {
        parentComponent.ctx.deactivate(vnode);
        return;
      }
      const shouldInvokeDirs = shapeFlag & 1 && dirs;
      const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
      let vnodeHook;
      if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
      if (shapeFlag & 6) {
        unmountComponent(vnode.component, parentSuspense, doRemove);
      } else {
        if (shapeFlag & 128) {
          vnode.suspense.unmount(parentSuspense, doRemove);
          return;
        }
        if (shouldInvokeDirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
        }
        if (shapeFlag & 64) {
          vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
        } else if (dynamicChildren && (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
          unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
        } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
          unmountChildren(children, parentComponent, parentSuspense);
        }
        if (doRemove) {
          remove2(vnode);
        }
      }
      if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
          shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
        }, parentSuspense);
      }
    };
    const remove2 = (vnode) => {
      const { type, el, anchor, transition } = vnode;
      if (type === Fragment) {
        removeFragment(el, anchor);
        return;
      }
      if (type === Static) {
        removeStaticNode(vnode);
        return;
      }
      const performRemove = () => {
        hostRemove(el);
        if (transition && !transition.persisted && transition.afterLeave) {
          transition.afterLeave();
        }
      };
      if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
        const { leave, delayLeave } = transition;
        const performLeave = () => leave(el, performRemove);
        if (delayLeave) {
          delayLeave(vnode.el, performRemove, performLeave);
        } else {
          performLeave();
        }
      } else {
        performRemove();
      }
    };
    const removeFragment = (cur, end) => {
      let next;
      while (cur !== end) {
        next = hostNextSibling(cur);
        hostRemove(cur);
        cur = next;
      }
      hostRemove(end);
    };
    const unmountComponent = (instance, parentSuspense, doRemove) => {
      const { bum, scope, update, subTree, um } = instance;
      if (bum) {
        invokeArrayFns(bum);
      }
      scope.stop();
      if (update) {
        update.active = false;
        unmount(subTree, instance, parentSuspense, doRemove);
      }
      if (um) {
        queuePostRenderEffect(um, parentSuspense);
      }
      queuePostRenderEffect(() => {
        instance.isUnmounted = true;
      }, parentSuspense);
      if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
        parentSuspense.deps--;
        if (parentSuspense.deps === 0) {
          parentSuspense.resolve();
        }
      }
    };
    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
      for (let i = start; i < children.length; i++) {
        unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
      }
    };
    const getNextHostNode = (vnode) => {
      if (vnode.shapeFlag & 6) {
        return getNextHostNode(vnode.component.subTree);
      }
      if (vnode.shapeFlag & 128) {
        return vnode.suspense.next();
      }
      return hostNextSibling(vnode.anchor || vnode.el);
    };
    const render = (vnode, container, isSVG) => {
      if (vnode == null) {
        if (container._vnode) {
          unmount(container._vnode, null, null, true);
        }
      } else {
        patch(container._vnode || null, vnode, container, null, null, null, isSVG);
      }
      flushPostFlushCbs();
      container._vnode = vnode;
    };
    const internals = {
      p: patch,
      um: unmount,
      m: move,
      r: remove2,
      mt: mountComponent,
      mc: mountChildren,
      pc: patchChildren,
      pbc: patchBlockChildren,
      n: getNextHostNode,
      o: options
    };
    let hydrate;
    let hydrateNode;
    if (createHydrationFns) {
      [hydrate, hydrateNode] = createHydrationFns(internals);
    }
    return {
      render,
      hydrate,
      createApp: createAppAPI(render, hydrate)
    };
  }
  function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
    if (isArray(rawRef)) {
      rawRef.forEach((r, i) => setRef(r, oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
      return;
    }
    if (isAsyncWrapper(vnode) && !isUnmount) {
      return;
    }
    const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
    const value = isUnmount ? null : refValue;
    const { i: owner, r: ref } = rawRef;
    const oldRef = oldRawRef && oldRawRef.r;
    const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
    const setupState = owner.setupState;
    if (oldRef != null && oldRef !== ref) {
      if (isString(oldRef)) {
        refs[oldRef] = null;
        if (hasOwn(setupState, oldRef)) {
          setupState[oldRef] = null;
        }
      } else if (isRef(oldRef)) {
        oldRef.value = null;
      }
    }
    if (isString(ref)) {
      const doSet = () => {
        {
          refs[ref] = value;
        }
        if (hasOwn(setupState, ref)) {
          setupState[ref] = value;
        }
      };
      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    } else if (isRef(ref)) {
      const doSet = () => {
        ref.value = value;
      };
      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    } else if (isFunction(ref)) {
      callWithErrorHandling(ref, owner, 12, [value, refs]);
    } else
      ;
  }
  function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
    callWithAsyncErrorHandling(hook, instance, 7, [
      vnode,
      prevVNode
    ]);
  }
  function traverseStaticChildren(n1, n2, shallow = false) {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if (isArray(ch1) && isArray(ch2)) {
      for (let i = 0; i < ch1.length; i++) {
        const c1 = ch1[i];
        let c2 = ch2[i];
        if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
          if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
            c2 = ch2[i] = cloneIfMounted(ch2[i]);
            c2.el = c1.el;
          }
          if (!shallow)
            traverseStaticChildren(c1, c2);
        }
      }
    }
  }
  function getSequence(arr) {
    const p = arr.slice();
    const result = [0];
    let i, j, u, v, c;
    const len = arr.length;
    for (i = 0; i < len; i++) {
      const arrI = arr[i];
      if (arrI !== 0) {
        j = result[result.length - 1];
        if (arr[j] < arrI) {
          p[i] = j;
          result.push(i);
          continue;
        }
        u = 0;
        v = result.length - 1;
        while (u < v) {
          c = u + v >> 1;
          if (arr[result[c]] < arrI) {
            u = c + 1;
          } else {
            v = c;
          }
        }
        if (arrI < arr[result[u]]) {
          if (u > 0) {
            p[i] = result[u - 1];
          }
          result[u] = i;
        }
      }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
      result[u] = v;
      v = p[v];
    }
    return result;
  }
  const isTeleport = (type) => type.__isTeleport;
  const NULL_DYNAMIC_COMPONENT = Symbol();
  const Fragment = Symbol(void 0);
  const Text = Symbol(void 0);
  const Comment = Symbol(void 0);
  const Static = Symbol(void 0);
  let currentBlock = null;
  let isBlockTreeEnabled = 1;
  function setBlockTracking(value) {
    isBlockTreeEnabled += value;
  }
  function isVNode(value) {
    return value ? value.__v_isVNode === true : false;
  }
  function isSameVNodeType(n1, n2) {
    return n1.type === n2.type && n1.key === n2.key;
  }
  const InternalObjectKey = `__vInternal`;
  const normalizeKey = ({ key }) => key != null ? key : null;
  const normalizeRef = ({ ref }) => {
    return ref != null ? isString(ref) || isRef(ref) || isFunction(ref) ? { i: currentRenderingInstance, r: ref } : ref : null;
  };
  function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
    const vnode = {
      __v_isVNode: true,
      __v_skip: true,
      type,
      props,
      key: props && normalizeKey(props),
      ref: props && normalizeRef(props),
      scopeId: currentScopeId,
      slotScopeIds: null,
      children,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag,
      patchFlag,
      dynamicProps,
      dynamicChildren: null,
      appContext: null
    };
    if (needFullChildrenNormalization) {
      normalizeChildren(vnode, children);
      if (shapeFlag & 128) {
        type.normalize(vnode);
      }
    } else if (children) {
      vnode.shapeFlag |= isString(children) ? 8 : 16;
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) {
      currentBlock.push(vnode);
    }
    return vnode;
  }
  const createVNode = _createVNode;
  function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
      type = Comment;
    }
    if (isVNode(type)) {
      const cloned = cloneVNode(type, props, true);
      if (children) {
        normalizeChildren(cloned, children);
      }
      return cloned;
    }
    if (isClassComponent(type)) {
      type = type.__vccOpts;
    }
    if (props) {
      props = guardReactiveProps(props);
      let { class: klass, style } = props;
      if (klass && !isString(klass)) {
        props.class = normalizeClass(klass);
      }
      if (isObject(style)) {
        if (isProxy(style) && !isArray(style)) {
          style = extend({}, style);
        }
        props.style = normalizeStyle(style);
      }
    }
    const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
    return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
  }
  function guardReactiveProps(props) {
    if (!props)
      return null;
    return isProxy(props) || InternalObjectKey in props ? extend({}, props) : props;
  }
  function cloneVNode(vnode, extraProps, mergeRef = false) {
    const { props, ref, patchFlag, children } = vnode;
    const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
    const cloned = {
      __v_isVNode: true,
      __v_skip: true,
      type: vnode.type,
      props: mergedProps,
      key: mergedProps && normalizeKey(mergedProps),
      ref: extraProps && extraProps.ref ? mergeRef && ref ? isArray(ref) ? ref.concat(normalizeRef(extraProps)) : [ref, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref,
      scopeId: vnode.scopeId,
      slotScopeIds: vnode.slotScopeIds,
      children,
      target: vnode.target,
      targetAnchor: vnode.targetAnchor,
      staticCount: vnode.staticCount,
      shapeFlag: vnode.shapeFlag,
      patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
      dynamicProps: vnode.dynamicProps,
      dynamicChildren: vnode.dynamicChildren,
      appContext: vnode.appContext,
      dirs: vnode.dirs,
      transition: vnode.transition,
      component: vnode.component,
      suspense: vnode.suspense,
      ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
      ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
      el: vnode.el,
      anchor: vnode.anchor
    };
    return cloned;
  }
  function createTextVNode(text = " ", flag = 0) {
    return createVNode(Text, null, text, flag);
  }
  function normalizeVNode(child) {
    if (child == null || typeof child === "boolean") {
      return createVNode(Comment);
    } else if (isArray(child)) {
      return createVNode(Fragment, null, child.slice());
    } else if (typeof child === "object") {
      return cloneIfMounted(child);
    } else {
      return createVNode(Text, null, String(child));
    }
  }
  function cloneIfMounted(child) {
    return child.el === null || child.memo ? child : cloneVNode(child);
  }
  function normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag } = vnode;
    if (children == null) {
      children = null;
    } else if (isArray(children)) {
      type = 16;
    } else if (typeof children === "object") {
      if (shapeFlag & (1 | 64)) {
        const slot = children.default;
        if (slot) {
          slot._c && (slot._d = false);
          normalizeChildren(vnode, slot());
          slot._c && (slot._d = true);
        }
        return;
      } else {
        type = 32;
        const slotFlag = children._;
        if (!slotFlag && !(InternalObjectKey in children)) {
          children._ctx = currentRenderingInstance;
        } else if (slotFlag === 3 && currentRenderingInstance) {
          if (currentRenderingInstance.slots._ === 1) {
            children._ = 1;
          } else {
            children._ = 2;
            vnode.patchFlag |= 1024;
          }
        }
      }
    } else if (isFunction(children)) {
      children = { default: children, _ctx: currentRenderingInstance };
      type = 32;
    } else {
      children = String(children);
      if (shapeFlag & 64) {
        type = 16;
        children = [createTextVNode(children)];
      } else {
        type = 8;
      }
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
  }
  function mergeProps(...args) {
    const ret = {};
    for (let i = 0; i < args.length; i++) {
      const toMerge = args[i];
      for (const key in toMerge) {
        if (key === "class") {
          if (ret.class !== toMerge.class) {
            ret.class = normalizeClass([ret.class, toMerge.class]);
          }
        } else if (key === "style") {
          ret.style = normalizeStyle([ret.style, toMerge.style]);
        } else if (isOn(key)) {
          const existing = ret[key];
          const incoming = toMerge[key];
          if (existing !== incoming) {
            ret[key] = existing ? [].concat(existing, incoming) : incoming;
          }
        } else if (key !== "") {
          ret[key] = toMerge[key];
        }
      }
    }
    return ret;
  }
  const getPublicInstance = (i) => {
    if (!i)
      return null;
    if (isStatefulComponent(i))
      return getExposeProxy(i) || i.proxy;
    return getPublicInstance(i.parent);
  };
  const publicPropertiesMap = extend(Object.create(null), {
    $: (i) => i,
    $el: (i) => i.vnode.el,
    $data: (i) => i.data,
    $props: (i) => i.props,
    $attrs: (i) => i.attrs,
    $slots: (i) => i.slots,
    $refs: (i) => i.refs,
    $parent: (i) => getPublicInstance(i.parent),
    $root: (i) => getPublicInstance(i.root),
    $emit: (i) => i.emit,
    $options: (i) => resolveMergedOptions(i),
    $forceUpdate: (i) => () => queueJob(i.update),
    $nextTick: (i) => nextTick.bind(i.proxy),
    $watch: (i) => instanceWatch.bind(i)
  });
  const PublicInstanceProxyHandlers = {
    get({ _: instance }, key) {
      const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
      let normalizedProps;
      if (key[0] !== "$") {
        const n = accessCache[key];
        if (n !== void 0) {
          switch (n) {
            case 0:
              return setupState[key];
            case 1:
              return data[key];
            case 3:
              return ctx[key];
            case 2:
              return props[key];
          }
        } else if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
          accessCache[key] = 0;
          return setupState[key];
        } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
          accessCache[key] = 1;
          return data[key];
        } else if ((normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)) {
          accessCache[key] = 2;
          return props[key];
        } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
          accessCache[key] = 3;
          return ctx[key];
        } else if (shouldCacheAccess) {
          accessCache[key] = 4;
        }
      }
      const publicGetter = publicPropertiesMap[key];
      let cssModule, globalProperties;
      if (publicGetter) {
        if (key === "$attrs") {
          track(instance, "get", key);
        }
        return publicGetter(instance);
      } else if ((cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
        return cssModule;
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 3;
        return ctx[key];
      } else if (globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) {
        {
          return globalProperties[key];
        }
      } else
        ;
    },
    set({ _: instance }, key, value) {
      const { data, setupState, ctx } = instance;
      if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
        setupState[key] = value;
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        data[key] = value;
      } else if (hasOwn(instance.props, key)) {
        return false;
      }
      if (key[0] === "$" && key.slice(1) in instance) {
        return false;
      } else {
        {
          ctx[key] = value;
        }
      }
      return true;
    },
    has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
      let normalizedProps;
      return accessCache[key] !== void 0 || data !== EMPTY_OBJ && hasOwn(data, key) || setupState !== EMPTY_OBJ && hasOwn(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
    }
  };
  const emptyAppContext = createAppContext();
  let uid$1 = 0;
  function createComponentInstance(vnode, parent, suspense) {
    const type = vnode.type;
    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
    const instance = {
      uid: uid$1++,
      vnode,
      type,
      parent,
      appContext,
      root: null,
      next: null,
      subTree: null,
      update: null,
      scope: new EffectScope(true),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: parent ? parent.provides : Object.create(appContext.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: normalizePropsOptions(type, appContext),
      emitsOptions: normalizeEmitsOptions(type, appContext),
      emit: null,
      emitted: null,
      propsDefaults: EMPTY_OBJ,
      inheritAttrs: type.inheritAttrs,
      ctx: EMPTY_OBJ,
      data: EMPTY_OBJ,
      props: EMPTY_OBJ,
      attrs: EMPTY_OBJ,
      slots: EMPTY_OBJ,
      refs: EMPTY_OBJ,
      setupState: EMPTY_OBJ,
      setupContext: null,
      suspense,
      suspenseId: suspense ? suspense.pendingId : 0,
      asyncDep: null,
      asyncResolved: false,
      isMounted: false,
      isUnmounted: false,
      isDeactivated: false,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
    {
      instance.ctx = { _: instance };
    }
    instance.root = parent ? parent.root : instance;
    instance.emit = emit$1.bind(null, instance);
    if (vnode.ce) {
      vnode.ce(instance);
    }
    return instance;
  }
  let currentInstance = null;
  const setCurrentInstance = (instance) => {
    currentInstance = instance;
    instance.scope.on();
  };
  const unsetCurrentInstance = () => {
    currentInstance && currentInstance.scope.off();
    currentInstance = null;
  };
  function isStatefulComponent(instance) {
    return instance.vnode.shapeFlag & 4;
  }
  let isInSSRComponentSetup = false;
  function setupComponent(instance, isSSR = false) {
    isInSSRComponentSetup = isSSR;
    const { props, children } = instance.vnode;
    const isStateful = isStatefulComponent(instance);
    initProps(instance, props, isStateful, isSSR);
    initSlots(instance, children);
    const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
    isInSSRComponentSetup = false;
    return setupResult;
  }
  function setupStatefulComponent(instance, isSSR) {
    const Component = instance.type;
    instance.accessCache = Object.create(null);
    instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
    const { setup } = Component;
    if (setup) {
      const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
      setCurrentInstance(instance);
      pauseTracking();
      const setupResult = callWithErrorHandling(setup, instance, 0, [instance.props, setupContext]);
      resetTracking();
      unsetCurrentInstance();
      if (isPromise(setupResult)) {
        setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
        if (isSSR) {
          return setupResult.then((resolvedResult) => {
            handleSetupResult(instance, resolvedResult, isSSR);
          }).catch((e) => {
            handleError(e, instance, 0);
          });
        } else {
          instance.asyncDep = setupResult;
        }
      } else {
        handleSetupResult(instance, setupResult, isSSR);
      }
    } else {
      finishComponentSetup(instance, isSSR);
    }
  }
  function handleSetupResult(instance, setupResult, isSSR) {
    if (isFunction(setupResult)) {
      if (instance.type.__ssrInlineRender) {
        instance.ssrRender = setupResult;
      } else {
        instance.render = setupResult;
      }
    } else if (isObject(setupResult)) {
      instance.setupState = proxyRefs(setupResult);
    } else
      ;
    finishComponentSetup(instance, isSSR);
  }
  let compile;
  function finishComponentSetup(instance, isSSR, skipOptions) {
    const Component = instance.type;
    if (!instance.render) {
      if (!isSSR && compile && !Component.render) {
        const template = Component.template;
        if (template) {
          const { isCustomElement, compilerOptions } = instance.appContext.config;
          const { delimiters, compilerOptions: componentCompilerOptions } = Component;
          const finalCompilerOptions = extend(extend({
            isCustomElement,
            delimiters
          }, compilerOptions), componentCompilerOptions);
          Component.render = compile(template, finalCompilerOptions);
        }
      }
      instance.render = Component.render || NOOP;
    }
    {
      setCurrentInstance(instance);
      pauseTracking();
      applyOptions(instance);
      resetTracking();
      unsetCurrentInstance();
    }
  }
  function createAttrsProxy(instance) {
    return new Proxy(instance.attrs, {
      get(target, key) {
        track(instance, "get", "$attrs");
        return target[key];
      }
    });
  }
  function createSetupContext(instance) {
    const expose = (exposed) => {
      instance.exposed = exposed || {};
    };
    let attrs;
    {
      return {
        get attrs() {
          return attrs || (attrs = createAttrsProxy(instance));
        },
        slots: instance.slots,
        emit: instance.emit,
        expose
      };
    }
  }
  function getExposeProxy(instance) {
    if (instance.exposed) {
      return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
        get(target, key) {
          if (key in target) {
            return target[key];
          } else if (key in publicPropertiesMap) {
            return publicPropertiesMap[key](instance);
          }
        }
      }));
    }
  }
  function isClassComponent(value) {
    return isFunction(value) && "__vccOpts" in value;
  }
  function callWithErrorHandling(fn, instance, type, args) {
    let res;
    try {
      res = args ? fn(...args) : fn();
    } catch (err) {
      handleError(err, instance, type);
    }
    return res;
  }
  function callWithAsyncErrorHandling(fn, instance, type, args) {
    if (isFunction(fn)) {
      const res = callWithErrorHandling(fn, instance, type, args);
      if (res && isPromise(res)) {
        res.catch((err) => {
          handleError(err, instance, type);
        });
      }
      return res;
    }
    const values = [];
    for (let i = 0; i < fn.length; i++) {
      values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
    }
    return values;
  }
  function handleError(err, instance, type, throwInDev = true) {
    const contextVNode = instance ? instance.vnode : null;
    if (instance) {
      let cur = instance.parent;
      const exposedInstance = instance.proxy;
      const errorInfo = type;
      while (cur) {
        const errorCapturedHooks = cur.ec;
        if (errorCapturedHooks) {
          for (let i = 0; i < errorCapturedHooks.length; i++) {
            if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
              return;
            }
          }
        }
        cur = cur.parent;
      }
      const appErrorHandler = instance.appContext.config.errorHandler;
      if (appErrorHandler) {
        callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
        return;
      }
    }
    logError(err, type, contextVNode, throwInDev);
  }
  function logError(err, type, contextVNode, throwInDev = true) {
    {
      console.error(err);
    }
  }
  let isFlushing = false;
  let isFlushPending = false;
  const queue = [];
  let flushIndex = 0;
  const pendingPreFlushCbs = [];
  let activePreFlushCbs = null;
  let preFlushIndex = 0;
  const pendingPostFlushCbs = [];
  let activePostFlushCbs = null;
  let postFlushIndex = 0;
  const resolvedPromise = Promise.resolve();
  let currentFlushPromise = null;
  let currentPreFlushParentJob = null;
  function nextTick(fn) {
    const p = currentFlushPromise || resolvedPromise;
    return fn ? p.then(this ? fn.bind(this) : fn) : p;
  }
  function findInsertionIndex(id) {
    let start = flushIndex + 1;
    let end = queue.length;
    while (start < end) {
      const middle = start + end >>> 1;
      const middleJobId = getId(queue[middle]);
      middleJobId < id ? start = middle + 1 : end = middle;
    }
    return start;
  }
  function queueJob(job) {
    if ((!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) && job !== currentPreFlushParentJob) {
      if (job.id == null) {
        queue.push(job);
      } else {
        queue.splice(findInsertionIndex(job.id), 0, job);
      }
      queueFlush();
    }
  }
  function queueFlush() {
    if (!isFlushing && !isFlushPending) {
      isFlushPending = true;
      currentFlushPromise = resolvedPromise.then(flushJobs);
    }
  }
  function invalidateJob(job) {
    const i = queue.indexOf(job);
    if (i > flushIndex) {
      queue.splice(i, 1);
    }
  }
  function queueCb(cb, activeQueue, pendingQueue, index) {
    if (!isArray(cb)) {
      if (!activeQueue || !activeQueue.includes(cb, cb.allowRecurse ? index + 1 : index)) {
        pendingQueue.push(cb);
      }
    } else {
      pendingQueue.push(...cb);
    }
    queueFlush();
  }
  function queuePreFlushCb(cb) {
    queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
  }
  function queuePostFlushCb(cb) {
    queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
  }
  function flushPreFlushCbs(seen, parentJob = null) {
    if (pendingPreFlushCbs.length) {
      currentPreFlushParentJob = parentJob;
      activePreFlushCbs = [...new Set(pendingPreFlushCbs)];
      pendingPreFlushCbs.length = 0;
      for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
        activePreFlushCbs[preFlushIndex]();
      }
      activePreFlushCbs = null;
      preFlushIndex = 0;
      currentPreFlushParentJob = null;
      flushPreFlushCbs(seen, parentJob);
    }
  }
  function flushPostFlushCbs(seen) {
    if (pendingPostFlushCbs.length) {
      const deduped = [...new Set(pendingPostFlushCbs)];
      pendingPostFlushCbs.length = 0;
      if (activePostFlushCbs) {
        activePostFlushCbs.push(...deduped);
        return;
      }
      activePostFlushCbs = deduped;
      activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
      for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
        activePostFlushCbs[postFlushIndex]();
      }
      activePostFlushCbs = null;
      postFlushIndex = 0;
    }
  }
  const getId = (job) => job.id == null ? Infinity : job.id;
  function flushJobs(seen) {
    isFlushPending = false;
    isFlushing = true;
    flushPreFlushCbs(seen);
    queue.sort((a, b) => getId(a) - getId(b));
    const check = NOOP;
    try {
      for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
        const job = queue[flushIndex];
        if (job && job.active !== false) {
          if (false)
            ;
          callWithErrorHandling(job, null, 14);
        }
      }
    } finally {
      flushIndex = 0;
      queue.length = 0;
      flushPostFlushCbs();
      isFlushing = false;
      currentFlushPromise = null;
      if (queue.length || pendingPreFlushCbs.length || pendingPostFlushCbs.length) {
        flushJobs(seen);
      }
    }
  }
  const INITIAL_WATCHER_VALUE = {};
  function watch(source, cb, options) {
    return doWatch(source, cb, options);
  }
  function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
    const instance = currentInstance;
    let getter;
    let forceTrigger = false;
    let isMultiSource = false;
    if (isRef(source)) {
      getter = () => source.value;
      forceTrigger = !!source._shallow;
    } else if (isReactive(source)) {
      getter = () => source;
      deep = true;
    } else if (isArray(source)) {
      isMultiSource = true;
      forceTrigger = source.some(isReactive);
      getter = () => source.map((s) => {
        if (isRef(s)) {
          return s.value;
        } else if (isReactive(s)) {
          return traverse(s);
        } else if (isFunction(s)) {
          return callWithErrorHandling(s, instance, 2);
        } else
          ;
      });
    } else if (isFunction(source)) {
      if (cb) {
        getter = () => callWithErrorHandling(source, instance, 2);
      } else {
        getter = () => {
          if (instance && instance.isUnmounted) {
            return;
          }
          if (cleanup) {
            cleanup();
          }
          return callWithAsyncErrorHandling(source, instance, 3, [onInvalidate]);
        };
      }
    } else {
      getter = NOOP;
    }
    if (cb && deep) {
      const baseGetter = getter;
      getter = () => traverse(baseGetter());
    }
    let cleanup;
    let onInvalidate = (fn) => {
      cleanup = effect.onStop = () => {
        callWithErrorHandling(fn, instance, 4);
      };
    };
    if (isInSSRComponentSetup) {
      onInvalidate = NOOP;
      if (!cb) {
        getter();
      } else if (immediate) {
        callWithAsyncErrorHandling(cb, instance, 3, [
          getter(),
          isMultiSource ? [] : void 0,
          onInvalidate
        ]);
      }
      return NOOP;
    }
    let oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
    const job = () => {
      if (!effect.active) {
        return;
      }
      if (cb) {
        const newValue = effect.run();
        if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue)) || false) {
          if (cleanup) {
            cleanup();
          }
          callWithAsyncErrorHandling(cb, instance, 3, [
            newValue,
            oldValue === INITIAL_WATCHER_VALUE ? void 0 : oldValue,
            onInvalidate
          ]);
          oldValue = newValue;
        }
      } else {
        effect.run();
      }
    };
    job.allowRecurse = !!cb;
    let scheduler;
    if (flush === "sync") {
      scheduler = job;
    } else if (flush === "post") {
      scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
    } else {
      scheduler = () => {
        if (!instance || instance.isMounted) {
          queuePreFlushCb(job);
        } else {
          job();
        }
      };
    }
    const effect = new ReactiveEffect(getter, scheduler);
    if (cb) {
      if (immediate) {
        job();
      } else {
        oldValue = effect.run();
      }
    } else if (flush === "post") {
      queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
    } else {
      effect.run();
    }
    return () => {
      effect.stop();
      if (instance && instance.scope) {
        remove(instance.scope.effects, effect);
      }
    };
  }
  function instanceWatch(source, value, options) {
    const publicThis = this.proxy;
    const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
    let cb;
    if (isFunction(value)) {
      cb = value;
    } else {
      cb = value.handler;
      options = value;
    }
    const cur = currentInstance;
    setCurrentInstance(this);
    const res = doWatch(getter, cb.bind(publicThis), options);
    if (cur) {
      setCurrentInstance(cur);
    } else {
      unsetCurrentInstance();
    }
    return res;
  }
  function createPathGetter(ctx, path) {
    const segments = path.split(".");
    return () => {
      let cur = ctx;
      for (let i = 0; i < segments.length && cur; i++) {
        cur = cur[segments[i]];
      }
      return cur;
    };
  }
  function traverse(value, seen) {
    if (!isObject(value) || value["__v_skip"]) {
      return value;
    }
    seen = seen || new Set();
    if (seen.has(value)) {
      return value;
    }
    seen.add(value);
    if (isRef(value)) {
      traverse(value.value, seen);
    } else if (isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        traverse(value[i], seen);
      }
    } else if (isSet(value) || isMap(value)) {
      value.forEach((v) => {
        traverse(v, seen);
      });
    } else if (isPlainObject(value)) {
      for (const key in value) {
        traverse(value[key], seen);
      }
    }
    return value;
  }
  function h(type, propsOrChildren, children) {
    const l = arguments.length;
    if (l === 2) {
      if (isObject(propsOrChildren) && !isArray(propsOrChildren)) {
        if (isVNode(propsOrChildren)) {
          return createVNode(type, null, [propsOrChildren]);
        }
        return createVNode(type, propsOrChildren);
      } else {
        return createVNode(type, null, propsOrChildren);
      }
    } else {
      if (l > 3) {
        children = Array.prototype.slice.call(arguments, 2);
      } else if (l === 3 && isVNode(children)) {
        children = [children];
      }
      return createVNode(type, propsOrChildren, children);
    }
  }
  const version = "3.2.19";
  function splitOnCaps(original) {
    let lowercased = original.toLowerCase();
    let result = "";
    for (let i = 0; i < original.length; i++) {
      if (original[i] !== lowercased[i]) {
        result = `${result} ${original[i]}`;
      } else {
        result += lowercased[i];
      }
    }
    return result.split(" ");
  }
  function snakeToCamel(str) {
    return str.replace(/([-_]\w)/g, (g) => g[1].toUpperCase());
  }
  function snakeToPascal(str) {
    return capitalize(snakeToCamel(str));
  }
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const valueTypeForJSType = (valueType) => {
    switch (valueType) {
      case "number":
        return "floatValue";
      case "string":
        return "stringValue";
      case "boolean":
      case "object":
      case "undefined":
        return "objectValue";
      default:
        console.log(`unknown model value type ${valueType}, using objectValue`);
        return "objectValue";
    }
  };
  function getTypeAsString(value) {
    let type = {}.toString.call(value);
    let parts = type.split(/[ [\]]/);
    if (parts.length === 4 && parts[1] === "object")
      return parts[2].replace(/Constructor$/, "");
    throw new Error(`Malformed type when attempted to parse to string: ${type}`);
  }
  function getAllPropertyNames(obj) {
    const proto = Object.getPrototypeOf(obj);
    const inherited = proto ? getAllPropertyNames(proto) : [];
    return [...new Set(Object.getOwnPropertyNames(obj).concat(inherited))];
  }
  function getMatchingPropKeys(propKeys, constructor, idx) {
    return propKeys.map((prop) => {
      let key = snakeToCamel(prop.toUpperCase());
      let thisPiece = constructor.pieces[idx];
      let nextPiece = constructor.pieces[idx + 1];
      if (key === thisPiece) {
        return [thisPiece];
      }
      if (constructor.pieces.length > idx + 1) {
        if (key === thisPiece + nextPiece) {
          return [thisPiece, nextPiece];
        }
      }
      return void 0;
    }).flat().filter((v) => v);
  }
  function getCandidateConstructors(elementClass, vnodeProps) {
    let filteredCandidates = [];
    if (!vnodeProps || Object(vnodeProps) !== vnodeProps)
      return filteredCandidates;
    let definedProps = Object.keys(vnodeProps).filter((key) => vnodeProps[key] !== void 0);
    let definedPropsPartsMap = definedProps.map((key) => splitOnCaps(snakeToCamel(key)).map((c) => c.toUpperCase()));
    let candidateConstructors = Object.getOwnPropertyNames(elementClass).filter((name) => name.startsWith("createWith"));
    let candidateConstructorsMap = candidateConstructors.map((name) => splitOnCaps(name).slice(2).map((c) => c.toUpperCase()));
    for (let idx = 0; idx < candidateConstructorsMap.length; idx++) {
      let candidateArgumentLabels = candidateConstructorsMap[idx];
      let candidateIsUsable = true;
      for (const argLabel of candidateArgumentLabels) {
        let hasProp = definedPropsPartsMap.some((pm) => pm.some((pmm) => pmm === argLabel));
        if (!hasProp) {
          candidateIsUsable = false;
          break;
        }
      }
      if (candidateIsUsable) {
        filteredCandidates.push(candidateArgumentLabels);
      }
    }
    return filteredCandidates;
  }
  function getConstructor(className, vnodeProps) {
    let viewClass = globalThis[className];
    let filteredCandidates = getCandidateConstructors(viewClass, vnodeProps);
    if (!viewClass) {
      throw new Error(`Class ${className} not found.`);
    }
    let constructor = {
      name: "create",
      args: [],
      pieces: []
    };
    if (filteredCandidates.length === 0) {
      return constructor;
    }
    if (filteredCandidates.length > 1) {
      console.log('Found multiple conveinence constructor candidates, falling back to "create" for name', filteredCandidates);
      return constructor;
    }
    if (filteredCandidates.length === 1) {
      constructor.pieces = filteredCandidates[0];
      let args = [];
      let propKeys = vnodeProps ? Object.keys(vnodeProps) : [];
      for (let idx = 0; idx < constructor.pieces.length; idx++) {
        let matchingPropKeys = getMatchingPropKeys(propKeys, constructor, idx);
        if (matchingPropKeys?.length > 0) {
          let arg = matchingPropKeys.join("-");
          let actualKey = propKeys.find((key) => snakeToCamel(key.toUpperCase()) === snakeToCamel(arg.toUpperCase()));
          args.push(actualKey);
        }
      }
      constructor.args = args;
    }
    if (constructor.args.length > 0) {
      constructor.name = "createWith";
      constructor.name += constructor.pieces.reduce((acc, curr) => {
        acc += curr[0].toUpperCase() + curr.toLowerCase().slice(1);
        return acc;
      }, "");
    }
    return constructor;
  }
  function createView(type, vnodeProps) {
    let view;
    let viewClass = globalThis[type];
    if (!viewClass) {
      console.log(`Bridged Class ${type} not found.`);
      return null;
    }
    let { args, name } = getConstructor(type, vnodeProps);
    let fn = viewClass[name];
    if (typeof fn !== "function") {
      let definedProps = Object.keys(vnodeProps).filter((key) => vnodeProps[key] !== void 0 && typeof vnodeProps[key] !== "function");
      throw new Error(`Could not find a valid constructor for type ${type} using defined component props ${definedProps}`);
    }
    if (args.length === 0) {
      view = fn();
    }
    let argValues = args.map((arg) => vnodeProps[arg]);
    view = fn(...argValues);
    if (!view) {
      throw new Error(`Could not create view for element type ${type}.`);
    }
    if (view instanceof NSControl) {
      vnodeProps.onControlTextDidChange = (node) => {
        let vModelUpdateFn = node.props["onUpdate:modelValue"];
        if (vModelUpdateFn) {
          let valueTypeKey = valueTypeForJSType(typeof node.props.modelValue);
          vModelUpdateFn(view[valueTypeKey]);
        }
      };
    }
    return view;
  }
  function setNodeValue(node, key, value, fromPatch = false) {
    let builtins = ["ref", "class", "key"];
    if (builtins.includes(key)) {
      return;
    }
    if (typeof value === "function" && key !== "draw") {
      return;
    }
    let newType = getTypeAsString(value);
    if (newType === "Undefined") {
      return;
    }
    let objectToSet = node.view;
    if (!objectToSet)
      return;
    if (node.view === node.view.window?.contentView) {
      objectToSet = node.view.window;
    }
    if (objectToSet instanceof NSTextView) {
      console.log("TODO: set attributed string on textstorage", objectToSet.textStorage);
    }
    let viewKey = snakeToCamel(key);
    if (fromPatch && viewKey === "modelValue") {
      viewKey = valueTypeForJSType(typeof value);
    }
    if (viewKey === "modelValue") {
      let vModelUpdateFn = node.props["onUpdate:modelValue"];
      if (vModelUpdateFn) {
        console.log("set vModelUpdateFn to value", value, node);
        vModelUpdateFn(value);
      } else {
        console.log("Tried to update model value but could not find update fn");
      }
      return;
    }
    let setter = `set${capitalize(viewKey)}`;
    if (typeof objectToSet[setter] === "function") {
      console.info(`Using setter ${setter} with value \`${value}\` on ${node.view}`);
      if (Array.isArray(value)) {
        objectToSet[setter](...value);
      } else {
        objectToSet[setter](value);
      }
      return;
    }
    let propNames = getAllPropertyNames(objectToSet);
    if (propNames.includes(viewKey)) {
      let currentType = getTypeAsString(objectToSet[viewKey]);
      if (currentType === "Undefined") {
        console.log(`Setting previously undefined key \`${viewKey}\` on ${objectToSet} to ${value}`);
        objectToSet[viewKey] = value;
      } else if (newType === currentType) {
        console.info(`Setting ${viewKey} to value \`${value}\` on ${node.view}`);
        objectToSet[viewKey] = value;
      } else if (newType === "Boolean" && currentType === "Number") {
        console.info(`Setting ${viewKey} to value \`${value}\` (${value ? 1 : 0}) on ${node.view}`);
        objectToSet[viewKey] = value ? 1 : 0;
      } else {
        console.log(`Types don't match for ${viewKey} - tried to set \`${newType}\` but view is \`${currentType}\``, objectToSet);
      }
      return;
    }
    console.info(`"${viewKey}" is undefined and there are no setters with the name "${setter}": `, objectToSet);
  }
  function getPropValueForKey(key, props, defaultValue) {
    let propKeys = props ? Object.keys(props) : [];
    let dkey = snakeToCamel(key.toUpperCase());
    let foundKey = propKeys.find((propKey) => {
      if (dkey === snakeToCamel(propKey.toUpperCase())) {
        return props[propKey];
      }
      return false;
    });
    if (foundKey)
      return props[foundKey];
    return defaultValue;
  }
  function getPropValues(requestedProps, props) {
    let values = {};
    for (let [propName, defaultValue] of Object.entries(requestedProps)) {
      values[propName] = getPropValueForKey(propName, props, defaultValue);
    }
    return values;
  }
  const ignoredKeys = ["flags", "time", "type", "win", "winNum", "ctxt", "NSEvent"];
  const keyLookup = {
    loc: "locationInWindow",
    count: "clickCount"
  };
  let parsedValue = (buff) => {
    let value = buff;
    if (buff && !Number.isNaN(parseFloat(buff))) {
      value = parseFloat(buff);
    }
    return value;
  };
  function decorateEvent(eventDetails, serialized) {
    let buffer = "";
    let valueBuffer = [];
    let insideValue = false;
    let keyName = "";
    let pushBuff = () => {
      if (keyName) {
        if (!ignoredKeys.includes(keyName) && eventDetails[keyName] === void 0) {
          eventDetails[keyLookup[keyName] || keyName] = parsedValue(buffer);
        }
        keyName = "";
      } else if (buffer.trim()) {
        keyName = buffer;
      }
      buffer = "";
    };
    for (let idx = 0; idx < serialized.length; idx++) {
      let char = serialized[idx];
      switch (char) {
        case "(":
        case "{":
          insideValue = true;
          break;
        case ")":
        case "}":
          insideValue = false;
          valueBuffer.push(parsedValue(buffer));
          if (!ignoredKeys.includes(keyName) && eventDetails[keyName] === void 0) {
            eventDetails[keyLookup[keyName] || keyName] = valueBuffer;
          }
          buffer = "";
          valueBuffer = [];
          keyName = "";
          break;
        case ",":
          if (insideValue) {
            valueBuffer.push(parsedValue(buffer));
            buffer = "";
          } else {
            buffer += char;
          }
          break;
        case "=":
        case ":":
          pushBuff();
          break;
        case " ":
          if (!insideValue)
            pushBuff();
          break;
        default:
          buffer += char;
          break;
      }
    }
    pushBuff();
    return eventDetails;
  }
  function emitEvent(node, event, extended) {
    let eventType = event.type?.toString();
    if (!eventType) {
      console.log("Could not find event.type on ", event);
      return;
    }
    let eventName = NSEvent.EventType[eventType];
    if (!eventName) {
      console.log("Could not find event name in NSEvent.EventType enum for ", event);
      return;
    }
    let propName = `on${snakeToPascal(eventName)}`;
    if (typeof node.props?.[propName] !== "function")
      return;
    let populatedEvent = decorateEvent(event, extended);
    console.log("Emitting", propName, populatedEvent);
    node.props[propName](populatedEvent);
  }
  function emitAction(node, event, extended) {
    let { view } = node;
    let vModelUpdateFn = node.props["onUpdate:modelValue"];
    if (view && vModelUpdateFn) {
      let valueTypeKey = valueTypeForJSType(typeof node.props.modelValue);
      vModelUpdateFn(view[valueTypeKey]);
    }
    let actionHandler = node.props?.onAction;
    if (typeof actionHandler !== "function")
      return;
    let eventType = event.type?.toString();
    if (!eventType) {
      console.log("Could not find event.type on ", event);
      return;
    }
    let eventName = NSEvent.EventType[eventType];
    if (!eventName) {
      console.log("Could not find event name in NSEvent.EventType enum for ", event);
      return;
    }
    let populatedEvent = decorateEvent(event, extended);
    actionHandler(populatedEvent);
  }
  let windows = new Set();
  let global$1 = globalThis;
  function fillParentView(view, parent) {
    view.translatesAutoresizingMaskIntoConstraints = false;
    view.topAnchor.constraintWithEqualTo(parent.topAnchor).setActive(true);
    view.bottomAnchor.constraintWithEqualTo(parent.bottomAnchor).setActive(true);
    view.leadingAnchor.constraintWithEqualTo(parent.leadingAnchor).setActive(true);
    view.trailingAnchor.constraintWithEqualTo(parent.trailingAnchor).setActive(true);
  }
  function createWindow(vnodeProps = {}) {
    let defaultContentRect = {
      x: 0,
      y: 0,
      width: 320,
      height: 240
    };
    let defaultStyleMask = NSWindow.StyleMask.Resizable | NSWindow.StyleMask.Titled | NSWindow.StyleMask.Closable | NSWindow.StyleMask.Miniaturizable;
    let defaultBacking = NSWindow.BackingStoreType.Retained;
    let nodeProps = getPropValues({
      contentRect: defaultContentRect,
      styleMask: defaultStyleMask,
      backing: defaultBacking,
      defer: true
    }, vnodeProps);
    let win = NSWindow.createWithContentRectStyleMaskBackingDefer(nodeProps.contentRect, nodeProps.styleMask, nodeProps.backing, nodeProps.defer);
    let node = global$1.VueKitNode.create(win.contentView, `window-${Math.random().toString()}`, {}, emitEvent, emitAction);
    for (let [key, value] of Object.entries(nodeProps)) {
      if (nodeProps[key] !== void 0)
        continue;
      setNodeValue(node, key, value);
    }
    win.makeKeyAndOrderFront(null);
    win.center();
    return node;
  }
  function addToParentNode(node, parent, anchor) {
    if (!parent) {
      console.warn("Undefined parent (top level component) - skipping", node);
      return;
    }
    node.parent = parent;
    if (!parent.children)
      return;
    let { children } = parent;
    let anchorIdx = children.indexOf(anchor);
    if (anchorIdx > -1) {
      parent.children = [...children.slice(0, anchorIdx), node, ...children.slice(anchorIdx)];
    } else {
      parent.children = parent.children.concat([node]);
    }
  }
  function addToParentView(node, parent, anchor, gravityArea) {
    let parentView = parent.view;
    let { view } = node;
    if (!parentView) {
      return;
    }
    if (!view) {
      return;
    }
    if (parentView instanceof NSStackView && parentView.distribution === NSStackView.Distribution.GravityAreas) {
      let area = gravityArea === void 0 ? NSStackView.Gravity.Center : gravityArea;
      parentView.addViewInGravity(node.view, area);
    } else if (parentView instanceof NSStackView || parentView instanceof NSSplitView) {
      if (!anchor) {
        parentView.addArrangedSubview(view);
      } else {
        let anchorPosInParentNode = parent.children.indexOf(anchor);
        if (anchorPosInParentNode === -1) {
          throw new Error("Could not find anchor position in parent");
        }
        let nearestPosInParentNodeWithView;
        for (let idx = anchorPosInParentNode; idx < parent.children.length; idx++) {
          if (parent.children[idx].view) {
            nearestPosInParentNodeWithView = idx;
            break;
          }
        }
        let nearestViewInParentNode = parent.children[nearestPosInParentNodeWithView];
        let childrenWithViews = parent.children.filter((c) => c.view);
        let anchorViewPosition = childrenWithViews.indexOf(nearestViewInParentNode);
        anchorViewPosition = anchorViewPosition < 0 ? 0 : anchorViewPosition;
        parentView.insertArrangedSubviewAtIndex(view, anchorViewPosition);
      }
    } else if (parentView instanceof NSScrollView) {
      console.log("setting documentView of NSScrollView to view");
      parentView.documentView = view;
    } else if (anchor) {
      if (anchor.view) {
        console.log("insert after this view: ", anchor.view);
        parentView.addSubviewPositionedRelativeTo(view, NSWindow.OrderingMode.Below, anchor.view);
      } else {
        console.log("Could not insert view because anchor has no view: ", view, anchor);
      }
    } else {
      parentView.addSubview(view);
      if (parentView === parentView.window.contentView) {
        fillParentView(view, parentView);
      }
    }
  }
  function findClass(type) {
    let formattedType = capitalize(snakeToCamel(type));
    let unprefixedType = type.replace(/[(av|ns|ik)]-/, "");
    let unprefixedFormattedType = capitalize(snakeToCamel(unprefixedType));
    let namesToTry = [
      formattedType,
      unprefixedFormattedType,
      `${formattedType}View`,
      `${unprefixedFormattedType}View`,
      `NS${unprefixedFormattedType}`
    ];
    for (const nameToTry of namesToTry) {
      if (globalThis[nameToTry]) {
        return nameToTry;
      }
    }
    throw new Error(`Bridged Class ${type} not found.`);
  }
  function createNode(className, vnodeProps = {}) {
    let node;
    if (className === "NSWindow") {
      node = createWindow(vnodeProps);
    } else {
      let view = createView(className, vnodeProps);
      let viewId = `${className}-${Math.random().toString()}`;
      node = global$1.VueKitNode.create(view, viewId, vnodeProps, emitEvent, emitAction);
    }
    return node;
  }
  function createElement(type, _, __, vnodeProps) {
    let node;
    let className = findClass(type);
    node = createNode(className, vnodeProps);
    if (!node.props) {
      console.log("Could not find node.props to set");
      return node;
    }
    if (!node.view) {
      console.log("Could not find node.view");
      return node;
    }
    return node;
  }
  const { createApp } = createRenderer({
    createElement,
    insert(node, parent, anchor) {
      let gravity;
      if (node.props?.isBottomSlotChildP) {
        gravity = NSStackView.Gravity.Bottom;
      }
      if (node.props?.isBottomSlotP) {
        gravity = NSStackView.Gravity.Bottom;
      }
      addToParentView(node, parent, anchor, gravity);
      if (node.type === "NSWindow") {
        windows.add(node);
      } else {
        addToParentNode(node, parent, anchor);
      }
    },
    remove(node) {
      if (node.type === "NSWindow") {
        windows.delete(node);
      }
      if (node.view)
        node.view.removeFromSuperview();
      if (node.parent && node.parent?.children.length > 0) {
        let { children } = node.parent;
        let idx = node.parent.children.indexOf(node);
        node.parent.children = [...children.slice(0, idx), ...children.slice(idx + 1)];
      }
      node.destroy();
    },
    patchProp(node, key, _, nextValue) {
      setNodeValue(node, key, nextValue, true);
    },
    nextSibling(node) {
      let children = node.parent?.children;
      if (!children)
        return null;
      let nextIndex = children.indexOf(node) + 1;
      if (nextIndex <= children.length - 1)
        return children[nextIndex];
      return null;
    },
    parentNode(node) {
      return node?.parent;
    },
    createText() {
      return global$1.VueKitNode.create(null, `text-${Math.random().toString()}`, {}, null, null);
    },
    createComment() {
      return global$1.VueKitNode.create(null, `comment-${Math.random().toString()}`, {}, null, null);
    },
    setElementText() {
      throw new Error("setElementText not supported");
    },
    querySelector() {
      throw new Error("querySelector not supported");
    },
    setText() {
      throw new Error("setText not supported");
    },
    setScopeId(node, id) {
      console.log("setScopeId", node, id);
      throw new Error("setScopeId not supported");
    },
    cloneNode() {
      throw new Error("cloneNode not supported");
    },
    insertStaticContent() {
      throw new Error("insertStaticContent not supported");
    }
  });
  const _sfc_main$O = defineComponent({
    props: {
      "allowed-touch-types": {
        type: String,
        default: () => void 0
      },
      "alpha-value": {
        type: Number,
        default: () => void 0
      },
      "autoresizes-subviews": {
        type: Boolean,
        default: () => void 0
      },
      "autoresizing-mask": {
        type: String,
        default: () => void 0
      },
      "bounds": {
        type: Object,
        default: () => void 0
      },
      "bounds-rotation": {
        type: Number,
        default: () => void 0
      },
      "can-draw-concurrently": {
        type: Boolean,
        default: () => void 0
      },
      "can-draw-subviews-into-layer": {
        type: Boolean,
        default: () => void 0
      },
      "focus-ring-type": {
        type: String,
        default: () => void 0
      },
      "frame": {
        type: Object,
        default: () => void 0
      },
      "frame-center-rotation": {
        type: Number,
        default: () => void 0
      },
      "frame-rotation": {
        type: Number,
        default: () => void 0
      },
      "gesture-recognizers": {
        type: Object,
        default: () => void 0
      },
      "is-hidden": {
        type: Boolean,
        default: () => void 0
      },
      "is-horizontal-content-size-constraint-active": {
        type: Boolean,
        default: () => void 0
      },
      "layer": {
        type: Object,
        default: () => void 0
      },
      "layer-contents-placement": {
        type: String,
        default: () => void 0
      },
      "layer-contents-redraw-policy": {
        type: String,
        default: () => void 0
      },
      "layer-uses-core-image-filters": {
        type: Boolean,
        default: () => void 0
      },
      "needs-display": {
        type: Boolean,
        default: () => void 0
      },
      "needs-layout": {
        type: Boolean,
        default: () => void 0
      },
      "needs-update-constraints": {
        type: Boolean,
        default: () => void 0
      },
      "next-key-view": {
        type: Object,
        default: () => void 0
      },
      "posts-bounds-changed-notifications": {
        type: Boolean,
        default: () => void 0
      },
      "posts-frame-changed-notifications": {
        type: Boolean,
        default: () => void 0
      },
      "prepared-content-rect": {
        type: Object,
        default: () => void 0
      },
      "pressure-configuration": {
        type: Object,
        default: () => void 0
      },
      "shadow": {
        type: Object,
        default: () => void 0
      },
      "subviews": {
        type: Object,
        default: () => void 0
      },
      "tool-tip": {
        type: String,
        default: () => void 0
      },
      "translates-autoresizing-mask-into-constraints": {
        type: Boolean,
        default: () => void 0
      },
      "user-interface-layout-direction": {
        type: String,
        default: () => void 0
      },
      "is-vertical-content-size-constraint-active": {
        type: Boolean,
        default: () => void 0
      },
      "wants-layer": {
        type: Boolean,
        default: () => void 0
      },
      "wants-resting-touches": {
        type: Boolean,
        default: () => void 0
      },
      "bounds-origin": {
        type: Object,
        default: () => void 0
      },
      "bounds-size": {
        type: Object,
        default: () => void 0
      },
      "frame-origin": {
        type: Object,
        default: () => void 0
      },
      "frame-size": {
        type: Object,
        default: () => void 0
      },
      "keyboard-focus-ring-needs-display": {
        type: Object,
        default: () => void 0
      }
    },
    computed: {
      attrs() {
        let attrs = { ...this.$props, ...this.$attrs };
        return attrs;
      }
    },
    render() {
      return h("View", this.attrs, this.$slots);
    }
  });
  const _sfc_main$N = defineComponent({
    name: "box",
    extends: { View: _sfc_main$O },
    props: {
      "border-color": {
        type: Object
      },
      "border-width": {
        type: Object
      },
      "box-type": {
        type: String
      },
      "content-view": {
        type: Object
      },
      "content-view-margins": {
        type: Object
      },
      "corner-radius": {
        type: Object
      },
      "fill-color": {
        type: Object
      },
      "title": {
        type: String
      },
      "title-font": {
        type: Object
      },
      "title-position": {
        type: String
      },
      "is-transparent": {
        type: Object
      },
      "frame-from-content-frame": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {
          boxType: NSBox.BoxType,
          titlePosition: NSBox.TitlePosition
        };
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("Box", this.attrs, this.$slots);
    }
  });
  const _sfc_main$M = defineComponent({
    name: "control",
    extends: { View: _sfc_main$O },
    props: {
      "action": {
        type: Object
      },
      "alignment": {
        type: String
      },
      "allows-expansion-tool-tips": {
        type: Object
      },
      "attributed-string-value": {
        type: Object
      },
      "base-writing-direction": {
        type: String
      },
      "cell": {
        type: Object
      },
      "is-continuous": {
        type: Object
      },
      "control-size": {
        type: String
      },
      "double-value": {
        type: Object
      },
      "is-enabled": {
        type: Object
      },
      "float-value": {
        type: Object
      },
      "font": {
        type: Object
      },
      "formatter": {
        type: Object
      },
      "is-highlighted": {
        type: Object
      },
      "ignores-multi-click": {
        type: Object
      },
      "int-value": {
        type: Object
      },
      "integer-value": {
        type: Object
      },
      "line-break-mode": {
        type: String
      },
      "object-value": {
        type: Object
      },
      "refuses-first-responder": {
        type: Object
      },
      "string-value": {
        type: String
      },
      "tag": {
        type: Object
      },
      "target": {
        type: Object
      },
      "uses-single-line-mode": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {
          alignment: NSTextAlignment,
          baseWritingDirection: NSWritingDirection,
          controlSize: NSControl.ControlSize,
          lineBreakMode: NSLineBreakMode
        };
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("Control", this.attrs, this.$slots);
    }
  });
  const _sfc_main$L = defineComponent({
    name: "browser",
    extends: { Control: _sfc_main$M },
    props: {
      "allows-branch-selection": {
        type: Object
      },
      "allows-empty-selection": {
        type: Object
      },
      "allows-multiple-selection": {
        type: Object
      },
      "allows-type-select": {
        type: Object
      },
      "autohides-scroller": {
        type: Object
      },
      "background-color": {
        type: Object
      },
      "cell-prototype": {
        type: Object
      },
      "column-resizing-type": {
        type: String
      },
      "columns-autosave-name": {
        type: String
      },
      "delegate": {
        type: Object
      },
      "double-action": {
        type: Object
      },
      "has-horizontal-scroller": {
        type: Object
      },
      "last-column": {
        type: Object
      },
      "max-visible-columns": {
        type: Object
      },
      "min-column-width": {
        type: Object
      },
      "path-separator": {
        type: String
      },
      "prefers-all-column-user-resizing": {
        type: Object
      },
      "reuses-columns": {
        type: Object
      },
      "row-height": {
        type: Object
      },
      "selection-index-path": {
        type: Object
      },
      "selection-index-paths": {
        type: Object
      },
      "sends-action-on-arrow-keys": {
        type: Object
      },
      "separates-columns": {
        type: Object
      },
      "takes-title-from-previous-column": {
        type: Object
      },
      "is-titled": {
        type: Object
      },
      "cell-class": {
        type: Object
      },
      "default-column-width": {
        type: Object
      },
      "path": {
        type: String
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {
          columnResizingType: NSBrowser.ColumnResizingType
        };
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("Browser", this.attrs, this.$slots);
    }
  });
  const _sfc_main$K = defineComponent({
    name: "button",
    extends: { Control: _sfc_main$M },
    props: {
      "allows-mixed-state": {
        type: Object
      },
      "alternate-image": {
        type: Object
      },
      "alternate-title": {
        type: String
      },
      "attributed-alternate-title": {
        type: Object
      },
      "attributed-title": {
        type: Object
      },
      "bezel-color": {
        type: Object
      },
      "bezel-style": {
        type: String
      },
      "is-bordered": {
        type: Object
      },
      "content-tint-color": {
        type: Object
      },
      "image": {
        type: Object
      },
      "image-hugs-title": {
        type: Object
      },
      "image-position": {
        type: String
      },
      "image-scaling": {
        type: String
      },
      "key-equivalent": {
        type: String
      },
      "key-equivalent-modifier-mask": {
        type: String
      },
      "max-accelerator-level": {
        type: Object
      },
      "shows-border-only-while-mouse-inside": {
        type: Object
      },
      "sound": {
        type: Object
      },
      "is-spring-loaded": {
        type: Object
      },
      "state": {
        type: Object
      },
      "title": {
        type: String
      },
      "is-transparent": {
        type: Object
      },
      "button-type": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {
          bezelStyle: NSButton.BezelStyle,
          imagePosition: NSControl.ImagePosition,
          imageScaling: NSImageScaling,
          keyEquivalentModifierMask: NSEvent.ModifierFlags,
          buttonType: NSButton.ButtonType
        };
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("Button", this.attrs, this.$slots);
    }
  });
  const _sfc_main$J = defineComponent({
    name: "clip",
    extends: { View: _sfc_main$O },
    props: {
      "automatically-adjusts-content-insets": {
        type: Object
      },
      "background-color": {
        type: Object
      },
      "content-insets": {
        type: Object
      },
      "document-cursor": {
        type: Object
      },
      "document-view": {
        type: Object
      },
      "draws-background": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {};
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("ClipView", this.attrs, this.$slots);
    }
  });
  const _sfc_main$I = defineComponent({
    name: "collection",
    extends: { View: _sfc_main$O },
    props: {
      "allows-empty-selection": {
        type: Object
      },
      "allows-multiple-selection": {
        type: Object
      },
      "background-colors": {
        type: Object
      },
      "background-view": {
        type: Object
      },
      "background-view-scrolls-with-content": {
        type: Object
      },
      "collection-view-layout": {
        type: Object
      },
      "content": {
        type: Object
      },
      "data-source": {
        type: Object
      },
      "delegate": {
        type: Object
      },
      "prefetch-data-source": {
        type: Object
      },
      "is-selectable": {
        type: Object
      },
      "selection-index-paths": {
        type: Function
      },
      "selection-indexes": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {};
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("CollectionView", this.attrs, this.$slots);
    }
  });
  const _sfc_main$H = defineComponent({
    name: "color-well",
    extends: { Control: _sfc_main$M },
    props: {
      "is-bordered": {
        type: Object
      },
      "color": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {};
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("ColorWell", this.attrs, this.$slots);
    }
  });
  const _sfc_main$G = defineComponent({
    name: "text-field",
    extends: { Control: _sfc_main$M },
    props: {
      "allows-character-picker-touch-bar-item": {
        type: Object
      },
      "allows-default-tightening-for-truncation": {
        type: Object
      },
      "allows-editing-text-attributes": {
        type: Object
      },
      "is-automatic-text-completion-enabled": {
        type: Object
      },
      "background-color": {
        type: Object
      },
      "bezel-style": {
        type: String
      },
      "is-bezeled": {
        type: Object
      },
      "is-bordered": {
        type: Object
      },
      "delegate": {
        type: Object
      },
      "draws-background": {
        type: Object
      },
      "is-editable": {
        type: Object
      },
      "imports-graphics": {
        type: Object
      },
      "maximum-number-of-lines": {
        type: Object
      },
      "placeholder-attributed-string": {
        type: Object
      },
      "placeholder-string": {
        type: String
      },
      "preferred-max-layout-width": {
        type: Object
      },
      "is-selectable": {
        type: Object
      },
      "text-color": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {
          bezelStyle: NSTextField.BezelStyle
        };
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("TextField", this.attrs, this.$slots);
    }
  });
  const _sfc_main$F = defineComponent({
    name: "combo-box",
    extends: { TextField: _sfc_main$G },
    props: {
      "is-button-bordered": {
        type: Object
      },
      "completes": {
        type: Object
      },
      "data-source": {
        type: Object
      },
      "delegate": {
        type: Object
      },
      "has-vertical-scroller": {
        type: Object
      },
      "intercell-spacing": {
        type: Object
      },
      "item-height": {
        type: Object
      },
      "number-of-visible-items": {
        type: Object
      },
      "uses-data-source": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {};
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("ComboBox", this.attrs, this.$slots);
    }
  });
  const _sfc_main$E = defineComponent({
    name: "date-picker",
    extends: { Control: _sfc_main$M },
    props: {
      "background-color": {
        type: Object
      },
      "is-bezeled": {
        type: Object
      },
      "is-bordered": {
        type: Object
      },
      "calendar": {
        type: Object
      },
      "date-picker-elements": {
        type: String
      },
      "date-picker-mode": {
        type: String
      },
      "date-picker-style": {
        type: String
      },
      "date-value": {
        type: Object
      },
      "delegate": {
        type: Object
      },
      "draws-background": {
        type: Object
      },
      "locale": {
        type: Object
      },
      "max-date": {
        type: Object
      },
      "min-date": {
        type: Object
      },
      "presents-calendar-overlay": {
        type: Object
      },
      "text-color": {
        type: Object
      },
      "time-interval": {
        type: Object
      },
      "time-zone": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {
          datePickerElements: NSDatePicker.ElementFlags,
          datePickerMode: NSDatePicker.Mode,
          datePickerStyle: NSDatePicker.Style
        };
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("DatePicker", this.attrs, this.$slots);
    }
  });
  const _sfc_main$D = defineComponent({
    name: "grid",
    extends: { View: _sfc_main$O },
    props: {
      "column-spacing": {
        type: Object
      },
      "row-alignment": {
        type: String
      },
      "row-spacing": {
        type: Object
      },
      "x-placement": {
        type: String
      },
      "y-placement": {
        type: String
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {
          rowAlignment: NSGridRow.Alignment,
          xPlacement: NSGridCell.Placement,
          yPlacement: NSGridCell.Placement
        };
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("GridView", this.attrs, this.$slots);
    }
  });
  const _sfc_main$C = defineComponent({
    name: "image",
    extends: { Control: _sfc_main$M },
    props: {
      "allows-cut-copy-paste": {
        type: Object
      },
      "animates": {
        type: Object
      },
      "content-tint-color": {
        type: Object
      },
      "is-editable": {
        type: Object
      },
      "image": {
        type: Object
      },
      "image-alignment": {
        type: String
      },
      "image-frame-style": {
        type: String
      },
      "image-scaling": {
        type: String
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {
          imageAlignment: NSImageAlignment,
          imageFrameStyle: NSImageView.FrameStyle,
          imageScaling: NSImageScaling
        };
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("ImageView", this.attrs, this.$slots);
    }
  });
  const _sfc_main$B = defineComponent({
    name: "level-indicator",
    extends: { Control: _sfc_main$M },
    props: {
      "critical-fill-color": {
        type: Object
      },
      "critical-value": {
        type: Object
      },
      "draws-tiered-capacity-levels": {
        type: Object
      },
      "is-editable": {
        type: Object
      },
      "fill-color": {
        type: Object
      },
      "level-indicator-style": {
        type: String
      },
      "max-value": {
        type: Object
      },
      "min-value": {
        type: Object
      },
      "number-of-major-tick-marks": {
        type: Object
      },
      "number-of-tick-marks": {
        type: Object
      },
      "placeholder-visibility": {
        type: String
      },
      "rating-image": {
        type: Object
      },
      "rating-placeholder-image": {
        type: Object
      },
      "tick-mark-position": {
        type: String
      },
      "warning-fill-color": {
        type: Object
      },
      "warning-value": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {
          levelIndicatorStyle: NSLevelIndicator.Style,
          placeholderVisibility: NSLevelIndicator.PlaceholderVisibility,
          tickMarkPosition: NSSlider.TickMarkPosition
        };
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("LevelIndicator", this.attrs, this.$slots);
    }
  });
  const _sfc_main$A = defineComponent({
    name: "matrix",
    extends: { Control: _sfc_main$M },
    props: {
      "allows-empty-selection": {
        type: Object
      },
      "autorecalculates-cell-size": {
        type: Object
      },
      "is-autoscroll": {
        type: Object
      },
      "autosizes-cells": {
        type: Object
      },
      "background-color": {
        type: Object
      },
      "cell-background-color": {
        type: Object
      },
      "cell-class": {
        type: Object
      },
      "cell-size": {
        type: Object
      },
      "delegate": {
        type: Object
      },
      "double-action": {
        type: Object
      },
      "draws-background": {
        type: Object
      },
      "draws-cell-background": {
        type: Object
      },
      "intercell-spacing": {
        type: Object
      },
      "key-cell": {
        type: Object
      },
      "mode": {
        type: String
      },
      "prototype": {
        type: Object
      },
      "is-selection-by-rect": {
        type: Object
      },
      "tab-key-traverses-cells": {
        type: Object
      },
      "scrollable": {
        type: Object
      },
      "validate-size": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {
          mode: NSMatrix.Mode
        };
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("Matrix", this.attrs, this.$slots);
    }
  });
  const _sfc_main$z = defineComponent({
    name: "table",
    extends: { Control: _sfc_main$M },
    props: {
      "allows-column-reordering": {
        type: Object
      },
      "allows-column-resizing": {
        type: Object
      },
      "allows-column-selection": {
        type: Object
      },
      "allows-empty-selection": {
        type: Object
      },
      "allows-multiple-selection": {
        type: Object
      },
      "allows-type-select": {
        type: Object
      },
      "autosave-name": {
        type: String
      },
      "autosave-table-columns": {
        type: Object
      },
      "background-color": {
        type: Object
      },
      "column-autoresizing-style": {
        type: String
      },
      "corner-view": {
        type: Object
      },
      "data-source": {
        type: Object
      },
      "delegate": {
        type: Object
      },
      "double-action": {
        type: Object
      },
      "dragging-destination-feedback-style": {
        type: String
      },
      "floats-group-rows": {
        type: Object
      },
      "grid-color": {
        type: Object
      },
      "grid-style-mask": {
        type: String
      },
      "header-view": {
        type: Object
      },
      "highlighted-table-column": {
        type: Object
      },
      "intercell-spacing": {
        type: Object
      },
      "row-actions-visible": {
        type: Object
      },
      "row-height": {
        type: Object
      },
      "row-size-style": {
        type: String
      },
      "selection-highlight-style": {
        type: String
      },
      "sort-descriptors": {
        type: Object
      },
      "uses-alternating-row-background-colors": {
        type: Object
      },
      "uses-automatic-row-heights": {
        type: Object
      },
      "uses-static-contents": {
        type: Object
      },
      "vertical-motion-can-begin-drag": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {
          columnAutoresizingStyle: NSTableView.ColumnAutoresizingStyle,
          draggingDestinationFeedbackStyle: NSTableView.DraggingDestinationFeedbackStyle,
          gridStyleMask: NSTableView.GridLineStyle,
          rowSizeStyle: NSTableView.RowSizeStyle,
          selectionHighlightStyle: NSTableView.SelectionHighlightStyle
        };
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("TableView", this.attrs, this.$slots);
    }
  });
  const _sfc_main$y = defineComponent({
    name: "outline",
    extends: { TableView: _sfc_main$z },
    props: {
      "autoresizes-outline-column": {
        type: Object
      },
      "autosave-expanded-items": {
        type: Object
      },
      "data-source": {
        type: Object
      },
      "delegate": {
        type: Object
      },
      "indentation-marker-follows-cell": {
        type: Object
      },
      "indentation-per-level": {
        type: Object
      },
      "outline-table-column": {
        type: Object
      },
      "strongly-references-items": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {};
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("OutlineView", this.attrs, this.$slots);
    }
  });
  const _sfc_main$x = defineComponent({
    name: "path-control",
    extends: { Control: _sfc_main$M },
    props: {
      "url": {
        type: Object
      },
      "allowed-types": {
        type: Object
      },
      "background-color": {
        type: Object
      },
      "delegate": {
        type: Object
      },
      "double-action": {
        type: Object
      },
      "is-editable": {
        type: Object
      },
      "path-items": {
        type: Object
      },
      "path-style": {
        type: String
      },
      "placeholder-attributed-string": {
        type: Object
      },
      "placeholder-string": {
        type: String
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {
          pathStyle: NSPathControl.Style
        };
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("PathControl", this.attrs, this.$slots);
    }
  });
  const _sfc_main$w = defineComponent({
    name: "pop-up-button",
    extends: { Button: _sfc_main$K },
    props: {
      "autoenables-items": {
        type: Object
      },
      "preferred-edge": {
        type: String
      },
      "pulls-down": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {
          preferredEdge: NSRectEdge
        };
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("PopUpButton", this.attrs, this.$slots);
    }
  });
  const _sfc_main$v = defineComponent({
    name: "rule-editor",
    extends: { Control: _sfc_main$M },
    props: {
      "can-remove-all-rows": {
        type: Object
      },
      "criteria-key-path": {
        type: String
      },
      "delegate": {
        type: Object
      },
      "display-values-key-path": {
        type: String
      },
      "is-editable": {
        type: Object
      },
      "formatting-dictionary": {
        type: Object
      },
      "formatting-strings-filename": {
        type: String
      },
      "nesting-mode": {
        type: String
      },
      "row-class": {
        type: Object
      },
      "row-height": {
        type: Object
      },
      "row-type-key-path": {
        type: String
      },
      "subrows-key-path": {
        type: String
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {
          nestingMode: NSRuleEditor.NestingMode
        };
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("RuleEditor", this.attrs, this.$slots);
    }
  });
  const _sfc_main$u = defineComponent({
    name: "predicate-editor",
    extends: { RuleEditor: _sfc_main$v },
    props: {
      "row-templates": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {};
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("PredicateEditor", this.attrs, this.$slots);
    }
  });
  const _sfc_main$t = defineComponent({
    name: "progress-indicator",
    extends: { View: _sfc_main$O },
    props: {
      "is-bezeled": {
        type: Object
      },
      "control-size": {
        type: String
      },
      "control-tint": {
        type: String
      },
      "is-displayed-when-stopped": {
        type: Object
      },
      "double-value": {
        type: Object
      },
      "is-indeterminate": {
        type: Object
      },
      "max-value": {
        type: Object
      },
      "min-value": {
        type: Object
      },
      "style": {
        type: String
      },
      "uses-threaded-animation": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {
          controlSize: NSControl.ControlSize,
          controlTint: NSControlTint,
          style: NSProgressIndicator.Style
        };
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("ProgressIndicator", this.attrs, this.$slots);
    }
  });
  const _sfc_main$s = defineComponent({
    name: "ruler",
    extends: { View: _sfc_main$O },
    props: {
      "accessory-view": {
        type: Object
      },
      "client-view": {
        type: Object
      },
      "markers": {
        type: Object
      },
      "measurement-units": {
        type: String
      },
      "orientation": {
        type: String
      },
      "origin-offset": {
        type: Object
      },
      "reserved-thickness-for-accessory-view": {
        type: Object
      },
      "reserved-thickness-for-markers": {
        type: Object
      },
      "rule-thickness": {
        type: Object
      },
      "scroll-view": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {
          orientation: NSRulerView.Orientation
        };
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("RulerView", this.attrs, this.$slots);
    }
  });
  const _sfc_main$r = defineComponent({
    name: "scroll",
    extends: { View: _sfc_main$O },
    props: {
      "allows-magnification": {
        type: Object
      },
      "autohides-scrollers": {
        type: Object
      },
      "automatically-adjusts-content-insets": {
        type: Object
      },
      "background-color": {
        type: Object
      },
      "border-type": {
        type: String
      },
      "content-insets": {
        type: Object
      },
      "content-view": {
        type: Object
      },
      "document-cursor": {
        type: Object
      },
      "document-view": {
        type: Object
      },
      "draws-background": {
        type: Object
      },
      "find-bar-position": {
        type: String
      },
      "has-horizontal-ruler": {
        type: Object
      },
      "has-horizontal-scroller": {
        type: Object
      },
      "has-vertical-ruler": {
        type: Object
      },
      "has-vertical-scroller": {
        type: Object
      },
      "horizontal-line-scroll": {
        type: Object
      },
      "horizontal-page-scroll": {
        type: Object
      },
      "horizontal-ruler-view": {
        type: Object
      },
      "horizontal-scroll-elasticity": {
        type: String
      },
      "horizontal-scroller": {
        type: Object
      },
      "line-scroll": {
        type: Object
      },
      "magnification": {
        type: Object
      },
      "max-magnification": {
        type: Object
      },
      "min-magnification": {
        type: Object
      },
      "page-scroll": {
        type: Object
      },
      "rulers-visible": {
        type: Object
      },
      "scroller-insets": {
        type: Object
      },
      "scroller-knob-style": {
        type: String
      },
      "scroller-style": {
        type: String
      },
      "scrolls-dynamically": {
        type: Object
      },
      "uses-predominant-axis-scrolling": {
        type: Object
      },
      "vertical-line-scroll": {
        type: Object
      },
      "vertical-page-scroll": {
        type: Object
      },
      "vertical-ruler-view": {
        type: Object
      },
      "vertical-scroll-elasticity": {
        type: String
      },
      "vertical-scroller": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {
          borderType: NSBorderType,
          findBarPosition: NSScrollView.FindBarPosition,
          horizontalScrollElasticity: NSScrollView.Elasticity,
          scrollerKnobStyle: NSScroller.KnobStyle,
          scrollerStyle: NSScroller.Style,
          verticalScrollElasticity: NSScrollView.Elasticity
        };
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("ScrollView", this.attrs, this.$slots);
    }
  });
  const _sfc_main$q = defineComponent({
    name: "scroller",
    extends: { Control: _sfc_main$M },
    props: {
      "knob-proportion": {
        type: Object
      },
      "knob-style": {
        type: String
      },
      "scroller-style": {
        type: String
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {
          knobStyle: NSScroller.KnobStyle,
          scrollerStyle: NSScroller.Style
        };
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("Scroller", this.attrs, this.$slots);
    }
  });
  const _sfc_main$p = defineComponent({
    name: "scrubber-arranged",
    extends: { View: _sfc_main$O },
    props: {
      "is-highlighted": {
        type: Object
      },
      "is-selected": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {};
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("ScrubberArrangedView", this.attrs, this.$slots);
    }
  });
  const _sfc_main$o = defineComponent({
    name: "scrubber-item",
    extends: { ScrubberArrangedView: _sfc_main$p },
    props: {},
    computed: {
      attrs() {
        let attrs = {};
        let types = {};
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("ScrubberItemView", this.attrs, this.$slots);
    }
  });
  const _sfc_main$n = defineComponent({
    name: "scrubber-image-item",
    extends: { ScrubberItemView: _sfc_main$o },
    props: {
      "image": {
        type: Object
      },
      "image-alignment": {
        type: String
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {
          imageAlignment: NSImageAlignment
        };
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("ScrubberImageItemView", this.attrs, this.$slots);
    }
  });
  const _sfc_main$m = defineComponent({
    name: "scrubber-selection",
    extends: { ScrubberArrangedView: _sfc_main$p },
    props: {},
    computed: {
      attrs() {
        let attrs = {};
        let types = {};
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("ScrubberSelectionView", this.attrs, this.$slots);
    }
  });
  const _sfc_main$l = defineComponent({
    name: "scrubber-text-item",
    extends: { ScrubberItemView: _sfc_main$o },
    props: {
      "title": {
        type: String
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {};
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("ScrubberTextItemView", this.attrs, this.$slots);
    }
  });
  const _sfc_main$k = defineComponent({
    name: "scrubber",
    extends: { View: _sfc_main$O },
    props: {
      "background-color": {
        type: Object
      },
      "background-view": {
        type: Object
      },
      "is-continuous": {
        type: Object
      },
      "data-source": {
        type: Object
      },
      "delegate": {
        type: Object
      },
      "floats-selection-views": {
        type: Object
      },
      "item-alignment": {
        type: String
      },
      "mode": {
        type: String
      },
      "scrubber-layout": {
        type: Object
      },
      "selected-index": {
        type: Object
      },
      "selection-background-style": {
        type: Object
      },
      "selection-overlay-style": {
        type: Object
      },
      "shows-additional-content-indicators": {
        type: Object
      },
      "shows-arrow-buttons": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {
          itemAlignment: NSScrubber.Alignment,
          mode: NSScrubber.Mode
        };
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("Scrubber", this.attrs, this.$slots);
    }
  });
  const _sfc_main$j = defineComponent({
    name: "search-field",
    extends: { TextField: _sfc_main$G },
    props: {
      "centers-placeholder": {
        type: Object
      },
      "delegate": {
        type: Object
      },
      "maximum-recents": {
        type: Object
      },
      "recent-searches": {
        type: Object
      },
      "recents-autosave-name": {
        type: String
      },
      "search-menu-template": {
        type: Object
      },
      "sends-search-string-immediately": {
        type: Object
      },
      "sends-whole-search-string": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {};
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("SearchField", this.attrs, this.$slots);
    }
  });
  const _sfc_main$i = defineComponent({
    name: "secure-text-field",
    extends: { TextField: _sfc_main$G },
    props: {},
    computed: {
      attrs() {
        let attrs = {};
        let types = {};
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("SecureTextField", this.attrs, this.$slots);
    }
  });
  const _sfc_main$h = defineComponent({
    name: "segmented-control",
    extends: { Control: _sfc_main$M },
    props: {
      "segment-count": {
        type: Object
      },
      "segment-distribution": {
        type: String
      },
      "segment-style": {
        type: String
      },
      "selected-segment": {
        type: Object
      },
      "selected-segment-bezel-color": {
        type: Object
      },
      "is-spring-loaded": {
        type: Object
      },
      "tracking-mode": {
        type: String
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {
          segmentDistribution: NSSegmentedControl.Distribution,
          segmentStyle: NSSegmentedControl.Style,
          trackingMode: NSSegmentedControl.SwitchTracking
        };
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("SegmentedControl", this.attrs, this.$slots);
    }
  });
  const _sfc_main$g = defineComponent({
    name: "slider",
    extends: { Control: _sfc_main$M },
    props: {
      "allows-tick-mark-values-only": {
        type: Object
      },
      "alt-increment-value": {
        type: Object
      },
      "max-value": {
        type: Object
      },
      "min-value": {
        type: Object
      },
      "number-of-tick-marks": {
        type: Object
      },
      "slider-type": {
        type: String
      },
      "tick-mark-position": {
        type: String
      },
      "track-fill-color": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {
          sliderType: NSSlider.SliderType,
          tickMarkPosition: NSSlider.TickMarkPosition
        };
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("Slider", this.attrs, this.$slots);
    }
  });
  const _sfc_main$f = defineComponent({
    name: "split",
    extends: { View: _sfc_main$O },
    props: {
      "arranges-all-subviews": {
        type: Object
      },
      "autosave-name": {
        type: String
      },
      "delegate": {
        type: Object
      },
      "divider-style": {
        type: String
      },
      "is-vertical": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {
          dividerStyle: NSSplitView.DividerStyle
        };
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("SplitView", this.attrs, this.$slots);
    }
  });
  const _sfc_main$e = defineComponent({
    name: "stack",
    extends: { View: _sfc_main$O },
    props: {
      "alignment": {
        type: String
      },
      "delegate": {
        type: Object
      },
      "detaches-hidden-views": {
        type: Object
      },
      "distribution": {
        type: String
      },
      "edge-insets": {
        type: Object
      },
      "orientation": {
        type: String
      },
      "spacing": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {
          alignment: NSLayoutConstraint.Attribute,
          distribution: NSStackView.Distribution,
          orientation: NSUserInterfaceLayoutOrientation
        };
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("StackView", this.attrs, this.$slots);
    }
  });
  const _sfc_main$d = defineComponent({
    name: "status-bar-button",
    extends: { Button: _sfc_main$K },
    props: {
      "appears-disabled": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {};
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("StatusBarButton", this.attrs, this.$slots);
    }
  });
  const _sfc_main$c = defineComponent({
    name: "stepper",
    extends: { Control: _sfc_main$M },
    props: {
      "autorepeat": {
        type: Object
      },
      "increment": {
        type: Object
      },
      "max-value": {
        type: Object
      },
      "min-value": {
        type: Object
      },
      "value-wraps": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {};
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("Stepper", this.attrs, this.$slots);
    }
  });
  const _sfc_main$b = defineComponent({
    name: "switch",
    extends: { Control: _sfc_main$M },
    props: {
      "state": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {};
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("Switch", this.attrs, this.$slots);
    }
  });
  const _sfc_main$a = defineComponent({
    name: "tab",
    extends: { View: _sfc_main$O },
    props: {
      "allows-truncated-labels": {
        type: Object
      },
      "control-size": {
        type: String
      },
      "delegate": {
        type: Object
      },
      "draws-background": {
        type: Object
      },
      "font": {
        type: Object
      },
      "tab-position": {
        type: String
      },
      "tab-view-border-type": {
        type: String
      },
      "tab-view-items": {
        type: Object
      },
      "tab-view-type": {
        type: String
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {
          controlSize: NSControl.ControlSize,
          tabPosition: NSTabView.TabPosition,
          tabViewBorderType: NSTabView.TabViewBorderType,
          tabViewType: NSTabView.TabType
        };
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("TabView", this.attrs, this.$slots);
    }
  });
  const _sfc_main$9 = defineComponent({
    name: "table-cell",
    extends: { View: _sfc_main$O },
    props: {
      "background-style": {
        type: String
      },
      "image-view": {
        type: Object
      },
      "object-value": {
        type: Object
      },
      "row-size-style": {
        type: String
      },
      "text-field": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {
          backgroundStyle: NSView.BackgroundStyle,
          rowSizeStyle: NSTableView.RowSizeStyle
        };
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("TableCellView", this.attrs, this.$slots);
    }
  });
  const _sfc_main$8 = defineComponent({
    name: "table-header",
    extends: { View: _sfc_main$O },
    props: {
      "table-view": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {};
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("TableHeaderView", this.attrs, this.$slots);
    }
  });
  const _sfc_main$7 = defineComponent({
    name: "table-row",
    extends: { View: _sfc_main$O },
    props: {
      "background-color": {
        type: Object
      },
      "dragging-destination-feedback-style": {
        type: String
      },
      "is-emphasized": {
        type: Object
      },
      "is-floating": {
        type: Object
      },
      "is-group-row-style": {
        type: Object
      },
      "indentation-for-drop-operation": {
        type: Object
      },
      "is-next-row-selected": {
        type: Object
      },
      "is-previous-row-selected": {
        type: Object
      },
      "is-selected": {
        type: Object
      },
      "selection-highlight-style": {
        type: String
      },
      "is-target-for-drop-operation": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {
          draggingDestinationFeedbackStyle: NSTableView.DraggingDestinationFeedbackStyle,
          selectionHighlightStyle: NSTableView.SelectionHighlightStyle
        };
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("TableRowView", this.attrs, this.$slots);
    }
  });
  const _sfc_main$6 = defineComponent({
    name: "text",
    extends: { View: _sfc_main$O },
    props: {
      "alignment": {
        type: String
      },
      "background-color": {
        type: Object
      },
      "base-writing-direction": {
        type: String
      },
      "delegate": {
        type: Object
      },
      "draws-background": {
        type: Object
      },
      "is-editable": {
        type: Object
      },
      "is-field-editor": {
        type: Object
      },
      "font": {
        type: Object
      },
      "is-horizontally-resizable": {
        type: Object
      },
      "imports-graphics": {
        type: Object
      },
      "max-size": {
        type: Object
      },
      "min-size": {
        type: Object
      },
      "is-rich-text": {
        type: Object
      },
      "is-selectable": {
        type: Object
      },
      "selected-range": {
        type: Object
      },
      "string": {
        type: String
      },
      "text-color": {
        type: Object
      },
      "uses-font-panel": {
        type: Object
      },
      "is-vertically-resizable": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {
          alignment: NSTextAlignment,
          baseWritingDirection: NSWritingDirection
        };
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("Text", this.attrs, this.$slots);
    }
  });
  const _sfc_main$5 = defineComponent({
    name: "text-view",
    extends: { Text: _sfc_main$6 },
    props: {
      "accepts-glyph-info": {
        type: Object
      },
      "allowed-input-source-locales": {
        type: Object
      },
      "allows-character-picker-touch-bar-item": {
        type: Object
      },
      "allows-document-background-color-change": {
        type: Object
      },
      "allows-image-editing": {
        type: Object
      },
      "allows-undo": {
        type: Object
      },
      "is-automatic-dash-substitution-enabled": {
        type: Object
      },
      "is-automatic-data-detection-enabled": {
        type: Object
      },
      "is-automatic-link-detection-enabled": {
        type: Object
      },
      "is-automatic-quote-substitution-enabled": {
        type: Object
      },
      "is-automatic-spelling-correction-enabled": {
        type: Object
      },
      "is-automatic-text-completion-enabled": {
        type: Object
      },
      "is-automatic-text-replacement-enabled": {
        type: Object
      },
      "is-continuous-spell-checking-enabled": {
        type: Object
      },
      "default-paragraph-style": {
        type: Object
      },
      "delegate": {
        type: Object
      },
      "displays-link-tool-tips": {
        type: Object
      },
      "enabled-text-checking-types": {
        type: Object
      },
      "is-grammar-checking-enabled": {
        type: Object
      },
      "is-incremental-searching-enabled": {
        type: Object
      },
      "insertion-point-color": {
        type: Object
      },
      "link-text-attributes": {
        type: Object
      },
      "marked-text-attributes": {
        type: Object
      },
      "is-ruler-visible": {
        type: Object
      },
      "selected-ranges": {
        type: Object
      },
      "selected-text-attributes": {
        type: Object
      },
      "selection-granularity": {
        type: String
      },
      "smart-insert-delete-enabled": {
        type: Object
      },
      "text-container": {
        type: Object
      },
      "text-container-inset": {
        type: Object
      },
      "typing-attributes": {
        type: Object
      },
      "uses-adaptive-color-mapping-for-dark-appearance": {
        type: Object
      },
      "uses-find-bar": {
        type: Object
      },
      "uses-find-panel": {
        type: Object
      },
      "uses-inspector-bar": {
        type: Object
      },
      "uses-rollover-button-for-selection": {
        type: Object
      },
      "uses-ruler": {
        type: Object
      },
      "constrained-frame-size": {
        type: Object
      },
      "layout-orientation": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {
          selectionGranularity: NSSelectionGranularity,
          layoutOrientation: NSLayoutManager.TextLayoutOrientation
        };
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("TextView", this.attrs, this.$slots);
    }
  });
  const _sfc_main$4 = defineComponent({
    name: "token-field",
    extends: { TextField: _sfc_main$G },
    props: {
      "completion-delay": {
        type: Object
      },
      "delegate": {
        type: Object
      },
      "token-style": {
        type: String
      },
      "tokenizing-character-set": {
        type: Object
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {
          tokenStyle: NSTokenField.TokenStyle
        };
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("TokenField", this.attrs, this.$slots);
    }
  });
  const _sfc_main$3 = defineComponent({
    name: "visual-effect",
    extends: { View: _sfc_main$O },
    props: {
      "blending-mode": {
        type: String
      },
      "is-emphasized": {
        type: Object
      },
      "mask-image": {
        type: Object
      },
      "material": {
        type: String
      },
      "state": {
        type: String
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        let types = {
          blendingMode: NSVisualEffectView.BlendingMode,
          material: NSVisualEffectView.Material,
          state: NSVisualEffectView.State
        };
        for (const [propName, propType] of Object.entries(types)) {
          if (this[propName] !== void 0) {
            attrs[propName] = propType[this[propName]];
          }
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("VisualEffectView", this.attrs, this.$slots);
    }
  });
  const _sfc_main$2 = defineComponent({
    name: "av-capture",
    extends: { View: _sfc_main$O },
    props: {
      "controls-style": {
        type: String,
        default: () => void 0
      },
      "delegate": {
        type: Object,
        default: () => void 0
      },
      "video-gravity": {
        type: String,
        default: () => void 0
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        if (this["controls-style"] !== void 0) {
          attrs["controls-style"] = AVCaptureViewControlsStyle[this["controls-style"]];
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("CaptureView", this.attrs, this.$slots);
    }
  });
  const _sfc_main$1 = defineComponent({
    name: "av-player",
    extends: { View: _sfc_main$O },
    props: {
      "action-pop-up-button-menu": {
        type: Object,
        default: () => void 0
      },
      "allows-picture-in-picture-playback": {
        type: Boolean,
        default: () => void 0
      },
      "controls-style": {
        type: String,
        default: () => void 0
      },
      "picture-in-picture-delegate": {
        type: Object,
        default: () => void 0
      },
      "player": {
        type: Object,
        default: () => void 0
      },
      "shows-frame-stepping-buttons": {
        type: Boolean,
        default: () => void 0
      },
      "shows-full-screen-toggle-button": {
        type: Boolean,
        default: () => void 0
      },
      "shows-sharing-service-button": {
        type: Boolean,
        default: () => void 0
      },
      "shows-timecodes": {
        type: Boolean,
        default: () => void 0
      },
      "updates-now-playing-info-center": {
        type: Boolean,
        default: () => void 0
      },
      "video-gravity": {
        type: String,
        default: () => void 0
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        if (this["controls-style"] !== void 0) {
          attrs["controls-style"] = AVPlayerViewControlsStyle[this["controls-style"]];
        }
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("PlayerView", this.attrs, this.$slots);
    }
  });
  const _sfc_main = defineComponent({
    name: "av-route-picker",
    extends: { View: _sfc_main$O },
    props: {
      "delegate": {
        type: Object,
        default: () => void 0
      },
      "player": {
        type: Object,
        default: () => void 0
      },
      "is-route-picker-button-bordered": {
        type: Boolean,
        default: () => void 0
      }
    },
    computed: {
      attrs() {
        let attrs = {};
        return { ...this.$props, ...this.$attrs, ...attrs };
      }
    },
    render() {
      return h("RoutePickerView", this.attrs, this.$slots);
    }
  });
  exports2.avCapture = _sfc_main$2;
  exports2.avLayer = _sfc_main$1;
  exports2.avRoutePicker = _sfc_main;
  exports2.box = _sfc_main$N;
  exports2.browser = _sfc_main$L;
  exports2.button = _sfc_main$K;
  exports2.clip = _sfc_main$J;
  exports2.collection = _sfc_main$I;
  exports2.colorWell = _sfc_main$H;
  exports2.comboBox = _sfc_main$F;
  exports2.control = _sfc_main$M;
  exports2.createApp = createApp;
  exports2.datePicker = _sfc_main$E;
  exports2.grid = _sfc_main$D;
  exports2.image = _sfc_main$C;
  exports2.levelIndicator = _sfc_main$B;
  exports2.matrix = _sfc_main$A;
  exports2.outline = _sfc_main$y;
  exports2.pathControl = _sfc_main$x;
  exports2.popUpButton = _sfc_main$w;
  exports2.predicateEditor = _sfc_main$u;
  exports2.progressIndicator = _sfc_main$t;
  exports2.ruleEditor = _sfc_main$v;
  exports2.ruler = _sfc_main$s;
  exports2.scroll = _sfc_main$r;
  exports2.scroller = _sfc_main$q;
  exports2.scrubber = _sfc_main$k;
  exports2.scrubberArranged = _sfc_main$p;
  exports2.scrubberImageItem = _sfc_main$n;
  exports2.scrubberItem = _sfc_main$o;
  exports2.scrubberSelection = _sfc_main$m;
  exports2.scrubberTextItem = _sfc_main$l;
  exports2.searchField = _sfc_main$j;
  exports2.secureTextField = _sfc_main$i;
  exports2.segmentedControl = _sfc_main$h;
  exports2.slider = _sfc_main$g;
  exports2.split = _sfc_main$f;
  exports2.stack = _sfc_main$e;
  exports2.statusBarButton = _sfc_main$d;
  exports2.stepper = _sfc_main$c;
  exports2.switchView = _sfc_main$b;
  exports2.tab = _sfc_main$a;
  exports2.table = _sfc_main$z;
  exports2.tableCell = _sfc_main$9;
  exports2.tableHeader = _sfc_main$8;
  exports2.tableRow = _sfc_main$7;
  exports2.text = _sfc_main$6;
  exports2.textField = _sfc_main$G;
  exports2.textView = _sfc_main$5;
  exports2.tokenField = _sfc_main$4;
  exports2.view = _sfc_main$O;
  exports2.visualEffect = _sfc_main$3;
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2[Symbol.toStringTag] = "Module";
});
