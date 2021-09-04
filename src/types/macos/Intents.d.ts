
enum INBookRestaurantReservationIntentCode {

	Success = 0,

	Denied = 1,

	Failure = 2,

	FailureRequiringAppLaunch = 3,

	FailureRequiringAppLaunchMustVerifyCredentials = 4,

	FailureRequiringAppLaunchServiceTemporarilyUnavailable = 5
}


enum INGetAvailableRestaurantReservationBookingDefaultsIntentResponseCode {

	Success = 0,

	Failure = 1,

	Unspecified = 2
}


enum INGetAvailableRestaurantReservationBookingsIntentCode {

	Success = 0,

	Failure = 1,

	FailureRequestUnsatisfiable = 2,

	FailureRequestUnspecified = 3
}


enum INGetRestaurantGuestIntentResponseCode {

	Success = 0,

	Failure = 1
}


enum INGetUserCurrentRestaurantReservationBookingsIntentResponseCode {

	Success = 0,

	Failure = 1,

	FailureRequestUnsatisfiable = 2,

	Unspecified = 3
}


declare var INPersonRelationshipDaughter: string;

declare var INPersonRelationshipSon: string;

enum INPersonSuggestionType {

	None = 0,

	SocialProfile = 1,

	InstantMessageAddress = 2
}


enum INRecurrenceFrequency {

	Unknown = 0,

	Minute = 1,

	Hourly = 2,

	Daily = 3,

	Weekly = 4,

	Monthly = 5,

	Yearly = 6
}


enum INRestaurantReservationUserBookingStatus {

	Pending = 0,

	Confirmed = 1,

	Denied = 2
}


declare var IntentsVersionNumber: number;

declare var IntentsVersionString: number;
