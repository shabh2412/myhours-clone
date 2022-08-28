export const TRACK_INPUT_ADD_CLIENT_OR_PROJECT = "TRACK_INPUT_ADD_CLIENT_OR_PROJECT"
export const TRACK_INPUT_ADD_TASK = "TRACK_INPUT_ADD_TASK"
export const TRACK_INPUT_ADD_TAGS = "TRACK_INPUT_ADD_TAGS"
export const TRACK_INPUT_ADD_DESCRIPTION = "TRACK_INPUT_ADD_DESCRIPTION"
export const TRACK_INPUT_SET_DATA_OF_QUERY = "TRACK_INPUT_SET_DATA_OF_QUERY"
export const TRACK_QUERY_LOADING_STATE = "TRACK_QUERY_LOADING_STATE"
export const TRACK_QUERY_ERROR_STATE = "TRACK_QUERY_ERROR_STATE"
export const TRACK_QUERY_SUCCESS_STATE_FOR_CLIENT = "TRACK_QUERY_SUCCESS_STATE"
export const TRACK_QUERY_SUCCESS_STATE_FOR_PROJECT = "TRACK_QUERY_SUCCESS_STATE_FOR_PROJECT"
export const TRACK_JUST_CARRY_CLIENT_OR_PROJECT = "TRACK_JUST_CARRY_CLIENT_OR_PROJECT"
export const TRACK_TASK_SUCCESS_STATE = "TRACK_TASK_SUCCESS_STATE"
export const TRACK_JUST_CARRY_TASK = "TRACK_JUST_CARRY_TASK"
export const TRACK_ADD_DESCRIPTION = "TRACK_ADD_DESCRIPTION"
export const TRACK_TIME_GAP = "TRACK_TIME_GAP"
export const TRACK_TIME_LOG_ARR = "TRACT_TIME_LOG_ARR"

export interface AddedTimeLog {
    carryingProjectOrClient : string,
    carryingTask : string,
    carryingDescription : string,
    carryingTimeGap : string
}


export interface ClientInputQuerySearch {
    _id : string,
    name : string
}

export interface TaskInputQuerySearch {
    _id : string,
    taskName : string
}

export interface TrackInputAddClientOrProject {
    type : typeof TRACK_INPUT_ADD_CLIENT_OR_PROJECT,
    payload : string
}

export interface TrackInputAddTask {
    type : typeof TRACK_INPUT_ADD_TASK,
    payload : string 
}

export interface TrackInputAddTags {
    type : typeof TRACK_INPUT_ADD_TAGS,
    payload : string
}

export interface TrackInputAddDescription {
    type : typeof TRACK_INPUT_ADD_DESCRIPTION,
    payload : string 
}

export interface TrackQueryLoadingState {
    type : typeof TRACK_QUERY_LOADING_STATE,
    payload : boolean
}

export interface TrackQuerySuccessStateForClient {
    type : typeof TRACK_QUERY_SUCCESS_STATE_FOR_CLIENT,
    payload : ClientInputQuerySearch[]
}

export interface TrackQuerySuccessStateForProject {
    type: typeof TRACK_QUERY_SUCCESS_STATE_FOR_PROJECT,
    payload : ClientInputQuerySearch[]
}

export interface TrackQueryErrorState {
    type : typeof TRACK_QUERY_ERROR_STATE,
    payload : boolean
}

export interface TrackJustCarryClientOrProject {
    type : typeof TRACK_JUST_CARRY_CLIENT_OR_PROJECT,
    payload : string
}

export interface TrackTaskSuccessState{
    type : typeof TRACK_TASK_SUCCESS_STATE,
    payload : TaskInputQuerySearch[]
}

export interface TrackJustCarryTask {
    type : typeof TRACK_JUST_CARRY_TASK,
    payload : string
}

export interface TrackAddDescription {
    type: typeof TRACK_ADD_DESCRIPTION,
    payload : string
}

export interface TrackTimeGap {
    type : typeof TRACK_TIME_GAP,
    payload : string
}

export interface TrackTimeLogArr {
    type : typeof TRACK_TIME_LOG_ARR,
    payload : AddedTimeLog[]
}

export type TrackDispatchHandler = TrackTimeLogArr | TrackTimeGap | TrackAddDescription | TrackJustCarryTask | TrackTaskSuccessState | TrackJustCarryClientOrProject | TrackQuerySuccessStateForProject | TrackQueryErrorState | TrackQuerySuccessStateForClient | TrackQueryLoadingState | TrackInputAddDescription | TrackInputAddTags | TrackInputAddTask | TrackInputAddClientOrProject