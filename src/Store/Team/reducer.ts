import axios from "axios";
import { ADD_TEAM_MEMBER, DELETE_TEAM_MEMBER, GET_TEAM_MEMBERS } from "./action.types";
import { initialTeamState } from "../../Pages/Dashboard/TeamFormPage"
import { action } from "./actions";

const startingState:initialTeamState[] = [];

export const teamReducer = (state = startingState,{type,payload}:action) => {
    switch(type){
        case GET_TEAM_MEMBERS : {
           return [
           ...payload
           ]
        } case ADD_TEAM_MEMBER : {
            return state;
        } case DELETE_TEAM_MEMBER : {
            return state;
        } default : {
            return state;
        }
    }
}