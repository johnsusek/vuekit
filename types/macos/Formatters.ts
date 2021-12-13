declare global {
  export class Formatters {
    static localizedStringByJoining(byJoining: [String]): String
    static localizedStringFromDateDateStyleTimeStyle(from: Date, dateStyle: DateFormatter.Style, timeStyle: DateFormatter.Style): String
    static localizedStringFromNumberStyle(from: NSNumber, number: NumberFormatter.Style): String
    static localizedStringFromPersonNameComponentsStyleOptions(from: PersonNameComponents, style: PersonNameComponentsFormatter.Style, options: PersonNameComponentsFormatter.Options): String
    static localizedStringFromDateComponentsUnitsStyle?(from: DateComponents, unitsStyle: DateComponentsFormatter.UnitsStyle): String
    static stringFromByteCountCountStyle(fromByteCount: number, countStyle: ByteCountFormatter.CountStyle): String
    static stringFromDateTimeZoneFormatOptions(from: Date, timeZone: TimeZone, formatOptions: ISO8601DateFormatter.Options): String
  }
}

export { Formatters }