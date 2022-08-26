import axios, { Axios, AxiosResponse } from "axios"
import { Dispatch } from "redux";
import { initialTeamState } from "../../Pages/Dashboard/TeamFormPage"
import { ADD_TEAM_MEMBER, DELETE_TEAM_MEMBER, DispatchHandler, GET_TEAM_MEMBERS } from "./action.types";

export type action = {
    type : string,
    payload : initialTeamState[];
}

const url = "https://my-hours.herokuapp.com/teamMember";

export const get_members = ():any => async (dispatch:Dispatch<DispatchHandler>):Promise<void> => {
    try {
        const res = await axios.get(url);
        console.log(res.data);
        dispatch({
            type : GET_TEAM_MEMBERS,
            payload : res.data
        })
    } catch(e) {
        console.log('something went wrong');
    }
}

export const add_member = (data:initialTeamState):any => async (dispatch:Dispatch<action>):Promise<void> => {
    try {
        await axios.post(url,data);
        dispatch(get_members());
    } catch(e) {
        console.log('something went wrong');
    }
}

// export const update_member = () => {
//     return {

//     }
// }

export const delete_member = (id:number) => {
    return {
        type : DELETE_TEAM_MEMBER,
        payload : id
    }
}