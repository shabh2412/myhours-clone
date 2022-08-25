import { ProfileDispatchHandler,PROFILE_ENABLE_NEW_TRACK,PROFILE_END_OF_WORKING_HOURS,PROFILE_FIRST_DAY_OF_WEEK,PROFILE_SET_EMAIL,PROFILE_SET_USERNAME, PROFILE_START_OF_WORKING_HOURS, PROFILE_SUB_OR_UNSUB_WEEKLY, PROFILE_TIME_STEPS_IN_MINUTES, PROFILE_WORKING_ON_WEEKENDS } from "./actionType"


export type ProfileInit = {

    profileUsername : string,
    profileEmail : string,
    profileWorkingWeekends : boolean,
    profileFirstDay : string,
    profileStartingWorkingHour : string,
    profileEndingWorkingHour : string,
    profileEnableNewTrack : boolean,
    profileTimeInMinutes : string,
    profileSubOrUnsub : boolean

}

const ProfileInitialState : ProfileInit = {
    profileUsername : "",
    profileEmail : "",
    profileWorkingWeekends : false,
    profileFirstDay : "",
    profileStartingWorkingHour : "",
    profileEndingWorkingHour : "",
    profileEnableNewTrack : false,
    profileTimeInMinutes : "",
    profileSubOrUnsub : false
}

export const profileReducer = ( state= ProfileInitialState, { type,payload }: ProfileDispatchHandler  ) : ProfileInit => {
   
    switch(type){
        case PROFILE_SET_USERNAME : {
            return {
                ...state,
                profileUsername : payload
            }
        }
        case PROFILE_SET_EMAIL : {
            return {
                ...state,
                profileEmail : payload
            }
        }
        case PROFILE_WORKING_ON_WEEKENDS : {
            return {
                ...state,
                profileWorkingWeekends : payload
            }
        }
        case PROFILE_FIRST_DAY_OF_WEEK : {
            return {
                ...state,
                profileFirstDay : payload
            }
        }
        case PROFILE_START_OF_WORKING_HOURS : {
            return {
                ...state,
                profileStartingWorkingHour : payload
            }
        }
        case PROFILE_END_OF_WORKING_HOURS : {
            return {
                ...state,
                profileEndingWorkingHour : payload
            }
        }
        case PROFILE_ENABLE_NEW_TRACK : {
            return {
                ...state,
                profileEnableNewTrack : payload
            }
        }
        case PROFILE_TIME_STEPS_IN_MINUTES : {
            return {
                ...state,
                profileTimeInMinutes : payload
            }
        }
        case PROFILE_SUB_OR_UNSUB_WEEKLY : {
            return {
                ...state,
                profileSubOrUnsub : payload
            }
        }
        default : return state
    }

}