import { useNavigate } from 'react-router-dom';
import { loadDataLocalStorage, removeDataLocalStorage } from './../Utils/localData';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RootReducer } from './../Store/store';
import { useSelector } from 'react-redux';
import { ProfileEnableNewTrackAction, ProfileEndOfWorkingHoursAction, ProfileFirstDayOfWeekAction, profileGetData, profilePostData, ProfileSetEmailAction, ProfileSetUsernameAction, profileSignOut, ProfileStartOfWorkingHoursAction, ProfileSubOrUnsubWeeklyAction, ProfileTimeStepsInMinutesAction, profileUpdatingData, ProfileWorkingOnWeekendsAction } from '../Store/Profile/action';
import { ProfileInit } from '../Store/Profile/reducer';


export type ReturnUserProfile = {

    handleFullNameInput : (e : string) => void, 
    handleEmailInput : (e : string) => void,
    handleWorkingOnWeekends : (e : boolean) => void,
    handleDaySelect : (e : string) => void,
    handleStartWorkingHours : (e : string) => void,
    handleEndworkingHours : (e : string) => void,
    handleEnableNewTrackAction : (e : boolean) => void,
    handleTimeSteps : (e : string) => void,
    handleSubOrUnsub : (e : boolean) => void,
    state : ProfileInit,
    handleSubmitData : () => void,
    handleRefreshandGet : () => void,
    handleSignOut : () => void

}


const useProfile = () : ReturnUserProfile => {

    const state = useSelector((state : RootReducer)=> state.profile)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleFullNameInput = (e: string) : void => {
        dispatch(ProfileSetUsernameAction(e))
    }

    const handleEmailInput = (e: string) : void => {
        dispatch(ProfileSetEmailAction(e))
    }

    const handleWorkingOnWeekends = (e : boolean ) : void => {

        if(e)
        {
            dispatch(ProfileWorkingOnWeekendsAction(true))
        }
        else{
            dispatch(ProfileWorkingOnWeekendsAction(false))
        }

    }

    const handleDaySelect = ( e:string ) : void => {
        if(e=="")
        {
            dispatch(ProfileFirstDayOfWeekAction("Monday"))
        }
        else{
            dispatch(ProfileFirstDayOfWeekAction(e))
        }
    }

    const handleStartWorkingHours = ( e: string ) : void => {
        dispatch(ProfileStartOfWorkingHoursAction(e))
    }

    const handleEndworkingHours = ( e: string ) : void => {
        dispatch(ProfileEndOfWorkingHoursAction(e))
    }

    const handleEnableNewTrackAction = (e : boolean) : void => {

       if(e===true)
       {
         dispatch(ProfileEnableNewTrackAction(true))
       }
       else{
        dispatch(ProfileEnableNewTrackAction(false))
       }
    }

    const handleTimeSteps = ( e:string ) : void => {
        dispatch(ProfileTimeStepsInMinutesAction(e))
    }

    const handleSubOrUnsub = ( e: boolean ) : void => {

        if(e===true)
        {
            dispatch(ProfileSubOrUnsubWeeklyAction(true))
        }
        else
        {
            dispatch(ProfileSubOrUnsubWeeklyAction(false))
        }

    }

    const handleSubmitData = () :void => {  
        if(!(loadDataLocalStorage('userProfileMd5Hash')))
        {
            dispatch(profilePostData(state))
        }
        else
        {
            dispatch(profileUpdatingData(state, state.profileGettedsUserData))
        }
    
    } 

    let handleRefreshandGet = () =>{
        dispatch(profileGetData(state.profileUserId))
    }

    const handleSignOut = () => {
        localStorage.clear()
        dispatch(profileSignOut())
        navigate("/")
    }

    useEffect(()=>{
        if(!!(loadDataLocalStorage('userProfileMd5Hash')))
        {
            dispatch(profileGetData(state.profileUserId))
        }
    },[state.profileUserId])

    return { handleSignOut,handleRefreshandGet,handleSubmitData,state,handleSubOrUnsub,handleTimeSteps,handleEnableNewTrackAction,handleEndworkingHours,handleFullNameInput,handleEmailInput,handleWorkingOnWeekends,handleDaySelect,handleStartWorkingHours }

}

export default useProfile