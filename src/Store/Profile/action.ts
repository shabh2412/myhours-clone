import { ProfileSetUsername, PROFILE_SET_USERNAME, ProfileSetEmail, PROFILE_SET_EMAIL, PROFILE_WORKING_ON_WEEKENDS, ProfileWorkingOnWeekends, ProfileFirstDayOfWeek, PROFILE_FIRST_DAY_OF_WEEK, ProfileEndOfWorkingHours, PROFILE_START_OF_WORKING_HOURS, PROFILE_END_OF_WORKING_HOURS, PROFILE_ENABLE_NEW_TRACK, ProfileEnableNewTrack, PROFILE_TIME_STEPS_IN_MINUTES, ProfileTimeStepsInMinutes, ProfileSubOrUnsubWeekly, PROFILE_SUB_OR_UNSUB_WEEKLY } from './actionType';



export const ProfileSetUsernameAction = ( value : string ): ProfileSetUsername => {

    return {
        type : PROFILE_SET_USERNAME,
        payload : value
    }

}

export const ProfileSetEmailAction = ( value : string ): ProfileSetEmail => {

    return {
        type : PROFILE_SET_EMAIL,
        payload : value
    }

}

export const ProfileWorkingOnWeekendsAction = ( value : boolean ): ProfileWorkingOnWeekends => {

    return {
        type : PROFILE_WORKING_ON_WEEKENDS,
        payload : value
    }

}

export const ProfileFirstDayOfWeekAction = ( value : string ): ProfileFirstDayOfWeek => {

    return {
        type : PROFILE_FIRST_DAY_OF_WEEK,
        payload : value
    }

}

export const ProfileEndOfWorkingHoursAction = ( value : string ): ProfileEndOfWorkingHours => {

    return {
        type : PROFILE_END_OF_WORKING_HOURS,
        payload : value
    }

}

export const ProfileEnableNewTrackAction = ( value : boolean ): ProfileEnableNewTrack => {

    return {
        type : PROFILE_ENABLE_NEW_TRACK,
        payload : value
    }

}

export const ProfileTimeStepsInMinutesAction = ( value : string ): ProfileTimeStepsInMinutes => {

    return {
        type : PROFILE_TIME_STEPS_IN_MINUTES,
        payload : value
    }

}

export const ProfileSubOrUnsubWeeklyAction = ( value : boolean ): ProfileSubOrUnsubWeekly => {

    return {
        type : PROFILE_SUB_OR_UNSUB_WEEKLY,
        payload : value
    }

}