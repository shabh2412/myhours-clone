import { initialTeamState } from "../../Pages/Dashboard/TeamFormPage";

export const GET_TEAM_MEMBERS = "GET_TEAM_MEMBERS";
export const ADD_TEAM_MEMBER = "ADD_TEAM_MEMBER";
export const UPDATE_TEAM_MEMBER = "UPDATE_TEAM_MEMBER";
export const DELETE_TEAM_MEMBER = "DELETE_TEAM_MEMBER";


export interface GET_TEAM_MEMBER {
    type : typeof GET_TEAM_MEMBERS,
    payload : initialTeamState[]
}

export type DispatchHandler = GET_TEAM_MEMBER;