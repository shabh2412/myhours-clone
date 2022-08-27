import axios, { Axios, AxiosResponse } from "axios"
import { Dispatch } from "redux";
import { initialTeamState } from "../../Pages/Dashboard/TeamFormPage"
import { ADD_TEAM_MEMBER_ERROR, ADD_TEAM_MEMBER_LOADING, DELETE_TEAM_MEMBER_ERROR, DELETE_TEAM_MEMBER_LOADING, DispatchHandler, get_Success, GET_TEAM_MEMBERS_ERROR, GET_TEAM_MEMBERS_LOADING, GET_TEAM_MEMBERS_SUCCESS } from "./action.types";

export type action = {
    type : string,
    payload : initialTeamState[];
}

const url = "https://my-hours.herokuapp.com/teamMember";

export const get_members = (name?:string):any => async (dispatch:Dispatch<DispatchHandler>) => {
    dispatch({
        type : GET_TEAM_MEMBERS_LOADING,
        payload : true
    })
    try {
        let res = await axios.get(`${url}?q=${name || ""}`)
        dispatch(getDataAction(res.data));
        
    } catch(e) {
        dispatch({
            type : GET_TEAM_MEMBERS_ERROR,
            payload : true
        })
    } finally {
        dispatch({
            type : GET_TEAM_MEMBERS_LOADING,
            payload : false
        })
    }
}

export const add_member = (data:initialTeamState):any => async (dispatch:Dispatch<DispatchHandler>):Promise<void> => {
    dispatch({
        type : ADD_TEAM_MEMBER_LOADING,
        payload : true
    })
    try {
        await axios.post(url,data);
        dispatch(get_members());
    } catch(e) {
        dispatch({
            type : ADD_TEAM_MEMBER_ERROR,
            payload : true
        })
    } finally {
        dispatch({
        type : ADD_TEAM_MEMBER_LOADING,
        payload : false
        })
    }
}

export const delete_member = (id:string) => async(dispatch:Dispatch<DispatchHandler>):Promise<void> => {
    dispatch({
        type : DELETE_TEAM_MEMBER_LOADING,
        payload : true
    })
    try {
        await axios.delete(url+"/"+id);
        dispatch(get_members());
    } catch(e) {
        dispatch({
            type : DELETE_TEAM_MEMBER_ERROR,
            payload : true
        })
    } finally {
        dispatch({
        type : DELETE_TEAM_MEMBER_LOADING,
        payload : false
        })
    }
}

export const getDataAction = (data:initialTeamState[]):get_Success => {
    console.log(data);
    return {type : GET_TEAM_MEMBERS_SUCCESS,payload : data}
}