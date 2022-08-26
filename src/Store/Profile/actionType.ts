export const PROFILE_SET_USERNAME = "PROFILE_SET_USERNAME"
export const PROFILE_SET_EMAIL = "PROFILE_SET_EMAIL"
export const PROFILE_WORKING_ON_WEEKENDS = "PROFILE_WORKING_ON_WEEKENDS"
export const PROFILE_FIRST_DAY_OF_WEEK = "PROFILE_FIRST_DAY_OF_WEEK"
export const PROFILE_START_OF_WORKING_HOURS = "PROFILE_START_WORKING_HOURS"
export const PROFILE_END_OF_WORKING_HOURS = "PROFILE_END_OF_WORKING_HOURS"
export const PROFILE_ENABLE_NEW_TRACK = "PROFILE_ENABLE_NEW_TRACK"
export const PROFILE_TIME_STEPS_IN_MINUTES = "PROFILE_TIME_STEPS_IN_MINUTES"
export const PROFILE_SUB_OR_UNSUB_WEEKLY = "PROFILE_SUB_OR_UNSUB_WEEKLY"

export interface ProfileSetUsername {
    type : typeof PROFILE_SET_USERNAME,
    payload : string
}

export interface ProfileSetEmail {
    type : typeof PROFILE_SET_EMAIL,
    payload : string
} 

export interface ProfileWorkingOnWeekends {
    type : typeof PROFILE_WORKING_ON_WEEKENDS,
    payload : boolean
}

export interface ProfileFirstDayOfWeek {
    type : typeof PROFILE_FIRST_DAY_OF_WEEK,
    payload : string
}

export interface ProfileStartOfWorkingHours {
    type : typeof PROFILE_START_OF_WORKING_HOURS,
    payload : string
}

export interface ProfileEndOfWorkingHours {
    type : typeof PROFILE_END_OF_WORKING_HOURS,
    payload : string
}

export interface ProfileEnableNewTrack {
    type : typeof PROFILE_ENABLE_NEW_TRACK,
    payload : boolean
}

export interface ProfileTimeStepsInMinutes {
    type : typeof PROFILE_TIME_STEPS_IN_MINUTES,
    payload : string
}

export interface ProfileSubOrUnsubWeekly {
    type : typeof PROFILE_SUB_OR_UNSUB_WEEKLY,
    payload : boolean
}

export type ProfileDispatchHandler = ProfileSubOrUnsubWeekly | ProfileTimeStepsInMinutes | ProfileEnableNewTrack | ProfileEndOfWorkingHours | ProfileStartOfWorkingHours | ProfileFirstDayOfWeek | ProfileSetUsername | ProfileSetEmail | ProfileWorkingOnWeekends