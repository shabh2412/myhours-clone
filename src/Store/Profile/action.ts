import { loadDataLocalStorage } from './../../Utils/localData';
import axios from 'axios';
import { Dispatch } from 'react';
import { ProfileSetUsername, PROFILE_SET_USERNAME, ProfileSetEmail, PROFILE_SET_EMAIL, PROFILE_WORKING_ON_WEEKENDS, ProfileWorkingOnWeekends, ProfileFirstDayOfWeek, PROFILE_FIRST_DAY_OF_WEEK, ProfileEndOfWorkingHours, PROFILE_START_OF_WORKING_HOURS, PROFILE_END_OF_WORKING_HOURS, PROFILE_ENABLE_NEW_TRACK, ProfileEnableNewTrack, PROFILE_TIME_STEPS_IN_MINUTES, ProfileTimeStepsInMinutes, ProfileSubOrUnsubWeekly, PROFILE_SUB_OR_UNSUB_WEEKLY, ProfileDispatchHandler, ProfileStartOfWorkingHours, ProfileGetUserDataById, PROFILE_GET_USER_PROFILE_DATA_BY_ID, ProfileGetId, PROFILE_GET_ID, gettedProfileDataForOnePerson } from './actionType';
import { ProfileInit } from './reducer';



export const profileGetData = ( id : string): any => async( dispatch : Dispatch<ProfileDispatchHandler> ) : Promise<void> => {

    
    try{

        let data = await axios.get(`https://my-hours.herokuapp.com/profile/${id}`)    
        
        if(data.data.length>0)
        {
            console.log("Not exists")
        }
        else{
            dispatch(ProfileGetUserDataByIdAction(data.data))
        }

    }
    catch(e){
        console.log(e)
    }

}

export const profilePostData = ( obj: ProfileInit ): any => async ( dispatch : Dispatch<ProfileDispatchHandler> ) : Promise<void> => {

    let localData = loadDataLocalStorage('auth_Cachehash')

    let [ id, x ] = localData.trim().split("_") 

    try{
        let data = await axios.post(`https://my-hours.herokuapp.com/profile`, {
            name : obj.profileUsername,
            email : obj.profileEmail,
            workingOnweekends : obj.profileWorkingWeekends,
            firstDayOfWeek : obj.profileFirstDay,
            startingWorkingHours : obj.profileStartingWorkingHour,
            endingWorkingHours : obj.profileEndingWorkingHour,
            enableNewTrack : obj.profileEnableNewTrack,
            timeStepsInMinutes : obj.profileTimeInMinutes,
            subOrUnsub : obj.profileSubOrUnsub,
            isSessionActive : true,
            userProfileRef : id
        }, {
            headers : {
                token : `${obj.profileEmail}`
            }
        })

        dispatch(ProfileGetIdAction(data.data._id))
    }
    catch(e){
        console.log(e)
    }

}

export const profileUpdatingData = ( obj : ProfileInit, secObj : gettedProfileDataForOnePerson ): any => async(dispatch : Dispatch<ProfileDispatchHandler>) : Promise<void> => {

    try {
        let data = await axios.patch(`https://my-hours.herokuapp.com/profile/${secObj._id}`, {
            name : obj.profileUsername || secObj.name,
            email : obj.profileEmail || secObj.email ,
            workingOnweekends : obj.profileWorkingWeekends || secObj.workingOnweekends,
            firstDayOfWeek : obj.profileFirstDay || secObj.firstDayOfWeek,
            startingWorkingHours : obj.profileStartingWorkingHour || secObj.startingWorkingHours,
            endingWorkingHours : obj.profileEndingWorkingHour || secObj.endingWorkingHours,
            enableNewTrack : obj.profileEnableNewTrack || secObj.enableNewTrack,
            timeStepsInMinutes : obj.profileTimeInMinutes || secObj.timeStepsInMinutes,
            subOrUnsub : obj.profileSubOrUnsub || secObj.subOrUnsub,
            isSessionActive : true,
            userProfileRef : secObj.userProfileRef
        })

        dispatch(profileGetData(secObj._id))
    }
    catch(e){
        console.log(e)
    }

} 

export const profileSignOut = (): any => async( dispatch : Dispatch<ProfileDispatchHandler> ) : Promise<void> => {

    try{
        await axios.patch('https://my-first-masai-json-server.herokuapp.com/temporaryLogin', {
            username: "",
            email: "",
            password: "",
            isAuthed: false,
            country: "",
            companyName: "",
            companySize: "",
            mobile: "",
        })
    }
    catch(e){
        console.log(e)
    }

} 


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

export const ProfileStartOfWorkingHoursAction = ( value : string ): ProfileStartOfWorkingHours => {

    return {
        type : PROFILE_START_OF_WORKING_HOURS,
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

export const ProfileGetIdAction = ( value : string ): ProfileGetId => {

    return {
        type : PROFILE_GET_ID,
        payload : value
    }   

}

export const ProfileGetUserDataByIdAction = ( data : gettedProfileDataForOnePerson ): ProfileGetUserDataById =>{

    return {
        type : PROFILE_GET_USER_PROFILE_DATA_BY_ID,
        payload : data
    }

}