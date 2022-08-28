import { AddedTimeLog, ClientInputQuerySearch, TaskInputQuerySearch, TRACK_ADD_DESCRIPTION, TRACK_INPUT_ADD_CLIENT_OR_PROJECT, TRACK_INPUT_ADD_DESCRIPTION, TRACK_INPUT_ADD_TAGS, TRACK_INPUT_ADD_TASK, TRACK_JUST_CARRY_CLIENT_OR_PROJECT, TRACK_JUST_CARRY_TASK, TRACK_QUERY_ERROR_STATE, TRACK_QUERY_LOADING_STATE, TRACK_QUERY_SUCCESS_STATE_FOR_CLIENT, TRACK_QUERY_SUCCESS_STATE_FOR_PROJECT, TRACK_TASK_SUCCESS_STATE, TRACK_TIME_GAP, TRACK_TIME_LOG_ARR } from './actionType';
import { TrackDispatchHandler } from "./actionType";

export type addInput = {
    inputAddClient : string,
    inputAddTask : string,
    inputAddTags : string,
    inputAddDescription : string
}

export interface TrackInit {
    forInput : addInput,
    isLoading? : boolean,
    isError? : boolean,
    getClient : ClientInputQuerySearch[],
    getProject : ClientInputQuerySearch[],
    getTask : TaskInputQuerySearch[],
    carryingProjectOrClient : string,
    carryingTask : string,
    carryingDescription : string,
    carryingTimeGap : string,
    timeLogArr : AddedTimeLog[]
} 

const TackInitialState: TrackInit = {

   forInput : {
    inputAddClient : "",
    inputAddTask : "",
    inputAddTags : "",
    inputAddDescription : ""
   },
   getClient : [],
   getProject : [],
   getTask : [],
   carryingProjectOrClient : "",
   carryingTask : "",
   carryingDescription : "",
   carryingTimeGap :"",
   timeLogArr : JSON.parse(localStorage.getItem("timeLogArr") || "[]")

}


export const trackReducer = ( state = TackInitialState, { type,payload } : TrackDispatchHandler ): TrackInit => {
    switch(type) {
        case TRACK_INPUT_ADD_CLIENT_OR_PROJECT : {
            return{
                ...state,
                forInput : {
                    ...state.forInput,
                    inputAddClient : payload
                 }
            }
        }
        case TRACK_INPUT_ADD_TASK : {
            return{
                ...state,
               forInput : {
                    ...state.forInput,
                    inputAddTask : payload
               }
            }
        }
        case TRACK_INPUT_ADD_TAGS : {
            return{
                ...state,
               forInput : {
                    ...state.forInput,
                    inputAddTags : payload
               }
            }
        }
        case TRACK_INPUT_ADD_DESCRIPTION : {
            return{
                ...state,
                forInput : {
                    ...state.forInput,
                    inputAddDescription : payload
                      }
            }
        }
        case TRACK_QUERY_SUCCESS_STATE_FOR_CLIENT : {
            return {
                ...state,
                isLoading : false,
                getClient : [...payload],
                isError : false
            }
        }
        case TRACK_QUERY_LOADING_STATE : {
            return {
                ...state,
                isLoading : payload
            }
        }
        case TRACK_QUERY_ERROR_STATE : {
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        }
        case TRACK_QUERY_SUCCESS_STATE_FOR_PROJECT : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                getProject : [ ...payload ]
            }
        }
        case TRACK_JUST_CARRY_CLIENT_OR_PROJECT : {
            return{
                ...state,
                carryingProjectOrClient : payload,
                forInput : {
                    ...state.forInput,
                    inputAddClient : ""
                }
            }
        }
        case TRACK_TASK_SUCCESS_STATE : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                getTask : [...payload]
            }
        }
        case TRACK_JUST_CARRY_TASK :{ 
            return {
                ...state,
                carryingTask : payload,
                forInput : {
                    ...state.forInput,
                    inputAddTask : ""
                }
            }   
        } 
        case TRACK_ADD_DESCRIPTION : {
            return {
                ...state,
                carryingDescription : payload
            }
        }
        case TRACK_TIME_GAP : {
            return {
                ...state,
                carryingTimeGap : payload
            }
        }
        case TRACK_TIME_LOG_ARR : {
            // localStorage.setItem("timeLogArr",JSON.stringify([...state.timeLogArr,...payload]));
            const newState = {
                ...state,
                timeLogArr : [ ...state.timeLogArr,...payload ]
            }
            localStorage.setItem("timeLogArr", JSON.stringify(newState.timeLogArr));
            return newState
        }
        default : return state
    }
}