import axios from 'axios';
import { Dispatch } from 'redux';
import { TrackDispatchHandler, TrackQueryErrorState, TRACK_QUERY_ERROR_STATE, TrackQuerySuccessStateForClient, TRACK_QUERY_SUCCESS_STATE_FOR_CLIENT, ClientInputQuerySearch, TrackQueryLoadingState, TRACK_QUERY_LOADING_STATE, TrackQuerySuccessStateForProject, TRACK_QUERY_SUCCESS_STATE_FOR_PROJECT, TrackJustCarryClientOrProject, TrackInputAddTags, TrackInputAddTask, TRACK_JUST_CARRY_CLIENT_OR_PROJECT, TrackTaskSuccessState, TaskInputQuerySearch, TRACK_TASK_SUCCESS_STATE, TrackJustCarryTask, TRACK_JUST_CARRY_TASK, TrackAddDescription, TRACK_ADD_DESCRIPTION, TrackTimeGap, TRACK_TIME_GAP, TrackTimeLogArr, AddedTimeLog, TRACK_TIME_LOG_ARR } from './actionType';
import { TrackInputAddClientOrProject, TrackInputAddDescription, TRACK_INPUT_ADD_CLIENT_OR_PROJECT, TRACK_INPUT_ADD_DESCRIPTION, TRACK_INPUT_ADD_TAGS, TRACK_INPUT_ADD_TASK } from "./actionType"


export const getClientDataThorughQuery = ( query :string ): any => async( dispatch : Dispatch<TrackDispatchHandler> ): Promise<void> => {

    dispatch(TrackQueryLoadingStateAction(true))
    try {
        let data = await axios.get(`https://my-hours.herokuapp.com/client/onlyName?q=${query}`)
        if(data.data.length>0)
        {
            dispatch(TrackQuerySuccessStateActionForClient(data.data))
        }
        else
        {
            dispatch(TrackQueryLoadingStateAction(false))
        }
    }
    catch(e){
        dispatch(TrackQueryErrorStateAction(true))
    }

}

export const getProjectDataThorughQuery = ( query :string ): any => async( dispatch : Dispatch<TrackDispatchHandler> ): Promise<void> => {

    dispatch(TrackQueryLoadingStateAction(true))
    try {
        let data = await axios.get(`https://my-hours.herokuapp.com/project/onlyName?q=${query}`)
        if(data.data.length>0)
        {
            dispatch(TrackQuerySuccessStateActionForProject(data.data))
        }
        else
        {
            dispatch(TrackQueryLoadingStateAction(false))
        }
    }
    catch(e){
        dispatch(TrackQueryErrorStateAction(true))
    }

}

export const getProjectTaskDataThroughQuery = ( query : string ): any => async( dispatch : Dispatch<TrackDispatchHandler> ): Promise<void> => { 

    dispatch(TrackQueryLoadingStateAction(true))
    try {
        let data = await axios.get(`https://my-hours.herokuapp.com/task/onlyName?q=${query}`)
        if(data.data.length>0)
        {
            dispatch(TrackTaskSuccessStateAction(data.data))
        }
        else
        {
            dispatch(TrackQueryLoadingStateAction(false))
        }
    }
    catch(e){
        dispatch(TrackQueryErrorStateAction(true))
    }

} 

export const TrackTaskSuccessStateAction = ( data: TaskInputQuerySearch[] ): TrackTaskSuccessState => {

    return {
        type : TRACK_TASK_SUCCESS_STATE,
        payload : data
    }

}

export const TrackQueryLoadingStateAction = ( value : boolean ) : TrackQueryLoadingState  =>{
    return{
        type : TRACK_QUERY_LOADING_STATE,
        payload : value
    }
}

export const TrackQuerySuccessStateActionForClient = ( data : ClientInputQuerySearch[] ): TrackQuerySuccessStateForClient => {
    return {
        type : TRACK_QUERY_SUCCESS_STATE_FOR_CLIENT,
        payload : data
    }
}

export const TrackQuerySuccessStateActionForProject = ( data : ClientInputQuerySearch[] ): TrackQuerySuccessStateForProject => {
    return {
        type : TRACK_QUERY_SUCCESS_STATE_FOR_PROJECT,
        payload : data 
    }
}

export const TrackQueryErrorStateAction = (value : boolean): TrackQueryErrorState => {
    return {
        type : TRACK_QUERY_ERROR_STATE,
        payload : value
    }
} 

export const TrackInputAddClientOrProjectAction = ( e :string ): TrackInputAddClientOrProject => {
    return {
        type : TRACK_INPUT_ADD_CLIENT_OR_PROJECT,
        payload : e
    }
}  

export const TrackInputAddDescriptionAction = (e : string): TrackInputAddDescription => {

    return {
        type : TRACK_INPUT_ADD_DESCRIPTION,
        payload : e
    }

}

export const TrackInputAddTagsAction = ( e: string ): TrackInputAddTags => {

    return {
        type : TRACK_INPUT_ADD_TAGS,
        payload : e
    }

}

export const TrackInputAddTaskAction = ( e:string ): TrackInputAddTask => {
    
    return {
        type  : TRACK_INPUT_ADD_TASK,
        payload : e
    }

}

export const TrackJustCarryClientOrProjectAction = ( e:string ): TrackJustCarryClientOrProject => { 


    return {
        type : TRACK_JUST_CARRY_CLIENT_OR_PROJECT,
        payload : e
    }

}

export const TrackJustCarryTaskAction = ( e:string ):TrackJustCarryTask => {
    return {
        type : TRACK_JUST_CARRY_TASK,
        payload : e
    }
}

export const TrackAddDescriptionAction = ( e:string ): TrackAddDescription => {
    return {
        type: TRACK_ADD_DESCRIPTION,
        payload : e
    }
}  

export const TrackTimeGapAction = ( e:string ): TrackTimeGap => {
    return {
        type : TRACK_TIME_GAP,
        payload : e
    }
}

export const TrackTimeLogArrAction = ( obj : AddedTimeLog[] ): TrackTimeLogArr => {

    return {
        type : TRACK_TIME_LOG_ARR,
        payload : obj
    }

}