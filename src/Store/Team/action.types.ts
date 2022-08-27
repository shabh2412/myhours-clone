import { initialTeamState } from "../../Pages/Dashboard/TeamFormPage";

export const GET_TEAM_MEMBERS_SUCCESS = "GET_TEAM_MEMBERS_SUCCESS";
export const GET_TEAM_MEMBERS_LOADING = "GET_TEAM_MEMBERS_LOADING";
export const GET_TEAM_MEMBERS_ERROR = "GET_TEAM_MEMBERS_ERROR";
export const ADD_TEAM_MEMBER_LOADING = "ADD_TEAM_MEMBER_LOADING";
export const ADD_TEAM_MEMBER_ERROR = "ADD_TEAM_MEMBER_ERROR"
export const UPDATE_TEAM_MEMBER_LOADING = "UPDATE_TEAM_MEMBER_LOADING";
export const UPDATE_TEAM_MEMBER_ERROR = "UPDATE_TEAM_MEMBER_ERROR";
export const DELETE_TEAM_MEMBER_LOADING = "DELETE_TEAM_MEMBER_LOADING";
export const DELETE_TEAM_MEMBER_ERROR = "DELETE_TEAM_MEMBER_ERROR";


export interface get_Success {
    type : typeof GET_TEAM_MEMBERS_SUCCESS,
    payload : initialTeamState[];
}

export interface get_Error {
    type : typeof GET_TEAM_MEMBERS_ERROR,
    payload : boolean
}

export interface get_Loading {
    type : typeof GET_TEAM_MEMBERS_LOADING,
    payload : boolean;
}

export interface post_Loading {
    type : typeof ADD_TEAM_MEMBER_LOADING,
    payload : boolean
}

export interface post_Error {
    type : typeof ADD_TEAM_MEMBER_ERROR,
    payload : boolean
}

export interface delete_Loading {
    type : typeof DELETE_TEAM_MEMBER_LOADING,
    payload : boolean
}

export interface delete_Error {
    type : typeof DELETE_TEAM_MEMBER_ERROR,
    payload : boolean
}


export type DispatchHandler = get_Success | get_Error | get_Loading | post_Error | post_Loading | post_Error | delete_Error | delete_Loading;