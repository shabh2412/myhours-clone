import axios from "axios";
import {ADD_TEAM_MEMBER_ERROR, ADD_TEAM_MEMBER_LOADING,DELETE_TEAM_MEMBER_ERROR, DELETE_TEAM_MEMBER_LOADING,DispatchHandler,GET_TEAM_MEMBERS_ERROR, GET_TEAM_MEMBERS_LOADING, GET_TEAM_MEMBERS_SUCCESS } from "./action.types";
import { initialTeamState } from "../../Pages/Dashboard/TeamFormPage"
import { action } from "./actions";
import TeamMembers from "../../Pages/Dashboard/TeamMembers";
import { IoTrendingUpSharp } from "react-icons/io5";


type teamStateType = {
    data : initialTeamState[],
    get : {
        loading : boolean,
        error : boolean,
    },
    post : {
        loading : boolean,
        error : boolean
    },
    _delete : {
        loading : boolean,
        error : boolean
    }
}

const startingState = {
    data : [],
    get : {
        loading : false,
        error : false,
    },
    post : {
        loading : false,
        error : false
    }, _delete : {
        loading : false,
        error : false
    }
};

export const teamReducer = (state:teamStateType = startingState,{type,payload}:DispatchHandler):teamStateType => {
    switch(type){
        case GET_TEAM_MEMBERS_SUCCESS : {
            console.log("gts",payload);
           return  {
            ...state,
            data : payload,
            }
        } case GET_TEAM_MEMBERS_LOADING: {
            return {
                ...state,
                get : {
                    ...state.get,
                    loading : !state.get.loading,
                    error : !state.get.error
                }
            }
        } case GET_TEAM_MEMBERS_ERROR : {
            return {
                 ...state,
                get : {
                    ...state.get,
                    error :!state.get.error,
                    loading : !state.get.loading 
                }
            }
        } case ADD_TEAM_MEMBER_LOADING : {
            return {
                ...state,
                post : {
                    ...state.post,
                    loading : !state.post.loading 
                }
            }
        } case ADD_TEAM_MEMBER_ERROR : {
            return {
                 ...state,
                post : {
                    ...state.post,
                    error : !state.post.error 
                }
            }
        } case DELETE_TEAM_MEMBER_LOADING : {
            return {
                ...state,
                _delete : {
                    ...state._delete,
                    loading : !state._delete.loading
                }
            }
        } case DELETE_TEAM_MEMBER_ERROR : {
            return {
                ...state,
                _delete : {
                    ...state._delete,
                    error : !state._delete.error
                }
            }
        } default : {
            return state;
        }
    }
}