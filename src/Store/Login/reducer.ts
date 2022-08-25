import { loadDataLocalStorage, saveDataLocalStorage, removeDataLocalStorage } from './../../Utils/localData';
import { LoginDispatchHandler, LOGIN_PREGET, LOGIN_SET_EMAIL, LOGIN_SET_PASSWORD, LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_CHANGE_AUTH, LOGGED_IN_RESET_PASSWORD, LOGGED_IN_RESETTED_CONFIRM_PASSWORD, LOGGED_IN_IS_PASSWORD_MATCHING, LOGGED_IN_PASSWORD_CHANGED } from './actionType';

export interface Userr {
    email : string,
    password : string
}

export interface LoginInit {
    isAuthed :  boolean,
    isLoading : boolean,
    isError? : boolean,
    userId : string,
    userobjLogin : Userr,
    resetPassword : string,
    resetConfirmPassword : string,
    isPasswordMatches? : boolean,
    passwordChanged? : boolean
}

const LogInInititalState: LoginInit = {

    isAuthed : false,
    isLoading : false,
    isError : false,
    userId : loadDataLocalStorage('auth_Cachehash') || "",
    userobjLogin : {
        email : "",
        password : ""
    },
    resetPassword : "",
    resetConfirmPassword : "",
    isPasswordMatches : false,
    passwordChanged : false

} 

export const loginReducer = ( state = LogInInititalState, { type , payload } : LoginDispatchHandler ): LoginInit => {

    switch(type){
        case LOGIN_SET_EMAIL : {
            return {
                ...state,
                userobjLogin : {
                    ...state.userobjLogin,
                    email : payload
                }
            }
        }
        case LOGIN_SET_PASSWORD : {
            return {
                ...state,
                userobjLogin : {
                    ...state.userobjLogin,
                    password : payload
                }
            }
        }
        case LOGIN_PREGET : {
            return {
                ...state,
                isLoading : payload
            }
        }
        case LOGIN_SUCCESS : {
            saveDataLocalStorage('auth_Cachehash', payload)
            return {
                ...state,
                isLoading : false,
                isError : false,
                isAuthed : true,
                userId : payload
            }
        }
        case LOGIN_FAILURE : {
            removeDataLocalStorage('auth_Cachehash')
            return {
                ...state,
                isLoading : false,
                isError : payload,
                isAuthed : false,
            }
        }
        case LOGIN_CHANGE_AUTH : {
            return {
                ...state,
                isAuthed : payload
            }
        }
        case LOGGED_IN_RESET_PASSWORD : {

            return {
                ...state,
                resetPassword : payload
            }
        }
        case LOGGED_IN_RESETTED_CONFIRM_PASSWORD : {
            return {
                ...state,
                resetConfirmPassword : payload
            }
        }
        case LOGGED_IN_IS_PASSWORD_MATCHING : {
            return {
                ...state,
                isPasswordMatches : payload
            }
        }
        case LOGGED_IN_PASSWORD_CHANGED : {
            return {
                ...state,
                passwordChanged : payload,
                isLoading : false
            }
        }
        default : return state

    }

}