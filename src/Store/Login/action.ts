import { Userr } from './reducer';
import axios from 'axios';
import { Dispatch } from 'react';
import { LoginSetEmail, LoginSetPassword, LOGIN_SET_EMAIL, LOGIN_SET_PASSWORD, LoginPreGet, LOGIN_PREGET, LoginSuccess, LOGIN_SUCCESS, LoginFailure, LOGIN_FAILURE, LoginDispatchHandler, LoginAuthChange, LOGIN_CHANGE_AUTH, LoginResetPassword, LOGGED_IN_RESET_PASSWORD, LoginResetConfirmPassword, LOGGED_IN_RESETTED_CONFIRM_PASSWORD, LoginPaswordMatching, LOGGED_IN_IS_PASSWORD_MATCHING, LoginPasswordChanged, LOGGED_IN_PASSWORD_CHANGED } from './actionType';



export const checkUserExistsOrNotonLogIN = ( obj: Userr ): any => async ( dispatch : Dispatch<LoginDispatchHandler> ) : Promise<void> => {
    
    dispatch(logPreGet(true))
    try{

        let data = await axios.get('https://my-hours.herokuapp.com/users/validUser',{
            headers : {
                token : `${obj.email}:${obj.password}`
            }
        })
        let newId = data.data._id + "_" + Math.floor(Math.random()*100000000)
        dispatch(LogInGet(newId))
    }
    catch(e){
        dispatch(LogInError(true))
    }
}

export const resetThePasswordInBackend = ( id: string, pass: string ): any => async( dispatch : Dispatch<LoginDispatchHandler> ) : Promise<void> => {

    dispatch(logPreGet(true))
    try {
        await axios.patch(`https://my-hours.herokuapp.com/users/${id}`, {
            password : pass
        })
        dispatch(passwordChanged(true))
    }
    catch(e){

    }

}

export const logInAuthChange = (value : boolean) : LoginAuthChange => {

    return {
        type : LOGIN_CHANGE_AUTH,
        payload : value
    }

}

export const setEmail = ( e : string ): LoginSetEmail => {
    return {
        type : LOGIN_SET_EMAIL,
        payload : e
    }
}

export const setPassword = ( e : string ): LoginSetPassword => {
    return {
        type : LOGIN_SET_PASSWORD,
        payload : e
    }
}

export const logPreGet = ( value : boolean ) : LoginPreGet => {

    return {
        type : LOGIN_PREGET,
        payload : value
    }

}

export const LogInGet = ( value : string ): LoginSuccess => {

    return {
        type : LOGIN_SUCCESS,
        payload : value
    }

}

export const LogInError = ( value : boolean ): LoginFailure => {

    return {
        type : LOGIN_FAILURE,
        payload : value
    }

}

export const LoginResetPasswordAction = ( e :string ) : LoginResetPassword => {

    return {
        type : LOGGED_IN_RESET_PASSWORD,
        payload : e
    }

}

export const LoginResetConfirmPasswordAction = ( e: string ) : LoginResetConfirmPassword => {

    return {
        type : LOGGED_IN_RESETTED_CONFIRM_PASSWORD,
        payload : e
    }

}

export const isPasswordMatching = ( value : boolean ) : LoginPaswordMatching => {

    return {
        type : LOGGED_IN_IS_PASSWORD_MATCHING,
        payload : value
    }

} 

export const passwordChanged = ( value : boolean ): LoginPasswordChanged => {

    return {
        type : LOGGED_IN_PASSWORD_CHANGED,
        payload : value
    }

}